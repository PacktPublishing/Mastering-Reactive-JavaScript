var Rx = require('rx');

Rx.Observable
  .just(1)
  .concat(Rx.Observable.just(2))
  .subscribe((k)=>console.log(k));
