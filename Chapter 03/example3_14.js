var Rx = require('rx');

var myAsyncComputation = function(name,callback){
    setTimeout(()=>{
        callback(null,'Finished computation for '+name);
},100);
};

var observableFromCallback = Rx.Observable.fromCallback(myAsyncComputation);

observableFromCallback('John Doe')
        .subscribe((result)=> console.log(result));