var Rx = require('rx');

var namesObservable = Rx.Observable.of("John","Mary")

var helloObservable = namesObservable.map((name)=>"Hello "+name)
helloObservable.subscribe((i)=>console.log(i));

var thanksObservable = namesObservable.map((name)=>name+" thanks for your visit.")
thanksObservable.subscribe((i)=>console.log(i));