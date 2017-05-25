var Benchmark = require('benchmark')
var suite = new Benchmark.Suite;
var Rx = require('rx');
var t = require('transducers-js');

var values = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
var mapFunction = (i)=>i+1;
var filterFunction = (i)=>i%2===0;

// add tests
suite.add('Transducer', function(deferred) {
  var mapTransducer = t.map(mapFunction);
  var transducer = t.comp(
    mapTransducer,
    mapTransducer,
    mapTransducer,
    t.filter(filterFunction)
  );
  Rx.Observable.fromArray(values)
    .transduce(transducer)
    .subscribe(function(){},function(){},function(){
      deferred.resolve();
    });
},{defer:true})
.add('Map/Filter', function(deferred) {
  Rx.Observable.fromArray(values)
    .map(mapFunction)
    .map(mapFunction)
    .map(mapFunction)
    .filter(filterFunction)
    .subscribe(function(){},function(){},function(){
      deferred.resolve();
    });
},{defer:true})
.on('cycle', function(event) {
  console.log(event.target.toString());
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run();
