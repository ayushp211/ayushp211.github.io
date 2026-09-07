export interface Profile {
  name: string
  tagline: string
  about: string[]
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
  /** Imported logo asset URL, rendered in a uniform LogoTile. */
  logo?: string
}

export interface ExperienceEntry {
  role: string
  org: string
  location: string
  dateRange: string
  description: string
  tags: string[]
  /** Imported logo asset URL, rendered in a uniform LogoTile. */
  logo?: string
  /** Set when the logo image has its own background baked in (fills the tile edge-to-edge). */
  logoFill?: boolean
  /** Fallback text mark used when no usable logo image exists. */
  monogram?: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface Project {
  slug: string
  title: string
  hook: string
  description: string
  tags: string[]
  repoUrl?: string
  demoUrl?: string
  /** Link text for demoUrl. Defaults to "Demo" — override for e.g. a video walkthrough. */
  demoLabel?: string
  /** Slide deck link. Use a Google Slides /preview URL so embedded video stays playable. */
  slidesUrl?: string
  imageUrl?: string
}
