// font guide tooltip
$('[data-toggle="tooltip"]').tooltip();
$('.tooltip-inner').tooltip({html: true})

// Select a specified element
$('#myTooltip').tooltip();

//get text from input
var inputText = document.getElementById('textbox').value
var fonts = ["Courier New Bold", "Comic Sans MS", "TrollType V1", "TrollType V2", "Typostuck"];
// "GhostKid"

function addText() {
  inputText = document.getElementById('textbox').value
  var textbox = new fabric.Textbox(inputText, {
    left: 50,
    top: 50,
    width: 150,
    fontSize: 20,
  });
  c.add(textbox).setActiveObject(textbox);
}

// Populate the fontFamily select
var select = document.getElementById("textdiv");
fonts.forEach(function(font) {
  var option = document.createElement('option');
  option.innerHTML = font;
  option.value = font;
  select.appendChild(option);
});

// Apply selected font on change
document.getElementById('textdiv').onchange = function() {
  if (this.value !== 'Courier New Bold') {
    loadAndUse(this.value);
  } else {
    c.getActiveObject().set("fontFamily", this.value);
    c.requestRenderAll();
  }
};

// switching fonts of a selected object
function loadAndUse(font) {
  var myfont = new FontFaceObserver(font)
  myfont.load()
    .then(function() {
      // when font is loaded, use it.
      c.getActiveObject().set("fontFamily", font);
      c.requestRenderAll();
    }).catch(function(e) {
      console.log(e)
      console.warn('font loading failed ' + font);

    });
}
