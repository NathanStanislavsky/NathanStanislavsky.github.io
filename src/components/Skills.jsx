import './Skills.css'

const skillGroups = [
  {
    category: 'Languages',
    items: ['Java', 'Python', 'C/C++', 'TypeScript', 'SQL', 'JavaScript', 'Go', 'OCaml', 'x86', 'HTML', 'CSS'],
  },
  {
    category: 'Libraries & Frameworks',
    items: ['Spring Boot', 'FastAPI', 'Node.js', 'Pandas', 'NumPy', 'React', 'SvelteKit'],
  },
  {
    category: 'Infrastructure & Databases',
    items: [
      'Terraform', 'RabbitMQ', 'Docker', 'Elasticsearch', 'PostgreSQL', 'MongoDB',
      'GCP', 'Git', 'MySQL', 'Prometheus', 'Grafana', 'AWS (DynamoDB, SQS, Kinesis, S3, Lambda)',
      'Kubernetes', 'Helm', 'DataDog Observability'
    ],
  },
]

function Skills() {
  return (
    <section id="skills" className="skills animate-in">
      <div className="container">
        <h2 className="section-header">05 skills</h2>
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
