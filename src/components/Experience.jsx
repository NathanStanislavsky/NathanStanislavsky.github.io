import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Chip
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent
} from '@mui/lab';
import { Work, School, Star } from '@mui/icons-material';

const Experience = () => {
  const workExperience = [
    {
      title: 'Full-Stack Developer',
      company: 'StartupXYZ',
      period: '2020 - 2022',
      description: 'Built and maintained multiple client applications. Collaborated with design and product teams to deliver high-quality features.',
      technologies: ['React', 'TypeScript', 'Python', 'PostgreSQL', 'Redis'],
      icon: <Work />
    },
    {
      title: 'Software Engineer Intern',
      company: 'BigTech Corp',
      period: '2019 - 2020',
      description: 'Developed internal tools and contributed to the main product. Learned industry best practices and modern development workflows.',
      technologies: ['JavaScript', 'Python', 'SQL', 'Git', 'Agile'],
      icon: <Work />
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      period: '2016 - 2020',
      description: 'Graduated with honors. Focused on software engineering, algorithms, and data structures.',
      icon: <School />
    }
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 6 }}>
          Experience & Education
        </Typography>

        {/* Work Experience */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
            Work Experience
          </Typography>
          <Timeline position="alternate">
            {workExperience.map((job, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
                  {job.period}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    {job.icon}
                  </TimelineDot>
                  {index < workExperience.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Paper elevation={3} sx={{ p: 3 }}>
                    <Typography variant="h6" component="span">
                      {job.title}
                    </Typography>
                    <Typography variant="subtitle1" color="primary" gutterBottom>
                      {job.company}
                    </Typography>
                    <Typography variant="body2" paragraph>
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
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>

        {/* Education */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
            Education
          </Typography>
          <Grid container spacing={3}>
            {education.map((edu, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ mr: 2, color: 'primary.main' }}>
                      {edu.icon}
                    </Box>
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        {edu.degree}
                      </Typography>
                      <Typography variant="subtitle1" color="primary">
                        {edu.school}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {edu.period}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2">
                    {edu.description}
                  </Typography>
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
