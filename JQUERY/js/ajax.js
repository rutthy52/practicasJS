$(document).ready(function(){

    
  
// $("#dato").load("https://reqres.in/api/users");


  /*---------- REVIEW método load por get    ----------*/
        $.get("https://reqres.in/api/users", {page:2}, function(response){
            console.log(response.data)
            response.data.forEach((element, index )=> {
                console.log(element.first_name)
                let html = `<p>${index} - ${element.first_name} ${element.last_name}</p>`;
                $("#dato").append(html);
            });
        });




    /*---------- REVIEW método load por post    ----------*/

    let usuario = {
      first_name: "Alberto",
      last_name: "Uceda",
    };
    $.post("https://reqres.in/api/users", usuario, function(respuesta){
      console.log(respuesta)
    });

  /*---------- REVIEW método load por post por formulario   ----------*/

    $('#formulario').submit(function(e){

      e.preventDefault(); //evita que submit haga su función de action del formulario (por defecto)
      let user = {
        name : $('input[name="name"]').val(),
        web : $('input[name="web"]').val()
      }
     
     $.post($(this).attr('action'), user, function(respuesta){
        
       console.log('por post: ', respuesta)
    
         let html = `<p>${respuesta.id} - ${respuesta.name} ${respuesta.web}</p>`;
         $("#dato2").append(html);


      }).done(function(){
          alert('insertado correctamente')
        

      })

      /*---------- REVIEW método load por ajax por formulario   ----------*/

      $.ajax({
        type: "POST",
        url: $(this).attr("action"),
        data: user,
        beforeSend: function () {
          console.log("enviando...");
        },
        success: function (respuesta) {
          console.log('por ajax: ' , respuesta);
          let html = `<p>${respuesta.id} - ${respuesta.name} ${respuesta.web}</p>`;
          $("#dato2").append(html);
        },
        error: function () {
          console.log("error");
        },
        timeout: 3000
      });

    })
})