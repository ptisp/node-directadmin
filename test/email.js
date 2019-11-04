var assert = require('assert'),
    expect = require('chai').expect,
    client = require('./client_connection').client;


describe('email', function () {

    it('should create and delete an email account', function (done) {
        this.timeout(15000)

        var opts = {
            user: 'teste1',
            passwd: '123456',
            passwd2: '123456',
            quota: 10,
            limit: 10
        }
        client.email.createPopAccounts('nodeapi.ptisp.pt', opts, function (err, data) {
            expect(err).to.be.null;
            client.email.deletePopAccounts('nodeapi.ptisp.pt', opts.user, function (err, data) {
                expect(err).to.be.null;
                done();
            });
        });
    });

    it('should change email account password', function (done) {
        this.timeout(15000)

        var opts = {
            user: 'teste1',
            passwd: '123456',
            passwd2: '123456',
            quota: 10,
            limit: 10
        }
        client.email.createPopAccounts('nodeapi.ptisp.pt', opts, function (err, data) {
            expect(err).to.be.null;
            opts = {
                user: 'teste1',
                oldpassword: '123456',
                password1: '1234567',
                password2: '1234567'
            }
            client.email.updatePasswordPopAccounts('nodeapi.ptisp.pt', opts, function (err, data) {
                expect(err).to.be.null;
                client.email.deletePopAccounts('nodeapi.ptisp.pt', opts.user, function (err, data) {
                    expect(err).to.be.null;
                    done();
                });
            });
        });
    });

});