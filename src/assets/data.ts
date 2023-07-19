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
    company_role: 'FrontEndDesigner',
    company_name: 'Sunarc technologies',
    company_location: 'Bikaner, Rajasthan',
    company_description:
      'SunArc Technologies, the Leading Software Development Company is providing end-to-end IT services & solutions to our esteemed customers in multiple industries and domains for the past 19+ years.',
  },
];

export const educationData: studies[] = [
  {
    college_period: '2022 - Present',
    college_name: 'MGSU',
    college_degree: 'Post Graduation',
    college_location: 'Bikaner, Rajasthan',
    college_description: `Currently enrolled in the Masters programme in the computer science `,
  },
  {
    college_period: '2019 - 2022',
    college_name: 'MGSU',
    college_degree: 'Graduation',
    college_location: 'Bikaner, Rajasthan',
    college_description: `Completed Bachelor's in computer applications from the college , in the tenure had the opportunity to deep dive into several technologies as well as basic hardware knowledge.`,
  },
];
