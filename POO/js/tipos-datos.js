var cadena = "alberto";
var edad = 12;
var casado = true;
var cualquer_valor = "hola";
var array_tipado = ["uno", "dos"];
var array_tipado_any = ["uno", 2, true];
var anios = [12, 13, 14];
//varios
var cadena2 = 3;
var custom_date = "hola ";
// lets vs var
var n1 = 10;
var n2 = 12;
if (n1 == 10) {
    var n1_1 = 44; //no permite redefinir
    var n2 = 55; // global - permite redefinir
    console.log(n1_1, n2);
}
console.log(n1, n2);
console.log(cadena);
