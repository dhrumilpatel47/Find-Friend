var friendData 		= require('../data/friends');
var path 			= require('path');


var different = 0;

module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friends);
    });
    
    app.post('/api/friends', function(req, res){

		var match = {
			name: "",
			image: "",
			matchDifference: 1000
		};
		var userData 	= req.body;
		var userName 	= userData.name;
		var userImage 	= userData.image;
		var userScores 	= userData.scores;

        var different = 0;
        