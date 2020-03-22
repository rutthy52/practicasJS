"use strict";

window.addEventListener('load', ()=>{
    let fecha = new Date;
    let dia = fecha.getDate();
    let mes = fecha.getMonth();
    let anyo = fecha.getFullYear();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    document.write(
      `${fecha} :<br> Fecha: ${dia}- ${mes}- ${anyo} <br> Hora: ${hora}: ${minutos}:${segundos} `
    );





})