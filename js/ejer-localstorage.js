'use strict';

// añadir pelicula mediante formulario


window.addEventListener ('load', () => {

//pintamos el array con un botón
let pintar = (datos) => {
    
  let contenido = document.getElementById("contenido");
  let listado = document.createElement('ul')

    for (let item in datos) {
        listado.insertAdjacentHTML("beforeend", `<li>${datos[item]}</li>`);
    }

    contenido.append(listado)
}


  let btnPintar = document.getElementById('pintar')
  let formulario = document.getElementById ('add');
  let arrayTitulo = [];

  let addTitle = () => {

    let title = document.getElementById ('titulo').value;
    let memory = localStorage.setItem ('titulo', title);
    let titulo = localStorage.getItem ('titulo');
    //pintamos automaticamente
    contenido.innerHTML += `${titulo} </br>`
    arrayTitulo.push (titulo);

  };


  formulario.addEventListener ('click', addTitle);
  btnPintar.addEventListener('click', ()=> {pintar(arrayTitulo)})

  console.log ('funciona');


  
  let btnNombre = document.getElementById('addNombre')
  btnNombre.addEventListener('click', ()=>{ 
    
    let nombres = document.getElementById("nombre").value;
    //si no está vacío
    if (nombres.length >= 1){
      localStorage.setItem(nombres, nombres);
      console.log(localStorage.getItem(nombres));
    }

    
     for (let i in localStorage){
       if (typeof localStorage[i] == 'string'){
        let parrafo = document.createElement('p')
        parrafo.innerHTML += `${localStorage[i]}`;
     }
  }})


});
