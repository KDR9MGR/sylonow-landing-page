import React from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <motion.div 
      className={`flex items-center gap-2 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="p-1.5 bg-gradient-to-br from-purple-600 to-violet-800 rounded-lg shadow-lg gift-shimmer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Gift className="h-6 w-6 text-white" />
      </motion.div>
      <motion.div className="font-bold text-xl tracking-tight">
        <span className="bg-gradient-to-r from-violet-500 to-purple-300 bg-clip-text text-transparent">
          Sylo
        </span>
        <span className="text-white">Now</span>
      </motion.div>
    </motion.div>
  );
};

export default Logo; 