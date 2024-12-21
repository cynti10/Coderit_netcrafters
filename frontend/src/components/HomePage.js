import React from 'react';
import { Button, Typography } from '@mui/material';  // Make sure Material-UI is installed

const HomePage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Caregiver Support Platform
      </Typography>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </div>
  );
};

export default HomePage;
