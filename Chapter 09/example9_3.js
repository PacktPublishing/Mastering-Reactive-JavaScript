var t = require('transducers-js');
var iterableObject = [1,2,3,4];
var mapTransducer = t.map((i)=>i+1);
var filterTransducer = t.filter((i)=>i%2===0);
var composedTransducer = t.comp(filterTransducer,mapTransducer);
var result = t.into(
  [],
  composedTransducer,
  iterableObject
);

console.log(result);


