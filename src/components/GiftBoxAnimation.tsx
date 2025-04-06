import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GiftBoxAnimationProps {
  onAnimationComplete: () => void;
}

// Ripple component s
const Ripple = ({ delay = 0 }: { delay?: number }) => {
  return (
    <motion.div
      initial={{ 
        scale: 0,
        opacity: 0.8,
      }}
      animate={{ 
        scale: 2,
        opacity: 0,
      }}
      transition={{
        duration: 2,
        ease: "easeOut",
        delay,
        repeat: Infinity,
        repeatDelay: 2
      }}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%)",
        zIndex: 51,
      }}
    />
  );
};

// Confetti particle component
const Confetti = ({ index }: { index: number }) => {
  const colors = ["#FF7B7B", "#FFD700", "#FF85FF", "#85FFFF", "#FFFFFF"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const size = Math.random() * 8 + 4; // 4-12px
  
  return (
    <motion.div
      initial={{ 
        x: Math.random() * window.innerWidth, 
        y: -20,
        rotate: 0,
        opacity: 1
      }}
      animate={{ 
        y: window.innerHeight + 100,
        x: Math.random() * window.innerWidth,
        rotate: Math.random() * 360 * (Math.random() > 0.5 ? 1 : -1),
        opacity: [1, 1, 0]
      }}
      transition={{ 
        duration: Math.random() * 2 + 2, // 2-4 seconds
        ease: "easeOut",
        delay: Math.random() * 0.5, // staggered start
        times: [0, 0.8, 1]
      }}
      style={{
        position: "absolute",
        width: size,
        height: size * (Math.random() * 2 + 1), // Rectangular confetti
        backgroundColor: randomColor,
        borderRadius: Math.random() > 0.5 ? "2px" : "50%", // Mix of shapes
        zIndex: 60,
      }}
    />
  );
};

const GiftBoxAnimation = ({ onAnimationComplete }: GiftBoxAnimationProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const [bowDropped, setBowDropped] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isInteractionDisabled, setIsInteractionDisabled] = useState(false);
  
  useEffect(() => {
    if (isOpened) {
      // Show confetti when box opens
      setShowConfetti(true);
      // Remove blur effect after box is fully opened
      const timer = setTimeout(() => {
        setIsBlurred(false);
        setIsInteractionDisabled(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isOpened]);

  const handleInteraction = () => {
    if (isInteractionDisabled || bowDropped) return;
    
    setIsInteractionDisabled(true);
    setBowDropped(true);
    
    // Start blur effect slightly before box opens
    setTimeout(() => setIsBlurred(true), 800);
    
    // Start the box opening animation after bow drops
    setTimeout(() => {
      setIsOpened(true);
      if (onAnimationComplete) {
        setTimeout(onAnimationComplete, 2000);
      }
    }, 1200);
  };

  // Shimmer animation variants
  const shimmerVariants = {
    animate: {
      backgroundPosition: ['0% 0%', '200% 0%'],
      transition: {
        duration: 3,
        ease: "linear",
        repeat: Infinity
      }
    }
  };

  // Pattern glow animation
  const patternGlowVariants = {
    animate: {
      filter: [
        'brightness(1) hue-rotate(0deg)',
        'brightness(1.2) hue-rotate(45deg)',
        'brightness(1) hue-rotate(0deg)'
      ],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity
      }
    }
  };

  // Generate particles
  const confettiParticles = Array.from({ length: 80 }).map((_, i) => (
    <Confetti key={i} index={i} />
  ));

  return (
    <AnimatePresence>
      <motion.div
        initial={false}
        animate={{
          backdropFilter: isBlurred ? 'blur(10px)' : 'blur(0px)',
          WebkitBackdropFilter: isBlurred ? 'blur(10px)' : 'blur(0px)',
        }}
        transition={{ 
          duration: 1,
          ease: "easeInOut"
        }}
        className="fixed inset-0 z-40 pointer-events-none"
      />

      {/* Confetti animation */}
      {showConfetti && confettiParticles}

      {!isOpened ? (
        <div className="fixed inset-0 flex items-center justify-center bg-[#FF7B7B] z-50 overflow-hidden touch-none">
          <div className="relative w-full h-full">
            {/* Ripple effects */}
            <Ripple delay={0} />
            <Ripple delay={0.5} />
            <Ripple delay={1} />

            {/* Background gift pattern with enhanced glow */}
            <motion.div 
              className="absolute inset-0"
              variants={patternGlowVariants}
              animate="animate"
              style={{
                backgroundImage: 'url(/gift-pattern.svg)',
                backgroundSize: '200px',
                opacity: bowDropped ? 0 : 0.3,
                mixBlendMode: 'soft-light',
              }}
            />

            {/* Enhanced shimmer overlay */}
            <motion.div
              className="absolute inset-0"
              variants={shimmerVariants}
              animate="animate"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
                backgroundSize: '200% 100%',
                opacity: bowDropped ? 0 : 0.5,
                mixBlendMode: 'overlay',
              }}
              transition={{ duration: 0.5 }}
            />
            
            {/* Additional radial glow behind pattern */}
            <motion.div
              className="absolute inset-0"
              animate={{
                opacity: [0.4, 0.6, 0.4]
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity
              }}
              style={{
                background: 'radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)',
                mixBlendMode: 'overlay'
              }}
            />

            {/* Pulsing text */}
            <motion.div
              className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
              animate={{
                scale: [1, 1.05, 1],
                opacity: bowDropped ? 0 : 1
              }}
              transition={{
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                opacity: { duration: 0.5 }
              }}
            >
              <motion.h2 
                className="text-white text-2xl md:text-3xl font-bold tracking-wider"
                style={{ textShadow: "0 0 10px rgba(255,255,255,0.5)" }}
              >
                {isInteractionDisabled ? "Opening..." : "Tap the bow to reveal"}
              </motion.h2>
            </motion.div>
            
            {/* Glow effect behind bow */}
            <motion.div
              className="fixed rounded-full"
              style={{
                top: '50%',
                left: '50%',
                x: '-50%',
                y: '-50%',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
              }}
              animate={bowDropped ? {
                opacity: 0,
                scale: 2,
                transition: { duration: 0.5 }
              } : {
                scale: [1, 1.1, 1],
                opacity: [0.6, 0.8, 0.6]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Clickable/tappable bow */}
            <motion.div
              className="fixed cursor-pointer select-none"
              style={{
                top: '50%',
                left: '50%',
                x: '-50%',
                y: '-50%',
                width: '180px',
                height: '180px',
                touchAction: 'none',
              }}
              animate={bowDropped ? {
                y: ['-50%', window.innerHeight],
                rotate: [0, 720],
                scale: [1, 0.8],
                transition: {
                  duration: 1.2,
                  ease: [0.33, 1, 0.68, 1],
                  times: [0, 1],
                  scale: {
                    duration: 0.3,
                    ease: "easeInOut"
                  }
                }
              } : {}}
              whileHover={{
                scale: 1.1,
                rotate: [0, 10, -10, 0],
                filter: "brightness(1.1)",
                transition: {
                  rotate: {
                    duration: 1,
                    ease: "easeInOut",
                    repeat: Infinity
                  },
                  scale: {
                    duration: 0.3
                  }
                }
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.1 }
              }}
              onClick={handleInteraction}
              onTouchStart={handleInteraction}
              role="button"
              tabIndex={0}
              aria-label="Open gift box"
            >
              <img 
                src="/bow.png" 
                alt="Gift Bow" 
                className="w-full h-full pointer-events-none"
                draggable="false"
                style={{ filter: "drop-shadow(0 0 10px rgba(255,255,255,0.5))" }}
              />
            </motion.div>
          </div>
        </div>
      ) : (
        <>
          {/* Light beams when opened */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.7, 0] }}
            transition={{ duration: 1.5, times: [0, 0.2, 1] }}
            className="fixed inset-0 z-45 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
            }}
          />
          
          {/* Top half */}
          <motion.div
            initial={{ y: 0, rotateX: 0 }}
            animate={{ y: '-100%', rotateX: 60 }}
            transition={{ 
              duration: 2,
              ease: [0.4, 0, 0.2, 1],
              rotateX: {
                duration: 1.5,
                ease: "easeOut"
              }
            }}
            style={{
              transformOrigin: 'bottom',
              perspective: 1000,
              boxShadow: '0 0 30px rgba(255,123,123,0.8)'
            }}
            className="fixed top-0 left-0 w-full h-1/2 bg-[#FF7B7B] z-50"
          />
          
          {/* Bottom half */}
          <motion.div
            initial={{ y: 0, rotateX: 0 }}
            animate={{ y: '100%', rotateX: -60 }}
            transition={{ 
              duration: 2,
              ease: [0.4, 0, 0.2, 1],
              rotateX: {
                duration: 1.5,
                ease: "easeOut"
              }
            }}
            style={{
              transformOrigin: 'top',
              perspective: 1000,
              boxShadow: '0 0 30px rgba(255,123,123,0.8)'
            }}
            className="fixed bottom-0 left-0 w-full h-1/2 bg-[#FF7B7B] z-50"
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default GiftBoxAnimation; 