'use strict';
window.addEventListener ('load', () => {
  //ANCHOR - FETCH (AJAX) Y PETICIONES A SERVICIOS / PAIS REST
  let usuarios = [];
  fetch ('https://reqres.in/api/users')
    .then (data => data.json ()) //convertimos a json
    .then (users => {
      usuarios = users.data; //escogemos datos del objeto
      console.log (usuarios);

      //igual que forEach ====  map()

      usuarios.map ((item, i) => {
        let nombre = document.getElementById ('usuarios');
        let p = document.createElement ('p');
        p.append (item.first_name);
      });
    });
});
