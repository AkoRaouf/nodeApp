var http = require('http');
var dt = require('./myfirstModule');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });

  fs.appendFile('newfile1.txt', 'Hello Content', function(err){
    if(err) throw err;
    console.log('Saved!');
  });

  fs.unlink('newfile1.txt', function(err){
    if(err) throw err;
    console.log('File Deleted!');
  });
}).listen(8080);