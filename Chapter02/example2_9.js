var Bacon = require("baconjs");

Bacon
    .fromArray([1,2,3,4,5])
    .onValue((number)=>console.log(number));
