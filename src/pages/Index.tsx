
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import GiftBox from '@/components/GiftBox';
import CountdownTimer from '@/components/CountdownTimer';
import AboutSection from '@/components/AboutSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';

const Index = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="py-16 px-6 md:px-10 bg-[url('data:image/svg+xml;base64,PHN2ZyBpZD0idmlzdWFsIiB2aWV3Qm94PSIwIDAgOTAwIDYwMCIgd2lkdGg9IjkwMCIgaGVpZ2h0PSI2MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjkwMCIgaGVpZ2h0PSI2MDAiIGZpbGw9IiNmZmZmZmYiPjwvcmVjdD48cGF0aCBkPSJNMCA0MTVMMjUgNDE3LjJDNTAgNDE5LjMgMTAwIDQyMy43IDE1MCA0MTcuN0MyMDAgNDExLjcgMjUwIDM5NS4zIDMwMCAzOTAuN0MzNTAgMzg2IDQwMCAzOTMgNDUwIDQwNC4zQzUwMCA0MTUuNyA1NTAgNDMxLjMgNjAwIDQyNEM2NTAgNDE2LjcgNzAwIDM4Ni4zIDc1MCAzODUuOEM4MDAgMzg1LjMgODUwIDQxNC43IDg3NSA0MjkuM0w5MDAgNDQ0TDkwMCA2MDFMODc1IDYwMUM4NTAgNjAxIDgwMCA2MDEgNzUwIDYwMUM3MDAgNjAxIDY1MCA2MDEgNjAwIDYwMUM1NTAgNjAxIDUwMCA2MDEgNDUwIDYwMUM0MDAgNjAxIDM1MCA2MDEgMzAwIDYwMUMyNTAgNjAxIDIwMCA2MDEgMTUwIDYwMUMxMDAgNjAxIDUwIDYwMSAyNSA2MDFMMCA2MDFaIiBmaWxsPSIjZjNlOGZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiPjwvcGF0aD48L3N2Zz4=')] bg-cover min-h-[85vh] flex flex-col justify-center items-center text-center relative">
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
              className="block mb-2"
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
            className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto"
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
              className="text-xl md:text-2xl font-bold mb-2"
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
            <a href="#contact">
              <Button className="bg-gradient-to-r from-sylonow-purple to-sylonow-gold hover:shadow-lg hover:opacity-90 transition-all px-8 py-6 text-lg">
                <Gift className="mr-2 h-5 w-5" /> Get Early Access
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </section>
      
      <AboutSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
