var Rx = require('rx');

Rx.Observable
.throw(new Error('An error occurred'))
.subscribe(
  (data)=> console.log(data),
  (e)=> console.log('ERROR'),
  ()=>console.log('finished')
);
