var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    rootPath: rootPath,
    db: 'mongodb://bkm-admin:bkm123!@ds063769.mongolab.com:63769/bkm-event-tracker',
    port: process.env.PORT || 8080
  },
  production: {
    rootPath: rootPath,
    db: 'mongodb://bkm-admin:bkm123!@ds063769.mongolab.com:63769/bkm-event-tracker',
    port: process.env.PORT || 8080
  }
}