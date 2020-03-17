
'use strict'

window.addEventListener('load', ()=>{

let formulario = document.getElementById('form')

let addTitle = ()=> {

let title = new Array();

title = document.getElementById('titulo').value;

for (let i in title){
    console.log(title[i])
    }

}



formulario.addEventListener('submit', addTitle, false)

console.log('funciona')


})