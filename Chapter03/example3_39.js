var Rx = require('rx');

var subject = new Rx.AsyncSubject();

subject.subscribe(
    (message)=> console.log(message),
    (err)=>console.log('An error happened: '+err.message),
    ()=>console.log('END')
);

subject.onNext('Hello World!!!');
subject.onCompleted();