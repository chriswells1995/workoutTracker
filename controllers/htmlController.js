// *********************************************************************************
//- this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const path = require("path");
const express = require('express');
const router = express.Router();

// Routes
// =============================================================

  // Each of the below routes just handles the HTML page that the user gets sent to.

  router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });


  router.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });


  router.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

module.exports = router;