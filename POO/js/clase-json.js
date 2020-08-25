var bicicleta = {
    marca : "bh",
    color : "rojo",
    modelo: "bmx",
    frenos : "disco",
    cambiaColor: function(nuevo_color){
        bicicleta.color = nuevo_color;
        //this.color =  nuevo_color;

    }
};

bicicleta.cambiaColor('blue');
console.log(bicicleta)

