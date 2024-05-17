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
  let quienNumero = Math.floor(Math.random() * quien.length);
  let accionNumero = Math.floor(Math.random() * accion.length);
  let queNumero = Math.floor(Math.random() * que.length);
  let cuandoNumero = Math.floor(Math.random() * cuando.length);

  return (
    quien[quienNumero] +
    " " +
    accion[accionNumero] +
    " " +
    que[queNumero] +
    " " +
    cuando[cuandoNumero]
  );
};
window.onload = () => {
  document.querySelector(`#excusa`).innerHTML = generarExcusa();
};
