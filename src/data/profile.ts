// Identity, links, and the positioning text shown on the home page.
// Leave a link as '' to hide it everywhere.

export const profile = {
  name: 'Sushil Khatri',
  email: 'sushilkhatri45@gmail.com',
  location: 'New York, NY',
  github: 'https://github.com/esinkei',
  linkedin: '', // e.g. 'https://www.linkedin.com/in/your-handle'

  // Path under public/. The download button appears once this file exists.
  cvPdf: '/cv/SushilKhatri_CV.pdf',

  eyebrow: 'Mathematics · Physics · Quantum Information',
  tagline:
    'Mathematician with a physics background, working toward research in quantum information and computation.',
  description:
    'Sushil Khatri — MS Mathematics (Purdue University Fort Wayne, GPA 4.0) with a physics background. Interested in quantum computing, mathematical physics, and quantitative research.',

  about: [
    'I hold an MS in Mathematics from Purdue University Fort Wayne (GPA 4.0) and a B.Sc. in Physics, with a minor in Mathematics and Statistics, from St. Xavier’s College, Tribhuvan University.',
    'I currently teach calculus-based AP Physics C: Mechanics at Success Academy High School of the Liberal Arts in Manhattan. Before that I was a graduate teaching assistant at Purdue Fort Wayne, running physics labs alongside my graduate coursework.',
    'My training is in quantitative analysis and computational methods, and I like problems where careful mathematics meets real data or real physical systems.',
  ],

  // The short path shown under About.
  journey: [
    { place: 'Kathmandu', note: 'B.Sc. Physics', years: '2018 – 2022' },
    { place: 'Fort Wayne', note: 'MS Mathematics', years: '2024 – 2026' },
    { place: 'New York', note: 'Teaching AP Physics C', years: '2026 – now' },
  ],

  interests: [
    'Quantum information and computation',
    'Mathematical and computational physics',
    'Data-driven dynamical systems',
    'Statistical inference and machine learning',
  ],

  seeking: [
    {
      title: 'Doctoral study',
      text: 'PhD programs in quantum computing, quantum information, and physics.',
    },
    {
      title: 'Industry research',
      text: 'Research-centered quantitative roles: quantitative research, fintech, and actuarial science.',
    },
  ],

  // Headline evidence shown under the hero. Keep each to one line.
  highlights: [
    { value: '4.0', label: 'GPA, MS Mathematics, Purdue University Fort Wayne' },
    { value: '#1', label: 'Physics results in the Success Academy network, as AP Physics C teacher' },
    { value: 'PLANCKS', label: 'Represented Nepal at the 2022 international physics competition in Munich' },
    { value: 'Top rank', label: 'Moran Memorial Award for the highest aggregate at St. Xavier’s College' },
  ],
};
