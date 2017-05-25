let Rx = require('rx');
module.exports = function(){
    let messagesSubjectMock = new Rx.Subject();
    return{
        push(data){
            messagesSubjectMock.onNext(data);
        },
        get(){
            return messagesSubjectMock;
        }
    };
};