const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// This allows us to creat Exercise objects, which will have properties with the following names and variable types
const ExerciseSchema = new Schema({
    type: {
        type: String,
      },
    name: {
        type: String,
    }, 
    distance: {
        type: Number,
      },
    duration: {
        type: Number,
      },
    weight: {
        type: Number,
      },
    sets: {
        type: Number,
      },
    reps: {
        type: Number,
      },

});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;