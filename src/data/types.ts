export interface Profile {
  name: string
  tagline: string
  about: string
  email: string
  github: string
  linkedin: string
  resumeUrl: string
}

export interface EducationEntry {
  school: string
  location: string
  degree: string
  concentrations?: string[]
  graduation: string
  gpa?: string
  coursework?: string[]
}

export interface ExperienceEntry {
  role: string
  org: string
  location: string
  dateRange: string
  description: string
  tags: string[]
}

export interface Project {
  slug: string
  title: string
  hook: string
  description: string
  tags: string[]
  repoUrl?: string
  demoUrl?: string
  imageUrl?: string
}
