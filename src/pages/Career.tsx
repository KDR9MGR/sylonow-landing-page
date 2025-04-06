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
import { Helmet } from 'react-helmet';
import { supabase } from '@/integrations/supabase/client';

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
    const progressPercentage = ((currentStep + 1) / formSteps.length) * 100;
    setProgress(progressPercentage);
  }, [currentStep]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleRadioChange = (id: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleNext = () => {
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

    const requiredFields = {
      fullName: 'Full Name',
      contact: 'Contact Number',
      email: 'Email',
      description: 'Description',
      passion: 'Passion',
      skills: 'Skills',
      motivation: 'Motivation',
      lifeChallenge: 'Life Challenge',
      industryChange: 'Industry Change',
      timeCommitment: 'Time Commitment',
      passionMeaning: 'Passion Meaning',
      innovation: 'Innovation'
    };

    const emptyFields = Object.entries(requiredFields)
      .filter(([key]) => !formData[key as keyof typeof formData])
      .map(([_, label]) => label);

    if (emptyFields.length > 0) {
      toast({
        title: "Missing Required Fields",
        description: `Please fill in: ${emptyFields.join(', ')}`,
        variant: "destructive",
        duration: 5000,
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const { error } = await supabase
        .from('career_form_submissions')
        .insert([{
          full_name: formData.fullName,
          contact: formData.contact,
          email: formData.email,
          interested_role: formData.interestedRole,
          description: formData.description,
          passion: formData.passion,
          skills: formData.skills,
          challenges: formData.challenges,
          motivation: formData.motivation,
          opportunity: formData.opportunity,
          life_challenge: formData.lifeChallenge,
          industry_change: formData.industryChange,
          time_commitment: formData.timeCommitment,
          direct_entry: formData.directEntry,
          passion_meaning: formData.passionMeaning,
          innovation: formData.innovation
        }]);

      if (error) {
        console.error("Error storing form data:", error);
        throw new Error(error.message);
      }

      toast({
        title: "Application Submitted Successfully! 🎉",
        description: "Thank you for applying. We'll review your application and get back to you soon.",
        duration: 6000,
      });
      
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again or contact us directly at jobs.sylonow@gmail.com",
        variant: "destructive",
        duration: 6000,
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

  const BasicInfoStep = () => (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            name="fullName"
            id="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Your full name"
            className="bg-white/5 border-purple-500/20 focus:border-purple-500 focus:ring-purple-500"
            required
          />
        </div>
        <div>
          <Label htmlFor="contact">Contact Number *</Label>
          <Input
            name="contact"
            id="contact"
            value={formData.contact}
            onChange={handleInputChange}
            placeholder="Your contact number"
            className="bg-white/5 border-purple-500/20 focus:border-purple-500 focus:ring-purple-500"
            required
          />
        </div>
      </div>
      <div>
        <Label htmlFor="email">Email ID *</Label>
        <Input
          name="email"
          id="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Your email address"
          className="bg-white/5 border-purple-500/20 focus:border-purple-500 focus:ring-purple-500"
          required
        />
      </div>
      <div>
        <Label htmlFor="interestedRole">Which role interests you? *</Label>
        <select
          name="interestedRole"
          id="interestedRole"
          value={formData.interestedRole}
          onChange={handleInputChange}
          className="bg-white/5 border-purple-500/20 w-full rounded-md p-2 text-black"
          required
        >
          <option value="" className="text-gray-500">Select a role</option>
          {Object.entries(roles).flatMap(([category, positions]) => (
            <optgroup key={category} label={category.charAt(0).toUpperCase() + category.slice(1)} className="text-black">
              {positions.map(position => (
                <option key={position} value={position} className="text-black">{position}</option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>
    </div>
  );

  const AboutYouStep = () => (
    <div className="space-y-4">
      <div>
        <Label htmlFor="description">Describe yourself in ONE powerful sentence *</Label>
        <Textarea
          name="description"
          id="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Include your passion and talent"
          className="bg-white/5 border-purple-500/20 focus:border-purple-500 focus:ring-purple-500"
          required
        />
      </div>
      <div>
        <Label htmlFor="passion">What makes you passionate about joining Sylonow? *</Label>
        <Textarea
          name="passion"
          id="passion"
          value={formData.passion}
          onChange={handleInputChange}
          className="bg-white/5 border-purple-500/20 focus:border-purple-500 focus:ring-purple-500"
          required
        />
      </div>
      <div>
        <Label htmlFor="skills">What skills do you have that can help us build something incredible? *</Label>
        <Textarea
          name="skills"
          id="skills"
          value={formData.skills}
          onChange={handleInputChange}
          className="bg-white/5 border-purple-500/20 focus:border-purple-500 focus:ring-purple-500"
          required
        />
      </div>
      <div>
        <Label htmlFor="motivation">What is the one thing that keeps you motivated every day? *</Label>
        <Textarea
          name="motivation"
          id="motivation"
          value={formData.motivation}
          onChange={handleInputChange}
          className="bg-white/5 border-purple-500/20 focus:border-purple-500 focus:ring-purple-500"
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
          name="lifeChallenge"
          id="lifeChallenge"
          value={formData.lifeChallenge}
          onChange={handleInputChange}
          className="bg-white/5 border-purple-500/20 focus:border-purple-500 focus:ring-purple-500"
          required
        />
      </div>
      <div>
        <Label htmlFor="industryChange">If you could change one thing about the celebration industry, what would it be and why? *</Label>
        <Textarea
          name="industryChange"
          id="industryChange"
          value={formData.industryChange}
          onChange={handleInputChange}
          className="bg-white/5 border-purple-500/20 focus:border-purple-500 focus:ring-purple-500"
          required
        />
      </div>
      <div>
        <p className="mb-2">Do you enjoy taking on challenges? *</p>
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
          name="timeCommitment"
          id="timeCommitment"
          value={formData.timeCommitment}
          onChange={handleInputChange}
          placeholder="e.g., 20 hours per week"
          className="bg-white/5 border-purple-500/20 focus:border-purple-500 focus:ring-purple-500"
          required
        />
      </div>
      <div>
        <Label htmlFor="passionMeaning">What does "passion" mean to you in one sentence? *</Label>
        <Textarea
          name="passionMeaning"
          id="passionMeaning"
          value={formData.passionMeaning}
          onChange={handleInputChange}
          className="bg-white/5 border-purple-500/20 focus:border-purple-500 focus:ring-purple-500"
          required
        />
      </div>
      <div>
        <Label htmlFor="innovation">What's one thing you would love to create or innovate at Sylonow? *</Label>
        <Textarea
          name="innovation"
          id="innovation"
          value={formData.innovation}
          onChange={handleInputChange}
          className="bg-white/5 border-purple-500/20 focus:border-purple-500 focus:ring-purple-500"
          required
        />
      </div>
      <div>
        <p className="mb-2">Are you interested in potential direct entry after completing your education? *</p>
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
    const currentStepContent = (() => {
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
    })();

    return (
      <motion.div
        key={currentStep}
        initial={false}
        animate={{ opacity: 1, x: 0 }}
        className="w-full"
      >
        {currentStepContent}
      </motion.div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Join Our Team - Talent Accelerator Program | Sylonow</title>
        <meta name="description" content="Join Sylonow's Talent Accelerator Program. We value passion over qualifications. Build your career in AI-powered celebration technology and innovation." />
        <meta name="keywords" content="career opportunities, talent program, Sylonow careers, tech jobs, celebration industry, AI technology jobs" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sylonow.com/career" />
        <meta property="og:title" content="Join Our Team - Talent Accelerator Program | Sylonow" />
        <meta property="og:description" content="Join Sylonow's Talent Accelerator Program. We value passion over qualifications. Build your career in AI-powered celebration technology and innovation." />
        <meta property="og:image" content="/career-og-image.jpg" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://sylonow.com/career" />
        <meta name="twitter:title" content="Join Our Team - Talent Accelerator Program | Sylonow" />
        <meta name="twitter:description" content="Join Sylonow's Talent Accelerator Program. We value passion over qualifications. Build your career in AI-powered celebration technology and innovation." />
        <meta name="twitter:image" content="/career-twitter-image.jpg" />
        
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sylonow.com/career" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-[#121212] to-[#2a1a5e] text-white">
        <Navbar />
        <div className="max-w-6xl mx-auto px-4 pt-20 pb-20">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 rounded-xl border border-purple-500/20 overflow-hidden"
          >
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
              {renderFormStep()}

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
    </>
  );
};

export default Career;
