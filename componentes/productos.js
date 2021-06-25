fetch("json/productos.json")//componentes/equipos.html
.then(function(response){//en que forma nos van a enviar la informacion
    return response.json();
})
.then(function(data){
    console.log(data);//aqui ya tengo la data e librerias.json
    llenarTabla(data);

})
function llenarTabla(data){
    $(data).each(function(index,value){//con each examinamos todos los valores uno por uno en este caso vamos examinar todos los valores qu etiene el arreglo COLABORADORES
        console.log(value);
        //console.log(value.libreria);
        var fila = "<tr >";
        fila += "<td>" + value.id + "</td>";
        fila += "<td>" + value.nombre + "</td>";
        fila += "<td>" + value.precio + "</td>";
        fila += "<td>" + value.categoría + "</td>";
        fila += "</tr>";
        $("#tbody-producto").append(fila);  
           
    });
    $("#tbody-producto tr").click(function(){
        $("#tbody-producto tr").removeClass("table-danger");//quito la class table info 
        $(this).addClass("table-danger");//agrfego una clase a la tabla para pintar la fila seleccionada
        var posicion = $(this).index();
        //index() indica la posicion del objeto con respecto a su padre o contenedor (tbody-colaboradores)
        console.log(posicion);
        console.log(data[posicion].id);
       
        var publicacion = data[posicion].nombre;
        var lice = data[posicion].categoría;
        
        var logo = data[posicion].foto;

        $("#prod-precio").text('Nombre: ' + ' ' + publicacion);
        $("#prod-categoria").text('Categoría: ' + ' ' + lice);
        $("#prod-foto").attr("src",logo);
    
    })
    
}

 

