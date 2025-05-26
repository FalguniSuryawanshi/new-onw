// src/components/SimpleAppointmentCard.jsx

const SimpleAppointmentCard = ({ title, time }) => (
    <div className="appointment-card">
      <h4>{title}</h4>
      <p>{time}</p>
    </div>
  );
  
  export default SimpleAppointmentCard;
  