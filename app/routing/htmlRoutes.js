//Dependencies
var path = require('path');

// Routes
// =============================================================
module.exports = function(app){
  //default GET route that leads to home.html - displays home page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname,"/../public/survey.html"));
    console.log(__dirname)
  });

  //a USE route to home page
  app.get("/", function (req, res) {
      res.sendFile(path.join(__dirname + '/../public/home.html'));
      console.log(__dirname)
  });
};