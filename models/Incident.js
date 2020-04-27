const { Schema, model } = require('mongoose');

const schema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  type: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  views: {
    type: Number,
    required: true,
  },
  coords: {
    type: Array,
    required: true,
  },
  sources: {
    type: Array,
    required: true,
  },
  media: {
    type: Array,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  date: {
    type: Number,
    required: true,
  }
});

module.exports = model('Incedent', schema);
