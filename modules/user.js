var utils = require('../lib/utils');
var extend = utils.extend;

var User = function (config) {
    this.config = config;
};

/**
 *
 * Show User Packages: - https://www.directadmin.com/api.php
 * @param callback
 */
User.prototype.getAllUserPackages = async function (callback) {
    var options = {};

    options = extend(options);

    var createOptions = {
        command: '/CMD_API_PACKAGES_USER',
        method: 'GET',
        client: this,
        body: options
    };

    return utils.modem(createOptions, callback);
};

/**
 *
 * Show Reseller Packages: - https://www.directadmin.com/api.php
 * @param package Ip
 * @param callback
 */
User.prototype.getResellerPackage = async function (user, callback) {
    var options = {
        user: user
    };

    options = extend(options);

    var createOptions = {
        command: '/CMD_API_PACKAGES_USER',
        method: 'GET',
        client: this,
        body: options
    };

    return utils.modem(createOptions, callback);
};

/**
 *
 * Show User List Domains: - https://www.directadmin.com/api.php
 * @param callback
 */
User.prototype.getUserListDomains = async function (callback) {
    var options = {};

    options = extend(options);

    var createOptions = {
        command: '/CMD_API_SHOW_DOMAINS',
        method: 'POST',
        client: this,
        body: options
    };

    return utils.modem(createOptions, callback);
};

/**
 *
 * User Create Domain: - https://www.directadmin.com/api.php
 * @param domainInfo Object
 * @param domainInfo.domain String
 * @param domainInfo.bandwidth Number
 * @param domainInfo.ubandwidth Boolean
 * @param domainInfo.quota Number
 * @param domainInfo.uquota Boolean
 * @param domainInfo.ssl String
 * @param domainInfo.cgi String
 * @param domainInfo.php String
 * @param callback
 */
User.prototype.createUserDomain = async function (domainInfo, callback) {
    var options = {
        action: 'create'
    };

    options = extend(options, domainInfo);

    var createOptions = {
        command: '/CMD_API_DOMAIN',
        method: 'GET',
        client: this,
        body: options
    };

    return utils.modem(createOptions, callback);
};

/**
 *
 * Show User List Subdomains: - https://www.directadmin.com/api.php
 * @param domain String
 * @param callback
 */
User.prototype.getUserListSubDomains = async function (domain,callback) {
    var options = {
        domain: domain
    };

    options = extend(options);

    var createOptions = {
        command: '/CMD_API_SUBDOMAINS',
        method: 'POST',
        client: this,
        body: options
    };

    return utils.modem(createOptions, callback);
};

/**
 *
 * User Create SubDomain: - https://www.directadmin.com/api.php
 * @param domainsInfo Object
 * @param domainsInfo.domain String
 * @param domainsInfo.subdomain String
 * @param callback
 */
User.prototype.createUserSubDomain = async function (domainsInfo, callback) {
    var options = {
        action: 'create'
    };

    options = extend(options, domainsInfo);

    var createOptions = {
        command: '/CMD_API_SUBDOMAINS',
        method: 'POST',
        client: this,
        body: options
    };

    return utils.modem(createOptions, callback);
};

/**
 *
 * User Delete SubDomain: - https://www.directadmin.com/api.php
 * @param domainsInfo Object
 * @param domainsInfo.domain String
 * @param domainsInfo.contents String
 * @param domainsInfo.select0 String
 * @param domainsInfo.select1 String
 * @param domainsInfo.selectX String
 * @param callback
 */
User.prototype.deleteUserSubDomain = async function (domainsInfo, callback) {
    var options = {
        action: 'delete'
    };

    options = extend(options, domainsInfo);

    var createOptions = {
        command: '/CMD_API_SUBDOMAINS',
        method: 'POST',
        client: this,
        body: options
    };

    return utils.modem(createOptions, callback);
};

/**
 *
 * Get User Usage: - https://www.directadmin.com/api.php
 * @param user String
 * @param callback
 */
User.prototype.getUserUsage = async function (user, callback) {
    var options = {};

    if(user != '')
    {
        options = {
            user: user
        };
    }

    options = extend(options);

    var createOptions = {
        command: '/CMD_API_SHOW_USER_USAGE',
        method: 'POST',
        client: this,
        body: options
    };

    return utils.modem(createOptions, callback);
};

/**
 *
 * Get User Limits and Configurations: - https://www.directadmin.com/api.php
 * @param user String
 * @param callback
 */
