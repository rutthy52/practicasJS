
/* mostrar y sumaDoble son funciones que se pasan como parámetros que están sin especificar. Se especifican en la llamada a la funcion padre en los parámetros */



/*=============================================
=           FIXME    = FUNCIONES ANONIMAS            =
=============================================*/

var calcular = (number1, number2, mostrar, sumaDoble) => {
  var number1 = number1;
  var number2 = number2;
  var suma = number1 + number2;

  mostrar(suma);
  sumaDoble(suma);
};




calcular(2,7, function(dato){
    document.write(dato + '</br>');
}, function (dato){
    document.write(dato*2)

});


/*=============================================
=            FIXME  = FUNCIONES FLECHA DENTRO DE PARAMETROS            =
=============================================*/
calcular(
  2,
  7,
  dato => {
    console.log(dato);
  },
  dato => {
    console.log(dato * 2);
  }
);
  







