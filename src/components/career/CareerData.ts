export type TeamType = {
  value: string;
  label: string;
  isSpecial?: boolean;
};

export const teams: TeamType[] = [
  {
    value: 'all_rounder',
    label: 'Company All-Rounder',
    isSpecial: true
  },
  {
    value: 'technical',
    label: 'Technical Team'
  },
  {
    value: 'management',
    label: 'Management Team'
  },
  {
    value: 'research_development',
    label: 'Research & Development Team'
  },
  {
    value: 'creative_digital',
    label: 'Creative & Digital Team'
  },
  {
    value: 'marketing_advertisement',
    label: 'Marketing & Advertisement Team'
  },
  {
    value: 'exclusive',
    label: 'Exclusive Team (Other Roles)'
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
  selectedTeam: { value: 'technical', label: 'Technical Team' },
  description: '',
  passion: '',
  challengeAccepter: 'yes',
  weeklyHours: 20,
  passionMeaning: '',
  directEntry: 'yes'
};
