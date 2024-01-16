const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;
let vxl = 0;
let vxr = 0;
let vy = 0;
const rectangleWidth = 50;
const rectangleHeight = 50;

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //premikanje 
    x += vxl;
    x += vxr;
    y += vy;

    //meje canvasa se doloca v index html 
    x = Math.max(0, Math.min(x, canvas.width - rectangleWidth));
    y = Math.max(0, Math.min(y, canvas.height - rectangleHeight));


    ctx.fillRect(x, y, rectangleWidth, rectangleHeight);

    requestAnimationFrame(update);
}

update();

