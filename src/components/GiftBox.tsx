
import React, { useState, useEffect } from 'react';
import { Gift, Stars } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const GiftBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="gift-box relative w-64 h-64 mx-auto my-8 animate-gift-box-appear cursor-pointer" onClick={() => setIsOpen(true)}>
      {/* Gift lid */}
      <motion.div 
        className={`gift-box-lid absolute top-0 left-0 w-full h-1/3 bg-gradient-to-r from-sylonow-purple to-purple-400 rounded-t-lg z-20`}
        animate={isOpen ? { rotateX: -110 } : { rotateX: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        style={{ transformOrigin: "center top" }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-4 bg-gradient-to-r from-sylonow-gold to-yellow-300 rounded-full"></div>
      </motion.div>
      
      {/* Box body */}
      <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-r from-sylonow-purple to-purple-400 rounded-b-lg z-10">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-r from-sylonow-gold to-yellow-300"></div>
      </div>
      
      {/* Gift content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-0"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -30 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="text-2xl font-bold text-white mb-2">
              <span className="block font-display">Early Access</span>
              <span className="text-sylonow-gold">20% OFF</span>
            </div>
            <div className="text-sm text-white">Limited time offer</div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sparkles */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -top-4 -right-4"
            >
              <Stars className="text-sylonow-gold animate-pulse" size={20} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -top-6 left-4"
            >
              <Stars className="text-sylonow-gold animate-pulse" size={15} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute top-2 -left-4"
            >
              <Stars className="text-sylonow-gold animate-pulse" size={18} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GiftBox;
