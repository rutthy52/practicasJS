'use strict';

let caja = document.getElementById('mi-caja');
console.log(caja.innerHTML);
caja.innerHTML = "nuevo contenido"
caja.style.background ='aqua';
caja.style.padding="20px";

let cambiaColor = (color) =>{
    caja.style.background = color;
}


/*----------  NOTE = buscar todos las tags iguales  ----------*/


let todosDivs = document.getElementsByTagName('div');
console.log(`html collection: ${todosDivs}`);


/*----------  NOTE = create Element sacar los datos de unos elementos y pintarlos en otros  ----------*/
let section = document.getElementById('mi-section');

for(let item in todosDivs){
    let contenido = document.createTextNode(todosDivs[item].textContent);
    if (typeOf(contenido == 'string')){
        let parrafo = document.createElement("p");
        section.append(parrafo);
        parrafo.append(contenido);
    }
    
}





