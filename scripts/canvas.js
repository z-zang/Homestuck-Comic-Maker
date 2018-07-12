// Initial canvas setup
var c = new fabric.Canvas('c');
c.setHeight(450);
c.setWidth(650);

// adds image when button is clicked
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

// clears canvas
function clearCanvas() {
  console.log('clearing')
  c.clear();
  setBg(' ')
}

function exportImg() {
  var img = c.toDataURL("image/png");
  var tab = window.open('about:blank','image from canvas');
  tab.document.write(
    '<div id="canvas-bg">'
    +'<img src="'+img+'"/>'
    +'</div>'
  );

}
    // <div class="wrapper" style='background-image': url(${bgUrl})>
    //     </div>
