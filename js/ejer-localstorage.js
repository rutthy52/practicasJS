
'use strict'

window.addEventListener('load', ()=>{

let formulario = document.getElementById('form')

let addTitle = (dato)=> {
let title = document.getElementById('titulo').value;
let memory = localStorage.setItem('titulo', title)
document.querySelector('#contenido').innerHTML= localStorage.getItem('titulo')

}



formulario.addEventListener('submit', addTitle, false)

console.log('funciona')


})