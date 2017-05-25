var Rx = require('rx');

var observableWithError = Rx.Observable.create(function(source){
  source.onNext(1);

  source.onError(new Error('An error occurred'));

  source.onNext(2);
  source.onCompleted();
});
var helloObservable = Rx.Observable.just('Hello');
var helloAgainObservable = Rx.Observable.just('Hello again');

Rx.Observable.onErrorResumeNext(
  observableWithError,    
  helloObservable,
  helloAgainObservable
).subscribe(
  (m)=> console.log('onErrorResumeNext operator propagated ===> ' + m),
  (e)=> console.log('Error found')
);

Rx.Observable.catch(
  observableWithError,
  helloObservable,
  helloAgainObservable
).subscribe(
  (m)=> console.log('catch operator propagated===> '+m),
  (e)=> console.log('Error found')
);
