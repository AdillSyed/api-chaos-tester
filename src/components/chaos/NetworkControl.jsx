export default function NetworkControl() {
  return (
    <div>
      <p className="mb-2 text-sm font-medium text-gray-300">
        Network Status
      </p>

      <label
        className="
          flex items-center gap-2 rounded-md px-2 py-1
          hover:bg-[#162040]
          transition
          text-sm text-gray-300
        "
      >
        <input type="checkbox" className="accent-pink-500" />
        Simulate Offline Mode
      </label>
    </div>
  );
}
