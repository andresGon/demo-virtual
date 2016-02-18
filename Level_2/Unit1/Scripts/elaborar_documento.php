<?php
$contenido=$_REQUEST["contenido"];
$nombre_archivo=$_REQUEST["archivo"];
if ($nombre_archivo!="L1_Exer_14-5"){
    $file= fopen("$nombre_archivo.txt", "w");
    fwrite($file, $contenido);
    fclose($file);
}
?>
