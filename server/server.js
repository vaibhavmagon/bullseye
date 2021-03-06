var loopback = require('loopback');
var boot = require('loopback-boot');
var path = require('path');

var app = module.exports = loopback();

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    console.log('Web server listening at: %s', app.get('url'));
  });
};

/*app.use(loopback.static(path.resolve(__dirname, '../../client')));*/

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module){
    app.io = require('socket.io')(app.start());
    app.io.sockets.on('connection', function(socket){
      socket.on('chat message', function(msg){
        console.log("@@@@@@@@",msg);
        app.io.emit('new', msg);
      });
    });
    /*app.start();*/
  }
});
