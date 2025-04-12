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
        <div className="p-4 rounded-full bg-gradient-to-r from-pink-100 to-purple-100">
          <Briefcase className="w-12 h-12 text-pink-600" />
        </div>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
        Sylonow's Talent Accelerator Program
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-4">
        Passion over qualifications. Join us to build something extraordinary!
      </p>
      <div className="max-w-2xl mx-auto bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-gray-100 shadow-lg">
        <p className="text-gray-600">
          We're looking for passionate individuals who want to be part of something special. 
          At Sylonow, we believe in nurturing talent and providing opportunities for growth.
        </p>
      </div>
    </motion.div>
  );
};

export default CareerHeader;
