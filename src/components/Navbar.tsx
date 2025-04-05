
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <motion.nav 
      className="py-4 px-6 md:px-10 flex items-center justify-between backdrop-blur-md bg-sylonow-dark/60 border-b border-sylonow-purple/10 sticky top-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" className="flex items-center">
        <img 
          src="/lovable-uploads/1dc6efbb-3be4-4306-afa7-7b6d4a503d1f.png" 
          alt="Sylonow Logo" 
          className="h-10 mr-2"
        />
      </Link>
      <div className="hidden md:flex items-center space-x-6 text-sm">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" className="text-white hover:text-sylonow-purple transition-colors">
            Home
          </Link>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/about" className="text-white hover:text-sylonow-purple transition-colors">
            About
          </Link>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/contact" className="text-white hover:text-sylonow-purple transition-colors">
            Contact
          </Link>
        </motion.div>
      </div>
      <div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/contact">
            <Button className="bg-gradient-to-r from-sylonow-purple to-sylonow-gold hover:shadow-lg hover:opacity-90 transition-all">
              Special Invite
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
