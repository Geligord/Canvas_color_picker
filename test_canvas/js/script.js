let i
let canvas = document.getElementById('canvas');
let sandbox = document.getElementById('sandbox');
function bothCanvas() {
    // Первый канвас
    canvas.width = 600;
    canvas.height = 600;
    canvas.style.border = "1px solid #ddd";
    let context = canvas.getContext('2d');

    // Второй канвас
    sandbox.width = 600;
    sandbox.height = 50;
    sandbox.style.border = "1px solid #ddd";

    let ctx = sandbox.getContext('2d');
    ctx.fillStyle='black';
    ctx.fillRect(0, 0, sandbox.width, sandbox.height);

    context.beginPath();
    context.fillStyle = "black";
    for (i = 0; i < 5; i++) {
       context.lineTo(Math.cos((18+i*72-30)/180*Math.PI )*100 + 100, -Math.sin((18+i*72-30)/180*Math.PI)*100 + 100);
       context.lineTo(Math.cos((54+i*72-30)/180*Math.PI)*50 + 100, -Math.sin((54+i*72-30)/180*Math.PI)*50 + 100);
     }
    context.closePath();
    context.stroke();
    context.fill();

    context.moveTo(200, 0)

    context.beginPath();
    context.fillStyle = "green";
    for (i = 0; i < 5; i++) {
       context.lineTo(Math.cos((18+i*72-30)/180*Math.PI)*100 + 300, -Math.sin((18+i*72-30)/180*Math.PI)*100 + 100);
       context.lineTo(Math.cos((54+i*72-30)/180*Math.PI)*50 + 300, -Math.sin((54+i*72-30)/180*Math.PI)*50 + 100);
    }
    context.closePath();
    context.fill();

    context.moveTo(400, 0)

    context.beginPath();
    context.fillStyle = "blue";
    for (i = 0; i < 5;i ++) {
       context.lineTo(Math.cos((18+i*72-30)/180*Math.PI )*100 + 500, -Math.sin( (18+i*72-30)/180*Math.PI )*100 + 100);
       context.lineTo(Math.cos((54+i*72-30)/180*Math.PI )*50 + 500, -Math.sin( (54+i*72-30)/180*Math.PI )*50 + 100);
    }
    context.closePath();
    context.fill();

    context.moveTo(0, 400)
     
    context.beginPath();
    context.fillStyle = "red";
    for (i = 0; i < 5; i++) {
       context.lineTo(Math.cos( (18+i*72-30)/180*Math.PI )*100 + 100, -Math.sin( (18+i*72-30)/180*Math.PI )*100 + 500);
       context.lineTo(Math.cos( (54+i*72-30)/180*Math.PI )*50 + 100, -Math.sin( (54+i*72-30)/180*Math.PI )*50 + 500);
    }
    context.closePath();
    context.fill();

    context.moveTo(200, 400)

    context.beginPath();
    context.fillStyle = "yellow";
    for (i = 0; i < 5; i++) {
       context.lineTo(Math.cos((18+i*72-30)/180*Math.PI)*100 + 300, - Math.sin((18+i*72-30)/180*Math.PI)*100 + 500);
       context.lineTo(Math.cos((54+i*72-30)/180*Math.PI)*50 + 300, - Math.sin((54+i*72-30)/180*Math.PI)*50 + 500);
    }
    context.closePath();
    context.fill();

    canvas.addEventListener("click", function clickColor(event) {
        let imgData = context.getImageData(event.pageX, event.pageY, 1, 1);
        let red = imgData.data[0];
        let green = imgData.data[1];
        let blue = imgData.data[2];
        let alpha = imgData.data[3];
        console.log(red + " " + green + " " + blue + " " + alpha);
        
        if (red == 0 && green == 0 && blue == 0 && alpha == 0) {
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, sandbox.width, sandbox.height);
        }
        ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
        ctx.fillRect(0, 0, sandbox.width, sandbox.height);
    })

}
bothCanvas()