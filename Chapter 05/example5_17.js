var Rx = require('rx');

Rx.Observable
    .interval(100)
    .bufferWithTime(210)
    .subscribe((arr)=>console.log(arr));