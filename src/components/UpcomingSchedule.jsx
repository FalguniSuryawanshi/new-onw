import React from "react";

// Appointment schedule data
const schedule = [
  {
    day: "Thursday",
    appointments: [
      { time: "11:00 AM", title: "Health checkup complete", icon: "🩺" },
      { time: "2:00 PM", title: "Ophthalmologist", icon: "👁️" },
    ],
  },
  {
    day: "Saturday",
    appointments: [
      { time: "12:00 AM", title: "Cardiologist", icon: "❤️" },
      { time: "4:00 PM", title: "Neurologist", icon: "🧠" },
    ],
  },
];

// Mini appointment card component
const MiniCard = ({ icon, title, time }) => (
  <div className="bg-indigo-50 rounded-xl p-3 min-w-[140px] shadow-sm">
    <div className="flex justify-between items-center mb-1">
      <h4 className="text-sm font-medium text-indigo-900">{title}</h4>
      <span className="text-lg">{icon}</span>
    </div>
    <p className="text-xs text-indigo-600">{time}</p>
  </div>
);

// Main Upcoming Schedule component
const UpcomingSchedule = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        📅 The Upcoming Schedule
      </h2>
      <div className="space-y-6">
        {schedule.map((block, idx) => (
          <div key={idx}>
            <h3 className="text-md text-gray-600 mb-2">🗓️ On {block.day}</h3>
            <div className="flex gap-4 flex-wrap">
              {block.appointments.map((item, i) => (
                <MiniCard key={i} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;
