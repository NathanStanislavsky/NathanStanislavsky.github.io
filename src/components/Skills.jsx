import './Skills.css'

const skillGroups = [
  {
    category: 'Languages',
    items: ['Java', 'Python', 'C/C++', 'TypeScript', 'SQL', 'JavaScript'],
  },
  {
    category: 'Frameworks',
    items: ['Spring Boot', 'FastAPI', 'Node.js', 'React', 'SvelteKit'],
  },
  {
    category: 'Infrastructure',
    items: ['Docker', 'Terraform', 'AWS', 'GCP', 'RabbitMQ', 'Elasticsearch', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'Concepts',
    items: ['Distributed Systems', 'System Design', 'Test-Driven Development', 'Microservices', 'CI/CD'],
  },
]

function Skills() {
  return (
    <section id="skills" className="skills animate-in">
      <div className="container">
        <h2 className="section-header">§05 skills</h2>
        <div className="skills__groups">
          {skillGroups.map((group) => (
            <div key={group.category} className="skills__group">
              <h3 className="skills__category">{group.category}</h3>
              <div className="skills__tags">
                {group.items.map((skill) => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
