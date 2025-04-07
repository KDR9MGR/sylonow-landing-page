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
      {/* Subtle blob effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-1/2 h-1/2 bg-sylonow-purple/10 rounded-full blur-[80px] opacity-20"></div>
        <div className="absolute -bottom-1/2 -right-1/4 w-1/2 h-1/2 bg-sylonow-gold/10 rounded-full blur-[80px] opacity-20"></div>
      </div>
      
      <div className="flex items-center relative z-10">
        <Link to="/">
          <img 
            src="/web-logo.png" 
            alt="Sylonow Logo" 
            className="h-16 mr-2"
          />
        </Link>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium relative z-10">
        {navigation.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to={item.href} 
              className="text-white hover:text-sylonow-gold transition-colors jersey-15-regular text-base"
            >
              {item.name}
            </Link>
          </motion.div>
        ))}
      </div>
      
      {/* Mobile Menu Button */}
      <div className="md:hidden relative z-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white p-2"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <img 
              src="/jam_menu.png" 
              alt="Sylonow Logo" 
              className="h-8"
            />
          )}
        </motion.button>
      </div>
      
      {/* Special Invite Button */}
      <div className="hidden md:block relative z-10">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/contact">
            <Button className="bg-gradient-to-r from-sylonow-purple to-sylonow-gold hover:shadow-lg hover:opacity-90 transition-all px-6 rounded-full jersey-15-regular">
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
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-sylonow-purple/5 rounded-full blur-[100px]"></div>
          </div>
          
          <div className="flex flex-col space-y-4 relative z-10">
            {navigation.map((item) => (
              <Link 
                key={item.name}
                to={item.href} 
                className="text-white hover:text-sylonow-gold py-2 px-4 rounded-lg hover:bg-white/5 transition-colors jersey-15-regular" 
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="bg-gradient-to-r from-sylonow-purple to-sylonow-gold hover:opacity-90 transition-all w-full mt-2 rounded-lg jersey-15-regular">
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
