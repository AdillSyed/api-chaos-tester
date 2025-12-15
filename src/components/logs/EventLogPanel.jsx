import { useChaos } from "../../context/useChaos";

export default function EventLogPanel() {
  const { logs } = useChaos();

  return (
    <aside className="rounded-xl bg-[#0f1629] p-4 shadow-[0_0_0_1px_#1f2a44]">
      <h3 className="mb-3 text-sm font-medium text-gray-300">
        Event Log
      </h3>

      {logs.length === 0 ? (
        <p className="text-xs text-gray-500">
          No events recorded yet
        </p>
      ) : (
        <ul className="space-y-2 max-h-64 overflow-y-auto">
          {logs.map((log) => (
            <li
              key={log.id}
              className="rounded-md bg-[#0b0f1a] px-3 py-2 text-xs text-gray-300"
            >
              <div className="flex justify-between">
                <span
                  className={
                    log.type === "error"
                      ? "text-red-400"
                      : log.type === "success"
                      ? "text-cyan-400"
                      : log.type === "abort"
                      ? "text-yellow-400"
                      : "text-gray-400"
                  }
                >
                  {log.type.toUpperCase()}
                </span>
                <span className="text-gray-500">
                  {log.timestamp}
                </span>
              </div>

              <p className="mt-1 text-gray-400">
                {log.message}
              </p>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
