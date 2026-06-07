import './Projects.css'

const projects = [
  {
    name: 'Thread-Pool',
    timeline: 'May 2026',
    points: [
      'Engineered a lightweight, high-performance C++17 thread pool featuring worker thread recycling and task-based concurrency to execute functional tasks from a shared task queue.',
      'Designed a thread-safe Queue utilizing a std::mutex to protect underlying linked-list operations from data races, and a std::condition_variable to manage thread lifecycle (wait/wake states).',
      'Implemented a deterministic shutdown sequence ensuring zero-task-loss by using a stop signal flag, draining the queue completely, and calling join() on all workers before destructing heap resources.'
    ],
    tech: ['C++', 'Multithreading', 'Lock-Free Queue', 'Mutex'],
    github: 'https://github.com/NathanStanislavsky/ThreadPool',
  },
  {
    name: 'Key-Value Storage Engine',
    timeline: 'Dec 2025 – Present',
    points: [
      'Architected a high-throughput key-value storage engine in C++ utilizing a Log-Structured Merge (LSM) Tree, achieving ~89,000 ops/sec sequential write throughput and a 14.5 µs P99 write latency.',
      'Engineered a zero-data-loss crash recovery system integrating Write-Ahead Log (WAL) rotation with atomic manifest state tracking, alongside a memory-efficient K-way streaming compaction algorithm.',
      'Implemented thread-safe operations leveraging std::shared_ptr snapshotting for lock-free reads and double-checked locking for memtable flushes, sustaining ~20,000 ops/sec under 8-thread concurrent workloads.',
      'Optimized the read path to a median latency of 79.6 µs by deploying in-memory MemTables, probabilistic Bloom filters, and sparse indexing to minimize disk seeks and bypass O(N) file scans.'
    ],
    tech: ['C++', 'CMake', 'Git'],
    github: 'https://github.com/NathanStanislavsky/KeyValueStore',
  },
  {
    name: 'Memex',
    timeline: 'Nov 2025 – Jan 2026',
    points: [
      'Architected an event-driven document search engine using RabbitMQ to decouple ingestion from Elasticsearch indexing, enabling independent scaling of each pipeline stage.',
      'Provisioned reproducible AWS EC2 environments via Terraform and established a GitHub Actions CI/CD pipeline, reducing manual deployment overhead to zero.'
    ],
    tech: ['Java', 'Spring Boot', 'Terraform', 'AWS', 'Docker', 'RabbitMQ', 'Elasticsearch', 'CI/CD'],
    github: 'https://github.com/NathanStanislavsky/Memex',
  },
  {
    name: 'PantryChef',
    timeline: 'Feb 2025 – Nov 2025',
    points: [
      'Engineered a recipe discovery and personalization platform (SvelteKit, Tailwind CSS, Node.js, PostgreSQL, MongoDB) supporting JWT-based authentication and real-time ingredients-based search.',
      'Containerized and deployed a recommendation pipeline to Google Cloud Run (Services & Jobs) utilizing Python (Pandas, NumPy, Surprise, FAISS HNSW) to deliver personalized recipe recommendations.',
      'Architected an automated SVD training pipeline triggered on MongoDB collection updates, saving user/recipe embeddings to Google Cloud Storage and indexing with FAISS HNSW for low-latency similarity search.',
      'Developed a client-side integration fetching taste-profile recommendations via POST requests to the Cloud Run Recommender API.'
    ],
    tech: ['SvelteKit', 'Tailwind CSS', 'TypeScript', 'Python', 'PostgreSQL', 'MongoDB', 'FAISS', 'Cloud Run', 'Docker'],
    github: 'https://github.com/NathanStanislavsky/RecipeSearch',
    live: 'https://recipe-search-psi.vercel.app/',
  },
]

function Projects() {
  return (
    <section id="projects" className="projects animate-in">
      <div className="container">
        <h2 className="section-header">04 projects</h2>
        <div className="projects__list">
          {projects.map((project, i) => (
            <div key={i} className="project-item">
              <div className="project-item__row">
                <div className="project-item__info">
                  <div className="project-item__title-group">
                    <h3 className="project-item__name">{project.name}</h3>
                    {project.github && (
                      <a
                        href={project.github}
                        className="project-item__link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        source ↗
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        className="project-item__link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        live ↗
                      </a>
                    )}
                  </div>
                </div>
                <span className="project-item__date">{project.timeline}</span>
              </div>
              <ul className="project-item__points">
                {project.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
              <div className="project-item__tech">
                {project.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              {i < projects.length - 1 && <hr className="project-item__divider" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
