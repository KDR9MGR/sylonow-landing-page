import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TextRevealAnimationProps {
  onComplete: () => void;
}

const TextRevealAnimation = ({ onComplete }: TextRevealAnimationProps) => {
  const [showFirstText, setShowFirstText] = useState(true);
  const [showSecondText, setShowSecondText] = useState(false);

  const firstText = "Not all surprises come wrapped in a box.";
  const secondText = "Some moments change everything.";

  useEffect(() => {
    // Show first text for 2 seconds
    const firstTimer = setTimeout(() => {
      setShowFirstText(false);
      setShowSecondText(true);

      // After showing second text for 2 seconds, complete the animation
      const secondTimer = setTimeout(() => {
        onComplete();
      }, 2000);

      return () => clearTimeout(secondTimer);
    }, 2000);

    return () => clearTimeout(firstTimer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-[60] flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        {showFirstText && (
          <motion.div
            key="first-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white text-3xl md:text-5xl font-montserrat font-light tracking-wider text-center px-4"
          >
            {firstText}
          </motion.div>
        )}

        {showSecondText && (
          <motion.div
            key="second-text"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="text-3xl md:text-5xl font-montserrat font-semibold tracking-wider text-center px-4"
          >
            <span 
              className="bg-gradient-to-r from-white via-purple-400 to-white bg-clip-text text-transparent bg-[length:200%_100%]"
              style={{
                animation: 'shimmer 2s infinite linear'
              }}
            >
              {secondText}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TextRevealAnimation; 