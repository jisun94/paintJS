const canvas = document.querySelector('#jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.querySelectorAll('.jsColor');
const range = document.querySelector('#jsRange');

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

function handleColorChange(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
}

function handleRangeChange(event) {
  size = event.target.value;
  ctx.lineWidth = size;
}

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMOve);
  canvas.addEventListener('mousedown', startPainting);
  canvas.addEventListener('mouseup', stopPainting);
  canvas.addEventListener('mouseleave', stopPainting);
}

colors.forEach((color) => color.addEventListener('click', handleColorChange));

if (range) {
  range.addEventListener('input', handleRangeChange);
}
