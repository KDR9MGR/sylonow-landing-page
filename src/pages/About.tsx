import React from 'react';
import { Helmet } from 'react-helmet';
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
      image: "founders/Shrikant M.jpeg" // Update with actual founder image
    },
    {
      name: "Sangamesh",
      role: "MD & Co-Founder",
      quote: "Every surprise, every detail, every moment—woven together to create magic.",
      image: "founders/sangu.jpeg" // Update with actual founder image
    },
    {
      name: "Gagan B",
      role: "Co-Founder",
      quote: "From surprises to smiles, we design emotions you can relive forever.",
      image: "founders/Gagan B.jpeg" // Update with actual founder image
    }
  ];

  const investor = {
    name: "Najil Hameed",
    role: "Angel Investor",
    quote: "Great investments create great stories—Sylonow is writing the best ones."
  };

  return (
    <>
      <Helmet>
        // ... existing code ...
      </Helmet>
      <div className="min-h-screen bg-white flex flex-col mt-10">
        <Navbar />
        <div className="flex-grow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            {/* Company Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                About <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">Sylonow</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
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
                  className="bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl p-6 flex flex-col items-center text-center border border-gray-100"
                >
                  <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-3 rounded-lg mb-4 text-pink-600">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{info.title}</h3>
                  <p className="text-gray-600">{info.value}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Vision & Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl p-8 border border-gray-100"
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  To revolutionize the way people celebrate special moments by creating unique, personalized experiences that leave lasting memories.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl p-8 border border-gray-100"
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  To deliver exceptional surprise experiences through innovative curation, seamless execution, and dedicated customer service.
                </p>
              </motion.div>
            </div>

            {/* Values Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900">Our Values</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl p-6 text-center border border-gray-100 group"
                  >
                    <div className="text-4xl mb-4 text-pink-600 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Founders Section */}
            <section className="mb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Meet Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">Founders</span>
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
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
                    className="bg-white/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                  >
                    <div className="h-64 relative overflow-hidden">
                      {founder.image ? (
                        <div className="w-48 h-48 mx-auto mt-6 rounded-full overflow-hidden border-4 border-pink-100">
                          <img 
                            src={founder.image} 
                            alt={founder.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-48 h-48 mx-auto mt-6 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 flex items-center justify-center">
                          <span className="text-6xl font-bold text-pink-600">
                            {founder.name.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-6 bg-white/80 backdrop-blur-sm">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{founder.name}</h3>
                      <p className="text-pink-600 mb-4 text-sm font-medium">{founder.role}</p>
                      <blockquote className="italic text-gray-600 relative text-sm">
                        <span className="text-4xl absolute -top-4 -left-2 text-pink-200">"</span>
                        {founder.quote}
                        <span className="text-4xl absolute -bottom-8 -right-2 text-pink-200">"</span>
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
                  Backed By <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">Startup Whisperer</span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/50 backdrop-blur-sm rounded-xl p-8 max-w-3xl mx-auto shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-center mb-8">
                  <div className="w-48 h-48 mx-auto mb-6 relative overflow-hidden rounded-xl group">
                    <img 
                      src="founders/Najil Hameed.jpeg" 
                      alt="Najil Hameed"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{investor.name}</h3>
                  <p className="text-pink-600">{investor.role}</p>
                </div>

                <blockquote className="text-xl text-center italic text-gray-600 relative mb-8">
                  <span className="text-6xl absolute -top-8 -left-2 text-pink-200">"</span>
                  {investor.quote}
                  <span className="text-6xl absolute -bottom-12 -right-2 text-pink-200">"</span>
                </blockquote>

                <div className="text-center">
                  <a 
                    href="https://www.najilhameed.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full text-white font-medium hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Visit Investor's Website
                  </a>
                </div>
              </motion.div>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About; 