const canvas = document.querySelector('#jsCanvas');
const colors = document.querySelectorAll('.jsColor');
const ctx = canvas.getContext('2d');

ctx.strokeStyle = '#2c2c2c';
ctx.lineWidth = 2.5;
canvas.width = 500;
canvas.height = 500;

let painting = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMOve(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function handleClickedColor(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
}

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMOve);
  canvas.addEventListener('mousedown', startPainting);
  canvas.addEventListener('mouseup', stopPainting);
  canvas.addEventListener('mouseleave', stopPainting);
}

colors.forEach((color) => color.addEventListener('click', handleClickedColor));
