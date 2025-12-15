export default function DelayControl() {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300">
        API Delay
      </label>

      <input
        type="range"
        min="0"
        max="5000"
        step="500"
        defaultValue="0"
        className="
          mt-2 w-full accent-cyan-400
          focus:outline-none
        "
      />

      <div className="mt-1 flex justify-between text-xs text-gray-500">
        <span>0ms</span>
        <span>5000ms</span>
      </div>
    </div>
  );
}
