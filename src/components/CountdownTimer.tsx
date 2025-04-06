import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('May 1, 2025 00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center"
    >
      <motion.div 
        className="text-3xl md:text-4xl font-light mb-1 font-mono"
        key={value} // This will trigger animation on value change
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {value.toString().padStart(2, '0')}
      </motion.div>
      <div className="text-xs uppercase tracking-wider text-gray-400">{label}</div>
    </motion.div>
  );

  return (
    <div className="inline-flex bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
      <div className="flex gap-6 md:gap-10">
        <TimeUnit value={timeLeft.days} label="days" />
        <div className="self-center text-2xl font-thin text-gray-500">:</div>
        <TimeUnit value={timeLeft.hours} label="hours" />
        <div className="self-center text-2xl font-thin text-gray-500">:</div>
        <TimeUnit value={timeLeft.minutes} label="minutes" />
        <div className="self-center text-2xl font-thin text-gray-500">:</div>
        <TimeUnit value={timeLeft.seconds} label="seconds" />
      </div>
    </div>
  );
};

export default CountdownTimer;
