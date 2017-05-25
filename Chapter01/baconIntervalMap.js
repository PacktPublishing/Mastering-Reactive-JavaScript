var Bacon = require("baconjs");

Bacon
    .interval(1000)
    .map(()=>new Date())
.onValue((currentDate)=>console.log(currentDate));
