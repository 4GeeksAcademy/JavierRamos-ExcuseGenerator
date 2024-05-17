/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let generarExcusa = () => {
  let quien = ["El perro", "Mi abuela", "El afilador", "Mi periquito"];
  let accion = ["se comió", "rompió", "aplastó", "vendió"];
  let que = ["los deberes", "mi coche", "las llaves"];
  let cuando = [
    "antes de clase",
    "mientras me duchaba",
    "durante la merienda",
    "mientras ordenaba mi cuarto",
    "en cuanto me dormí"
  ];
  let quienNum = Math.floor(Math.random() * 4);
  let accionNum = Math.floor(Math.random() * 4);
  let queNum = Math.floor(Math.random() * 3);
  let cuandoNum = Math.floor(Math.random() * 5);

  return (
    quien[quienNum] +
    " " +
    accion[accionNum] +
    " " +
    que[queNum] +
    " " +
    cuando[cuandoNum]
  );
};
window.onload = () => {
  document.querySelector(`#excusa`).innerHTML = generarExcusa();
};
