var Rx = require('rx');

var subject = new Rx.Subject();

var controlledObservable = subject.controlled();

controlledObservable.subscribe(
    (i)=> console.log(i),
    (err)=>console.log('An error happened ' + err.message),
    ()=>console.log('Finished')
);

subject.onNext(0);
subject.onNext(1);
subject.onNext(2);

subject.onError(new Error(':('));

subject.onNext(3);
subject.onCompleted();

controlledObservable.request(5);