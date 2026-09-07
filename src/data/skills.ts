import type { SkillGroup } from './types'

export const skills: readonly SkillGroup[] = [
  {
    category: 'Languages',
    items: [
      'Python',
      'Java',
      'C/C++',
      'SQL',
      'TypeScript',
      'JavaScript',
      'Assembly (RISC-V)',
      'HTML/CSS',
    ],
  },
  {
    category: 'Frameworks',
    items: ['React', 'FastAPI', 'Flask', 'Django', 'Tailwind CSS', 'DSPy', 'JUnit'],
  },
  {
    category: 'Tools',
    items: [
      'Git',
      'AWS',
      'ClickHouse',
      'Docker/Singularity',
      'Linux/Unix CLI',
      'Jira',
      'ARM Mbed',
      'LaTeX',
    ],
  },
  {
    category: 'Libraries',
    items: [
      'PyTorch',
      'vLLM',
      'LangChain',
      'Transformers',
      'NumPy',
      'Pandas',
      'JAX',
      'SentenceTransformers',
      'PyMuPDF',
    ],
  },
]
