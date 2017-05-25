var Rx = require('rx');

Rx.Observable
    .of(0,1,"hello",null,"")
    .filter((i)=> i )
.subscribe((i)=>console.log(i));