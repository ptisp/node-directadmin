var DIRECTADMIN = require('../directadmin');
var config = {
    username: process.env.DIRECTADMIN_USER || 'user',
    password: process.env.DIRECTADMIN_PASS || 'password/loginkey',
    serverUrl: process.env.DIRECTADMIN_HOST || 'host',
    port: process.env.DIRECTADMIN_PORT || '2222'
};

module.exports = {
    'client': new DIRECTADMIN(config)
};