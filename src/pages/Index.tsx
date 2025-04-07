import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { motion, useAnimation, stagger } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import { Gift, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CountdownTimer from '@/components/CountdownTimer';

// Text reveal animation component
const AnimatedText = ({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) => {
  return (
    <span className={`inline-block overflow-hidden ${className}`}>
      <motion.span
        className="inline-block"
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.4,
          ease: [0.33, 1, 0.68, 1],
          delay: delay * 0.5
        }}
      >
        {text}
      </motion.span>
    </span>
  );
};

// Character animation for word-by-word reveal
const AnimatedCharacters = ({ text, className }: { text: string; className?: string }) => {
  // Split text into words
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.3 * i }
    })
  };
  
  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 }
    }
  };
  
  return (
    <motion.div
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-1"
          variants={child}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Gift box variants
const giftBoxes = [
  { color: 'from-sylonow-purple/30 to-sylonow-gold/30', size: 'w-16 h-16', delay: 1.2, duration: 20, offset: 150 },
  { color: 'from-sylonow-gold/20 to-sylonow-purple/20', size: 'w-12 h-12', delay: 0.5, duration: 25, offset: 300 },
  { color: 'from-sylonow-purple/10 to-sylonow-gold/10', size: 'w-20 h-20', delay: 2.1, duration: 30, offset: 400 },
  { color: 'from-pink-500/20 to-purple-500/20', size: 'w-10 h-10', delay: 1.7, duration: 15, offset: 250 },
];

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Reduced timeout
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);
  
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        delay: 0.1 * i,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };

  // Feature Items
  const features = [
    {
      title: "Personalized Celebrations",
      description: "Tailor-made celebration experiences designed exactly to your preferences.",
      icon: "🎁"
    },
    {
      title: "Surprise Element",
      description: "Create moments of wonder and delight with our innovative surprise services.",
      icon: "✨"
    },
    {
      title: "Seamless Experience",
      description: "End-to-end coordination to ensure your celebration exceeds expectations.",
      icon: "🎉"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121212] to-[#2a1a5e] overflow-x-hidden relative">
      {/* Blurred Blob Elements */}
      <div className="blob blob-1 top-[10%] right-[5%] opacity-[0.12]"></div>
      <div className="blob blob-2 bottom-[20%] left-[5%] opacity-[0.08]"></div>
      <div className="blob blob-3 top-[60%] right-[15%] opacity-[0.06]"></div>
      <div className="blob blob-4 top-[30%] left-[10%] opacity-[0.05]"></div>
      
      <div className="sticky top-0 z-50 bg-gradient-to-b from-[#121212]/95 to-[#121212]/80 backdrop-blur-md">
        <Navbar />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16 relative z-10">
        {/* Hero Section */}
        <div className="hero-section relative flex flex-col items-start lg:flex-row gap-8 lg:gap-12">
          {/* Left Content */}
          <motion.div 
            className="flex-1 space-y-6 sm:space-y-8 md:space-y-10 text-left lg:text-left relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Heading */}
            <motion.h1 
              className="hero-heading jersey-15-regular text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-reveal-mobile px-2 sm:px-0"
              style={{ '--delay': '0.1s', fontWeight: 'normal' } as React.CSSProperties}
            >
              Make Every Moment
              <span className="gradient-text block mt-2 font-normal">Special</span>
              <span className="block mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-sylonow-gold/90 leading-tight jersey-15-regular font-normal">
                Transform Celebrations with Personal Touch
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="hero-subtitle text-base sm:text-lg md:text-xl lg:text-2xl text-reveal-mobile text-gray-300 max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0"
              style={{ '--delay': '0.2s' } as React.CSSProperties}
            >
              Experience the joy of giving with our curated surprise boxes, making every celebration unforgettable with personalized touches.
            </motion.p>

            {/* Mobile: Timer Section */}
            <motion.div 
              className="hero-timer block lg:hidden text-reveal-mobile w-full"
              style={{ '--delay': '0.3s' } as React.CSSProperties}
            >
              <div className="mb-8">
                <CountdownTimer />
              </div>
            </motion.div>

            {/* Special Invite Button */}
            <motion.div 
              className="hero-special-invite text-reveal-mobile relative z-10 w-full"
              style={{ '--delay': '0.4s' } as React.CSSProperties}
            >
              <div className="max-w-[350px] mx-auto px-4">
                <Link to="/contact" className="block w-full">
                  <Button
                    className="w-full bg-gradient-to-r from-sylonow-purple to-sylonow-gold hover:opacity-90 text-white px-6 py-3 rounded-full text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Special Invite <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Desktop: Timer Section */}
            <motion.div 
              className="hero-timer hidden lg:block text-reveal-mobile mt-16"
              style={{ '--delay': '0.3s' } as React.CSSProperties}
            >
              <CountdownTimer />
            </motion.div>
          </motion.div>

          {/* Right Content - Gift Box */}
          <motion.div 
            className="hero-gift-box flex-1 text-reveal-mobile lg:order-last px-4 sm:px-0"
            style={{ '--delay': '0.6s' } as React.CSSProperties}
          >
            <div className="relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] mx-auto">
              <motion.img
                src="/gift_box.png"
                alt="Sylonow Gift Box"
                className="w-full h-auto"
                animate={{ 
                  y: [-10, 10, -10],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut"
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -2, 2, -2, 0],
                  transition: { duration: 0.5 }
                }}
              />
              
              {/* Decorative Elements */}
              <motion.div 
                className="absolute -top-8 -right-8 sm:-top-10 sm:-right-10 w-16 sm:w-20 h-16 sm:h-20 bg-sylonow-gold/20 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-8 -left-8 sm:-bottom-10 sm:-left-10 w-16 sm:w-20 h-16 sm:h-20 bg-sylonow-purple/20 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              />
            </div>
          </motion.div>

        </div>

        {/* Features Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-10 bg-black/20 backdrop-blur-md mt-16 sm:mt-20 relative rounded-xl">
          {/* Section Blob */}
          <div className="blob blob-2 opacity-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold jersey-15-regular mb-3 sm:mb-4">
                What Makes Us <span className="text-sylonow-gold">Special</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto font-poppins text-sm sm:text-base px-4">
                Creating unforgettable celebration experiences through innovation and personalization.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="bg-gradient-to-br from-[#2a1a5e]/50 to-[#1a0938]/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-purple-500/10 relative overflow-hidden"
                >
                  <div className="absolute w-32 h-32 bg-sylonow-purple/10 rounded-full -bottom-10 -right-10 blur-xl"></div>
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{feature.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 jersey-15-regular">{feature.title}</h3>
                  <p className="text-gray-300 text-sm sm:text-base font-poppins">{feature.description}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mt-12 sm:mt-16"
            >
              <Link to="/about">
                <Button variant="link" className="text-sylonow-gold hover:text-white transition-colors text-base sm:text-lg font-poppins">
                  Learn more about us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
