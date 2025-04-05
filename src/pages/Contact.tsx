
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-sylonow-dark to-black text-white">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-16 px-6 md:px-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Get in Touch</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              Have questions about our platform or interested in early access? 
              We'd love to hear from you!
            </p>
            <div className="h-1 w-32 bg-gradient-to-r from-sylonow-purple to-sylonow-gold mx-auto"></div>
          </motion.div>
          
          <ContactForm />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
