const mongoose = require('mongoose');
const ThreadSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  comments: [{ 
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: { type: String, required: true }
  }],
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Thread', ThreadSchema);
