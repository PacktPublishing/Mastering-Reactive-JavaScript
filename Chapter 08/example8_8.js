var Rx = require('rx');

Rx.Observable
  .of(1,5,0,9,56,-2,13)
  .reduce(function(a,b){
    if(a<b){
      return a;
    }else{
      return b;
    }
  })
  .subscribe((i)=>console.log(i));
