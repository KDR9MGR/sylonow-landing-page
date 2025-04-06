import React from 'react';
import { Linkedin, Mail, Instagram, Facebook, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-sylonow-black text-white py-12 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 bg-gradient-to-br from-purple-600 to-violet-800 rounded-lg shadow-lg gift-shimmer">
                <Gift className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold">
                <span className="bg-gradient-to-r from-violet-500 to-purple-300 bg-clip-text text-transparent">
                  Sylo
                </span>
                <span className="text-white">Now</span>
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              Making celebrations memorable through our innovative platform connecting customers with specialized surprise service providers.
            </p>
            <p className="text-gray-300">
              <span className="block">Bengaluru, Karnataka, India</span>
              <a href="mailto:info@sylonow.com" className="hover:text-purple-400 transition-colors">info@sylonow.com</a>
            </p>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-1">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 h-0.5 bg-purple-500"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-1">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 h-0.5 bg-purple-500"></span>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-1">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 h-0.5 bg-purple-500"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
          
          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://linkedin.com/company/sylonow" target="_blank" rel="noopener noreferrer" 
                className="text-gray-300 hover:text-purple-400 transition-colors p-2 rounded-full hover:bg-purple-900/30">
                <Linkedin size={20} />
              </a>
              <a href="https://facebook.com/sylonow" target="_blank" rel="noopener noreferrer" 
                className="text-gray-300 hover:text-purple-400 transition-colors p-2 rounded-full hover:bg-purple-900/30">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com/sylonow" target="_blank" rel="noopener noreferrer" 
                className="text-gray-300 hover:text-purple-400 transition-colors p-2 rounded-full hover:bg-purple-900/30">
                <Instagram size={20} />
              </a>
              <a href="mailto:info@sylonow.com" 
                className="text-gray-300 hover:text-purple-400 transition-colors p-2 rounded-full hover:bg-purple-900/30">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-300">
              <span className="block">Website: <a href="https://www.sylonow.com" className="hover:text-purple-400 transition-colors">www.sylonow.com</a></span>
              <span className="block">Social: @sylonow</span>
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>© {currentYear} Sylonow. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
