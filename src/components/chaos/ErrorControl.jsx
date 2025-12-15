const OPTIONS = [
  { label: "None", value: "none" },
  { label: "400 – Bad Request", value: "400" },
  { label: "401 – Unauthorized", value: "401" },
  { label: "500 – Server Error", value: "500" },
];

export default function ErrorControl() {
  return (
    <div>
      <p className="mb-2 text-sm font-medium text-gray-300">
        Force Error Response
      </p>

      <div className="space-y-2">
        {OPTIONS.map((opt) => (
          <label
            key={opt.value}
            className="
              flex items-center gap-2 rounded-md px-2 py-1
              hover:bg-[#162040]
              transition
              text-sm text-gray-300
            "
          >
            <input
              type="radio"
              name="error"
              value={opt.value}
              defaultChecked={opt.value === "none"}
              className="accent-cyan-400"
            />
            {opt.label}
          </label>
        ))}
      </div>
    </div>
  );
}
