var passwd = "WeLoveNTUOSC!"

var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);

var cheerio = require('cheerio');
var fs = require('fs');

server.listen(5000);

app.set("view engine", "ejs");

app.get('/:slide_title/:slide_name',function(req, res){
  console.log(__dirname);
  var slide_title = req.params.slide_title;
  var slide_name = req.params.slide_name;
  console.log("Slide Folder Name: " + slide_title);
  console.log("Slide File Name: " + slide_name);
  var path = __dirname + "/slides/" + slide_title + "/" + slide_name;

  fs.readFile(path, function(err, data){
    var $ = cheerio.load(data);
    var slide_head = $('head').html();
    var slide_body = $('body').html();

    do_render(res, slide_head, slide_body);
  });
});

app.use(express.static(__dirname + "/slides"));

function do_render(res, slide_head, slide_body) {
  res.render(__dirname + "/template/st-view", {
    slide_head : slide_head,
    slide_body : slide_body,
  });
}

io.on('connection', function(socket){
  /* Speaker Events */
  socket.on('passwd',function(data){
    if (passwd != data) {
      return;
    } else {
      socket.broadcast.emit('is_audience', true);
    }
  });

  socket.on('pagechange', function(data) {
    if (passwd != data.passwd) {
      return;
    } else {
      socket.broadcast.emit('pagechange', data.state);
    }
  });

  socket.on('mousemove', function(data) {
    if (passwd != data.passwd) {
      return;
    } else {
      socket.broadcast.emit('mousemove', data.mousePos);
    }
  });

  socket.on('disconnect', function(){});
});
