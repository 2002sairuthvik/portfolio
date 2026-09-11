// The four numbered cards on the home page. `to` is an INTERNAL route path,
// so the card will use React Router's <Link> (not a plain <a>).
export interface HomeLink {
  number: string
  title: string
  description: string
  to: string
}

export const homeLinks: HomeLink[] = [
  { number: '01', title: 'Experience', description: 'Research, internships, and the path through them.', to: '/experience' },
  { number: '02', title: 'Projects', description: "Systems I've built and shipped, with the architecture behind them.", to: '/projects' },
  { number: '03', title: 'Skills & Education', description: 'What I work with, and where it was learned.', to: '/skills' },
  { number: '04', title: 'Contact', description: 'The best ways to reach me.', to: '/contact' },
]
