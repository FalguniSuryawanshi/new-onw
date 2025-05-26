import React from 'react';
import bodyImage from '../assets/body.png'; // adjust path if needed
import { healthIndicators } from '../data/healthData';

const AnatomySection = () => {
    return (
      <div className="anatomy-section">
        <div className="body-image-container">
          <img src={bodyImage} alt="Human Body" className="body-image" />
  
          {/* Loop through health parts and show their names */}
          {healthIndicators.map((item, index) => (
            <div
              key={index}
              className="body-label"
              style={{ top: `${index * 50 + 20}px`, left: '20px', color: item.color }}
            >
              {item.part}: {item.status}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default AnatomySection;
  