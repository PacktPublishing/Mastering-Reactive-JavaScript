var Rx = require('rx');

var namesObservable = Rx.Observable.of('John', 'Mary');

var lastNamesArray = ['Doe', 'Jane'];

namesObservable
  .zipIterable(lastNamesArray)
  .subscribe((k)=>console.log(k));
