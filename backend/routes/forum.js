// backend/routes/forum.js
const express = require('express');
const supabase = require('../config/supabaseClient');  // Import Supabase client

const router = express.Router();

// Fetch all forum posts
router.get('/forum-posts', async (req, res) => {
  const { data, error } = await supabase
    .from('forum_posts')  // Table name
    .select('*');  // Fetch all columns

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.status(200).json(data);
});

module.exports = router;
