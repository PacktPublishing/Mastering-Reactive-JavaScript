var Rx = require('rx');

Rx.Observable
    .fromPromise(Promise.resolve('Hello World'))
.subscribe((result)=> console.log(result));