export const roles = {
  main: ['Management Team', 'Research Team', 'Creative Team', 'Marketing Team', 'Technical Team', 'Other Team']
};

export const formSteps = [
  { id: 'basic', title: 'Basic Information' },
  { id: 'questions', title: 'Additional Questions' }
];

export const initialFormData = {
  fullName: '',
  contact: '',
  email: '',
  interestedRole: '',
  selectedTeams: [] as string[],
  description: '',
  passion: '',
  challenges: 'Yes',
  timeCommitment: '',
  passionMeaning: '',
  directEntry: 'Yes'
};
