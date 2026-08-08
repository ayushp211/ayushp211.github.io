import type { Project } from './types'

// TODO: hooks/descriptions are placeholders pending review — see plan.md Phase 0.
export const projects: readonly Project[] = [
  {
    slug: 'buzzplayer',
    title: 'BuzzPlayer',
    hook: 'TODO: one-line hook',
    description: 'TODO: description',
    tags: ['Python', 'React', 'Flask', 'vLLM', 'Whisper', 'NumPy', 'SentenceTransformers'],
  },
  {
    slug: 'study-buddy',
    title: 'Study Buddy',
    hook: 'TODO: one-line hook',
    description: 'TODO: description',
    tags: ['FastAPI', 'React', 'LangChain', 'vLLM', 'Docker/Singularity', 'PyMuPDF'],
  },
  {
    slug: 'cave-explorer-game-engine',
    title: 'Cave Explorer Game Engine',
    hook: 'TODO: one-line hook',
    description: 'TODO: description',
    tags: ['C++', 'ARM Mbed'],
  },
  {
    slug: 'event-ticketer',
    title: 'Event Ticketer',
    hook: 'TODO: one-line hook',
    description: 'TODO: description',
    tags: ['Python', 'Django', 'HTML/CSS', 'JavaScript', 'SQLite'],
  },
]
