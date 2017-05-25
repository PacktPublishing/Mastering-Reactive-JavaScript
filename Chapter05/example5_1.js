var Rx = require('rx');

Rx.Observable
    .interval(50)
    .subscribe((i)=>console.log(i));