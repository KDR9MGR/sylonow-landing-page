import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, MapPin, Users, Globe, Star, Building2, Globe2, Eye, Target, Lightbulb, UserCircle, Award } from 'lucide-react';
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

  const companyInfo = [
    {
      title: "Launch Date",
      value: "March 2024",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      title: "Headquarters",
      value: "Bengaluru, Karnataka",
      icon: <Building2 className="w-6 h-6" />
    },
    {
      title: "Founders",
      value: "Team Sylonow",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Service Area",
      value: "Pan India",
      icon: <Globe2 className="w-6 h-6" />
    }
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
    <div className="min-h-screen bg-gradient-to-b from-[#121212] to-[#2a1a5e]">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Company Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Sylonow</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Transforming celebrations into unforgettable experiences through personalized surprise services.
          </p>
        </motion.div>

        {/* Company Info Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {companyInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-black/20 backdrop-blur-md rounded-xl p-6 flex flex-col items-center text-center"
            >
              <div className="bg-gradient-to-br from-sylonow-purple to-sylonow-gold p-3 rounded-lg mb-4">
                {info.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
              <p className="text-gray-300">{info.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-black/20 backdrop-blur-md rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Eye className="w-6 h-6 text-sylonow-purple" />
              Our Vision
            </h2>
            <p className="text-gray-300">
              To revolutionize the celebration industry by creating a seamless platform that brings joy and surprise to every special moment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-black/20 backdrop-blur-md rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Target className="w-6 h-6 text-sylonow-gold" />
              Our Mission
            </h2>
            <p className="text-gray-300">
              To deliver exceptional personalized celebration experiences that create lasting memories for our customers through innovative surprise services.
            </p>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Innovation",
                description: "Constantly pushing boundaries to create unique celebration experiences",
                icon: <Lightbulb className="w-6 h-6" />
              },
              {
                title: "Personalization",
                description: "Tailoring every experience to match individual preferences",
                icon: <UserCircle className="w-6 h-6" />
              },
              {
                title: "Quality",
                description: "Maintaining the highest standards in every service we deliver",
                icon: <Award className="w-6 h-6" />
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                className="bg-black/20 backdrop-blur-md rounded-xl p-6"
              >
                <div className="bg-gradient-to-br from-sylonow-purple to-sylonow-gold p-3 rounded-lg mb-4 mx-auto w-fit">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Founders Section */}
        <section className="mt-24 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Meet Our <span className="gradient-text">Founders</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              The visionaries behind Sylonow who are passionate about creating memorable experiences 
              and redefining the celebration industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-black/20 backdrop-blur-md rounded-xl overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-r from-sylonow-purple/30 to-sylonow-gold/30 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <motion.div
                    className="w-32 h-32 rounded-full bg-sylonow-purple/50 backdrop-blur-sm relative overflow-hidden border-4 border-sylonow-gold/30 z-10 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-4xl font-bold text-white">
                      {founder.name.charAt(0)}
                    </span>
                  </motion.div>
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 font-montserrat">{founder.name}</h3>
                  <p className="text-sylonow-gold mb-4 text-sm font-medium">{founder.role}</p>
                  <blockquote className="italic text-gray-300 relative">
                    <span className="text-5xl absolute -top-6 -left-2 opacity-10">"</span>
                    {founder.quote}
                    <span className="text-5xl absolute -bottom-10 -right-2 opacity-10">"</span>
                  </blockquote>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Investor Section */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Backed By <span className="gradient-text">Startup Whisperer</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black/20 backdrop-blur-md rounded-xl p-8 max-w-3xl mx-auto"
          >
            <div className="text-center mb-8">
              <div className="w-40 h-40 bg-gradient-to-r from-sylonow-purple to-sylonow-gold rounded-full flex items-center justify-center mx-auto mb-6">
                {/* Image of investor */}
                <img src="/investor.jpg" alt="Najil Hameed" className="w-full h-full object-cover rounded-full" />
              </div>
              <h3 className="text-2xl font-bold font-montserrat mb-2">{investor.name}</h3>
              <p className="text-sylonow-gold">{investor.role}</p>
            </div>

            <blockquote className="text-xl text-center italic text-gray-300 relative mb-8">
              <span className="text-6xl absolute -top-10 -left-2 opacity-10 text-sylonow-gold">"</span>
              {investor.quote}
              <span className="text-6xl absolute -bottom-16 -right-2 opacity-10 text-sylonow-gold">"</span>
            </blockquote>

            <div className="text-center">
              <a 
                href="https://www.najilhameed.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gradient-to-r from-sylonow-purple to-sylonow-gold rounded-full text-white font-medium hover:shadow-glow transition-all"
              >
                Visit Investor's Website
              </a>
            </div>
          </motion.div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About; 