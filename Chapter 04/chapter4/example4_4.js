var Rx = require('rx');

Rx.Observable
    .of(1,2,3)
    .map((i)=>i*2)
.subscribe((i)=>console.log(i));