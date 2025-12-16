import { useState, useRef, useEffect } from "react";
import { useChaos } from "../../context/useChaos";

export default function EventLogPanel() {
  const { logs, clearLogs, exportLogs, loggingEnabled, setLoggingEnabled } = useChaos();
  const [showExport, setShowExport] = useState(false);
  const popoverRef = useRef(null);

  useEffect(() => {
  const handleClickOutside = (e) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(e.target)
    ) {
      setShowExport(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () =>
    document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <aside className="rounded-xl bg-[#0f1629] p-4 max-h-[240px] overflow-hidden shadow-[0_0_0_1px_#1f2a44]">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-300">Event Log</h3>
        {!loggingEnabled && (
          <p className="mb-2 text-xs text-yellow-400">Logging is paused</p>
        )}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLoggingEnabled((v) => !v)}
            className="rounded-md px-2 py-1 text-xs border border-[#1f2a44] text-gray-300 hover:bg-[#162040] transition"
          >
            {loggingEnabled ? "Pause" : "Resume"}
          </button>
          <div className="relative" ref={popoverRef}>
            <button
              onClick={() => setShowExport((v) => !v)}
              disabled={logs.length === 0}
              className="
      rounded-md px-2 py-1 text-xs
      border border-[#1f2a44]
      text-gray-300
      hover:bg-[#162040]
      disabled:opacity-40
      disabled:cursor-not-allowed
      flex items-center gap-1
    "
            >
              Export
              <span className="text-gray-500">▾</span>
            </button>
            {showExport && (
              <div
                className="absolute right-0 mt-2 w-32 rounded-md bg-[#0b0f1a] shadow-lg border border-[#1f2a44] z-50"
              >
                <button
                  onClick={() => {
                    exportLogs("json");
                    setShowExport(false);
                  }}
                  className="block w-full px-3 py-2 text-left text-xs text-gray-300 hover:bg-[#162040]"
                >
                  Export JSON
                </button>

                <button
                  onClick={() => {
                    exportLogs("csv");
                    setShowExport(false);
                  }}
                  className="block w-full px-3 py-2 text-left text-xs text-gray-300 hover:bg-[#162040]"
                >
                  Export CSV
                </button>
              </div>
            )}
          </div>
          <button
            onClick={clearLogs}
            className="rounded-md px-2 py-1 text-xs border border-red-500/30 text-red-400 hover:bg-red-500/10 transition"
          >
            Clear
          </button>
        </div>
      </div>
      {logs.length === 0 ? (
        <p className="text-xs text-gray-500">No events recorded yet</p>
      ) : (
        <ul className="space-y-2 max-h-[200px] overflow-y-auto">
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
                <span className="text-gray-500">{log.timestamp}</span>
              </div>
              <p className="mt-1 text-gray-400">{log.message}</p>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
