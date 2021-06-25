<?php
$conexion = mysqli_connect("localhost","root","") or
    die("Problemas en la conexion");

mysqli_select_db("panaderia2",$conexion) or
    die('Problemas en la seleccion de la base de datos');    
    
$dni = $_POST['dni'];
$tipo = $_POST['tipo'];
$cantidad = $_POST['cantidad'];
$lugar = $_POST['lugar'];

mysqli_query("INSERT INTO panes(NroOrden,DNI,Tipo,Cantidad,Lugar) VALUES ('$dni','$tipo','$cantidad','$lugar')",$conexion);
?>