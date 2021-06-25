$(function(){
  $("section").each(function(){
       console.log("demo");
      var tituloSeccion = $(this).find("h2").text();
      var nombreSeccion = $(this).attr("id");
      console.log(tituloSeccion);
      $("#menu-main").append(
        '<li class="nav-item"></li><a class="nav-link" href="#'+ nombreSeccion + '">'
        + tituloSeccion + '</a></li>'
        );
  })  

$("#colaborador1").click(function(){
  fetch("colaboradores/colaborador1.html")
        .then(function(response){
          return response.text();
        })
        $("#colaborador1").click(function(){
          $("#colaboradores .list-group-item").removeClass("active");
          $(this).addClass("active");
          fetch("colaboradores/colaborador1.html")
              .then(function(response){
                  return response.text();                    
              })
              .then(function(data){
                  console.log(data);  
                  $("#datos-colaboradores").html(data);      
               });

      });
    });

      $("#colaborador2").click(function(){
        $("#colaboradores .list-group-item").removeClass("active");
        $(this).addClass("active");
        fetch("colaboradores/colaborador2.html")
            .then(function(response){
                return response.text();                    
            })
            .then(function(data){
                console.log(data);  
                $("#datos-colaboradores").html(data);      
             });

    });

    $("#colaborador3").click(function(){
      $("#colaboradores .list-group-item").removeClass("active");
      $(this).addClass("active");
      fetch("colaboradores/colaborador3.html")
          .then(function(response){
              return response.text();                    
          })
          .then(function(data){
              console.log(data);  
              $("#datos-colaboradores").html(data);      
           });
           
  });
  $("#colaborador4").click(function(){
    $("#colaboradores .list-group-item").removeClass("active");
    $(this).addClass("active");
    fetch("colaboradores/colaborador4.html")
        .then(function(response){
            return response.text();                    
        })
        .then(function(data){
            console.log(data);  
            $("#datos-colaboradores").html(data);      
         });
         
});

$("#colaborador5").click(function(){
  $("#colaboradores .list-group-item").removeClass("active");
  $(this).addClass("active");
  fetch("colaboradores/colaborador5.html")
      .then(function(response){
          return response.text();                    
      })
      .then(function(data){
          console.log(data);  
          $("#datos-colaboradores").html(data);      
       });
       
});

$("#menu-item-comprar").click(function(){

  fetch("componentes/comprar.html")
      .then(function(response){
          return response.text();                    
      })
      .then(function(data){
          console.log(data);  
          $("#main-content").html(data);      
       })
  });

  $("#menu-item-Compradores").click(function(){

    fetch("componentes/Compradores.html")
        .then(function(response){
            return response.text();                    
        })
        .then(function(data){
            console.log(data);  
            $("#main-content").html(data);      
         })
    });

    $("#menu-item-tienda").click(function(){

      fetch("componentes/tienda.html")
          .then(function(response){
              return response.text();                    
          })
          .then(function(data){
              console.log(data);  
              $("#main-content").html(data);      
           })
      });

      $("#menu-item-productos").click(function(){

        fetch("componentes/productos.html")
            .then(function(response){
                return response.text();                    
            })
            .then(function(data){
                console.log(data);  
                $("#main-content").html(data);      
             })
        });
      
    
  

  
  

 });

