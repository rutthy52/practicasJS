
'use strict'

window.addEventListener('load', ()=>{

let formulario = document.getElementById('add')

let title

formulario.addEventListener('click', () => {

   title = document.getElementById("titulo").value;
    
})

   let datos = [];
   let arrayDAtos = datos.push(title);
   console.log(arrayDAtos);

})
