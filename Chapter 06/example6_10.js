var Rx = require('rx');

Rx.Observable
  .forkJoin(
    Rx.Observable.fromPromise(Promise.resolve(1)),
    Rx.Observable.interval(100)
  ).subscribe((k)=>console.log(k));
