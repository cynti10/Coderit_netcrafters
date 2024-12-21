import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Card, CardContent, Typography, CircularProgress, Grid, Box } from '@mui/material';

// Replace these with your actual Supabase URL and Anon Key
const SUPABASE_URL = 'https://qlaeynelaxbffzgdhpuw.supabase.co';
const ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsYWV5bmVsYXhiZmZ6Z2RocHV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ3Nzg1MTYsImV4cCI6MjA1MDM1NDUxNn0.aDdcXf_ZNX37zSkJY125IpbyLdxG3FWW0dBtFS3Gsgc';

const ResourceLibrary = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null);    // Error state

  useEffect(() => {
    Axios.get(`${SUPABASE_URL}/rest/v1/resources`, {
      headers: {
        'apikey': ANON_KEY,
        'Authorization': `Bearer ${ANON_KEY}`,
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        setResources(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Failed to load resources. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h5" gutterBottom>
        Resource Library
      </Typography>
      {resources.length === 0 ? (
        <Typography variant="body1" color="textSecondary">
          No resources found.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {resources.map(resource => (
            <Grid item xs={12} sm={6} md={4} key={resource.id}>
              <Card style={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {resource.title}
                  </Typography>
                  <Typography variant="body1">{resource.link}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default ResourceLibrary;
