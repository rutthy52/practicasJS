'use strict'


/*=============================================
=            FIXME OBJETOS Y CLASES            =
=============================================*/

var persona_1 ={
    nombre : "Pedro",
    apellido: "gonzalez",
    edad:24,
    casado:true
}

console.log(persona_1);

var persona_2 = new Object();

persona_2.nombre = "ruth";
persona_2.apellido = "gonzalez";
persona_2.edad = 45;
persona_2.casado = true;
persona_2.profesion = "frontend"
console.log(persona_2);


//EMSC 6

class Persona {
    constructor (nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad
    }


    presentarse(){

        var salida = 'hola me llamo ' + this.nombre + ' ' + this.apellido + ' y tengo ' + this.edad + ' años';
        console.log(salida)
    }

}

var Alberto = new Persona("alberto", "uceda", 44);

Alberto.presentarse();


//extensión de clase

class Desarrollador extends Persona {
    constructor(nombre,apellido,edad,cargo){
        super(nombre, apellido, edad);
        this.cargo = cargo
       
    }
    presentarse(){
        
       var salida = super.presentarse() + ' y soy ' + this.cargo
       console.log(salida)
    }

}



var Ruth = new Desarrollador("Ruth", "Gonzalez", 45, "frontend");

Ruth.presentarse();
