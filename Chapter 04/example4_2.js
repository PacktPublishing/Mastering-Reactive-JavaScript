var Rx = require('rx');

Rx.Observable
  .of(1,2,3)
  .map((num)=>num*2)
  .filter((num)=> num>2)
  .subscribe((num)=>console.log(num));
