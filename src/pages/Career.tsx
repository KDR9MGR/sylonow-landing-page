import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Rocket, Star, Brain, Target, Gift, Users, Sparkles } from 'lucide-react';

const roles = {
  main: ['Company All - Rounder'],
  management: [
    'Vendor Management',
    'Delivery Managers',
    'Sales & Marketing Managers',
    'Content Team Manager',
    'Graphic Designing Head',
    'Social Media Head'
  ],
  research: [
    'Application Research',
    'New Features & Review Existing Status',
    'E-commerce Specialist'
  ],
  creative: [
    'Graphic Designing',
    'Social Media',
    'Content Creation'
  ],
  marketing: [
    'Musicians',
    'Artists',
    'Models',
    'Actors'
  ],
  other: [
    'Customer Assistance & Problem Solving',
    'Kannada Content Writer and Typist'
  ]
};

const Career = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    contact: '',
    email: '',
    description: '',
    passion: '',
    skills: '',
    challenges: '',
    motivation: '',
    opportunity: '',
    lifeChallenge: '',
    industryChange: '',
    timeCommitment: '',
    directEntry: '',
    passionMeaning: '',
    innovation: ''
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121212] to-[#2a1a5e] text-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-4">
            <Rocket className="w-12 h-12 text-sylonow-gold" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
            Sylonow's Talent Accelerator Program
          </h1>
          <p className="text-xl md:text-2xl text-purple-300 mb-4 font-light">
            An Opportunity Like Never Before!
          </p>
          <div className="flex justify-center items-center gap-2 text-xl text-sylonow-gold">
            <Star className="w-6 h-6" />
            <p className="font-semibold">Are You Ready to Build Something Extraordinary?</p>
            <Star className="w-6 h-6" />
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          className="grid md:grid-cols-2 gap-12 mb-16"
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          initial="initial"
          animate="animate"
        >
          {/* Left Column */}
          <div className="space-y-8">
            <motion.div 
              className="bg-white/5 p-6 rounded-xl border border-purple-500/20"
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-bold mb-4 text-sylonow-gold">
                No Qualifications Required!
              </h2>
              <p className="text-gray-300">
                This opportunity is not about your resume—it's about your passion, creativity, and drive to do something extraordinary.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white/5 p-6 rounded-xl border border-purple-500/20"
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-bold mb-4 text-sylonow-gold">
                What's in it for You?
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  Work with a real-world startup from the ground up
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  Get industry-level experience in your field
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  Earn a certificate that proves your contribution
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  After 6 months, start earning based on your performance
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  Direct entry opportunity after education completion
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <motion.div 
              className="bg-white/5 p-6 rounded-xl border border-purple-500/20"
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-bold mb-4 text-sylonow-gold">
                Available Roles
              </h2>
              <div className="space-y-4">
                {Object.entries(roles).map(([category, positions]) => (
                  <div key={category} className="border-b border-purple-500/20 pb-4 last:border-0">
                    <h3 className="text-lg font-semibold mb-2 capitalize">{category} Team</h3>
                    <ul className="space-y-1 text-gray-300">
                      {positions.map((position, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="text-purple-400">•</span>
                          {position}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/5 p-8 rounded-xl border border-purple-500/20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Apply Now <span className="text-sylonow-gold">🚀</span>
          </h2>
          
          <form className="space-y-8 max-w-3xl mx-auto">
            {/* Basic Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Basic Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    placeholder="Your full name"
                    className="bg-white/5 border-purple-500/20"
                  />
                </div>
                <div>
                  <Label htmlFor="contact">Contact Number</Label>
                  <Input
                    id="contact"
                    placeholder="Your contact number"
                    className="bg-white/5 border-purple-500/20"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email ID</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/5 border-purple-500/20"
                />
              </div>
            </div>

            {/* About You */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">About You</h3>
              <div>
                <Label htmlFor="description">Describe yourself in ONE powerful sentence</Label>
                <Textarea
                  id="description"
                  placeholder="Include your passion and talent"
                  className="bg-white/5 border-purple-500/20"
                />
              </div>
              <div>
                <Label htmlFor="passion">What makes you passionate about joining Sylonow?</Label>
                <Textarea
                  id="passion"
                  className="bg-white/5 border-purple-500/20"
                />
              </div>
            </div>

            <Button 
              type="submit"
              className="w-full md:w-auto bg-gradient-to-r from-sylonow-purple to-sylonow-gold hover:opacity-90"
            >
              Submit Application
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Career; 