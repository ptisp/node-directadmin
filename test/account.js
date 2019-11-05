var assert = require('assert'),
    expect = require('chai').expect,
    client = require('./client_connection').client;


describe('account', function () {

    it('should create and delete an user account', function (done) {
        this.timeout(15000)

        var opts = {
            username: 'example',
            email: 'example@ptisp.pt',
            passwd: '123456',
            passwd2: '123456',
            notify: 'no',
            domain: 'example.ptisp.pt',
            package: client.config.package,
            ip: client.config.ip
        }
        client.account.createUserAccount(opts, function (err, data) {
            console.log(err);
            expect(err).to.be.null;
            opts = {
                select0: 'example'
            }
            client.account.deleteAccounts(opts, function (err, data) {
                console.log(err);
                expect(err).to.be.null;
                done();
            });
        });
    });

    it('should change user password', function (done) {
        this.timeout(15000)

        var opts = {
            username: 'example',
            email: 'example@ptisp.pt',
            passwd: '123456',
            passwd2: '123456',
            notify: 'no',
            domain: 'example.ptisp.pt',
            package: client.config.package,
            ip: client.config.ip
        }
        client.account.createUserAccount(opts, function (err, data) {
            console.log(err);
            expect(err).to.be.null;
            opts = {
                username: 'example',
                passwd: '1234567',
                passwd2: '1234567'
            }
            client.account.updateUserPassword(opts, function (err, data) {
                console.log(err);
                expect(err).to.be.null;
                opts = {
                    select0: 'example'
                }
                client.account.deleteAccounts(opts, function (err, data) {
                    console.log(err);
                    expect(err).to.be.null;
                    done();
                });
            });
        });
    });

    it('should suspend user account', function (done) {
        this.timeout(15000)

        var opts = {
            username: 'example',
            email: 'example@ptisp.pt',
            passwd: '123456',
            passwd2: '123456',
            notify: 'no',
            domain: 'example.ptisp.pt',
            package: client.config.package,
            ip: client.config.ip
        }
        client.account.createUserAccount(opts, function (err, data) {
            console.log(err);
            expect(err).to.be.null;
            opts = {
                select0: 'example'
            }
            client.account.suspendAccounts(opts, function (err, data) {
                console.log(err);
                expect(err).to.be.null;
                client.account.deleteAccounts(opts, function (err, data) {
                    console.log(err);
                    expect(err).to.be.null;
                    done();
                });
            });
        });
    });

    it('should suspend and unsuspend user account', function (done) {
        this.timeout(15000)

        var opts = {
            username: 'example',
            email: 'example@ptisp.pt',
            passwd: '123456',
            passwd2: '123456',
            notify: 'no',
            domain: 'example.ptisp.pt',
            package: client.config.package,
            ip: client.config.ip
        }
        client.account.createUserAccount(opts, function (err, data) {
            console.log(err);
            expect(err).to.be.null;
            opts = {
                select0: 'example'
            }
            client.account.suspendAccounts(opts, function (err, data) {
                console.log(err);
                expect(err).to.be.null;
                client.account.unsuspendAccounts(opts, function (err, data) {
                    console.log(err);
                    expect(err).to.be.null;
                    client.account.deleteAccounts(opts, function (err, data) {
                        console.log(err);
                        expect(err).to.be.null;
                        done();
                    });
                });
            });
        });
    });

});