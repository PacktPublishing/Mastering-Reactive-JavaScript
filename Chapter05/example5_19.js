var Rx = require('rx');

var randomNumbersObservable = Rx.Observable
        .interval(100)
        .map((i)=>Math.floor(Math.random()*100));

randomNumbersObservable
    .bufferWithTime(5000,1000)
    .map((arr)=>{
    var sum = arr.reduce((acc,b)=>acc+b);
return sum/arr.length;
})
.subscribe((i)=>console.log('The average of the last five second is: '+i));