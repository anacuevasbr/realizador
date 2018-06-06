//document.addEventListener('DOMContentLoaded', function(){
var v;

  function asignvideo(nombre, h, w){
    var canvas = document.getElementById('mycanvas');
    var context = canvas.getContext('2d');
    v = document.getElementById(nombre);
    document.getElemnetbyId(nombre).setAttribute("muted");
    var cw = Math.floor(canvas.clientHeight*(w/h));
    var ch = Math.floor(canvas.clientHeight);
    canvas.width = cw;
    canvas.height = ch;
    context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    draw(v,context,cw,ch);
    document.addEventListener()
    }


    function draw(v,c,w,h) {
        if(v.paused || v.ended) return false;
        c.drawImage(v,0,0,w,h);
        setTimeout(draw,20,v,c,w,h);
    }
