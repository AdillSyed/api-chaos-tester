import { useState, useEffect, useRef } from "react";
import { ChaosContext } from "./ChaosContext";
import { fetchData } from "../services/apiClient";

export function ChaosProvider({ children }) {
  const [config, setConfig] = useState({
    delay: 0,
    error: "none",
    offline: false,
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [data, setData] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);
  const [logs, setLogs] = useState([]);
  const [loggingEnabled, setLoggingEnabled] = useState(true);
  const [userPresets, setUserPresets] = useState(() => {
    const stored = localStorage.getItem("chaos:userPresets");
    return stored ? JSON.parse(stored) : [];
  });

  const abortRef = useRef(null);

  useEffect(() => {
    localStorage.setItem(
    "chaos:userPresets",
    JSON.stringify(userPresets)
    );
  }, [userPresets]);

  const addLog = (entry) => {
    if (!loggingEnabled) return;

    setLogs((prev) => [
      {
        id: crypto.randomUUID(),
        timestamp: new Date().toLocaleTimeString(),
        ...entry,
      },
      ...prev,
    ]);
  };

  const clearLogs = () => {
    setLogs([]);
  };

  const exportLogs = () => {
    const payload = {
      exportedAt: new Date().toISOString(),
      total: logs.length,
      logs,
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = `api-chaos-logs-${Date.now()}.json`;
    a.click();

    URL.revokeObjectURL(url);
  };

  const savePreset = (preset) => {
    setUserPresets((prev) => [
      {
        ...preset,
        id: crypto.randomUUID(),
        system: false,
      },
      ...prev,
    ]);
  };

  const updatePreset = (id, updated) => {
    setUserPresets((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updated } : p))
    );
  };

  const deletePreset = (id) => {
    setUserPresets((prev) => prev.filter((p) => p.id !== id));
  };

  const runRequest = async () => {
    if (abortRef.current && status === "loading") {
      abortRef.current.abort();
      addLog({
        type: "abort",
        message: "Previous request aborted",
      });
    }

    const controller = new AbortController();
    abortRef.current = controller;

    addLog({
      type: "request",
      message: "Request initiated",
      meta: config,
    });

    setStatus("loading");
    setErrorInfo(null);
    setData(null);

    try {
      const response = await fetchData(config, controller.signal);

      addLog({
        type: "success",
        message: "Request completed successfully",
      });

      setData(response.data);
      setStatus("success");
    } catch (err) {
      if (err.type === "abort") return;

      addLog({
        type: "error",
        message: err.message,
      });

      setErrorInfo(err);
      setStatus("error");
    } finally {
      abortRef.current = null;
    }
  };

  return (
    <ChaosContext.Provider
      value={{
        config,
        setConfig,
        status,
        setStatus,
        data,
        setData,
        errorInfo,
        setErrorInfo,
        logs,
        addLog,
        clearLogs,
        exportLogs,
        loggingEnabled,
        setLoggingEnabled,
        userPresets,
        savePreset,
        updatePreset,
        deletePreset,
        runRequest,
      }}
    >
      {children}
    </ChaosContext.Provider>
  );
}