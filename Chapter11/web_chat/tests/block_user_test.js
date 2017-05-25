let assert = require('assert');
let mockDataSourceFactory = require('./mock_datasource_factory');
let servicesFactory = require('../src/services');

describe('Block user Test',function(){
    it('Must not receive message from blocked user',function(done){
        let mockDataSource = mockDataSourceFactory();
        let services = servicesFactory(mockDataSource);
        let receivedMessage = false;
        let me = 'John Doe';
        let blocked = 'Jim';
        let content = 'foobar';
        let message = {to:me,content:content};
        let subscription = services.blockUser({blocked:blocked,me:me}).subscribe(function(message){
            receivedMessage = true;
        },function noop(){

        },function(){
            assert.equal(receivedMessage,true);
            subscription.dispose();
            done();
        });
        mockDataSource.push(message);
        mockDataSource.get().onCompleted();
    });
});