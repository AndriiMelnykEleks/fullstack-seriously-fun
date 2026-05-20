const canvas = document.getElementById("matrix-rain");
const ctx = canvas.getContext("2d");

const glyphs = "АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ";
const fontSize = 18;
let columns = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const count = Math.ceil(canvas.width / fontSize);
  columns = Array.from({ length: count }, () => Math.random() * -100);
}

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < columns.length; i += 1) {
    const text = glyphs[Math.floor(Math.random() * glyphs.length)];
    const x = i * fontSize;
    const y = columns[i] * fontSize;

    ctx.fillStyle = "#9dffb2";
    ctx.fillText(text, x, y);

    if (y > canvas.height && Math.random() > 0.975) {
      columns[i] = 0;
    } else {
      columns[i] += 1;
    }
  }
}

resize();
window.addEventListener("resize", resize);
setInterval(draw, 40);
