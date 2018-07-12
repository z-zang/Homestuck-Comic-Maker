var tabs = document.querySelectorAll('.menu-btn');
var panels = document.querySelectorAll('selection');

for(var j = 0; j < tabs.length; j++) {
  var tab = tabs[j];
  setTabHandler(tab, j);
}

function setTabHandler(tab, tabPos) {
  tab.onclick = function() {
    for(i = 0; i < tabs.length; i++) {
      tabs[i].className = '';
    }

    tab.className = 'active';

    for(i = 0; i < panels.length; i++) {
      panels[i].className = '';
    }

    panels[tabPos].className = 'active-panel';
  }
}
