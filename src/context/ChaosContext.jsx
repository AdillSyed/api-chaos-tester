import { createContext, useState } from "react";

export const ChaosContext = createContext(null);

export function ChaosProvider({ children }) {
  const [config, setConfig] = useState({
    delay: 0,
    error: "none",
    offline: false,
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [data, setData] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);


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
}}
    >
      {children}
    </ChaosContext.Provider>
  );
}