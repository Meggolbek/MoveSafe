exports.view = function(req, res){
	var start = req.body.start;
    var destination = req.body.destination;
    console.log("post received: %s %s COUCOU" , start, destination);
    res.render('safePath', {
        'start': start,
        'destination' : destination
    });
};


