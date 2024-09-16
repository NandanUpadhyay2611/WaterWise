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



module.exports = router;
