const express = require("express");
const mongoose = require("mongoose");
var path = require("path");

// Server port
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Establish mongoose db connect
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessTracker",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .catch((error) => console.log(error.reason));

// Controller/Routes
require("./views/htmlRender")(app);
require("./controllers/controller")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});