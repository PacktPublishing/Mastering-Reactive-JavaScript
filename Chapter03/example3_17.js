var Rx = require('rx');

var promiseFactory = () => Promise.resolve('Hello World')
Rx.Observable
    .fromPromise(promiseFactory)
    .subscribe((result)=> console.log(result));