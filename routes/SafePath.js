exports.view = function(req, res){
    var start = req.params.start;
    var dest = req.params.destination;
    res.render('safePath', {
        'start': start,
        'destination' : dest

    });
};

