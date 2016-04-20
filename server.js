'use strict'

var http = require('http');
var fs = require('fs');
var md5 = require('md5');


const PORT = 4000;

var server = http.createServer(function(req, res) {
    var params = req.url.split('/');
    params.shift();
    var resource = params.shift();
    console.log('resource:', resource);
    switch (resource) {
        case 'math':
            require('./math')(req, res, params);
            break;
        case 'sentence':
            require('./sentence')(req, res, params);
            break;
        case 'age':
            require('./age')(req, res, params);
            break;
        case 'gravatar.com':
            require('./gravatar')(req, res, params);
            break;
        case '': //url is '/' serve out index
            console.log('It works');
            var data = fs.readFileSync('./public/index.html');
            res.end(data.toString());
            break;
        default:
            fs.readFile(`./public/${resource}`, (err, data) => {
                if (err) { // looking for non existant file
                    res.statusCode = 404;
                    res.write('Not found!');
                    res.end('\n');
                } else {
                    res.end(data.toString());
                }
            });
            // check if they are looking for a file

            //  res.statusCode = 404;
            //  res.write('file Not found ');
            //  res.end('\n');
    }

});

server.listen(PORT, function(err) {
    if (err) return console.log('error:', err);
    console.log(`Node server listening on port ${PORT}`);
});
