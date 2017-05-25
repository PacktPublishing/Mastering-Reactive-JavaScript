var Rx = require('rx');

Rx.Observable
  .of('Joe DiMaggio','Friedrich Nietzsche','Nayara Neves','Marco Antonio')
  .map((name)=>name.split(' ')[1])
  .filter((name)=>name.indexOf('N')===0)
  .subscribe((result)=>console.log(result));

