
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { useIsMobile } from '@/hooks/use-mobile';

interface FormStepType {
  id: string;
  title: string;
}

interface FormProgressProps {
  currentStep: number;
  formSteps: FormStepType[];
  progress: number;
}

const FormProgress: React.FC<FormProgressProps> = ({ currentStep, formSteps, progress }) => {
  const isMobile = useIsMobile();
  
  return (
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
  );
};

export default FormProgress;
