import DelayControl from "./DelayControl";
import ErrorControl from "./ErrorControl";
import NetworkControl from "./NetworkControl";

export default function ChaosControls() {
  return (
    <aside className="rounded-xl bg-[#0f1629] p-6 shadow-[0_0_0_1px_#1f2a44] md:p-6">
      <h2 className="text-lg font-medium text-white">Chaos Controls</h2>
      <p className="mt-1 text-sm text-gray-400">
        Intentionally degrade API behavior
      </p>

      <div className="mt-6 space-y-6">
        <DelayControl />
        <ErrorControl />
        <NetworkControl />

        <div className="pt-4 md:pt-6">
          <button
            disabled
            className="w-full rounded-md bg-[#1f2a44] py-2 text-sm text-gray-400 cursor-not-allowed"
          >
            Send Request
          </button>
        </div>
      </div>
    </aside>
  );
}
