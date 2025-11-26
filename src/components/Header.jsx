import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ onSectionChange }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSectionChange = (section) => {
    onSectionChange(section);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const menuItems = [
    { text: 'About', section: 'about' },
    { text: 'Experience', section: 'experience' },
    { text: 'Projects', section: 'projects' },
  ];

  const drawer = (
    <List sx={{ pt: 2 }}>
      {menuItems.map((item) => (
        <ListItem 
          button 
          key={item.text}
          onClick={() => handleSectionChange(item.section)}
          sx={{
            py: 1.5,
            px: 3,
            '&:hover': {
              backgroundColor: '#FAFAFA',
            }
          }}
        >
          <ListItemText 
            primary={item.text}
            primaryTypographyProps={{
              sx: {
                fontWeight: 400,
                fontSize: '0.9375rem',
                color: 'text.primary',
              }
            }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={0}
        sx={{ 
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ 
          maxWidth: '1200px', 
          width: '100%', 
          mx: 'auto',
          px: { xs: 2, sm: 4 },
          py: 2
        }}>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1,
              fontWeight: 600,
              letterSpacing: '-0.01em',
              fontSize: { xs: '1rem', sm: '1.125rem' }
            }}
          >
            Nathan Stanislavsky
          </Typography>
          
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                color: 'text.primary',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.05)',
                }
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  color="inherit"
                  onClick={() => handleSectionChange(item.section)}
                  sx={{
                    color: 'text.secondary',
                    fontWeight: 400,
                    fontSize: '0.9375rem',
                    textTransform: 'none',
                    px: 2,
                    '&:hover': {
                      color: 'text.primary',
                      backgroundColor: 'transparent',
                    }
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            borderLeft: '1px solid #E5E5E5',
            boxShadow: 'none'
          },
        }}
      >
        {drawer}
      </Drawer>
      
      <Toolbar /> {/* Spacer for fixed AppBar */}
    </>
  );
};

export default Header;
