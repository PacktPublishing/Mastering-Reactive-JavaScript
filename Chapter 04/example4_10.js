var Rx = require('rx');

Rx.Observable
    .of(1,2,3)
    .reduce((acc,current)=>acc+current)
.subscribe((i)=>console.log(i));