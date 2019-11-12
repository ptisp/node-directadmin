var DIRECTADMIN = require('../directadmin');
var config = {
  username: process.env.DIRECTADMIN_USER || 'user',
  password: process.env.DIRECTADMIN_PASS || 'password/loginkey',
  serverUrl: process.env.DIRECTADMIN_HOST || 'host',
  port: process.env.DIRECTADMIN_PORT || '2222'
};

var daexample = new DIRECTADMIN(config);

/* _loginWithUser('teste', function (userConfig) {
    var newUserImpersonate = new DIRECTADMIN(userConfig);


}); */

/* deleteEmailForwarder(daexample, 'as24768.net', 'teste1@as24768.net', function (err, data) {
  console.log(err);
  console.log(data);
}) */

/* updateEmailForwarder(daexample, 'as24768.net', 'nuno_kisc@hotmail.com', 'teste1@as24768.net', function (err, data) {
  console.log(err);
  console.log(data);
}) */

listEmailForwarder(daexample, 'as24768.net', function (err, data) {
    console.log(err);
    console.log(data);
})

/* createEmailForwarder(daexample, 'as24768.net', 'nuno.cardoso@ptisp.pt', 'teste1@as24768.net', function (err, data) {
  console.log(err);
  console.log(data);
}) */

/* changePassword(daexample, 'restaurante-casadosleitoes.pt', 'asd123asd', function (err, data) {
  console.log(err);
  console.log(data);
}) */

/* accountSslInstall(daexample, 'as24768.net', function (err, data) {
  console.log(err);
  console.log(data);
})  */

/* removeRedirect(daexample, 'teste.te', function (err, data) {
    console.log(err);
    console.log(data);
}) */

/* getRedirect(daexample, 'teste.te', function (err, data) {
  console.log(err);
  console.log(data);
}) */

/* addRedirect(daexample, 'teste.te', 'google.pt', 'redirection', function (err, data) {
    console.log(err);
    console.log(data);
}) */

/* removeEmail(daexample, 'teste.te', 'teste1@teste.te', function (err, data) {
    console.log(err);
    console.log(data);
}) */

/* editEmail(daexample, 'teste.te', 'teste1@teste.te', '1234567', function (err, data) {
    console.log(err);
    console.log(data);
}) */

/* addEmail(daexample, 'as24768.net', 'teste2@as24768.net', 'asd123ASD-', function (err, data) {
    console.log(err);
    console.log(data);
})  */
/* listEmails(daexample, 'as24768.net', function (err, data) {
    console.log(err);
    console.log(data);
}) */

function deleteEmailForwarder(parkingserver, domainname, email ,callback) {
  _getUserByDomain(parkingserver, domainname, function (err, user) {
    if (err) {
      callback(err.text);
    }
    else {
      _loginWithUser(user, parkingserver, function (err, userConfig) {
        if (err) {
          callback(err.details);
        }
        else {
          var newUserImpersonate = new DIRECTADMIN(userConfig);
          var user = email.split('@')[0];
          var opts = {
            domain: domainname,
            select0: user
          }

          newUserImpersonate.email.deleteEmailForwarder(opts, function (err, data) {
            if (err) {
              callback(err);
            } else {
              callback();
            }
          });
        }
      });
    }
  });
};

function updateEmailForwarder(parkingserver, domainname, destination, email ,callback) {
  _getUserByDomain(parkingserver, domainname, function (err, user) {
    if (err) {
      callback(err.text);
    }
    else {
      _loginWithUser(user, parkingserver, function (err, userConfig) {
        if (err) {
          callback(err.details);
        }
        else {
          var newUserImpersonate = new DIRECTADMIN(userConfig);
          var user = email.split('@')[0];
          var opts = {
            domain: domainname,
            user: user,
            email: destination
          }

          newUserImpersonate.email.updateEmailForwarder(opts, function (err, data) {
            if (err) {
              callback(err);
            } else {
              callback();
            }
          });
        }
      });
    }
  });
};

function listEmailForwarder(parkingserver, domainname, callback) {
  _getUserByDomain(parkingserver, domainname, function (err, user) {
    if (err) {
      callback(err.text);
    }
    else {
      _loginWithUser(user, parkingserver, function (err, userConfig) {
        if (err) {
          callback(err.details);
        }
        else {
          var newUserImpersonate = new DIRECTADMIN(userConfig);
          newUserImpersonate.email.listEmailForwarder(domainname, function (err, data) {
            if (err) {
              callback(err.details);
            } else {
              callback(undefined, data);
            }
          });
        }
      });
    }
  })
}

