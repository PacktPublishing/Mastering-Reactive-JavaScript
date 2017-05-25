var Rx = require('rx');

Rx.Observable
    .of('Hello World')
    .subscribe((i)=>console.log(i));