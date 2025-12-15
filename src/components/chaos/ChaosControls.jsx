import DelayControl from "./DelayControl";
import ErrorControl from "./ErrorControl";
import NetworkControl from "./NetworkControl";
import { useChaos } from "../../context/useChaos";
import { fetchData } from "../../services/apiClient";

export default function ChaosControls() {
  const { config, setStatus, setData, setErrorInfo } = useChaos();

  const handleSend = async() => {
    setStatus("loading");
    setErrorInfo(null);
    setData(null);

    try {
      const response = await fetchData(config);
      setData(response.data);
      setStatus("success");
    } catch (err) {
      setErrorInfo(err);
      setStatus("error");
    }
  };
  return (
    <aside className="flex flex-col md:h-full rounded-xl bg-[#0f1629] p-6 shadow-[0_0_0_1px_#1f2a44]">
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
            onClick={handleSend}
            className="mt-4 w-full rounded-md bg-cyan-500 py-2 text-sm text-black hover:bg-cyan-400 transition"
          >
            Send Request
          </button>
        </div>
      </div>
    </aside>
  );
}
