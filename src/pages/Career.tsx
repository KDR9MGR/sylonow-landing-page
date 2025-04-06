
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { ChevronRight, ChevronLeft, Rocket, Star, Check, Briefcase } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { useToast } from "@/components/ui/use-toast";
import { useIsMobile } from '@/hooks/use-mobile';

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

const formSteps = [
  { id: 'basic', title: 'Basic Information' },
  { id: 'about', title: 'About You' },
  { id: 'psychological', title: 'Psychological & Emotional Connection' },
  { id: 'commitment', title: 'Commitment & Future Vision' }
];

const Career = () => {
  const isMobile = useIsMobile();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    contact: '',
    email: '',
    interestedRole: '',
    description: '',
    passion: '',
    skills: '',
    challenges: 'Yes',
    motivation: '',
    opportunity: 'Yes',
    lifeChallenge: '',
    industryChange: '',
    timeCommitment: '',
    directEntry: 'Yes',
    passionMeaning: '',
    innovation: ''
  });

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Calculate progress percentage based on current step
    const progressPercentage = ((currentStep + 1) / formSteps.length) * 100;
    setProgress(progressPercentage);
  }, [currentStep]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleRadioChange = (id: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleNext = () => {
    // Validate current step before proceeding
    if (currentStep === 0 && (!formData.fullName || !formData.contact || !formData.email)) {
      toast({
        title: "Required Fields",
        description: "Please fill in all required fields to continue.",
        variant: "destructive",
      });
      return;
    }
    
    if (currentStep < formSteps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/jobs.sylonow@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Career Application from ${formData.fullName}`,
        })
      });

      if (response.ok) {
        toast({
          title: "Application Submitted!",
          description: "Thank you for applying. We'll get back to you soon!",
          duration: 5000,
        });
        
        // Reset form
        setFormData({
          fullName: '',
          contact: '',
          email: '',
          interestedRole: '',
          description: '',
          passion: '',
          skills: '',
          challenges: 'Yes',
          motivation: '',
          opportunity: 'Yes',
          lifeChallenge: '',
          industryChange: '',
          timeCommitment: '',
          directEntry: 'Yes',
          passionMeaning: '',
          innovation: ''
        });
        setCurrentStep(0);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 }
  };

  // Form step components
  const BasicInfoStep = () => (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Your full name"
            className="bg-white/5 border-purple-500/20"
            required
          />
        </div>
        <div>
          <Label htmlFor="contact">Contact Number *</Label>
          <Input
            id="contact"
            value={formData.contact}
            onChange={handleInputChange}
            placeholder="Your contact number"
            className="bg-white/5 border-purple-500/20"
            required
          />
        </div>
      </div>
      <div>
        <Label htmlFor="email">Email ID *</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Your email address"
          className="bg-white/5 border-purple-500/20"
          required
        />
      </div>
      <div>
        <Label htmlFor="interestedRole">Which role interests you?</Label>
        <select
          id="interestedRole"
          value={formData.interestedRole}
          onChange={handleInputChange}
          className="bg-white/5 border-purple-500/20 w-full rounded-md p-2"
        >
          <option value="">Select a role</option>
          {Object.entries(roles).flatMap(([category, positions]) => 
            positions.map(position => (
              <option key={position} value={position}>{position}</option>
            ))
          )}
        </select>
      </div>
    </div>
  );

  const AboutYouStep = () => (
    <div className="space-y-4">
      <div>
        <Label htmlFor="description">Describe yourself in ONE powerful sentence *</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Include your passion and talent"
          className="bg-white/5 border-purple-500/20"
          required
        />
      </div>
      <div>
        <Label htmlFor="passion">What makes you passionate about joining Sylonow? *</Label>
        <Textarea
          id="passion"
          value={formData.passion}
          onChange={handleInputChange}
          className="bg-white/5 border-purple-500/20"
          required
        />
      </div>
      <div>
        <Label htmlFor="skills">What skills do you have that can help us build something incredible? *</Label>
        <Textarea
          id="skills"
          value={formData.skills}
          onChange={handleInputChange}
          className="bg-white/5 border-purple-500/20"
          required
        />
      </div>
      <div>
        <Label htmlFor="motivation">What is the one thing that keeps you motivated every day? *</Label>
        <Textarea
          id="motivation"
          value={formData.motivation}
          onChange={handleInputChange}
          className="bg-white/5 border-purple-500/20"
          required
        />
      </div>
    </div>
  );

  const PsychologicalStep = () => (
    <div className="space-y-4">
      <div>
        <Label htmlFor="lifeChallenge">What is one challenge in your life that you overcame and what did you learn from it? *</Label>
        <Textarea
          id="lifeChallenge"
          value={formData.lifeChallenge}
          onChange={handleInputChange}
          className="bg-white/5 border-purple-500/20"
          required
        />
      </div>
      <div>
        <Label htmlFor="industryChange">If you could change one thing about the celebration industry, what would it be and why? *</Label>
        <Textarea
          id="industryChange"
          value={formData.industryChange}
          onChange={handleInputChange}
          className="bg-white/5 border-purple-500/20"
          required
        />
      </div>
      <div>
        <p className="mb-2">Do you enjoy taking on challenges?</p>
        <RadioGroup
          value={formData.challenges}
          onValueChange={(value) => handleRadioChange('challenges', value)}
          className="flex space-x-4"
        >
          <div className="flex items-center space-x-1">
            <RadioGroupItem value="Yes" id="challenges-yes" />
            <Label htmlFor="challenges-yes">Yes</Label>
          </div>
          <div className="flex items-center space-x-1">
            <RadioGroupItem value="No" id="challenges-no" />
            <Label htmlFor="challenges-no">No</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );

  const CommitmentStep = () => (
    <div className="space-y-4">
      <div>
        <Label htmlFor="timeCommitment">How much time can you dedicate to Sylonow per week? *</Label>
        <Input
          id="timeCommitment"
          value={formData.timeCommitment}
          onChange={handleInputChange}
          placeholder="e.g., 20 hours per week"
          className="bg-white/5 border-purple-500/20"
          required
        />
      </div>
      <div>
        <Label htmlFor="passionMeaning">What does "passion" mean to you in one sentence? *</Label>
        <Textarea
          id="passionMeaning"
          value={formData.passionMeaning}
          onChange={handleInputChange}
          className="bg-white/5 border-purple-500/20"
          required
        />
      </div>
      <div>
        <Label htmlFor="innovation">What's one thing you would love to create or innovate at Sylonow? *</Label>
        <Textarea
          id="innovation"
          value={formData.innovation}
          onChange={handleInputChange}
          className="bg-white/5 border-purple-500/20"
          required
        />
      </div>
      <div>
        <p className="mb-2">Are you interested in potential direct entry after completing your education?</p>
        <RadioGroup
          value={formData.directEntry}
          onValueChange={(value) => handleRadioChange('directEntry', value)}
          className="flex space-x-4"
        >
          <div className="flex items-center space-x-1">
            <RadioGroupItem value="Yes" id="direct-yes" />
            <Label htmlFor="direct-yes">Yes</Label>
          </div>
          <div className="flex items-center space-x-1">
            <RadioGroupItem value="No" id="direct-no" />
            <Label htmlFor="direct-no">No</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );

  const renderFormStep = () => {
    switch (currentStep) {
      case 0:
        return <BasicInfoStep />;
      case 1:
        return <AboutYouStep />;
      case 2:
        return <PsychologicalStep />;
      case 3:
        return <CommitmentStep />;
      default:
        return <BasicInfoStep />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121212] to-[#2a1a5e] text-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-20">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-4">
            <Briefcase className="w-12 h-12 text-sylonow-gold" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">
            Sylonow's Talent Accelerator Program
          </h1>
          <p className="text-lg md:text-xl text-purple-300 mb-4 font-light">
            Passion over qualifications. Join us to build something extraordinary!
          </p>
        </motion.div>

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 rounded-xl border border-purple-500/20 overflow-hidden"
        >
          {/* Progress Bar */}
          <div className="p-4 border-b border-purple-500/20">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-medium">Application Form</h2>
              <span className="text-sm font-medium">Step {currentStep + 1} of {formSteps.length}</span>
            </div>
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between mt-2 text-xs text-gray-400">
              {formSteps.map((step, index) => (
                <span 
                  key={step.id}
                  className={`${index <= currentStep ? 'text-sylonow-gold font-medium' : ''}`}
                >
                  {!isMobile ? step.title : index === 0 || index === formSteps.length - 1 ? step.title : ''}
                </span>
              ))}
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                {renderFormStep()}
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between mt-8">
              <Button 
                type="button"
                onClick={handlePrevious}
                disabled={currentStep === 0}
                variant="outline"
                className="border-purple-500/30 text-white disabled:opacity-30"
              >
                <ChevronLeft className="mr-1 h-4 w-4" /> Previous
              </Button>
              
              {currentStep < formSteps.length - 1 ? (
                <Button 
                  type="button"
                  onClick={handleNext}
                  className="bg-gradient-to-r from-sylonow-purple to-sylonow-gold hover:opacity-90"
                >
                  Next <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              ) : (
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-sylonow-purple to-sylonow-gold hover:opacity-90"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'} {!isSubmitting && <Check className="ml-1 h-4 w-4" />}
                </Button>
              )}
            </div>
          </form>
        </motion.div>

        {/* Roles Section */}
        <motion.div 
          className="mt-12 bg-white/5 p-6 rounded-xl border border-purple-500/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-sylonow-gold">
            Available Roles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(roles).map(([category, positions], index) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white/5 p-4 rounded-lg border border-purple-500/10"
              >
                <h3 className="text-lg font-semibold mb-2 capitalize">{category} Team</h3>
                <ul className="space-y-1 text-gray-300 text-sm">
                  {positions.map((position, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-purple-400">•</span>
                      {position}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Career;
