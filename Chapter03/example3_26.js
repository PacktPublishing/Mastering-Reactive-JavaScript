var Rx = require('rx');

Rx.Observable
    .throw(1)
    .subscribe(
    (data)=>console.log(data),
    (err)=>{
    console.log('Running the subscription function for error');
    console.log(err.message)
}
);