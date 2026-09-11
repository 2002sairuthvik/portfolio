export interface SkillGroup {
  title: string
  description: string
  tags: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Applied ML & Computer Vision',
    description:
      'Ensemble architectures and fine-tuning for medical and biological imaging — retinal scans, organoid microscopy, diagnostic classification.',
    tags: ['PyTorch', 'TensorFlow', 'EfficientNetV2'],
  },
  {
    title: 'GenAI & Agents',
    description:
      "Retrieval-augmented pipelines, multi-agent workflows, and tokenization built from scratch when the off-the-shelf version isn't quite right.",
    tags: ['RAG', 'LangGraph', 'Fine-tuning', 'BPE Tokenizers'],
  },
  {
    title: 'Data & Cloud',
    description:
      "Dashboarding and analysis before modeling — still the instinct I use to sanity-check a model's output.",
    tags: ['Tableau', 'Power BI', 'Microsoft Azure', 'AWS', 'SQL'],
  },
  {
    title: 'Foundations',
    description:
      'Statistics and probability are the part I never get tired of — coursework-level distributed systems (Hadoop) rounded out the rest.',
    tags: ['Statistics', 'Hadoop', 'Docker & Kubernetes'],
  },
]
