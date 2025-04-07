import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';

interface BasicInfoStepProps {
  formData: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleCheckboxChange: (value: string) => void;
  roles: Record<string, string[]>;
}

export const BasicInfoStep: React.FC<BasicInfoStepProps> = ({ 
  formData, 
  handleInputChange, 
  handleCheckboxChange,
  roles 
}) => (
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
      <Label className="mb-2 block">Select Teams *</Label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {roles.main.map((role) => (
          <div key={role} className="flex items-center space-x-2">
            <Checkbox
              id={role}
              checked={formData.selectedTeams.includes(role)}
              onCheckedChange={() => handleCheckboxChange(role)}
            />
            <Label htmlFor={role}>{role}</Label>
          </div>
        ))}
      </div>
    </div>
  </div>
);

interface QuestionsStepProps {
  formData: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleRadioChange: (id: string, value: string) => void;
}

export const QuestionsStep: React.FC<QuestionsStepProps> = ({ 
  formData, 
  handleInputChange,
  handleRadioChange 
}) => (
  <div className="space-y-6">
    <div>
      <Label htmlFor="description">Describe yourself in ONE powerful sentence *</Label>
      <Textarea
        name="description"
        id="description"
        value={formData.description}
        onChange={handleInputChange}
        placeholder="Your powerful one-sentence description"
        className="bg-white/5 border-purple-500/20 focus:border-purple-500 focus:ring-purple-500 h-20"
        required
        maxLength={100}
      />
    </div>

    <div>
      <Label htmlFor="passion">What makes you passionate about joining Sylonow?</Label>
      <Textarea
        name="passion"
        id="passion"
        value={formData.passion}
        onChange={handleInputChange}
        placeholder="Express your passion (up to 100 words)"
        className="bg-white/5 border-purple-500/20 focus:border-purple-500 focus:ring-purple-500"
        maxLength={500}
      />
      <p className="text-xs text-gray-400 mt-1">Optional - Maximum 100 words</p>
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

    <div>
      <Label htmlFor="timeCommitment">How much time can you dedicate to Sylonow per week? *</Label>
      <Input
        name="timeCommitment"
        id="timeCommitment"
        type="number"
        min="1"
        max="168"
        value={formData.timeCommitment}
        onChange={handleInputChange}
        placeholder="Enter hours per week (e.g., 20)"
        className="bg-white/5 border-purple-500/20 focus:border-purple-500 focus:ring-purple-500"
        required
      />
      <p className="text-xs text-gray-400 mt-1">Please enter the number of hours per week</p>
    </div>

    <div>
      <Label htmlFor="passionMeaning">What does "passion" mean to you in one sentence? *</Label>
      <Textarea
        name="passionMeaning"
        id="passionMeaning"
        value={formData.passionMeaning}
        onChange={handleInputChange}
        placeholder="Define passion in one sentence (25 words max)"
        className="bg-white/5 border-purple-500/20 focus:border-purple-500 focus:ring-purple-500"
        required
        maxLength={150}
      />
      <p className="text-xs text-gray-400 mt-1">Maximum 25 words</p>
    </div>

    <div>
      <p className="mb-2">Are you interested in potential direct entry to company after completing your education? *</p>
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
