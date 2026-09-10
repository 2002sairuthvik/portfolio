// A TypeScript "interface" describes the SHAPE of one experience entry.
// If we later misspell a field or forget one, TypeScript flags it before the
// app ever runs — that's the safety TS adds on top of plain JavaScript.
export interface ExperienceEntry {
  date: string
  title: string
  org: string
  description: string
}

// The data itself: a plain array of objects, kept SEPARATE from the markup.
// `ExperienceEntry[]` means "an array of ExperienceEntry objects" — so every
// item here is checked to have exactly those four string fields.
export const experience: ExperienceEntry[] = [
  {
    date: 'Jul – Sep 2025',
    title: 'AI Research Assistant',
    org: 'Biology Lab, TTU Health Sciences Center',
    description: 'Organoid image analysis and quantification for microscopy data.',
  },
  {
    date: 'Jun – Aug 2025',
    title: 'Graduate Researcher',
    org: 'Advised by Prof. Victor Sheng, Texas Tech University',
    description: 'AI-READI Diabetes Detection — multimodal retinal imaging classification.',
  },
  {
    date: 'Apr – May 2023',
    title: 'Machine Learning Intern',
    org: 'Popular PG (StartupKT Business Solutions) · Remote',
    description: 'NLP-driven chatbot systems for the company website.',
  },
]
