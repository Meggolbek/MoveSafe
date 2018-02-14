/*
 * GET home page.
 */
exports.view = function(req, res){
    var data = require("../safetyTips.json");
    var random = Math.floor((Math.random()*16));
    var tip = data.tips[random];
    console.log(tip);
    res.render('index', {
        'tip':tip,
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


