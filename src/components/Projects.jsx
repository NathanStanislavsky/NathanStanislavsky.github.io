import './Projects.css'

const projects = [
  {
    name: 'Key-Value Storage Engine',
    description: 'LSM-tree database engine sustaining 11,000+ writes/sec with WAL and automated SSTable flushing.',
    tech: ['C++', 'Git'],
    github: 'https://github.com/NathanStanislavsky/KeyValueStore',
    live: null,
  },
  {
    name: 'Memex',
    description: 'Event-driven document search engine with RabbitMQ, Elasticsearch, and Terraform-provisioned AWS infrastructure.',
    tech: ['Java', 'Spring Boot', 'AWS', 'Docker', 'Terraform'],
    github: 'https://github.com/NathanStanislavsky/Memex',
    live: null,
  },
  {
    name: 'PantryChef',
    description: 'Recipe personalization engine with Google Pub/Sub, PostgreSQL HNSW vector search, and JWT auth.',
    tech: ['SvelteKit', 'TypeScript', 'Python', 'PostgreSQL', 'GCP'],
    github: 'https://github.com/NathanStanislavsky/RecipeSearch',
    live: 'https://recipe-search-psi.vercel.app/',
  },
  {
    name: 'Chess Engine',
    description: 'Bitboard chess engine calculating 8M positions/sec using Minimax with Alpha-Beta Pruning.',
    tech: ['C++', 'Bitboards'],
    github: 'https://github.com/NathanStanislavsky/bitboard',
    live: null,
  },
  {
    name: 'PlanEdu',
    description: 'AI course-planning platform with swiping UI and schedule optimization — 3rd at BU DS+X hackathon.',
    tech: ['React', 'Node.js', 'Python', 'PostgreSQL'],
    github: 'https://github.com/NathanStanislavsky/DSXBU',
    live: null,
  },
]

function Projects() {
  return (
    <section id="projects" className="projects animate-in">
      <div className="container">
        <h2 className="section-header">§04 projects</h2>
        <div className="projects__grid">
          {projects.map((project, i) => (
            <a
              key={i}
              className="project-card"
              href={project.live || project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="project-card__index">proj[{i}]</span>
              <h3 className="project-card__name">{project.name}</h3>
              <p className="project-card__desc">{project.description}</p>
              <div className="project-card__tags">
                {project.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              {project.github && (
                <span className="project-card__link">
                  {project.live ? 'live ↗' : 'source ↗'}
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
