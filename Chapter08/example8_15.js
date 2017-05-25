var Rx = require('rx');

Rx.Observable
  .of(0,1,2,3,4,5)
  .groupBy((i)=>i%2)
  .subscribe((obs)=>{
    obs.toArray().subscribe((arr)=>console.log(arr))
  });
