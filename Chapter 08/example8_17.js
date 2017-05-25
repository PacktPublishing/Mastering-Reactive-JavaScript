var Rx = require('rx');

Rx.Observable
  .of('Joe DiMaggio','Friedrich Nietzsche','Nayara Neves','Marco Antonio')
  .map((name)=>name.split(' ')[1])
  .do((data)=>console.log('[DEBUG] Data after map operator: '+data))
  .filter((name)=>name.indexOf('N')===0)
  .do((data)=>console.log('[DEBUG] Data after filter operator:'+data))
  .subscribe((result)=>console.log(result));
