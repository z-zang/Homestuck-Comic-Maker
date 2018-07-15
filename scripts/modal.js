// Get the modal
var modal = document.getElementsByClassName('modal-popup')['0'];

//display modal when clicking select navbar buttons
// TODO: customize which carousel image displays
function displayModal(){
  modal.style.display = "block";
}

// close modal by clicking span
function closeModal() {
  console.log('firing');
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$('#myCarousel').carousel({});
