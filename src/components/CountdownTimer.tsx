import React, { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Memoized TimeUnit component that only updates when its value changes
const TimeUnit = memo(({ value, label }: { value: number; label: string }) => (
  <div className="flex-1 px-2 inline-flex flex-col justify-center items-center">
    <div className="self-stretch h-14 relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={value}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="w-16 left-0 top-0 absolute text-center justify-start text-blue-950 text-5xl font-normal font-['Jersey_15'] leading-10"
        >
          {value.toString().padStart(2, '0')}
        </motion.div>
      </AnimatePresence>
    </div>
    <div className="self-stretch text-center justify-start text-neutral-400 text-sm font-normal font-['Poppins'] leading-loose">
      {label}
    </div>
  </div>
));

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('June 30, 2025 00:00:00').getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      };
    };

    // Set initial time
    setTimeLeft(calculateTimeLeft());

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-96 p-4 rounded-3xl outline outline-2 outline-offset-[-2px] outline-blue-950/25 inline-flex justify-start items-center">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;
