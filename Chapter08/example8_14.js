var Rx = require('rx');

Rx.Observable
  .throw(new Error('ERROR'))
  .finally(()=>console.log('FINALLY'))
  .subscribe((i)=>console.log(i));

