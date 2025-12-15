import { SYSTEM_PRESETS } from "../../constants/scenarioPresets";
import { useChaos } from "../../context/useChaos";

export default function ScenarioPresets() {
  const { setConfig, addLog, userPresets, deletePreset } = useChaos();
  const allPresets = [...SYSTEM_PRESETS, ...userPresets];

  const applyPreset = (preset) => {
    setConfig(preset.config);

    addLog({
      type: "preset",
      message: `Preset applied: ${preset.label}`,
      meta: preset.config,
    });
  };

  return (
    <div>
      <p className="mb-2 text-sm font-medium text-gray-300">Scenario Presets</p>

      <div className="grid grid-cols-1 gap-2">
        {allPresets.map((preset) => (
          <div
            key={preset.id}
            className="relative rounded-md border border-[#1f2a44]"
          >
            <button
              onClick={() => {applyPreset(preset)}}
              className="w-full px-3 py-2 text-left hover:bg-[#162040]"
            >
              <div className="text-sm text-gray-300">{preset.label}</div>
              <div className="text-xs text-gray-500">{preset.description}</div>
            </button>

            {!preset.system && (
              <button
                onClick={() => deletePreset(preset.id)}
                className="absolute top-2 right-2 text-xs text-red-400"
              >
                ✕
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
