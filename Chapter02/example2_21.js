var Bacon = require("baconjs");

Bacon
    .interval(1000)
    .map(
    ()=> 'a second has passed'
)
.onValue((str)=> console.log(str));