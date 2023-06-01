








//MULTIPLE SAVES PER BROWSER WITH UNIQUE NAMES!? SOUNDS DOABLE

/* ONLOAD SHOULD LOAD A BLANK GAME. LOAD GAME BUTTON SHOULD BE VISIBLE.
window.onload = function() {
    newName = localStorage.getItem('newName') || '';
    document.getElementById("guildname").innerHTML = newName + " Station";
  

  }

*/








/* GUILDNAME SHOULD BE SAVED IN GAME STATE WITH REST OF THE SAVE GAME DATA
function rename() {
    newName = document.getElementById("myInput").value;
    document.getElementById("title").innerHTML = newName + " Station"
    document.getElementById("myInput").value = "";
    localStorage.setItem('newName', newName);
  }
  */