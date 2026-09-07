import type { EducationEntry } from './types'
import gtLogo from '../assets/gt-logo.svg'

export const education: EducationEntry = {
  logo: gtLogo,
  school: 'Georgia Institute of Technology',
  location: 'Atlanta, GA',
  degree: 'Bachelor of Science in Computer Science',
  concentrations: ['Artificial Intelligence', 'Systems & Architecture'],
  graduation: 'Expected May 2028',
  coursework: [
    'Data Structures & Algorithms',
    'Design & Analysis of Algorithms',
    'Intro to Artificial Intelligence',
    'Machine Learning',
    'Systems & Networks',
    'Programming for HW/SW Systems',
  ],
}
