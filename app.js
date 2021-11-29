const canvas = document.querySelector('#jsCanvas');

let painting = false;

function stopPainting() {
  painting = false;
}

function onMouseMOve(event) {
  const x = event.offsetX;
  const y = event.offsetY;
}

function onMouseDown(event) {
  painting = true;
}

function onMouseUp(event) {
  stopPainting();
}

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMOve);
  canvas.addEventListener('mousedown', onMouseDown);
  canvas.addEventListener('mouseup', onMouseUp);
  canvas.addEventListener('mouseleave', stopPainting);
}
