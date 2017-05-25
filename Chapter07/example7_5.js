var Rx = require('rx');

var observer = Rx.Observer
.create(
  (data)=> console.log(data),
  (e)=> console.log('ERROR'),
  ()=>console.log('finished')
);

Rx.Observable
.throw(new Error('An error occurred'))
.subscribe(observer);
