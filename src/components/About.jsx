import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Chip
} from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import NathanImage from '../../public/NathanImage.png';

const About = () => {

  return (
    <Box sx={{ py: { xs: 6, md: 12 } }}>
      <Container maxWidth="md">
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
          <Box
            component="img"
            src={NathanImage}
            alt="Nathan Stanislavsky"
            sx={{
              width: { xs: 120, sm: 140 },
              height: { xs: 120, sm: 140 },
              mx: 'auto',
              mb: 4,
              borderRadius: 0,
              objectFit: 'cover',
              display: 'block',
              filter: 'grayscale(100%)',
              transition: 'filter 0.3s ease-in-out',
              '&:hover': {
                filter: 'grayscale(0%)',
              },
            }}
          />
          <Typography 
            variant="h1" 
            component="h1" 
            gutterBottom
            sx={{ 
              mb: 2,
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' }
            }}
          >
            Nathan Stanislavsky
          </Typography>
          <Typography 
            variant="h5" 
            color="text.secondary" 
            gutterBottom
            sx={{ 
              mb: 4,
              fontWeight: 400,
              fontSize: { xs: '1rem', sm: '1.125rem' }
            }}
          >
            Software Engineer & Full-Stack Developer
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary" 
            sx={{ 
              maxWidth: '600px', 
              mx: 'auto', 
              mb: 6,
              fontSize: '1.0625rem',
              lineHeight: 1.8
            }}
          >
            Passionate software engineer with expertise in full-stack development and system architecture. 
            Currently pursuing a B.A. in Math and Computer Science at Boston University with a strong focus on building scalable applications.
          </Typography>
          
          {/* Contact Info */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5, flexWrap: 'wrap' }}>
            <Chip
              icon={<Email sx={{ fontSize: '1rem' }} />}
              label="Email"
              clickable
              variant="outlined"
              onClick={() => window.open('mailto:nathan.stanislavsky16@gmail.com', '_blank')}
              sx={{
                fontSize: '0.875rem',
                height: '36px',
                '&:hover': {
                  borderColor: 'text.primary',
                  color: 'text.primary',
                  backgroundColor: 'transparent',
                },
              }}
            />
            <Chip
              icon={<GitHub sx={{ fontSize: '1rem' }} />}
              label="GitHub"
              clickable
              variant="outlined"
              onClick={() => window.open('https://github.com/NathanStanislavsky', '_blank')}
              sx={{
                fontSize: '0.875rem',
                height: '36px',
                '&:hover': {
                  borderColor: 'text.primary',
                  color: 'text.primary',
                  backgroundColor: 'transparent',
                },
              }}
            />
            <Chip
              icon={<LinkedIn sx={{ fontSize: '1rem' }} />}
              label="LinkedIn"
              clickable
              variant="outlined"
              onClick={() => window.open('https://www.linkedin.com/in/nathan-stanislavsky/', '_blank')}
              sx={{
                fontSize: '0.875rem',
                height: '36px',
                '&:hover': {
                  borderColor: 'text.primary',
                  color: 'text.primary',
                  backgroundColor: 'transparent',
                },
              }}
            />
          </Box>
        </Box>

        {/* About Content */}
        <Grid container spacing={{ xs: 4, md: 6 }}>
          <Grid item xs={12}>
            <Box sx={{ mb: 6 }}>
              <Typography 
                variant="h3" 
                gutterBottom
                sx={{ 
                  mb: 3,
                  fontSize: { xs: '1.75rem', sm: '2rem' }
                }}
              >
                About
              </Typography>
              <Typography variant="body1" paragraph sx={{ mb: 3, fontSize: '1.0625rem', lineHeight: 1.8 }}>
                I'm a dedicated software engineer currently pursuing my B.A. in Math and Computer Science at Boston University, 
                maintaining a 3.79 GPA and earning Dean's List recognition. My passion lies in building robust, scalable applications 
                and solving complex challenges.
              </Typography>
              <Typography variant="body1" paragraph sx={{ mb: 3, fontSize: '1.0625rem', lineHeight: 1.8 }}>
                I'm actively involved in the tech community as a Software Engineer at Hack4Impact and a Junior Quantitative Developer 
                at BUAlpha. When I'm not coding, you can find me playing chess or at the gym.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.0625rem', lineHeight: 1.8 }}>
                I believe in writing clean, maintainable code and following best practices like Test-Driven Development. My goal is 
                to create software that not only solves problems efficiently but also provides an excellent user experience.
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12}>
            <Box>
              <Typography 
                variant="h3" 
                gutterBottom
                sx={{ 
                  mb: 3,
                  fontSize: { xs: '1.75rem', sm: '2rem' }
                }}
              >
                Education
              </Typography>
              <Typography 
                variant="h5" 
                gutterBottom
                sx={{ 
                  mb: 1,
                  fontSize: { xs: '1.25rem', sm: '1.5rem' },
                  fontWeight: 600
                }}
              >
                Boston University
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary" 
                gutterBottom
                sx={{ mb: 2 }}
              >
                B.A. Math and Computer Science
              </Typography>
              <Typography 
                variant="body2" 
                color="text.secondary" 
                gutterBottom
                sx={{ mb: 3 }}
              >
                GPA: 3.79 | Dean's List | Expected May 2028
              </Typography>
              <Typography variant="body2" paragraph sx={{ mb: 2, lineHeight: 1.7 }}>
                <strong>Relevant Coursework:</strong> Data Structures and Algorithms, Combinatoric Structures, 
                Computer Systems, Linear Algebra, Multivariate Calculus
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                <strong>Activities & Clubs:</strong> Software Engineer at Hack4Impact, Junior Quantitative Developer at BUAlpha, Chess Club
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
