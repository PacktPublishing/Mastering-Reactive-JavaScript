let Rx = require('rx');
let Redis = require('ioredis');

let subscriber = new Redis();
let publisher = new Redis();
const TOPIC = 'web_chat';
subscriber.subscribe(TOPIC);
let messagesObservable = Rx.Observable.fromEvent(subscriber,'message',(channel,message)=>JSON.parse(message));
module.exports = {
  push(data){
    publisher.publish(TOPIC,JSON.stringify(data));
  },
  get(){
    return messagesObservable;
  }
};