import React from 'react';
import { Button, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import { Slide, Fade, Zoom } from '@mui/material'; // Material UI animations
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Container>
      {/* Hero Section with Slide animation */}
      <Slide direction="down" in mountOnEnter unmountOnExit>
        <div style={{ textAlign: 'center', padding: '50px 20px' }}>
          <Typography variant="h3" gutterBottom>
            Welcome to Caregiver Support Platform
          </Typography>
          <Typography variant="h5" color="textSecondary" gutterBottom>
            Your one-stop solution for supporting mental health and caregiving.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}
            to="/resources"
            style={{ marginTop: 20 }}
          >
            Get Started
          </Button>
        </div>
      </Slide>

      {/* Features Section with Fade animation */}
      <Fade in={true} timeout={1000}>
        <Typography
          variant="h4"
          align="center"
          style={{ marginTop: 50, marginBottom: 20 }}
        >
          Explore Our Features
        </Typography>
      </Fade>

      <Grid container spacing={4} justifyContent="center">
        {/* Feature 1 with Zoom animation */}
        <Grid item xs={12} sm={6} md={4}>
          <Zoom in={true} timeout={1500}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Mental Health Tracking
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Monitor your mental well-being and track stress levels with ease.
                </Typography>
              </CardContent>
            </Card>
          </Zoom>
        </Grid>

        {/* Feature 2 with Zoom animation */}
        <Grid item xs={12} sm={6} md={4}>
          <Zoom in={true} timeout={2000}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Resource Library
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Access curated resources to help you navigate caregiving challenges.
                </Typography>
              </CardContent>
            </Card>
          </Zoom>
        </Grid>

        {/* Feature 3 with Zoom animation */}
        <Grid item xs={12} sm={6} md={4}>
          <Zoom in={true} timeout={2500}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Community Forum
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Join discussions and connect with fellow caregivers for support.
                </Typography>
              </CardContent>
            </Card>
          </Zoom>
        </Grid>
      </Grid>

      {/* Footer with Fade animation */}
      <Fade in={true} timeout={3000}>
        <footer style={{ textAlign: 'center', padding: '20px 0', marginTop: 50 }}>
          <Typography variant="body2" color="textSecondary">
            © 2024 Caregiver Support Platform. All rights reserved.
          </Typography>
        </footer>
      </Fade>
    </Container>
  );
};

export default HomePage;
