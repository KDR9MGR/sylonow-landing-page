
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const CareerHeader: React.FC = () => {
  return (
    <motion.div 
      className="text-center mb-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-center mb-4">
        <Briefcase className="w-12 h-12 text-sylonow-gold" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">
        Sylonow's Talent Accelerator Program
      </h1>
      <p className="text-lg md:text-xl text-purple-300 mb-4 font-light">
        Passion over qualifications. Join us to build something extraordinary!
      </p>
    </motion.div>
  );
};

export default CareerHeader;
