var http = require('http');
var dt = require('./myfirstModule');
var fs = require('fs');
var uc = require('upper-case');

http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function (err, data) {
    if(err){
        res.writeHead(404, {'Content-Type' : 'text/html'});
        return res.end();
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.write(uc.upperCase('hello wrold'));
    return res.end();
  });

  fs.appendFile('newfile1.txt', 'Hello Content', function(err){
    if(err) throw err;
    console.log('Saved!');
  });

  // fs.unlink('newfile1.txt', function(err){
  //   if(err) throw err;
  //   console.log('File Deleted!');
  // });
}).listen(8080);