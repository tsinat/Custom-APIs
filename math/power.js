'use strict';

module.exports = function(req, res, params){
    console.log('add.param:',params);
    var firstNum = Number(params.shift());
    var secondNum = Number(params.shift());
    var result =Math.pow( firstNum, secondNum);
    console.log('result:', result);
    res.end(`Power = ${result}`);
}
