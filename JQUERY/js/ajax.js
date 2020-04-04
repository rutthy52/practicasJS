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
        'name': 'Vict'
    }
    $.post("https://reqres.in/api/users");


})