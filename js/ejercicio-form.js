"use strict";

/**
 *
 * 1. Formulario campos: Nombre, Apellidos, Edad
 * 2. Boton enviar el formulario por evento submit
 * 3. Mostrar datos por pantalla
 * 4. Botón que al darle clikc nos muestra los datos actuales por pantalla
 * 5. Validacion del formulario
 *
 */

"use strict";



window.addEventListener("load", () => {

    let pintar = (datos) =>{

        let contenido = document.getElementById("contenido");

        for (let item in datos) {

          /*----------  FIXME append con HTML (injectar HTML) ----------*/

          contenido.insertAdjacentHTML("beforeend", `<p>${datos[item]}</p>`);
          //o
          let parrafo = document.createElement('p');
          parrafo.append(datos[item]);
          contenido.append(parrafo);
        }
    }

     const formulario = document.querySelector("#form");

     let enviar = () => {

        let nombre = document.getElementById("nombre").value;
        let apellidos = document.getElementById("apellido").value;
        let edad = parseInt(document.getElementById("edad").value);
        let msjeNombre = document.querySelector("#error-nombre");
        let msjeApellido = document.querySelector("#error-apellido");
        let msjeEdad = document.querySelector("#error-edad");


        if(nombre.trim() == null || nombre.trim().length <= 0){
            msjeNombre.style.display = 'block'
            return false;
        }else{
            msjeNombre.style.display = "none";
        }
        if (apellidos.trim() == null || apellidos.trim().length <= 0) {
            
            msjeApellido.style.display = "block";
            return false;
        }else{
            msjeApellido.style.display = "none";
        }
        if (isNaN(edad) || edad <= 0) {
            msjeEdad.style.display = "block";
            return false;
        }else{
            msjeEdad.style.display = "none";
        }

        let datos = [nombre, apellidos, edad];
        pintar(datos);
        
     }
       
        formulario.addEventListener("submit", enviar, false) 

    })

