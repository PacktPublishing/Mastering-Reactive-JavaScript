var t = require('transducers-js');
var iterableObject = [1,2,3,4];
var mapTransducer = t.map((i)=>i+1);
var result = t.into(
  [],
  mapTransducer,
  iterableObject
);

console.log(result);
