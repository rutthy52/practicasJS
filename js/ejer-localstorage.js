
'use strict'

window.addEventListener('load', ()=>{


let formulario = document.getElementById('form')

let dato
let addTitle = ()=> {

dato = document.getElementById('titulo').value;
console.log(dato);
return dato
}
console.log(dato)
let arrayDatos = [];
arrayDatos.push(dato);
console.log(arrayDatos);

if (formulario.addEventListener('submit'))
    addTitle()
})