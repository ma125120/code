var clock=document.getElementById('time');
var ctx=clock.getContext('2d');
var width=ctx.canvas.width;
var height=ctx.canvas.height;
var r=width/2;
function drawBackground() {
  ctx.save();
  ctx.translate(r,r);
  ctx.beginPath();
  ctx.lineWidth=10;
  ctx.arc(0,0,r-5,0,2*Math.PI);
  ctx.stroke();
  var hoursArr=[3,4,5,6,7,8,9,10,11,12,1,2];
  hoursArr.forEach(function(item,i) {
    var rad=2*Math.PI/12*i;
    var x=Math.cos(rad)*(r-30);
    var y=Math.sin(rad)*(r-30);
    ctx.font="40px Arial";
    ctx.textAlign="center";
    ctx.textBaseline="middle";
    ctx.fillText(item,x,y);
  });

  for(var i=0;i<60;i++) {
    var rad=2*Math.PI/60*i;
    var x=Math.cos(rad)*(r-15);
    var y=Math.sin(rad)*(r-15);
    ctx.beginPath();
    if(i%5==0) {
      ctx.fillStyle="#000";
      ctx.arc(x,y,2,0,2*Math.PI,false);
    } else {
      ctx.fillStyle="#ccc";
      ctx.arc(x,y,2,0,2*Math.PI,false);
    }
    ctx.fill();
  }
}
function drawHour(hour,minute) {
  ctx.save();
  ctx.beginPath();
  ctx.lineWidth=6;
  ctx.lineCap="round";
  var rad=2*Math.PI/12*hour;
  var mrad=2*Math.PI/12/60*minute;
  ctx.rotate(mrad+rad);
  ctx.moveTo(0,10);
  ctx.lineTo(0,-r/2);
  ctx.stroke();
  ctx.restore();
}

function drawMintue(minute) {
  ctx.save();
  ctx.beginPath();
  ctx.lineWidth=3;
  ctx.lineCap="round";
  var rad=2*Math.PI/60*minute;
  ctx.rotate(rad);
  ctx.moveTo(0,10);
  ctx.lineTo(0,-r);
  ctx.stroke();
  ctx.restore();
}

function drawSecond(second) {
  ctx.save();
  ctx.beginPath();
  ctx,fillStyle="#c14543";
  var rad=2*Math.PI/60*second;
  ctx.rotate(rad);
  ctx.moveTo(-2,20);
  ctx.lineTo(2,20);
  ctx.lineTo(1,-r-10);
  ctx.lineTo(-1,-r-10);
  ctx.moveTo(0,20);
  ctx.lineTo(0,-r);
  ctx.fill();
  ctx.restore();
}
function drawDot() {
  ctx.beginPath();
  ctx.fillStyle="#fff";
  ctx.arc(0,0,3,0,2*Math.PI,false);
  ctx.fill();
}

function draw() {
  ctx.clearRect(0,0,width,height);0
  drawBackground();
  var now=new Date();
  var hour=now.getHours();
  var minute=now.getMinutes();
  var second=now.getSeconds();
  drawHour(hour,minute);
  drawMintue(minute);
  drawSecond(second);
  drawDot();
  ctx.restore();
}
draw();
setInterval(draw,1000);
