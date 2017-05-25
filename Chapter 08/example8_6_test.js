var assert = require('assert');
var Rx = require('rx');
var filterUsingFlatMap = require('./example8_6');
describe('Test for filter function', function() {
  it('should not propagate any data if the observable is empty', function(done) {
    var eventCalled = false;
    var observable = Rx.Observable.empty();
    filterUsingFlatMap(observable,function noop(){})
      .subscribe(
        function(){eventCalled=true},
        function(){eventCalled=true},
        function(){
          assert.equal(eventCalled,false);
          done();
        }
      )
  });
  it('must propagates all the data if the filter function always returns true', function(done) {
    var counter=0,elements = [1,2];
    var observable = Rx.Observable.fromArray(elements);
    filterUsingFlatMap(observable,function(){return true;})
      .subscribe(
        function(){counter++;},
        function noop(){},
        function(){
          assert.equal(counter,elements.length);
          done();
        }
      )
  });
  it('should not propagate any data if the filter function always return false',function(done){
    var counter=0,elements = [1,2];
    var observable = Rx.Observable.fromArray(elements);
    filterUsingFlatMap(observable,function(){return false;})
      .subscribe(
        function(){counter++;},
        function noop(){},
        function(){
          assert.equal(counter,0);
          done();
        }
      );
  });
  it('must respect the filter',function(done){
    var counter=0,elements = [1,2];
    var elementFound;
    var observable = Rx.Observable.fromArray(elements);
    filterUsingFlatMap(observable,function(i){return i % 2===0;})
      .subscribe(
        function(i){
          counter++;
          elementFound=i;
        },
        function noop(){},
        function(){
          assert.equal(counter,1);
          assert.equal(elementFound,2);
          done();
        }
      )
  });
});
