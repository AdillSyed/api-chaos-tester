import { useState, useEffect } from "react";
import { ChaosContext } from "./ChaosContext";

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
        loggingEnabled,
        setLoggingEnabled,
        userPresets,
        savePreset,
        updatePreset,
        deletePreset,
        }}
    >
      {children}
    </ChaosContext.Provider>
  );
}