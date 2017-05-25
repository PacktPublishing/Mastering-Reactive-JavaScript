var Rx = require('rx');

Rx.Observable.generate(
    0,
    (i) => i<3,
    (i) => i+1,
    (i) => i
).subscribe((i) => console.log(i));