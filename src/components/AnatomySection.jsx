import React from 'react';
import bodyImage from '../assets/body.png';
import { healthIndicators } from '../data/healthData';

const AnatomySection = () => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-md p-4">
      <div className="flex justify-center relative">
        {/* Body Image with max size constraint */}
        <img
          src={bodyImage}
          alt="Human Body"
          className="max-w-[500px] w-full h-auto object-contain"
        />

        {/* Health Labels, positioned relative to image */}
        {healthIndicators.map((item, index) => (
          <div
            key={index}
            className="absolute text-sm font-semibold"
            style={{
              top: `${index * 50 + 20}px`,
              left: '10px',
              color: item.color,
            }}
          >
            {item.part}: {item.status}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnatomySection;
