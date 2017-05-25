module.exports = function(dataSource){
  return {
    sendMessage(payload){
      if(payload && payload.content && payload.from){
        dataSource.push({
          from: payload.from,
          to:payload.to,
          content: payload.content
        });
      }
    },
    command(payload){
      switch(payload.action){
        case 'roll_a_dice':
          this.sendMessage({from:'server',to:payload.from,content:'Result is '+Math.round(1+Math.random()*5)});
          break;
        case 'echo':
          this.sendMessage({from:'server',to:payload.from,content:payload.content});
          break;
        default:
          this.sendMessage({from:'server',to:payload.from,content:'The action '+payload.action +' is not supported'});
      }
    },
    listenToMessages(payload,observable){
      let me = payload.me;
      observable = observable || dataSource.get();
      return observable.filter(function(message){
        return !message.to || message.to === me || message.from === me;
      });
    },
    blockUser(payload,observable){
      let blocked = payload.blocked;
      observable = observable || this.listenToMessages(payload);
      return observable.filter(function(message){
        return message.from !== blocked;
      });
    }
  };
};
