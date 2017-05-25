var Rx = require('rx');

Rx.Observable
    .of(1,2,3,4)
    .skip(1)
    .take(2)
    .subscribe((i)=>console.log(i));