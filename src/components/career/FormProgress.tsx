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
    <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-pink-50 to-purple-50">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Application Form</h2>
        <span className="text-sm font-medium text-gray-600">
          Step {currentStep + 1} of {formSteps.length}
        </span>
      </div>
      <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex justify-between mt-2 text-sm">
        {formSteps.map((step, index) => (
          <span 
            key={step.id}
            className={`${
              index <= currentStep 
                ? 'text-pink-600 font-medium' 
                : 'text-gray-400'
            } transition-colors duration-200`}
          >
            {!isMobile ? step.title : index === 0 || index === formSteps.length - 1 ? step.title : ''}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FormProgress;
