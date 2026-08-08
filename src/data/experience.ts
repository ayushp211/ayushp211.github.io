import type { ExperienceEntry } from './types'

// TODO: descriptions are placeholders pending review — see plan.md Phase 0.
// Flock Safety entry specifically needs a confidentiality check against the
// internship agreement before any real detail goes here.
export const experience: readonly ExperienceEntry[] = [
  {
    role: 'Software Engineering Intern',
    org: 'Flock Safety',
    location: 'Atlanta, GA',
    dateRange: 'May 2026 – Present',
    description: 'TODO: description',
    tags: ['ClickHouse', 'AWS S3', 'DSPy', 'React'],
  },
  {
    role: 'Undergraduate Research Engineer',
    org: 'Georgia Tech VIP: AI Makerspace Nexus',
    location: 'Atlanta, GA',
    dateRange: 'Aug 2025 – Present',
    description: 'TODO: description',
    tags: ['HPC', 'NVIDIA H100/H200', 'GenAI', 'Agile'],
  },
]
