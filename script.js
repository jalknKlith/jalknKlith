// Function to convert degrees to radians
const degToRad = (degrees) => {
    return degrees / 180 * Math.PI;
};

// Function to generate random number within a range
const randomRange = (min, max) => {
    return Math.random() * (max - min) + min;
};

// --- Sketch 1: Angles ---
const canvasAngles = document.getElementById("angles");
const ctxAngles = canvasAngles.getContext("2d");
ctxAngles.fillStyle = 'white';

const drawAngles = (canvas, ctx) => {
  const centerX = canvas.width * 0.5;
  const centerY = canvas.height * 0.5;
  const rectWidth = canvas.width * 0.1;
  const rectHeight = canvas.height * 0.1;
  const numShapes = 12;

  for (let i = 0; i < numShapes; i++) {
    const slice = degToRad(360 / numShapes);
    const angle = slice * i;

    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(angle);

    ctx.beginPath();
    ctx.rect(rectWidth, rectHeight, rectWidth, rectHeight);
    ctx.fill();
    ctx.restore();
  }
};

drawAngles(canvasAngles, ctxAngles);

// --- Sketch 2: Arcs ---
const canvasArcs = document.getElementById("arcs");
const ctxArcs = canvasArcs.getContext("2d");
ctxArcs.fillStyle = 'green';

const drawArcs = (canvas, ctx) => {
  const centerX = canvas.width * 0.5;
  const centerY = canvas.height * 0.5;
  const numArcs = 40;
  const radius = canvas.width * 0.3;

  for (let i = 0; i < numArcs; i++) {
    const slice = degToRad(360 / numArcs);
    const angle = slice * i;

    const x = centerX + radius * Math.sin(angle);
    const y = centerY + radius * Math.cos(angle);

    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(-angle);

    ctx.lineWidth = randomRange(5, 20);
    ctx.strokeStyle = 'white';

    ctx.beginPath();
    ctx.arc(0, 0, radius * randomRange(0.7, 1.3), slice * randomRange(2, 3), slice * randomRange(1, 5));
    ctx.stroke();
    ctx.restore();
  }
};

drawArcs(canvasArcs, ctxArcs);