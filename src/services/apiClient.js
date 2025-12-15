import { applyChaos } from "./chaosEngine";

export function fetchData(config, signal) {
  return applyChaos(config, signal);
}
