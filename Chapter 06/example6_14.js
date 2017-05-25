var Rx = require('rx');

Rx.Observable
  .zip(
    Rx.Observable.just(1),
    Rx.Observable.fromPromise(Promise.resolve(2)),
    Rx.Observable.just(3)
  ).subscribe((k)=>console.log(k));
