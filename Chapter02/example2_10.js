var Bacon = require("baconjs");

var initialValue =0;
Bacon
    .fromArray([1,2,3,4,5])
    .toProperty(initialValue)
    .onValue((number)=>console.log(number));