var Rx = require('rx');

var observer = Rx.Observer.create(
            (message)=> console.log(message),
    (err)=>console.log('An error happened: '+err.message),
    ()=>console.log('END')
);

Rx.Observable
    .just('Hello World!!!')
    .subscribe(observer);