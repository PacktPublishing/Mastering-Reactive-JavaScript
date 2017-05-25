var Rx = require('rx');

Rx.Observable
    .of(1,3,5)
    .takeLast(2)
    .subscribe((i)=>console.log(i));