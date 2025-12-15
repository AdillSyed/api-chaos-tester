import ChaosControls from "./components/chaos/ChaosControls";

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ChaosControls />
        <div className="md:col-span-2 rounded-lg bg-white p-6 shadow-sm">
          <p className="text-gray-400 text-sm">
            UI Response Panel (coming next)
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
