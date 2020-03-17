"use strict";

/*=============================================
=            FIXME    = ARRAYS            =
=============================================*/
let lenguajes = new Array('PHP', 'js', 'html', 'java', 'C++', 5, 10, 0);

let index = parseInt(prompt('dame index', 0))

if(index > lenguajes.length){
    alert('no puede ser más de' + (lenguajes.length-1))
}else{
    alert(lenguajes[index])
}




/*----------  TODO   añadir al final L  ----------*/
let newElement = prompt('nombre', '');
lenguajes.push(newElement);


/*----------  TODO   eliminar del final  ----------*/
newElement = prompt("nombre", "");
lenguajes.pop(newElement);

/*----------  TODO   buscar en el array  ----------*/
let php = lenguajes.indexOf('PHP');
console.log(php);
if (php == 0){
    console.log('php existe')
    
/*----------  TODO  eliminar desde una búsqueda  ----------*/
    
    lenguajes.splice(php, 1);
}

/*---------- TODO  convertir de array a string  ----------*/
let strLenguajes = lenguajes.join(' ; ');
document.write(`<h3>convertir de array a string </h3>${strLenguajes}`);


/*---------- TODO  convertir string a array  ----------*/
let str = "la vida es bella"
console.log(str.split(" "));


/*---------- TODO  ordenar un array  ----------*/
console.log(`array ordenado: ${lenguajes.sort()}`);

/*---------- TODO  orden inverso un array  ----------*/
console.log(`array orden inverso: ${lenguajes.reverse()}`);


/*---------- TODO busqueda en un array con función flecha y callback  ----------*/
let busqueda = lenguajes.find(ids => ids == "java");
console.log(`dato java : ${busqueda}`);


 //o esto
busqueda = lenguajes.find(function(ids){
    return ids == "html";
});

console.log(`dato html : ${busqueda}`);

/*---------- TODO  busqueda en un array y devuelve indice
 ----------*/
busqueda = lenguajes.findIndex(id => id == "html");
console.log(`indice html : ${busqueda}`);

/*---------- TODO  busqueda tipo de dato y condición----------*/

busqueda = lenguajes.some(id => id >= 20);
console.log(`indice num >= 20 : ${busqueda}`);

/*=====  End of  = ARRAYS  ======*/

/*=============================================
=            TODO = FOR I          =
=============================================*/
document.write(`<h3>recorrer un array con for i </h3>`);
for (let i=0; i < lenguajes.length;i++){
    document.write(` - ${lenguajes[i]}</br>`);
}

/*=====  End of  = FOR I    ======*/


/*=============================================
=            TODO  = FOREACH            =
=============================================*/
document.write(`<h3>recorrer un array con forEach </h3>`);
lenguajes.forEach((elemento, indice, data) => {
   
    document.write(
      `-${elemento} - ${indice} - ${data[indice]}</br>`
    );
});

/*=====  End of  = FOREACH  ======*/



/*=============================================
=            TODO  = FOR IN         =
=============================================*/
document.write(`<h3>recorrer un array con for in </h3>`);
for (let item in lenguajes){
   document.write(
      `${lenguajes[item]}, `
    );

};

/*=====  End of  = FOREACH  ======*/


/*=============================================
=            REVIEW EJERCICIO = 1.- pide 6 numeros por pantalla, los mete en array 2.- mostar el array entero en cuerpo de página y consola 3.- mostrar array ordenado 4.- invertir su orden y mostrarlo 5.- mostrar num de elementos del array 6 .- busqueda de valor introducido por el usuario, que nos diga si lo encuentra y su índice        =
=============================================*/

    
        let numero;
        let numeros = new Array();
        let i;

    for (i= 0; i<=5; i++){

        do {
            numero = parseInt(prompt("introduce numero", ""));
        
            if (isNaN(numero)) {
                numero = -1;
                
            } else{
                numeros.push(numero);
            }
        } while (numero < 0);

    };

    
    let pintar =(arr) => {
            for (let item in arr) {
            document.write(`<li>${arr[item]}</li>`);
            }
    }

    let plantilla = (caso, arr) => {

        document.write(`<h3>${caso} numeros : ${arr.length} </h3><ul>`);
        pintar(arr);
        document.write(`</ul>`);
        console.log(`cantidad: ${arr}`);
    } 

    plantilla('Listado', numeros);
    plantilla('ordenación', numeros.sort());
    plantilla('orden invertido', numeros.reverse());

    
    let numSearch;
     do {
        numSearch = parseInt(prompt("dame numero", " "));

       if (isNaN(numSearch)) {
         numSearch = -1;

       } else {
            let result = numeros.some(ids => (ids = numSearch));
            console.log(result);

            if (result = false) {
                 let indice = numeros.findIndex(ids => ids == numSearch);
                 document.write(
                   `<p>el número ${numSearch} existe y su índice es ${indice} </p>`
                 );
              
            } else {
             document.write(`<p>el número ${numSearch} no existe </p>`);
            }
       }
     } while (numSearch < 0);

    

/*=====  End of Section comment block  ======*/

