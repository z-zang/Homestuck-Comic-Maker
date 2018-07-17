// Get the modal
var modal = document.getElementsByClassName('modal-popup')['0'];

//display modal when clicking select navbar buttons
// TODO: customize which carousel image displays
function displayModal(){
  modal.style.display = "block";
  var id = event.target.getAttribute('id');
  switch (id) {
    case 'about':
      console.log('about')
      $( "#about" ).trigger("click");
      break;
    case 'instructions':
      console.log('instructions')
      $( "#instructions" ).trigger("click");
      break;
    case 'contact':
      $( "#contact" ).trigger("click");
      console.log('contact')
      break;
    case 'credit':
      $( "#contact" ).trigger("click");
      console.log('contact')
      break;
  }

}

// close modal by clicking span
function closeModal() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$('#myCarousel').carousel({});
