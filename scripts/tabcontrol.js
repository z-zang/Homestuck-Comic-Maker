function show(sectionName) {
  // console.log(sectionName)

  // making sections visible
  var menuSections = document.getElementsByClassName("selection");
  for (var i = 0; i < menuSections.length; i++) {
      menuSections[i].style.display = "none";
  }
  document.getElementById(sectionName).style.display = "block";

  //changing tab visibility
  var menuBtns = document.getElementsByClassName("menu-btn");

  for (var x = 0; x < menuBtns.length; x++) {
      menuBtns[x].style.backgroundColor = "buttonface";
      menuBtns[x].style.borderBottom = "black 1px solid";
  }

  var menuBtn = document.getElementById(sectionName+"-btn")

  menuBtn.style.backgroundColor = "white";
  menuBtn.style.borderBottom = "white";
}