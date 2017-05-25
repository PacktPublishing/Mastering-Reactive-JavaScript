var mapAndFilter = require('./example9_7');
var assert = require('assert');
var Rx = require('rx');
var t = require('transducers-js');
describe('Transducer test', function() {
  it('should return empty when running for empty observables', function(done) {
    var found = false;
    Rx.Observable.empty()
      .transduce(mapAndFilter)
      .subscribe(
      function(){
        found = true;
      },
      function noop(){},
      function(){
        assert.equal(false,found);
        done();
      }
    );
  });
  it('should propagates 2,4 when running for an observable containing 1,2,3,4', function(done) {
    Rx.Observable.of(1,2,3,4)
      .transduce(mapAndFilter)
      .toArray()
      .subscribe(
        function(value){
          assert.equal(2,value.length);
          assert.equal(2,value[0]);
          assert.equal(4,value[1]);
        },
        function noop(){},
        function(){
          done();
        }
    );
  });
  it('should return empty when running for empty data sources',function(){
    var dataSource = [];
    var result = t.into(
      [],
      mapAndFilter,
      dataSource
    );
    assert.equal(0,result.length);
  });
  it('should propagates 2,4 when running for a data source containing 1,2,3,4',function(){
    var dataSource = [1,2,3,4];
    var result = t.into(
      [],
      mapAndFilter,
      dataSource
    );
    assert.equal(2,result.length);
    assert.equal(2,result[0]);
    assert.equal(4,result[1]);
  });
});
