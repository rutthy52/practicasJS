'use strict';

  //ANCHOR - FETCH (AJAX) Y PETICIONES A SERVICIOS / PAIS REST

  let getUsuarios = () => {
    return fetch("https://reqres.in/api/users");
  };


  getUsuarios()
    .then(data => data.json()) //convertimos a json
    .then(datos => {
      usuarios = datos.data; //escogemos datos del objeto
      pintarUsuarios(usuarios);

      return getInfo();
     
    })
     .then(cliente => {
           
            console.log(cliente)
            pintarCliente(cliente)

             return getUsuario(3); //selecciono usuario que quiero pasar ---> siguiente promesa
    })

    .then(data => data.json())
    .then(usuario => {
      usuario = usuario.data;
      pintarUsuario(usuario);
      
    })
    .catch(error=>{
      alert(error)
    })
   



//parámetro numero de usuario que quiero pasar
      let getUsuario = (usuario) => {
        return fetch(`https://reqres.in/api/users/${usuario}`);
      };


 //igual que forEach ====  map()
      let pintarUsuarios=(usuarios) =>{

      let ul = document.createElement("ul");
      usuarios.map ((item, i) => {
        let nombre = document.getElementById ('usuarios');
        let li = document.createElement("li");
        li.innerHTML = `NOMBRE: ${item.first_name}  ${item.last_name}<br> EMAIL: ${item.email}`;
        ul.append(li)
        nombre.append(ul)
        document.getElementById('cargando').style.display = 'none'  
        })
      };



      let pintarUsuario=(usuario) =>{
       
        let usuarioN = document.getElementById ('usuario');
        let p= document.createElement("p");
        p.innerHTML = `NOMBRE: ${usuario.first_name}  ${usuario.last_name}<br> EMAIL: ${usuario.email}`;
        usuarioN.append(p);
        document.getElementById('cargando_user').style.display = 'none'  
      }
     


      let pintarCliente = (cliente) => {
        let clienteN = document.getElementById("cliente");
        let p = document.createElement("p");
        p.innerHTML = `${cliente}`;
        clienteN.append(p);
       
      };
     

      // ANCHOR --- crear promesas desde cero

      let getInfo = () =>{

        let cliente = {
          nombre: 'alberto',
          apellido: 'uceda',
          edad:22
        }
        
        return new Promise((resolve, reject) => {
          
          let cliente_string = "";

          setTimeout(()=>{  

          cliente_string = JSON.stringify(cliente);

           if(typeof cliente_string != 'string' || cliente_string == ""){
            return reject('error')
           }
           return resolve(cliente_string);
          },4000);

        })

      

      }
      // ANCHOR --- capturar errores
      try{
        let year = 2019;
        alert(yea)
        console.log(decodeURIComponent("https://reqres.in/api/&users")); //comprobar url correcta
        
      }catch(error){
        alert(error)
        alert('error en codigo')
      }

