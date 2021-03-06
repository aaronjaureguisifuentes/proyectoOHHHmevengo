fetch("https://restcountries.eu/rest/v2/lang/es")
    .then(function(response){
        return response.json();                    
    })
    .then(function(data){
        console.log(data);  
        llenarTabla(data);
    })

function llenarTabla(data){
    $(data).each(function(index,value){
        console.log(value);
        console.log(value.name);
        var fila = "<tr>";
        fila += "<td>" + value.alpha3Code + "</td>";
        fila += "<td>" + value.name + "</td>";
        fila += "<td>" + value.capital + "</td>";
        fila += "<td>" + value.subregion + "</td>";
        fila += "<td>" + value.population + "</td>";
        fila += "<td>" + value.demonym + "</td>";
        fila += "</tr>";
        $("#tbody-tienda").append(fila);
    });
    $("#tbody-tienda tr").click(function(){
        var posicion = $(this).index();
        console.log(posicion);
        console.log(data[posicion].name);
        console.log(data[posicion].alpha3Code);
        var codigo3 = data[posicion].alpha3Code;

        fetch("https://restcountries.eu/rest/v2/alpha/" + codigo3)
            .then(function(response){
                return response.json();                    
            })
            .then(function(datapais){
                console.log(datapais);
                mostrarDatosPais(datapais);  
            })
    })
}    
function mostrarDatosPais(datapais){
    var nombre = datapais.name;
    var capital = datapais.capital;
    var bandera = datapais.flag;

    $("#pais-nombre").text(nombre);
    $("#pais-capital").text(capital);
    $("#pais-bandera").attr("src",bandera);
}