var Rx = require('rx');
var connection = require('./connection');
var events = require('./events');

var logged =  prompt("Please enter your name", "");

var messagesObservable = events.map(function(value){
        var userName,splittedUserInput,action,content;
        if(value.indexOf('!')===0){
            userName = value.substring(1);
            return {service:'blockUser',blocked:userName,from:logged};
        }
        if(value.indexOf('/')===0){
            splittedUserInput = value.split(' ');
            action = splittedUserInput[0].substring(1);
            content = splittedUserInput.slice(1).join(' ');
            return {service:'command',action:action,content:content,from:logged};
        }
        if(value.indexOf('@')===0){
            splittedUserInput = value.split(' ');
            userName = splittedUserInput[0].substring(1);
            content = splittedUserInput.slice(1).join(' ');
            return {service:'sendMessage',to:userName,content:content,from:logged};
        }
        return {service:'sendMessage',content:value,from:logged};
    }).merge(
        Rx.Observable.of({service:'listenToMessages',me:logged})
    );

connection.addSender(messagesObservable);

connection.listen('message')
    .bufferWithTime(500)
    .filter(function(messages){
       return messages.length > 0;
    })
    .map(function(messages){
        var li;
        var i=0;
        var fragment = document.createDocumentFragment();
        for(;i<messages.length;i++){
            li = document.createElement("li");
            li.innerText = messages[i].from + ' says to '+
                (messages[i].to || 'everybody')+' : '+messages[i].content;
            fragment.appendChild(li);
        }
        return fragment;
    })
    .subscribe(function(node){
        document.getElementById("messages").appendChild(node);
    });




