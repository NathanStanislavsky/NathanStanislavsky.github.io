import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#0B735F', // Deep teal
      light: '#639D75', // Medium sage green
      dark: '#384166', // Deep blue-gray
    },
    secondary: {
      main: '#E3DBA9', // Warm cream
      light: '#F0EDD1', // Lighter cream
      dark: '#D4C98A', // Darker cream
    },
    background: {
      default: '#F8F7F2', // Very light cream-tinted white
      paper: '#FFFFFF',
    },
    text: {
      primary: '#384166', // Deep blue-gray for main text
      secondary: '#0B735F', // Deep teal for secondary text
    },
    divider: '#E3DBA9', // Warm cream for dividers
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      color: '#384166',
      fontWeight: 700,
    },
    h2: {
      color: '#384166',
      fontWeight: 600,
    },
    h3: {
      color: '#384166',
      fontWeight: 600,
    },
    h4: {
      color: '#384166',
      fontWeight: 500,
    },
    h5: {
      color: '#0B735F',
      fontWeight: 500,
    },
    h6: {
      color: '#0B735F',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(11, 115, 95, 0.3)',
          },
        },
        contained: {
          backgroundColor: '#0B735F',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#384166',
          },
        },
        outlined: {
          borderColor: '#639D75',
          color: '#639D75',
          '&:hover': {
            backgroundColor: 'rgba(99, 157, 117, 0.1)',
            borderColor: '#0B735F',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: '1px solid #E3DBA9',
          '&:hover': {
            boxShadow: '0 8px 24px rgba(11, 115, 95, 0.15)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: '1px solid #E3DBA9',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#0B735F',
          boxShadow: '0 2px 8px rgba(11, 115, 95, 0.2)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: '#F8F7F2',
          borderColor: '#639D75',
          color: '#639D75',
          '&:hover': {
            backgroundColor: '#639D75',
            color: '#FFFFFF',
          },
        },
        outlined: {
          borderColor: '#639D75',
          color: '#639D75',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#E3DBA9',
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
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header onSectionChange={handleSectionChange} />
        
        <Box component="main" sx={{ flexGrow: 1 }}>
          {/* About Section */}
          <Box id="about">
            <About />
          </Box>
          
          {/* Experience Section */}
          <Box id="experience">
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
