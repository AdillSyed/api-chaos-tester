import IdleState from "./IdleState";
import LoadingState from "./LoadingState";
import SuccessState from "./SuccessState";
import ErrorState from "./ErrorState";
import { useChaos } from "../../context/useChaos";

export default function ResponsePanel() {
  const { status, data, errorInfo } = useChaos();

  return (
    <section className="flex h-full flex-col rounded-xl bg-[#0f1629] p-6 shadow-[0_0_0_1px_#1f2a44] md:p-6">
      <header className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-medium text-white">
          UI Response Preview
        </h2>
        <span className="rounded-full bg-[#1f2a44] px-3 py-1 text-xs text-gray-300">
          {status.toUpperCase()}
        </span>
      </header>
      <div className="mb-4 h-px w-full bg-gradient-to-r from-transparent via-[#1f2a44] to-transparent" />
      <div className="flex-1 rounded-md bg-[#0b0f1a] p-4 md:p-6">
        {status === "idle" && <IdleState />}
        {status === "loading" && <LoadingState />}
        {status === "success" && <SuccessState data={data} />}
        {status === "error" && <ErrorState error={errorInfo} />}
      </div>
    </section>
  );
}
