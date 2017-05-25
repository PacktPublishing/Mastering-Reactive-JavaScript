var Rx = require('rx');

var subject = new Rx.Subject();

subject.subscribe(
    (message)=> console.log(message),
    (err)=>console.log('An error happened: '+err.message),
    ()=>console.log('END')
);

subject.onNext(0);
subject.onNext(1);
subject.onNext(2);