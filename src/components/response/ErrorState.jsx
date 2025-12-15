export default function ErrorState({error}) {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <p className="text-sm text-red-400">
        {error.type === "offline"
          ? "Offline Mode"
          : `${error.status} Error`}
      </p>
      <p className="mt-1 text-xs text-gray-400">
        {error.message}
      </p>

      <button
        className="
          mt-4 rounded-md
          border border-red-500/30
          px-4 py-1.5 text-sm
          text-red-400
          hover:bg-red-500/10
          transition
        "
      >
        Retry
      </button>
    </div>
  );
}
