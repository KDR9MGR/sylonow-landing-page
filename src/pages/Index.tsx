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
    <div className="min-h-screen bg-gradient-to-b from-[#121212] to-[#2a1a5e] text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center lg:text-left"
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Make Every Moment
                <span className="bg-gradient-to-r from-sylonow-purple to-sylonow-gold text-transparent bg-clip-text"> Special</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-300 mb-8">
                Experience the joy of giving with our curated surprise boxes, making every celebration unforgettable.
              </p>
              <div className="space-y-6 ">
                <div >
                  <motion.p 
                    className="text-lg font-medium mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    Launching in
                  </motion.p>
                  <CountdownTimer />
                </div>
              </div>
                <div className='mt-4'>
                  <Link to="/contact">
                    <Button 
                    className="bg-gradient-to-r from-sylonow-purple to-sylonow-gold hover:opacity-90 text-white px-8 py-6 rounded-full text-lg"
                  >
                    Special Invite <ArrowRight className="ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right Content - Gift Box Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 relative"
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
        </div>
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
