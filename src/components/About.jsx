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
import { GitHub, LinkedIn, Email, Phone } from '@mui/icons-material';

const About = () => {
  const skills = [
    'Java', 'Python', 'C/C++', 'JavaScript', 'TypeScript', 'HTML/CSS', 'x86 Assembly',
    'SvelteKit', 'React', 'Node.js', 'Tailwind', 'Pandas', 'NumPy', 'scikit-surprise',
    'FastAPI', 'FAISS', 'PyMongo', 'Google Cloud SDK', 'MongoDB', 'PostgreSQL',
    'Prisma ORM', 'Drizzle ORM', 'Git', 'Docker', 'Vercel', 'Sanity CMS'
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
            Passionate software engineer with expertise in full-stack development, and system architecture. 
            Currently pursuing a B.A. in Math and Computer Science at Boston University with a strong focus on building scalable applications.
          </Typography>
          
          {/* Contact Info */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4, flexWrap: 'wrap' }}>
            <Chip
              icon={<Email />}
              label="nathan.stanislavsky16@gmail.com"
              clickable
              variant="outlined"
              onClick={() => window.open('mailto:nathan.stanislavsky16@gmail.com', '_blank')}
            />
            <Chip
              icon={<GitHub />}
              label="github/NathanStanislavsky"
              clickable
              variant="outlined"
              onClick={() => window.open('https://github.com/NathanStanislavsky', '_blank')}
            />
            <Chip
              icon={<Phone />}
              label="917-670-8953"
              clickable
              variant="outlined"
              onClick={() => window.open('tel:917-670-8953', '_blank')}
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
                I'm a dedicated software engineer currently pursuing my B.A. in Math and Computer Science at Boston University, 
                maintaining a 3.79 GPA and earning Dean's List recognition. My passion lies in building robust, scalable applications 
                and solving complex challenges.
              </Typography>
              <Typography variant="body1" paragraph>
                I'm actively involved in the tech community as a Software Engineer at Hack4Impact and a Junior Quantitative Developer 
                at BUAlpha. When I'm not coding, you can find me playing chess or at the gym.
              </Typography>
              <Typography variant="body1" paragraph>
                I believe in writing clean, maintainable code and following best practices like Test-Driven Development. My goal is 
                to create software that not only solves problems efficiently but also provides an excellent user experience.
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h4" gutterBottom>
                Education
              </Typography>
              <Typography variant="h6" gutterBottom>
                Boston University
              </Typography>
              <Typography variant="subtitle1" color="primary" gutterBottom>
                B.A. Math and Computer Science
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                GPA: 3.79 | Dean's List | Expected May 2028
              </Typography>
              <Typography variant="body2" paragraph>
                <strong>Relevant Coursework:</strong> Data Structures and Algorithms, Combinatoric Structures, 
                Computer Systems, Linear Algebra, Multivariate Calculus
              </Typography>
              <Typography variant="body2">
                <strong>Activities & Clubs:</strong> Software Engineer at Hack4Impact, Junior Quantitative Developer at BUAlpha, Chess Club
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Skills Section */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ mb: 3 }}>
            Technical Skills
          </Typography>
          <Paper elevation={2} sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
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
        </Box>
      </Container>
    </Box>
  );
};

export default About;
