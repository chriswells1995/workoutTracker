const router = require("express").Router();
const Exercise = require("../models/exercise.js");
const Workout = require("../models/workout");



// GET
  router.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

// PUT
router.put("/api/workouts/:id", ({ body, params }, res) => {
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


// POST
router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });


//   GET in range

// router.post("/api/exercise/bulk", ({ body }, res) => {
//   Exercise.insertMany(body)
//     .then(dbExercise => {
//       res.json(dbExercise);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.get("/api/exercise", (req, res) => {
//   Exercise.find({})
//     .sort({ date: -1 })
//     .then(dbExercise => {
//       res.json(dbExercise);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });


  
//   router.post("/api/workout/bulk", ({ body }, res) => {
//     Workout.insertMany(body)
//       .then(dbWorkout => {
//         res.json(dbWorkout);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });
  
//   router.get("/api/workout", (req, res) => {
//     Workout.find({})
//       .sort({ date: -1 })
//       .then(dbWorkout => {
//         res.json(dbWorkout);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });

module.exports = router;