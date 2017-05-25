var Rx = require('rx');

Rx.Observable
    .timer(1000)
    .subscribe((i)=> console.log(i));