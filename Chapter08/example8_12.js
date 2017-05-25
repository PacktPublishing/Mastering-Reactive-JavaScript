var Rx = require('rx');

Rx.Observable
  .interval(50)
  .flatMapFirst(
    (i)=>Rx.Observable.interval(30)
      .map((k)=>'running for: '+i+' flatMapFirst: '+k)
      .take(3)
  ).subscribe((i)=>console.log(i));
