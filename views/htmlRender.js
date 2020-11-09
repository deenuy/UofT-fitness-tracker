var path = require("path");


module.exports = function (app) {
  // Redirects browser to exercise page
  app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
  
  // Redirects browser to stats page
  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
}