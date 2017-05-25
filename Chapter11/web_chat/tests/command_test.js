let assert = require('assert');
let mockDataSourceFactory = require('./mock_datasource_factory');
let servicesFactory = require('../src/services');

describe('Command Test',function(){
    it('Must support roll_a_dice command',function(done){
        let mockDataSource = mockDataSourceFactory();
        let services = servicesFactory(mockDataSource);
        let me = 'John Doe';
        let message = {from:me,action:'roll_a_dice'};
        let myMessagesObservable = services.listenToMessages({me:me});
        let subscription = myMessagesObservable.subscribe(function(message){
            assert.equal(message.from,'server');
            assert.equal(message.to,me);
            assert.equal(/Result is [1-6]/.test(message.content),true);
            subscription.dispose();
            done();
        });
        services.command(message);
    });
    it('Must support echo command',function(done){
        let mockDataSource = mockDataSourceFactory();
        let services = servicesFactory(mockDataSource);
        let me = 'John Doe';
        let content= 'foobar';
        let message = {from:me,action:'echo',content:content};
        let myMessagesObservable = services.listenToMessages({me:me});
        let subscription = myMessagesObservable.subscribe(function(message){
            assert.equal(message.from,'server');
            assert.equal(message.to,me);
            assert.equal(message.content,content);
            subscription.dispose();
            done();
        });
        services.command(message);
    });
    it('Must send a message if the action is not supported',function(done){
        let mockDataSource = mockDataSourceFactory();
        let services = servicesFactory(mockDataSource);
        let me = 'John Doe';
        let content= 'foobar';
        let message = {from:me,action:'some_action'};
        let myMessagesObservable = services.listenToMessages({me:me});
        let subscription = myMessagesObservable.subscribe(function(message){
            assert.equal(message.from,'server');
            assert.equal(message.to,me);
            assert.equal(message.content,'The action some_action is not supported');
            subscription.dispose();
            done();
        });
        services.command(message);
    });
});