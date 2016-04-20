'use strict';
var fs = require('fs');

module.exports = function(req, res, params){
    console.log('encoded:', params);
    var str = decodeURIComponent(params);
    // console.log('str:', str);
    var stringArr = str.split(' ');
    // console.log('stringArr:', stringArr);
    var wordCount = stringArr.length;
    // console.log('wordCount:', wordCount);
    var charCount = str.split('').length;
    // console.log('charCount:', charCount);
    var averageWord = parseInt((charCount-(wordCount-1))/wordCount);
    // console.log('averageWord:', averageWord);
    res.write(`wordCount: ${wordCount}\n charCount:${charCount}\n averageWord: ${averageWord}\n`);
    res.end('\n');
}
