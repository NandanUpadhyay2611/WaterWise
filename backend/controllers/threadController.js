const Thread = require('../models/threadModel');

exports.createThread = async (req, res) => {
  try {
    const { title, content } = req.body;
    const thread = new Thread({ title, content, user: req.user.id });
    await thread.save();
    res.json(thread);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.getThreads = async (req, res) => {
  try {
    const threads = await Thread.find().populate('user', ['username']);
    res.json(threads);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.addComment = async (req, res) => {
  try {
    const { content } = req.body;
    const thread = await Thread.findById(req.params.threadId);
    thread.comments.push({ user: req.user.id, content });
    await thread.save();
    res.json(thread);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
