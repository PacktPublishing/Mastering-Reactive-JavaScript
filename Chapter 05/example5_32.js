var Rx = require('rx');

Rx.Observable
    .of(2,4,5,6)
    .takeWhile((i)=>i%2===0)
.subscribe((i)=>console.log(i));