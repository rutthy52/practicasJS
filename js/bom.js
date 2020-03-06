'use strict';



/*----------  NOTE anchura y altura en navegador y de pantalla ----------*/

let getBom = () => {
    console.log(`anchura pantalla: ${window.innerWidth}, altura pantlla: ${window.innerHeight}`);
    console.log(`anchura screen: ${screen.width}, altura screen: ${screen.height}`);
};

/*----------  NOTE urls  - location  - redirigir ----------*/

console.log(window.location);
console.log(window.location.href);

let redirigir = (url) => {
    window.location.href = url;
}

/*----------  NOTE abrir ventana  - ancho y alto ----------*/

let abrirVentana = (url) =>{
    window.open(
      url,
      "_blank",
      "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400"
    );
}


