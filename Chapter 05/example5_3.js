var Rx = require('rx');

var subject = new Rx.Subject();

var throttledObserver = subject.throttle(50);

throttledObserver.subscribe(
    (i)=> console.log(i),
    (err)=>console.log(err),
    ()=>console.log('Finished')
);

subject.onNext(0);
subject.onNext(1);

setTimeout(()=>{
    subject.onNext(2);
subject.onNext(3);
subject.onCompleted();
},200);