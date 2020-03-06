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

let todosDivs = new Array();
todosDivs = document.querySelectorAll('div');
//o document.getElementsByTagName('div');
console.log(todosDivs);



/*----------  NOTE = CREATELEMENT/APPEND/PREPEND/TYPEOF/TEXTCONTENTcreate Element sacar los datos de unos elementos y pintarlos en otros  ----------*/
let section = document.getElementById('mi-section');
section.prepend(document.createElement('hr'));

for(let item in todosDivs ){
    let contenido = todosDivs[item].textContent;
    console.log(contenido);
    if (typeof contenido == 'string') {
      let parrafo = document.createElement('p');
      section.append(parrafo);
      parrafo.append(contenido);
    }
    
}   

/*----------  NOTE = busqueda por clases y añadir estilos  ----------*/


for (let cl in todosDivs){
    let clases = todosDivs[cl].className;

    if (clases == 'rosa'){
        todosDivs[cl].style.background = "pink";
    }else if (clases == 'aqua'){
        todosDivs[cl].style.background = "aqua";
    }
}