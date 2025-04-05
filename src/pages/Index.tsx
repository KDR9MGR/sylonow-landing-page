
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import GiftBox from '@/components/GiftBox';
import CountdownTimer from '@/components/CountdownTimer';
import Footer from '@/components/Footer';
import { Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Index = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-sylonow-dark to-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="py-16 px-6 md:px-10 min-h-[85vh] flex flex-col justify-center items-center text-center relative">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUpVariants}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            variants={fadeInUpVariants}
          >
            <motion.span 
              className="block mb-2 text-white"
              variants={fadeInUpVariants}
            >
              Making Celebrations
            </motion.span>
            <motion.span 
              className="gradient-text"
              variants={fadeInUpVariants}
            >
              Extraordinary
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            variants={fadeInUpVariants}
          >
            Sylonow is revolutionizing the way you celebrate special moments with our innovative platform launching in May 2025.
          </motion.p>
          
          <motion.div 
            className="relative"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GiftBox />
          </motion.div>
          
          <motion.div 
            className="mt-4"
            variants={fadeInUpVariants}
          >
            <motion.h2 
              className="text-xl md:text-2xl font-bold mb-2 text-white"
              variants={fadeInUpVariants}
            >
              Launching in
            </motion.h2>
            <CountdownTimer />
          </motion.div>
          
          <motion.div 
            className="mt-6"
            variants={fadeInUpVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-sylonow-purple to-sylonow-gold hover:shadow-lg hover:opacity-90 transition-all px-8 py-6 text-lg">
                <Gift className="mr-2 h-5 w-5" /> Get Early Access
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
