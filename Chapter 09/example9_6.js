var t = require('transducers-js');
var Rx = require('rx');

var mapTransducer = t.map((i)=>i+1);
var filterTransducer = t.filter((i)=>i%2===0);
var composedTransducer = t.comp(mapTransducer,filterTransducer);

Rx.Observable
  .of(1,2,3,4)
  .transduce(composedTransducer)
  .subscribe((i)=>console.log(i));

