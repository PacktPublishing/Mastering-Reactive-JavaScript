var Rx = require('rx');

var map = new Map([['key0',0],['key1',1],['key2',2]]);
Rx.Observable
    .from(map)
    .subscribe((a)=>console.log(a));