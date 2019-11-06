var DIRECTADMIN = require('../directadmin');
var config = {
    username: process.env.DIRECTADMIN_USER || 'user',
    password: process.env.DIRECTADMIN_PASS || 'password/loginkey',
    serverUrl: process.env.DIRECTADMIN_HOST || 'host',
    port: process.env.DIRECTADMIN_PORT || '2222'
};

var daexample = new DIRECTADMIN(config);

/* loginWithUser('teste', function (userConfig) {
    var newUserImpersonate = new DIRECTADMIN(userConfig);


}); */

//createEmailAccount('teste','teste.te');
//changeEmailAccount('teste','teste.te');
//deleteEmailAccont('teste', 'teste.te', 'teste2');


function removeRedirect(user, domain){
    loginWithUser(user, function (userConfig) {
        var newUserImpersonate = new DIRECTADMIN(userConfig);
        
        var optsDelete = {
            domain: domain,
            select0: '/'
        }
        
        newUserImpersonate.user.deleteDomainRedirect(optsDelete, function (err, data) {
            if (err) {
                console.log('ERROR');
                console.log(err);
            } else {
                console.log(data);
            }
        });
    
    });
}

function addRedirect(user, domain) {
    loginWithUser(user, function (userConfig) {
        var newUserImpersonate = new DIRECTADMIN(userConfig);

        var opts = {
            domain: domain,
            from: '/',
            to: 'google.com'
        }

        newUserImpersonate.user.addDomainRedirect(opts, function (err, data) {
            if (err) {
                console.log('ERROR');
                console.log(err);
            } else {
                console.log(data);
            }
        });

    });
}

function changeEmailAccount(user, domain) {
    loginWithUser(user, function (userConfig) {
        var newUserImpersonate = new DIRECTADMIN(userConfig);

        var opts = {
            user: 'teste2',
            passwd: '1234567',
            passwd2: '1234567',
            quota: 10
        }

        newUserImpersonate.email.updatePopAccountsPassword(domain, opts, function (err, data) {
            if (err) {
                console.log('ERROR');
                console.log(err);
            } else {
                console.log(data);
            }
        });
    });
}

function deleteEmailAccont(user, domain, account) {
    loginWithUser(user, function (userConfig) {
        var newUserImpersonate = new DIRECTADMIN(userConfig);

        newUserImpersonate.email.deletePopAccounts(domain, account, function (err, data) {
            if (err) {
                console.log('ERROR');
                console.log(err);
            } else {
                console.log(data);
            }
        });
    });

}

function createEmailAccount(user, domain) {
    loginWithUser(user, function (userConfig) {
        var newUserImpersonate = new DIRECTADMIN(userConfig);

        var opts = {
            user: 'teste2',
            passwd: '123456',
            passwd2: '123456',
            quota: 10,
            limit: 10
        }
        newUserImpersonate.email.createPopAccounts(domain, opts, function (err, data) {
            if (err) {
                console.log('ERROR');
                console.log(err);
            } else {
                console.log(data);
            }
        });
    });
}

function loginWithUser(username, callback) {
    var userConfig = {}
    var password = generatePassword();
    var opts = {
        username: username,
        passwd: password,
        passwd2: password
    }
    daexample.account.updateUserPassword(opts, function (err, data) {
        if (err) {
            console.log('ERROR');
            console.log(err);
        } else {
            userConfig = {
                username: username,
                password: password,
                serverUrl: config.serverUrl,
                port: config.port
            }
            console.log(data);
            callback(userConfig);
        }
    });
}

function generatePassword() {
    var length = 12,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}