import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface WelcomeTypingAnimationProps {
  onComplete: () => void;
}

const WelcomeTypingAnimation = ({ onComplete }: WelcomeTypingAnimationProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const messages = [
    "Not all gifts comes in wrapped gift box",
    "Some come in the form of opportunities"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentTextIndex === 0) {
        setCurrentTextIndex(1);
      } else {
        onComplete();
      }
    }, 750); // Each text shows for 750ms, total animation time 1.5s

    return () => clearTimeout(timer);
  }, [currentTextIndex, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{
        background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))'
      }}
    >
      <div className="text-center px-4">
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentTextIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-3xl md:text-5xl font-bold text-white"
            style={{
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              minHeight: '3em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {messages[currentTextIndex]}
          </motion.h1>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default WelcomeTypingAnimation; 