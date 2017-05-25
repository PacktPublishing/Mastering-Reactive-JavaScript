var Rx = require('rx');

Rx.Observable
  .throw(new Error('An error occurred'))
  .catch(Rx.Observable.throw(new Error('Another error occurred')))
  .catch(Rx.Observable.just('Hello'))
  .subscribe(
    (m)=> console.log(m),
    (e)=> console.log('Error found')
  );



