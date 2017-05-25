var Rx = require('rx');
var request = require('request-promise');

var parser = {
  getPageObservable: (url)=>Rx.Observable.fromPromise(request(url)),
  parseContentObservable: (observable)=> observable
    .flatMap((str)=>Rx.Observable.
      fromArray(str.replace( /\D+/g, ' ').split(' '))
    )
    .filter((m)=>m!=''),
  getAndParseUrl: function(url){
    var observable = this.getPageObservable(url);
    return this.parseContentObservable(observable);
  }
};

parser.getAndParseUrl('http://www.google.com')
  .subscribe((m)=>console.log(m));
module.exports = parser;

