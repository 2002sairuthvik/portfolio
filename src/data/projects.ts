// One row of the evaluation table.
export interface EvalRow {
  cells: string[]
  best?: boolean // highlight the production/best configuration
}

export interface Project {
  tag: string
  title: string
  description: string
  detail?: string[] // one or more paragraphs
  evalTable?: { headers: string[]; rows: EvalRow[] }
  researchNote?: string
  // A key that tells ProjectCard which diagram (if any) to render. Using a
  // string union keeps the DATA plain while the actual SVG/img lives in a
  // component — TypeScript ensures we only ever use these two values.
  diagram?: 'video-rag' | 'video-intel'
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
    detail: [
      'Ingestion runs on AWS: a Fargate worker pulls the video, samples keyframes on a 10-second interval plus scene-cut detection, transcribes audio in 15-second chunks with faster-whisper, and embeds transcript and frames into two separate Pinecone indexes — kept apart because each modality needs a different similarity metric.',
      "At query time, a 9-node LangGraph pipeline classifies the question, retrieves from both indexes, fuses the results with reciprocal rank fusion, reranks with a cross-encoder, and only generates an answer through Bedrock's Claude Haiku once the retrieved evidence clears a confidence gate.",
    ],
    evalTable: {
      headers: ['Configuration', 'MRR', 'Timestamp@5s', 'No-answer F1'],
      rows: [
        { cells: ['Dense retrieval only', '0.827', '0.766', '0.714'] },
        { cells: ['Hybrid + rerank', '0.742', '0.637', '0.000'] },
        { cells: ['Production (hybrid + rerank + rewrite + gen)', '0.795', '0.734', '0.714'], best: true },
      ],
    },
    researchNote: 'Evaluated on 135 hand-labeled queries across 13 indexed videos.',
    diagram: 'video-rag',
    tags: ['FastAPI', 'LangGraph', 'Bedrock · Claude Haiku', 'Pinecone', 'faster-whisper', 'Next.js', 'AWS CDK'],
    liveUrl: 'https://multimodal-video-rag-web.vercel.app/',
    codeUrl: 'https://github.com/2002sairuthvik/multimodal-video-rag',
  },
  {
    tag: 'Collaborative project with Monesh Rallapalli',
    title: 'AI-Powered Video Intelligence Platform',
    description:
      'A real-time surveillance dashboard where you describe what to watch for in plain language, and it monitors every connected camera for it.',
    detail: [
      'Camera feeds are sampled roughly once a second. A vision agent (Claude Sonnet) reads each frame for objects and scene context; a reasoning agent (Claude Haiku) decides whether what it’s seeing actually warrants an alert, and explains why. A separate command agent (Gemini) turns a typed instruction like “alert me if you see any vehicles” into a live monitoring task pushed across every camera. Past events are embedded into ChromaDB, so the system can answer “has this happened before” with semantic search instead of a keyword match.',
    ],
    diagram: 'video-intel',
    tags: ['FastAPI', 'WebSockets', 'Claude (vision + reasoning)', 'Gemini', 'ChromaDB', 'PostgreSQL', 'React'],
    codeUrl: 'https://github.com/2002sairuthvik/AI-Powered-Video-Intelligence-Platform',
  },
  {
    tag: 'Collaborative project with Monesh Rallapalli',
    title: 'Room Reservation Platform',
    description:
      "A room-booking system for university campuses — students, faculty, and staff finding and booking rooms across buildings — built to hold up under real student-body load rather than a demo's worth of traffic.",
    detail: [
      'Backend in Java on Gradle, containerized with Docker and deployed to Kubernetes. Developed against a live cluster with Tilt, so changes reload without a full rebuild cycle each time.',
    ],
    tags: ['Java', 'Spring', 'Gradle', 'Docker', 'Kubernetes', 'Tilt'],
    codeUrl: 'https://github.com/2002sairuthvik/room-service',
  },
]

// The Research subsection below the main projects.
export interface ResearchItem {
  tag: string
  title: string
  description: string
}

export const research: ResearchItem[] = [
  {
    tag: 'Graduate research · TTU',
    title: 'AI-READI: Diabetes Detection',
    description:
      'Multimodal retinal imaging classification, advised by Prof. Victor Sheng — combining imaging modalities the way a clinician would read them together.',
  },
  {
    tag: 'Research assistant · TTU Health Sciences Center',
    title: 'Organoid Image Analysis & Quantification',
    description:
      'A quantification pipeline for organoid microscopy — turning raw images into measurements a biologist could use directly.',
  },
  {
    tag: 'Team project · Jain University',
    title: 'Diabetic Retinopathy Detection',
    description:
      'An EfficientNetV2 ensemble trained to classify diabetic retinopathy severity from retinal images — the project that first pulled me from dashboards into deep learning.',
  },
]
