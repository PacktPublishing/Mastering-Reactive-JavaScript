var Rx = require('rx');

Rx.Observable
  .of(1,2,3)
  .flatMap((i)=>i+1)
  .subscribe((i)=>console.log(i));

