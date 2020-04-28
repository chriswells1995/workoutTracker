const router = require("express").Router();
const Exercise = require("../models/exercise.js");
const Workout = require("../models/workout");

// After looking at the API call in the public api.js file, 
// I did my best to make backend APIs to respond to those requests.


// GET
// This will get all the workouts
  router.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });



// POST
// This will post a workout to the databse,
// which at first will have an empty exercise array, and 
// the date and duration properties. 
router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });


// PUT
// This is supposed to grab a workout object by the ID and populate the exercize array, but it is not currently working.
// I thought I got it to work once, but could never replicate it. 
router.put("/api/workouts/:id", ({ body, params }, res) => {
    console.log(params.id)
    Workout.findByIdAndUpdate(
        params.id,

        
        {
            $push: {exercises: body}
        },
        {
            new: true
        }
        )
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });


//   GET in range
// Through context I guess the user puts in a timer interval somewhere and this returns only workouts created in that range.
// I'm honestly not sure where on the website this shows up, so I'm not certain how to test it
router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

module.exports = router;