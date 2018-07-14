// Initial canvases setup
// Fabric Canvas
var c = new fabric.Canvas('c');
c.setHeight(450);
c.setWidth(650);

// Vanilla Canvas
var bgCanvas = document.getElementById("canvas-bg");
var bgCtx = bgCanvas.getContext('2d');

// BOTH: clears canvas, sets bg to no url
function clearCanvas() {
  c.clear();
  setBg(' ');
}

// CANV1: adds image when button is clicked
function addImg(val) {
    fabric.Image.fromURL(val, function(img) {
    console.log('got value ' + val)
    img.set({
        left: Math.random() * 500,
        top: Math.random() * 300,
        angle: 0,
        opacity: 1
    })
    c.add(img);
  });
}

// Deleting images, either singular/as a group
function delSelect(){
	var activeObject = c.getActiveObject();
  console.log(activeObject);
  console.log(activeObject['_objects'])
  if (activeObject['_objects']) {
    activeObject['_objects'].map(x => c.remove(x));
  } else if (activeObject) {
    c.remove(activeObject);
  }
}
