var Rx = require('rx');

Rx.Observable.create(function(source){
    source.onNext(0);
    source.onNext(1);
    source.onError(new Error('ops'));
    source.onNext(2);
    source.onCompleted();
}).subscribe(
    (i)=> console.log(i),
    (err)=> console.log('An error happened: '+err.message )
);