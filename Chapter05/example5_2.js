var Rx = require('rx');

Rx.Observable
    .interval(50)
    .throttle(1000)
    .subscribe((i)=>console.log(i));
