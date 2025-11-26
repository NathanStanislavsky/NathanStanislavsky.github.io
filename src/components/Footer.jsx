import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton
} from '@mui/material';
import { GitHub, Email, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <GitHub />,
      label: 'GitHub',
      url: 'https://github.com/NathanStanislavsky'
    },
    {
      icon: <LinkedIn />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nathan-stanislavsky/'
    },
    {
      icon: <Email />,
      label: 'Email',
      url: 'mailto:nathan.stanislavsky16@gmail.com'
    }
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.default',
        borderTop: '1px solid #E5E5E5',
        py: { xs: 4, md: 5 },
        mt: 'auto'
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          {/* Social Links */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  onClick={() => window.open(social.url, '_blank')}
                  sx={{
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'text.primary',
                      backgroundColor: 'transparent',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.2s ease-in-out'
                  }}
                  aria-label={social.label}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Box>

          {/* Copyright */}
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ fontSize: '0.875rem' }}
          >
            © {currentYear} Nathan Stanislavsky
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
