export function applyChaos({ delay, error, offline }, signal) {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject({ type: "abort", message: "Request aborted" });
      return;
    }

    const timeoutId = setTimeout(() => {
      if (offline) {
        reject({
          type: "offline",
          message: "Network unavailable",
        });
        return;
      }

      if (error !== "none") {
        reject({
          type: "http",
          status: Number(error),
          message: `HTTP ${error} error`,
        });
        return;
      }

      resolve({
        data: [
          { id: 1, name: "Alpha", status: "active" },
          { id: 2, name: "Beta", status: "pending" },
          { id: 3, name: "Gamma", status: "active" },
        ],
      });
    }, delay);

    // Abort handling
    signal?.addEventListener("abort", () => {
      clearTimeout(timeoutId);
      reject({ type: "abort", message: "Request aborted" });
    });
  });
}
