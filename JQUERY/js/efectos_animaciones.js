$(document).ready(function(){
    $('.caja').hide();
    $("#abrir").text('Abrir');
    $('#abrir').click(function(){
        
        $(".caja").slideToggle('slow', function(){
            console.log('abierto')
        });   
        let txtBtn = $(this).text();
        if(txtBtn === 'Abrir'){
             $(this).text("Cerrar");
        }else{
            $(this).text("Abrir");
        }

        //como un json
        $(".caja")
          .animate(
            {
              marginLeft: "500px",
              fontSize: "30px"
            },
            "slow"
          )
          .animate(
            {
              borderRadius: "30%",
              padding: "30px"
            },
            "fast"
          );

    })
  

})