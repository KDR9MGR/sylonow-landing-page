import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, MapPin, Users, Globe, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  // Gift box animation for founder cards
  const giftVariants = {
    hidden: { 
      scale: 0.8,
      opacity: 0,
      y: 20
    },
    visible: (i = 0) => ({ 
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: 0.2 + (i * 0.2)
      }
    }),
    hover: { 
      y: -10,
      boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.35)",
      transition: { duration: 0.3 }
    }
  };

  const companyDetails = [
    { icon: <Calendar className="h-5 w-5" />, label: 'Launch Date', value: 'May 2025' },
    { icon: <MapPin className="h-5 w-5" />, label: 'Headquarters', value: 'Bengaluru, Karnataka, India' },
    { icon: <Users className="h-5 w-5" />, label: 'Founders', value: '3 Visionary Co-Founders' },
    { icon: <Globe className="h-5 w-5" />, label: 'Service Areas', value: 'Launching in Bengaluru, expanding across India' },
  ];

  const founders = [
    {
      name: "Srikanth M",
      role: "CEO & Founder",
      quote: "We're not in the business of events; we're in the business of memories.",
      image: "/lovable-uploads/founder1.png" // Replace with actual founder image
    },
    {
      name: "Sangamesh",
      role: "MD & Co-Founder",
      quote: "Every surprise, every detail, every moment—woven together to create magic.",
      image: "/lovable-uploads/founder2.png" // Replace with actual founder image
    },
    {
      name: "Gagan B",
      role: "Co-Founder",
      quote: "From surprises to smiles, we design emotions you can relive forever.",
      image: "/lovable-uploads/founder3.png" // Replace with actual founder image
    }
  ];

  const investor = {
    name: "Najil Hameed",
    role: "Angel Investor",
    quote: "Great investments create great stories—Sylonow is writing the best ones."
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#121212] to-[#2a1a5e] text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-montserrat tracking-tight">
              <span className="text-sylonow-gold">About</span> Sylonow
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 font-poppins">
              We're on a mission to redefine how people celebrate life's special moments, 
              creating unforgettable memories through personalized surprises and experiences.
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {companyDetails.map((detail, index) => (
              <motion.div 
                key={index} 
                className="flex items-start gap-4 p-5 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 hover:border-sylonow-purple/30 transition-all"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-2 bg-sylonow-purple/20 rounded-full text-sylonow-gold">
                  {detail.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{detail.label}</h3>
                  <p className="text-gray-300">{detail.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Founders Section */}
      <section className="py-16 px-6 md:px-10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
              Meet Our <span className="text-sylonow-gold">Founders</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              The visionaries behind Sylonow who are passionate about creating memorable experiences 
              and redefining the celebration industry.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={giftVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="bg-gradient-to-br from-[#2a1a5e]/80 to-[#1a0938]/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-purple-500/10"
              >
                <div className="h-48 bg-gradient-to-r from-sylonow-purple/30 to-sylonow-gold/30 flex items-center justify-center overflow-hidden relative">
                  {/* Placeholder for founder image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
                  
                  <motion.div
                    className="w-32 h-32 rounded-full bg-sylonow-purple/50 backdrop-blur-sm relative overflow-hidden border-4 border-sylonow-gold/30 z-10"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white">
                      {founder.name.charAt(0)}
                    </div>
                  </motion.div>
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1 font-montserrat">{founder.name}</h3>
                  <p className="text-sylonow-gold mb-4 text-sm font-medium tracking-wider">{founder.role}</p>
                  
                  <blockquote className="italic text-gray-300 relative z-10">
                    <span className="text-5xl absolute -top-6 -left-2 opacity-10">"</span>
                    {founder.quote}
                    <span className="text-5xl absolute -bottom-10 -right-2 opacity-10">"</span>
                  </blockquote>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Investor Section */}
      <section className="py-16 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3 font-display">
              Backed By <span className="text-sylonow-gold">Visionary Investor</span>
            </h2>
          </motion.div>
          
          <motion.div
            variants={giftVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="bg-gradient-to-br from-[#2a1a5e]/60 to-[#1a0938]/60 backdrop-blur-sm p-8 rounded-xl border border-purple-500/10 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <motion.div 
                className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-sylonow-purple to-sylonow-gold rounded-full"
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <Star className="h-8 w-8 text-white" />
              </motion.div>
            </div>
            
            <blockquote className="text-xl text-center italic text-gray-200 relative z-10 mb-6">
              <span className="text-6xl absolute -top-10 -left-2 opacity-10 text-sylonow-gold">"</span>
              {investor.quote}
              <span className="text-6xl absolute -bottom-16 -right-2 opacity-10 text-sylonow-gold">"</span>
            </blockquote>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold font-montserrat">{investor.name}</h3>
              <p className="text-sylonow-gold">{investor.role}</p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-16 px-6 md:px-10 bg-gradient-to-b from-[#2a1a5e]/50 to-[#1a0938]/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-display">
              Our <span className="text-sylonow-gold">Vision</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 font-poppins">
              We envision a world where every celebration is extraordinary, 
              where moments of joy are crafted with precision and care, and where 
              creating unforgettable memories is accessible to everyone.
            </p>
            
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
            >
              <a 
                href="/" 
                className="inline-block px-8 py-3 bg-gradient-to-r from-sylonow-purple to-sylonow-gold rounded-full text-white font-medium hover:shadow-glow transition-all"
              >
                Back to Home
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About; 