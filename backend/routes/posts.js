const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


router.get('/trending', async (req, res) => {
  try {
    const trendingPosts = await Post.find()
      .sort({ commentCount: -1 })
      .limit(10);
    
    res.json(trendingPosts);
  } catch (error) {
    console.error('Error fetching trending posts:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


router.get('/feed', async (req, res) => {
  try {
    const feed = await Post.find()
      .sort({ createdAt: -1 })
      .limit(20);
    
    res.json(feed);
  } catch (error) {
    console.error('Error fetching feed:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;