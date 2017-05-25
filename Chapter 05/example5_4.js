var Rx = require('rx');

Rx.Observable
    .interval(50)
    .sample(1000)
    .subscribe((i)=>console.log(i));