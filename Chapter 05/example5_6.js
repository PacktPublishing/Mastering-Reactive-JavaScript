var Rx = require('rx');

var subject = new Rx.Subject();
var sampledObserver = subject.sample(50);

sampledObserver.subscribe(
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