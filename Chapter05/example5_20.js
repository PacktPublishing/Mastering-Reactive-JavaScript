var Rx = require('rx');

Rx.Observable
    .interval(100)
    .bufferWithTimeOrCount(1000,5)
    .subscribe((arr)=>console.log(arr));