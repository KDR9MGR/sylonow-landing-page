
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EntryAnimationProps {
  onComplete: () => void;
}

const EntryAnimation = ({ onComplete }: EntryAnimationProps) => {
  const [step, setStep] = useState(1);
  
  useEffect(() => {
    // First text appears immediately
    const timer1 = setTimeout(() => {
      // After 2 seconds, show the second text
      setStep(2);
    }, 2000);
    
    const timer2 = setTimeout(() => {
      // After another 1.5 seconds, flash and fade out
      setStep(3);
    }, 3500);
    
    const timer3 = setTimeout(() => {
      // Complete the animation
      onComplete();
    }, 4500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);
  
  return (
    <AnimatePresence mode="wait">
      <motion.div 
        className="fixed inset-0 bg-black flex items-center justify-center z-50"
        key={step}
        initial={{ opacity: 1 }}
        animate={{ opacity: step === 3 ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-white text-2xl md:text-4xl font-display"
          >
            Not all surprises come wrapped in a box.
          </motion.div>
        )}
        
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white text-2xl md:text-4xl font-display"
          >
            Some moments change everything.
          </motion.div>
        )}
        
        {step === 3 && (
          <motion.div 
            className="absolute inset-0 bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.5, times: [0, 0.1, 1] }}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default EntryAnimation;
