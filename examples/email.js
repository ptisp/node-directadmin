var DIRECTADMIN = require('../directadmin');
var config = {
    username: process.env.DIRECTADMIN_USER || 'user',
    password: process.env.DIRECTADMIN_PASS || 'password/loginkey',
    serverUrl: process.env.DIRECTADMIN_HOST || 'host',
    port: process.env.DIRECTADMIN_PORT || '2222'
};

var daexample = new DIRECTADMIN(config);

daexample.email.deletePopAccounts('nodeapi.ptisp.pt', 'teste1', function (err, data) {
    if (err) {
        console.log('ERROR');
        console.log(err);
    } else {
        console.log(data);
    }
});

var opts = {
    user: 'teste1',
    passwd: '123456',
    passwd2: '123456',
    quota: 10,
    limit: 10
}
daexample.email.createPopAccounts('nodeapi.ptisp.pt', opts, function (err, data) {
    if (err) {
        console.log('ERROR');
        console.log(err);
    } else {
        console.log(data);
    }
}); 
var opts = {
    user: 'teste1',
    oldpassword: '123456',
    password1: '1234567',
    password2: '1234567'
}
daexample.email.changePasswordPopAccounts('nodeapi.ptisp.pt', opts, function (err, data) {
    if (err) {
        console.log('ERROR');
        console.log(err);
    } else {
        console.log(data);
    }
});

daexample.email.getListPopAccounts('nodeapi.ptisp.pt', function (err, data) {
    if (err) {
        console.log('ERROR');
        console.log(err);
    } else {
        console.log(data);
    }
});