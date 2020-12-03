"use strict";

var parImpar = (num1, num2) => {

  do {
    var num1 = prompt("dame numero 1", " ");
    var num2 = prompt("dame numero 2", " ");

    if (num1 == undefined || num2 == undefined) {
      console.log(num1, num2);
      //window.close();
    } else {
      console.log(num1, num2);
      num1 = parseInt(num1);
      num2 = parseInt(num2);

      for (var i = num1; i <= num2; i++) {
        if (i % 2 != 0) {
          console.log(i + " impar");
        } else {
          console.log(i + "par");
        }
      }
    }
  } while (num1 === " " || num2 === " ");

}

parImpar();

var num = parseInt(prompt("dame numero para saber sus numeros primos", "" ));

function numPrimo(num){
  for (var i = 2; i <= num; i++) {
    if (num % i == 0) {
      console.log('np= ' + i);
    }
  }

}

numPrimo(num);



/* programa que pida un numero y muestre su tabala d e multiplicar */


var numTabla = prompt("dame numero par hacer tabla multiplicar", 0);

var tablaMultiplicar = numTabla => {
  while (isNaN(numTabla)) {
    numTabla = prompt("dame numero par hacer tabla multiplicar", 0);
  }
  parseInt(numTabla);

  for (var i = 0 ; i <= 10; i++){

    console.log(numTabla + " * " + i + " = " + numTabla*i)

  }

};

tablaMultiplicar(numTabla);


/* programa muestre todas las tablas de multiplicare por consola */

var number;

var tablaUnica = (number) =>{

  for (var i = 0; i <= 10; i++) {

    document.write(number + " * " + i + " = " + number * i + "</br>");
  }

}
tablaUnica(2);


var todasTablas = ()=>{

  for (var i = 0; i <= 10; i++) {
    tablaUnica(i);
  }
  
}

todasTablas();











