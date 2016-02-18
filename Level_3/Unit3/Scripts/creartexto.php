<?php
/*
 * Archivo para genenrar el arhcivo de word donde val las respuestas de los archivos cuyas entradas son input
 * de tipo texto.
 */

    $filename=$_REQUEST['nombre_ar'];
    $contenido=$_REQUEST['contenido'];
    $respuesta=$_REQUEST['respuesta'];
    $str_titulo=$_REQUEST['titulo'];
    $titulo=  explode("-",$str_titulo);
    header("Content-type: application/vnd.ms-word");
    header("Content-Disposition: attachment;Filename=$filename.doc");
    $html="<html><body><div align='center'><p>No content written!</p></div></body></html>"; 
    
if ((in_array("Lesson 1 Exercise 8", $titulo))||(in_array("Lesson 2 Exercise 10", $titulo))||(in_array("Lesson 2 Quiz part 2", $titulo))||(in_array("Lesson 3 Exercise 10", $titulo))){//Se genera el contenido HTML para el .doc segun  la leccion y el ejercicio
    $html="<html>
            <meta http-equiv=\"Content-Type\" content=\"text/html; charset=Windows-1252\">
            <body>
            <div align='center'><span style='color:red'>$str_titulo</span></div>
            <p style='font:bold'>Answer: $respuesta<p>
            <b></b>
            <b>$contenido</b></body>
           </html>";
}else if((in_array("Lesson 1 Exercise 11", $titulo))||(in_array("Lesson 1 Quiz part 3", $titulo))||(in_array("Lesson 2 Quiz part 3", $titulo))||(in_array("Lesson 3 Exercise 11", $titulo))||(in_array("Lesson 3 Quiz part 3", $titulo))){
    $html="<html>
            <meta http-equiv=\"Content-Type\" content=\"text/html; charset=Windows-1252\">
            <body>
            <div align='center'><span style='color:red'>$str_titulo</span></div>
            <p style='font:bold'>Answer: $respuesta</p>
            </body>
           </html>";
}else if((in_array("Lesson 1 Quiz part 2", $titulo))||(in_array("Lesson 3 Exer 9", $titulo))||(in_array("Lesson 2 Exercise 11", $titulo))||(in_array("Lesson 2 Exercise 12", $titulo))){
    $html="<html>
            <meta http-equiv=\"Content-Type\" content=\"text/html; charset=Windows-1252\">
            <body>
            <div align='center'><span style='color:red'>$str_titulo</span></div>
            <p style='font:bold'>Answer:</p>$respuesta
            </body>
           </html>";
}else if(in_array("Lesson 1 Exercise 9", $titulo)){
    $html="<html>
            <meta http-equiv=\"Content-Type\" content=\"text/html; charset=Windows-1252\">
            <body>
            <div align='center'><span>$str_titulo</span></div>
            <p>Answer:</p>$respuesta
            </body>
           </html>";
    
}else{$html="";}


echo $html;
?>