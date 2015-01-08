module.exports = function(app) {
  
  // ------------ application ------------ //
  
  app.all('/api/*', function(req, res) {
    res.send(404);
  });

  app.get('*', function(req, res) {
    res.sendfile('./app/public/index.html');
  });

  // ------------ application ------------ //

};

module.exports = function(app) {

  // routes ==================================================
  
  // application -------------------------------------------------------------
  app.all('/api/*', function(req, res) {
    res.send(404);
  });

  app.get('*', function(req, res) {
    res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
  });
};