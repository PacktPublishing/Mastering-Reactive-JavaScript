var Rx = require('rx');


Rx.Observable
    .return('Hello World')
        .subscribe((i)=> console.log(i));