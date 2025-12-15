import { useChaos } from "../../context/useChaos";

export default function ErrorState({error}) {
  const { runRequest, status } = useChaos();
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <p className="text-sm text-red-400">
        {error.type === "offline" ? "Offline Mode" : `${error.status} Error`}
      </p>
      <p className="mt-1 text-xs text-gray-400">{error.message}</p>

      <button
        onClick={runRequest}
        disabled={status === "loading"}
        className={`mt-4 rounded-md px-4 py-1.5 text-sm ${status === "loading" ? "opacity-50 cursor-not-allowed" : "border border-red-500/40 text-red-400 hover:bg-red-500/10"}`}
      >
        Retry
      </button>
    </div>
  );
}
