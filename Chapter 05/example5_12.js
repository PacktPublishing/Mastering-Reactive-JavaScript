var Rx = require('rx');

Rx.Observable
    .interval(50)
    .bufferWithCount(2)
    .subscribe((arr)=>console.log(arr));