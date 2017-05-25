var Rx = require('rx');

Rx.Observable
    .just('Hello World!!!')
    .subscribe((message)=>console.log(message));