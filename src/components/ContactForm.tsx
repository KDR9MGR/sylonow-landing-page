
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { motion } from 'framer-motion';

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would submit this to a backend
    toast({
      title: "Success!",
      description: "You've been added to our waitlist. We'll notify you when we launch!",
    });
  };

  return (
    <section id="contact" className="py-16 px-6 md:px-10">
      <motion.div 
        className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="text-2xl font-bold text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Get Early Access
        </motion.h2>
        <motion.p 
          className="text-gray-600 text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Join our waitlist to get exclusive early access to the Sylonow platform when we launch.
        </motion.p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Input
              type="text"
              placeholder="Name"
              required
              className="w-full"
            />
          </motion.div>
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Input
              type="email"
              placeholder="Email"
              required
              className="w-full"
            />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-sylonow-purple to-sylonow-gold hover:opacity-90 transition-all"
            >
              Join Waitlist
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
