var Bacon = require("baconjs");

var eventStream = Bacon
        .interval(1000)
        .map(
        ()=> 'a second has passed'
);
eventStream
    .onValue((str)=>console.log('Subscriber 1 prints => ' + str));
eventStream
    .onValue((str)=>console.log('Subscriber 2 prints => ' + str));
eventStream
    .onValue((str)=>console.log('Subscriber 3 prints => ' + str));