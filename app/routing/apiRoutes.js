var friendsArray = require('../data/friends.js');

module.exports = function(app){
  //a GET route that displays JSON of all possible friends
  app.get('/api/friends', function(req,res){
      console.log("this is the friends api routes " + __dirname)
    res.json(friendsArray);
  });
};


  
// Displays a single character, or returns false
//   app.get("/api/characters/:character", function(req, res) {
//     var chosen = req.params.character;
  
//     console.log(chosen);
  
//     for (var i = 0; i < characters.length; i++) {
//       if (chosen === characters[i].routeName) {
//         return res.json(characters[i]);
//       }
//     }
  
//     return res.json(false);
//   });
