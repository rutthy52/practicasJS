'use strict';

/*=============================================
=            REVIEW EJERCICIO PROMPT          =
=============================================*/


//var num1 = parseInt(prompt("introduce numero 1", ""));
//var num2 = parseInt(prompt("introduce numero 2", ""));
//console.log(num1, num2);

/* programa que pida dos número y que diga si son mayor, menor o si son iguales */

var saludar = (saludo) => console.log(saludo)

saludar('hola que tal');

var dimeNumero =(num1, num2) => {
    console.log('entro bien')

    while (isNaN(num1) || isNaN(num2)) {
      num1 = parseInt(prompt("introduce numero 1", ""));
      num2 = parseInt(prompt("introduce numero 2", ""));
    }

    if (num1 > num2) {
      alert(num1 + " es MAYOR que " + num2);
    } else if (num1 < num2) {
      alert(num1 + " es MENOR que " + num2);
    } else if (num1 == num2) {
      alert(num1 + " es IGUAL que " + num2);
    } else {
      alert("introduce numeros correctos");
    }
}

//dimeNumero();


/* programa que pida un numero y que me diga si es par o impar */

//var num = prompt("dame num a ver si es impar", "");

var numImpar = (num) =>{
 while (isNaN(num)){
     num = prompt("dame num", "");
    }
    parseInt(num);
    if (num % 2 === 0) {
      console.log("numero par");
    } else {
      console.log("numero impar");
    }
  }


//numImpar(num);

    var number1;
    var number2;

var calculadora = (number1, number2) =>{

    while (isNaN(number1)) {
      number1 = parseInt(prompt("dame un numero para la calculadora", ""));
    }

     number2 = parseInt(prompt("dame otro numero para la calculadora", ""));
    while (isNaN(number2)) {
      number2 = parseInt(prompt("dame otro numero para la calculadora", ""));
    }
    console.log(number1, number2);

    var resultado = "suma " + (number1 + number2) + "</br>" + 
                    "resta " + (number1 - number2) + "</br>"+
                    "multiplicacion " + number1 * number2 + "</br>" +
                    "division " + number1 / number2 + "</br>"
    
    document.write (resultado);

}

calculadora(number1,number2);










