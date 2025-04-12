import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/career' },
      { label: 'Contact', href: '/contact' },
      { label: 'Blog', href: '/blog' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
      { label: 'Cookie Policy', href: '/cookie-policy' },
      { label: 'GDPR', href: '/gdpr' },
    ],
    support: [
      { label: 'Help Center', href: '/help' },
      { label: 'FAQs', href: '/faqs' },
      { label: 'Contact Support', href: '/contact' },
      { label: 'System Status', href: '/status' },
    ],
  };

  const socialLinks = [
    { Icon: Linkedin, href: 'https://www.linkedin.com/company/sylonow-main/', label: 'LinkedIn' },
    { Icon: Facebook, href: ' https://www.facebook.com/share/153oaG1MHN/', label: 'Facebook' },
    { Icon: Instagram, href: 'https://instagram.com/sylonow', label: 'Instagram' },
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                <img 
                  src="lovable-uploads/logo.png" 
                  alt="Sylonow Logo" 
                  className="h-8 mb-4"
                />
              </motion.div>
            </Link>
            <p className="text-sm text-gray-600 mb-4">
              Transforming celebrations with AI-powered innovation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-gray-900 uppercase mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href}>
                      <motion.span
                        whileHover={{ x: 2 }}
                        className="text-sm text-gray-600 hover:text-pink-600 transition-colors cursor-pointer"
                      >
                        {link.label}
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-100 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <span>© {currentYear} Sylonow. Made with</span>
              <Heart className="w-4 h-4 text-pink-600 inline" />
              <span>in India</span>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <Link to="/legal/accessibility">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="hover:text-pink-600 transition-colors"
                >
                  Accessibility
                </motion.span>
              </Link>
              <Link to="/legal/privacy-policy#do-not-sell">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="hover:text-pink-600 transition-colors"
                >
                  Do Not Sell My Info
                </motion.span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
