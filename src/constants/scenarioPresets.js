export const SCENARIO_PRESETS = [
  {
    id: "slow-api",
    label: "Slow API",
    description: "Simulate high latency responses",
    config: {
      delay: 4000,
      error: "none",
      offline: false,
    },
  },
  {
    id: "server-error",
    label: "Server Error",
    description: "Force HTTP 500 failure",
    config: {
      delay: 0,
      error: "500",
      offline: false,
    },
  },
  {
    id: "unauthorized",
    label: "Unauthorized",
    description: "Force HTTP 401 response",
    config: {
      delay: 0,
      error: "401",
      offline: false,
    },
  },
  {
    id: "offline",
    label: "Offline Mode",
    description: "Simulate network unavailability",
    config: {
      delay: 0,
      error: "none",
      offline: true,
    },
  },
  {
    id: "flaky-api",
    label: "Flaky API",
    description: "Delay + server error",
    config: {
      delay: 2500,
      error: "500",
      offline: false,
    },
  },
];
