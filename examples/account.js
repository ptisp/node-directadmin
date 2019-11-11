var DIRECTADMIN = require('../directadmin');
var config = {
    username: process.env.DIRECTADMIN_USER || 'user',
    password: process.env.DIRECTADMIN_PASS || 'password/loginkey',
    serverUrl: process.env.DIRECTADMIN_HOST || 'host',
    port: process.env.DIRECTADMIN_PORT || '2222'
};

var daexample = new DIRECTADMIN(config);

/* var opts = {
    username: 'jakim',
    email: 'jakim@ptisp.pt',
    passwd: '123456',
    passwd2: '123456',
    notify: 'no',
    domain: 'jakim.ptisp.pt',
    package: 'newpackage',
    ip: '94.46.22.120'
}
daexample.account.createUserAccount(opts, function (err, data) {
    if (err) {
        console.log('ERROR');
        console.log(err);
    } else {
        console.log(data);
    }
}); */

/* var opts = {
    select0: 'jakim'
}
daexample.account.deleteAccounts(opts, function (err, data) {
    if (err) {
        console.log('ERROR');
        console.log(err);
    } else {
        console.log(data);
    }
});  */

daexample.account.getListUserAccounts('parking2', function (err, data) {
    if (err) {
        console.log('ERROR');
        console.log(err);
    } else {
        console.log(data);
    }
}); 


/* var opts = {
  domain: 'teste.te',
  user: 'teste',
  type: 'system',
  passwd: '12345',
  passwd2: '12345'
}

daexample.account.updateFtpccount(opts, function (err, data) {
  if (err) {
      console.log('ERROR');
      console.log(err);
  } else {
      console.log(data);
  }
}); */

/* daexample.account.getListAdminAccounts(function (err, data) {
    if (err) {
        console.log('ERROR');
        console.log(err);
    } else {
        console.log(data);
    }
}); */


/* daexample.account.getListAllUserAccounts(function (err, data) {
    if (err) {
        console.log('ERROR');
        console.log(err);
    } else {
        console.log(data);
    }
}); */

/* daexample.account.getListResellerAccounts(function (err, data) {
    if (err) {
        console.log('ERROR');
        console.log(err);
    } else {
        console.log(data);
    }
});

daexample.account.getListAllUserAccounts(function (err, data) {
    if (err) {
        console.log('ERROR');
        console.log(err);
    } else {
        console.log(data);
    }
}); */


/* var opts = {
    select0: 'jakim'
}
daexample.account.suspendAccounts(opts, function (err, data) {
    if (err) {
        console.log('ERROR');
        console.log(err);
    } else {
        console.log(data);
    }
});  

daexample.account.unsuspendAccounts(opts, function (err, data) {
    if (err) {
        console.log('ERROR');
        console.log(err);
    } else {
        console.log(data);
    }
});   */