const canvas = document.querySelector('#jsCanvas');
const colors = document.querySelectorAll('#jsColor');
const fill = document.querySelector('#jsFill');
const paint = document.querySelector('#jsPaint');
const stroke = document.querySelector('#jsStroke input');
const save = document.querySelector('#jsSave');
const ctx = canvas.getContext('2d');

canvas.width = 830;
canvas.height = 600;

ctx.strokeStyle = 'black';
ctx.fillStyle = '#fff';
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
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

function changeColor(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function onMouseClick() {
  if (filling === true) {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

function fillTheColor(event) {
  filling = true;
}

function paintTheColor() {
  filling = false;
}

function changeStroke(event) {
  value = event.target.value;
  ctx.lineWidth = value;
}

function saveTheImage() {
  const image = canvas.toDataURL();
  const link = document.createElement('a');
  link.href = image;
  link.download = 'PaintJS[EXPORT]🎨';
  link.click();
}

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mousedown', startPainting);
  canvas.addEventListener('mouseup', stopPainting);
  canvas.addEventListener('mouseleave', stopPainting);
  canvas.addEventListener('click', onMouseClick);
  canvas.addEventListener(
    'touchmove',
    function (e) {
      var touch = e.touches[0];
      var mouseEvent = new MouseEvent('mousemove', {
        clientX: touch.clientX,
        clientY: touch.clientY,
      });
      canvas.dispatchEvent(mouseEvent);
    },
    false
  );
}

colors.forEach((color) => {
  color.addEventListener('click', changeColor);
});

if (fill) {
  fill.addEventListener('click', fillTheColor);
}

if (paint) {
  paint.addEventListener('click', paintTheColor);
}

if (stroke) {
  stroke.addEventListener('input', changeStroke);
}

if (save) {
  save.addEventListener('click', saveTheImage);
}
