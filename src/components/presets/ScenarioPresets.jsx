import { SCENARIO_PRESETS } from "../../constants/scenarioPresets";
import { useChaos } from "../../context/useChaos";

export default function ScenarioPresets() {
  const { setConfig, addLog } = useChaos();

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
      <p className="mb-2 text-sm font-medium text-gray-300">
        Scenario Presets
      </p>

      <div className="grid grid-cols-1 gap-2">
        {SCENARIO_PRESETS.map((preset) => (
          <button
            key={preset.id}
            onClick={() => applyPreset(preset)}
            className="
              rounded-md border border-[#1f2a44]
              px-3 py-2 text-left
              text-sm text-gray-300
              hover:bg-[#162040]
              transition
            "
          >
            <div className="font-medium">
              {preset.label}
            </div>
            <div className="text-xs text-gray-500">
              {preset.description}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
