import { healthIndicators } from '../data/healthData';

const HealthStatusCards = () => {
  return (
    <div className="status-cards">
      {healthIndicators.map((item, index) => (
        <div key={index} style={{ borderLeft: `4px solid ${item.color}` }}>
          <h3>{item.part}</h3>
          <p>{item.status}</p>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
