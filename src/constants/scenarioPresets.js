export const SYSTEM_PRESETS = [
  {
    id: "slow-api",
    label: "Slow API",
    description: "Simulate high latency responses",
    config: { delay: 4000, error: "none", offline: false },
    system: true,
  },
  {
    id: "server-error",
    label: "Server Error",
    description: "Force HTTP 500 failure",
    config: { delay: 0, error: "500", offline: false },
    system: true,
  },
  {
    id: "unauthorized",
    label: "Unauthorized",
    description: "Force HTTP 401 response",
    config: { delay: 0, error: "401", offline: false },
    system: true,
  },
  {
    id: "offline",
    label: "Offline Mode",
    description: "Simulate network unavailability",
    config: { delay: 0, error: "none", offline: true },
    system: true,
  },
];
