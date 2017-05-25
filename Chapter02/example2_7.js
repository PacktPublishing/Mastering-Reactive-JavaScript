var Bacon = require("baconjs");

Bacon
    .sequentially(100,['a','b','c','d'])
.scan('=> ',(acc,b)=> acc+b)
    .onValue((value)=>console.log(value));
