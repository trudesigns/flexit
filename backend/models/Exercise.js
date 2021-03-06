const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  exerciseName: {
    type: String,
    required: true,
  },
  bodyPartCategory: {
    type: String,
    required: true,
  },
  typeCategory: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0,
  },
  username: {
    type: String,
  },
});

module.exports = mongoose.model('Exercise', ExerciseSchema);
