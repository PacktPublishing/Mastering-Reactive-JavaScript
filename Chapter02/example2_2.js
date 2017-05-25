var Bacon = require("baconjs");
var fs = require('fs');
var FILE_PATH = 'example1_1.html';
var readStream = fs.createReadStream(FILE_PATH,'utf8');

readStream.on('data',(content)=>console.log(content));

var eventStream = Bacon.fromEvent(readStream,'data');
eventStream
    .onValue((content)=> console.log(content));

