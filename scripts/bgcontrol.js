window.onload = bgSetup();
var bgURL = '';

function bgSetup() {
  var bgBtns = document.getElementsByClassName('bgSet');

  var getURL = function() {
      bgUrl = this.getAttribute("value");
      console.log('bgworking')
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
