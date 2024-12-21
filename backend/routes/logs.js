// backend/routes/logs.js
const express = require('express');
const supabase = require('../config/supabaseClient');  // Import Supabase client

const router = express.Router();

// Fetch all mental health logs
router.get('/mental-health-logs', async (req, res) => {
  const { data, error } = await supabase
    .from('mental_health_logs')  // Table name
    .select('*');  // Fetch all columns

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.status(200).json(data);
});

module.exports = router;
