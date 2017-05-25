var Rx = require('rx');

Rx.Observable.catch(
  Rx.Observable.just('Hello'),
  Rx.Observable.just('Hello again')
).subscribe(
  (m)=> console.log(m),
  (e)=> console.log('Error found')
);



