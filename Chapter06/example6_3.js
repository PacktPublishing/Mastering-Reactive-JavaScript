var Rx = require('rx');

Rx.Observable
  .just(1)
  .concat(Rx.Observable.just(2))
  .concat(Rx.Observable.just('Hello World!!!'))
  .subscribe((k)=>console.log(k));
