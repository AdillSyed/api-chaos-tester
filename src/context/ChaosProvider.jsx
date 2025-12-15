import { useState } from "react";
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
        }}
    >
      {children}
    </ChaosContext.Provider>
  );
}