// que tipo de dato entra: number y que tipo de dato devuelve: string
function getNumero(num) {
    if (num === void 0) { num = 0; }
    console.log(typeof num);
    return "numero " + num;
}
console.log(getNumero(4));
