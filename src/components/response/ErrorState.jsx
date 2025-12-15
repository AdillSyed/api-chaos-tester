export default function ErrorState() {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <p className="text-sm text-red-400">
        500 — Server Error
      </p>
      <p className="mt-1 text-xs text-gray-400">
        Something went wrong while fetching data.
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
