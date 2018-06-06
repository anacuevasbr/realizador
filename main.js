//document.addEventListener('DOMContentLoaded', function(){
var v;
var tags = ['All', 'Jin', 'Jhope', 'Suga', 'Jimin', 'Jungguk', 'RM', 'V'];
var context;
var cw;
var ch;

  function asignvideo(nombre, h, w){
    var canvas = document.getElementById('mycanvas');
    context = canvas.getContext('2d');
    v = document.getElementById(nombre);

    cw = Math.floor(canvas.clientHeight*(w/h));
    ch = Math.floor(canvas.clientHeight);
    canvas.width = cw;
    canvas.height = ch;
    context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    changeattr(nombre);
    draw(v,context,cw,ch);
    }


  function draw(video,c,w,h) {
        if(v.paused || v.ended) return false;
        c.drawImage(video,0,0,w,h);
        if (video == v){
          setTimeout(draw,20,video,c,w,h);
        }
  }

  function changeattr(name){
    var i;
    var video;

    for(i=0; i<tags.length; i++){
      video = document.getElementById(tags[i]);
      if(tags[i] == name){
        video.muted = false;
        video.style.borderColor = 'white';
      } else{
        video.muted = true;
        video.style.borderColor = 'black';
      }
    }
  }

  function playpause(){
    var i;
    var video;

    for(i=0; i<tags.length; i++){
      video = document.getElementById(tags[i]);
      if (video.paused) {
        video.play();
        draw(v,context,cw,ch);
      }else{
        video.pause();
      }
    }
  }
