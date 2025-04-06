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
          duration: 0.6, 
          ease: [0.33, 1, 0.68, 1],
          delay: delay
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
    // This will be triggered after the app loads (after gift box animation)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8,
        delay: 0.2 * i,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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
    <div className="min-h-screen bg-gradient-to-b from-[#121212] to-[#2a1a5e] overflow-x-hidden">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Hero Section */}
        <div className="hero-section relative flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <motion.div 
            className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Heading */}
            <motion.h1 
              className="hero-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-reveal-mobile"
              style={{ '--delay': '0.2s' } as React.CSSProperties}
            >
              Make Every Moment
              <span className="gradient-text block mt-2">Special</span>
              <span className="block mt-2 text-2xl md:text-3xl lg:text-4xl text-sylonow-gold/90">Transform Celebrations with AI Magic</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="hero-subtitle text-lg md:text-xl lg:text-2xl text-reveal-mobile text-gray-300 max-w-2xl mx-auto lg:mx-0"
              style={{ '--delay': '0.4s' } as React.CSSProperties}
            >
              Experience the joy of giving with our curated surprise boxes, making every celebration unforgettable with AI-powered personalization.
            </motion.p>

            {/* Mobile: Timer Section */}
            <motion.div 
              className="hero-timer block lg:hidden text-reveal-mobile"
              style={{ '--delay': '0.8s' } as React.CSSProperties}
            >
              <CountdownTimer />
            </motion.div>

            {/* Special Invite Button */}
            <motion.div 
              className="hero-special-invite text-reveal-mobile relative z-10"
              style={{ '--delay': '1s' } as React.CSSProperties}
            >
              <Link to="/contact">
                <Button
                  className="bg-gradient-to-r from-sylonow-purple to-sylonow-gold hover:opacity-90 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Special Invite <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>

            {/* Desktop: Timer Section */}
            <motion.div 
              className="hero-timer hidden lg:block text-reveal-mobile mt-12"
              style={{ '--delay': '0.8s' } as React.CSSProperties}
            >
              <CountdownTimer />
            </motion.div>
          </motion.div>

          {/* Right Content - Gift Box */}
          <motion.div 
            className="hero-gift-box flex-1 text-reveal-mobile lg:order-last"
            style={{ '--delay': '0.6s' } as React.CSSProperties}
          >
            <div className="relative w-full max-w-[500px] mx-auto">
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
                className="absolute -top-10 -right-10 w-20 h-20 bg-sylonow-gold/20 rounded-full blur-xl"
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
                className="absolute -bottom-10 -left-10 w-20 h-20 bg-sylonow-purple/20 rounded-full blur-xl"
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
        <section className="py-20 px-6 md:px-10 bg-black/20 backdrop-blur-md">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">What Makes Us <span className="text-sylonow-gold">Special</span></h2>
              <p className="text-gray-300 max-w-2xl mx-auto font-poppins">
                Creating unforgettable celebration experiences through innovation and personalization.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="bg-gradient-to-br from-[#2a1a5e]/50 to-[#1a0938]/50 backdrop-blur-sm p-8 rounded-xl border border-purple-500/10"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3 font-montserrat">{feature.title}</h3>
                  <p className="text-gray-300 font-poppins">{feature.description}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mt-16"
            >
              <Link to="/about">
                <Button variant="link" className="text-sylonow-gold hover:text-white transition-colors text-lg font-poppins">
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
