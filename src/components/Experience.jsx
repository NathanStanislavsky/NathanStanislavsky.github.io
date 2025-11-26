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
      technologies: ['TypeScript', 'Node.js', 'SvelteKit', 'PostgreSQL', 'Docker', 'DigitalOcean S3', 'Test Driven Development']
    },
    {
      title: 'Software Engineer',
      company: 'Hack4Impact BU',
      period: 'Sept 2025 – Present',
      location: 'Boston, MA',
      description: "I architected a full-stack club management platform utilizing React, TypeScript, and a Strapi CMS. This initiative streamlined event and project applications for active users, successfully reducing content update time by 90%.",
      technologies: ['TypeScript', 'Node.js', 'React', 'Strapi CMS']
    }
  ];

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
          Experience
        </Typography>

        <Box>
          {workExperience.map((job, index) => (
            <Box 
              key={index}
              sx={{ 
                mb: index < workExperience.length - 1 ? { xs: 4, md: 5 } : 0,
                pb: index < workExperience.length - 1 ? { xs: 4, md: 5 } : 0,
                borderLeft: '4px solid',
                borderColor: 'primary.main',
                pl: 3,
                borderBottom: index < workExperience.length - 1 ? '1px solid #D9D4CC' : 'none'
              }}
            >
              <Box sx={{ mb: 2 }}>
                <Typography 
                  variant="h4" 
                  component="h3" 
                  gutterBottom
                  sx={{ 
                    mb: 0.5,
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                    fontWeight: 600,
                    color: 'primary.main'
                  }}
                >
                  {job.title}
                </Typography>
                <Typography 
                  variant="h6" 
                  color="secondary.main" 
                  gutterBottom
                  sx={{ 
                    mb: 0.5,
                    fontWeight: 500,
                    fontSize: '0.9375rem'
                  }}
                >
                  {job.company}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ fontSize: '0.8125rem' }}
                >
                  {job.period} • {job.location}
                </Typography>
              </Box>
              
              <Typography 
                variant="body1" 
                paragraph
                sx={{ 
                  mb: 2,
                  fontSize: '1rem',
                  lineHeight: 1.6,
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
                      fontSize: '0.75rem',
                      height: '26px',
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
