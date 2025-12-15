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

  const addLog = (entry) => {
    setLogs((prev) => [
      {
        id: crypto.randomUUID(),
        timestamp: new Date().toLocaleTimeString(),
        ...entry,
      },
      ...prev,
    ]);
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
        }}
    >
      {children}
    </ChaosContext.Provider>
  );
}