console.log("Backend server is running!");
// backend/index.js
const express = require('express');
const dotenv = require('dotenv');
const resourcesRouter = require('./routes/resources');
const forumRouter = require('./routes/forum');
const logsRouter = require('./routes/logs');

dotenv.config();  // Load .env variables

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());  // Parse JSON requests

// API Routes
app.use('/api', resourcesRouter);  // Access via /api/resources
app.use('/api', forumRouter);      // Access via /api/forum-posts
app.use('/api', logsRouter);       // Access via /api/mental-health-logs

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
