export default function LoadingState() {
  return (
    <div className="space-y-3">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="
            h-4 w-full rounded
            bg-gradient-to-r
            from-[#1f2a44]
            via-[#2a3a66]
            to-[#1f2a44]
            animate-pulse
          "
        />
      ))}
    </div>
  );
}
