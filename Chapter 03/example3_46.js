var Rx = require('rx');

var disposable = Rx.Disposable.create(function () {
    console.log('releasing connection');
});

var refCountDisposable = new Rx.RefCountDisposable(disposable);

var firstDisposable = refCountDisposable.getDisposable();
var secondDisposable = refCountDisposable.getDisposable();

firstDisposable.dispose();
secondDisposable.dispose();

console.log('first and second disposed. Disposing refCount');

refCountDisposable.dispose();