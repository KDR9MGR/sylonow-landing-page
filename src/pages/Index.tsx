import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';
import Navbar from "@/components/Navbar";
import { motion, useAnimation, stagger } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { Gift, Sparkles, ArrowRight, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/CountdownTimer";

// Text reveal animation component
const AnimatedText = ({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) => {
  return (
    <span className={`inline-block overflow-hidden ${className}`}>
      <motion.span
        className="inline-block"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.4,
          ease: [0.33, 1, 0.68, 1],
          delay: delay * 0.5,
        }}
      >
        {text}
      </motion.span>
    </span>
  );
};

// Character animation for word-by-word reveal
const AnimatedCharacters = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  // Split text into words
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.3 * i },
    }),
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <motion.div
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span key={index} className="inline-block mr-1" variants={child}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Gift box variants
const giftBoxes = [
  {
    color: "from-sylonow-purple/30 to-sylonow-gold/30",
    size: "w-16 h-16",
    delay: 1.2,
    duration: 20,
    offset: 150,
  },
  {
    color: "from-sylonow-gold/20 to-sylonow-purple/20",
    size: "w-12 h-12",
    delay: 0.5,
    duration: 25,
    offset: 300,
  },
  {
    color: "from-sylonow-purple/10 to-sylonow-gold/10",
    size: "w-20 h-20",
    delay: 2.1,
    duration: 30,
    offset: 400,
  },
  {
    color: "from-pink-500/20 to-purple-500/20",
    size: "w-10 h-10",
    delay: 1.7,
    duration: 15,
    offset: 250,
  },
];

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.1 * i,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  // Feature Items
  const features = [
    {
      title: "Personalized Celebrations",
      description:
        "Tailor-made celebration experiences designed exactly to your preferences.",
      icon: "🎁",
    },
    {
      title: "Surprise Element",
      description:
        "Create moments of wonder and delight with our innovative surprise services.",
      icon: "✨",
    },
    {
      title: "Seamless Experience",
      description:
        "End-to-end coordination to ensure your celebration exceeds expectations.",
      icon: "🎉",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Sylonow – Elevate Every Celebration with the Ultimate App</title>
        <meta name="description" content="Experience unforgettable moments with Sylonow—the premier celebration app that brings your special occasions to life. Launching July 2025." />
        <meta name="keywords" content="celebration app, surprise services, special occasions, party planning, celebration planner, event planner" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sylonow.com" />
        <meta property="og:title" content="Sylonow – Elevate Every Celebration with the Ultimate App" />
        <meta property="og:description" content="Experience unforgettable moments with Sylonow—the premier celebration app that brings your special occasions to life. Launching July 2025." />
        <meta property="og:image" content="/og-image.jpg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://sylonow.com" />
        <meta name="twitter:title" content="Sylonow – Elevate Every Celebration with the Ultimate App" />
        <meta name="twitter:description" content="Experience unforgettable moments with Sylonow—the premier celebration app that brings your special occasions to life. Launching July 2025." />
        <meta name="twitter:image" content="/og-image.jpg" />
        
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sylonow.com" />
      </Helmet>
      <div className="min-h-screen bg-white overflow-x-hidden relative">
        {/* Blurred Blob Elements */}
        <div className="blob blob-1 top-[10%] right-[5%]"></div>
        <div className="blob blob-2 bottom-[20%] left-[5%]"></div>
        <div className="blob blob-3 top-[60%] right-[15%]"></div>
        <div className="blob blob-4 top-[30%] left-[10%]"></div>

        {/* Sticky Navbar with shadow on scroll */}
        <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
          <Navbar />
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: showScrollTop ? 1 : 0,
            scale: showScrollTop ? 1 : 0.8,
            y: showScrollTop ? 0 : 20
          }}
          className="fixed bottom-6 right-6 z-50 bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-16 relative z-10">
          {/* Hero Section */}
          <div className="hero-section text-violet-950 relative flex flex-col items-center lg:items-start lg:flex-row gap-8 lg:gap-12 mt-8 sm:mt-12 lg:mt-8">
            {/* Left Content */}
            <motion.div
              className="flex-1 space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left relative"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Heading */}
              <motion.h1
                className="hero-heading text-center lg:text-left"
                style={{ "--delay": "0.1s" } as React.CSSProperties}
              >
                <div className="max-w-[400px] mx-auto lg:mx-0">
                  <span className="text-[#1E0E4E] text-4xl sm:text-5xl md:text-6xl font-bold font-['Poppins'] leading-tight block">
                    Make Every
                  </span>
                  <span className="text-[#1E0E4E] text-4xl sm:text-5xl md:text-6xl font-bold font-['Poppins'] leading-tight block">
                    Moment{" "}
                    <span className="text-pink-600">Special</span>
                  </span>
                </div>
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                className="text-center lg:text-left max-w-[400px] mx-auto lg:mx-0"
                style={{ "--delay": "0.2s" } as React.CSSProperties}
              >
                <span className="text-[#1E0E4E]/60 text-sm sm:text-base font-normal font-['Poppins'] leading-relaxed">
                  Experience the joy of giving with our curated
                  surprise boxes, making every celebration
                  unforgettable with personalized touches.
                </span>
              </motion.p>

              {/* Mobile: Timer Section */}
              <motion.div
                className="hero-timer block lg:hidden text-center w-full mt-6 sm:mt-8"
                style={{ "--delay": "0.3s" } as React.CSSProperties}
              >
                <div className="mb-6 sm:mb-8">
                  <CountdownTimer />
                </div>
              </motion.div>

              {/* Special Invite Button */}
              <motion.div
                className="relative z-10 w-full mt-6 sm:mt-8"
                style={{ "--delay": "0.4s" } as React.CSSProperties}
              >
                <div className="max-w-[280px] sm:max-w-[320px] mx-auto lg:mx-0">
                  <Link to="/contact" className="block w-full">
                    <Button className="w-full bg-pink-600 px-6 py-3 text-white rounded-full hover:bg-pink-700 inline-flex justify-center items-center gap-2 text-lg font-medium">
                      Get Special Invite{" "}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* Desktop: Timer Section */}
              <motion.div
                className="hero-timer hidden lg:block mt-8"
                style={{ "--delay": "0.3s" } as React.CSSProperties}
              >
                <CountdownTimer />
              </motion.div>
            </motion.div>

            {/* Right Content - Gift Box */}
            <motion.div
              className="flex-1 lg:order-last px-4 sm:px-0 -mt-4 sm:mt-0"
              style={{ "--delay": "0.6s" } as React.CSSProperties}
            >
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] mx-auto">
                <motion.img
                  src="/gift_box.png"
                  alt="Sylonow Gift Box"
                  className="w-full h-auto"
                  animate={{
                    y: [-4, 4, -4],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Features Section */}
          <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-gray-50/50 backdrop-blur-md mt-12 sm:mt-16 lg:mt-20 relative rounded-xl border border-gray-100">
            {/* Section Content */}
            <div className="max-w-6xl mx-auto relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12 sm:mb-16"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Poppins'] mb-3 sm:mb-4 text-gray-900">
                  What Makes Us{" "}
                  <span className="text-sylonow-gold font-['Poppins']">
                    Special
                  </span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto font-['Poppins'] text-sm sm:text-base px-4">
                  Creating unforgettable celebration experiences through
                  innovation and personalization.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {[
                  {
                    icon: <Gift className="w-8 h-8 text-pink-600" />,
                    title: "Personalized Celebrations",
                    description: "Tailor-made celebration experience designed exactly to your preferences.",
                  },
                  {
                    icon: <Sparkles className="w-8 h-8 text-pink-600" />,
                    title: "Surprise Element",
                    description: "Create moments of wonder and delight with our innovative surprise service",
                  },
                  {
                    icon: <Gift className="w-8 h-8 text-pink-600" />,
                    title: "Seamless Experience",
                    description: "Tailor-made celebration experience designed exactly to your preferences.",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-[#1E0E4E] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[#1E0E4E]/60 text-sm">
                      {feature.description}
                    </p>
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
                  <Button
                    variant="link"
                    className="text-sylonow-purple hover:text-sylonow-gold transition-colors text-base sm:text-lg font-poppins"
                  >
                    Learn more about us <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Index;
