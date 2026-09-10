export interface EducationEntry {
  date: string
  title: string
  org: string
  // Optional credential link — only the certification has these. The `?` means
  // the other two entries are allowed to omit them.
  link?: string
  linkLabel?: string
}

export const education: EducationEntry[] = [
  {
    date: '2024 — 2026',
    title: 'M.S. Computer Science',
    org: 'Texas Tech University · GPA 3.916/4.00',
  },
  {
    date: '2020 — 2024',
    title: 'B.E. Computer Science, AI Specialization',
    org: 'Jain University, Bengaluru · CGPA 9.2/10',
  },
  {
    date: 'Aug 2026',
    title: 'Microsoft Certified: SQL AI Developer Associate',
    org: 'Microsoft',
    link: 'https://learn.microsoft.com/en-us/users/munugotisairuthvik-3717/credentials/dad73348b871ee8e',
    linkLabel: 'Verify credential →',
  },
]
