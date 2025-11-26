import React from 'react';
import {
  Box,
  Container,
  Typography,
  Chip
} from '@mui/material';

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
          Experience
        </Typography>

        <Box>
          {workExperience.map((job, index) => (
            <Box 
              key={index}
              sx={{ 
                mb: { xs: 6, md: 8 },
                pb: { xs: 6, md: 8 },
                borderBottom: index < workExperience.length - 1 ? '1px solid #E5E5E5' : 'none'
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography 
                  variant="h4" 
                  component="h3" 
                  gutterBottom
                  sx={{ 
                    mb: 1,
                    fontSize: { xs: '1.5rem', sm: '1.75rem' },
                    fontWeight: 600
                  }}
                >
                  {job.title}
                </Typography>
                <Typography 
                  variant="h6" 
                  color="text.secondary" 
                  gutterBottom
                  sx={{ 
                    mb: 1,
                    fontWeight: 400,
                    fontSize: '1rem'
                  }}
                >
                  {job.company}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ fontSize: '0.875rem' }}
                >
                  {job.period} • {job.location}
                </Typography>
              </Box>
              
              <Typography 
                variant="body1" 
                paragraph
                sx={{ 
                  mb: 4,
                  fontSize: '1.0625rem',
                  lineHeight: 1.8,
                  color: 'text.primary'
                }}
              >
                {job.description}
              </Typography>
              
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {job.technologies.map((tech) => (
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
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
