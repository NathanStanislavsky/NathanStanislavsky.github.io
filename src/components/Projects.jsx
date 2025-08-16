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
  useTheme,
} from '@mui/material';
import { GitHub, Launch, Code } from '@mui/icons-material';

const Projects = () => {
  const theme = useTheme();

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
      image: 'https://via.placeholder.com/400x250/1976d2/ffffff?text=E-Commerce',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      github: 'https://github.com/NathanStanislavsky/ecommerce-platform',
      live: 'https://ecommerce-demo.com',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://via.placeholder.com/400x250/388e3c/ffffff?text=Task+App',
      technologies: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL', 'Material-UI'],
      github: 'https://github.com/NathanStanislavsky/task-manager',
      live: 'https://task-manager-demo.com',
      featured: true
    },
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
        
        <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}>
          Here are some of the projects I've worked on. Each project represents different skills and technologies 
          I've used to solve real-world problems and create valuable applications.
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card 
                elevation={3} 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[8]
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  sx={{ objectFit: 'cover' }}
                />
                
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
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
                  
                  <Typography variant="body2" color="text.secondary" paragraph sx={{ flexGrow: 1 }}>
                    {project.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {project.technologies.map((tech) => (
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
                
                <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                  <Button
                    size="small"
                    startIcon={<GitHub />}
                    onClick={() => handleProjectClick(project.github)}
                    disabled={!project.github}
                  >
                    Code
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

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="h6" gutterBottom>
            Want to see more?
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Check out my GitHub profile for additional projects and contributions.
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<GitHub />}
            onClick={() => window.open('https://github.com/NathanStanislavsky', '_blank')}
          >
            View All Projects
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
