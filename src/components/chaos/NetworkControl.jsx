import { useChaos } from "../../context/useChaos";

export default function NetworkControl() {
  const { config, setConfig } = useChaos();

  return (
    <div>
      <p className="mb-2 text-sm font-medium text-gray-300">
        Network Status
      </p>

      <label className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-[#162040]">
        <input
          type="checkbox"
          checked={config.offline}
          onChange={(e) =>
            setConfig({ ...config, offline: e.target.checked })
          }
          className="accent-pink-500"
        />
        <span className="text-sm text-gray-300">
          Simulate Offline Mode
        </span>
      </label>
    </div>
  );
}
