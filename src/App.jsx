import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

// Create an earthy, warm theme
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#8B6F47', // Rich brown
      light: '#A3885E',
      dark: '#6B5638',
    },
    secondary: {
      main: '#C17A5A', // Terracotta
      light: '#D89273',
      dark: '#9D6247',
    },
    success: {
      main: '#6B8E5A', // Sage green
      light: '#84A875',
      dark: '#557048',
    },
    warning: {
      main: '#D4A574', // Warm ochre
      light: '#E4B890',
      dark: '#B8885A',
    },
    info: {
      main: '#7A8B7A', // Muted green-gray
      light: '#95A495',
      dark: '#627062',
    },
    background: {
      default: '#F5F1EB', // Warm off-white
      paper: '#FFFFFF',
    },
    text: {
      primary: '#3E3A35', // Dark brown-gray
      secondary: '#6B6356', // Medium brown-gray
    },
    divider: '#D9D4CC', // Warm beige divider
  },
  typography: {
    fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      letterSpacing: '-0.01em',
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      letterSpacing: '-0.01em',
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      letterSpacing: '0em',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
      letterSpacing: '0em',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
      letterSpacing: '0.01em',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      letterSpacing: '0.01em',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      letterSpacing: '0.01em',
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 12, // Rounded corners for modern look
  },
  shadows: [
    'none',
    '0 1px 3px rgba(0,0,0,0.05)',
    '0 2px 6px rgba(0,0,0,0.05)',
    '0 4px 12px rgba(0,0,0,0.05)',
    '0 8px 24px rgba(0,0,0,0.05)',
    '0 16px 48px rgba(0,0,0,0.05)',
    '0 24px 64px rgba(0,0,0,0.05)',
    '0 32px 80px rgba(0,0,0,0.05)',
    '0 40px 96px rgba(0,0,0,0.05)',
    '0 48px 112px rgba(0,0,0,0.05)',
    '0 56px 128px rgba(0,0,0,0.05)',
    '0 64px 144px rgba(0,0,0,0.05)',
    '0 72px 160px rgba(0,0,0,0.05)',
    '0 80px 176px rgba(0,0,0,0.05)',
    '0 88px 192px rgba(0,0,0,0.05)',
    '0 96px 208px rgba(0,0,0,0.05)',
    '0 104px 224px rgba(0,0,0,0.05)',
    '0 112px 240px rgba(0,0,0,0.05)',
    '0 120px 256px rgba(0,0,0,0.05)',
    '0 128px 272px rgba(0,0,0,0.05)',
    '0 136px 288px rgba(0,0,0,0.05)',
    '0 144px 304px rgba(0,0,0,0.05)',
    '0 152px 320px rgba(0,0,0,0.05)',
    '0 160px 336px rgba(0,0,0,0.05)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 0,
          fontWeight: 500,
          padding: '10px 24px',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-1px)',
          },
        },
        contained: {
          backgroundColor: '#8B6F47',
          color: '#FFFFFF',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#6B5638',
            boxShadow: '0 4px 12px rgba(139, 111, 71, 0.4)',
          },
        },
        outlined: {
          borderColor: '#8B6F47',
          borderWidth: '2px',
          color: '#8B6F47',
          '&:hover': {
            backgroundColor: 'rgba(139, 111, 71, 0.1)',
            borderColor: '#6B5638',
            borderWidth: '2px',
          },
        },
        text: {
          color: '#8B6F47',
          '&:hover': {
            backgroundColor: 'rgba(139, 111, 71, 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          border: 'none',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          border: 'none',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
        },
        elevation1: {
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
        },
        elevation2: {
          boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
        },
        elevation3: {
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 2px 8px rgba(139, 111, 71, 0.1)',
          borderBottom: '2px solid #8B6F47',
          color: '#3E3A35',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: '#F5F1EB',
          border: '1px solid #8B6F47',
          color: '#8B6F47',
          borderRadius: '8px',
          fontWeight: 500,
          '&:hover': {
            backgroundColor: '#8B6F47',
            borderColor: '#8B6F47',
            color: '#FFFFFF',
            transform: 'translateY(-1px)',
          },
        },
        outlined: {
          borderColor: '#8B6F47',
          color: '#8B6F47',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#D9D4CC',
          borderWidth: '1px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            '& fieldset': {
              borderColor: '#D9D4CC',
            },
            '&:hover fieldset': {
              borderColor: '#8B6F47',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#8B6F47',
              borderWidth: '2px',
            },
          },
        },
      },
    },
  },
});

function App() {
  const [currentSection, setCurrentSection] = useState('about');

  const handleSectionChange = (section) => {
    setCurrentSection(section);
    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Auto-scroll to section when currentSection changes
  useEffect(() => {
    const element = document.getElementById(currentSection);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentSection]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
        <Header onSectionChange={handleSectionChange} />
        
        <Box component="main" sx={{ flexGrow: 1 }}>
          {/* About Section */}
          <Box id="about">
            <About />
          </Box>
          
          {/* Experience Section */}
          <Box id="experience" sx={{ bgcolor: 'background.paper' }}>
            <Experience />
          </Box>
          
          {/* Projects Section */}
          <Box id="projects">
            <Projects />
          </Box>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
