import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - 404 | Sylonow</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Sylonow homepage." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
        <Navbar />
        
        <div className="flex-grow pt-20 flex items-center justify-center">
          <motion.div 
            className="text-center px-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* 404 Illustration */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <div className="text-8xl md:text-9xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text mb-4">
                404
              </div>
              <div className="w-24 h-24 mx-auto bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </motion.div>

            {/* Error Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-8"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Oops! Page Not Found
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/">
                <Button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3">
                  <Home className="w-4 h-4 mr-2" />
                  Go to Homepage
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                onClick={() => window.history.back()}
                className="hover:bg-pink-50 hover:text-pink-600 hover:border-pink-300 px-6 py-3"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>
            </motion.div>

            {/* Helpful Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <p className="text-gray-600 mb-4">Maybe you're looking for one of these pages?</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/about" className="text-pink-600 hover:text-pink-800 hover:underline">
                  About Us
                </Link>
                <Link to="/blogs" className="text-pink-600 hover:text-pink-800 hover:underline">
                  Blog
                </Link>
                <Link to="/contact" className="text-pink-600 hover:text-pink-800 hover:underline">
                  Contact
                </Link>
                <Link to="/help" className="text-pink-600 hover:text-pink-800 hover:underline">
                  Help Center
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
