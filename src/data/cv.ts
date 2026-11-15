// Everything on the CV. The home page and /cv/ both render from this file.

export interface Entry {
  title: string;
  subtitle?: string;
  date?: string;
  location?: string;
  details?: string[];
}

export const education: Entry[] = [
  {
    title: 'Purdue University Fort Wayne',
    subtitle: 'MS, Mathematics',
    date: 'Aug 2024 – May 2026',
    location: 'Fort Wayne, IN',
    details: ['GPA: 4.0'],
  },
  {
    title: 'St. Xavier’s College, Tribhuvan University',
    subtitle: 'B.Sc., Physics (major); Mathematics and Statistics (minor)',
    date: 'Nov 2018 – Dec 2022',
    location: 'Kathmandu, Nepal',
  },
];

export const experience: Entry[] = [
  {
    title: 'Success Academy Charter Schools — High School of the Liberal Arts, Manhattan',
    subtitle: 'High School Teacher, AP Physics C: Mechanics',
    date: 'Jul 2026 – Present',
    location: 'New York, NY',
    details: [
      'Teach calculus-based AP Physics C: Mechanics across 5 daily 55-minute sections.',
      'Students achieved the #1 physics results in the Success Academy network on MCQ sequence assessments and practice tests.',
      'Plan lessons and assessments, and use Do Nows, exit tickets, and assessment data to adjust instruction and reteach.',
      'Run a structured, high-expectations classroom through effective classroom management and clear, well-paced delivery of rigorous content.',
      'Co-teach and participate in grade team meetings; communicate regularly with families on student progress.',
      'Serve as an advisory teacher, mentoring an assigned group of students.',
    ],
  },
  {
    title: 'Purdue University Fort Wayne',
    subtitle: 'Graduate Teaching Assistant',
    date: 'Aug 2024 – May 2026',
    location: 'Fort Wayne, IN',
    details: [
      'Led and coordinated 3 weekly physics lab sessions, ensuring efficient execution of experiments and adherence to safety protocols.',
      'Delivered clear technical instructions and feedback to diverse student groups.',
      'Managed multiple concurrent responsibilities alongside full-time graduate study.',
    ],
  },
];

export const skills: { group: string; items: string }[] = [
  {
    group: 'Programming',
    items: 'Python (NumPy, Pandas, scikit-learn, Seaborn, Matplotlib, Qiskit, Cirq), MATLAB, R, C',
  },
  { group: 'Data and analysis', items: 'Excel, IBM SPSS, RStudio, LoggerPro' },
  { group: 'Research tools', items: 'LaTeX, Git, shell scripting, Zotero, Inkscape' },
  {
    group: 'Workplace tools',
    items: 'Google Workspace, Microsoft 365, Atlassian (Jira, Confluence)',
  },
];

export const awards: Entry[] = [
  {
    title: 'Fr. Marshall D. Moran, S.J., Memorial Award for Excellence in Academics',
    date: 'Sep 2023',
    details: [
      'Awarded to the student with the highest aggregate percentage across internal and board examinations who has consistently upheld the Xavierian values.',
    ],
  },
  {
    title: 'Fathers Locke and Stiller Research Award (LSRA)',
    date: 'Aug 2022',
    details: ['Awarded for completing the mandated research work of LSRA Cycle 4.'],
  },
  {
    title: 'First Position, Pi Day Elocution Contest',
    date: 'Mar 2020',
    details: ['Organized by St. Xavier’s Physics Council, Nepal.'],
  },
];

export const workshops: Entry[] = [
  {
    title: 'Quantum Science, Technology, and Engineering at Purdue (QSTEP) Workshop',
    subtitle: 'Purdue University, West Lafayette',
    date: 'Oct 2025',
  },
  {
    title: 'Introduction to Data-Driven Dynamical Systems',
    subtitle: 'Graduate Student Workshop, Purdue University Fort Wayne',
    date: '2025 – 2026',
  },
  {
    title: 'Quantum Computing and Post-Quantum Cryptography',
    subtitle: 'Kathmandu University Computational Math Club',
    date: 'Mar 2024',
  },
  {
    title: 'PLANCKS 2022, representing Nepal',
    subtitle: 'German Physical Society (jDPG) and LMU Munich',
    date: 'May 2022',
  },
  {
    title: 'Exploring Wonders Through Advanced Instruments',
    subtitle: 'International Webinar, Charotar University of Science and Technology, India',
    date: 'Feb 2021',
  },
  {
    title: 'Three-Day Workshop on Data Analysis using Python and Origin',
    subtitle: 'St. Xavier’s College, Kathmandu',
    date: 'Jan 2021',
  },
];

export const organizations: Entry[] = [
  {
    title: 'St. Xavier’s Physics Council, Nepal',
    subtitle: 'Vice President',
    date: 'Jan 2020 – Jan 2021',
  },
  {
    title: 'St. Xavier’s Physics Council, Nepal',
    subtitle: 'IT Officer',
    date: 'Jan 2019 – Jan 2020',
  },
];

export const certifications: { title: string; issuer: string; date: string }[] = [
  {
    title: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'DeepLearning.AI and Stanford University',
    date: 'Oct 2022',
  },
  { title: 'Statistical Inference', issuer: 'Johns Hopkins University', date: 'Sep 2020' },
  {
    title: 'Understanding and Visualizing Data with Python',
    issuer: 'University of Michigan',
    date: 'Sep 2020',
  },
  {
    title: 'Introduction to Data Science in Python',
    issuer: 'University of Michigan',
    date: 'Aug 2020',
  },
  {
    title: 'Introduction to Programming with MATLAB',
    issuer: 'Vanderbilt University',
    date: 'Aug 2020',
  },
  { title: 'R Programming', issuer: 'Johns Hopkins University', date: 'Jul 2020' },
  {
    title: 'Python for Everybody Specialization (capstone with Honors)',
    issuer: 'University of Michigan',
    date: 'Jul 2020',
  },
  { title: 'The Data Scientist’s Toolbox', issuer: 'Johns Hopkins University', date: 'Jun 2020' },
];
