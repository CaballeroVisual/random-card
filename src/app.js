/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pinta = ["♦", "♥", "♠", "♣"];
let letra = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
function randomValor(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let htmlColorPinta = "";
let htmlColorNum = "";

window.onload = function() {
  let numSelect = letra[randomValor(0, 12)];
  let pintaSelec = pinta[randomValor(0, 3)];

  if (pintaSelec == "♥" || pintaSelec == "♦") {
    document.querySelector(".pintasuperior").id = "rojo";
    document.querySelector(".pintainferior").id = "rojo";
    document.querySelector(".numero").id = "rojo";
  }

  document.querySelector(".pintasuperior").innerHTML = pintaSelec;
  document.querySelector(".pintainferior").innerHTML = pintaSelec;
  document.querySelector(".numero").innerHTML = numSelect;
};
