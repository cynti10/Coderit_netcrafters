// ForumPage.js
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Card, CardContent, Typography, TextField, Button } from '@mui/material';

const ForumPage = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    // Fetch forum posts from API or database
    Axios.get('https://your-api-url/forum')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => console.error('Error fetching forum posts:', error));
  }, []);

  const handlePostSubmit = () => {
    // Add new post to the API or backend
    if (newPost.trim()) {
      Axios.post('https://your-api-url/forum', { content: newPost })
        .then(response => {
          setPosts([...posts, response.data]);
          setNewPost('');
        })
        .catch(error => console.error('Error posting new message:', error));
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h5" gutterBottom>Forum</Typography>
      <TextField
        label="Ask a question or share your thoughts"
        fullWidth
        multiline
        rows={4}
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
        variant="outlined"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handlePostSubmit}
        style={{ marginTop: '10px' }}
      >
        Post
      </Button>
      <div style={{ marginTop: '20px' }}>
        {posts.map(post => (
          <Card key={post.id} style={{ marginBottom: '20px' }}>
            <CardContent>
              <Typography variant="h6">{post.username}</Typography>
              <Typography>{post.content}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ForumPage;
