import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Avatar,
  Chip,
  Divider
} from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const About = () => {
  const skills = [
    'React', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'SQL',
    'Git', 'Docker', 'AWS', 'Material-UI', 'Next.js', 'GraphQL'
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Avatar
            sx={{
              width: 150,
              height: 150,
              mx: 'auto',
              mb: 3,
              fontSize: '3rem',
              bgcolor: 'primary.main'
            }}
          >
            NS
          </Avatar>
          <Typography variant="h2" component="h1" gutterBottom>
            Nathan Stanislavsky
          </Typography>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            Software Engineer & Full-Stack Developer
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}>
            Passionate about creating innovative solutions and building scalable applications. 
            I love working with modern technologies and solving complex problems.
          </Typography>
          
          {/* Social Links */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
            <Chip
              icon={<GitHub />}
              label="GitHub"
              clickable
              variant="outlined"
              onClick={() => window.open('https://github.com/NathanStanislavsky', '_blank')}
            />
            <Chip
              icon={<LinkedIn />}
              label="LinkedIn"
              clickable
              variant="outlined"
              onClick={() => window.open('https://linkedin.com/in/nathanstanislavsky', '_blank')}
            />
            <Chip
              icon={<Email />}
              label="Email"
              clickable
              variant="outlined"
              onClick={() => window.open('mailto:nathan@example.com', '_blank')}
            />
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* About Content */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h4" gutterBottom>
                About Me
              </Typography>
              <Typography variant="body1" paragraph>
                I'm a dedicated software engineer with a passion for building exceptional digital experiences. 
                With expertise in both frontend and backend development, I enjoy tackling complex challenges 
                and creating solutions that make a difference.
              </Typography>
              <Typography variant="body1" paragraph>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community. I believe in continuous learning 
                and staying up-to-date with industry best practices.
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h4" gutterBottom>
                Skills & Technologies
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    variant="outlined"
                    color="primary"
                    size="small"
                  />
                ))}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
