import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Chip,
  Paper,
  useTheme
} from '@mui/material';
import { GitHub, Launch, Code } from '@mui/icons-material';

const Projects = () => {
  const theme = useTheme();

  const projects = [
    {
      title: 'PantryChef',
      description: 'A user-authenticated web application with semantic, ingredient-based search of over 200,000+ recipes using MongoDB Atlas Search. Built a collaborative filtering recommender using SVD and an HNSW index to serve personalized results in under 100ms. Developed a resilient, multi-service backend by deploying the recommendation model as a distinct Python FastAPI microservice on Google Cloud Run.',
      image: '../../public/PantryChefImage.png',
      technologies: ['SvelteKit', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'Docker', 'Google Cloud', 'MongoDB Atlas Search', 'FastAPI', 'MLOps'],
      github: 'https://github.com/NathanStanislavsky/RecipeSearch',
      live: 'https://recipe-search-psi.vercel.app/',
      featured: true,
    },
    {
      title: 'Chess Engine',
      description: 'Designed and developed a high-performance chess engine using bitboards capable of calculating 8,000,000 positions/s. Implemented Minimax and Alpha-Beta Pruning algorithms to optimize best move search. Developed advanced features including Transposition hash table, move-ordering, and Quiescence search to improve best move search accuracy.',
      image: '../../public/ChessImage.png',
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
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 6 }}>
          Featured Projects
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card 
                elevation={3} 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  maxWidth: '550px',
                  mx: 'auto',
                  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[8]
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={project.image}
                  alt={project.title}
                  sx={{ objectFit: 'cover' }}
                />
                
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Typography variant="h6" component="h3" gutterBottom sx={{ flexGrow: 1 }}>
                      {project.title}
                    </Typography>
                    {project.featured && (
                      <Chip 
                        label="Featured" 
                        size="small" 
                        color="primary" 
                        variant="filled"
                        icon={<Code />}
                      />
                    )}
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary" paragraph sx={{ flexGrow: 1, mb: 2 }}>
                    {project.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {project.technologies.slice(0, 6).map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        variant="outlined"
                        color="secondary"
                      />
                    ))}
                  </Box>
                </CardContent>
                
                <CardActions sx={{ justifyContent: 'space-between', px: 3, pb: 3 }}>
                  <Button
                    size="small"
                    startIcon={<GitHub />}
                    onClick={() => handleProjectClick(project.github)}
                    disabled={!project.github}
                  >
                    View Code
                  </Button>
                  
                  {project.live && (
                    <Button
                      size="small"
                      startIcon={<Launch />}
                      onClick={() => handleProjectClick(project.live)}
                      color="primary"
                    >
                      Live Demo
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Skills Section */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ mb: 3 }}>
            Technical Skills
          </Typography>
          <Paper elevation={2} sx={{ p: 4, position: 'relative', overflow: 'hidden' }}>
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #384166, #0B735F, #639D75)',
              }}
            />
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
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
                  color="primary"
                  size="small"
                  sx={{
                    '&:hover': {
                      backgroundColor: 'primary.main',
                      color: 'white',
                      transform: 'translateY(-2px)',
                    },
                  }}
                />
              ))}
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
