var utils = require('../lib/utils');
var extend = utils.extend;

var Reseller = function (config) {
    this.config = config;
};

/**
 * 
 * Get List of IPs and get IP info: - https://www.directadmin.com/api.php
 * @param ip Ip
 * @param callback
 */
Reseller.prototype.getResellerIps = function (ip, callback) {
    var options = {};
    if(ip != '')
    {
        options = {
            ip: ip
        };
    }

    options = extend(options);

    var createOptions = {
        command: '/CMD_API_SHOW_RESELLER_IPS',
        method: 'POST',
        client: this,
        body: options
    };

    utils.modem(createOptions, callback);
};

/**
 * 
 * Show Reseller Packages: - https://www.directadmin.com/api.php
 * @param callback
 */
Reseller.prototype.getAllResellerPackages = function (callback) {
    var options = {};

    var createOptions = {
        command: '/CMD_API_PACKAGES_RESELLER',
        method: 'GET',
        client: this,
        body: options
    };

    utils.modem(createOptions, callback);
};

/**
 * 
 * Show Reseller Packages: - https://www.directadmin.com/api.php
 * @param package String
 * @param callback
 */
Reseller.prototype.getResellerPackage = function (package, callback) {
    var options = {
        package: package
    };

    options = extend(options);
    
    var createOptions = {
        command: '/CMD_API_PACKAGES_RESELLER',
        method: 'GET',
        client: this,
        body: options
    };

    utils.modem(createOptions, callback);
};

module.exports = Reseller;