const { Schema, model } = require('mongoose');

const PostSchema = new Schema({
  img_url: {
    type: String,
    default: 'https://picsum.photos/200/30',
  },
  description: {
    type: String,
  },
  author: {
    type: Schema.Types.ObjectId,
    required: true,
  },
}, {
  timestamps: true,
  versionKey: false,
});

const Post = model('Post', PostSchema, 'Posts');

module.exports = Post;