function createEmailForwarder(parkingserver, domainname, destination, email ,callback) {
  _getUserByDomain(parkingserver, domainname, function (err, user) {
    if (err) {
      callback(err.text);
    }
    else {
      _loginWithUser(user, parkingserver, function (err, userConfig) {
        if (err) {
          callback(err.details);
        }
        else {
          var newUserImpersonate = new DIRECTADMIN(userConfig);
          var user = email.split('@')[0];
          var opts = {
            domain: domainname,
            user: user,
            email: destination
          }

          newUserImpersonate.email.createEmailForwarder(opts, function (err, data) {
            if (err) {
              callback(err);
            } else {
              callback();
            }
          });
        }
      });
    }
  });
};

function accountSslInstall(parkingserver, domainname, callback) {
  _getUserByDomain(parkingserver, domainname, function (err, user) {
    if (err) {
      callback(err.text);
    }
    else {
      _loginWithUser(user, parkingserver, function (err, userConfig) {
        if (err) {
          callback(err.details);
        }
        else {
          var newUserImpersonate = new DIRECTADMIN(userConfig);
          var opts = {
            domain: domainname,
            name: domainname,
            email: user + '@' + domainname,
            le_select0: 'mail.' + domainname,
            le_select1: 'webmail.' + domainname
          }
          
          newUserImpersonate.account.accountSslInstall(opts, function (err, data) {
            if (err) {
                callback(err);
            } else {
                callback(undefined,user);
            }
          });
        }
      });
    }
  });
}

function changePassword(parkingserver, domainname, newpass, callback) {
  _getUserByDomain(parkingserver, domainname, function (err, user) {
    if (err) {
      callback(err.text);
    }
    else {
      _loginWithUser(user, parkingserver, function (err, userConfig) {
        if (err) {
          callback(err.details);
        }
        else {
          var newUserImpersonate = new DIRECTADMIN(userConfig);
          var opts = {
            domain: domainname,
            user: user,
            type: 'system',
            passwd: newpass,
            passwd2: newpass
          }
          
          newUserImpersonate.account.updateFtpccount(opts, function (err, data) {
            if (err) {
                callback(err);
            } else {
                callback(undefined,user);
            }
          });
        }
      });
    }
  });
}

function getRedirect(parkingserver, domainname, callback) {
  _getUserByDomain(parkingserver, domainname, function (err, user) {
    if (err) {
      callback(err.text);
    }
    else {
      _loginWithUser(user, parkingserver, function (err, userConfig) {
        if (err) {
          callback(err.details);
        }
        else {
          var newUserImpersonate = new DIRECTADMIN(userConfig);

          newUserImpersonate.user.getDomainRedirect(domainname, function (err, res) {
            if (err) {
              callback(err);
            } else {
              console.log(res.length);
              if (Object.keys(res).length === 0) {
                callback();
              }
              else {
                var redirect = {
                  domain: domainname,
                  destination: 'http://' + res[Object.keys(res)[0]]
                };
                callback(undefined, redirect);
              }
            }
          });
        }
      });
    }
  });
};

function removeRedirect(parkingserver, domainname, callback) {
  _getUserByDomain(parkingserver, domainname, function (err, user) {
    if (err) {
      callback(err.text);
    }
    else {
      _loginWithUser(user, parkingserver, function (err, userConfig) {
        if (err) {
          callback(err.details);
        }
        else {
          var newUserImpersonate = new DIRECTADMIN(userConfig);
          var opts = {
            domain: domainname,
            select0: '/'
          }

          newUserImpersonate.user.deleteDomainRedirect(opts, function (err, data) {
            if (err) {
              callback(err);
            } else {
              callback();
            }
          });
        }
      });
    }
  });
};

function addRedirect(parkingserver, domainname, destination, title, callback) {
  _getUserByDomain(parkingserver, domainname, function (err, user) {
    if (err) {
      callback(err.text);
    }
    else {
      _loginWithUser(user, parkingserver, function (err, userConfig) {
        if (err) {
          callback(err.details);
        }
        else {
          var newUserImpersonate = new DIRECTADMIN(userConfig);
          var some = title;
          var opts = {
            domain: domainname,
            from: '/',
            to: destination
          }

          newUserImpersonate.user.addDomainRedirect(opts, function (err, data) {
            if (err) {
              callback(err);
            } else {
              callback();
            }
          });
        }
      });
    }
  });
};

