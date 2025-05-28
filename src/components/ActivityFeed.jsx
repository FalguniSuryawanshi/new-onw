import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Mon", activity: 40 },
  { name: "Tue", activity: 60 },
  { name: "Wed", activity: 50 },
  { name: "Thu", activity: 70 },
  { name: "Fri", activity: 65 },
  { name: "Sat", activity: 80 },
  { name: "Sun", activity: 75 },
];

const ActivitySection = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Activity</h3>
        <select className="text-sm border border-gray-300 rounded-md px-2 py-1">
          <option>This week</option>
          <option>Last week</option>
          <option>This month</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="activity"
            stroke="#4e54c8"
            strokeWidth={3}
            dot={{ r: 5, stroke: "#4e54c8", fill: "#fff" }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivitySection;
