var Rx = require('rx');

Rx.Observable
  .just('Hello ')
  .map((msg)=>msg+'World')
  .subscribe((msg)=> console.log(msg));
