module.exports = function(app) {
  
  // ------------ application routes ------------ //

  app.get('*', function(req, res) {
    res.sendfile('./app/public/index.html');
  });

  // ------------ application routes ------------ //

};