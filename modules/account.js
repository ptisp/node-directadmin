var utils = require('../lib/utils');
var extend = utils.extend;

var Account = function (config) {
  this.config = config;
};

/**
 * Create Admin: - https://www.directadmin.com/api.php
 * @param userSettings Object
 * @param userSettings.username String
 * @param userSettings.email String
 * @param userSettings.passwd String
 * @param userSettings.passwd2 String
 * @param userSettings.notify String
 * @param callback
 */
Account.prototype.createAdminAccount = function (userSettings, callback) {
  var options = {
    action: 'create'
  };
  options = extend(options, userSettings);

  var createOptions = {
    command: '/CMD_API_ACCOUNT_ADMIN',
    method: 'POST',
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Create Reseller: - https://www.directadmin.com/api.php
 * @param userSettings Object
 * @param userSettings.username String
 * @param userSettings.email String
 * @param userSettings.passwd String
 * @param userSettings.passwd2 String
 * @param userSettings.notify String
 * @param userSettings.domain String
 * @param userSettings.package String
 * @param userSettings.ip Ip
 * @param callback
 */
Account.prototype.createResellerAccount = function (userSettings, callback) {
  var options = {
    action: 'create',
    add: 'Submit'
  };
  options = extend(options, userSettings);

  var createOptions = {
    command: '/CMD_ACCOUNT_RESELLER',
    method: 'POST',
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Create Custom Reseller: - https://www.directadmin.com/api.php
 * @param userSettings Object
 * @param userSettings.username String
 * @param userSettings.email String
 * @param userSettings.passwd String
 * @param userSettings.passwd2 String
 * @param userSettings.notify String
 * @param userSettings.domain String
 * @param userSettings.bandwidth Number
 * @param userSettings.ubandwidth String
 * @param userSettings.quota Number
 * @param userSettings.uquota String
 * @param userSettings.vdomains Number
 * @param userSettings.uvdomains String
 * @param userSettings.nsubdomains Number
 * @param userSettings.unsubdomains String
 * @param userSettings.nemails Number
 * @param userSettings.unemails String
 * @param userSettings.nemailf Number
 * @param userSettings.unemailf String
 * @param userSettings.nemailml Number
 * @param userSettings.unemailml String
 * @param userSettings.nemailr Number
 * @param userSettings.unemailr String
 * @param userSettings.mysql Number
 * @param userSettings.umysql String
 * @param userSettings.domainptr Number
 * @param userSettings.udomainptr String
 * @param userSettings.ftp Number
 * @param userSettings.uftp String
 * @param userSettings.aftp String
 * @param userSettings.cgi String
 * @param userSettings.php String
 * @param userSettings.spam String
 * @param userSettings.cron String
 * @param userSettings.catchall String
 * @param userSettings.ssl String
 * @param userSettings.ssh String
 * @param userSettings.sysinfo String
 * @param userSettings.dnscontrol String
 * @param userSettings.ip Ip
 * @param userSettings.notify String
 * @param callback
 */
Account.prototype.createCustomResellerAccount = function (userSettings, callback) {
  var options = {
    action: 'create',
    add: 'Submit'
  };
  options = extend(options, userSettings);

  var createOptions = {
    command: '/CMD_ACCOUNT_RESELLER',
    method: 'POST',
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Create User: - https://www.directadmin.com/api.php
 * @param userSettings Object
 * @param userSettings.username String
 * @param userSettings.email String
 * @param userSettings.passwd String
 * @param userSettings.passwd2 String
 * @param userSettings.notify String
 * @param userSettings.domain String
 * @param userSettings.package String
 * @param userSettings.ip Ip
 * @param callback
 */
Account.prototype.createUserAccount = function (userSettings, callback) {
  var options = {
    action: 'create',
    add: 'Submit'
  };
  options = extend(options, userSettings);

  var createOptions = {
    command: '/CMD_API_ACCOUNT_USER',
    method: 'POST',
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Create Custom User: - https://www.directadmin.com/api.php
 * @param userSettings Object
 * @param userSettings.username String
 * @param userSettings.email String
 * @param userSettings.passwd String
 * @param userSettings.passwd2 String
 * @param userSettings.notify String
 * @param userSettings.domain String
 * @param userSettings.bandwidth Number
 * @param userSettings.ubandwidth String
 * @param userSettings.quota Number
 * @param userSettings.uquota String
 * @param userSettings.vdomains Number
 * @param userSettings.uvdomains String
 * @param userSettings.nsubdomains Number
 * @param userSettings.unsubdomains String
 * @param userSettings.nemails Number
 * @param userSettings.unemails String
 * @param userSettings.nemailf Number
 * @param userSettings.unemailf String
 * @param userSettings.nemailml Number
 * @param userSettings.unemailml String
 * @param userSettings.nemailr Number
 * @param userSettings.unemailr String
 * @param userSettings.mysql Number
 * @param userSettings.umysql String
 * @param userSettings.domainptr Number
 * @param userSettings.udomainptr String
 * @param userSettings.ftp Number
 * @param userSettings.uftp String
 * @param userSettings.aftp String
 * @param userSettings.cgi String
 * @param userSettings.php String
 * @param userSettings.spam String
 * @param userSettings.cron String
 * @param userSettings.catchall String
 * @param userSettings.ssl String
 * @param userSettings.ssh String
 * @param userSettings.sysinfo String
 * @param userSettings.dnscontrol String
 * @param userSettings.ip Ip
 * @param userSettings.notify String
 * @param callback
 */
Account.prototype.createCustomUserAccount = function (userSettings, callback) {
  var options = {
    action: 'create',
    add: 'Submit'
  };
  options = extend(options, userSettings);

  var createOptions = {
    command: '/CMD_API_ACCOUNT_USER',
    method: 'POST',
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Deleting *ANY* usertype: - https://www.directadmin.com/api.php
 * @param users Object
 * @param users.select0 String
 * @param users.select1 String
 * @param users.selectX String
 * @param callback
 */
Account.prototype.deleteAccounts = function (users, callback) {
  var options = {
    confirmed: 'Confirm',
    delete: 'yes'
  };
  options = extend(options, users);

  var createOptions = {
    command: '/CMD_API_SELECT_USERS',
    method: 'POST',
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Suspending/Activating *ANY* usertype: - https://www.directadmin.com/api.php
 * @param users Object
 * @param users.select0 String
 * @param users.select1 String
 * @param users.selectX String
 * @param callback
 */
Account.prototype.suspendAccounts = function (users, callback) {
  var options = {
    location: 'CMD_SELECT_USERS',
    suspend: 'Suspend'
  };
  options = extend(options, users);

  var createOptions = {
    command: '/CMD_API_SELECT_USERS',
    method: 'POST',
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Suspending/Activating *ANY* usertype: - https://www.directadmin.com/api.php
 * @param users Object
 * @param users.select0 String
 * @param users.select1 String
 * @param users.selectX String
 * @param callback
 */
Account.prototype.unsuspendAccounts = function (users, callback) {
  var options = {
    location: 'CMD_SELECT_USERS',
    suspend: 'Unsuspend'
  };
  options = extend(options, users);

  var createOptions = {
    command: '/CMD_API_SELECT_USERS',
    method: 'POST',
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * 
 * Get List of Users owned by Reseller: - https://www.directadmin.com/api.php
 * @param reseller String
 * @param callback
 */
Account.prototype.getListUserAccounts = function (reseller, callback) {
  var options = {};
  if (reseller != '') {
    options = {
      reseller: reseller
    };
  }

  options = extend(options);

  var createOptions = {
    command: '/CMD_API_SHOW_USERS',
    method: 'POST',
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * 
 * Get List of Resellers on server: - https://www.directadmin.com/api.php
 * @param callback
 */
Account.prototype.getListResellerAccounts = function (callback) {
  var options = {};

  options = extend(options);

  var createOptions = {
    command: '/CMD_API_SHOW_RESELLERS',
    method: 'POST',
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * 
 * Get List of Admins on server: - https://www.directadmin.com/api.php
 * @param callback
 */
Account.prototype.getListAdminAccounts = function (callback) {
  var options = {};

  options = extend(options);

  var createOptions = {
    command: '/CMD_API_SHOW_ADMINS',
    method: 'POST',
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * 
 * Get List of all Users on server - https://www.directadmin.com/api.php
 * @param callback
 */
Account.prototype.getListAllUserAccounts = function (callback) {
  var options = {};

  options = extend(options);

  var createOptions = {
    command: '/CMD_API_SHOW_ALL_USERS',
    method: 'POST',
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Modify User Settings: - https://www.directadmin.com/api.php
 * @param userSettings Object
 * @param userSettings.bandwidth Number
 * @param userSettings.ubandwidth String
 * @param userSettings.quota Number
 * @param userSettings.uquota String
 * @param userSettings.vdomains Number
 * @param userSettings.uvdomains String
 * @param userSettings.nsubdomains Number
 * @param userSettings.unsubdomains String
 * @param userSettings.nemails Number
 * @param userSettings.unemails String
 * @param userSettings.nemailf Number
 * @param userSettings.unemailf String
 * @param userSettings.nemailml Number
 * @param userSettings.unemailml String
 * @param userSettings.nemailr Number
 * @param userSettings.unemailr String
 * @param userSettings.mysql Number
 * @param userSettings.umysql String
 * @param userSettings.domainptr Number
 * @param userSettings.udomainptr String
 * @param userSettings.ftp Number
 * @param userSettings.uftp String
 * @param userSettings.aftp String
 * @param userSettings.cgi String
 * @param userSettings.php String
 * @param userSettings.spam String
 * @param userSettings.cron String
 * @param userSettings.catchall String
 * @param userSettings.ssl String
 * @param userSettings.ssh String
 * @param userSettings.sysinfo String
 * @param userSettings.dnscontrol String
 * @param userSettings.skin String
 * @param userSettings.ns1 String
 * @param userSettings.ns2 String
 * @param callback
 */
Account.prototype.updateUserAccount = function (userSettings, callback) {
  var options = {
    action: 'customize'
  };
  options = extend(options, userSettings);

  var createOptions = {
    command: '/CMD_API_MODIFY_USER',
    method: 'POST',
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * 
 * Change User Password - https://www.directadmin.com/api.php
 * @param userInfo Object
 * @param userInfo.username String
 * @param userInfo.passwd String
 * @param userInfo.passwd2 String
 * @param callback
 */
Account.prototype.updateUserPassword = function (userInfo, callback) {
  var options = {};

  options = extend(options, userInfo);

  var createOptions = {
    command: '/CMD_API_USER_PASSWD',
    method: 'POST',
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Create FTP Account: - https://www.directadmin.com/api.php
 * @param ftpSettings Object
 * @param ftpSettings.domain String
 * @param ftpSettings.user String
 * @param ftpSettings.type String
 * @param ftpSettings.passwd String
 * @param ftpSettings.passwd2 String
 * @param callback
 */
Account.prototype.createFtpccount = function (ftpSettings, callback) {
  var options = {
    action: 'create'
  };
  options = extend(options, ftpSettings);

  var createOptions = {
    command: '/CMD_API_FTP',
    method: 'POST',
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Change FTP Account: - https://www.directadmin.com/api.php
 * @param ftpSettings Object
 * @param ftpSettings.domain String
 * @param ftpSettings.user String
 * @param ftpSettings.type String
 * @param ftpSettings.passwd String
 * @param ftpSettings.passwd2 String
 * @param callback
 */
Account.prototype.updateFtpccount = function (ftpSettings, callback) {
  var options = {
    action: 'modify'
  };
  options = extend(options, ftpSettings);

  var createOptions = {
    command: '/CMD_API_FTP',
    method: 'POST',
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Deleting Ftp Account: - https://www.directadmin.com/api.php
 * @param ftpSettings Object
 * @param ftpSettings.domain String
 * @param ftpSettings.select0 String
 * @param ftpSettings.select1 String
 * @param ftpSettings.selectX String
 * @param callback
 */
Account.prototype.deleteFtpAccounts = function (ftpSettings, callback) {
  var options = {
    action: 'delete'
  };
  options = extend(options, users);

  var createOptions = {
    command: '/CMD_API_FTP',
    method: 'POST',
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

/**
 * Account Ssl Install: - https://www.directadmin.com/api.php
 * @param domain String
 * @param accountDetails Object
 * @param accountDetails.domain String
 * @param accountDetails.name String
 * @param accountDetails.email String
 * @param accountDetails.le_select0 String
 * @param accountDetails.le_select1 String
 * @param callback
 */
Account.prototype.accountSslInstall = function (accountDetails, callback) {
  var options = {
    action: 'save',
    type: 'create',
    request: 'letsencrypt',
    keysize: 4096,
    encryption: 'sha256'
  };
  options = extend(options, accountDetails);

  var createOptions = {
    command: '/CMD_API_SSL',
    method: 'POST',
    client: this,
    body: options
  };

  utils.modem(createOptions, callback);
};

module.exports = Account;