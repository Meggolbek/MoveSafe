exports.view = function(req, res){
    res.render('safePath', {
        'start': '10060 North Torrey Pines Road',
        'destination' : 'Mandeville Auditorium'

    });
};

