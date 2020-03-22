'use strict'


/*----------  NOTE LOAD -> se carga cuando todo html se ha cargado ya /así se puede cargar el script en la cabecera que es lo recomendable  ----------*/


window.addEventListener('load', ()=>{
    let btn = document.querySelector('#boton');
    btn.style.padding = "20px";

/*=============================================
=            FIXME   capturar eventos = 
=============================================*/


/*----------  TODO  CLICK ----------*/

    btn.addEventListener("click", () => {
      cambiaColor("red");
    });

    let cambiaColor = color => {
      console.log(btn);

      if (btn.style.backgroundColor == color) {
        console.log("color:" + color);
        btn.style.backgroundColor = "inherit";
      } else {
        btn.style.backgroundColor = color;
      }
    };

/*----------  TODO  KEYDOWN y mostrar tecla ----------*/


    document.addEventListener("keydown", (e) => {
      const keyName = e.key;
      console.log(keyName);
      //o
      console.log(String.fromCharCode(e.keyCode));
    });



 
})



