import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const TextRevealAnimation = () => {
  const [showFirstText, setShowFirstText] = useState(true);
  const [showParticles, setShowParticles] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);

  const firstText = "Not all surprises come wrapped in a box.";
  const secondText = "Some moments change everything.";

  useEffect(() => {
    // Show first text for 2 seconds
    const firstTimer = setTimeout(() => {
      setShowFirstText(false);
      setShowParticles(true);
      
      // Show particles for 1 second
      const particleTimer = setTimeout(() => {
        setShowParticles(false);
        setShowSecondText(true);
      }, 1000);

      return () => clearTimeout(particleTimer);
    }, 2000);

    return () => clearTimeout(firstTimer);
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-[60] flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        {showFirstText && (
          <motion.div
            key="first-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white text-2xl md:text-4xl font-light tracking-wider text-center px-4"
          >
            {firstText}
          </motion.div>
        )}

        {showParticles && (
          <motion.div
            key="particles"
            className="absolute inset-0 flex items-center justify-center"
          >
            {firstText.split('').map((char, index) => (
              <motion.span
                key={index}
                className="absolute text-white text-2xl md:text-4xl font-light"
                initial={{ opacity: 1, x: 0, y: 0 }}
                animate={{
                  opacity: 0,
                  x: (Math.random() - 0.5) * window.innerWidth,
                  y: (Math.random() - 0.5) * window.innerHeight,
                  rotate: Math.random() * 360
                }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  delay: index * 0.02
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        )}

        {showSecondText && (
          <motion.div
            key="second-text"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="text-2xl md:text-4xl font-light tracking-wider text-center px-4"
          >
            <span 
              className="inline-block bg-gradient-to-r from-white via-purple-500 to-white bg-[length:200%_100%]"
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% 100%',
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