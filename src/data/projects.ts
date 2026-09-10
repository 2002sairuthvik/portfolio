// Shape of one project. Note the two new ideas you designed:
//   tags: string[]     -> a LIST of strings (the technology pills)
//   detail?, liveUrl?, codeUrl?  -> OPTIONAL fields (the `?`), because not every
//                                   project has a long detail or a live demo.
export interface Project {
  tag: string // the small line above the title
  title: string
  description: string
  detail?: string
  tags: string[]
  liveUrl?: string
  codeUrl?: string
}

export const projects: Project[] = [
  {
    tag: 'Collaborative project with Monesh Rallapalli · Deployed on AWS',
    title: 'Multimodal Video RAG',
    description:
      'A search engine for long-form video. Ask a question, and it returns the transcript chunk or visual frame that actually supports the answer — timestamped back to the source moment. If the evidence is weak, it refuses instead of guessing.',
    detail:
      "At query time, a 9-node LangGraph pipeline classifies the question, retrieves from two Pinecone indexes, fuses the results with reciprocal rank fusion, reranks with a cross-encoder, and only answers through Bedrock's Claude Haiku once the retrieved evidence clears a confidence gate.",
    tags: ['FastAPI', 'LangGraph', 'Bedrock · Claude Haiku', 'Pinecone', 'faster-whisper', 'Next.js', 'AWS CDK'],
    liveUrl: 'https://multimodal-video-rag-web.vercel.app/',
    codeUrl: 'https://github.com/2002sairuthvik/multimodal-video-rag',
  },
  {
    tag: 'Collaborative project with Monesh Rallapalli',
    title: 'AI-Powered Video Intelligence Platform',
    description:
      'A real-time surveillance dashboard where you describe what to watch for in plain language, and it monitors every connected camera for it.',
    detail:
      'A vision agent (Claude Sonnet) reads each frame for objects and scene context; a reasoning agent (Claude Haiku) decides whether what it sees warrants an alert; a command agent (Gemini) turns a typed instruction into a live monitoring task across every camera. Past events are embedded into ChromaDB for semantic "has this happened before" search.',
    tags: ['FastAPI', 'WebSockets', 'Claude (vision + reasoning)', 'Gemini', 'ChromaDB', 'PostgreSQL', 'React'],
    codeUrl: 'https://github.com/2002sairuthvik/AI-Powered-Video-Intelligence-Platform',
  },
  {
    tag: 'Collaborative project with Monesh Rallapalli',
    title: 'Room Reservation Platform',
    description:
      "A room-booking system for university campuses — students, faculty, and staff finding and booking rooms across buildings — built to hold up under real student-body load rather than a demo's worth of traffic.",
    detail:
      'Backend in Java on Gradle, containerized with Docker and deployed to Kubernetes. Developed against a live cluster with Tilt, so changes reload without a full rebuild cycle each time.',
    tags: ['Java', 'Spring', 'Gradle', 'Docker', 'Kubernetes', 'Tilt'],
    codeUrl: 'https://github.com/2002sairuthvik/room-service',
  },
]
