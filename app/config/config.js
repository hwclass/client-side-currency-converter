var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    rootPath: rootPath,
    db: '',
    port: process.env.PORT || 8080
  },
  production: {
    rootPath: rootPath,
    db: '',
    port: process.env.PORT || 8080
  }
}