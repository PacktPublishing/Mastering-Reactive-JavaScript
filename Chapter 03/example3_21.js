var Rx = require('rx');

Rx.Observable
    .of(0,1,2)
    .subscribe((i)=>console.log(i));