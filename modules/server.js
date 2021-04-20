var utils = require('../lib/utils');
var extend = utils.extend;

var Server = function (config) {
    this.config = config;
};

/**
 *
 * Get Server Statistics: - https://www.directadmin.com/api.php
 * @param callback
 */
Server.prototype.getServerStatistics = async function (callback) {
    var options = {};

    options = extend(options);

    var createOptions = {
        command: '/CMD_API_ADMIN_STATS',
        method: 'POST',
        client: this,
        body: options
    };

    return utils.modem(createOptions, callback);
};

/**
 *
 * List Databases: - https://www.directadmin.com/api.php
 * @param callback
 */
Server.prototype.getListDatabases = async function (callback) {
    var options = {};

    options = extend(options);

    var createOptions = {
        command: '/CMD_API_DATABASES',
        method: 'POST',
        client: this,
        body: options
    };

    return utils.modem(createOptions, callback);
};

/**
 *
 * Create Database: - https://www.directadmin.com/api.php
 * @param databaseInfo Object
 * @param databaseInfo.name String
 * @param databaseInfo.user String
 * @param databaseInfo.passwd String
 * @param databaseInfo.passwd2 String
 * @param callback
 */
Server.prototype.createDatabase = async function (databaseInfo, callback) {
    var options = {
        action: 'create'
    };

    options = extend(options, databaseInfo);

    var createOptions = {
        command: '/CMD_API_DATABASES',
        method: 'POST',
        client: this,
        body: options
    };

    return utils.modem(createOptions, callback);
};

/**
 *
 * Delete Database: - https://www.directadmin.com/api.php
 * @param databaseInfo Object
 * @param databaseInfo.select0 String
 * @param databaseInfo.select1 String
 * @param databaseInfo.selectX String
 * @param callback
 */
Server.prototype.deleteDatabase = async function (databaseInfo, callback) {
    var options = {
        action: 'delete'
    };

    options = extend(options, databaseInfo);

    var createOptions = {
        command: '/CMD_API_DATABASES',
        method: 'POST',
        client: this,
        body: options
    };

    return utils.modem(createOptions, callback);
};

module.exports = Server;
