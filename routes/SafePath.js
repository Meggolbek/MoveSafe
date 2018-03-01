exports.view = function(req, res){
	var start = req.body.start;
    var destination = req.body.destination;
    if(start && destination){
        res.render('safePath', {
            'mapView': true,
            'message': '',
            'start': start,
            'destination' : destination
        });
    }
    else if(start){
        res.render('safePath', {
            'mapView': false,
            'message': 'Please enter in a valid destination',
            'start': start,
            'destination' : ''
        })
    }
    else if(destination){
        res.render('safePath', {
            'mapView': false,
            'message': 'Please enter in a valid starting location',
            'start': '',
            'destination': destination
        })
    } else{
        res.render('safePath', {
            'mapView': false,
            'message': 'Please enter in a valid  starting location and destination',
            'start': '',
            'destination': ''
        })
    }
};


