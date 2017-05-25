var Rx = require('rx');

var initialObservable = Rx.Observable.of(1,2,3);
var initialMappedObservable = initialObservable
          .map((num)=>num*2);
var initialMappedAndFilteredObservable = initialMappedObservable
          .filter((num)=> num>2);
initialMappedAndFilteredObservable.subscribe((num)=>console.log(num));
