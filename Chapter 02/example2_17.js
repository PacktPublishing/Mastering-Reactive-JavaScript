var Bacon = require("baconjs");

var eventSource = Bacon
    .interval(1000);

eventSource
    .onValue(()=>{
    console.log(new Date());
});