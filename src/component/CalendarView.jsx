const days = Array.from({ length: 35 }, (_, i) => ({
    day: i + 1,
    hasAppointment: [5, 10, 15, 20].includes(i + 1), // Just some random days
  }));
  
  const CalendarView = () => {
    return (
      <div className="calendar-grid">
        {days.map((day, idx) => (
          <div
            key={idx}
            className={`calendar-day ${day.hasAppointment ? 'highlight' : ''}`}
          >
            {day.day}
          </div>
        ))}
      </div>
    );
  };
  
  export default CalendarView;
  