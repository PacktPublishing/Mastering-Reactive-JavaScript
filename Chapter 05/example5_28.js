var Rx = require('rx');

Rx.Observable
    .of(1,2,3)
    .first((i)=>i%2===0)
.subscribe((i)=>console.log(i));