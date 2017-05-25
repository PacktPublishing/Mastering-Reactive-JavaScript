var Bacon = require("baconjs");

Bacon
    .interval(1000)
    .map(
    (i)=> new Date()
)
.filter(
    (date)=>date.getSeconds() % 2 == 0
)
.onValue((date)=>console.log(date));