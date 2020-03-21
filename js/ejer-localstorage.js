'use strict';

// añadir pelicula mediante formulario

window.addEventListener ('load', () => {
  let contenido = document.getElementById ('contenido');
  //pintamos el array con un botón
  let pintar = datos => {
    let listado = document.createElement ('ul');

    for (let item in datos) {
      listado.insertAdjacentHTML ('beforeend', `<li>${datos[item]}</li>`);
    }

    contenido.append (listado);
  };

  let btnPintar = document.getElementById ('pintar');
  let formulario = document.getElementById ('add');
  let arrayTitulo = [];

  let addTitle = () => {
    let title = document.getElementById ('titulo').value;
    let memory = localStorage.setItem ('titulo', title);
    let titulo = localStorage.getItem ('titulo');
    //pintamos automaticamente
    contenido.innerHTML += `${titulo} </br>`;
    arrayTitulo.push (titulo);
  };

  formulario.addEventListener ('click', addTitle);
  btnPintar.addEventListener ('click', () => {
    pintar (arrayTitulo);
  });

  console.log ('funciona');
});