function removeEmail(parkingserver, domainname, email, callback) {
  _getUserByDomain(parkingserver, domainname, function (err, user) {
    if (err) {
      callback(err.text);
    }
    else {
      _loginWithUser(user, parkingserver, function (err, userConfig) {
        if (err) {
          callback(err.details);
        }
        else {
          var newUserImpersonate = new DIRECTADMIN(userConfig);
          var user = email.split('@')[0];
          newUserImpersonate.email.deletePopAccounts(domainname, user, function (err, data) {
            if (err) {
              callback(err);
            } else {
              callback();
            }
          });
        }
      });
    }
  });
};

function editEmail(parkingserver, domainname, email, pass, callback) {
  _getUserByDomain(parkingserver, domainname, function (err, user) {
    if (err) {
      callback(err.text);
    }
    else {
      _loginWithUser(user, parkingserver, function (err, userConfig) {
        if (err) {
          callback(err.details);
        }
        else {
          var newUserImpersonate = new DIRECTADMIN(userConfig);
          var user = email.split('@')[0];
          var opts = {
            user: user,
            passwd: pass,
            passwd2: pass,
            quota: 2048
          }
          newUserImpersonate.email.updatePopAccountsPassword(domainname, opts, function (err, data) {
            if (err) {
              callback(err);
            } else {
              callback();
            }
          });
        }
      });
    }
  });
};

function addEmail(parkingserver, domainname, email, pass, callback) {
  _getUserByDomain(parkingserver, domainname, function (err, user) {
    if (err) {
      callback(err.text);
    }
    else {
      _loginWithUser(user, parkingserver, function (err, userConfig) {
        if (err) {
          callback(err.details);
        }
        else {
          var newUserImpersonate = new DIRECTADMIN(userConfig);
          var user = email.split('@')[0];
          var opts = {
            user: user,
            passwd: pass,
            passwd2: pass,
            quota: 2048,
            limit: 200
          }
          newUserImpersonate.email.createPopAccounts(domainname, opts, function (err, data) {
            if (err) {
              callback(err);
            } else {
              callback();
            }
          });
        }
      });
    }
  });
};

function listEmails(parkingserver, domainname, callback) {
  _getUserByDomain(parkingserver, domainname, function (err, user) {
    if (err) {
      callback(err.text);
    }
    else {
      _loginWithUser(user, parkingserver, function (err, userConfig) {
        if (err) {
          callback(err.details);
        }
        else {
          var newUserImpersonate = new DIRECTADMIN(userConfig);
          newUserImpersonate.email.getFullListPopAccounts(domainname, function (err, data) {
            if (err) {
              callback(err.details);
            } else {
              var emails = [];
              for (var [key, value] of Object.entries(data)) {
                var emailData = _qToArr(value);
                emails.push({
                  user: user,
                  domain: domainname,
                  login: key + '@' + domainname,
                  email: key + '@' + domainname,
                  diskused: emailData.usage,
                  diskquota: emailData.quota
                })
              }
              callback(undefined, emails);
            }
          });
        }
      });
    }
  })
}

function _getUserByDomain(parkingserver, domain, callback) {
  parkingserver.user.getUserByDomain(domain, function (err, res) {
    if (err) {
      //console.log('ERROR');
      //console.log(err);
      callback(err);
    } else {
      //console.log(res);
      callback(undefined, res[Object.keys(res)[0]]);
    }
  });
}

function _loginWithUser(username, parkingserver, callback) {
  var userConfig = {}
  var password = parkingserver.utils.generatePassword();
  var opts = {
    username: username,
    passwd: password,
    passwd2: password
  }

  parkingserver.account.updateUserPassword(opts, function (err, data) {
    if (err) {
      //console.log('ERROR');
      //console.log(err);
      callback(err);
    } else {
      userConfig = {
        username: username,
        password: password,
        serverUrl: parkingserver.config.serverUrl,
        port: parkingserver.config.port
      }
      //console.log(data);
      callback(undefined, userConfig);
    }
  });
}
function _qToArr(q) {
  q = decodeURIComponent((q).replace(/\+/g, '%20'));
  arr = {};
  var a = q.split(/&(?!amp;)/g);
  for (x in a) {
    var pair = a[x].split('=');
    arr[pair[0]] = pair[1];
  }
  return arr;
}
