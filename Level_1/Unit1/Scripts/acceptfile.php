<?php

   if(!isset($_REQUEST['filename']))
   {
     exit('No file');
   }

   $upload_path = dirname(__FILE__). '/Records/';
   
   $filename = $_REQUEST['filename'];
   
   $fp = fopen($upload_path."/".$filename.".wav", "wb");
   
   fwrite($fp, file_get_contents('php://input'));
   
   fclose($fp);
   
   exit('done');
   
   if($filename == "L1_Quiz.wav")
   {
		$txtQuiz = $_POST["txtQuiz"]; 
				
		$cuerpo = '<table align="center" width="309" border="0" cellpadding="0" cellspacing="0">
				  <tr>
					<td width="309" height="146" align="center">
					  <textarea name="txtQuiz" cols="32" rows="5" class="texco_caja" id="txtQuiz">'.$txtQuiz.'</textarea>
					</td>
				  </tr>
				  <tr>
					<td height="18" align="center" valign="top" class="texto_1_Pequeno">Record the conversations. Submit to your teacher.</td>
				  </tr>
				</table>'.$fp;
			
		$destinatario = "julialvarezv@gmail.com"; 
		$asunto = "Quiz Lesson 1 Unit 1 Level 1";
		
		//para el envío en formato HTML 
		$headers = "MIME-Version: 1.0\r\n"; 
		$headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 

		//dirección del remitente 
		$headers .= "From: Info Unit 1 Level 1 <info@books.pagegear.co>\r\n"; 

		//dirección de respuesta, si queremos que sea distinta que la del remitente 
		$headers .= "Reply-To: julialvarezv@gmail.com\r\n"; 

		//ruta del mensaje desde origen a destino 
		$headers .= "Return-path: info@books.pagegear.co\r\n"; 

		//direcciones que recibián copia 
		//$headers .= "Cc: maria@desarrolloweb.com\r\n"; 

		//direcciones que recibirán copia oculta 
		//$headers .= "Bcc: pepe@pepe.com,juan@juan.com\r\n"; 

		mail($destinatario,$asunto,$cuerpo,$headers);
   }
   
   elseif($filename == "L2_Quiz_2a.wav")
   {
		$txtQuiz = $_POST['txtQuiz'];
		$photoimg = $_POST['photoimg'];
		
		$cuerpo = $photoimg.'<table width="650" border="0" cellspacing="0">
				  <tr>
					<td width="299" align="center">
					  <textarea name="txtQuizL2P2" cols="32" rows="12" class="textos_multilinea" id="txtQuizL2P2">'.$txtQuizL2P2.'</textarea>
					</td>
				  </tr>
				</table>'.$fp;
			
		$destinatario = "julialvarezv@gmail.com"; 
		$asunto = "Quiz 2 - Lesson 2";
		
		//para el envío en formato HTML 
		$headers = "MIME-Version: 1.0\r\n"; 
		$headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 

		//dirección del remitente 
		$headers .= "From: Info Unit 6 <info@books.pagegear.co>\r\n"; 

		//dirección de respuesta, si queremos que sea distinta que la del remitente 
		$headers .= "Reply-To: julialvarezv@gmail.com\r\n"; 

		//ruta del mensaje desde origen a destino 
		$headers .= "Return-path: info@books.pagegear.co\r\n"; 

		//direcciones que recibián copia 
		//$headers .= "Cc: maria@desarrolloweb.com\r\n"; 

		//direcciones que recibirán copia oculta 
		//$headers .= "Bcc: pepe@pepe.com,juan@juan.com\r\n"; 

		mail($destinatario,$asunto,$cuerpo,$headers);
   }
   
   elseif($filename == "L3_Exer_9.wav")
   {	
		$iptTo = $_POST['iptTo'];
		$iptFrom = $_POST['iptFrom'];
		$txtRe = $_POST['txtRe'];
		
		$cuerpo = '<table width="387" border="0">
              <tr>
                <td width="62" align="right" valign="middle" class="texto_1">To:</td>
                <td width="315">
                  <input name="iptTo" type="text" class="raya_bg_cienPorcien" id="iptTo" value="'.$iptTo.'" />
                </td>
              </tr>
            </table><table width="387" border="0">
              <tr>
                <td width="80" align="right" valign="middle" class="texto_1">From:</td>
                <td width="297">
                  <input name="iptFrom" type="text" class="raya_bg_cienPorcien" id="iptFrom" value="'.$iptFrom.'" />
                </td>
              </tr>
            </table>
            <table width="514" border="0">
              <tr>
                <td width="61" height="146" align="right" valign="top" class="texto_1">Re:</td>
                <td width="443" align="left" valign="top">
                  <textarea name="txtRe" cols="45" rows="5" class="texco_caja4" id="txtRe">"'.$txtRe.'"</textarea>
                </td>
              </tr>
            </table>'.$fp;
			
		$destinatario = "julialvarezv@gmail.com"; 
		$asunto = "Lesson 3 Exercise 9 Unit 1 Level 1";
		
		//para el envío en formato HTML 
		$headers = "MIME-Version: 1.0\r\n"; 
		$headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 

		//dirección del remitente 
		$headers .= "From: Info Unit 1 <info@books.pagegear.co>\r\n"; 

		//dirección de respuesta, si queremos que sea distinta que la del remitente 
		$headers .= "Reply-To: julialvarezv@gmail.com\r\n"; 

		//ruta del mensaje desde origen a destino 
		$headers .= "Return-path: info@books.pagegear.co\r\n"; 

		//direcciones que recibián copia 
		//$headers .= "Cc: maria@desarrolloweb.com\r\n"; 

		//direcciones que recibirán copia oculta 
		//$headers .= "Bcc: pepe@pepe.com,juan@juan.com\r\n"; 

		mail($destinatario,$asunto,$cuerpo,$headers);
   } 
   
   elseif($filename == "L3_Quiz_2.1.wav")
   {
		$txtFrom = $_POST['txtFrom'];
		$txtTo = $_POST['txtTo'];
		$txtRe = $_POST['txtRe'];
		
		$cuerpo = '<table width="318" border="0">
					  <tr>
						<td width="47" height="77" align="left" valign="bottom" class="texto_1">from:</td>
						<td width="261" align="left" valign="bottom">
						  <input name="txtFrom" type="text" class="raya_bg_cienPorcien" id="txtFrom" value="'.$txtFrom.'" />
						</td>
					  </tr>
					</table>
					<table width="316" border="0">
			  <tr>
				<td width="27" class="texto_1">To:</td>
				<td width="279">
				  <input name="txtTo" type="text" class="raya_bg_cienPorcien" id="txtTo" value="'.$txtTo.'" />
				</td>
			  </tr>
			</table>
			<table width="316" border="0" cellspacing="0" cellpadding="0">
			  <tr>
				<td width="31" height="162" align="left" valign="top" class="texto_1">Re:</td>
				<td width="285" align="left" valign="top">
				  <textarea name="txtRe" cols="45" rows="5" class="texco_caja5" id="txtRe">"'.$txtRe.'"</textarea>
				</td>
			  </tr>
			</table>'.$fp;
			
		$destinatario = "julialvarezv@gmail.com"; 
		$asunto = "Lesson 3 Quiz Part 2.1 Unit 1 Level 1";
		
		//para el envío en formato HTML 
		$headers = "MIME-Version: 1.0\r\n"; 
		$headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 

		//dirección del remitente 
		$headers .= "From: Info Unit 1 <info@books.pagegear.co>\r\n"; 

		//dirección de respuesta, si queremos que sea distinta que la del remitente 
		$headers .= "Reply-To: julialvarezv@gmail.com\r\n"; 

		//ruta del mensaje desde origen a destino 
		$headers .= "Return-path: info@books.pagegear.co\r\n"; 

		//direcciones que recibián copia 
		//$headers .= "Cc: maria@desarrolloweb.com\r\n"; 

		//direcciones que recibirán copia oculta 
		//$headers .= "Bcc: pepe@pepe.com,juan@juan.com\r\n"; 

		mail($destinatario,$asunto,$cuerpo,$headers);
   } 
   elseif($filename == "L3_Quiz_2.2.wav")
   {
		$txtFrom = $_POST['iptFrom'];
		$txtTo = $_POST['iptTo'];
		$txtRe = $_POST['txtRe'];
		
		$cuerpo = '<table width="318" border="0">
					  <tr>
						<td width="47" height="77" align="left" valign="bottom" class="texto_1">from:</td>
						<td width="261" align="left" valign="bottom">
						  <input name="txtFrom" type="text" class="raya_bg_cienPorcien" id="txtFrom" value="'.$txtFrom.'" />
						</td>
					  </tr>
					</table>
					<table width="316" border="0">
			  <tr>
				<td width="27" class="texto_1">To:</td>
				<td width="279">
				  <input name="txtTo" type="text" class="raya_bg_cienPorcien" id="txtTo" value="'.$txtTo.'" />
				</td>
			  </tr>
			</table>
			<table width="316" border="0" cellspacing="0" cellpadding="0">
			  <tr>
				<td width="31" height="162" align="left" valign="top" class="texto_1">Re:</td>
				<td width="285" align="left" valign="top">
				  <textarea name="txtRe" cols="45" rows="5" class="texco_caja5" id="txtRe">"'.$txtRe.'"</textarea>
				</td>
			  </tr>
			</table>'.$fp;
			
		$destinatario = "julialvarezv@gmail.com"; 
		$asunto = "Lesson 3 Quiz Part 2.2 Unit 1 Level 1";
		
		//para el envío en formato HTML 
		$headers = "MIME-Version: 1.0\r\n"; 
		$headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 

		//dirección del remitente 
		$headers .= "From: Info Unit 1 <info@books.pagegear.co>\r\n"; 

		//dirección de respuesta, si queremos que sea distinta que la del remitente 
		$headers .= "Reply-To: julialvarezv@gmail.com\r\n"; 

		//ruta del mensaje desde origen a destino 
		$headers .= "Return-path: info@books.pagegear.co\r\n"; 

		//direcciones que recibián copia 
		//$headers .= "Cc: maria@desarrolloweb.com\r\n"; 

		//direcciones que recibirán copia oculta 
		//$headers .= "Bcc: pepe@pepe.com,juan@juan.com\r\n"; 

		mail($destinatario,$asunto,$cuerpo,$headers);
   } 
   
?>