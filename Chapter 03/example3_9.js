var Rx = require('rx');

Rx.Observable
    .range(0, 4)
    .subscribe((i)=>console.log(i));