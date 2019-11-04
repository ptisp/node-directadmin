var utils = require('../lib/utils');
var extend = utils.extend;

var Email = function (config) {
    this.config = config;
};

/**
 * List Virtual POP Account: - https://www.directadmin.com/api.php
 * @param domain String 
 * @param callback
 */
Email.prototype.getListPopAccounts = function (domain, callback) {
    var options = {
        action: 'list',
        domain: domain
    };
    options = extend(options);

    var createOptions = {
        command: '/CMD_API_POP',
        method: 'POST',
        client: this,
        body: options
    };

    utils.modem(createOptions, callback);
};

/**
 * Create a Virtual POP Account: - https://www.directadmin.com/api.php
 * @param domain String 
 * @param emailSettings Object
 * @param emailSettings.user String
 * @param emailSettings.passwd String
 * @param emailSettings.passwd2 String
 * @param emailSettings.quota Number
 * @param emailSettings.limit Number
 * @param callback
 */
Email.prototype.createPopAccounts = function (domain, emailSettings, callback) {
    var options = {
        action: 'create',
        domain: domain,
    };
    options = extend(options, emailSettings);

    var createOptions = {
        command: '/CMD_API_POP',
        method: 'POST',
        client: this,
        body: options
    };

    utils.modem(createOptions, callback);
};

/**
 * Set Virtual Email Password: - https://www.directadmin.com/api.php 
 * @param emailSettings Object
 * @param emailSettings.user String
 * @param emailSettings.oldpassword String
 * @param emailSettings.password1 String
 * @param emailSettings.password2 String
 * @param callback
 */
Email.prototype.updatePasswordPopAccounts = function (domain, emailSettings, callback) {
    var options = {
        api: 'yes',
        email: emailSettings.user + '@' + domain
    };
    options = extend(options, emailSettings);

    var createOptions = {
        command: '/CMD_CHANGE_EMAIL_PASSWORD',
        method: 'POST',
        client: this,
        body: options
    };

    utils.modem(createOptions, callback);
};

/**
 * Delete a Virtual POP Account: - https://www.directadmin.com/api.php
 * @param domain String 
 * @param user String
 * @param callback
 */
Email.prototype.deletePopAccounts = function (domain, user, callback) {
    var options = {
        action: 'delete',
        domain: domain,
        user: user
    };
    options = extend(options);

    var createOptions = {
        command: '/CMD_API_POP',
        method: 'POST',
        client: this,
        body: options
    };

    utils.modem(createOptions, callback);
};

module.exports = Email;