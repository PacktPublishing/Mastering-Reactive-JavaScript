var Rx = require('rx');

var defaultValue = 'no even numbers';
Rx.Observable
    .of(1,3,5)
    .first((i)=>i%2===0,null,defaultValue)
.subscribe((i)=>console.log(i));