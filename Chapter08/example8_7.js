var Rx = require('rx');

Rx.Observable
  .interval(100)
  .filter(
    (i)=> i%3
  )
  .take(4)
  .subscribe((i)=>console.log(i));
