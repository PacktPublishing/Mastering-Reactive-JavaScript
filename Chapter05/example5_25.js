var Rx = require('rx');

var controllableObservable = Rx.Observable
    .of(0,1)
    .controlled();
controllableObservable.subscribe((i)=>console.log(i));
controllableObservable.request(3);