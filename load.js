 function zobrazit(file) {
 	var full = 'rozvrhy/' + file;
  $('.ajx_content').load(full).fadeIn()
  }
  document.addEventListener('DOMContentLoaded', function () {
   var storage = localStorage["favorite_timetable"];
   var settings = 'settings.html';
  if (!storage) {
  window.location.href='settings.html';
  }
  else {
  	zobrazit(storage); 
  }
});

$("#trida").bind('change',function() {
 	var prvok = document.getElementById("trida");
	var b = prvok.options[prvok.selectedIndex].value;
	zobrazit(b);
	});
document.getElementById('settings').addEventListener('click', function () {
   window.open('settings.html','1367923262882','width=400,height=450,toolbar=0,menubar=0,location=0,status=0,scrollbars=0,resizable=0,left=0,top=0');return false;
  });