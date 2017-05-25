var t = require('transducers-js');
var Rx = require('rx');

var mapTransducer = t.map((i)=>i+1);

Rx.Observable
  .of(1,2,3,4)
  .transduce(mapTransducer)
  .subscribe((i)=>console.log(i));

var resultArray = t.into(
  [],
  mapTransducer,
  [1,2,3,4]
);
console.log(resultArray);
