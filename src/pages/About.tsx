
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

interface FounderProps {
  name: string;
  title: string;
  quote: string;
  image?: string;
}

const Founder = ({ name, title, quote, image }: FounderProps) => (
  <motion.div 
    className="bg-sylonow-dark/80 backdrop-blur-lg border border-sylonow-purple/30 p-6 rounded-xl shadow-xl"
    whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <div className="mb-4 flex justify-center">
      {image ? (
        <img 
          src={image} 
          alt={name} 
          className="w-24 h-24 rounded-full border-2 border-sylonow-purple object-cover"
        />
      ) : (
        <div className="w-24 h-24 rounded-full border-2 border-sylonow-purple bg-sylonow-purple/30 flex items-center justify-center">
          <User className="w-12 h-12 text-white" />
        </div>
      )}
    </div>
    <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
    <p className="text-sylonow-light-purple text-sm mb-4">{title}</p>
    <blockquote className="text-white/90 italic">"{quote}"</blockquote>
  </motion.div>
);

const About = () => {
  const founderData = [
    {
      name: "Srikanth M",
      title: "CEO & Founder",
      quote: "We're not in the business of events; we're in the business of memories."
    },
    {
      name: "Sangamesh",
      title: "MD & Co-Founder",
      quote: "Every surprise, every detail, every moment—woven together to create magic."
    },
    {
      name: "Gagan B",
      title: "Co-Founder",
      quote: "From surprises to smiles, we design emotions you can relive forever."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-sylonow-dark to-black text-white">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-16 px-6 md:px-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Sylonow</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              Sylonow is revolutionizing how we celebrate special moments by connecting customers with specialized 
              celebration and surprise service providers through our innovative platform.
            </p>
            <div className="h-1 w-32 bg-gradient-to-r from-sylonow-purple to-sylonow-gold mx-auto"></div>
          </motion.div>
          
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 gradient-text">Meet Our Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {founderData.map((founder, index) => (
                <Founder 
                  key={index}
                  name={founder.name}
                  title={founder.title}
                  quote={founder.quote}
                />
              ))}
            </div>
            
            <motion.div 
              className="bg-sylonow-dark/80 backdrop-blur-lg border border-sylonow-purple/30 p-8 rounded-xl shadow-xl max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-6 text-center gradient-text">Backed By</h2>
              <Founder 
                name="Najil Hameed"
                title="Angel Investor"
                quote="Great investments create great stories—Sylonow is writing the best ones."
              />
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
