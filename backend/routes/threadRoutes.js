const express = require('express');
const { createThread, getThreads, addComment } = require('../controllers/threadController');

const router = express.Router();

router.post('/', createThread);
router.get('/', getThreads);
router.post('/:threadId/comments',addComment);

module.exports = router;
