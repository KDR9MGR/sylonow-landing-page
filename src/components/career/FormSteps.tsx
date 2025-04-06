
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface BasicInfoStepProps {
  formData: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  roles: Record<string, string[]>;
}

export const BasicInfoStep: React.FC<BasicInfoStepProps> = ({ formData, handleInputChange, roles }) => (
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

interface AboutYouStepProps {
  formData: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

export const AboutYouStep: React.FC<AboutYouStepProps> = ({ formData, handleInputChange }) => (
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

interface PsychologicalStepProps {
  formData: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleRadioChange: (id: string, value: string) => void;
}

export const PsychologicalStep: React.FC<PsychologicalStepProps> = ({ 
  formData, 
  handleInputChange, 
  handleRadioChange 
}) => (
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

interface CommitmentStepProps {
  formData: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleRadioChange: (id: string, value: string) => void;
}

export const CommitmentStep: React.FC<CommitmentStepProps> = ({ 
  formData, 
  handleInputChange, 
  handleRadioChange 
}) => (
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
