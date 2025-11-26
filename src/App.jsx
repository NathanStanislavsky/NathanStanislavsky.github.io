import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

// Create a minimalistic custom theme
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000', // Pure black for contrast
      light: '#333333',
      dark: '#000000',
    },
    secondary: {
      main: '#666666', // Subtle gray
      light: '#999999',
      dark: '#333333',
    },
    background: {
      default: '#FFFFFF', // Pure white background
      paper: '#FAFAFA', // Slight off-white for cards
    },
    text: {
      primary: '#1A1A1A', // Deep charcoal for excellent readability
      secondary: '#666666', // Medium gray for secondary text
    },
    divider: '#E5E5E5', // Very subtle divider
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
    borderRadius: 0, // Sharp, clean edges
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
          backgroundColor: '#000000',
          color: '#FFFFFF',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#1A1A1A',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          },
        },
        outlined: {
          borderColor: '#1A1A1A',
          borderWidth: '1.5px',
          color: '#1A1A1A',
          '&:hover': {
            backgroundColor: '#FAFAFA',
            borderColor: '#000000',
            borderWidth: '1.5px',
          },
        },
        text: {
          color: '#1A1A1A',
          '&:hover': {
            backgroundColor: '#FAFAFA',
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
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          borderBottom: '1px solid #E5E5E5',
          color: '#1A1A1A',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: '#FAFAFA',
          border: '1px solid #E5E5E5',
          color: '#666666',
          borderRadius: 0,
          fontWeight: 400,
          '&:hover': {
            backgroundColor: '#F5F5F5',
            borderColor: '#1A1A1A',
            color: '#1A1A1A',
          },
        },
        outlined: {
          borderColor: '#E5E5E5',
          color: '#666666',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#E5E5E5',
          borderWidth: '1px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 0,
            '& fieldset': {
              borderColor: '#E5E5E5',
            },
            '&:hover fieldset': {
              borderColor: '#1A1A1A',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#1A1A1A',
              borderWidth: '1.5px',
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
