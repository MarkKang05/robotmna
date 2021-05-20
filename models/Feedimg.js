const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const FeedSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  des: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  creationDate: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('Feedimg', FeedSchema);