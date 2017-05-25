var Bacon = require("baconjs");

Bacon
    .fromArray([1,2,3])
    .doAction((value)=>
console.log('running doAction')
);