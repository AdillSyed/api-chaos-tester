export default function SuccessState({data}) {
  return (
    <ul className="space-y-2">
      {data.map((item) => (
        <li
          key={item.id}
          className="
            flex justify-between rounded-md
            bg-[#0f1629] px-3 py-2
            text-sm text-gray-300
          "
        >
          <span>{item.name}</span>
          <span
            className={
              item.status === "active"
                ? "text-cyan-400"
                : "text-yellow-400"
            }
          >
            {item.status}
          </span>
        </li>
      ))}
    </ul>
  );
}
