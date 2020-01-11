'use strict';

/* programa que pida dos número y que diga si son mayor, menor o si son iguales */

var num1 = parseInt(prompt("introduce numero 1", 0));
var num2 = parseInt(prompt("introduce numero 2", 0));

console.log(num1, num2)

while (isNaN(num1) || isNaN(num2)){
    num1 = parseInt(prompt("introduce numero 1", 0));
    num2 = parseInt(prompt("introduce numero 2", 0));
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

