
const colors = ["yellow", "red", "green", "blue", "black", "orange", "pink"];
var button = document.getElementById("buton");


 function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  function chBackcolor() {
    document.body.style.background = colors[getRndInteger(0, colors.lenght)];
 }

 