let cadena: string = "alberto";
let edad: number = 12;
let casado: boolean = true;
let cualquer_valor: any = "hola";

let array_tipado: Array<string> = ["uno", "dos"];
let array_tipado_any: Array<any> = ["uno", 2, true];

let anios: number[] = [12, 13, 14];

//varios

let cadena2: string | number = 3;

// datos customizados

type alfanumerico = string | number;

let custom_date: alfanumerico = "hola ";

// lets vs var

var n1 = 10;
var n2 = 12;

if (n1 == 10) {
  let n1 = 44; //no permite redefinir
  var n2 = 55; // global - permite redefinir
  console.log(n1, n2);
}
console.log(n1, n2);
console.log(cadena);
