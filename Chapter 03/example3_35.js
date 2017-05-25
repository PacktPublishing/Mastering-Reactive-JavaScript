var Rx = require('rx');

var subscription = Rx.Observable
            .interval(100)
            .subscribe(
            (message)=>console.log(message),
    (err)=>console.log('An error happened: '+err.message),
    ()=>console.log('END')
);

setTimeout(()=>subscription.dispose(),290);