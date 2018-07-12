// NOTE: these are only for sprite/obj buttons. should change the variable name to not get confused with bg images
function btnSetup() {
  var clickbtns = document.getElementsByClassName('btnAdd');

  var getVal = function() {
      var val = this.getAttribute("value");
      addImg(val)
  };

  for (var i = 0; i < clickbtns.length; i++) {
      clickbtns[i].addEventListener('click', getVal, false);
  }
}

window.onload = btnSetup();
