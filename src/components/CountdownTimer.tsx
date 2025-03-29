
import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const calculateTimeLeft = (): TimeLeft => {
    // May 1, 2025
    const launchDate = new Date('May 1, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const difference = launchDate - now;
    
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 my-8">
      {timeUnits.map((unit, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="bg-gradient-to-b from-white to-gray-100 shadow-lg rounded-lg w-20 h-20 flex items-center justify-center">
            <span className="text-3xl font-bold text-sylonow-purple">
              {unit.value.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-sm mt-2 text-gray-600">{unit.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
