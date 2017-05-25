var Rx = require('rx');
var io = require('socket.io-client');
var socket = io('http://localhost:3000');

var connectionObservable = Rx.Observable.fromEvent(socket,'connect');
var disconnectObservable = Rx.Observable.fromEvent(socket,'disconnect');

module.exports = {
    addSender:function(observable){
        connectionObservable
            .flatMap(observable)
            .takeUntil(disconnectObservable)
            .map(function(data){
                return JSON.stringify(data);
            })
            .subscribe(function(data){
                socket.emit('request',data);
            });
    },
    listen:function(event){
        var eventObservable = Rx.Observable.fromEvent(socket,event);
        return connectionObservable
            .flatMap(eventObservable)
            .takeUntil(disconnectObservable);
    }
};
