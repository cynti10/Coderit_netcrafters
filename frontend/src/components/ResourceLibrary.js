import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';

const ResourceLibrary = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    // Fetch resources from Supabase API or your backend
    Axios.get('https://your-supabase-url/resources', {
      headers: {
        'apikey': 'your-public-api-key',  // Use your actual API key
        'Authorization': 'Bearer your-public-api-key'  // Use your actual API key
      }
    })
      .then(response => {
        setResources(response.data);  // Set the response data to state
      })
      .catch(error => console.error('Error fetching resources:', error));
  }, []);  // Empty dependency array ensures the effect runs only once after the initial render

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h5" gutterBottom>
        Resource Library
      </Typography>
      {resources.map(resource => (
        <Card key={resource.id} style={{ marginBottom: '20px' }}>
          <CardContent>
            <Typography variant="h6">{resource.title}</Typography>
            <Typography>{resource.link}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ResourceLibrary;
