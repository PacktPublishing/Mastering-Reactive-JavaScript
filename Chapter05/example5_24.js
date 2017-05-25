var Rx = require('rx');

var controllableObservable = Rx.Observable
    .interval(100)
    .controlled();

controllableObservable.subscribe((i)=>console.log(i));

controllableObservable.request(2);

setTimeout(()=>{
    console.log("Requesting more");
controllableObservable.request(4);
},3000);