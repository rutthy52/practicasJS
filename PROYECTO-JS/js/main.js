"use strict";


window.addEventListener("load", () => {

  let setTheme = (bgcolor) => {
      function getSourceAsDOM() {
        xmlhttp = new XMLHttpRequest();
        xmlhttp.open(
          "GET", "http://127.0.0.1:5500/PROYECTO-JS/index.html",
          false);
        xmlhttp.send();
        let parser = new DOMParser();
        return parser.parseFromString(xmlhttp.responseText, "text/html");
      }

    let bgImg = document.querySelector("body");
    bgImg.className=("theme-bg-" + bgcolor);
    let bgHeader = document.querySelector("header h1");
    bgHeader.style.backgroundColor = bgcolor;

    if (document.querySelectorAll(".comments") >= 1 ){
      this.style.backgroundColor = bgcolor;
    }
    if (document.querySelectorAll('#carousel')){
      this.style.backgroundColor = bgcolor;
    }
    if (document.querySelectorAll(".ui-state-active")){
      this.style.backgroundColor = bgcolor;
    }
  };

  let themeBottom = document.querySelectorAll(".theme-botoms > div ");
  console.log(themeBottom);

  themeBottom.forEach((elemento) => {
    elemento.addEventListener("click", () => {
      if (elemento.id === "red-theme") {
        console.log(elemento.id);
        setTheme("red");
      } else if (elemento.id === "green-theme") {
        setTheme("green");
      } else if (elemento.id === "blue-theme") {
        setTheme("blue");
      }
    });
  });

  /*$(document).ready(function () {
      $("#date-publication").datepicker(
      );
      $("#slider").nivoSlider();
      $("#accordion").accordion();

  });*/

  let getHora = ()=>{

    let fecha = new Date();
    let hora = fecha.getHours();
    let min = fecha.getMinutes();
    let sec = fecha.getSeconds();
    document.querySelectorAll(".reloj").innerHTML = `${hora}:${min}:${sec}`;
  }
  getHora();


});