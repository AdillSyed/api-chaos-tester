import { useContext } from "react";
import { ChaosContext } from "./ChaosContext";

export function useChaos() {
  const ctx = useContext(ChaosContext);

  if (!ctx) {
    throw new Error("useChaos must be used within ChaosProvider");
  }

  return ctx;
}
