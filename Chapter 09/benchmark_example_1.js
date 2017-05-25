var Benchmark = require('benchmark')
var suite = new Benchmark.Suite;

var sum = (a,b)=>a+b;
// add tests
suite.add('Sum using call', function() {
  sum.call(this,1,2);
})
.add('Sum using apply', function() {
  sum.apply(this,[1,2]);
})
.on('cycle', function(event) {
  console.log(event.target.toString());
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run();
