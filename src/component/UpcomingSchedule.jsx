// src/components/UpcomingSchedule.jsx

import SimpleAppointmentCard from './SimpleAppointmentCard';

const appointments = [
  { title: 'Ophthalmologist', time: '10:00 AM' },
  { title: 'Cardiologist', time: '12:00 PM' },
  { title: 'Neurologist', time: '3:00 PM' },
];

const UpcomingSchedule = () => {
  return (
    <div>
      <h3>The Upcoming Schedule</h3>
      {appointments.map((appt, i) => (
        <SimpleAppointmentCard key={i} title={appt.title} time={appt.time} />
      ))}
    </div>
  );
};

export default UpcomingSchedule;
