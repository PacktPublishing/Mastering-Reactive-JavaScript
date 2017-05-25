var Rx = require('rx');

Rx.Observable
  .of(1,2,3)
  .flatMapLatest(
    (i)=>Rx.Observable.just(i+1)
  ).subscribe((k)=>console.log(k));
