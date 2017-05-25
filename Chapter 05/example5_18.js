var Rx = require('rx');

Rx.Observable
    .interval(50)
    .filter((i)=>i<10)
.bufferWithTime(150)
    .subscribe((arr)=>console.log(arr));
