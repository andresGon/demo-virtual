<?php
$asociacion=array("0"=>0,"1"=>1,"2"=>2,"3"=>3,"4"=>4);
$nombre_archivo=$_REQUEST["nombre_archivo"];
//$loc=$asociacion[$loc_c];
$valores=$_REQUEST["valores"];
//$valores=explode(",",$valores);
//if ($loc==4){
    header("Content-type: application/vnd.ms-word");
    header("Content-Disposition: attachment;Filename=$nombre_archivo.doc");
    echo "<html>";
    echo "<meta http-equiv=\'Content-Type\' content='text/html'; charset='Windows-1252\'>";
    echo "<body>";
    echo $valores;
    echo "</body>";
    echo "</html>";
//}
?>
