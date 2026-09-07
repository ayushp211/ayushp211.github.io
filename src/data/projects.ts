import type { Project } from './types'

export const projects: readonly Project[] = [
  {
    slug: 'buzzplayer',
    title: 'BuzzPlayer',
    hook: 'Multi-modal RAG chatbot for timestamp-grounded video Q&A.',
    description:
      'Designed a full-stack chatbot powered by a multi-modal RAG pipeline, fusing audio and visual streams via temporal chunking with sub-second similarity search. Partitioned an 8-GPU cluster to serve concurrent 106B-parameter LLMs using vLLM and tensor parallelism. Enforced strict output boundaries and greedy decoding to eliminate hallucinations.',
    tags: ['Python', 'React', 'Flask', 'vLLM', 'Whisper', 'NumPy', 'SentenceTransformers'],
    slidesUrl:
      'https://docs.google.com/presentation/d/1vvgbfj5_vbBfqBvVb-Yy0imu04I-56B2Dw5tqiYIsOs/preview',
  },
  {
    slug: 'study-buddy',
    title: 'Study Buddy',
    hook: 'Local RAG tool that turns your own documents into personalized quizzes.',
    description:
      'Developed a fully local RAG pipeline for personalized quiz generation, reaching 95% accuracy with complete data sovereignty on university HPC infrastructure. Engineered a preloaded document workflow that cut time-to-generation by 70%, from roughly 45 seconds to 13. Implemented dynamic CORS handling for rotating cluster IPs to keep the service reachable through node changes.',
    tags: ['FastAPI', 'React', 'LangChain', 'vLLM', 'Docker/Singularity', 'PyMuPDF'],
  },
  {
    slug: 'cave-explorer-game-engine',
    title: 'Cave Explorer Game Engine',
    hook: 'Custom C++ game engine built from scratch on embedded ARM hardware.',
    description:
      'Architected a custom game engine orchestrating rendering, input, and collision for real-time gameplay on ARM Mbed. Built a hash table with manual dynamic allocation for sparse map storage, reducing memory use by 40%. Engineered finite state machine logic driving 9 interactive entities, including a multi-stage boss, with no performance drops.',
    tags: ['C++', 'ARM Mbed'],
    demoUrl: 'https://youtu.be/SKXfIatZok4',
    demoLabel: 'Video',
  },
  {
    slug: 'event-ticketer',
    title: 'Event Ticketer',
    hook: 'Full-stack event marketplace with role-based access and real-time chat.',
    description:
      'Architected a secure Django marketplace with custom role-based access control spanning 3 user roles. Developed a real-time chat service using AJAX polling, cutting page reloads by 80%. Processed orders through atomic transactions to guarantee zero inventory discrepancies across a live dashboard.',
    tags: ['Python', 'Django', 'HTML/CSS', 'JavaScript', 'SQLite'],
  },
]
