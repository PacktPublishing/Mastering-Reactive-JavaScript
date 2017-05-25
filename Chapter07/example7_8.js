var Rx = require('rx');

var observableWithError = Rx.Observable.create(function(source){
    source.onNext(1);

    source.onError(new Error('An error occurred'));

    source.onNext(2);
    source.onCompleted();
});

Rx.Observable.catch(
  observableWithError,    
  Rx.Observable.just('Hello')
).subscribe(
  (m)=> console.log(m),
  (e)=> console.log('Error found')
);


