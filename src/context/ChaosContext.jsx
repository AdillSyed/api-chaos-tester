import { createContext, useState } from "react";

const ChaosContext = createContext(null);

export function ChaosProvider({ children }) {
  const [config, setConfig] = useState({
    delay: 0,
    error: "none",
    offline: false,
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  return (
    <ChaosContext.Provider
      value={{
        config,
        setConfig,
        status,
        setStatus,
      }}
    >
      {children}
    </ChaosContext.Provider>
  );
}