var Rx = require('rx');

Rx.Observable
    .of(0,1,2,3,4)
    .bufferWithCount(2)
    .subscribe((i)=> console.log(i));