// This model is responsible for the worjout objects

const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// The workout objects created using this schema will have a Date created based on the current date, and Empty exercises array which will be populated by the exercise model
// and it will be in a json format
const WorkoutSchema = new Schema({
  day:
    {
    type: Date,
    default: Date.now,
    },
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercise"
    }
  ]
},
    {
    toJSON: { virtuals: true }
    }
);
// This creates the totalDuration property which comes from adding the durations of the different exercises
WorkoutSchema.virtual("totalDuration").get(function(){
    return this.exercises.reduce((total,exercise)=>{
        return total+exercise.duration;
    },0)
})
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;