
var user = require('../user.json');

exports.view = function(req, res){
    user["viewAlt"]=false;
	var start = req.body.start;
    var destination = req.body.destination;
    console.log("post received: %s %s COUCOU" , start, destination);
    res.render('safePath', {
        'start': start,
        'destination' : destination,
        'viewAlt': false
    });
};


exports.viewAlt = function(req, res){
    var start = req.body.start;
    var destination = req.body.destination;
    console.log("post received: %s %s COUCOU" , start, destination);
    res.render('safePath', {
        'start': start,
        'destination' : destination,
        'viewAlt': true
    });
};


