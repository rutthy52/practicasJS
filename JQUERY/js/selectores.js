$(document).ready(()=>{

    $("#addLink").attr("disabled", "disabled"); // para que funcione tiene que llevar type
    console.log('funcionando')

    $("li").click(function() {
     
       let n2h2 = $(this)
            .eq(0)
            .parent().parent().parent().find('.n2h2').css('color','pink')

      let n2div = $(this)
            .eq(0)
            .parent().parent().parent().find('#n2div').css('color', 'blue')

      let n1ul =  $(this).parent().css('color', 'purple')

      let n0il =  $(this).css('color', 'black')

        console.log(n2h2);
        console.log(n2div);
        console.log(n1ul);
        console.log(n0il);

    });

    $(document).mousemove(function(){
        let x = event.clientX
        let y = event.clientY
        //console.log(event.clientX, event.clientY)
        $('.cursor').css('left', x).css('top', y)
    })  

    $('a').each(function(){

        console.log(this)
        let valor = $(this).attr('href')
        $(this).attr('target', '_blank')
        console.log(valor)
        $(this).text(valor)

    })

    $('#enlace').blur(function(){
        let enlace = $("#enlace").val();
        console.log(enlace.length);

        if (enlace.length > 0) {
        console.log("soy string");
        $("#addLink").removeAttr("disabled"); // para que funcione tiene que llevar type
        }
    })
    
    
     let addlink = ()=>{
      enlace = $('#enlace').val()
        console.log(enlace);
      $('#listado').append("<a href='" + enlace + "'>" + enlace + "</a><br>")
      $('#enlace').val('')
       $("#addLink").attr("disabled", "disabled");

    }

    $('#addLink').click(addlink)


});