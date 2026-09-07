import type { ExperienceEntry } from './types'
import flockLogo from '../assets/flock-logo.jpg'
import vipLogo from '../assets/vip-logo.png'

// The Flock Safety description is deliberately generalized — no metrics, internal
// tooling names, or method specifics — to stay clear of confidentiality concerns
// on a public site. Keep it that way when editing.
export const experience: readonly ExperienceEntry[] = [
  {
    logo: flockLogo,
    logoFill: true,
    role: 'Software Engineering Intern',
    org: 'Flock Safety',
    location: 'Atlanta, GA',
    dateRange: 'May 2026 – Present',
    description:
      'Engineered a concurrent data pipeline to synchronize internal camera imagery with geospatial panorama data at scale. Architected a model harness that cross-analyzes visual data to deduce spatial camera positioning, eliminating the need for manual calibration. Built a validation suite to flag low-confidence data, and deployed a mapping UI to visualize live camera coverage for investigators.',
    tags: ['ClickHouse', 'AWS', 'DSPy', 'React', 'Python', 'SQL', 'NumPy', 'Pandas', 'PyTorch'],
  },
  {
    // GT VIP program mark. The AI Makerspace Nexus page's own image is a busy
    // multicolor illustration that is illegible at tile size, so the parent
    // program's logo is used instead.
    logo: vipLogo,
    role: 'Undergraduate Research Engineer',
    org: 'Georgia Tech VIP: AI Makerspace Nexus',
    location: 'Atlanta, GA',
    dateRange: 'Aug 2025 – Jul 2026',
    description:
      'Collaborated with NVIDIA and Georgia Tech to expand HPC and Generative AI access for 80+ non-technical students. Managed enterprise GPU cluster infrastructure at 99.9% uptime. Led a 5-engineer Agile team, shipping one major feature per sprint and accelerating the project timeline by two weeks.',
    tags: ['HPC', 'NVIDIA H100/H200', 'GenAI', 'Agile'],
  },
]
