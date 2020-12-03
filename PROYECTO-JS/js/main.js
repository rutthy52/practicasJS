"use strict";

window.addEventListener("load", () => {

// LOCAL STORAGE

 if (typeof Storage !== "undefined") {
   console.log("compatible");
 } else {
   console.log("incompatible");
 }

 let loginBox = document.querySelector(".login");
 loginBox.style.display = "none";
 let userSession = {};
 let sessionForm = document.getElementById("loginForm");
 let logout = document.getElementById("logout");
 logout.style.display = "none";

 sessionForm.addEventListener("submit", (evt) => {
   evt.preventDefault();
   console.log("submit");
   let nombre = document.getElementById("nombre").value;
   let mail = document.getElementById("mail").value;


   userSession = {
     nombre: nombre,
     email: mail,
   };

   localStorage.setItem("userSession", JSON.stringify(userSession));
   var userActive = JSON.parse(localStorage.getItem("userSession"));
   console.log(userActive.nombre);
   document.getElementById('login').innerHTML = `Hola ${userActive.nombre} | Salir `;
   sessionForm.style.display = "none";
   logout.style.display = "block";
   loginBox.style.display = "none";



if (logout) {
    logout.addEventListener("click", function () {
    console.log("click");
    localStorage.removeItem("userSession");
    sessionForm.style.display = "flex";
    this.style.display = "none";
    document.getElementById("login").innerHTML = "Login";
    loginBox.style.display = "none";


  });
}


 });


 // MENÚ Y GARGA DE SECCIONES 

let bgImg = document.querySelector("body");
let bgHeader = document.querySelector("header h1");
let secciones = document.querySelectorAll("section");
let menu = document.querySelectorAll("nav ul li");


for (let i= 0; i < secciones.length; i++){
  let actSec = secciones[i].className;
  if (actSec != "home"){
    console.log(secciones[i]);
    secciones[i].style.display = "none";
  }
}


for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", function () {
  let ids = this.id;
  let sect = document.querySelectorAll("section");
  
  for (let i = 0; i < sect.length; i++){
    let sectClass = sect[i].className;
    if (sectClass != ids){
      sect[i].style.display = "none";
    } 
  }
    document.querySelector("section." + ids).style.display = "block";

  });
}  

// ASIGNACIÓN DE TEMAS 
  function setTheme(bgcolor) {
    let comentBox = document.querySelectorAll(".comments");

    bgImg.className = "theme-bg-" + bgcolor;
    bgHeader.style.backgroundColor = bgcolor;

    for (let i = 0; i < comentBox.length; i++) {
      comentBox[i].style.backgroundColor = bgcolor;
    }

    let cabecera = document.querySelectorAll("#accordion h3");

    for (let i = 0; i < cabecera.length; i++) {
      let estado = cabecera[i].getAttribute("aria-selected");
      if (estado == "true") {
        cabecera[i].style.backgroundColor = bgcolor;
      }

      cabecera[i].addEventListener("click", function () {
        let comboElements = this.parentNode.childNodes;
        for (let i = 0; i < comboElements.length; i++) {
          let tn = comboElements[i].nodeName;
          if (tn === "H3") {
            estado = comboElements[i].getAttribute("aria-selected");
            if (estado != "false") {
              comboElements[i].style.backgroundColor = bgcolor;
            } else {
              comboElements[i].style.backgroundColor = "#f2f2f2";
              
            }
          }
        }
      });
    }
  };

  let themeBottom = document.querySelectorAll(".theme-botoms > div ");
  console.log(themeBottom);

  themeBottom.forEach((elemento) => {
    elemento.addEventListener("click", () => {
      if (elemento.id === "red-theme") {
        console.log(elemento.id);
        setTheme("red");
      } else if (elemento.id === "green-theme") {
        setTheme("green");
      } else if (elemento.id === "blue-theme") {
        setTheme("blue");
      }
    });
  });

  function getSourceAsDOM(url) {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "http://127.0.0.1:5500/PROYECTO-JS/index.html", false);
    xmlhttp.send();
    let parser = new DOMParser();
    console.log(
      "fasdfad",
      parser.parseFromString(xmlhttp.responseText, "text/html")
    );
    return parser.parseFromString(xmlhttp.responseText, "text/html");
  }

  // RELOJ

  let getHora = () => {
    let relojBox = document.getElementById("reloj");
    let fecha = new Date();
    let hora = fecha.getHours();
    let min = fecha.getMinutes();
    let sec = fecha.getSeconds();
    console.log(hora, min, sec)
    let p = document.createElement("p");
    let hr = p.innerHTML =  `hora ${hora}:${min}:${sec}`;
    relojBox.append(hr);
  
    
  };

getHora();

// PETICIONES FETCH, PROMESAS NOTICIAS --
 let noticias = [];
 fetch("js/noticias-json.js")
   .then((respuesta) => respuesta.json()) //convertimos a json
   .then((news) => {
   noticias = news.contenidoNews; //escogemos datos del objeto
   console.log(noticias);

    //igual que forEach ====  map()
  let postBox =   document.querySelector("#post");

  if(postBox){
   noticias.map((item, i) => {
     let dia = item.fecha.substr(0, 2);
     let mes = item.fecha.substr(3, 2);
     let anio = item.fecha.substr(6, 4);

     let fecha = diaSemana(dia, mes, anio);

     postBox.innerHTML += `<div class="post-header">
              <div class="post-head">
                <p class="post-title">${item.titulo}</p>
                <p class="post-date"> Publicado ${fecha}</p>
              </div>
              <div class="comments">
                <span class="number" id="coments"> ${item.comentarios}</span> <span>Comentarios</span>
              </div>
            </div>
            <div class="post-content">
              <div class="text-content" id="">
              ${item.contenido}
              </div>
            </div>`;
   });
  }
  });

//FECHA DE PUBLICACIÓN DE NOICIAS
       function diaSemana(dia, mes, anio) {

         var dia = dia;
         var mes = mes;
         var anio = anio;
         var dias = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
         var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
         var dt = new Date(mes + "," + dia + "," + anio + " 12:00:00");
         var text = `el ${dias[dt.getUTCDay()]} ${dia} de ${meses[dt.getUTCMonth()]} del año ${anio}`;
         //console.log(text);
         return text;
       };



 

});



// LOGIN -- PLUGINS SLIDER/ACORDEÓN/DATEPICKER
$(document).ready(function () {
  $("#login").click(function () {
    $(".login").toggle();
    $(".capa-login").show();
    });
     $(".capa-login").click(function () {
       $(".login").hide();
       $(this).hide();
     });


   
  $("#date-publication").datepicker();
  $("#slider").nivoSlider();
  $("#accordion").accordion();


  $(".ir-arriba").click(function () {
    $("body, html").animate(
      {
        scrollTop: "0px",
      },
      300
    );
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".ir-arriba").show()
    } else {
      $(".ir-arriba").hide();
    }
  });
});
