var Rx = require('rx');

Rx.Observable
    .of(1,2,3)
    .first()
    .subscribe((i)=>console.log(i));