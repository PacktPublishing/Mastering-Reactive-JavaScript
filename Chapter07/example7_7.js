var Rx = require('rx');

Rx.Observable.catch(
  Rx.Observable.throw(new Error('An error occurred')),
  Rx.Observable.just('Hello')
).subscribe(
  (m)=> console.log(m),
  (e)=> console.log('Error found')
);

