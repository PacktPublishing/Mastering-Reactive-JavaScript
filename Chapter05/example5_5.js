var Rx = require('rx');

Rx.Observable
    .interval(50)
    .sample(Rx.Observable.interval(1000))
    .subscribe((i)=>console.log(i));