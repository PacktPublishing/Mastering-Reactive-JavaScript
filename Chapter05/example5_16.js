var Rx = require('rx');

var randomNumbersObservable = Rx.Observable
        .interval(100)
        .map((i)=>Math.floor(Math.random()*100));

randomNumbersObservable
    .bufferWithCount(5,1)
    .map((arr)=>{
    var sum = arr.reduce((acc,b)=>acc+b);
return sum/arr.length;
})
.subscribe((i)=>console.log('The average of the last five items is: '+i));