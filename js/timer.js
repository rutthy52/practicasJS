'use strict'

window.addEventListener("load", () => {
  /*----------  NOTE setInterval timer para que se ejecute cada cierto intervalo lo que sea  ----------*/

let btnStart = document.querySelector("#start");
let btnStop = document.querySelector("#stop");
let titulo = document.querySelector("#intervalo");
let tiempo;

btnStart.addEventListener("click", () => {

    tiempo = setInterval(() => {
    console.log("intervalo ejecutado");

    if (titulo.style.fontSize == "10px") {
    titulo.style.fontSize = "30px";
    } else {
    titulo.style.fontSize = "10px";
    }
}, 500);

});

  /*----------  NOTE  clear interval (() => {    
}, timeout); para que se ejecute una vez nada mas en el intervalo que diga  ----------*/

    btnStop.addEventListener("click", () => {
    console.log("has parado el tiempo");
    clearInterval(tiempo);
    });

  /*----------  NOTE setTimeout(() => {
        
    }, timeout); para que se ejecute una vez nada mas en el intervalo que diga  ----------*/

  setTimeout(() => {
    titulo.style.color = "red";
  }, 500);


});