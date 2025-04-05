
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav 
      className="py-4 px-6 md:px-10 flex items-center justify-between backdrop-blur-md bg-white/60 sticky top-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center">
        <img 
          src="/lovable-uploads/1dc6efbb-3be4-4306-afa7-7b6d4a503d1f.png" 
          alt="Sylonow Logo" 
          className="h-10 mr-2"
        />
      </div>
      <div className="hidden md:flex items-center space-x-6 text-sm">
        <motion.a 
          href="#home" 
          className="hover:text-sylonow-purple transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Home
        </motion.a>
        <motion.a 
          href="#about" 
          className="hover:text-sylonow-purple transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          About
        </motion.a>
        <motion.a 
          href="#contact" 
          className="hover:text-sylonow-purple transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact
        </motion.a>
      </div>
      <div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button className="bg-gradient-to-r from-sylonow-purple to-sylonow-gold hover:shadow-lg hover:opacity-90 transition-all">
            Join Waitlist
          </Button>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
