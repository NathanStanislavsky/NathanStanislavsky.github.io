import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Grid
} from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';

const Projects = () => {

  const projects = [
    {
      title: 'Key-Value Storage Engine',
      description: 'Engineered a high-throughput LSM-tree database engine capable of sustaining 11,000+ writes/second by utilizing sequential disk I/O and a custom Write-Ahead Log (WAL). Implemented a thread-safe MemTable to handle concurrent operations, ensuring data integrity under high-load benchmarks. Designed an automated flushing mechanism that serializes in-memory data to immutable SSTables on disk when capacity thresholds are met, ensuring data persistence.',
      technologies: ['C++', 'Git'],
      github: 'https://github.com/NathanStanislavsky/KeyValueStore',
      live: null,
      featured: true,
    },
    {
      title: 'Memex',
      description: 'Architected an event-driven document search engine, utilizing RabbitMQ to decouple ingestion from Elasticsearch indexing and ensuring statelessness via S3/MinIO object storage. Provisioned AWS EC2 environments via Terraform and established a GitHub Actions CI/CD pipeline to enable zero-touch, containerized deployments. Orchestrated a microservices fleet via Docker, integrating Prometheus and Grafana to visualize request latency and RabbitMQ message throughput, enabling real-time bottleneck detection.',
      technologies: ['Java', 'Spring Boot', 'Terraform', 'AWS', 'Docker', 'RabbitMQ', 'ElasticSearch'],
      github: 'https://github.com/NathanStanislavsky/Memex',
      live: null,
      featured: true,
    },
    {
      title: 'PantryChef',
      description: 'Built an event-driven backend for a recipe personalization engine, utilizing Google Pub/Sub and Cloud Run to ingest and process user interaction streams with sub-100ms latency. Optimized cosine similarity search across 200,000+ embeddings leveraging PostgreSQL HNSW indices, achieving sub-second latency for culinary recommendations fetching. Implemented stateless authentication using JWTs (JSON Web Tokens) to secure API endpoints, ensuring scalable session management across the event-driven architecture.',
      technologies: ['SvelteKit', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'Docker', 'Google Cloud', 'MongoDB Atlas Search', 'FastAPI', 'MLOps'],
      github: 'https://github.com/NathanStanislavsky/RecipeSearch',
      live: 'https://recipe-search-psi.vercel.app/',
      featured: true,
    },
    {
      title: 'Chess Engine',
      description: 'A high-performance C++ chess engine based on bitboard data structures, capable of calculating 8,000,000 positions per second. It implements Minimax and Alpha-Beta Pruning algorithms to cut search time by 75% , utilizing Transposition tables and Quiescence search to identify optimal moves efficiently.',
      technologies: ['C', 'C++', 'Git', 'Bitboards', 'Minimax Algorithm', 'Alpha-Beta Pruning', 'Transposition Tables'],
      github: 'https://github.com/NathanStanislavsky/bitboard',
      live: null,
      featured: true,
    },
    {
      title: 'PlanEdu',
      description: 'I worked on a team of four to build an AI-powered course-planning platform featuring a swiping-style discovery UI and automated transcript parsing which won 3rd place at the BU DS+X hackathon. We engineered a recommendation engine using OpenAI embeddings and a schedule optimizer with Google OR-Tools to handle prerequisites and time conflicts.',
      technologies: ['React', 'Node.js', 'Express', 'Python', 'PostgreSQL'],
      github: 'https://github.com/NathanStanislavsky/DSXBU',
      live: null,
      featured: true,
    },
  ];

  const handleProjectClick = (url) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      <Container maxWidth="md">
        <Typography 
          variant="h3" 
          component="h2" 
          gutterBottom
          sx={{ 
            mb: { xs: 3, md: 4 },
            fontSize: { xs: '1.5rem', sm: '1.75rem' },
            color: 'success.main'
          }}
        >
          Projects
        </Typography>

        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Box>
                <Box sx={{ mb: 2 }}>
                  <Typography 
                    variant="h4" 
                    component="h3" 
                    gutterBottom
                    sx={{ 
                      mb: 1.5,
                      fontSize: { xs: '1.25rem', sm: '1.5rem' },
                      fontWeight: 600,
                      color: index % 2 === 0 ? 'primary.main' : 'success.main'
                    }}
                  >
                    {project.title}
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    color="text.primary" 
                    paragraph
                    sx={{ 
                      mb: 2,
                      fontSize: '1rem',
                      lineHeight: 1.6
                    }}
                  >
                    {project.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {project.technologies.slice(0, 8).map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        variant="outlined"
                        sx={{
                          fontSize: '0.75rem',
                          height: '26px',
                        }}
                      />
                    ))}
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  {project.github && (
                    <Button
                      variant="outlined"
                      startIcon={<GitHub />}
                      onClick={() => handleProjectClick(project.github)}
                      sx={{
                        fontSize: '0.875rem',
                        textTransform: 'none',
                      }}
                    >
                      View Code
                    </Button>
                  )}
                  
                  {project.live && (
                    <Button
                      variant="contained"
                      startIcon={<Launch />}
                      onClick={() => handleProjectClick(project.live)}
                      sx={{
                        fontSize: '0.875rem',
                        textTransform: 'none',
                      }}
                    >
                      Live Demo
                    </Button>
                  )}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Skills Section */}
        <Box sx={{ mt: { xs: 4, md: 5 }, pt: { xs: 4, md: 5 }, borderTop: '2px solid', borderColor: 'warning.main' }}>
          <Typography 
            variant="h3" 
            gutterBottom
            sx={{ 
              mb: 3,
              fontSize: { xs: '1.5rem', sm: '1.75rem' },
              color: 'warning.main'
            }}
          >
            Technical Skills
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {[
              // Backend Languages
              'Java', 'Python', 'C/C++', 'TypeScript', 'SQL', 'JavaScript',
              // Backend Frameworks
              'Spring Boot', 'FastAPI', 'Node.js', 'Pandas', 'NumPy',
              // Infrastructure & Databases
              'Terraform', 'RabbitMQ', 'Docker', 'Elasticsearch', 'PostgreSQL', 'MongoDB', 'GCP', 'Git', 'AWS',
              // Frontend Languages
              'HTML', 'CSS',
              // Frontend Frameworks
              'React', 'SvelteKit',
            ].map((skill) => (
              <Chip
                key={skill}
                label={skill}
                variant="outlined"
                size="small"
                sx={{
                  fontSize: '0.75rem',
                  height: '26px',
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
