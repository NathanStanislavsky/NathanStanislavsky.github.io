import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Chip
} from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';
import PantryChefImage from '../../public/PantryChefImage.png';
import ChessImage from '../../public/ChessImage.png';

const Projects = () => {

  const projects = [
    {
      title: 'PantryChef',
      description: 'A user-authenticated web application with semantic, ingredient-based search of over 200,000+ recipes using MongoDB Atlas Search. Built a collaborative filtering recommender using SVD and an HNSW index to serve personalized results in under 100ms. Developed a resilient, multi-service backend by deploying the recommendation model as a distinct Python FastAPI microservice on Google Cloud Run.',
      image: PantryChefImage,
      technologies: ['SvelteKit', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'Docker', 'Google Cloud', 'MongoDB Atlas Search', 'FastAPI', 'MLOps'],
      github: 'https://github.com/NathanStanislavsky/RecipeSearch',
      live: 'https://recipe-search-psi.vercel.app/',
      featured: true,
    },
    {
      title: 'Chess Engine',
      description: 'Designed and developed a high-performance chess engine using bitboards capable of calculating 8,000,000 positions/s. Implemented Minimax and Alpha-Beta Pruning algorithms to optimize best move search. Developed advanced features including Transposition hash table, move-ordering, and Quiescence search to improve best move search accuracy.',
      image: ChessImage,
      technologies: ['C', 'C++', 'Git', 'Bitboards', 'Minimax Algorithm', 'Alpha-Beta Pruning', 'Transposition Tables'],
      github: 'https://github.com/NathanStanislavsky/bitboard',
      live: null,
      featured: true,
    }
  ];

  const handleProjectClick = (url) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <Box sx={{ py: { xs: 6, md: 12 } }}>
      <Container maxWidth="md">
        <Typography 
          variant="h3" 
          component="h2" 
          gutterBottom
          sx={{ 
            mb: { xs: 6, md: 8 },
            fontSize: { xs: '1.75rem', sm: '2rem' }
          }}
        >
          Projects
        </Typography>

        <Box>
          {projects.map((project, index) => (
            <Box 
              key={index}
              sx={{ 
                mb: { xs: 8, md: 12 },
                pb: { xs: 8, md: 12 },
                borderBottom: index < projects.length - 1 ? '1px solid #E5E5E5' : 'none'
              }}
            >
              <Box
                component="img"
                src={project.image}
                alt={project.title}
                sx={{
                  width: '100%',
                  height: { xs: 200, sm: 300 },
                  objectFit: 'cover',
                  mb: 4,
                  display: 'block',
                  filter: 'grayscale(100%)',
                  transition: 'filter 0.3s ease-in-out',
                  '&:hover': {
                    filter: 'grayscale(0%)',
                  },
                }}
              />
              
              <Box sx={{ mb: 3 }}>
                <Typography 
                  variant="h4" 
                  component="h3" 
                  gutterBottom
                  sx={{ 
                    mb: 2,
                    fontSize: { xs: '1.5rem', sm: '1.75rem' },
                    fontWeight: 600
                  }}
                >
                  {project.title}
                </Typography>
                
                <Typography 
                  variant="body1" 
                  color="text.primary" 
                  paragraph
                  sx={{ 
                    mb: 4,
                    fontSize: '1.0625rem',
                    lineHeight: 1.8
                  }}
                >
                  {project.description}
                </Typography>
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                  {project.technologies.slice(0, 8).map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      variant="outlined"
                      sx={{
                        fontSize: '0.8125rem',
                        height: '28px',
                        '&:hover': {
                          borderColor: 'text.primary',
                          color: 'text.primary',
                          backgroundColor: 'transparent',
                        },
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
                      fontSize: '0.9375rem',
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
                      fontSize: '0.9375rem',
                      textTransform: 'none',
                    }}
                  >
                    Live Demo
                  </Button>
                )}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Skills Section */}
        <Box sx={{ mt: { xs: 8, md: 12 }, pt: { xs: 8, md: 12 }, borderTop: '1px solid #E5E5E5' }}>
          <Typography 
            variant="h3" 
            gutterBottom
            sx={{ 
              mb: 4,
              fontSize: { xs: '1.75rem', sm: '2rem' }
            }}
          >
            Technical Skills
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {[
              'Java', 'Python', 'C/C++', 'JavaScript', 'TypeScript', 'HTML/CSS', 'x86 Assembly',
              'SvelteKit', 'React', 'Node.js', 'Tailwind', 'Pandas', 'NumPy', 'scikit-surprise',
              'FastAPI', 'FAISS', 'PyMongo', 'Google Cloud SDK', 'MongoDB', 'PostgreSQL',
              'Prisma ORM', 'Drizzle ORM', 'Git', 'Docker', 'Vercel', 'Sanity CMS'
            ].map((skill) => (
              <Chip
                key={skill}
                label={skill}
                variant="outlined"
                size="small"
                sx={{
                  fontSize: '0.8125rem',
                  height: '28px',
                  '&:hover': {
                    borderColor: 'text.primary',
                    color: 'text.primary',
                    backgroundColor: 'transparent',
                  },
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
