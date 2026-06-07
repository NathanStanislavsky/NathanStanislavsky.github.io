import './Experience.css'

const experiences = [
  {
    company: 'PayPal',
    title: 'Backend Software Engineering Intern',
    date: 'May 2026 – Present',
    location: 'Austin, TX',
    points: [
      'Developing and scaling payment infrastructure on the Venmo Wallet team within a Python/Java microservices architecture, deployed via Kubernetes and Helm on AWS (SQS, Kinesis, DynamoDB, S3).'
    ],
    tech: ['Python', 'Java', 'Kubernetes', 'Helm', 'AWS', 'SQS', 'Kinesis', 'DynamoDB', 'S3'],
  },
  {
    company: 'Hack4Impact BU',
    title: 'Software Engineer',
    date: 'Sept 2025 – May 2026',
    location: 'Boston, MA',
    points: [
      'Engineered a full-stack phonics learning platform (Next.js, TypeScript, Supabase/PostgreSQL) serving elementary school teachers and students, supporting real-time drag-and-drop lesson interactions and per-student progress tracking.',
      'Designed a RESTful lesson delivery system with 6-digit code-based student access, roster management, and file storage for teacher-recorded audio and image hints via Supabase Storage.'
    ],
    tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'RESTful API'],
  },
  {
    company: 'DragonGC',
    title: 'Software Engineering Intern (Backend)',
    date: 'May 2025 – Aug 2025',
    location: 'Greenwich, CT',
    points: [
      'Engineered a scalable corporate governance platform using Node.js and TypeScript, collaborating with senior engineers to implement LLM-based parsing features that process high-volume SEC filings.',
      'Cut query latency by 35% and reduced index size by migrating 500,000+ records to normalized integer references, optimizing high-volume join performance.',
      'Slashed API latency by 95% (20s to 1s) by architecting a TypeScript sanitization layer for verbose LLM outputs, optimizing identifier mapping against PostgreSQL, and ensuring system reliability through code reviews.'
    ],
    tech: ['Node.js', 'TypeScript', 'PostgreSQL', 'LLM', 'API Optimization'],
  },
  {
    company: 'DragonGC',
    title: 'Software Engineering Intern (Fullstack)',
    date: 'July 2024 – Aug 2024',
    location: 'Greenwich, CT',
    points: [
      'Accelerated feature delivery by collaborating with cross-functional teams to translate Figma designs into production-ready SvelteKit components, minimizing technical debt via TDD and expanded testing coverage.'
    ],
    tech: ['SvelteKit', 'TypeScript', 'Figma', 'TDD', 'Testing'],
  },
]

function Experience() {
  return (
    <section id="experience" className="experience animate-in">
      <div className="container">
        <h2 className="section-header">03 experience</h2>
        <div className="experience__list">
          {experiences.map((exp, i) => (
            <div key={i} className="experience__item">
              <div className="experience__row">
                <div className="experience__info">
                  <h3 className="experience__company">{exp.company}</h3>
                  <p className="experience__title">{exp.title}</p>
                </div>
                <span className="experience__date">{exp.date}</span>
              </div>
              <ul className="experience__points">
                {exp.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
              <div className="experience__tech">
                {exp.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              {i < experiences.length - 1 && <hr className="experience__divider" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
