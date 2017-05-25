var fs = require('fs');
var Rx = require('rx');

var readStream = fs.createReadStream(__filename,'utf8');
Rx.Observable
    .fromEvent(readStream,'data')
    .subscribe((i)=> console.log(i));
