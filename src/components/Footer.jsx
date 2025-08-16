import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Divider,
  useTheme
} from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <GitHub />,
      label: 'GitHub',
      url: 'https://github.com/NathanStanislavsky',
      color: '#333'
    },
    {
      icon: <LinkedIn />,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/nathanstanislavsky',
      color: '#0077b5'
    },
    {
      icon: <Email />,
      label: 'Email',
      url: 'mailto:nathan@example.com',
      color: '#d32f2f'
    }
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        borderTop: `1px solid ${theme.palette.divider}`,
        py: 4,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center' }}>
          {/* Social Links */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Connect With Me
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  onClick={() => window.open(social.url, '_blank')}
                  sx={{
                    color: social.color,
                    '&:hover': {
                      transform: 'scale(1.1)',
                      transition: 'transform 0.2s ease-in-out'
                    }
                  }}
                  aria-label={social.label}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* Copyright */}
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Nathan Stanislavsky. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
