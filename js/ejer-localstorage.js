'use strict';

// añadir pelicula mediante formulario

window.addEventListener ('load', () => {
  let formulario = document.getElementById ('add');
  let arrayTitulo = [];

  let addTitle = () => {
    let title = document.getElementById ('titulo').value;
    let memory = localStorage.setItem ('titulo', title);
    let titulo = localStorage.getItem ('titulo');
    arrayTitulo.push (titulo);
    console.log (titulo);
  };

  let pintar = () => {
    console.log (arrayTitulo);
    let contenido = document.getElementById ('contenido');
  

    for (let i in arrayTitulo) {
      let parrafo = document.createElement ('p');
      let html = arrayTitulo[i];
      parrafo.innerHTML += html;
      contenido.append (parrafo);
    }
  };

  formulario.addEventListener ('click', addTitle);
  pintar ();

  console.log ('funciona');
});
