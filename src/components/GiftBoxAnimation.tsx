import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WelcomeTypingAnimation from './WelcomeTypingAnimation';

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
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle touch move to prevent default scrolling
  useEffect(() => {
    if (!isAnimationComplete) {
      const handleTouchMove = (e: TouchEvent) => {
        if (!isAnimationComplete) {
          e.preventDefault();
        }
      };

      // Add touch-action: none to the root element
      document.documentElement.style.setProperty('touch-action', 'none');
      document.body.style.setProperty('touch-action', 'none');
      
      // Add the event listener with passive: false
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      
      return () => {
        document.removeEventListener('touchmove', handleTouchMove);
        document.documentElement.style.removeProperty('touch-action');
        document.body.style.removeProperty('touch-action');
      };
    }
  }, [isAnimationComplete]);

  // Prevent scrolling only during the animation
  useEffect(() => {
    if (!isAnimationComplete) {
      const originalStyles = {
        overflow: document.body.style.overflow,
        position: document.body.style.position,
        width: document.body.style.width,
        height: document.body.style.height,
        top: document.body.style.top,
        left: document.body.style.left
      };

      // Store current scroll position
      const scrollY = window.scrollY;

      // Apply styles to prevent scrolling
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0px';

      return () => {
        // Restore original styles
        Object.entries(originalStyles).forEach(([key, value]) => {
          document.body.style[key as any] = value;
        });
        
        // Restore scroll position
        window.scrollTo(0, scrollY);
      };
    }
  }, [isAnimationComplete]);
  
  useEffect(() => {
    if (isOpened && !isAnimationComplete) {
      setShowConfetti(true);
      const timer = setTimeout(() => {
        setIsBlurred(false);
        setIsInteractionDisabled(false);
        setTimeout(() => {
          setShowWelcome(true);
        }, 500);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isOpened, isAnimationComplete]);

  const handleInteraction = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (isInteractionDisabled || bowDropped) return;
    
    setIsInteractionDisabled(true);
    setBowDropped(true);
    
    // Start blur effect slightly before box opens
    setTimeout(() => setIsBlurred(true), 800);
    
    // Start the box opening animation after bow drops
    setTimeout(() => {
      setIsOpened(true);
    }, 1200);
  }, [isInteractionDisabled, bowDropped]);

  const handleWelcomeComplete = useCallback(() => {
    setIsAnimationComplete(true);
    if (onAnimationComplete) {
      onAnimationComplete();
    }
  }, [onAnimationComplete]);

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
    <AnimatePresence mode="wait">
      {!isAnimationComplete ? (
        <>
          <motion.div
            initial={false}
            animate={{
              backdropFilter: isBlurred ? 'blur(10px)' : 'blur(0px)',
              WebkitBackdropFilter: isBlurred ? 'blur(10px)' : 'blur(0px)',
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-40"
            style={{ pointerEvents: isAnimationComplete ? 'none' : 'auto' }}
          />

          {/* Confetti animation */}
          {showConfetti && confettiParticles}

          {/* Welcome Animation */}
          {showWelcome && <WelcomeTypingAnimation onComplete={handleWelcomeComplete} />}

          {!isOpened ? (
            <div className="fixed inset-0 flex items-center justify-center bg-[#FF7B7B] z-50 overflow-hidden">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Background pattern - Updated to use pattern.svg */}
                <motion.div 
                  className="absolute inset-0"
                  animate={{
                    opacity: bowDropped ? 0 : 0.15,
                    scale: bowDropped ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.8 }}
                  style={{
                    backgroundImage: 'url(/pattern.svg)',
                    backgroundSize: '500px',
                    backgroundRepeat: 'repeat',
                    filter: 'brightness(1.2)',
                  }}
                />

                {/* Enhanced shimmer overlay */}
                <motion.div
                  className="absolute inset-0"
                  variants={shimmerVariants}
                  animate="animate"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                    backgroundSize: '200% 100%',
                    opacity: bowDropped ? 0 : 0.6,
                    mixBlendMode: 'overlay'
                  }}
                  transition={{ duration: 0.5 }}
                />

                {/* Pattern glow effect */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    backgroundImage: 'url(/pattern.svg)',
                    backgroundSize: '300px',
                    backgroundRepeat: 'repeat',
                    filter: 'blur(20px) brightness(1.5)',
                    mixBlendMode: 'overlay'
                  }}
                />

                {/* Interactive bow area - updated for better mobile handling */}
                <motion.div
                  className="absolute w-[200px] h-[200px] cursor-pointer select-none"
                  style={{
                    touchAction: 'manipulation',
                    WebkitTapHighlightColor: 'transparent',
                    zIndex: 55
                  }}
                  animate={bowDropped ? {
                    y: window.innerHeight,
                    rotate: 360,
                    scale: 0.8,
                    transition: {
                      duration: 2,
                      ease: [0.2, 0.8, 0.2, 1],
                      y: {
                        duration: 5,
                        ease: [0.2, 0.8, 0.2, 1]
                      },
                      rotate: {
                        duration: 5,
                        ease: [0.2, 0.8, 0.2, 1]
                      },
                      scale: {
                        duration: 1.0,
                        ease: "easeInOut"
                      }
                    }
                  } : {}}
                  whileHover={{
                    scale: 1.1,
                    filter: "brightness(1.1)",
                    transition: { duration: 0.5 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleInteraction}
                  onTouchEnd={handleInteraction}
                  role="button"
                  tabIndex={0}
                  aria-label="Open gift box"
                >
                  <img 
                    src="/bow.png" 
                    alt="Gift Bow" 
                    className="w-full h-full select-none"
                    draggable="false"
                    style={{ 
                      filter: "drop-shadow(0 0 10px rgba(255,255,255,0.5))",
                      pointerEvents: 'none',
                      touchAction: 'manipulation'
                    }}
                  />
                </motion.div>

                {/* Instruction text */}
                <motion.div
                  className="absolute top-[20%] left-1/2 -translate-x-1/2 text-center"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: bowDropped ? 0 : 1
                  }}
                  transition={{
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
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
              
              {isMobile ? (
                // Mobile Animation (Top/Bottom)
                <>
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
              ) : (
                // Desktop Animation (Left/Right)
                <>
                  {/* Left half */}
                  <motion.div
                    initial={{ x: 0, rotateY: 0 }}
                    animate={{ x: '-100%', rotateY: -60 }}
                    transition={{ 
                      duration: 2,
                      ease: [0.4, 0, 0.2, 1],
                      rotateY: {
                        duration: 1.5,
                        ease: "easeOut"
                      }
                    }}
                    style={{
                      transformOrigin: 'right',
                      perspective: 1000,
                      boxShadow: '0 0 30px rgba(255,123,123,0.8)'
                    }}
                    className="fixed top-0 left-0 w-1/2 h-full bg-[#FF7B7B] z-50"
                  />
                  
                  {/* Right half */}
                  <motion.div
                    initial={{ x: 0, rotateY: 0 }}
                    animate={{ x: '100%', rotateY: 60 }}
                    transition={{ 
                      duration: 2,
                      ease: [0.4, 0, 0.2, 1],
                      rotateY: {
                        duration: 1.5,
                        ease: "easeOut"
                      }
                    }}
                    style={{
                      transformOrigin: 'left',
                      perspective: 1000,
                      boxShadow: '0 0 30px rgba(255,123,123,0.8)'
                    }}
                    className="fixed top-0 right-0 w-1/2 h-full bg-[#FF7B7B] z-50"
                  />
                </>
              )}
            </>
          )}
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-full"
          style={{ pointerEvents: 'none' }}
        />
      )}
    </AnimatePresence>
  );
};

export default GiftBoxAnimation; 