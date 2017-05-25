let assert = require('assert');
let mockDataSourceFactory = require('./mock_datasource_factory');
let servicesFactory = require('../src/services');

describe('Listen to message Test',function(){
    it('Must listen to messages sent to me',function(done){
        let mockDataSource = mockDataSourceFactory();
        let services = servicesFactory(mockDataSource);
        let me = 'John Doe';
        let content = 'foobar';
        let message = {to:me,content:content};
        let subscription = services.listenToMessages({me:me}).subscribe(function(message){
            assert.equal(message.to,me);
            assert.equal(message.content,content);
            subscription.dispose();
            done();
        });
        mockDataSource.push(message);
    });
    it('Must listen to messages sent to all',function(done){
        let mockDataSource = mockDataSourceFactory();
        let services = servicesFactory(mockDataSource);
        let me = 'John Doe';
        let content = 'foobar';
        let message = {content:content};
        let subscription = services.listenToMessages({me:me}).subscribe(function(message){
            assert.equal(message.content,content);
            subscription.dispose();
            done();
        });
        mockDataSource.push(message);
    });
    it('Must not listen to messages sent to others',function(done){
        let mockDataSource = mockDataSourceFactory();
        let services = servicesFactory(mockDataSource);
        let receivedMessage = false;
        let me = 'John Doe';
        let to = 'other';
        let content = 'foobar';
        let message = {to:to,content:content};
        let subscription = services.listenToMessages({me:me}).subscribe(function(message){
            receivedMessage = true;
        },function noop(){

        },function(){
            assert.equal(receivedMessage,false);
            done();
        });
        mockDataSource.push(message);
        mockDataSource.get().onCompleted();
    });
});