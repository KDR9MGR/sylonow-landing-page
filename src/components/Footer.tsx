
import React from 'react';
import { Linkedin, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-sylonow-dark text-white py-12 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4 gradient-text">Sylonow</h3>
            <p className="text-gray-300 mb-4">
              Making celebrations memorable through our innovative platform connecting customers with specialized surprise service providers.
            </p>
            <p className="text-gray-300">
              <span className="block">Bengaluru, Karnataka, India</span>
              <a href="mailto:info@sylonow.com" className="hover:text-sylonow-gold transition-colors">info@sylonow.com</a>
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-sylonow-gold transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-sylonow-gold transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-sylonow-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://linkedin.com/company/sylonow" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sylonow-gold transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://facebook.com/sylonow" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sylonow-gold transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com/sylonow" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sylonow-gold transition-colors">
                <Instagram size={24} />
              </a>
              <a href="mailto:info@sylonow.com" className="text-gray-300 hover:text-sylonow-gold transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <p className="text-gray-300">
              <span className="block">Website: <a href="https://www.sylonow.com" className="hover:text-sylonow-gold transition-colors">www.sylonow.com</a></span>
              <span className="block">Social: @sylonow</span>
            </p>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-400">
          <p>© {currentYear} Sylonow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
