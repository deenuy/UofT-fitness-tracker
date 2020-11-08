const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const mongojs = require("mongojs");

var http = require("https");
var db = require("../models");
var path = require("path");


module.exports = function (app) {
  // Redirects browser to exercise page
  app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
  
  // Redirects browser to stats page
  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/stats.html"));
  });
}