var Rx = require('rx');

Rx.Observable
    .just('Hello World')
        .subscribe((i)=> console.log(i));