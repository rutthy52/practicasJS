'use strict'

/*=============================================
=            FIXME JSON OBJECT            =
=============================================*/



window.addEventListener('load', ()=>{

let peliculas = [
  {
    titulo: "titulo 1",
    year: 1992,
    pais: "EEUU"
  },
  {
    titulo: "titulo 2",
    year: 2000,
    pais: "Italia"
  }
];

 let contenido = document.querySelector("#contenido");

    for (let item in peliculas) {
    contenido.insertAdjacentHTML('beforeend',`<p><span>${peliculas[item].titulo} - ${peliculas[item].year}</span></p>`);

    }

})


