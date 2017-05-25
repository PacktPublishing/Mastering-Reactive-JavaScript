var Bacon = require("baconjs");

var eventStream = Bacon
    .sequentially(100,['a','b','c','d']);

eventStream.onValue((value)=>{
    console.log('From the eventStream :'+value);
});

var property = eventStream.scan('=> ',(acc,b)=> acc+b);

property.onValue((value)=>{
    console.log('From the property :'+value);
});