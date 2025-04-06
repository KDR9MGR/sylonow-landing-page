
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast";
import { ChevronRight, ChevronLeft, Check } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import FormProgress from './FormProgress';
import { BasicInfoStep, AboutYouStep, PsychologicalStep, CommitmentStep } from './FormSteps';
import { formSteps, roles, initialFormData } from './CareerData';

const CareerForm: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(initialFormData);
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
      
      setFormData(initialFormData);
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

  const renderFormStep = () => {
    const currentStepContent = (() => {
      switch (currentStep) {
        case 0:
          return <BasicInfoStep formData={formData} handleInputChange={handleInputChange} roles={roles} />;
        case 1:
          return <AboutYouStep formData={formData} handleInputChange={handleInputChange} />;
        case 2:
          return <PsychologicalStep 
                   formData={formData} 
                   handleInputChange={handleInputChange} 
                   handleRadioChange={handleRadioChange} 
                 />;
        case 3:
          return <CommitmentStep 
                   formData={formData} 
                   handleInputChange={handleInputChange} 
                   handleRadioChange={handleRadioChange} 
                 />;
        default:
          return <BasicInfoStep formData={formData} handleInputChange={handleInputChange} roles={roles} />;
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white/5 rounded-xl border border-purple-500/20 overflow-hidden"
    >
      <FormProgress 
        currentStep={currentStep} 
        formSteps={formSteps} 
        progress={progress} 
      />
      
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
  );
};

export default CareerForm;
