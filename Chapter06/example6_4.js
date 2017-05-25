var Rx = require('rx');

Rx.Observable
  .just(1)
  .concat(
    Rx.Observable.interval(1000),
    Rx.Observable.just('Hello World!!!')
  ).subscribe((k)=>console.log(k));
