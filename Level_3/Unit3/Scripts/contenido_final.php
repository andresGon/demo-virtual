<?php

/*Archivo para generar el html de los ejercicios con opcion de enviar*/

// Include the main TCPDF library (search for installation path).
require_once('tcpdf/tcpdf.php');
require_once('tcpdf/config/tcpdf_config.php');
$pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

$pdf->SetCreator(PDF_CREATOR);
//$pdf->SetAuthor('Nicola Asuni');
$pdf->SetTitle('Virtual English');
//$pdf->SetSubject('TCPDF Tutorial');
//$pdf->SetKeywords('TCPDF, PDF, example, test, guide');
$pdf->AddPage();
// set some language-dependent strings (optional)
if (@file_exists(dirname(__FILE__).'/lang/eng.php')) {
	require_once(dirname(__FILE__).'/lang/eng.php');
	$pdf->setLanguageArray($l);
}

$nombre_archivo=$_REQUEST["nombre_archivo"];

$contenido=$_REQUEST["contenido"];
$tipo=$_REQUEST["tipo"];
$class=$_REQUEST["class"];
$leccion=$_REQUEST["leccion"];
$ejercicio=$_REQUEST["ejercicio"];
$parte=$_REQUEST["parte"];
$inicio_etiqueta=array("textarea"=>"<table ");
$final_etiqueta=array("textarea"=>"</table>");
if($parte!=""){
	$html_parte='<td width="20"><div class="imagen">'.$parte.'</div></td>
					<td width="20">&nbsp;</td>';
}else{
	$html_parte='';
}
//contenido segun los datos provenientes del ejercicio.
$html_contenido=$inicio_etiqueta[$tipo]." class=\"".$class."\" >".
						"<tr><td>".$contenido."</td></tr>".
				$final_etiqueta[$tipo];

$html='<html>
			<head>
				<link href="../css/css.css" rel="stylesheet" type="text/css">
			</head>
			<body>
			<table border="0">
				<tr>
					<td>
					    <table class="logo_pdf" border="0">

					        <tr><td style="height:70px;"><span class="txt_logo_l">level</span> <span class="txt_logo_b">three</span></td></tr>
					        <tr><td style="height:40px;"><p class="txt_unit_lesson">UNIT 3 | LESSON '.$leccion.'</p></td></tr>

					    </table>
					</td>
					<td style="background-color:#E8BF6C"></td>
				</tr>
				<tr>
					<td style="height:25px;"><span class="txt-amarillo_1">lesson '.$leccion.' ></span> <span class="txt-rojo_1">exercise '.$ejercicio.'</span></td>
				</tr>
				<tr>'.$html_parte.'<td>'.$html_contenido.'</td>
				</tr>
			</table>
			</body>
		</html>';

$pdf->writeHTML($html, true, false, true, false, '');
//$pdf->writeHTMLCell(0, 0, '', '', $html, 0, 1, 0, true, '', true);
//$pdf->Write(0, $html, '', 0, 'C', true, 0, false, false, 0);

// Close and output PDF document
// This method has several options, check the source code documentation for more information.
$pdf->Output($nombre_archivo.'.pdf', 'I');

?>
