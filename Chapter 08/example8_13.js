var Rx = require('rx');

Rx.Observable
  .just(1)
  .finally(()=>console.log('FINALLY'))
  .subscribe((i)=>console.log(i));
