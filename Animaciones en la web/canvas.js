function loaded(){
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const radius = 50;
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const startAngle = 0;
let endAngle = 0;
const counterClockwise = false;
const fillSpeed = 0.010;

function drawCircle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, startAngle, endAngle, counterClockwise);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();

  if (endAngle < Math.PI * 2) {
    endAngle += fillSpeed;
    requestAnimationFrame(drawCircle);
  }
}

drawCircle();
}