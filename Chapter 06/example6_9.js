var Rx = require('rx');

Rx.Observable
  .forkJoin(
    Rx.Observable.fromPromise(Promise.resolve(1)),
    Rx.Observable.just(2)
  ).subscribe((k)=>console.log(k));
