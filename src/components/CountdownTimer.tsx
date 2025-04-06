import React, { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Memoized TimeUnit component that only updates when its value changes
const TimeUnit = memo(({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <AnimatePresence mode="wait">
      <motion.div
        key={value}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className="text-3xl md:text-4xl font-light mb-1 font-mono h-[40px] flex items-center justify-center"
      >
        {value.toString().padStart(2, '0')}
      </motion.div>
    </AnimatePresence>
    <div className="text-xs uppercase tracking-wider text-gray-400">{label}</div>
  </div>
), (prevProps, nextProps) => prevProps.value === nextProps.value);

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('May 19, 2025 00:00:00').getTime();

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

  const Separator = () => (
    <div className="self-center text-2xl font-thin text-gray-500 animate-pulse">:</div>
  );

  return (
    <div className="inline-flex bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
      <div className="flex gap-6 md:gap-10">
        <TimeUnit value={timeLeft.days} label="days" />
        <Separator />
        <TimeUnit value={timeLeft.hours} label="hours" />
        <Separator />
        <TimeUnit value={timeLeft.minutes} label="minutes" />
        <Separator />
        <TimeUnit value={timeLeft.seconds} label="seconds" />
      </div>
    </div>
  );
};

export default CountdownTimer;
