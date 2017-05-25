var t = require('transducers-js');

module.exports = t.comp(
  t.map((i)=>i+1),
  t.filter((i)=>i%2===0)
);
