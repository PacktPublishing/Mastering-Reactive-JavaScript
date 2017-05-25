var Rx = require('rx');

Rx.Observable
    .defer(function(){
        return Rx.Observable.just('Hello World');
    })
    .subscribe((data)=>console.log(data));