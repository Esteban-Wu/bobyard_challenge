import mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const CommentSchema = new Schema({
  id: {
    type: String
  },
  author: {
    type: String,
    required: "Enter author name"
  },
  likes: {
    type: Number,
    default: 0
  },
  text: {
    type: String
  },
  image: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
})