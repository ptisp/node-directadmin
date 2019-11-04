var assert = require('assert'),
    expect = require('chai').expect,
    client = require('./client_connection').client;


describe('account', function () {

    it('should create and delete an user account', function (done) {
        this.timeout(15000)

        var opts = {
            username: 'jakim',
            email: 'jakim@ptisp.pt',
            passwd: '123456',
            passwd2: '123456',
            notify: 'no',
            domain: 'jakim.ptisp.pt',
            package: 'newpackage',
            ip: '94.46.22.120'
        }
        client.account.createUserAccount(opts, function (err, data) {
            expect(err).to.be.null;
            opts = {
                select0: 'jakim'
            }
            client.account.deleteAccounts(opts, function (err, data) {
                expect(err).to.be.null;
                done();
            });
        });
    });

    it('should change user password', function (done) {
        this.timeout(15000)

        var opts = {
            username: 'jakim',
            email: 'jakim@ptisp.pt',
            passwd: '123456',
            passwd2: '123456',
            notify: 'no',
            domain: 'jakim.ptisp.pt',
            package: 'newpackage',
            ip: '94.46.22.120'
        }
        client.account.createUserAccount(opts, function (err, data) {
            expect(err).to.be.null;
            opts = {
                username: 'jakim',
                passwd: '1234567',
                passwd2: '1234567'
            }
            client.account.updateUserPassword(opts, function (err, data) {
                expect(err).to.be.null;
                opts = {
                    select0: 'jakim'
                }
                client.account.deleteAccounts(opts, function (err, data) {
                    expect(err).to.be.null;
                    done();
                });
            });
        });
    });

    it('should suspend user account', function (done) {
        this.timeout(15000)

        var opts = {
            username: 'jakim',
            email: 'jakim@ptisp.pt',
            passwd: '123456',
            passwd2: '123456',
            notify: 'no',
            domain: 'jakim.ptisp.pt',
            package: 'newpackage',
            ip: '94.46.22.120'
        }
        client.account.createUserAccount(opts, function (err, data) {
            expect(err).to.be.null;
            opts = {
                select0: 'jakim'
            }
            client.account.suspendAccounts(opts, function (err, data) {
                expect(err).to.be.null;
                client.account.deleteAccounts(opts, function (err, data) {
                    expect(err).to.be.null;
                    done();
                });
            });
        });
    });

    it('should suspend and unsuspend user account', function (done) {
        this.timeout(15000)

        var opts = {
            username: 'jakim',
            email: 'jakim@ptisp.pt',
            passwd: '123456',
            passwd2: '123456',
            notify: 'no',
            domain: 'jakim.ptisp.pt',
            package: 'newpackage',
            ip: '94.46.22.120'
        }
        client.account.createUserAccount(opts, function (err, data) {
            expect(err).to.be.null;
            opts = {
                select0: 'jakim'
            }
            client.account.suspendAccounts(opts, function (err, data) {
                expect(err).to.be.null;
                client.account.unsuspendAccounts(opts, function (err, data) {
                    expect(err).to.be.null;
                    client.account.deleteAccounts(opts, function (err, data) {
                        expect(err).to.be.null;
                        done();
                    });
                });
            });
        });
    });

});