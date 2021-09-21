<?php

include('configuracion.php');

$conexion = new mysqli($servername,$username,$password,$bd);

if (mysqli_connect_errno()){
    echo "no concextado ",mysqli_connect_error();
    exit();
}


?>