'use strict';

module.exports = function(req, res, params){
    console.log('add.param:',params);
    var firstNum = Number(params.shift());
    var secondNum = Number(params.shift());
    var result = firstNum + secondNum;
    console.log('result:', result);
    res.end(`Sum = ${result}`);
}
