import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu, X, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Career', href: '/career' },
  { name: 'Contact', href: '/contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`py-4 px-6 md:px-10 flex items-center justify-between sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-md bg-[#121212]/80 shadow-lg' 
          : 'backdrop-blur-sm bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center">
        <Link to="/">
          <img 
            src="/lovable-uploads/logo.png" 
            alt="Sylonow Logo" 
            className="h-10 mr-2"
          />
        </Link>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" className="text-white hover:text-sylonow-gold transition-colors">
            Home
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/about" className="text-white hover:text-sylonow-gold transition-colors">
            About
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/contact" className="text-white hover:text-sylonow-gold transition-colors">
            Contact
          </Link>
        </motion.div>
      </div>
      
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white p-2"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </motion.button>
      </div>
      
      {/* Special Invite Button */}
      <div className="hidden md:block">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/contact">
            <Button className="bg-gradient-to-r from-sylonow-purple to-sylonow-gold hover:shadow-lg hover:opacity-90 transition-all px-6 rounded-full font-poppins">
              <Gift className="h-4 w-4 mr-2" /> Special Invite
            </Button>
          </Link>
        </motion.div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div 
          className="absolute top-full left-0 right-0 bg-[#121212]/95 backdrop-blur-md py-6 px-6 shadow-lg md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-white hover:text-sylonow-gold py-2 px-4 rounded-lg hover:bg-white/5 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-sylonow-gold py-2 px-4 rounded-lg hover:bg-white/5 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link to="/contact" className="text-white hover:text-sylonow-gold py-2 px-4 rounded-lg hover:bg-white/5 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="bg-gradient-to-r from-sylonow-purple to-sylonow-gold hover:opacity-90 transition-all w-full mt-2 rounded-lg font-poppins">
                <Gift className="h-4 w-4 mr-2" /> Special Invite
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
