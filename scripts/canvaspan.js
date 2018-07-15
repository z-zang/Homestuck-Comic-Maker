// Controls the panning arrows and the keyboard
function arrowSetup(){
  var arrows = document.getElementsByClassName("arrow");
  for (var i = 0; i < arrows.length; i++) {
      arrows[i].addEventListener('mousedown', panCanvas, false);
  }
  console.log('done')
}

arrowSetup();

// TODO: link arrow keys and onscreen buttons to changing canvas2's background-position property
function panCanvas() {
//   if
//   switch (expression) {
//     case expression:
//
//       break;
//     default:
//
//   }
}
