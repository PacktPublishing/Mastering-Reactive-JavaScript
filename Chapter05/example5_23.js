var Rx = require('rx');

var pausableObservable = Rx.Observable
    .interval(500)
    .pausableBuffered();

pausableObservable.subscribe((i)=>console.log(i));

pausableObservable.pause();

setTimeout(()=>{
    pausableObservable.resume();
},4000);