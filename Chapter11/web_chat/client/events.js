var Rx = require('rx');

var sendPressedObservable = Rx.Observable
    .fromEvent(document.getElementById('send_message'),'click');

var enterPressedObservable = Rx.Observable
    .fromEvent(document.getElementById('message_input'),'keypress')
    .filter(function(event){
        var ENTER_KEY_CODE=13;
        return event.keyCode===ENTER_KEY_CODE || event.which===ENTER_KEY_CODE;
    });

var messageSubmitObservable = sendPressedObservable
    .merge(enterPressedObservable)
    .map(function(){
        return document.getElementById('message_input').value;
    }).filter(function(message){
        return message !="";
    }).do(function(){
        document.getElementById('message_input').value='';
    });

module.exports=messageSubmitObservable;

Rx.Observable
    .fromEvent(document.getElementById('message_input'),'click')
    .bufferWithTimeOrCount(800,3)
    .filter(function(events){
        return events.length === 3;
    }).subscribe(function(){
        document.getElementById('message_input').value='/roll_a_dice';
    });
