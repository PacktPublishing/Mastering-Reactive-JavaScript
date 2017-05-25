var Rx = require('rx');

var observable = Rx.Observable.from([0,1,2]);

observable.subscribe((a)=>console.log('first subscriber receives => '+a));

setTimeout(()=>{
    observable.subscribe((a)=>console.log('second subscriber receives => '+a));
},1000);