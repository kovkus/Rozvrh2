// Saves options to localStorage.
function save_options() {
  var select = document.getElementById("trida");
  var trida = select.children[select.selectedIndex].value;
  localStorage["favorite_timetable"] = trida;
  var saved = localStorage["favorite_timetable"];

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "<button type='button' value='Úspešne uložené' class='css3button'>Úspešne uložené <br> Aplikáciu spustite znova</button>";
  setTimeout(function() {
   status.innerHTML = "";
   window.location.href='rozvrh.html';
   window.close();
   //window.location = saved;
  }, 1500);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var favorite = localStorage["favorite_class"];
  if (!favorite) {
    return;
  }
  var select = document.getElementById("trida");
  for (var i = 0; i < select.children.length; i++) {
    var child = select.children[i];
    if (child.value == favorite) {
      child.selected = "true";
      break;
    }
  }
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);