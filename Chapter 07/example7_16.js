var Rx = require('rx');

var observableWithError = Rx.Observable.create(function(source){
  source.onNext('hello');

  source.onError(new Error('An error occurred'));

  source.onNext('hello again');
  source.onCompleted();
});

Rx.Observable.merge(
  observableWithError,
  Rx.Observable.interval(100).take(4)
).subscribe(
  (m)=>console.log(m),
  (e)=>console.log('Error')
);
