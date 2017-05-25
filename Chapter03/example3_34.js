var Rx = require('rx');

Rx.Observable
    .just('Hello World!!!')
    .subscribe(
    (message)=>console.log(message),
    (err)=>console.log('An error happened: '+err.message),
    ()=>console.log('END')
);