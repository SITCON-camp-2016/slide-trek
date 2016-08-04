var socket = io();

socket.on('direction_up', function () {
  document.getElementsByClassName('navigate-up')[0].click();
});


socket.on('direction_down', function () {
  document.getElementsByClassName('navigate-down')[0].click();
});


socket.on('direction_left', function () {
  document.getElementsByClassName('navigate-left')[0].click();
});


socket.on('direction_right', function () {
  document.getElementsByClassName('navigate-right')[0].click();
});


document.onkeydown = function(event){
  var keycode = event.which||event.keycode;
  console.log(keycode);
  switch(keycode){
    case 37 : socket.emit('direction_left');
      break;

    case 38 : socket.emit('direction_up');
      break;

    case 39 : socket.emit('direction_right');
      break;

    case 40 : socket.emit('direction_down');
      break;
    }

}
