// Exports images with toDataUrl

// Fix to include background image, then merge two pictures together
function exportImg() {
  var img = c.toDataURL("image/png");
  var tab = window.open('about:blank','image from canvas');
  tab.document.write(
    '<div id="canvas-bg">'
    +'<img src="'+img+'"/>'
    +'</div>'
  );
}
