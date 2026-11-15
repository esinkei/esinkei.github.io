// Add a project here and a "Projects" section appears on the home page and the CV.
// Only list work that has something a reader can open: a repository, a report, or a demo.

export interface Project {
  title: string;
  summary: string;
  date?: string;
  tags?: string[];
  links?: { label: string; href: string }[];
}

export const projects: Project[] = [
  // {
  //   title: 'Project name',
  //   summary: 'One or two sentences: the question, the method, the result.',
  //   date: '2026',
  //   tags: ['Python', 'Qiskit'],
  //   links: [{ label: 'Code', href: 'https://github.com/esinkei/your-repo' }],
  // },
];
