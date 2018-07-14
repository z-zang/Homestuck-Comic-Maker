window.onload = bgSetup();
var bgURL = '';

// Btn setup
function bgSetup() {
  var bgBtns = document.getElementsByClassName('bgSet');
  var getURL = function() {
      bgUrl = this.getAttribute("value");
      setBg(bgUrl)
  };
  for (var i = 0; i < bgBtns.length; i++) {
      bgBtns[i].addEventListener('click', getURL, false);
  }
}

function setBg(bgUrl) {
  console.log('working ' + bgUrl)
  document.getElementById("canvas-bg").style.backgroundImage = `url(${bgUrl})`;
}

// Other canvas
var zoomVal = document.getElementById("zoomControl")
var cZoom = document.getElementById("cZoom")

zoomVal.oninput = function() {
  var zoom = this.value
  cZoom.innerHTML = 'Canvas Zoom: ' + zoom + '%';
  document.getElementById("canvas-bg").style.backgroundSize = zoom+'%'
}
