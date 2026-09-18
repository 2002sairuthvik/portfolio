'use client'

// Client Component because it uses an onError event handler (event handlers
// aren't allowed in Server Components). Renders the right diagram per `kind`.
export default function ProjectDiagram({ kind }: { kind: 'video-rag' | 'video-intel' }) {
  if (kind === 'video-rag') {
    return (
      <div className="mt-[22px]">
        <img
          src="https://raw.githubusercontent.com/2002sairuthvik/multimodal-video-rag/main/docs/assets/video-rag-architecture.png"
          alt="Video RAG architecture diagram"
          loading="lazy"
          className="block h-auto w-full"
          onError={(e) => {
            const parent = e.currentTarget.parentElement
            if (parent) parent.style.display = 'none'
          }}
        />
      </div>
    )
  }

  return (
    <div className="mt-[22px]">
      <svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full" style={{ fontFamily: "'Instrument Sans', sans-serif" }}>
        <rect x="230" y="10" width="180" height="34" rx="6" fill="#FAF8F3" stroke="#1B1A17" strokeWidth="1" />
        <text x="320" y="31" textAnchor="middle" fill="#1B1A17" fontSize="11" fontWeight="600">React Dashboard</text>
        <line x1="320" y1="44" x2="320" y2="66" stroke="#A7A296" strokeWidth="1" />
        <rect x="200" y="66" width="240" height="34" rx="6" fill="#FAF8F3" stroke="#1B1A17" strokeWidth="1" />
        <text x="320" y="87" textAnchor="middle" fill="#1B1A17" fontSize="11" fontWeight="600">FastAPI · Auth + WebSocket</text>
        <line x1="320" y1="100" x2="320" y2="118" stroke="#A7A296" strokeWidth="1" />
        <line x1="320" y1="118" x2="90" y2="118" stroke="#A7A296" strokeWidth="1" />
        <line x1="320" y1="118" x2="550" y2="118" stroke="#A7A296" strokeWidth="1" />
        <line x1="90" y1="118" x2="90" y2="136" stroke="#A7A296" strokeWidth="1" />
        <line x1="320" y1="118" x2="320" y2="136" stroke="#A7A296" strokeWidth="1" />
        <line x1="550" y1="118" x2="550" y2="136" stroke="#A7A296" strokeWidth="1" />
        <rect x="10" y="136" width="160" height="40" rx="6" fill="#FAF8F3" stroke="#1B1A17" strokeWidth="1" />
        <text x="90" y="157" textAnchor="middle" fill="#1B1A17" fontSize="11" fontWeight="600">Vision Agent</text>
        <text x="90" y="170" textAnchor="middle" fill="#726E64" fontSize="9.5">Claude Sonnet</text>
        <rect x="240" y="136" width="160" height="40" rx="6" fill="#FAF8F3" stroke="#1B1A17" strokeWidth="1" />
        <text x="320" y="157" textAnchor="middle" fill="#1B1A17" fontSize="11" fontWeight="600">Reasoning Agent</text>
        <text x="320" y="170" textAnchor="middle" fill="#726E64" fontSize="9.5">Claude Haiku</text>
        <rect x="470" y="136" width="160" height="40" rx="6" fill="#FAF8F3" stroke="#1B1A17" strokeWidth="1" />
        <text x="550" y="157" textAnchor="middle" fill="#1B1A17" fontSize="11" fontWeight="600">Command Agent</text>
        <text x="550" y="170" textAnchor="middle" fill="#726E64" fontSize="9.5">Gemini</text>
        <line x1="90" y1="176" x2="90" y2="200" stroke="#A7A296" strokeWidth="1" />
        <line x1="320" y1="176" x2="320" y2="200" stroke="#A7A296" strokeWidth="1" />
        <line x1="550" y1="176" x2="550" y2="200" stroke="#A7A296" strokeWidth="1" />
        <rect x="10" y="200" width="160" height="36" rx="6" fill="#FAF8F3" stroke="#1B1A17" strokeWidth="1" />
        <text x="90" y="222" textAnchor="middle" fill="#1B1A17" fontSize="11" fontWeight="600">Camera Service</text>
        <rect x="240" y="200" width="160" height="36" rx="6" fill="#FAF8F3" stroke="#1B1A17" strokeWidth="1" />
        <text x="320" y="222" textAnchor="middle" fill="#1B1A17" fontSize="11" fontWeight="600">PostgreSQL</text>
        <rect x="470" y="200" width="160" height="36" rx="6" fill="#FAF8F3" stroke="#1B1A17" strokeWidth="1" />
        <text x="550" y="222" textAnchor="middle" fill="#1B1A17" fontSize="11" fontWeight="600">ChromaDB</text>
      </svg>
    </div>
  )
}
