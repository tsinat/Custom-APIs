'use strict';
var http = require('http');
var md5 = require('md5');

module.exports = function(req,res, params){
    console.log('gravatar.avatar.js')
    var email = md5(params.shift());
    console.log(email);
    if(email != undefined){
        res.write(`${email}\n`);
    }
    else {
        res.write('File not found');
    }
    res.end('\n');
}
