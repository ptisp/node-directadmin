const fs = require("fs");
const path = require("path");

const modules = require("./modules/index.js");

class DIRECTADMIN {
  constructor(options) {
    this.utils = require("./lib/utils");

    const requiredOptions = ["username", "serverUrl"];
    for (const required of requiredOptions)
      if (!options[required])
        throw new Error(`options.${required} is a required argument.`);

    this.config = options;
    this.authorized = false;

    // Add all the modules
    for (const name in modules)
      this[name] = new modules[name](this.config);
  }
}

module.exports = DIRECTADMIN;
