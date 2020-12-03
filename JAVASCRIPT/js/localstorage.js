'use strict'

/*=============================================
=            FIXME LOCALSTORAGE            =
=============================================*/

window.addEventListener(
  "load",
  () => {
          /*----------  TODO si el navegador es compatible  ----------*/

          if (typeof Storage !== "undefined") {
            console.log("compatible");
          } else {
            console.log("incompatible");
          }

          let usuario = [
            { nombre: "ruth", apellido: "gonzalez", edad: 45 },
            { nombre: "tito", apellido: "uceda", edad: 44 }
          ];
          /*----------  TODO guardar datos al local storage  ----------*/

          localStorage.setItem("titulo", "hola buenos días");

          /*----------  TODO recoger localstore  ----------*/

          let content = localStorage.getItem("titulo");
          console.log(content);
          let contenido = document.querySelector("#content");

          /*---------- TODO   1.-  pasar de objeto a objeto string para poder recuperar los objetos json/ apis  ----------*/

          localStorage.setItem("usuario", JSON.stringify(usuario));

          /*---------- TODO   2.- parsear el string y que devuelva array  ----------*/

          var user = JSON.parse(localStorage.getItem("usuario"));
          console.log(user);

          for (let item in user) {
            contenido.innerHTML += `<p>${user[item].nombre} ${user[item].apellido} - edad: ${user[item].edad}</p>`;
          }

          /*----------  TODO limpiar y eliminar localstrore  ----------*/
          localStorage.removeItem("titulo");

          localStorage.clear();
        }

);


