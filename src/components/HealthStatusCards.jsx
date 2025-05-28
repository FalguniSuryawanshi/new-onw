import { FaLungs, FaTooth, FaBone } from "react-icons/fa";

const statuses = [
  {
    label: "Lungs",
    icon: <FaLungs className="text-red-500 text-2xl" />,
    date: "26 Oct 2021",
    status: "Issue",
    color: "bg-red-400",
    bar: "w-1/3",
  },
  {
    label: "Teeth",
    icon: <FaTooth className="text-gray-700 text-2xl" />,
    date: "26 Oct 2021",
    status: "Healthy",
    color: "bg-green-400",
    bar: "w-3/4",
  },
  {
    label: "Bone",
    icon: <FaBone className="text-yellow-500 text-2xl" />,
    date: "26 Oct 2021",
    status: "Issue",
    color: "bg-red-400",
    bar: "w-1/4",
  },
];

export default function HealthStatusCards() {
  return (
    <div className="flex flex-col gap-4 p-4 w-full max-w-xs">
      {statuses.map((item, idx) => (
        <div
          key={idx}
          className="bg-white p-4 rounded-2xl shadow-md flex items-start gap-4"
        >
          <div className="p-2 bg-gray-100 rounded-full">{item.icon}</div>
          <div className="flex-1">
            <div className="flex justify-between text-sm text-gray-500">
              <span>{item.label}</span>
              <span>{item.date}</span>
            </div>
            <div className="mt-2 h-2 w-full bg-gray-200 rounded-full">
              <div className={`${item.color} ${item.bar} h-2 rounded-full`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
