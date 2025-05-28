import React from 'react';

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className="bg-indigo-50 rounded-2xl px-4 py-3 min-w-[150px] shadow-sm">
      <div className="flex justify-between items-center mb-1">
        <h4 className="text-sm font-medium text-indigo-900">{title}</h4>
        <span className="text-lg">{icon}</span>
      </div>
      <p className="text-xs text-indigo-600">{time}</p>
    </div>
  );
};

export default SimpleAppointmentCard;
