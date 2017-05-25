var Bacon = require("baconjs");

Bacon
    .interval(1000)
    .onValue(()=>(console.log("event happened")));