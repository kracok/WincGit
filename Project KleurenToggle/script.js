function openMenu() {
    document.getElementById('menu').classList.toggle('show');
}

function buttonHome() {
    document.body.classList.add("home-background");
    document.body.classList.remove("blue-background");
    document.body.classList.remove("red-background");
    document.body.classList.remove("green-background");
    document.getElementById('homeRadioButton').checked = true;
    document.getElementById("headerText").innerHTML = "This background is white";
}

function buttonBlue() {
    document.body.classList.remove("home-background");
    document.body.classList.add("blue-background");
    document.body.classList.remove("red-background");
    document.body.classList.remove("green-background");
    document.getElementById('blueRadioButton').checked = true;
    document.getElementById("headerText").innerHTML = "This background is blue";
}

function buttonRed() {
    document.body.classList.remove("home-background");
    document.body.classList.remove("blue-background");
    document.body.classList.add("red-background");
    document.body.classList.remove("green-background");
    document.getElementById('redRadioButton').checked = true;
    document.getElementById("headerText").innerHTML = "This background is red";
}

function buttonGreen() {
    document.body.classList.remove("home-background");
    document.body.classList.remove("blue-background");
    document.body.classList.remove("red-background");
    document.body.classList.add("green-background");
    document.getElementById('greenRadioButton').checked = true;
    document.getElementById("headerText").innerHTML = "This background is green";
}

window.onclick = function(event) {
    if (!event.target.matches('.icon')) {
      let dropdowns = document.getElementsByClassName("wholeMenu");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
