





function openCSSLevel(evt, levelName) {
  var i, tabcontent, tablinks1, tablinks;
  
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

   document.getElementById(levelName).style.display = "block";
  evt.currentTarget.className += " active";
}

// function openCSSLevel1(evt, levelName) {
//   var i, tabcontent, tablinks1;

// tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }

// tablinks1 = document.getElementsByClassName("tablinks1");
//   for (i = 0; i < tablinks1.length; i++) {
//     tablinks1[i].className = tablinks1[i].className.replaced("active", "");
//   }

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



