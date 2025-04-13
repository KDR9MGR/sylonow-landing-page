import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface WelcomeTypingAnimationProps {
  onComplete: () => void;
}

const WelcomeTypingAnimation = ({ onComplete }: WelcomeTypingAnimationProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  const messages = [
    { text: "Welcome to ", highlight: "Sylonow" },
    { text: "Not all gifts come in ", highlight: "wrapped gift boxes" },
    { text: "Some come in the form of ", highlight: "opportunities" }
  ];

  useEffect(() => {
    const showNextMessage = (index: number) => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentTextIndex(index);
        setIsVisible(true);
      }, 300);
    };

    const timers = [
      setTimeout(() => showNextMessage(1), 2000),
      setTimeout(() => showNextMessage(2), 4000),
      setTimeout(() => onComplete(), 6000)
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{
        backgroundColor: 'black'
      }}
    >
      <div className="text-center px-4 max-w-3xl mx-auto">
        <motion.div
          animate={{ 
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : 20
          }}
          transition={{ 
            duration: 0.3,
            ease: "easeOut"
          }}
          className="relative"
        >
          <div className="pb-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-normal md:leading-normal lg:leading-normal tracking-wide">
              <span>{messages[currentTextIndex].text}</span>
              <span className="text-pink-500">{messages[currentTextIndex].highlight}</span>
            </h1>
          </div>
          
          <motion.div
            className="h-1 bg-pink-500 rounded-full mx-auto mt-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isVisible ? 1 : 0 }}
            transition={{ 
              duration: 2,
              ease: "linear"
            }}
            style={{ 
              originX: 0,
              width: "100%",
              maxWidth: "200px"
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WelcomeTypingAnimation; 