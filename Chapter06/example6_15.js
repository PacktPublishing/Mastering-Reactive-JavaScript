var Rx = require('rx');

Rx.Observable
  .zip(
    Rx.Observable.interval(100),
    Rx.Observable.just('second'),
    Rx.Observable.of('third', 'more on third observable')
  ).subscribe((k)=>console.log(k));