User.prototype.getUserLimits = async function (user, callback) {
    var options = {};

    if(user != '')
    {
        options = {
            user: user
        };
    }

    options = extend(options);

    var createOptions = {
        command: '/CMD_API_SHOW_USER_CONFIG',
        method: 'POST',
        client: this,
        body: options
    };

    return utils.modem(createOptions, callback);
};

/**
 *
 * Get User Domains: - https://www.directadmin.com/api.php
 * @param user String
 * @param callback
 */
User.prototype.getUserDomains = async function (user, callback) {
    var options = {};

    if(user != '')
    {
        options = {
            user: user
        };
    }

    options = extend(options);

    var createOptions = {
        command: '/CMD_API_SHOW_USER_DOMAINS',
        method: 'POST',
        client: this,
        body: options
    };

    return utils.modem(createOptions, callback);
};

/**
 *
 * Add Domain Redirect: - https://www.directadmin.com/api.php
 * @param settings String
 * @param settings.domain String
 * @param settings.from String
 * @param settings.to String
 * @param callback
 */
User.prototype.addDomainRedirect = async function (settings, callback) {
    var options = {
        action: 'add'
    };

    options = extend(options, settings);

    var createOptions = {
        command: '/CMD_API_REDIRECT',
        method: 'POST',
        client: this,
        body: options
    };

    return utils.modem(createOptions, callback);
};

/**
 *
 * Get Domain Redirect: - https://www.directadmin.com/api.php
 * @param domain String
 * @param callback
 */
User.prototype.getDomainRedirect = async function (domain, callback) {
    var options = {};

    if(domain != '')
    {
        options = {
            domain: domain
        };
    }

    options = extend(options);

    var createOptions = {
        command: '/CMD_API_REDIRECT',
        method: 'POST',
        client: this,
        body: options
    };

    return utils.modem(createOptions, callback);
};

/**
 *
 * Delete Domain Redirect: - https://www.directadmin.com/api.php
 * @param settings Object
 * @param settings.domain String
 * @param settings.select0 String
 * @param settings.select1 String
 * @param settings.selectX String
 * @param callback
 */
User.prototype.deleteDomainRedirect = async function (settings, callback) {
    var options = {
        action: 'delete'
    };

    options = extend(options, settings);

    var createOptions = {
        command: '/CMD_API_REDIRECT',
        method: 'POST',
        client: this,
        body: options
    };

    return utils.modem(createOptions, callback);
};

/**
 *
 * Delete Domain Redirect: - https://www.directadmin.com/api.php
 * @param domain String
 * @param callback
 */
User.prototype.getUserByDomain = async function (domain, callback) {
    var options = {
        domain: domain
    };

    options = extend(options);

    var createOptions = {
        command: '/CMD_API_DOMAIN_OWNERS',
        method: 'POST',
        client: this,
        body: options
    };

    return utils.modem(createOptions, callback);
};

/**
 *
 * Create login key: - https://www.directadmin.com/features.php?id=1298
 * @param settings Object
 * @param settings.keyName Object
 * @param settings.key String
 * @param settings.neverExpires Boolean
 * @param settings.expiryTimestamp Number
 * @param settings.maxUses Number
 * @param settings.clearKey Boolean
 * @param settings.allowHtml Boolean
 * @param settings.passwd String
 * @param settings.type String (Not in linked documentation, use one_time_url for a session url or leave blank for a login key)
 * @param callback
 */
User.prototype.createLoginKey = async function (settings, callback) {
    var options = {
      action: 'create',
      keyname: settings.keyname,
      key: settings.key,
      key2: settings.key2,
      never_expires: settings.neverExpires ? 'yes':'no',
      expiry_timestamp: settings.expiryTimestamp,
      max_uses: settings.maxUses,
      clear_key: settings.clearKey ? 'yes':'no',
      allow_html: settings.allowHtml ? 'yes':'no',
      passwd: settings.passwd,
      type: settings.type,
      json: 'yes'
    };

    // Add optional properties for permissions
    for(let prop in settings)
      if(props.startsWith('select'))
        options[prop] = settings[prop];

    // Remove unused options
    for(let prop in options)
      if(options[prop] === null)
        delete options[prop];

    options = extend(options);

    var createOptions = {
        command: '/CMD_API_LOGIN_KEYS',
        method: 'GET',
        client: this,
        body: options
    };

    return utils.modem(createOptions, callback);
};



module.exports = User;
