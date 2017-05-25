var Rx = require('rx');

var firstDisposable = Rx.Disposable
        .create(()=>console.log('disposing first'));
var secondDisposable = Rx.Disposable
        .create(()=>console.log('disposing second'));

var composite = new Rx.CompositeDisposable(firstDisposable,secondDisposable);

composite.dispose();