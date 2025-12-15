import { useState } from "react";
import { useChaos } from "../../context/useChaos";

export default function SavePresetModal({ onClose }) {
  const { config, savePreset, addLog } = useChaos();
  const [name, setName] = useState("");

  const handleSave = () => {
    if (!name.trim()) return;

    savePreset({
      label: name,
      description: "Custom preset",
      config,
    });

    addLog({
      type: "preset",
      message: `Custom preset saved: ${name}`,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="rounded-xl bg-[#0f1629] p-6 w-[320px]">
        <h3 className="text-sm font-medium text-white mb-2">
          Save Preset
        </h3>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Preset name"
          className="w-full rounded-md bg-[#0b0f1a] p-2 text-sm text-gray-300"
        />

        <div className="mt-4 flex justify-end gap-2">
          <button onClick={onClose} className="text-sm text-gray-400">
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="rounded-md bg-cyan-500 px-3 py-1 text-sm text-black"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
