// que tipo de dato entra: number y que tipo de dato devuelve: string

function getNumero(num: number = 0): string {
  console.log(typeof num);
  return "numero " + num;
}

console.log(getNumero(4));
