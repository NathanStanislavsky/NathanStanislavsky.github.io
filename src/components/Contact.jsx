import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  IconButton,
  Snackbar,
  Alert,
  useTheme
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  GitHub,
  Send
} from '@mui/icons-material';

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSnackbar({
        open: true,
        message: 'Please fill in all required fields',
        severity: 'error'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSnackbar({
        open: true,
        message: 'Please enter a valid email address',
        severity: 'error'
      });
      return;
    }

    // Simulate form submission
    setSnackbar({
      open: true,
      message: 'Thank you for your message! I\'ll get back to you soon.',
      severity: 'success'
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  const contactInfo = [
    {
      icon: <Email color="primary" />,
      title: 'Email',
      value: 'nathan.stanislavsky16@gmail.com',
      action: () => window.open('mailto:nathan.stanislavsky16@gmail.com', '_blank')
    },
    {
      icon: <Phone color="primary" />,
      title: 'Phone',
      value: '917-670-8953',
      action: () => window.open('tel:917-670-8953', '_blank')
    },
    {
      icon: <LocationOn color="primary" />,
      title: 'Location',
      value: 'Boston, MA',
      action: null
    }
  ];

  const socialLinks = [
    {
      icon: <GitHub />,
      label: 'GitHub',
      url: 'https://github.com/NathanStanislavsky',
      color: '#333'
    }
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 6 }}>
          Get In Touch
        </Typography>
        
        <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}>
          I'm always interested in hearing about new opportunities, interesting projects, or just having a chat. 
          Feel free to reach out if you'd like to connect!
        </Typography>

        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
                Send a Message
              </Typography>
              
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Name *"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email *"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      variant="outlined"
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message *"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      multiline
                      rows={4}
                      variant="outlined"
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      startIcon={<Send />}
                      sx={{ minWidth: 200 }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {/* Contact Info Cards */}
              {contactInfo.map((info, index) => (
                <Card key={index} elevation={2} sx={{ cursor: info.action ? 'pointer' : 'default' }}>
                  <CardContent 
                    sx={{ 
                      textAlign: 'center',
                      '&:hover': info.action ? { bgcolor: 'action.hover' } : {}
                    }}
                    onClick={info.action}
                  >
                    <Box sx={{ mb: 2 }}>
                      {info.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom>
                      {info.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {info.value}
                    </Typography>
                  </CardContent>
                </Card>
              ))}

              {/* Social Links */}
              <Card elevation={2}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" gutterBottom>
                    Follow Me
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
                      >
                        {social.icon}
                      </IconButton>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>

        {/* Additional Info */}
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Let's Work Together
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            I'm currently available for internship opportunities and full-time positions after graduation. 
            Whether you have a project in mind or just want to chat, I'd love to hear from you.
          </Typography>
        </Box>
      </Container>

      {/* Snackbar for form feedback */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
