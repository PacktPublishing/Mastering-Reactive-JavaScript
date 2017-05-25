var Rx = require('rx');

var subject = new Rx.Subject();
var pausableObservable = subject.pausable();

pausableObservable.subscribe(
    (i)=> console.log(i),
    (err)=>console.log(err),
    ()=>console.log('Finished')
);

pausableObservable.pause();

subject.onNext(0);
subject.onNext(1);

setTimeout(()=>{
    subject.onNext(2);
subject.onNext(3);
subject.onCompleted();
},200);
setTimeout(()=>{
    pausableObservable.resume();
},2000);