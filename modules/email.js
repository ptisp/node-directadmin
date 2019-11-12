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
 * Full List Virtual POP Account: - https://www.directadmin.com/api.php
 * @param domain String 
 * @param callback
 */
Email.prototype.getFullListPopAccounts = function (domain, callback) {
    var options = {
        action: 'full_list',
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
 * @param emailSettings.passwd String
 * @param emailSettings.passwd2 String
 * @param emailSettings.quota Int
 * @param callback
 */
Email.prototype.updatePopAccountsPassword = function (domain, emailSettings, callback) {
    var options = {
        action: 'modify',
        domain: domain
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

/**
 * Create email forwarder: - https://www.directadmin.com/api.php
 * @param forwarderData Object 
 * @param forwarderData.domain String
 * @param forwarderData.user String
 * @param forwarderData.email String
 * @param callback
 */
Email.prototype.createEmailForwarder = function (forwarderData, callback) {
  var options = {
      action: 'create'
  };
  options = extend(options, forwarderData);

  var createOptions = {
      command: '/CMD_API_EMAIL_FORWARDERS',
      method: 'POST',
      client: this,
      body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * List email forwarder: - https://www.directadmin.com/api.php
 * @param domain String
 * @param callback
 */
Email.prototype.listEmailForwarder = function (domain, callback) {
  var options = {
      domain: domain
  };
  options = extend(options);

  var createOptions = {
      command: '/CMD_API_EMAIL_FORWARDERS',
      method: 'POST',
      client: this,
      body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Update email forwarder: - https://www.directadmin.com/api.php
 * @param forwarderData Object 
 * @param forwarderData.domain String
 * @param forwarderData.user String
 * @param forwarderData.email String
 * @param callback
 */
Email.prototype.updateEmailForwarder = function (forwarderData, callback) {
  var options = {
      action: 'modify'
  };
  options = extend(options, forwarderData);

  var createOptions = {
      command: '/CMD_API_EMAIL_FORWARDERS',
      method: 'POST',
      client: this,
      body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Delete Email Forwarder - https://www.directadmin.com/api.php
 * @param forwarderData Object
 * @param forwarderData.domain String
 * @param forwarderData.select0 String
 * @param forwarderData.select1 String
 * @param forwarderData.selectX String
 * @param callback
 */
Email.prototype.deleteEmailForwarder = function (forwarderData, callback) {
  var options = {
    action: 'delete'
  };
  options = extend(options, forwarderData);

  var createOptions = {
    command: '/CMD_API_EMAIL_FORWARDERS',
    method: 'POST',
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

module.exports = Email;