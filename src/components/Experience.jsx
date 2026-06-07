import './Experience.css'

const experiences = [
  {
    company: 'DragonGC',
    title: 'Software Engineering Intern',
    date: 'Jul 2024 – Aug 2024 · May 2025 – Aug 2025',
    location: 'Greenwich, CT',
    points: [
      'Engineered LLM integration to deliver comprehensive compliance insights to users across the AI platform',
      'Optimized data ingestion pipeline and executed large-scale migrations to improve scalability',
      'Built internal tools enabling non-technical users to validate search results, improving data accuracy',
    ],
    tech: ['TypeScript', 'Node.js', 'SvelteKit', 'PostgreSQL', 'Docker'],
  },
  {
    company: 'Hack4Impact BU',
    title: 'Software Engineer',
    date: 'Sep 2025 – Present',
    location: 'Boston, MA',
    points: [
      'Architected full-stack club management platform with React, TypeScript, and Strapi CMS',
      'Reduced content update time by 90% through streamlined event and project application workflows',
    ],
    tech: ['TypeScript', 'React', 'Node.js', 'Strapi'],
  },
]

function Experience() {
  return (
    <section id="experience" className="experience animate-in">
      <div className="container">
        <h2 className="section-header">§02 experience</h2>
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
