import { researchGroups } from './research';

// Personal facts are based on the supplied CV and the user's updates.
export const profile = {
  name: 'Wenjun Yu',
  chineseName: '余文峻',
  pronunciation: '/ˈwɛndʒʊn juː/',
  institution: 'The University of Hong Kong',
  email: 'wenjunyus [AT] gmail [DOT] com',
  scholar: 'https://scholar.google.com/citations?user=VV3FNQoAAAAJ&hl=en',
  interests: 'My research focuses on quantum information and computation, including quantum simulation, quantum algorithms, and quantum device characterization and learning.',
  motivation: 'I am particularly interested in the theoretical foundations of practically relevant quantum advantage, especially in near-term and early fault-tolerant regimes.',
};

// Professional services listed in the supplied CV (page 2).
export const professionalServices = [
  {
    role: 'Journal Referee',
    description: 'Physical Review Letters, PRX Quantum, Nature Communications, npj Quantum Information, Physical Review Research, and Quantum Science and Technology.',
  },
  {
    role: 'Conference Referee',
    description: 'ACM Symposium on Theory of Computing (STOC), Quantum Information Processing Conference (QIP), Conference on the Theory of Quantum Computation, Communication and Cryptography (TQC), Asian Quantum Information Science Conference (AQIS), and Quantum Computing Theory in Practice (QCTiP).',
  },
  {
    role: 'Teaching Assistant',
    description: 'Tsinghua University and the University of Hong Kong.',
  },
];

// Use ISO dates for sorting and display only the date precision supported by sources.
export const news = [
  {
    date: '2026-08', label: 'Aug 2026',
    before: 'I gave a talk on ',
    paperId: 'robust-marginals',
    after: ' at AQIS 2026 in Daejeon, Korea.',
  },
  {
    date: '2026-04', label: 'Apr 2026',
    before: 'New preprint: ',
    paperId: 'robust-marginals', after: '.',
  },
  {
    date: '2026-02', label: 'Feb 2026',
    before: 'New preprint: ', paperId: 'entanglement-resilience', after: '.',
  },
  {
    date: '2026-01', label: 'Jan 2026',
    before: 'Our paper ', paperId: 'hamiltonian-certification',
    after: ' was published in the proceedings of SODA 2026.',
  },
  {
    date: '2025-10', label: 'Oct 2025',
    before: 'Our paper ', paperId: 'lindbladian-simulation',
    after: ' was published in Physical Review Letters.',
  },
  {
    date: '2025-08', label: 'Aug 2025',
    before: 'Our paper ', paperId: 'observable-driven-simulation',
    after: ' was published in Communications Physics.',
  },
  {
    date: '2025-08', label: 'Aug 2025',
    before: 'I gave a talk on ',
    paperId: 'lindbladian-simulation',
    after: ' at AQIS 2025 in Hong Kong.',
  },
  {
    date: '2025-05', label: 'May 2025',
    before: 'Our paper ', paperId: 'bra-ket-entanglement',
    after: ' first appeared on arXiv.',
  },
  {
    date: '2025-04', label: 'Apr 2025',
    before: 'I gave a talk on ',
    paperId: 'observable-driven-simulation',
    after: ' at QCTiP 2025 in Berlin, Germany.',
  },
].map((item) => {
  const paper = researchGroups.flatMap((group) => group.papers)
    .find((entry) => entry.id === item.paperId);
  if (!paper) throw new Error(`News references an unknown paper: ${item.paperId}`);
  return { ...item, linkText: paper.title, href: paper.href };
});
