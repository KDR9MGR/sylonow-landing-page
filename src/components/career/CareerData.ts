export const roles = {
  technical: [
    'Software Engineer',
    'Product Designer',
    'Research Analyst'
  ],
  marketing: [
    'Marketing Manager',
    'Content Writer',
    'Sales Representative'
  ],
  operations: [
    'Customer Support',
    'Business Analyst'
  ]
};

export const teams = [
  'Management Team',
  'Research Team',
  'Creative Team',
  'Marketing Team',
  'Technical Team',
  'Other Team'
] as const;

export type TeamType = typeof teams[number];

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
  selectedTeam: 'Management Team',
  description: '',
  passion: '',
  challengeAccepter: 'yes',
  weeklyHours: 20,
  passionMeaning: '',
  directEntry: 'yes'
};
