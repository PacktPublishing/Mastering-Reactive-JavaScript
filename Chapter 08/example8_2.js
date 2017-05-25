var Rx = require('rx');

Rx.Observable
  .of(1,2,3)
  .map((i)=>'received number => '+i)
  .subscribe((i)=>console.log(i));
