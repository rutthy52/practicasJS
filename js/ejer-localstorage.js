
'use strict'

window.addEventListener('load', ()=>{

let formulario = document.getElementById('form')

let addTitle = (dato)=> {
let title = document.getElementById('titulo').value;
 console.log(dato)
}



formulario.addEventListener('submit', addTitle, false)

console.log('funciona')


})