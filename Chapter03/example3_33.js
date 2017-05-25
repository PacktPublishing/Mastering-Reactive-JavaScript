var Rx = require('rx');

Rx.Observable
    .throw(new Error('ops'))
    .subscribe(
    (message)=>console.log(message),
    (err)=>console.log('An error happened: '+err.message)
);