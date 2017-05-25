var Rx = require('rx');

Rx.Observable.create(function(source){
    source.onNext(0);
    source.onNext(1);
    source.onNext(2);
    source.onCompleted();
}).subscribe((i)=> console.log(i));