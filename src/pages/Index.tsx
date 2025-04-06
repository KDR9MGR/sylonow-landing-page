import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import GiftBox3D from '@/components/GiftBox3D';
import CountdownTimer from '@/components/CountdownTimer';
import Footer from '@/components/Footer';
import { Gift, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useAnimation, stagger } from 'framer-motion';
import { Link } from 'react-router-dom';

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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#121212] to-[#2a1a5e] text-white">
      <Navbar />
      
      {/* Floating Gift Boxes Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {giftBoxes.map((box, index) => (
          <motion.div
            key={index}
            className={`absolute rounded-lg bg-gradient-to-br ${box.color} ${box.size}`}
            style={{
              top: `calc(${Math.random() * 70}% + ${index * 10}px)`,
              left: `calc(${Math.random() * 70}% + ${index * 10}px)`,
            }}
            initial={{ opacity: 0, y: box.offset }}
            animate={{ 
              opacity: [0, 0.7, 0],
              y: [box.offset, -box.offset],
              x: [0, Math.sin(index) * 100],
              rotate: [0, 360]
            }}
            transition={{
              repeat: Infinity,
              duration: box.duration,
              delay: box.delay,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      {/* Hero Section */}
      <section 
        id="home" 
        className="py-20 px-6 md:px-10 min-h-[90vh] flex flex-col justify-center items-center text-center relative overflow-hidden"
      >
        {isVisible && (
          <motion.div 
            className="max-w-4xl mx-auto relative z-10"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <div className="mb-2 absolute -top-10 left-1/2 transform -translate-x-1/2">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.2,
                  type: "spring", 
                  stiffness: 300 
                }}
              >
                <Sparkles className="text-sylonow-gold h-8 w-8 md:h-10 md:w-10" />
              </motion.div>
            </div>
            
            <motion.h1 
              className="text-4xl md:text-6xl mb-6"
              custom={1}
              variants={fadeInUpVariants}
            >
              <div className="overflow-hidden mb-2">
                <motion.span 
                  className="block font-montserrat font-extrabold tracking-tight"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  Making Celebrations
                </motion.span>
              </div>
              
              <div className="overflow-hidden">
                <motion.span 
                  className="block gradient-text font-display font-bold"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.4,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  Extraordinary
                </motion.span>
              </div>
            </motion.h1>
            
            <motion.div 
              className="relative mb-8"
              custom={2}
              variants={fadeInUpVariants}
            >
              <AnimatedCharacters 
                text="Sylonow is revolutionizing the way you celebrate special moments with our innovative platform launching in May 2025."
                className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-poppins leading-relaxed"
              />
            </motion.div>
            
            <motion.div 
              className="relative my-12"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <GiftBox3D />
            </motion.div>
            
            <motion.div 
              className="mt-12"
              custom={3}
              variants={fadeInUpVariants}
            >
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <h2 className="text-xl md:text-2xl font-bold mb-2 font-montserrat">
                  <AnimatedText text="Launching in" delay={0.9} />
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.7 }}
              >
                <CountdownTimer />
              </motion.div>
            </motion.div>
            
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-12">
              <motion.div 
                className="w-full md:w-auto"
                custom={4}
                variants={fadeInUpVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact">
                  <Button className="bg-gradient-to-r from-sylonow-purple to-sylonow-gold hover:shadow-xl hover:opacity-90 transition-all px-8 py-6 rounded-full text-lg font-poppins font-medium w-full md:w-auto">
                    <Gift className="mr-2 h-5 w-5" /> Special Invite
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div 
                className="w-full md:w-auto"
                custom={5}
                variants={fadeInUpVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/about">
                  <Button variant="outline" className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-all px-8 py-6 rounded-full text-lg font-poppins font-medium w-full md:w-auto">
                    About Us <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </section>
      
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
      
      <Footer />
    </div>
  );
};

export default Index;
