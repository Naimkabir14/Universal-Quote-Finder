var expect  = require('chai').expect;
var request = require('request');


describe('Status and content', function() {
    describe ('Main page', function() {
        it('Main page content', function(done) {
            request('http://localhost:8080' , function(error, response, body) {
            expect(error.port).to.equal(8080);
            done();
        });
    });
});
});