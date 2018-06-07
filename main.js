
var v;
var tags = ['All', 'Jin', 'Jhope', 'Suga', 'Jimin', 'Jungguk', 'RM', 'V'];
var context;
var cw;
var ch;

//variables del bucle
loopbool = false;
loopstart = 0;
loopend = 0;
loopn = 0;

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
        var t;
        var min;
        var s;
        if(v.paused || v.ended) return false;
        c.drawImage(video,0,0,w,h);
        if (video == v){
          setTimeout(draw,20,video,c,w,h);
        }
        t = Math.floor(video.currentTime);
        min = Math.trunc(t/60);
        s = t%60;
        document.getElementById("current-time").innerHTML =min + ':' + s;
        /*if (loopbool == true){
          if(t==loopend){
            loop();
          }
        }*/
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

/*  function initloop(){

    var x = document.getElementById("myText").value;
    var arraycad = x.split(':');
    console.log(arraycad);
    console.log(arraycad.lenght);
    //if (arraycad.lenght != 3){
      //console.log('error de input');
    //}else{
      loopbool = true;
      loopstart = parseInt(arraycad[0]);
      loopend = parseInt(arraycad[1]);
      loopn = parseInt(arraycad[2]);
    //}
  }

  function loop(){
    var j;
    var i;
    var video;

    if(loopn ==0){
      loopbool = false;
    }else{
      for(j=0; j=loopn-1; j++){
        for(i=0; i<tags.length; i++){
          video = document.getElementById(tags[i]);
          video.currentTime = loopstart;
        }

      }
    }
  }*/
