
var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead('200',{"content-type":"text/plain"});
    res.write("You server is  now.");
    res.end();
}).listen(3000,()=>console.log('server is running on 3000'));

