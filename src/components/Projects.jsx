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
                <Box
                  component="img"
                  src={project.image}
                  alt={project.title}
                  sx={{
                    width: '100%',
                    height: { xs: 180, sm: 200 },
                    objectFit: 'cover',
                    mb: 3,
                    display: 'block',
                    borderRadius: '12px',
                    border: '2px solid',
                    borderColor: index % 2 === 0 ? 'primary.main' : 'secondary.main',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 24px rgba(139, 111, 71, 0.3)',
                    },
                  }}
                />
                
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
