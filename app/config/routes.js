module.exports = function(app) {
  
  // application -------------------------------------------------------------
  app.all('/api/*', function(req, res) {
    res.send(404);
  });

  app.get('*', function(req, res) {
    res.sendfile('./app/public/index.html');
  });

};