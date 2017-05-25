var Bacon = require("baconjs");

Bacon
    .interval(1000)
    .take(5)
    .map(()=>new Date())
.onValue((currentDate)=>console.log(currentDate));
