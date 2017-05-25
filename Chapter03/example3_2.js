var Rx = require('rx');

Rx.Observable
    .from([0,1,2], (a) => a*2)
.subscribe((a)=>console.log(a));