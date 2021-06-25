console.log("Mostrando colavoradores");
const COLABORADORES = [

    {id: 1,nombres: "Metro",producto:"Panes",ciudad:"Lima",foto:"logo-compradores/Metro2.jpg" },

    {id: 2,nombres: "Plaza Vea",producto:"Pasteles",ciudad:"Lima",foto:"logo-compradores/plaza.jpg" },

    {id: 3,nombres: "Tottus",producto:"Panes y pasteles",ciudad:"Lima",foto:"logo-compradores/tottus.jpg" },

    {id: 4,nombres: "Wong",producto:"Panes",ciudad:"Lima",foto:"logo-compradores/wong.png" },


   

];

$(COLABORADORES).each(function(index,value){
    console.log(value);
    console.log(value.nombres);
    var fila = "<tr>";
    fila += "<td>" + value.id + "</td>";
    fila += "<td>" + value.nombres + "</td>";
    fila += "<td>" + value.producto + "</td>";
    fila += "<td>" + value.ciudad + "</td>";
    fila += "</tr>";
    $("#tbody-colaboradores").append(fila);
});

$("#tbody-colaboradores tr").click(function(){
    $("#tbody-colaboradores tr").removeClass("table-info");
    $(this).addClass("table-info");
    var posicion = $(this).index();
    //.index() indica la posicion del objeto con repecto a su padre o contenedor (tbody-colaboradores)
    console.log(posicion);
    var nombres = COLABORADORES[posicion].nombres;
    console.log(nombres);
    var producto = COLABORADORES[posicion].producto;
    var foto =COLABORADORES[posicion].foto;

   $("#colaboradores-nombres").text(nombres);
   $("#colaboradores-cargo").text('Producto:'+ '' +producto);
   $("#logos-compradores").attr("src",foto);

});