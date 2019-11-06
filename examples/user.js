var DIRECTADMIN = require('../directadmin');
var config = {
    username: process.env.DIRECTADMIN_USER || 'user',
    password: process.env.DIRECTADMIN_PASS || 'password/loginkey',
    serverUrl: process.env.DIRECTADMIN_HOST || 'host',
    port: process.env.DIRECTADMIN_PORT || '2222'
};

var daexample = new DIRECTADMIN(config);

var opts = {
    domain: 'parking2.ptisp.pt',
    from: '/',
    to: 'google.com'
}
/* daexample.user.addDomainRedirect(opts, function (err, data) {
    if (err) {
        console.log('ERROR');
        console.log(err);
    } else {
        console.log(data);
    }
}); */

/* daexample.user.getDomainRedirect('parking2.ptisp.pt', function (err, data) {
    if (err) {
        console.log('ERROR');
        console.log(err);
    } else {
        console.log(data);
    }
});

var optsDelete = {
    domain: 'parking2.ptisp.pt',
    select0: '/'
}

daexample.user.deleteDomainRedirect(optsDelete, function (err, data) {
    if (err) {
        console.log('ERROR');
        console.log(err);
    } else {
        console.log(data);
    }
}); */

daexample.user.getUserByDomain('teste.te', function (err, data) {
    if (err) {
        console.log('ERROR');
        console.log(err);
    } else {
        console.log(data);
    }
});