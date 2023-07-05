export interface project {
  title: string;
  role: string;
  description: string;
  src: string;
}

export interface resume {
  company_period: string;
  company_role: string;
  company_name: string;
  company_location: string;
  company_description: string;
}

export interface studies {
  college_period: string;
  college_name: string;
  college_degree: string;
  college_location: string;
  college_description: string;
}

export const projectData: project[] = [
  {
    title: 'Project Name 1',
    role: 'Data Analyst',
    description:
      "I'm a paragraph. Click here to add your own text and edit me.I'm a paragraph. Click here to add your own text and edit me.",
    src: './assets/Leaflet.png',
  },
  {
    title: 'Project Name 2',
    role: 'System Trainee',
    description:
      "I'm a paragraph. Click here to add your own text and edit me.",
    src: './assets/Leaflet.png',
  },
  {
    title: 'Project Name 3',
    role: 'System Trainee',
    description:
      "I'm a paragraph. Click here to add your own text and edit me.",
    src: './assets/Leaflet.png',
  },
];

export const resumeData: resume[] = [
  {
    company_period: '2022-present',
    company_role: 'Designer',
    company_name: 'Test Company',
    company_location: 'Somewhere',
    company_description:
      "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the fon",
  },
  {
    company_period: '2020-2022',
    company_role: 'Designer',
    company_name: 'Test Company 2',
    company_location: 'Somewhere',
    company_description:
      "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the fon",
  },
];

export const educationData: studies[] = [
  {
    college_period: '2019 - 2021',
    college_name: 'UNIVERSITY NAME',
    college_degree: 'Post Graduation',
    college_location: 'somewhere',
    college_description: `I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.',`,
  },
  {
    college_period: '2016 - 2019',
    college_name: 'UNIVERSITY NAME',
    college_degree: 'Graduation',
    college_location: 'somewhere',
    college_description: `I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.',`,
  },
];
