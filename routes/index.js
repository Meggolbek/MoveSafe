/*
 * GET home page.
 */

exports.view = function(req, res){
    res.render('index', {
        'row1': [
            {'place': 'ATM',
              'id': 'index-atm-button'
            },
            {'place': 'Gas Station',
                'id': 'index-gas-button'
            }
        ],
        'row2': [
            {'place': 'Bar',
                'id': 'index-bar-button'
            },
            {'place': 'Restaurant',
                'id': 'index-restaurant-button'
            }
        ]
    });
};


