import React from 'react';
import { Linkedin, Mail, Instagram, Facebook, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sylonow?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      icon: <Linkedin className="h-6 w-6" />
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/sylonow',
      icon: <Instagram className="h-6 w-6" />
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/share/153oaG1MHN/',
      icon: <Facebook className="h-6 w-6" />
    }
  ];

  return (
    <footer className="bg-black/20 backdrop-blur-md border-t border-white/10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <img src="/logo.png" alt="Sylonow Logo" className="h-12" />
          
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label={`Visit our ${item.name} page`}
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm text-center">
            © {currentYear} Sylonow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
