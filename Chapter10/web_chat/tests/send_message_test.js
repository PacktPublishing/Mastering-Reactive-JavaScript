let assert = require('assert');
let mockDataSourceFactory = require('./mock_datasource_factory');
let servicesFactory = require('../src/services');

describe('Send Message Test',function(){
    it('Must support sending a message',function(done){
        let mockDataSource = mockDataSourceFactory();
        let services = servicesFactory(mockDataSource);
        let from = 'Jim';
        let to = 'John Doe';
        let content = 'foobar';
        let message = {to:to,content:content, from:from};
        let subscription = mockDataSource.get().subscribe(function(message){
            assert.equal(message.from,from);
            assert.equal(message.to,to);
            assert.equal(message.content,content);
            subscription.dispose();
            done();
        });
        services.sendMessage(message);

    });
    it('Must support broadcast message',function(done){
        let mockDataSource = mockDataSourceFactory();
        let services = servicesFactory(mockDataSource);
        let from = 'Jim';
        let content = 'foobar';
        let message = {content:content, from:from};
        let subscription = mockDataSource.get().subscribe(function(message){
            assert.equal(message.from,from);
            assert.equal(message.content,content);
            subscription.dispose();
            done();
        });
        services.sendMessage(message);
    });
});