<script>
const canvas = document.getElementById("scope");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

let time = 0;

function signal(t) {
  return Math.sin(t); // waveform
}

function draw() {
  ctx.fillStyle = "rgba(0,0,0,0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.strokeStyle = "#00ff00";
  ctx.lineWidth = 2;

  for (let x = 0; x < canvas.width; x++) {
    let t = time + x * 0.02;
    let y = signal(t);

    let screenY = canvas.height / 2 - y * 100;

    if (x === 0) ctx.moveTo(x, screenY);
    else ctx.lineTo(x, screenY);
  }

  ctx.stroke();

  time += 0.05;
  requestAnimationFrame(draw);
}

draw();
