var Rx = require('rx');

var observable = Rx.Observable.create(function(source){
  source.onNext(1);
  source.onError(new Error('An error occurred'));
  source.onNext(2);
  source.onCompleted();
});

observable.subscribe(
  (data)=> console.log(data),
  (e)=> console.log('ERROR'),
  ()=>console.log('finished')
);

