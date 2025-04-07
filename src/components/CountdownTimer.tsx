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
        className="text-3xl md:text-4xl font-light mb-1 font-mono h-[40px] flex items-center justify-center jersey-15-regular"
      >
        {value.toString().padStart(2, '0')}
      </motion.div>
    </AnimatePresence>
    <div className="text-xs uppercase tracking-wider text-gray-400 jersey-15-regular">{label}</div>
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
    <div className="w-full max-w-[350px] mx-auto px-4">
      <div className="bg-gradient-to-br from-black/60 to-[#1a0938]/60 backdrop-blur-md rounded-2xl p-4 sm:p-6 relative overflow-hidden shadow-lg border border-white/5">
        {/* Decorative blurred blobs */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-sylonow-purple/20 rounded-full blur-[50px] opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-sylonow-gold/20 rounded-full blur-[50px] opacity-30"></div>
        
        <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center relative z-10">
          {[
            { value: timeLeft.days, label: 'DAYS' },
            { value: timeLeft.hours, label: 'HOURS' },
            { value: timeLeft.minutes, label: 'MINUTES' },
            { value: timeLeft.seconds, label: 'SECONDS' }
          ].map((item, index) => (
            <div key={item.label} className="flex flex-col items-center">
              <div className="w-full aspect-square bg-black/50 rounded-xl flex items-center justify-center mb-1 sm:mb-2">
                <span className="font-mono text-xl sm:text-2xl font-bold jersey-15-regular">
                  {String(item.value).padStart(2, '0')}
                </span>
              </div>
              <span className="text-[10px] sm:text-xs text-gray-400 font-medium jersey-15-regular">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
