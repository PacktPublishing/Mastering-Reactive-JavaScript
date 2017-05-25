var Bacon = require("baconjs");

var unsubscribe = Bacon
        .interval(1000)
        .onValue(()=>(console.log("event happened")));

setTimeout(function(){
    console.log("unsubscribing")
    unsubscribe();
},4000);