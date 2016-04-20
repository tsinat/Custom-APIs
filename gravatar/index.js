'use strict';


module.exports = function(req, res, params){
    console.log('gravatar. index:', params);
    var mystring = params.shift();
    if(mystring ==''){
        res.end('File not found');
    }
    console.log(mystring);
    // mystring.toLowerCase();
    switch(mystring){
        case 'avatar':
            require('./avatar')(req, res, params);
            break;
        default:
            res.statusCode = 404;
            res.write('Not found');
            res.end('\n');

     }
}
