//imports
const express = require('express');

//instantiate server
const server = express();

//Configure routes
server.get('/', function (req, res){
    res.setHeader('Content-Type','text/html');
    res.status(200).send('<h1>Hello sick world</h1>');
});

//Launch server
server.listen(3000, function() {
    console.log('listening');
});