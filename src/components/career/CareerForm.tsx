import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { teams, type TeamType } from './CareerData';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  selectedTeam: z.string().min(1, 'Please select a team'),
  isAllRounder: z.boolean().default(false),
  secondaryTeam: z.string().optional(),
  description: z.string()
    .min(10, 'Description must be at least 10 characters')
    .max(100, 'Description must not exceed 100 characters'),
  passion: z.string()
    .max(500, 'Passion statement must not exceed 500 characters')
    .optional(),
  challengeAccepter: z.enum(['yes', 'no']),
  weeklyHours: z.number().min(1, 'Please enter weekly hours'),
  passionMeaning: z.string()
    .max(125, 'Passion meaning must not exceed 125 characters'),
  directEntry: z.enum(['yes', 'no'])
});

type FormData = z.infer<typeof formSchema>;

export default function CareerForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAllRounder, setIsAllRounder] = useState(false);
  const [secondaryTeam, setSecondaryTeam] = useState('');
  const totalSteps = 4;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
    trigger
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      challengeAccepter: 'yes',
      directEntry: 'yes',
      selectedTeam: ''
    }
  });

  const validateStep = async () => {
    let fieldsToValidate: (keyof FormData)[] = [];
    
    switch (currentStep) {
      case 1:
        fieldsToValidate = ['name', 'email', 'phone'];
        break;
      case 2:
        fieldsToValidate = ['selectedTeam'];
        break;
      case 3:
        fieldsToValidate = ['description', 'passion'];
        break;
      case 4:
        fieldsToValidate = ['challengeAccepter', 'weeklyHours', 'passionMeaning', 'directEntry'];
        break;
    }

    const isValid = await trigger(fieldsToValidate);
    return isValid;
  };

  const nextStep = async () => {
    const isValid = await validateStep();
    if (isValid) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const onSubmit = async (data: FormData) => {
    try {
      // Check if user has already submitted an application
      const { data: existingSubmission } = await supabase
        .from('career_applications')
        .select('id')
        .eq('email', data.email)
        .single();

      if (existingSubmission) {
        toast.error('You have already submitted an application.');
        return;
      }

      const formattedData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        is_all_rounder: isAllRounder,
        selected_team: data.selectedTeam,
        secondary_team: isAllRounder ? secondaryTeam : null,
        description: data.description,
        passion: data.passion || '',
        challenge_accepter: data.challengeAccepter,
        weekly_hours: Number(data.weeklyHours),
        passion_meaning: data.passionMeaning,
        direct_entry: data.directEntry,
        status: 'pending'
      };

      const { error } = await supabase
        .from('career_form_submissions_new')
        .insert([formattedData]);

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      // Send confirmation email via API
      try {
        console.log('Sending email to:', data.email);
        const emailResponse = await fetch('/api/send-application-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            selectedTeam: data.selectedTeam,
            isAllRounder,
            secondaryTeam: isAllRounder ? secondaryTeam : undefined
          }),
        });

        if (!emailResponse.ok) {
          const errorData = await emailResponse.json();
          console.error('Email API error:', errorData);
          throw new Error(`Failed to send email: ${errorData.message || 'Unknown error'}`);
        }

        const responseData = await emailResponse.json();
        console.log('Email sent successfully:', responseData);
      } catch (emailError) {
        console.error('Email sending error:', emailError);
        // Don't throw here, we still want to show success for form submission
        toast.error('Application submitted but failed to send confirmation email. Please check your email address.');
      }

      setIsSubmitted(true);
      toast.success('Application submitted successfully! You will receive an email confirmation shortly.');
    } catch (error) {
      console.error('Error submitting application:', error);
      toast.error('Failed to submit application. Please try again.');
    }
  };

  const renderProgressBar = () => (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
      <div 
        className="bg-gradient-to-r from-pink-500 to-purple-500 h-2.5 rounded-full transition-all duration-300"
        style={{ width: `${(currentStep / totalSteps) * 100}%` }}
      />
    </div>
  );

  const renderStepContent = () => {
    const fadeIn = {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -20 }
    };

      switch (currentStep) {
        case 1:
        return (
          <motion.div {...fadeIn} className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                {...register('name')}
                className={errors.name ? 'border-red-500' : ''}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                {...register('phone')}
                className={errors.phone ? 'border-red-500' : ''}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>
          </motion.div>
        );

        case 2:
        return (
          <motion.div {...fadeIn} className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Team Selection</h2>
            
            {/* All Rounder Checkbox */}
            <div className="flex items-center space-x-2 mb-4">
              <input
                type="checkbox"
                id="allRounder"
                checked={isAllRounder}
                onChange={(e) => {
                  setIsAllRounder(e.target.checked);
                  if (e.target.checked) {
                    setValue('selectedTeam', 'all_rounder');
                  } else {
                    setValue('selectedTeam', secondaryTeam || '');
                  }
                }}
                className="h-4 w-4 rounded border-gray-300 text-pink-600 focus:ring-pink-500"
              />
              <Label htmlFor="allRounder" className="font-medium">All Rounder</Label>
            </div>

            {/* Other Teams Radio Buttons */}
            <div className="space-y-2">
              <Label>Select Your Team {!isAllRounder && '*'}</Label>
              <RadioGroup
                value={secondaryTeam}
                onValueChange={(value) => {
                  setSecondaryTeam(value);
                  setValue('selectedTeam', isAllRounder ? 'all_rounder' : value);
                  setValue('secondaryTeam', value);
                }}
                className="space-y-2"
              >
                {teams.filter(team => team.value !== 'all_rounder').map((team) => (
                  <div key={team.value} className="flex items-center space-x-2">
                    <RadioGroupItem 
                      value={team.value} 
                      id={team.value}
                    />
                    <Label htmlFor={team.value}>{team.label}</Label>
                  </div>
                ))}
              </RadioGroup>
              {errors.selectedTeam && !isAllRounder && !secondaryTeam && (
                <p className="text-red-500 text-sm mt-1">Please select at least one team</p>
              )}
            </div>

            {/* Selected Teams Summary */}
            {(isAllRounder || secondaryTeam) && (
              <div className="mt-4 p-3 bg-gray-50 rounded-md">
                <p className="text-sm text-gray-600">Selected: {[
                  isAllRounder ? 'All Rounder' : '',
                  secondaryTeam ? teams.find(t => t.value === secondaryTeam)?.label : ''
                ].filter(Boolean).join(' + ')}</p>
              </div>
            )}
          </motion.div>
        );

        case 3:
        return (
          <motion.div {...fadeIn} className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Experience & Passion</h2>
            <div>
              <Label htmlFor="description">Describe yourself in ONE powerful sentence *</Label>
              <Input
                id="description"
                {...register('description')}
                className={errors.description ? 'border-red-500' : ''}
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="passion">What makes you passionate about joining Sylonow? (optional)</Label>
              <Textarea
                id="passion"
                {...register('passion')}
                className={errors.passion ? 'border-red-500' : ''}
                rows={4}
              />
              {errors.passion && (
                <p className="text-red-500 text-sm mt-1">{errors.passion.message}</p>
              )}
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div {...fadeIn} className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Additional Details</h2>
            <div>
              <Label>Do you enjoy taking on challenges? *</Label>
              <RadioGroup
                defaultValue="yes"
                onValueChange={(value) => setValue('challengeAccepter', value as 'yes' | 'no')}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="challenge-yes" />
                    <Label htmlFor="challenge-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="challenge-no" />
                    <Label htmlFor="challenge-no">No</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="weeklyHours">How many hours can you dedicate per week? *</Label>
              <Input
                id="weeklyHours"
                type="number"
                {...register('weeklyHours', { valueAsNumber: true })}
                className={errors.weeklyHours ? 'border-red-500' : ''}
              />
              {errors.weeklyHours && (
                <p className="text-red-500 text-sm mt-1">{errors.weeklyHours.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="passionMeaning">What does "passion" mean to you in one sentence? *</Label>
              <Input
                id="passionMeaning"
                {...register('passionMeaning')}
                className={errors.passionMeaning ? 'border-red-500' : ''}
              />
              {errors.passionMeaning && (
                <p className="text-red-500 text-sm mt-1">{errors.passionMeaning.message}</p>
              )}
            </div>

            <div>
              <Label>Are you interested in potential direct entry after completing education? *</Label>
              <RadioGroup
                defaultValue="yes"
                onValueChange={(value) => setValue('directEntry', value as 'yes' | 'no')}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="direct-yes" />
                    <Label htmlFor="direct-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="direct-no" />
                    <Label htmlFor="direct-no">No</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </motion.div>
        );

        default:
        return null;
      }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center space-y-6 bg-white p-8 rounded-lg shadow-sm"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2 
          }}
          className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center"
        >
          <Check className="w-8 h-8 text-white" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
          <p className="text-gray-600">Thank you for your interest in joining our team.</p>
          <p className="text-gray-600">We will review your application and get back to you soon.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-sm text-gray-500 mt-4"
        >
          You will receive an email confirmation shortly.
        </motion.div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 bg-white p-6 rounded-lg shadow-sm">
      {renderProgressBar()}
      {renderStepContent()}
      
      <div className="flex justify-between mt-8 pt-4 border-t">
        {currentStep > 1 && (
          <Button 
            type="button"
            onClick={prevStep}
            variant="outline"
            className="px-8"
          >
            Previous
          </Button>
        )}
          
        {currentStep < totalSteps ? (
            <Button 
              type="button"
            onClick={nextStep}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white ml-auto px-8"
            >
            Next
            </Button>
          ) : (
            <Button 
              type="submit"
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white ml-auto px-8"
              disabled={isSubmitting}
            >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </Button>
          )}
        </div>
      </form>
  );
};
