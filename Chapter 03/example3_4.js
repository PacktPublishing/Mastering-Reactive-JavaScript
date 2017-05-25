var Rx = require('rx');

var set = new Set([0,1,2]);
Rx.Observable
    .from(set)
    .subscribe((a)=>console.log(a));