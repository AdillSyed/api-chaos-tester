import { useChaos } from "../../context/useChaos";

export default function DelayControl() {
  const { config, setConfig } = useChaos();

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
        value={config.delay}
        onChange={(e) =>
          setConfig({ ...config, delay: Number(e.target.value) })
        }
        className="mt-2 w-full accent-cyan-400"
      />

      <div className="mt-1 flex justify-between text-xs text-gray-500">
        <span>0ms</span>
        <span>{config.delay}ms</span>
      </div>
    </div>
  );
}
