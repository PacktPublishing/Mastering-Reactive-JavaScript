var Rx = require('rx');

Rx.Observable
    .interval(50)
    .debounce(10)
    .subscribe((i)=>console.log(i));
