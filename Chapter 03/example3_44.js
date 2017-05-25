var Rx = require('rx');

var disposable = Rx.Disposable
        .create(()=>console.log('Releasing allocated resources'));

disposable.dispose();