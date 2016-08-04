var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);

server.listen(5000);

var speaker = "";

app.use(express.static(__dirname + "/slides/reveal.js"));

io.on('connection', function(socket){
  /* Speaker Events */
  socket.on('direction_up', function() {
    socket.broadcast.emit('direction_up');
    console.log("up")
  });
  socket.on('direction_down', function() {
    socket.broadcast.emit('direction_down');
    console.log("down")
  });
  socket.on('direction_left', function() {
    socket.broadcast.emit('direction_left');
    console.log("left")
  });
  socket.on('direction_right', function() {
    socket.broadcast.emit('direction_right');
    console.log("right")
  });

  socket.on('disconnect', function(){});
});
