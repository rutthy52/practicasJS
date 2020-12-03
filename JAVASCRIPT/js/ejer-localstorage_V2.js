'use strict';

// añadir pelicula mediante formulario
window.addEventListener ('load', () => {
  let formulario = document.getElementById ('formulario-nombres');
  let btnNombre = document.querySelector ('#addNombre');
  console.log (btnNombre);

  formulario.addEventListener ('submit', () => {
    let nombres = document.getElementById ('nombre').value;

    if (nombres.length >= 1) {
      localStorage.setItem (nombres, nombres);
    }
    window.location.reload ();
  });

  // pintamos nombre automaticamente con localstorage

  let contenidoNombre = document.getElementById ('contenido-nombres');
  let ul = document.createElement ('ul');

  for (let i in localStorage) {
    //controlamos si es un string
    if (typeof localStorage[i] == 'string') {
      var li = document.createElement ('li');
      li.append (localStorage[i]);
      ul.append (li);
      contenidoNombre.append (ul);
    }
  }

  let btnBorrar = document.getElementById ('borraNombre');

  btnBorrar.addEventListener ('click', () => {
    let nombre = document.getElementById ('nombre').value;
    localStorage.removeItem (nombre);
    window.location.reload ();
  });

  let borrarTodo = document.getElementById ('borrarTodo');

  borrarTodo.addEventListener ('click', () => {
    localStorage.clear ();
    window.location.reload ();
  });
});
