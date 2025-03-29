
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  // Initial time left - fixed at 52 days
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 52,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Update seconds every second
    const timer = setTimeout(() => {
      setTimeLeft(prev => {
        const newSeconds = (prev.seconds + 1) % 60;
        
        // If seconds reset to 0, update minutes
        if (newSeconds === 0) {
          const newMinutes = (prev.minutes + 1) % 60;
          
          // If minutes reset to 0, update hours
          if (newMinutes === 0) {
            const newHours = (prev.hours + 1) % 24;
            return {
              ...prev,
              seconds: newSeconds,
              minutes: newMinutes,
              hours: newHours
            };
          }
          
          return {
            ...prev,
            seconds: newSeconds,
            minutes: newMinutes
          };
        }
        
        return {
          ...prev,
          seconds: newSeconds
        };
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

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
      className="flex flex-wrap justify-center gap-4 my-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {timeUnits.map((unit, index) => (
        <motion.div 
          key={index} 
          className="flex flex-col items-center"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div 
            className="bg-gradient-to-b from-sylonow-purple/20 to-sylonow-purple/40 shadow-lg rounded-lg p-1 backdrop-blur-sm"
            whileHover={{
              boxShadow: "0 0 15px rgba(139, 92, 246, 0.5)",
              transition: { duration: 0.3 }
            }}
          >
            <motion.div
              className="bg-white/80 backdrop-blur-md shadow-inner rounded-lg w-24 h-24 flex items-center justify-center"
              animate={{
                boxShadow: ["inset 0 0 10px rgba(139, 92, 246, 0.1)", "inset 0 0 20px rgba(139, 92, 246, 0.3)", "inset 0 0 10px rgba(139, 92, 246, 0.1)"],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }}
            >
              <AnimatePresence mode="wait">
                <motion.span 
                  className="text-4xl font-bold bg-gradient-to-r from-sylonow-purple to-sylonow-gold bg-clip-text text-transparent"
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
            className="text-sm mt-2 font-medium text-gray-700"
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
