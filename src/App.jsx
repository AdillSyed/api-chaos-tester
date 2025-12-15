import ChaosControls from "./components/chaos/ChaosControls";
import ResponsePanel from "./components/response/ResponsePanel";

function App() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] text-gray-200 p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-mono font-semibold tracking-wide text-white">
          API Chaos Tester
        </h1>
        <p className="text-sm font-mono text-gray-400">
          Simulate API failures to test UI resilience
        </p>
      </header>
      <div className="grid gap-6 md:h-[calc(100vh-120px)] md:grid-cols-[360px_1fr]">
        <ChaosControls />
        <ResponsePanel />
      </div>
    </div>
  );
}

export default App;
