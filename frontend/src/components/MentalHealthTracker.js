import React, { useState } from 'react';
import Axios from 'axios';
import { Button, TextField, Typography } from '@mui/material';

const MentalHealthTracker = () => {
  const [mood, setMood] = useState('');
  const [stressLevel, setStressLevel] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = () => {
    const data = {
      mood,
      stressLevel,
      comments,
      userId: 'user-123', // Dynamic user ID here (e.g., from authentication context)
    };

    // Send this data to backend to store in Supabase
    Axios.post('https://your-backend-endpoint', data)
      .then(response => {
        console.log('Data logged successfully');
      })
      .catch(error => {
        console.error('Error logging data:', error);
      });
  };

  return (
    <div>
      <Typography variant="h4">Mental Health Log</Typography>
      <TextField
        label="Mood"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Stress Level"
        value={stressLevel}
        onChange={(e) => setStressLevel(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Comments"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button onClick={handleSubmit} variant="contained">Submit</Button>
    </div>
  );
};

export default MentalHealthTracker;
