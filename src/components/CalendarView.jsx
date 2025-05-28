import React from 'react';
import { calendarData } from './calendarData'; // ✅ Corrected path
import dayjs from 'dayjs';

const CalendarView = () => {
  const today = dayjs('2025-05-01'); // You can make this dynamic with dayjs()

  const daysInMonth = 28;
  const calendarDays = Array.from({ length: daysInMonth }, (_, index) =>
    today.add(index, 'day')
  );

  return (
    <div className="bg-white p-5 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">May 2025 Calendar</h2>
      <div className="grid grid-cols-7 gap-2 md:gap-4">
        {calendarDays.map((day, index) => {
          const dateString = day.format('YYYY-MM-DD');
          const appointment = calendarData.find(d => d.date === dateString);

          return (
            <div
              key={index}
              className={`p-4 text-center rounded-lg transition-all duration-200 ${
                appointment?.hasAppointment
                  ? 'bg-blue-200 font-bold text-blue-900'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {day.format('D')}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarView;
