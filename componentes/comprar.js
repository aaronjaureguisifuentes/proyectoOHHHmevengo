console.log("Mostrando colavoradores");
const PROVEEDORES = [

    {id: 1,nombres: "Molicentro",producto:"Harina",ciudad:"Lima",foto:"logo-provee/molicentro.png" },

    {id: 2,nombres: "EL Huevo de Oro",producto:"Huevos",ciudad:"Lima",foto:"logo-provee/HuevosOro.png" },

    {id: 3,nombres: "Los Pinos",producto:"Mantequilla",ciudad:"Callao",foto:"logo-provee/pinos1.jpg" },

    {id: 4,nombres: "Andahuasi",producto:"Azucar",ciudad:"Huara",foto:"logo-provee/Andaguazi.jpg" },

    {id: 5,nombres: "LESAFFRE",producto:"Levadura",ciudad:"colombia",foto:"logo-provee/lesafre.jpg" },

    {id: 6,nombres: "Marsal",producto:"Sal",ciudad:"Turjillo",foto:"logo-provee/marsal1.jpg" },

   

];

$(PROVEEDORES).each(function(index,value){
    console.log(value);
    console.log(value.nombres);
    var fila = "<tr>";
    fila += "<td>" + value.id + "</td>";
    fila += "<td>" + value.nombres + "</td>";
    fila += "<td>" + value.producto + "</td>";
    fila += "<td>" + value.ciudad + "</td>";
    fila += "</tr>";
    $("#tbody-proveedores").append(fila);
});

$("#tbody-proveedores tr").click(function(){
    $("#tbody-proveedores tr").removeClass("table-info");
    $(this).addClass("table-info");
    var posicion = $(this).index();
    //.index() indica la posicion del objeto con repecto a su padre o contenedor (tbody-colaboradores)
    console.log(posicion);
    var nombres = PROVEEDORES[posicion].nombres;
    console.log(nombres);
    var producto = PROVEEDORES[posicion].producto;

    var foto = PROVEEDORES[posicion].foto;

   $("#colaboradores-nombres").text(nombres);
   $("#colaboradores-cargo").text(producto);
   $("#colaboradores-foto").attr("src",foto)

});