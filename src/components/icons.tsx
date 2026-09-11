// Your old inline SVG icons, moved into JSX. The only changes JSX needs:
//   class            -> className
//   stroke-width     -> strokeWidth   (kebab-case attributes become camelCase)
//   stroke-linecap   -> strokeLinecap
// Each icon is just a component that returns an <svg>. currentColor makes them
// inherit the surrounding text color (so they turn accent-green on hover).

export function MailIcon() {
  return (
    <svg className="h-[17px] w-[17px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  )
}

export function LinkedInIcon() {
  return (
    <svg className="h-[17px] w-[17px] shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V10.4H5.7v7.94h2.64zM7.02 9.24a1.53 1.53 0 1 0 0-3.06 1.53 1.53 0 0 0 0 3.06zm11.32 9.1v-4.35c0-2.32-.5-4.1-3.2-4.1-1.3 0-2.17.71-2.53 1.39h-.04V10.4h-2.53v7.94h2.64v-3.93c0-1.04.2-2.04 1.48-2.04 1.27 0 1.29 1.18 1.29 2.1v3.87h2.62z" />
    </svg>
  )
}

export function GitHubIcon() {
  return (
    <svg className="h-[17px] w-[17px] shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.47c.52.1.71-.23.71-.5v-1.76c-2.88.63-3.49-1.39-3.49-1.39-.47-1.2-1.15-1.52-1.15-1.52-.94-.64.07-.63.07-.63 1.04.07 1.59 1.07 1.59 1.07.93 1.59 2.44 1.13 3.03.86.09-.67.36-1.13.66-1.39-2.3-.26-4.72-1.15-4.72-5.12 0-1.13.4-2.06 1.07-2.78-.11-.26-.46-1.3.1-2.72 0 0 .87-.28 2.85 1.06a9.9 9.9 0 0 1 5.19 0c1.98-1.34 2.85-1.06 2.85-1.06.56 1.42.21 2.46.1 2.72.67.72 1.07 1.65 1.07 2.78 0 3.98-2.42 4.85-4.73 5.11.37.32.7.95.7 1.92v2.85c0 .27.19.6.72.5A10.5 10.5 0 0 0 12 1.5z" />
    </svg>
  )
}
