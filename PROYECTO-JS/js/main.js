"use strict";
window.addEventListener('load', ()=>{
     document.body.style.backgroundImage = 'url("./img/rojo.jpg")'

let setTheme = (bgcolor,bgimage)=>{
    let bgHeader = document.querySelector("header h1");
    bgHeader.style.backgroundColor = bgcolor;
    document.body.style.backgroundImage = "url('" + bgimage + "')";
    let bgcomments = document.querySelector(".comments");
    bgcomments.style.backgroundColor = bgcolor;
   
    
}


let themeBottom = document.querySelectorAll(".theme-botoms > div ");
console.log(themeBottom);

themeBottom.forEach((elemento) => {
    elemento.addEventListener('click', ()=>{
          if(elemento.id === 'red-theme'){
                console.log(elemento.id);
                setTheme('red', './img/rojo.jpg')
          }else if (elemento.id === 'green-theme'){
                setTheme("green", "./img/hojas.jpg");
          }else if (elemento.id === 'blue-theme'){
                 setTheme("blue", "./img/cielo.jpg");
          }

    })

});

})
