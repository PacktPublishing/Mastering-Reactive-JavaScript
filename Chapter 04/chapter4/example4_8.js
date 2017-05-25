var Rx = require('rx');

Rx.Observable
    .of(1,2,3)
    .filter((i)=> i % 2 === 1 )
.subscribe((i)=>console.log(i));