var Rx = require('rx');

var namesObservable = Rx.Observable.of('John', 'Mary');

var lastNamesObservable = Rx.Observable.of('Doe', 'Jane');

Rx.Observable.zip(
    namesObservable,
    lastNamesObservable,
    (name,lastName) => name + ' ' + lastName 
).subscribe((k)=>console.log(k));
