var Rx = require('rx');
var request = require('request-promise');

Rx.Observable.fromPromise(
  request('http://www.google.com')
).retry(3)
.subscribe(
  (htmlPage)=>console.log(htmlPage)
);

