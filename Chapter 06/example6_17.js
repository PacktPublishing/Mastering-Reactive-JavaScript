var Rx = require('rx');

var namesObservable = Rx.Observable.of('John', 'Mary');

var lastNamesArray = ['Doe', 'Jane'];

namesObservable
  .zipIterable(
    lastNamesArray,
    (name,lastName) => name + ' ' + lastName
  ).subscribe((k)=>console.log(k));
