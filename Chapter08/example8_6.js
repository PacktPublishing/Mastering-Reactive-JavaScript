var Rx = require('rx');
module.exports = function(observable,filter){
    return observable.flatMap(
      (data)=>{
        if(filter(data)){
          return Rx.Observable.just(data);
        }else{
          return Rx.Observable.empty();
        }
      }
    );
};

