var Rx = require('rx');

Rx.Observable.of(
  Rx.Observable.just(1),
  Rx.Observable.fromPromise(Promise.resolve(2)),
  Rx.Observable.of(3,4)
).mergeAll()
.subscribe((k)=>console.log(k));
