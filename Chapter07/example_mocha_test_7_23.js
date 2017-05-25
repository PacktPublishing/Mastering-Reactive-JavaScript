var assert = require('assert');
var Rx = require('rx');
var parser = require('./example7_22');
describe('Parser test', function(){
    it('should find the number 123', function(done) {
      var found = false;
      parser.parseContentObservable(Rx.Observable.just('some random123 string'))
        .subscribe(function(m){
          assert.equal(123,m);
          found = true;
        },
        function(){},
        function(){
          assert.equal(true,found);
          done()
        })
    });
});

