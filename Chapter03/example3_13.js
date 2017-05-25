var Rx = require('rx');

var myAsyncComputation = function(name,callback){
    setTimeout(()=>{
        callback(null,'Finished computation for '+name);
},100);
};

myAsyncComputation('John Doe',(err,result)=>console.log(result));