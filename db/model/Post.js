const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  images: {
    imageUrl: {
      type: String,
      required: true
    }
  },
  status: {
    type: String,
    required: true
  },
  allowComments: {
    type: Boolean,
    required: true
  },
  date: {
    type: String,
    default: Date.now
  },
  comments: [{
    commentBody: {
      type: String,
      required: true
    },
    createdAt: {
      type: String,
      default: Date.now
    },
    commentUser: {
      name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      }
    },
  }]
});

module.exports = mongoose.models.posts || mongoose.model('posts', postSchema, 'posts');
