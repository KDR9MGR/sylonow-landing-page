export type TeamType = {
  value: string;
  label: string;
};

export const teams: TeamType[] = [
  {
    value: 'all_rounder',
    label: 'All Rounder'
  },
  {
    value: 'development',
    label: 'Development'
  },
  {
    value: 'design',
    label: 'Design'
  },
  {
    value: 'marketing',
    label: 'Marketing'
  },
  {
    value: 'content',
    label: 'Content Creation'
  },
  {
    value: 'sales',
    label: 'Sales'
  }
];

export const formSteps = [
  { id: 'basic', title: 'Basic Information' },
  { id: 'questions', title: 'Additional Questions' }
];

export interface FormData {
  name: string;
  email: string;
  phone: string;
  role: string;
  selectedTeam: TeamType;
  description: string; // ONE powerful sentence
  passion?: string; // Optional, 100 words
  challengeAccepter: 'yes' | 'no';
  weeklyHours: number;
  passionMeaning: string; // 25 words
  directEntry: 'yes' | 'no';
}

export const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  role: '',
  selectedTeam: { value: 'technology', label: 'Technology' },
  description: '',
  passion: '',
  challengeAccepter: 'yes',
  weeklyHours: 20,
  passionMeaning: '',
  directEntry: 'yes'
};
