var fs = require('fs');
var Rx = require('rx');

var readStream = fs.createReadStream(__filename);
Rx.Observable
    .fromEvent(readStream,'data',(chunk)=>chunk.toString('utf8'))
.subscribe((i)=> console.log(i));