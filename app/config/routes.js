'use strict';

/**
 * routes.js
 * The router for the application
 * TODO : It is needed to be expanded if new routers will be added
 */

module.exports = function(app) {

  /**
  * module() is a module creation method
  *
  * @param <Object> req
  * @param <Object> res
  */
  app.get('*', function(req, res) {
    res.sendfile('./app/public/index.html');
  });

};