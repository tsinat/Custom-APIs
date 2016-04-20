'use strict';


module.exports = function(req, res, params){
    console.log('age:', params);
    var mydate = Number(params.shift());
    var today=new Date();
    var age =today.getFullYear()-mydate;
    res.end(`You Are: ${age}`);


}
