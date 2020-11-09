// Requiring our models for syncing
var db = require("../models");
const mongojs = require("mongojs");

module.exports = function (app) {
  // Gets all the workout records from mongodb
  app.get("/api/workouts", (req, res) => {
    db.fitnessTracker.find({})
      .then(dbResp => {
        res.json(dbResp);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // Gets all the workout records from mongodb
  app.get("/api/workouts/range", (req, res) => {
    db.fitnessTracker.find({})
      .then(dbResp => {
        res.json(dbResp);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // Inserts a new exercise into workouts collection, using its id
  app.put("/api/workouts/:id", (req, res) => {
    db.fitnessTracker.update(
      {
        _id: mongojs.ObjectId(req.params.id)
      },
      {
        $push: { exercises: req.body }
      }).then(dbUser => {
        res.json(dbUser);
      }).catch(err => {
        res.json(err);
      });
  });

  // Creates a new workout document and return its id for frontend use
  app.post("/api/workouts", (req, res) => {
    db.fitnessTracker.create({
      day: new Date()
    }).then(dbUser => {
      res.json(dbUser);
    }).catch(err => {
      res.json(err);
    });
  });
}