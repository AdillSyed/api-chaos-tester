export function applyChaos({ delay, error, offline }) {
  return new Promise((resolve, reject) => {
    // Offline simulation
    if (offline) {
      reject({
        type: "offline",
        message: "Network unavailable",
      });
      return;
    }

    // Artificial delay
    setTimeout(() => {
      // Forced error simulation
      if (error !== "none") {
        reject({
          type: "http",
          status: Number(error),
          message: `HTTP ${error} error`,
        });
        return;
      }

      // Success path
      resolve({
        data: [
          { id: 1, name: "Alpha", status: "active" },
          { id: 2, name: "Beta", status: "pending" },
          { id: 3, name: "Gamma", status: "active" },
        ],
      });
    }, delay);
  });
}
