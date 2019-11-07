var DIRECTADMIN = require('../directadmin');
var config = {
  username: process.env.DIRECTADMIN_USER || 'user',
  password: process.env.DIRECTADMIN_PASS || 'password/loginkey',
  serverUrl: process.env.DIRECTADMIN_HOST || 'host',
  port: process.env.DIRECTADMIN_PORT || '2222'
};

var daexample = new DIRECTADMIN(config);

daexample.reseller.getResellerIps('',function(err, data){
  if (err) {
    console.log('ERROR');
    console.log(err);
  } else {
    console.log(data.list[0]);
  }
});