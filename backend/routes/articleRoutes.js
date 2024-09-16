const express = require('express');
const Article = require('../models/articleModel');
const router = express.Router();

// Create new article
router.post('/createArticle', async (req, res) => {
  const { title, content, author, tags } = req.body;

  const article = new Article({
    title,
    content,
    author,
    tags,
  });

  try {
    const savedArticle = await article.save();
    res.status(201).json(savedArticle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all articles
router.get('/', async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// add comments under post
router.post('/:id/comments', async (req, res) => {
    try {
      const article = await Article.findById(req.params.id);
      if (!article) {
        return res.status(404).json({ message: 'Article not found' });
      }
      
      article.comments.push({
        user: req.user._id, // Assuming you have authentication middleware
        content: req.body.content
      });
      
      const updatedArticle = await article.save();
      res.status(201).json(updatedArticle);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // Increment share count
  router.post('/:id/share', async (req, res) => {
    try {
      const article = await Article.findByIdAndUpdate(
        req.params.id,
        { $inc: { shareCount: 1 } },
        { new: true }
      );
      if (!article) {
        return res.status(404).json({ message: 'Article not found' });
      }
      res.json({ shareCount: article.shareCount });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  module.exports = router;