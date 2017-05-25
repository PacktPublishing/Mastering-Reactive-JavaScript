var Rx = require('rx');

Rx.Observable
    .timer(1000,500)
    .subscribe((i)=> console.log(i));