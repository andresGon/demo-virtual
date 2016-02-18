<?php
include_once('libreria.php');
$seccion = $_POST["opt"];
	switch ($seccion)
	{
		case "UnitTask":
			$txtUnitTask = $_POST['txtUnitTask'];
			if(isset($_FILES['file']['name'])){
			   $vid = $_FILES['file']['name'];
			   move_uploaded_file($_FILES['file']['tmp_name'], '../files/'.$_FILES['file']['name']);
			}
			
			$destinatario = "julialvarezv@gmail.com"; 
			$asunto = "Unit Task Unit 1 Level 1"; 
			$cuerpo = ' 
			<html> 
			<head> 
			   <title>Unit Task Unit 1 Level 1</title> 
			</head> 
			<body> 
				<table width="678" border="0" align="center">
				  <tr>
					<td width="672" height="191" valign="top">
					  <textarea name="txtUT" cols="45" rows="5" class="white" id="txtUT">'.$txtUnitTask.'</textarea>
					</td>
				  </tr>
				</table>
			</body> 
			</html>'.$vid; 

			//para el envío en formato HTML 
			$headers = "MIME-Version: 1.0\r\n"; 
			$headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 

			//dirección del remitente 
			$headers .= "From: Info Unit 1 <info@books.pagegear.co>\r\n"; 

			//dirección de respuesta, si queremos que sea distinta que la del remitente 
			$headers .= "Reply-To: julialvarezv@gmail.com\r\n"; 

			//ruta del mensaje desde origen a destino 
			$headers .= "Return-path: info@desarrolloweb.com\r\n"; 

			//direcciones que recibián copia 
			//$headers .= "Cc: maria@desarrolloweb.com\r\n"; 

			//direcciones que recibirán copia oculta 
			//$headers .= "Bcc: pepe@pepe.com,juan@juan.com\r\n"; 

			mail($destinatario,$asunto,$cuerpo,$headers) ;
			
		break;
	}
?>