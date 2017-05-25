var Rx = require('rx');

Rx.Observable
    .interval(50)
    .debounce(1000)
    .subscribe((i)=>console.log(i));