export interface Publication {
  key: string;
  title: string;
  authors: string[]; // written as they appear on the paper
  venue: string;
  year: number;
  date: string;
  doi: string;
  summary: string;
  bibtex: string;
}

// The name to emphasize in author lists.
export const selfAuthor = 'Khatri, S.';

export const publications: Publication[] = [
  {
    key: 'Giri2022ProtonFlux',
    title:
      'Analysis of Proton Flux with Solar Wind Parameters, Symmetric (SYM) and Asymmetric (ASY) H-indices',
    authors: ['Giri, A.', 'Lama, A. D.', 'Adhikari, B.', 'Rimal, S.', 'Khatri, S.'],
    venue: 'Journal of Nepal Physical Society',
    year: 2022,
    date: 'Dec 2022',
    doi: '10.3126/jnphyssoc.v8i3.50727',
    summary:
      'An empirical study relating proton flux variations to solar wind drivers and geomagnetic indices, to better understand space weather dynamics.',
    bibtex: `@article{Giri2022ProtonFlux,
  title   = {Analysis of Proton Flux with Solar Wind Parameters, Symmetric (SYM) and Asymmetric (ASY) H-indices},
  author  = {Giri, A. and Lama, A. D. and Adhikari, B. and Rimal, S. and Khatri, S.},
  journal = {Journal of Nepal Physical Society},
  year    = {2022},
  month   = dec,
  doi     = {10.3126/jnphyssoc.v8i3.50727}
}`,
  },
];
