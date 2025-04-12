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
  <div className="space-y-6">
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <Label htmlFor="fullName" className="text-gray-700">Full Name *</Label>
        <Input
          name="fullName"
          id="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          placeholder="Your full name"
          className="mt-1 bg-white border-gray-200 focus:border-pink-500 focus:ring-pink-500"
          required
        />
      </div>
      <div>
        <Label htmlFor="contact" className="text-gray-700">Contact Number *</Label>
        <Input
          name="contact"
          id="contact"
          value={formData.contact}
          onChange={handleInputChange}
          placeholder="Your contact number"
          className="mt-1 bg-white border-gray-200 focus:border-pink-500 focus:ring-pink-500"
          required
        />
      </div>
    </div>
    <div>
      <Label htmlFor="email" className="text-gray-700">Email ID *</Label>
      <Input
        name="email"
        id="email"
        type="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Your email address"
        className="mt-1 bg-white border-gray-200 focus:border-pink-500 focus:ring-pink-500"
        required
      />
    </div>
    
    <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-100">
      <div className="text-gray-700 mb-4 block">Select Teams *</div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {roles.main.map((role) => (
          <div key={role} className="flex items-center space-x-2">
            <Checkbox
              id={role}
              checked={formData.selectedTeams.includes(role)}
              onCheckedChange={() => handleCheckboxChange(role)}
              className="text-pink-600 focus:ring-pink-500"
            />
            <Label htmlFor={role} className="text-gray-600 cursor-pointer hover:text-pink-600 transition-colors">
              {role}
            </Label>
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
      <Label htmlFor="description" className="text-gray-700">Describe yourself in ONE powerful sentence *</Label>
      <Textarea
        name="description"
        id="description"
        value={formData.description}
        onChange={handleInputChange}
        placeholder="Your powerful one-sentence description"
        className="mt-1 bg-white border-gray-200 focus:border-pink-500 focus:ring-pink-500 h-20"
        required
        maxLength={100}
      />
      <p className="text-xs text-gray-500 mt-1">Maximum 100 characters</p>
    </div>

    <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-100">
      <Label htmlFor="passion" className="text-gray-700">What makes you passionate about joining Sylonow?</Label>
      <Textarea
        name="passion"
        id="passion"
        value={formData.passion}
        onChange={handleInputChange}
        placeholder="Express your passion (up to 100 words)"
        className="mt-1 bg-white border-gray-200 focus:border-pink-500 focus:ring-pink-500"
        maxLength={500}
      />
      <p className="text-xs text-gray-500 mt-1">Optional - Maximum 100 words</p>
    </div>

    <div>
      <p className="text-gray-700 mb-2">Do you enjoy taking on challenges? *</p>
      <RadioGroup
        value={formData.challenges}
        onValueChange={(value) => handleRadioChange('challenges', value)}
        className="flex space-x-6"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Yes" id="challenges-yes" className="text-pink-600" />
          <Label htmlFor="challenges-yes" className="text-gray-600">Yes</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="No" id="challenges-no" className="text-pink-600" />
          <Label htmlFor="challenges-no" className="text-gray-600">No</Label>
        </div>
      </RadioGroup>
    </div>

    <div>
      <Label htmlFor="timeCommitment" className="text-gray-700">How much time can you dedicate to Sylonow per week? *</Label>
      <Input
        name="timeCommitment"
        id="timeCommitment"
        type="number"
        min="1"
        max="168"
        value={formData.timeCommitment}
        onChange={handleInputChange}
        placeholder="Enter hours per week (e.g., 20)"
        className="mt-1 bg-white border-gray-200 focus:border-pink-500 focus:ring-pink-500"
        required
      />
      <p className="text-xs text-gray-500 mt-1">Please enter the number of hours per week</p>
    </div>

    <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-100">
      <Label htmlFor="passionMeaning" className="text-gray-700">What does "passion" mean to you in one sentence? *</Label>
      <Textarea
        name="passionMeaning"
        id="passionMeaning"
        value={formData.passionMeaning}
        onChange={handleInputChange}
        placeholder="Define passion in one sentence (25 words max)"
        className="mt-1 bg-white border-gray-200 focus:border-pink-500 focus:ring-pink-500"
        required
        maxLength={150}
      />
      <p className="text-xs text-gray-500 mt-1">Maximum 25 words</p>
    </div>

    <div>
      <p className="text-gray-700 mb-2">Are you interested in potential direct entry to company after completing your education? *</p>
      <RadioGroup
        value={formData.directEntry}
        onValueChange={(value) => handleRadioChange('directEntry', value)}
        className="flex space-x-6"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Yes" id="direct-yes" className="text-pink-600" />
          <Label htmlFor="direct-yes" className="text-gray-600">Yes</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="No" id="direct-no" className="text-pink-600" />
          <Label htmlFor="direct-no" className="text-gray-600">No</Label>
        </div>
      </RadioGroup>
    </div>
  </div>
);
