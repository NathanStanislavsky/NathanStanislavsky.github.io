import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
  Grid
} from '@mui/material';
import { Work } from '@mui/icons-material';

const Experience = () => {
  const workExperience = [
    {
      title: 'Software Engineering Intern',
      company: 'DragonGC',
      period: 'July 2024 – Aug 2024; May 2025 – Aug 2025',
      location: 'Greenwich, CT',
      description: "At DragonGC, I enhanced the performance and reliability of the company's core AI platform. My contributions included engineering the integration of Large Language Models (LLMs) to deliver comprehensive compliance insights to users, optimizing the data ingestion pipeline, and executing large-scale data migrations to improve scalability. I also developed a suite of internal tools that empowered non-technical users to validate search results, significantly streamlining their workflow and improving data accuracy.",
      technologies: ['TypeScript', 'Node.js', 'SvelteKit', 'PostgreSQL', 'Docker', 'DigitalOcean S3', 'Test Driven Development', 'UI/UX']
    }
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 6 }}>
          Experience
        </Typography>

        <Box sx={{ mb: 6 }}>
          <Grid container spacing={3}>
            {workExperience.map((job, index) => (
              <Grid item xs={12} key={index}>
                <Paper elevation={2} sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                    <Box
                      sx={{
                        backgroundColor: 'primary.main',
                        borderRadius: '50%',
                        p: 1.5,
                        mr: 3,
                        color: 'white'
                      }}
                    >
                      <Work />
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h5" component="h3" gutterBottom>
                        {job.title}
                      </Typography>
                      <Typography variant="h6" color="primary" gutterBottom>
                        {job.company}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        {job.period} • {job.location}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                    {job.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {job.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        variant="outlined"
                        color="secondary"
                      />
                    ))}
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
