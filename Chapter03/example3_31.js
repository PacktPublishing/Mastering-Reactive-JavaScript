var Rx = require('rx');

var observable = Rx.Observable.create(function(source){
    source.onNext(0);
    source.onNext(1);
    source.onNext(2);
    source.onCompleted();
    return function(){
        console.log('dispose called: releasing connections or other resources');
    };
});
var subscription = observable.subscribe(
        (i)=> console.log(i)
);
subscription.dispose();