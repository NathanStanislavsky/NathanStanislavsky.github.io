import React from "react";
import { Box, Container, Typography, Grid, Chip } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

const About = () => {
  return (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      <Container maxWidth="md">
        {/* Hero Section */}
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <Box
            sx={{
              display: "inline-block",
              p: 1,
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, #8B6F47 0%, #C17A5A 50%, #6B8E5A 100%)",
              mb: 3,
            }}
          >
            <Box
              component="img"
              src={`${import.meta.env.BASE_URL}nathanPhoto.jpeg`}
              alt="Nathan Stanislavsky"
              sx={{
                width: { xs: 100, sm: 120 },
                height: { xs: 100, sm: 120 },
                borderRadius: "50%",
                objectFit: "cover",
                display: "block",
                border: "3px solid white",
              }}
            />
          </Box>
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            sx={{
              mb: 1,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              background: "linear-gradient(135deg, #8B6F47 0%, #C17A5A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Nathan Stanislavsky
          </Typography>
          <Typography
            variant="h5"
            color="primary"
            gutterBottom
            sx={{
              mb: 2,
              fontWeight: 500,
              fontSize: { xs: "0.9375rem", sm: "1rem" },
            }}
          >
            Software Engineer & Backend Developer
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: "600px",
              mx: "auto",
              mb: 3,
              fontSize: "1rem",
              lineHeight: 1.6,
            }}
          >
            Passionate software engineer with experience in backend
            development and data driven applications.
          </Typography>

          {/* Contact Info */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1.5,
              flexWrap: "wrap",
            }}
          >
            <Chip
              icon={<Email sx={{ fontSize: "1rem" }} />}
              label="Email"
              clickable
              variant="outlined"
              onClick={() =>
                window.open("mailto:nathan.stanislavsky16@gmail.com", "_blank")
              }
              sx={{
                fontSize: "0.875rem",
                height: "36px",
                "&:hover": {
                  borderColor: "text.primary",
                  color: "text.primary",
                  backgroundColor: "transparent",
                },
              }}
            />
            <Chip
              icon={<GitHub sx={{ fontSize: "1rem" }} />}
              label="GitHub"
              clickable
              variant="outlined"
              onClick={() =>
                window.open("https://github.com/NathanStanislavsky", "_blank")
              }
              sx={{
                fontSize: "0.875rem",
                height: "36px",
                "&:hover": {
                  borderColor: "text.primary",
                  color: "text.primary",
                  backgroundColor: "transparent",
                },
              }}
            />
            <Chip
              icon={<LinkedIn sx={{ fontSize: "1rem" }} />}
              label="LinkedIn"
              clickable
              variant="outlined"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/nathan-stanislavsky/",
                  "_blank"
                )
              }
              sx={{
                fontSize: "0.875rem",
                height: "36px",
                "&:hover": {
                  borderColor: "text.primary",
                  color: "text.primary",
                  backgroundColor: "transparent",
                },
              }}
            />
          </Box>
        </Box>

        {/* About Content */}
        <Grid container spacing={{ xs: 3, md: 4 }}>
          <Grid size={{ xs: 12 }}>
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h3"
                gutterBottom
                sx={{
                  mb: 2,
                  fontSize: { xs: "1.5rem", sm: "1.75rem" },
                  color: "primary.main",
                }}
              >
                About
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ mb: 2, fontSize: "1rem", lineHeight: 1.6 }}
              >
                I am a software engineer and undergraduate at Boston University,
                pursuing a joint B.A. in Mathematics and Computer Science. My
                focus is on engineering robust, scalable applications that
                address complex technical challenges.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ mb: 2, fontSize: "1rem", lineHeight: 1.6 }}
              >
                Currently, I am driving social impact as a Software Engineer at
                Hack4Impact and developing a key-value storage engine in C++.
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "1rem", lineHeight: 1.6 }}
              >
                I prioritize clean, maintainable architecture and adhere to best
                practices like Test-Driven Development. My goal is to build
                efficient software that delivers an exceptional user experience.
                Offline, you can find me playing chess or training at the gym.
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Box>
              <Typography
                variant="h3"
                gutterBottom
                sx={{
                  mb: 2,
                  fontSize: { xs: "1.5rem", sm: "1.75rem" },
                  color: "secondary.main",
                }}
              >
                Education
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  mb: 0.5,
                  fontSize: { xs: "1.125rem", sm: "1.25rem" },
                  fontWeight: 600,
                }}
              >
                Boston University
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                gutterBottom
                sx={{ mb: 1, fontSize: "0.9375rem" }}
              >
                B.A. Math and Computer Science
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                gutterBottom
                sx={{ mb: 2, fontSize: "0.875rem" }}
              >
                GPA: 3.74 | Dean's List | Expected graduation May 2027
              </Typography>
              <Typography
                variant="body2"
                paragraph
                sx={{ mb: 1.5, lineHeight: 1.6, fontSize: "0.875rem" }}
              >
                <strong>Relevant Coursework:</strong> Distributed Systems, Time Series & Forecasting, Algorithms, Computer Systems,
Databases, Data Structures, Linear Algebra, Multivariate Calculus, Probability
              </Typography>
              <Typography
                variant="body2"
                sx={{ lineHeight: 1.6, fontSize: "0.875rem" }}
              >
                <strong>Activities & Clubs:</strong> Software Engineer at
                Hack4Impact
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
