/* introduce un número hasta que este sea negativo */


var numNegativo = (numero) =>{

        do {
        var numero = parseInt(prompt("introduce numero hasta que metas numero negativo", "")); 
            console.log(numero)
            if (isNaN(numero)){
                numero = 0;
                console.log(numero);
            }

        } while (numero >= 0);

}

numNegativo();



