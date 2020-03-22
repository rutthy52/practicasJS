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
      let ul = document.createElement("ul");
      usuarios.map ((item, i) => {
        let nombre = document.getElementById ('usuarios');
        let li = document.createElement("li");
        li.innerHTML = `NOMBRE: ${item.first_name}  ${item.last_name}<br> EMAIL: ${item.email}`;
        ul.append(li)
        nombre.append(ul)
        document.getElementById('cargando').style.display = 'none'  
      });
    });
});

