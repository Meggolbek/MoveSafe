exports.view = function(req, res){
	var start = req.body.start;
    var destination = req.body.destination;
    res.render('safePath', {
        'start': start,
        'destination' : destination
    });
};


