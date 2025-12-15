import { applyChaos } from "./chaosEngine";

export async function fetchData(config) {
  try {
    const response = await applyChaos(config);
    return response;
  } catch (err) {
    throw err;
  }
}
