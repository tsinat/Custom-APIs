'use strict';


module.exports = function(req, res, params) {
    console.log('math:', params);
    var operator = params.shift();
    console.log('operator:', operator);
    // console.log('checker:', firstNum, operator, secondNum);
    switch (operator) {
        case 'sum':
            require('./add')(req, res, params);
            break;
        case 'sub':
            require('./subtract')(req, res, params);
            break;
        case 'mult':
            require('./multiply')(req, res, params);
            break;
        case 'div':
            require('./divide')(req, res, params);
            break;
        case 'pow':
            require('./power')(req, res, params);
            break;
        default:
            res.statusCode = 404;
            res.write('Not found');
            res.end('\n');

    }
}
