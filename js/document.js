'use strict';

let caja = document.getElementById('mi-caja');
console.log(caja.innerHTML);
caja.innerHTML = "nuevo contenido"
caja.style.background ='aqua';
caja.style.padding="20px";

let cambiaColor = (color) =>{
    caja.style.background = color;
}