import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Check if target date exists in localStorage
    let targetDate = localStorage.getItem('sylonowTargetDate');
    
    // If no target date exists, create one 52 days from now
    if (!targetDate) {
      const now = new Date();
      const future = new Date(now);
      future.setDate(now.getDate() + 52);
      targetDate = future.toISOString();
      localStorage.setItem('sylonowTargetDate', targetDate);
    }
    
    const target = new Date(targetDate);
    
    // Update countdown timer every second
    const timer = setInterval(() => {
      const now = new Date();
      
      // If current date is past target date, stop the timer
      if (now >= target) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
        return;
      }
      
      // Calculate time left
      const days = differenceInDays(target, now);
      const hours = differenceInHours(target, now) % 24;
      const minutes = differenceInMinutes(target, now) % 60;
      const seconds = differenceInSeconds(target, now) % 60;
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    // Clean up interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  const numberVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    exit: { scale: 1.2, opacity: 0 }
  };

  return (
    <motion.div 
      className="flex flex-wrap justify-center gap-4 md:gap-6 my-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {timeUnits.map((unit, index) => (
        <motion.div 
          key={index} 
          className="flex flex-col items-center"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.05,
            transition: { type: "spring", stiffness: 400, damping: 17 }
          }}
        >
          <motion.div 
            className="bg-gradient-to-br from-sylonow-purple/10 to-sylonow-gold/20 backdrop-blur-sm rounded-xl p-1.5 shadow-lg"
            whileHover={{
              boxShadow: "0 0 25px rgba(139, 92, 246, 0.3)",
              transition: { duration: 0.3 }
            }}
          >
            <motion.div
              className="bg-white/90 backdrop-blur-md shadow-inner rounded-lg w-20 md:w-24 h-20 md:h-24 flex items-center justify-center relative overflow-hidden"
              animate={{
                boxShadow: ["inset 0 0 10px rgba(139, 92, 246, 0.1)", "inset 0 0 20px rgba(139, 92, 246, 0.3)", "inset 0 0 10px rgba(139, 92, 246, 0.1)"],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }}
            >
              {/* Subtle ring animation */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 0 0px rgba(139, 92, 246, 0)", 
                    "0 0 0 10px rgba(139, 92, 246, 0.1)", 
                    "0 0 0 20px rgba(139, 92, 246, 0)"
                  ],
                  scale: [0.95, 1.05, 0.95],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut"
                }}
              />
              
              <AnimatePresence mode="wait">
                <motion.span 
                  className="text-3xl md:text-4xl font-bold font-montserrat bg-gradient-to-r from-sylonow-purple to-sylonow-gold bg-clip-text text-transparent relative z-10"
                  key={`${unit.label}-${unit.value}`}
                  variants={numberVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {unit.value.toString().padStart(2, '0')}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          </motion.div>
          <motion.span 
            className="text-sm mt-2 font-medium text-gray-700 font-poppins tracking-wider uppercase text-xs"
            whileHover={{ color: "#8B5CF6", scale: 1.05 }}
          >
            {unit.label}
          </motion.span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CountdownTimer;
