var Bacon = require("baconjs");
Bacon
    .interval(100)
    .onValue((event)=>{
    console.log(event);
});
