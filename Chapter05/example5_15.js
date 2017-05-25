var Rx = require('rx');

var observable = Rx.Observable.interval(1000);

var observableWithDefaultSkip = observable.bufferWithCount(4);
var observableWithSkipOne = observable.bufferWithCount(4,1);

observableWithDefaultSkip.subscribe((arr)=>console.log('with default skip :'+arr));
observableWithSkipOne.subscribe(
    (arr)=>console.log('with default skip equals to one:'+arr)
);