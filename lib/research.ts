export type Paper = {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  href: string;
  summary?: string;
  note?: string;
};

export type ResearchGroup = {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  papers: Paper[];
};

// Bibliography: the supplied CV, supplemented by the linked primary sources.
// Display titles use sentence case, preserving proper nouns.
// See ../CONTENT_SOURCES.md for title updates and editorial grouping decisions.
export const researchGroups: ResearchGroup[] = [
  {
    id: 'simulation',
    title: 'Quantum simulation & algorithms',
    shortTitle: 'Simulation & algorithms',
    description: 'I study resource-efficient simulation of closed and open quantum systems: how to reduce gates, ancillas, and communication, and how the structure of states and observables can help.',
    papers: [
      {
        id: 'hamiltonian-simulation-review',
        title: 'Advances in time-independent Hamiltonian simulation algorithms',
        authors: ['Y. Wang', 'W. Yu', 'T. Feng', 'Q. Zhao'],
        venue: 'Frontiers of Computer Science (2026) · Review',
        href: 'https://journal.hep.com.cn/fcs/EN/10.1007/s11704-026-51794-6',
      },
      {
        id: 'entanglement-resilience',
        title: 'Entanglement-induced resilience of quantum dynamics',
        authors: ['T. Feng', 'Y. Cao', 'W. Yu', 'J. Zeng', 'X. Li', 'X. Deng', 'Q. Zhao'],
        venue: 'Preprint · arXiv:2602.20987 (2026)',
        href: 'https://arxiv.org/abs/2602.20987',
        summary: 'Entanglement growth can make quantum dynamics resilient to coherent noise from local Hamiltonian perturbations.',
      },
      {
        id: 'lindbladian-simulation',
        title: 'Lindbladian simulation with logarithmic precision scaling via two ancillas',
        authors: ['W. Yu*', 'X. Li*', 'Q. Zhao', 'X. Yuan'],
        venue: 'Physical Review Letters 135, 160602 (2025)',
        href: 'https://doi.org/10.1103/2cx4-b82c',
        summary: 'Simulating open-system dynamics with two ancillas and circuit depth that scales logarithmically with inverse precision.',
        note: '* Equal contribution.',
      },
      {
        id: 'observable-driven-simulation',
        title: 'Observable-driven speed-ups in quantum simulations',
        authors: ['W. Yu', 'J. Xu', 'Q. Zhao'],
        venue: 'Communications Physics 8, 340 (2025)',
        href: 'https://www.nature.com/articles/s42005-025-02260-5',
        summary: 'Using the structure of the measured observable to sharpen product-formula error bounds and reduce simulation costs.',
      },
      {
        id: 'distributed-simulation',
        title: 'Distributed quantum simulation',
        authors: ['T. Feng', 'J. Xu', 'W. Yu', 'Z. Ye', 'P. Yao', 'Q. Zhao'],
        venue: 'Preprint · arXiv:2411.02881 (2024)',
        href: 'https://arxiv.org/abs/2411.02881',
        summary: 'Communication-efficient simulation protocols for distributed quantum computers, together with bounds on their communication costs.',
      },
    ],
  },
  {
    id: 'characterization',
    title: 'Quantum characterization & learning',
    shortTitle: 'Characterization & learning',
    description: 'I develop methods to learn and certify Hamiltonians, characterize quantum gates and noise, and extract reliable information from imperfect quantum devices.',
    papers: [
      {
        id: 'hamiltonian-certification',
        title: 'Quantum Hamiltonian certification',
        authors: ['M. Gao', 'Z. Ji', 'Q. Wang', 'W. Yu', 'Q. Zhao'],
        venue: 'ACM–SIAM Symposium on Discrete Algorithms (SODA), 1424–1467 (2026)',
        href: 'https://epubs.siam.org/doi/10.1137/1.9781611978971.53',
        summary: 'Certifying whether an unknown Hamiltonian is close to a target, with optimal total evolution time under the normalized Frobenius norm.',
        note: 'Authors listed alphabetically.',
      },
      {
        id: 'hamiltonian-learning',
        title: 'Robust and efficient Hamiltonian learning',
        authors: ['W. Yu', 'J. Sun', 'Z. Han', 'X. Yuan'],
        venue: 'Quantum 7, 1045 (2023)',
        href: 'https://doi.org/10.22331/q-2023-06-29-1045',
        summary: 'Learning Pauli-sparse Hamiltonians from short-time dynamics and local operations, with robustness to state preparation and measurement errors.',
      },
      {
        id: 'local-twirling',
        title: 'Scalable fast benchmarking for individual quantum gates with local twirling',
        authors: ['Y. Zhang', 'W. Yu', 'P. Zeng', 'G. Liu', 'X. Ma'],
        venue: 'Photonics Research 11, 81–99 (2023)',
        href: 'https://opg.optica.org/prj/fulltext.cfm?uri=prj-11-1-81&id=524583',
        note: 'Editor’s Pick.',
      },
      {
        id: 'robust-shadows',
        title: 'Robust shadow estimation',
        authors: ['S. Chen*', 'W. Yu*', 'P. Zeng', 'S. T. Flammia'],
        venue: 'PRX Quantum 2, 030348 (2021)',
        href: 'https://doi.org/10.1103/PRXQuantum.2.030348',
        note: '* Equal contribution.',
      },
      {
        id: 'sparse-noise',
        title: 'Fast estimation of sparse quantum noise',
        authors: ['R. Harper', 'W. Yu', 'S. T. Flammia'],
        venue: 'PRX Quantum 2, 010322 (2021)',
        href: 'https://doi.org/10.1103/PRXQuantum.2.010322',
      },
    ],
  },
  {
    id: 'states-resources',
    title: 'Quantum states & resources',
    shortTitle: 'States & resources',
    description: 'I study when local information reliably determines a global quantum state, and how entanglement, magic, and coherence relate to the classical simulation of quantum systems.',
    papers: [
      {
        id: 'robust-marginals',
        title: 'Quantum state determinability from local marginals is universally robust',
        authors: ['W. Yu', 'F. Shi', 'G. Chiribella', 'Q. Zhao'],
        venue: 'Preprint · arXiv:2604.05508 (2026)',
        href: 'https://arxiv.org/abs/2604.05508',
        summary: 'We establish universal power-law robustness for quantum states uniquely determined by their local marginals.',
      },
      {
        id: 'bra-ket-entanglement',
        title: 'Bra-ket entanglement, an indicator bridging entanglement, magic, and coherence',
        authors: ['Z. Shang', 'S. Chen', 'W. Yu', 'G. Chiribella', 'Q. Zhao'],
        venue: 'Preprint · arXiv:2505.09512 (2025, revised 2026)',
        href: 'https://arxiv.org/abs/2505.09512',
        summary: 'An operator-based perspective on the connections between entanglement, magic, coherence, and classical simulation.',
      },
    ],
  },
];
