function cargarCabeza(idLss, idExe)
{
	selLess = listarLss(idLss);
	//selExe = listarExer(idLss);
	selExe = "";
	res = "<table align=\"center\" width=\"730\" border=\"0\" cellspacing=\"0\">"+
	  "<tr>"+
		"<td width=\"136\" height=\"95\" align=\"left\" valign=\"middle\"><img src=\"../img/1.Logo.png\" width=\"115\" height=\"66\" usemap=\"#Map\" border=\"0\" /></td>"+
		"<td width=\"590\" align=\"right\" valign=\"middle\" background=\"../img/3.bg_heder.png\"><table width=\"556\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"110\" height=\"63\" align=\"center\" valign=\"bottom\">"+
			  "<select name=\"select\" class=\"menu\" id=\"selUnit\" onChange=\"cambiarUnit(this.value);\">"+
				 '<option value=\'1\'  selected>Unit 1</option>'+
            // '<option value=\'2\'>Unit 2</option>'+
            // '<option value=\'3\'>Unit 3</option>'+
            // '<option value=\'4\'>Unit 4</option>'+
            // '<option value=\'5\'>Unit 5</option>'+
            // '<option value=\'6\'>Unit 6</option>'+
            // '<option value=\'7\'>Unit 7</option>'+
            // '<option value=\'8\'>Unit 8</option>'+
            // '<option value=\'9\' >Unit 9</option>'+
            // '<option value=\'10\'>Unit 10</option>'+
            // '<option value=\'11\'>Unit 11</option>'+
            // '<option value=\'12\'>Unit 12</option>'+
			  "</select>"+
			"</td>"+
			"<td width=\"115\" align=\"center\" valign=\"bottom\">"+
			  "<select name=\"select2\" class=\"menu\" id=\"selLesson\" onChange=\"listarExer(this.value);\">"+selLess+
			  "</select>"+
			"</td>"+
			"<td width=\"120\" align=\"center\" valign=\"bottom\">"+
			"<div id=\"divSelExer\">"+
			  "<select name=\"select3\" class=\"menuA\" id=\"selExercise\" onChange=\"mostrarDivPrinc(this.value);\">"+selExe+
			  "</select>"+
			"</div>"+
			"</td>"+
			"<td width=\"108\" align=\"center\" valign=\"middle\"><a href=\"../vocabulary/index.html\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image8','','../img/7.btn_voca_2.png',1)\"><img src=\"../img/7.btn_voca_1.png\" name=\"Image8\" width=\"85\" height=\"50\" border=\"0\" id=\"Image8\" /></a></td>"+
			"<td width=\"81\" align=\"center\" valign=\"middle\"><a href=\"../games/index.html\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image7','','../img/7.btn_game_2.png',1)\"><img src=\"../img/7.btn_game_1.png\" name=\"Image7\" width=\"76\" height=\"50\" border=\"0\" id=\"Image7\" /></a></td>"+
		  "</tr>"+
		"</table></td>"+
	  "</tr>"+
	"</table>";
	
	$('#header').html(res);
	listarExer(idLss, idExe);
}

function cambiarUnit(idUnit)
{
	if (idUnit == 1)
		document.location.href='../../Unit1/index.html';
	else if (idUnit == 2)
		document.location.href='../../Unit2/index.html';
	else if (idUnit == 3)
		document.location.href='../../Unit3/index.html';
	else if (idUnit == 4)
		document.location.href='../../Unit4/index.html';
	else if (idUnit == 5)
		document.location.href='../../Unit5/index.html';
	else if (idUnit == 6)
		document.location.href='../../Unit6/index.html';
	else if (idUnit == 7)
		document.location.href='../../Unit7/index.html';
	else if (idUnit == 8)
		document.location.href='../../Unit8/index.html';
	else if (idUnit == 9)
		document.location.href='../../Unit9/index.html';
	else if (idUnit == 10)
		document.location.href='../../Unit10/index.html';
	else if (idUnit == 11)
		document.location.href='../../Unit11/index.html';
	else if (idUnit == 12)
		document.location.href='../../Unit12/index.html';
}


function listarLss(idLss)
{
	if(idLss == 0)
		html = "<option></option>"+
		"<option value=\"1\">Lesson 1</option>"+
		"<option value=\"2\">Lesson 2</option>"+
		"<option value=\"3\">Lesson 3</option>";
	else if(idLss == 1)
		html = "<option></option>"+
		"<option value=\"1\" selected>Lesson 1</option>"+
		"<option value=\"2\">Lesson 2</option>"+
		"<option value=\"3\">Lesson 3</option>";
	else if(idLss == 2)
		html = "<option></option>"+
		"<option value=\"1\">Lesson 1</option>"+
		"<option value=\"2\" selected>Lesson 2</option>"+
		"<option value=\"3\">Lesson 3</option>";
	else if(idLss == 3)
		html = "<option></option>"+
		"<option value=\"1\">Lesson 1</option>"+
		"<option value=\"2\">Lesson 2</option>"+
		"<option value=\"3\" selected>Lesson 3</option>";
	
	return html;
}

function listarExer(idLss, idExer)
{
	
	/*if(idLss == 0)
		alert("hola");
		//document.location.href='index.html';
	else{*/
		opt = "<select name=\"select3\" class=\"menuA\" id=\"selExercise\" onChange=\"mostrarDivPrinc(this.value);\">"+
			  	"<option value='0'></option>";
		if (idLss == 0)
			text = "";
		else if (idLss == 100)
			document.location.href='index.html';
		else if (idLss == 1)
		{
			for (i=2; i<=20; i++)
			{
				text = "Exercise";
				if (i == 2)
					text = "Goals";
				else if (i == 3)
					text = "Listen";
				else if (i == 4)
					text = text+" 1";
				else if (i == 5)
					text = "Vocabulary 1";
				else if (i == 6)
					text = text+" 2";
				else if (i == 7)
					text = text+" 3";
				else if (i == 8)
					text = text+" 4";
				else if (i == 9)
					text = "Vocabulary 2";
				else if (i == 10)
					text = text+" 5";
				else if (i == 11)
					text = text+" 6";
				else if (i == 12)
					text = text+" 7";
				else if (i == 13)
					text = "Vocabulary 3";
				else if (i == 14)
					text = text+" 8";
				else if (i == 15)
					text = "Pronunciation";
				else if (i == 16)
					text = text+" 9";
				else if (i == 17)
					text = text+" 10";
				else if (i == 18)
					text = text+" 11";
				/*else if (i == 19)
					text = "Interact";*/
				else if (i == 20)
					text = "Quiz";
					
				//opt = opt + "<option value=\""+i+"\">"+text+"</option>";
				
				if (i == idExer)
					opt += '<option value="'+i+'" selected>'+text+'</option>';	
				else if(i != 19)
					opt += '<option value="'+i+'">'+text+'</option>';
			}
		}
		else if(idLss == 2)
		{
			for	(i=21; i<=39; i++){		
				text = "Exercise";
				if (i == 21)
					text = "Goals";
				else if (i == 22)
					text = "Listen";
				else if (i == 23)
					text = text+" 1";
				else if (i == 24)
					text = " Vocabulary 1";
				else if (i == 25)
					text = text+" 2";
				else if (i == 26)
					text = text+" 3";
				else if (i == 27)
					text = text+" 4";
				else if (i == 28)
					text = text+" 5";
				else if (i == 29)
					text = "Grammar";
				else if (i == 30)
					text = text+" 6";
				else if (i == 31)
					text = text+" 7";
				else if (i == 32)
					text = "Vocabulary 2";
				else if (i == 33)
					text = text+" 8";
				else if (i == 34)
					text = text+" 9";
				else if (i == 35)
					text = "Pronunciation";
				else if (i == 36)
					text = text+" 10";
				else if (i == 37)
					text = text+" 11";
				else if (i == 38)
					text = text+" 12";
				else if (i == 39)
					text = "Quiz";
					
				if (i == idExer)
					opt += '<option value="'+i+'" selected>'+text+'</option>';	
				else
					opt += '<option value="'+i+'">'+text+'</option>';

				//opt += '<option value="'+i+'">'+text+'</option>';
			}	
		}
		else if(idLss == 3)
		{
			for (i=40; i<=54; i++)
			{
				text = "Exercise";
				if (i == 40)
					text = "Goals";
				else if (i == 41)
					text = "Vocabulary";
				else if (i == 42)
					text = text+" 1";
				else if (i == 43)
					text = text+" 2";
				else if (i == 44)
					text = "Listen";
				else if (i == 45)
					text = text+" 3";
				else if (i == 46)
					text = text+" 4";
				else if (i == 47)
					text = "Grammar";
				else if (i == 48)
					text = text+" 5";
				else if (i == 49)
					text = text+" 6";
				else if (i == 50)
					text = text+" 7";
				else if (i == 51)
					text = text+" 8";
				else if (i == 52)
					text = text+" 9";
				else if (i == 53)
					text = "Quiz";
				else if (i == 54)
					text = "Unit Task";

				//opt += '<option value="'+i+'">'+text+'</option>';	
				
				if (i == idExer)
					opt += '<option value="'+i+'" selected>'+text+'</option>';	
				else
					opt += '<option value="'+i+'">'+text+'</option>';
			}
		}
		else if(idLss == 4)
		{
			for (i=40; i<42; i++)
			{
				if (i == 40)
					text = "Unit Task";
				else if (i == 41)
					text = "Unit Task";

				//opt += '<option value="'+i+'">'+text+'</option>';	
				
				if (i == idExer)
					opt += '<option value="'+i+'" selected>'+text+'</option>';	
				else
					opt += '<option value="'+i+'">'+text+'</option>';
			}
		}
		
		opt = opt +"</select>";
		$('#divSelExer').html(opt); 
	//}
}

//function mostrarDivPrinc(desde,idL)
function mostrarDivPrinc(idL)
{
	//alert("hola");
	if (idL == 1)
		document.location.href='index.html';
	else if (idL == 2)
		document.location.href='L1_goals.html';
	else if (idL == 3)
		document.location.href='L1_Listen.html';
	else if (idL == 4)
		document.location.href='L1_Exer_1.html';
	else if (idL == 5)
		document.location.href='L1_Vocabulary1.html';
	else if (idL == 6)
		document.location.href='L1_Exer_2.html';
	else if (idL == 7)
		document.location.href='L1_Exer_3.html';
	else if (idL == 8)
		document.location.href='L1_Exer_4.html';
	else if (idL == 9)
		document.location.href='L1_Vocabulary_2.html';
	else if (idL == 10)
		document.location.href='L1_Exer_5.html';
	else if (idL == 11)
		document.location.href='L1_Exer_6.html';
	else if (idL == 12)
		document.location.href='L1_Exer_7.html';
	else if (idL == 13)
		document.location.href='L1_Vocabulary_3.html';
	else if (idL == 14)
		document.location.href='L1_Exer_8.html';
	else if (idL == 15)
		document.location.href='L1_Pronunciation.html';
	else if (idL == 16)
		document.location.href='L1_Exer_9.html';
	else if (idL == 17)
		document.location.href='L1_Exer_10.html';
	else if (idL == 18)
		document.location.href='L1_Exer_11.html';
	else if (idL == 19)
		document.location.href='L1_Interact.html';
	else if (idL == 20)
		document.location.href='L1_Quiz.html';
	else if (idL == 21)
		document.location.href='L2_goals.html';
	else if (idL == 22)
		document.location.href='L2_Listen.html';
	else if (idL == 23)
		document.location.href='L2_Exer_1.html';
	else if (idL == 24)
		document.location.href='L2_Vocabulary_1.html';
	else if (idL == 25)
		document.location.href='L2_Exer_2.html';
	else if (idL == 26)
		document.location.href='L2_Exer_3.html';
	else if (idL == 27)
		document.location.href='L2_Exer_4.html';
	else if (idL == 28)
		document.location.href='L2_Exer_5.html';
	else if (idL == 29)
		document.location.href='L2_Grammar.html';
	else if (idL == 30)
		document.location.href='L2_Exer_6.html';
	else if (idL == 31)
		document.location.href='L2_Exer_7.html';
	else if (idL == 32)
		document.location.href='L2_Vocabulary_2.html';
	else if (idL == 33)
		document.location.href='L2_Exer_8.html';
	else if (idL == 34)
		document.location.href='L2_Exer_9.html';
	else if (idL == 35)
		document.location.href='L2_Pronunciation.html';
	else if (idL == 36)
		document.location.href='L2_Exer_10.html';
	else if (idL == 37)
		document.location.href='L2_Exer_11.html';
	else if (idL == 38)
		document.location.href='L2_Exer_12.html';
	else if (idL == 39)
		document.location.href='L2_Quiz.html';
	else if (idL == 40)
		document.location.href='L3_goals.html';
	else if (idL == 41)
		document.location.href='L3_Vocabulary.html';
	else if (idL == 42)
		document.location.href='L3_Exer_1.html';
	else if (idL == 43)
		document.location.href='L3_Exer_2.html';
	else if (idL == 44)
		document.location.href='L3_Listen.html';
	else if (idL == 45)
		document.location.href='L3_Exer_3.html';
	else if (idL == 46)
		document.location.href='L3_Exer_4.html';
	else if (idL == 47)
		document.location.href='L3_Grammar.html';
	else if (idL == 48)
		document.location.href='L3_Exer_5.html';
	else if (idL == 49)
		document.location.href='L3_Exer_6.html';
	else if (idL == 50)
		document.location.href='L3_Exer_7.html';
	else if (idL == 51)
		document.location.href='L3_Exer_8.html';
	else if (idL == 52)
		document.location.href='L3_Exer_9.html';
	else if (idL == 53)
		document.location.href='L3_Quiz.html';
	else if (idL == 54)
		document.location.href='U1_Unit_task.html';
}

function verDivSwf()
{
	$('#divSwf').show();
	$('#closeDiv').show();
	$('#opacoDiv').show();
}

function ocultarDiv()
{
	$('#divSwf').hide();
	$('#closeDiv').hide();
	$('#opacoDiv').hide();
}


/* Vocabulary 1 */
function cambiarDivL1Voc1(idVoc)
{
	if (idVoc == 1){
		jpg = "art-1_1_vb-1_a";
		imgTit = "img_L1_Vocabulary1";
		prev = 6;
		next = 2;
		
		swf = "<object id=\"FlashID1\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\">"+
		  "<param name=\"movie\" value=\"../swf/L1/L1_vocabulary_1/btn_vocabulary_a.swf\" />"+
		  "<param name=\"quality\" value=\"high\" />"+
		  "<param name=\"wmode\" value=\"transparent\" />"+
		  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
		  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
		  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
		  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
		  "<!--[if !IE]>-->"+
		  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_vocabulary_1/btn_vocabulary_a.swf\" width=\"45\" height=\"40\">"+
			"<!--<![endif]-->"+
			"<param name=\"quality\" value=\"high\" />"+
			"<param name=\"wmode\" value=\"transparent\" />"+
			"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
			"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
			"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
			"<div>"+
			  "<h4>El contenido de esta página requiere una versión más reciente de Adobe Flash Player.</h4>"+
			  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
			"</div>"+
			"<!--[if !IE]>-->"+
		  "</object>"+
		  "<!--<![endif]-->"+
		"</object>";
	
		tblTxt = "<table align=\"center\" background=\"../img/bg_Cuadro1.png\" width=\"299\" border=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"297\" height=\"175\" align=\"center\" valign=\"middle\"><table width=\"240\" border=\"0\" cellspacing=\"0\">"+
			  "<tr class=\"texto_1\">"+
				"<td width=\"20\" height=\"25\" align=\"center\" valign=\"middle\"><strong>A.</strong></td>"+
				"<td width=\"216\" align=\"left\" valign=\"middle\">Hello</td>"+
			  "</tr>"+
			  "<tr class=\"texto_3\">"+
				"<td height=\"25\" align=\"center\" valign=\"middle\"><strong>B.</strong></td>"+
				"<td align=\"left\" valign=\"middle\">Good morning. How are you?</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"25\" align=\"center\" valign=\"middle\" class=\"texto_1\"><strong>A.</strong></td>"+
				"<td align=\"left\" valign=\"middle\" class=\"texto_1\">Fine thanks, and you?</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"25\" align=\"center\" valign=\"middle\" class=\"texto_3\"><strong>B.</strong></td>"+
				"<td align=\"left\" valign=\"middle\" class=\"texto_3\">I'm fine, thank you.</td>"+
			  "</tr>"+
			"</table></td>"+
		  "</tr>"+
		"</table>";
		
		tblPts = "<table width=\"95\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"12\" height=\"45\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_verde.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"10\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
		  "</tr>"+
		"</table>";
	}
	else if (idVoc == 2){
		jpg = "art-1_1_vb-1_b";
		imgTit = "img_L1_Vocabulary1a";
		prev = 1;
		next = 3;
		
		swf = "<object id=\"FlashID2\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\">"+
		  "<param name=\"movie\" value=\"../swf/L1/L1_vocabulary_1/btn_vocabulary_b.swf\" />"+
		  "<param name=\"quality\" value=\"high\" />"+
		  "<param name=\"wmode\" value=\"transparent\" />"+
		  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
		  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
		  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
		  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
		  "<!--[if !IE]>-->"+
		  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_vocabulary_1/btn_vocabulary_b.swf\" width=\"45\" height=\"40\">"+
			"<!--<![endif]-->"+
			"<param name=\"quality\" value=\"high\" />"+
			"<param name=\"wmode\" value=\"transparent\" />"+
			"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
			"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
			"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
			"<div>"+
			  "<h4>El contenido de esta página requiere una versión más reciente de Adobe Flash Player.</h4>"+
			  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
			"</div>"+
			"<!--[if !IE]>-->"+
		  "</object>"+
		  "<!--<![endif]-->"+
		"</object>";
	
		tblTxt = "<table align=\"center\" background=\"../img/bg_Cuadro2.png\" width=\"277\" border=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"275\" height=\"183\" align=\"center\" valign=\"middle\"><table width=\"194\" border=\"0\" cellspacing=\"0\">"+
			  "<tr class=\"texto_1\">"+
				"<td width=\"20\" height=\"25\" align=\"center\" valign=\"middle\"><strong>A.</strong></td>"+
				"<td width=\"170\" align=\"left\" valign=\"middle\">Hi</td>"+
			  "</tr>"+
			  "<tr class=\"texto_3\">"+
				"<td height=\"25\" align=\"center\" valign=\"middle\"><strong>B.</strong></td>"+
				"<td align=\"left\" valign=\"middle\">Hello!</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"25\" align=\"center\" valign=\"middle\" class=\"texto_1\"><strong>A.</strong></td>"+
				"<td align=\"left\" valign=\"middle\" class=\"texto_1\">How are you?</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"25\" align=\"center\" valign=\"middle\" class=\"texto_3\"><strong>B.</strong></td>"+
				"<td align=\"left\" valign=\"middle\" class=\"texto_3\">Fine, thanks, and you?</td>"+
			  "</tr>"+
			  "<tr class=\"texto_1\">"+
				"<td width=\"20\" height=\"25\" align=\"center\" valign=\"middle\"><strong>A.</strong></td>"+
				"<td width=\"170\" align=\"left\" valign=\"middle\">I'm fine, thanks.</td>"+
			  "</tr>"+
			"</table></td>"+
		  "</tr>"+
		"</table>";
		
		tblPts = "<table width=\"95\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"12\" height=\"45\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_verde.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"10\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
		  "</tr>"+
		"</table>";
	}
	else if (idVoc == 3){
		jpg = "art-1_1_vb-1_d";
		imgTit = "img_L1_Vocabulary1b";
		prev = 2;
		next = 4;
		
		swf = "<object id=\"FlashID3\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\">"+
		  "<param name=\"movie\" value=\"../swf/L1/L1_vocabulary_1/btn_vocabulary_c.swf\" />"+
		  "<param name=\"quality\" value=\"high\" />"+
		  "<param name=\"wmode\" value=\"transparent\" />"+
		  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
		  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
		  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
		  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
		  "<!--[if !IE]>-->"+
		  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_vocabulary_1/btn_vocabulary_c.swf\" width=\"45\" height=\"40\">"+
			"<!--<![endif]-->"+
			"<param name=\"quality\" value=\"high\" />"+
			"<param name=\"wmode\" value=\"transparent\" />"+
			"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
			"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
			"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
			"<div>"+
			  "<h4>El contenido de esta página requiere una versión más reciente de Adobe Flash Player.</h4>"+
			  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
			"</div>"+
			"<!--[if !IE]>-->"+
		  "</object>"+
		  "<!--<![endif]-->"+
		"</object>";
	
		tblTxt = "<table align=\"center\" background=\"../img/bg_Cuadro3.png\" width=\"290\" border=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"288\" height=\"164\" align=\"center\" valign=\"middle\"><table width=\"249\" border=\"0\" cellspacing=\"0\">"+
				  "<tr class=\"texto_1\">"+
					"<td width=\"20\" height=\"25\" align=\"center\" valign=\"middle\"><strong>A.</strong></td>"+
					"<td width=\"225\" align=\"left\" valign=\"middle\">Hey, how's it going?</td>"+
				  "</tr>"+
				  "<tr class=\"texto_3\">"+
					"<td height=\"25\" align=\"center\" valign=\"middle\"><strong>B.</strong></td>"+
					"<td align=\"left\" valign=\"middle\">Good and you?</td>"+
				  "</tr>"+
				  "<tr>"+
					"<td height=\"25\" align=\"center\" valign=\"middle\" class=\"texto_1\"><strong>A.</strong></td>"+
					"<td align=\"left\" valign=\"middle\" class=\"texto_1\">Pretty good.</td>"+
				  "</tr>"+
				"</table></td>"+
			  "</tr>"+
			"</table>";
		
		tblPts = "<table width=\"95\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"12\" height=\"45\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_verde.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"10\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
		  "</tr>"+
		"</table>";
	}
	else if (idVoc == 4){
		jpg = "art-1_1_vb-1_a";
		imgTit = "img_L1_Vocabulary1c";
		prev = 3;
		next = 5;
		
		swf = "<object id=\"FlashID4\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\">"+
		  "<param name=\"movie\" value=\"../swf/L1/L1_vocabulary_1/btn_vocabulary_d.swf\" />"+
		  "<param name=\"quality\" value=\"high\" />"+
		  "<param name=\"wmode\" value=\"transparent\" />"+
		  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
		  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
		  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
		  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
		  "<!--[if !IE]>-->"+
		  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_vocabulary_1/btn_vocabulary_d.swf\" width=\"45\" height=\"40\">"+
			"<!--<![endif]-->"+
			"<param name=\"quality\" value=\"high\" />"+
			"<param name=\"wmode\" value=\"transparent\" />"+
			"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
			"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
			"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
			"<div>"+
			  "<h4>El contenido de esta página requiere una versión más reciente de Adobe Flash Player.</h4>"+
			  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
			"</div>"+
			"<!--[if !IE]>-->"+
		  "</object>"+
		  "<!--<![endif]-->"+
		"</object>";
	
		tblTxt = "<table align=\"center\" background=\"../img/bg_Cuadro3.png\" width=\"290\" border=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"288\" height=\"164\" align=\"center\" valign=\"middle\"><table width=\"249\" border=\"0\" cellspacing=\"0\">"+
				  "<tr class=\"texto_1\">"+
					"<td width=\"20\" height=\"25\" align=\"center\" valign=\"middle\"><strong>A.</strong></td>"+
					"<td width=\"225\" align=\"left\" valign=\"middle\">Nice to see you again.</td>"+
				  "</tr>"+
				  "<tr class=\"texto_3\">"+
					"<td height=\"25\" align=\"center\" valign=\"middle\"><strong>B.</strong></td>"+
					"<td align=\"left\" valign=\"middle\">Nice to see you too. Good-bye.</td>"+
				  "</tr>"+
				  "<tr>"+
					"<td height=\"25\" align=\"center\" valign=\"middle\" class=\"texto_1\"><strong>A.</strong></td>"+
					"<td align=\"left\" valign=\"middle\" class=\"texto_1\">Bye-bye.</td>"+
				  "</tr>"+
				"</table></td>"+
			  "</tr>"+
			"</table>";
		
		tblPts = "<table width=\"95\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"12\" height=\"45\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_verde.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"10\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
		  "</tr>"+
		"</table>";
	}
	else if (idVoc == 5){
		jpg = "art-1_1_vb-1_b";
		imgTit = "img_L1_Vocabulary1d";
		prev = 4;
		next = 6;
		
		swf = "<object id=\"FlashID5\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\">"+
		  "<param name=\"movie\" value=\"../swf/L1/L1_vocabulary_1/btn_vocabulary_e.swf\" />"+
		  "<param name=\"quality\" value=\"high\" />"+
		  "<param name=\"wmode\" value=\"transparent\" />"+
		  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
		  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
		  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
		  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
		  "<!--[if !IE]>-->"+
		  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_vocabulary_1/btn_vocabulary_e.swf\" width=\"45\" height=\"40\">"+
			"<!--<![endif]-->"+
			"<param name=\"quality\" value=\"high\" />"+
			"<param name=\"wmode\" value=\"transparent\" />"+
			"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
			"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
			"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
			"<div>"+
			  "<h4>El contenido de esta página requiere una versión más reciente de Adobe Flash Player.</h4>"+
			  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
			"</div>"+
			"<!--[if !IE]>-->"+
		  "</object>"+
		  "<!--<![endif]-->"+
		"</object>";
	
		tblTxt = "<table align=\"center\" background=\"../img/bg_Cuadro4.png\" width=\"250\" border=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"248\" height=\"145\" align=\"center\" valign=\"middle\"><table width=\"151\" border=\"0\" cellspacing=\"0\">"+
			  "<tr class=\"texto_1\">"+
				"<td width=\"20\" height=\"25\" align=\"center\" valign=\"middle\"><strong>A.</strong></td>"+
				"<td width=\"127\" align=\"left\" valign=\"middle\">Bye, take care.</td>"+
			  "</tr>"+
			  "<tr class=\"texto_3\">"+
				"<td height=\"25\" align=\"center\" valign=\"middle\"><strong>B.</strong></td>"+
				"<td align=\"left\" valign=\"middle\">You too! Bye.</td>"+
			  "</tr>"+
			"</table></td>"+
		  "</tr>"+
		"</table>";
		
		tblPts = "<table width=\"95\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"12\" height=\"45\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_verde.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"10\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
		  "</tr>"+
		"</table>";
	}
	else if (idVoc == 6){
		jpg = "art-1_1_vb-1_c";
		imgTit = "img_L1_Vocabulary1e";
		prev = 5;
		next = 1;
		
		swf = "<object id=\"FlashID6\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\">"+
		  "<param name=\"movie\" value=\"../swf/L1/L1_vocabulary_1/btn_vocabulary_f.swf\" />"+
		  "<param name=\"quality\" value=\"high\" />"+
		  "<param name=\"wmode\" value=\"transparent\" />"+
		  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
		  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
		  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
		  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
		  "<!--[if !IE]>-->"+
		  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_vocabulary_1/btn_vocabulary_f.swf\" width=\"45\" height=\"40\">"+
			"<!--<![endif]-->"+
			"<param name=\"quality\" value=\"high\" />"+
			"<param name=\"wmode\" value=\"transparent\" />"+
			"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
			"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
			"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
			"<div>"+
			  "<h4>El contenido de esta página requiere una versión más reciente de Adobe Flash Player.</h4>"+
			  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
			"</div>"+
			"<!--[if !IE]>-->"+
		  "</object>"+
		  "<!--<![endif]-->"+
		"</object>";
	
		tblTxt = "<table align=\"center\" background=\"../img/bg_Cuadro1.png\" width=\"299\" border=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"297\" height=\"175\" align=\"center\" valign=\"middle\"><table width=\"240\" border=\"0\" cellspacing=\"0\">"+
			  "<tr class=\"texto_1\">"+
				"<td width=\"20\" height=\"25\" align=\"center\" valign=\"middle\"><strong>A.</strong></td>"+
				"<td width=\"216\" align=\"left\" valign=\"middle\">Good to see you.</td>"+
			  "</tr>"+
			  "<tr class=\"texto_3\">"+
				"<td height=\"25\" align=\"center\" valign=\"middle\"><strong>B.</strong></td>"+
				"<td align=\"left\" valign=\"middle\">You too.</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"25\" align=\"center\" valign=\"middle\" class=\"texto_1\"><strong>A.</strong></td>"+
				"<td align=\"left\" valign=\"middle\" class=\"texto_1\">See ya later.</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"25\" align=\"center\" valign=\"middle\" class=\"texto_3\"><strong>B.</strong></td>"+
				"<td align=\"left\" valign=\"middle\" class=\"texto_3\">Bye.</td>"+
			  "</tr>"+
			"</table></td>"+
		  "</tr>"+
		"</table>";
		
		tblPts = "<table width=\"95\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"12\" height=\"45\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"10\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_verde.png\" width=\"12\" height=\"16\" /></td>"+
		  "</tr>"+
		"</table>";
	}
	
	html = "<table width=\"770\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">"+
	  "<tr>"+
		"<td width=\"50\" height=\"339\" align=\"center\"><a href=\"#\" onclick=\"cambiarDivL1Voc1("+prev+")\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image9','','../img/11.izq2.png',1)\"><img src=\"../img/11.izq.png\" name=\"Image9\" width=\"50\" height=\"55\" border=\"0\" id=\"Image9\" /></a></td>"+
		"<td width=\"370\" align=\"left\" valign=\"middle\"><img src=\"../jpg/"+jpg+".png\" width=\"370\" height=\"304\" /></td>"+
		"<td width=\"293\" align=\"center\" valign=\"middle\"><table width=\"175\" border=\"0\">"+
	  "<tr>"+
		"<td width=\"65\">"+swf+"</td>"+
		"<td width=\"100\"><img src=\"../img/"+imgTit+".png\" width=\"181\" height=\"44\" /></td>"+
	  "</tr>"+
	"</table>"+tblTxt+tblPts+
	"&nbsp;</td>"+
		"<td width=\"57\" align=\"center\"><a href=\"#\" onclick=\"cambiarDivL1Voc1("+next+")\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image10','','../img/11.der2.png',1)\"><img src=\"../img/11.der.png\" name=\"Image10\" width=\"50\" height=\"55\" border=\"0\" id=\"Image10\" /></a></td>"+
	  "</tr>"+
	  "</table>";
		
	$('#divTblVoc').html(html);
}
/* Vocabulary 1 */


/* Exercise 2 */
function verificarL1E2(idQst, idBtn)
{
	//ansL1E2 = document.frmAnswerE2.iptAnswerE2.value;
	ansL1E2 = $("#iptAnswerE2").val();
	ansL1E2 =  $.trim(ansL1E2);
	vez = $("#vez").val();
	img = "";
	
	varscore = $("#inptscore").attr("value");
	
	doLMSSetValue("cmi.core.score.min", 0);
	doLMSSetValue("cmi.core.score.max", 100);
	
	if(ansL1E2 == "" && idBtn != 3)
		alert("You must write an answer.");
	else{
		if(idBtn == 1)
		{
			if(idQst == 1 && (ansL1E2 == 'How are you?' || ansL1E2 == 'How are you')){
				img = "good";
				varscore = parseFloat(varscore) + 17;
			}
			else if (idQst == 2 && (ansL1E2 == 'Good-bye' || ansL1E2 == 'Good-bye.')){
				img = "good";
				varscore = parseFloat(varscore) + parseFloat('16.6');
			}
			else if (idQst == 3 && (ansL1E2 == "How's it going?" || ansL1E2 == "How's it going")){
				img = "good";
				varscore = parseFloat(varscore) + parseFloat('16.6');
			}
			else if (idQst == 4 && (ansL1E2 == 'See ya later.' || ansL1E2 == 'See ya later')){
				img = "good";
				varscore = parseFloat(varscore) + parseFloat('16.6');
			}
			else if (idQst == 5 && (ansL1E2 == 'Hello.' || ansL1E2 == 'Hello')){
				img = "good";
				varscore = parseFloat(varscore) + parseFloat('16.6');
			}
			else if (idQst == 6 && (ansL1E2 == 'You too. Bye.' || ansL1E2 == 'You too. Bye')){
				img = "good";
				varscore = parseFloat(varscore) + parseFloat('16.6');
			}
			else
				img = "good_No";
				
			errorTxt3 = doLMSSetValue("cmi.core.score.raw", varscore);
		
			if(varscore >= "80"){
				errorTxt2 = doLMSSetValue("cmi.core.lesson_status", "passed");
			}
			else{
				errorTxt2 = doLMSSetValue("cmi.core.lesson_status", "failed");
			}
			doLMSCommit();
				
			actualizardivCalL1E2(img, varscore);
		}
		else{
			if(idBtn == 3)
			{
				switch (idQst){
				case 1:
					value = "How are you";
				break;
				case 2:
					value = "Good-bye";
				break;
				case 3:
					value = "How's it going";
				break;
				case 4:
					value = "See ya later";
				break;
				case 5:
					value = "Hello";
				break;
				case 6:
					value = "You too. Bye";
				break;}
				actualizarBtnL1E2(idQst, idBtn);
			}	
			else if(idBtn == 2){
				value = "";
				vez = parseInt(vez) + 1;
				if(vez >= 2)
					actualizarBtnL1E2(idQst, idBtn);
			}
			
			html = "<input name=\"iptAnswerE2\" type=\"text\" class=\"raya_bg_cien\" id=\"iptAnswerE2\" value=\""+value+"\" />"+
					"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
		
			$('#divAnswerE2').html(html); 
			actualizardivCalL1E2(img, varscore);
		}
	}
}

function actualizarBtnL1E2(idQst, idBtn)
{
	if(idBtn == 3)
		html = "<table width=\"126\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"38\" align=\"center\" valign=\"middle\"><img src=\"../img/8.btn_chulito_desab.png\" name=\"Image22\" width=\"25\" height=\"25\" border=\"0\" id=\"Image22\" /></td>"+
			"<td width=\"36\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E2("+idQst+", 2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image23','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image23\" width=\"25\" height=\"25\" border=\"0\" id=\"Image23\" /></a></td>"+
			"<td width=\"38\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E2("+idQst+", 3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image24','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image24\" width=\"29\" height=\"25\" border=\"0\" id=\"Image24\" /></a></td>"+
		  "</tr>"+
		"</table>";
	else
		html = "<table width=\"126\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"38\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E2("+idQst+", 1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image22','','../img/8.btn_chulito2.png',1)\"><img src=\"../img/8.btn_chulito.png\" name=\"Image22\" width=\"25\" height=\"25\" border=\"0\" id=\"Image22\" /></a></td>"+
			"<td width=\"36\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E2("+idQst+", 2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image23','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image23\" width=\"25\" height=\"25\" border=\"0\" id=\"Image23\" /></a></td>"+
			"<td width=\"38\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E2("+idQst+", 3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image24','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image24\" width=\"29\" height=\"25\" border=\"0\" id=\"Image24\" /></a></td>"+
		  "</tr>"+
		"</table>";
			
	$('#divBtn').html(html);
}

function actualizardivCalL1E2(img, iptScore)
{
	//alert(idBtn);
	if(img != "")
		html = "<img src=\"../img/"+img+".png\" width=\"30\" height=\"30\" />"+
				"<input type=\"hidden\" id=\"inptscore\" name=\"inptscore\" value="+iptScore+" />";
	else
		html = "<input type=\"hidden\" id=\"inptscore\" name=\"inptscore\" value="+iptScore+" />";
	
	$('#divCalL1E2').html(html);
}

function cambiarDivL1Ex2(idQst)
{	
	iptScore = $("#inptscore").attr("value");
	
	if (idQst == 1)
	{
		img = "art-1_1_2_a";
		
		tblQst = "<table width=\"82%\" border=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"15\" height=\"38\" valign=\"bottom\" class=\"texto_1\"><strong>1.</strong></td>"+
			"<td width=\"21\" align=\"center\" valign=\"bottom\" class=\"texto_1\"><strong>A<em>.</em></strong></td>"+
			"<td width=\"114\" valign=\"bottom\" class=\"texto_1\"> Good morning. </td>"+
			"<td width=\"110\" align=\"left\" valign=\"bottom\"><div id=\"divAnswerE2\">"+
			  "<input name=\"iptAnswerE2\" type=\"text\" class=\"raya_bg_cien\" id=\"iptAnswerE2\" />"+
			  "<input type=\"hidden\" id=\"vez\" value=0 />"+
			"</div></td>"+
			"<td width=\"14\" align=\"left\" valign=\"bottom\" class=\"texto_1\">?</td>"+
		  "</tr>"+
		  "<tr>"+
			"<td height=\"32\">.</td>"+
			"<td align=\"center\" valign=\"bottom\" class=\"texto_2\"><strong>B.</strong></td>"+
			"<td colspan=\"2\" align=\"left\" valign=\"bottom\" class=\"texto_2\">I'm fine, thanks.</td>"+
		  "</tr>"+
		  "<tr>"+			
		  "</tr>"+
		"</table>";
		
		btnQst = "<table width=\"54\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">"+
		  "<tr>"+
			"<td width=\"52\"><a href=\"#\" onclick=\"cambiarDivL1Ex2(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image10','','../img/btn_1a_2.png',1)\"><img src=\"../img/btn_1a_2.png\" name=\"Image10\" width=\"53\" height=\"40\" border=\"0\" id=\"Image10\" /></a></td>"+
		  "</tr>"+
		  "<tr style=\"\">"+
			"<td height=\"1\" align=\"left\" valign=\"top\"><img src=\"../img/9.img_divivionHor.png\" width=\"40\" height=\"3\" /></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex2(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image12','','../img/btn_2a_2.png',1)\"><img src=\"../img/btn_2a_1.png\" name=\"Image12\" width=\"53\" height=\"40\" border=\"0\" id=\"Image12\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td height=\"2\"><img src=\"../img/9.img_divivionHor.png\" width=\"40\" height=\"3\" /></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex2(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/btn_3a_2.png',1)\"><img src=\"../img/btn_3a_1.png\" name=\"Image16\" width=\"53\" height=\"40\" border=\"0\" id=\"Image16\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td height=\"2\"><img src=\"../img/9.img_divivionHor.png\" width=\"40\" height=\"3\" /></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex2(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image17','','../img/btn_4a_2.png',1)\"><img src=\"../img/btn_4a_1.png\" name=\"Image17\" width=\"53\" height=\"40\" border=\"0\" id=\"Image17\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td height=\"2\"><img src=\"../img/9.img_divivionHor.png\" width=\"40\" height=\"3\" /></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex2(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image18','','../img/btn_5a_2.png',1)\"><img src=\"../img/btn_5a_1.png\" name=\"Image18\" width=\"53\" height=\"40\" border=\"0\" id=\"Image18\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td height=\"2\"><img src=\"../img/9.img_divivionHor.png\" width=\"40\" height=\"3\" /></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex2(6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image19','','../img/btn_6a_2.png',1)\"><img src=\"../img/btn_6a_1.png\" name=\"Image19\" width=\"53\" height=\"40\" border=\"0\" id=\"Image19\" /></a></td>"+
		  "</tr>"+
		"</table>";
	}
	else if (idQst == 2)
	{
		img = "art-1_1_2_b";
		
		tblQst = "<table width=\"52%\" border=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"15\" height=\"38\" valign=\"bottom\" class=\"texto_1\"><strong>2.</strong></td>"+
				"<td width=\"31\" align=\"center\" valign=\"bottom\" class=\"texto_1\"><strong>A<em>.</em></strong></td>"+
				"<td width=\"115\" valign=\"bottom\" class=\"texto_1\"><div id=\"divAnswerE2\">"+
				  "<input name=\"iptAnswerE2\" type=\"text\" class=\"raya_bg_cien\" id=\"iptAnswerE2\" />"+
				  "<input type=\"hidden\" id=\"vez\" value=0 />"+
				"</div></td>"+
				"<td width=\"11\" valign=\"bottom\" class=\"texto_1\">.</td>"+
				"</tr>"+
			  "</table>"+
			  "<table width=\"52%\" border=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"16\" height=\"32\" class=\"texto_2\">&nbsp;</td>"+
				"<td width=\"29\" align=\"center\" valign=\"bottom\" class=\"texto_2\"><strong>B.</strong></td>"+
				"<td width=\"128\" align=\"left\" valign=\"bottom\" class=\"texto_2\">Bye-bye.</td>"+
			  "</tr>"+
			"</table>";
		
		btnQst = "<table width=\"54\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">"+
		  "<tr>"+
			"<td width=\"52\"><a href=\"#\" onclick=\"cambiarDivL1Ex2(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image10','','../img/btn_1a_2.png',1)\"><img src=\"../img/btn_1a_1.png\" name=\"Image10\" width=\"53\" height=\"40\" border=\"0\" id=\"Image10\" /></a></td>"+
		  "</tr>"+
		  "<tr style=\"\">"+
			"<td height=\"1\" align=\"left\" valign=\"top\"><img src=\"../img/9.img_divivionHor.png\" width=\"40\" height=\"3\" /></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex2(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image12','','../img/btn_2a_2.png',1)\"><img src=\"../img/btn_2a_2.png\" name=\"Image12\" width=\"53\" height=\"40\" border=\"0\" id=\"Image12\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td height=\"2\"><img src=\"../img/9.img_divivionHor.png\" width=\"40\" height=\"3\" /></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex2(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/btn_3a_2.png',1)\"><img src=\"../img/btn_3a_1.png\" name=\"Image16\" width=\"53\" height=\"40\" border=\"0\" id=\"Image16\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td height=\"2\"><img src=\"../img/9.img_divivionHor.png\" width=\"40\" height=\"3\" /></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex2(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image17','','../img/btn_4a_2.png',1)\"><img src=\"../img/btn_4a_1.png\" name=\"Image17\" width=\"53\" height=\"40\" border=\"0\" id=\"Image17\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td height=\"2\"><img src=\"../img/9.img_divivionHor.png\" width=\"40\" height=\"3\" /></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex2(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image18','','../img/btn_5a_2.png',1)\"><img src=\"../img/btn_5a_1.png\" name=\"Image18\" width=\"53\" height=\"40\" border=\"0\" id=\"Image18\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td height=\"2\"><img src=\"../img/9.img_divivionHor.png\" width=\"40\" height=\"3\" /></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex2(6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image19','','../img/btn_6a_2.png',1)\"><img src=\"../img/btn_6a_1.png\" name=\"Image19\" width=\"53\" height=\"40\" border=\"0\" id=\"Image19\" /></a></td>"+
		  "</tr>"+
		"</table>";
	}
	else if (idQst == 3)
	{
		img = "art-1_1_2_c";
	
		tblQst = "<table width=\"59%\" border=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"15\" height=\"38\" valign=\"bottom\" class=\"texto_1\"><strong>3.</strong></td>"+
				"<td width=\"32\" align=\"center\" valign=\"bottom\" class=\"texto_1\"><strong>A<em>.</em></strong></td>"+
				"<td width=\"29\" valign=\"bottom\" class=\"texto_1\"> Hey. </td>"+
				"<td width=\"110\" align=\"left\" valign=\"bottom\"><div id=\"divAnswerE2\">"+
				  "<input name=\"iptAnswerE2\" type=\"text\" class=\"raya_bg_cien\" id=\"iptAnswerE2\" />"+
				  "<input type=\"hidden\" id=\"vez\" value=0 />"+
				"</div></td>"+
				"<td width=\"8\" align=\"left\" valign=\"bottom\" class=\"texto_1\">?</td>"+
			  "</tr>"+
			  "<tr>"+			   
				"</tr>"+
			  "</table>"+
			  "<table width=\"59%\" border=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"16\" height=\"32\" class=\"texto_2\">&nbsp;</td>"+
			"<td width=\"28\" align=\"center\" valign=\"bottom\" class=\"texto_2\"><strong>B.</strong></td>"+
			"<td width=\"146\" align=\"left\" valign=\"bottom\" class=\"texto_2\">Pretty good.</td>"+
		  "</tr>"+
		"</table>";
	
		btnQst = "<table width=\"54\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">"+
		  "<tr>"+
			"<td width=\"52\"><a href=\"#\" onclick=\"cambiarDivL1Ex2(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image10','','../img/btn_1a_2.png',1)\"><img src=\"../img/btn_1a_1.png\" name=\"Image10\" width=\"53\" height=\"40\" border=\"0\" id=\"Image10\" /></a></td>"+
		  "</tr>"+
		  "<tr style=\"\">"+
			"<td height=\"1\" align=\"left\" valign=\"top\"><img src=\"../img/9.img_divivionHor.png\" width=\"40\" height=\"3\" /></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex2(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image12','','../img/btn_2a_2.png',1)\"><img src=\"../img/btn_2a_1.png\" name=\"Image12\" width=\"53\" height=\"40\" border=\"0\" id=\"Image12\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td height=\"2\"><img src=\"../img/9.img_divivionHor.png\" width=\"40\" height=\"3\" /></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex2(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/btn_3a_2.png',1)\"><img src=\"../img/btn_3a_2.png\" name=\"Image16\" width=\"53\" height=\"40\" border=\"0\" id=\"Image16\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td height=\"2\"><img src=\"../img/9.img_divivionHor.png\" width=\"40\" height=\"3\" /></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex2(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image17','','../img/btn_4a_2.png',1)\"><img src=\"../img/btn_4a_1.png\" name=\"Image17\" width=\"53\" height=\"40\" border=\"0\" id=\"Image17\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td height=\"2\"><img src=\"../img/9.img_divivionHor.png\" width=\"40\" height=\"3\" /></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex2(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image18','','../img/btn_5a_2.png',1)\"><img src=\"../img/btn_5a_1.png\" name=\"Image18\" width=\"53\" height=\"40\" border=\"0\" id=\"Image18\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td height=\"2\"><img src=\"../img/9.img_divivionHor.png\" width=\"40\" height=\"3\" /></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex2(6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image19','','../img/btn_6a_2.png',1)\"><img src=\"../img/btn_6a_1.png\" name=\"Image19\" width=\"53\" height=\"40\" border=\"0\" id=\"Image19\" /></a></td>"+
		  "</tr>"+
		"</table>";
	}
	else if (idQst == 4)
	{
		img = "art-1_1_2_d";
		
		tblQst = "<table width=\"52%\" border=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"15\" height=\"38\" valign=\"bottom\" class=\"texto_1\"><strong>4.</strong></td>"+
				"<td width=\"31\" align=\"center\" valign=\"bottom\" class=\"texto_1\"><strong>A<em>.</em></strong></td>"+
				"<td width=\"115\" valign=\"bottom\" class=\"texto_1\"><div id=\"divAnswerE2\">"+
				  "<input name=\"iptAnswerE2\" type=\"text\" class=\"raya_bg_cien\" id=\"iptAnswerE2\" />"+
				  "<input type=\"hidden\" id=\"vez\" value=0 />"+
				"</div></td>"+
				"<td width=\"11\" valign=\"bottom\" class=\"texto_1\">.</td>"+
				"</tr>"+
			  "</table>"+
			  "<table width=\"52%\" border=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"16\" height=\"32\" class=\"texto_2\">&nbsp;</td>"+
			"<td width=\"29\" align=\"center\" valign=\"bottom\" class=\"texto_2\"><strong>B.</strong></td>"+
			"<td width=\"128\" align=\"left\" valign=\"bottom\" class=\"texto_2\">Bye.</td>"+
		  "</tr>"+
		"</table>";
		
		btnQst = "<table width=\"54\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">"+
		  "<tr>"+
			"<td width=\"52\"><a href=\"#\" onclick=\"cambiarDivL1Ex2(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image10','','../img/btn_1a_2.png',1)\"><img src=\"../img/btn_1a_1.png\" name=\"Image10\" width=\"53\" height=\"40\" border=\"0\" id=\"Image10\" /></a></td>"+
		  "</tr>"+
		  "<tr style=\"\">"+
			"<td height=\"1\" align=\"left\" valign=\"top\"><img src=\"../img/9.img_divivionHor.png\" width=\"40\" height=\"3\" /></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex2(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image12','','../img/btn_2a_2.png',1)\"><img src=\"../img/btn_2a_1.png\" name=\"Image12\" width=\"53\" height=\"40\" border=\"0\" id=\"Image12\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td height=\"2\"><img src=\"../img/9.img_divivionHor.png\" width=\"40\" height=\"3\" /></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex2(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/btn_3a_2.png',1)\"><img src=\"../img/btn_3a_1.png\" name=\"Image16\" width=\"53\" height=\"40\" border=\"0\" id=\"Image16\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td height=\"2\"><img src=\"../img/9.img_divivionHor.png\" width=\"40\" height=\"3\" /></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex2(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image17','','../img/btn_4a_2.png',1)\"><img src=\"../img/btn_4a_2.png\" name=\"Image17\" width=\"53\" height=\"40\" border=\"0\" id=\"Image17\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td height=\"2\"><img src=\"../img/9.img_divivionHor.png\" width=\"40\" height=\"3\" /></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex2(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image18','','../img/btn_5a_2.png',1)\"><img src=\"../img/btn_5a_1.png\" name=\"Image18\" width=\"53\" height=\"40\" border=\"0\" id=\"Image18\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td height=\"2\"><img src=\"../img/9.img_divivionHor.png\" width=\"40\" height=\"3\" /></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex2(6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image19','','../img/btn_6a_2.png',1)\"><img src=\"../img/btn_6a_1.png\" name=\"Image19\" width=\"53\" height=\"40\" border=\"0\" id=\"Image19\" /></a></td>"+
		  "</tr>"+
		"</table>";
	}
	else if (idQst == 5)
	{
		img = "art-1_1_2_e";
		
		tblQst = "<table width=\"52%\" border=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"15\" height=\"38\" valign=\"bottom\" class=\"texto_1\"><strong>5.</strong></td>"+
				"<td width=\"32\" align=\"center\" valign=\"bottom\" class=\"texto_1\"><strong>A<em>.</em></strong></td>"+
				"<td width=\"128\" valign=\"bottom\" class=\"texto_1\">Hi.</td>"+
				"</tr>"+
			  "</table>"+
			  "<table width=\"52%\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"15\" height=\"32\" class=\"texto_2\">&nbsp;</td>"+
					"<td width=\"31\" align=\"center\" valign=\"bottom\" class=\"texto_2\"><strong>B.</strong></td>"+
					"<td width=\"110\" align=\"left\" valign=\"bottom\" class=\"texto_2\"><div id=\"divAnswerE2\">"+
						"<input name=\"iptAnswerE2\" type=\"text\" class=\"raya_bg_cien2\" id=\"iptAnswerE2\" />"+
						"<input type=\"hidden\" id=\"vez\" value=0 />"+
					"</div></td>"+
					"<td width=\"16\" align=\"left\" valign=\"bottom\" class=\"texto_2\">.</td>"+
				  "</tr>"+
				"</table>";
		
		btnQst = "<table width=\"54\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">"+
		  "<tr>"+
			"<td width=\"52\"><a href=\"#\" onclick=\"cambiarDivL1Ex2(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image10','','../img/btn_1a_2.png',1)\"><img src=\"../img/btn_1a_1.png\" name=\"Image10\" width=\"53\" height=\"40\" border=\"0\" id=\"Image10\" /></a></td>"+
		  "</tr>"+
		  "<tr style=\"\">"+
			"<td height=\"1\" align=\"left\" valign=\"top\"><img src=\"../img/9.img_divivionHor.png\" width=\"40\" height=\"3\" /></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex2(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image12','','../img/btn_2a_2.png',1)\"><img src=\"../img/btn_2a_1.png\" name=\"Image12\" width=\"53\" height=\"40\" border=\"0\" id=\"Image12\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td height=\"2\"><img src=\"../img/9.img_divivionHor.png\" width=\"40\" height=\"3\" /></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex2(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/btn_3a_2.png',1)\"><img src=\"../img/btn_3a_1.png\" name=\"Image16\" width=\"53\" height=\"40\" border=\"0\" id=\"Image16\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td height=\"2\"><img src=\"../img/9.img_divivionHor.png\" width=\"40\" height=\"3\" /></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex2(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image17','','../img/btn_4a_2.png',1)\"><img src=\"../img/btn_4a_1.png\" name=\"Image17\" width=\"53\" height=\"40\" border=\"0\" id=\"Image17\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td height=\"2\"><img src=\"../img/9.img_divivionHor.png\" width=\"40\" height=\"3\" /></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex2(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image18','','../img/btn_5a_2.png',1)\"><img src=\"../img/btn_5a_2.png\" name=\"Image18\" width=\"53\" height=\"40\" border=\"0\" id=\"Image18\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td height=\"2\"><img src=\"../img/9.img_divivionHor.png\" width=\"40\" height=\"3\" /></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex2(6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image19','','../img/btn_6a_2.png',1)\"><img src=\"../img/btn_6a_1.png\" name=\"Image19\" width=\"53\" height=\"40\" border=\"0\" id=\"Image19\" /></a></td>"+
		  "</tr>"+
		"</table>";
	}
	else if (idQst == 6)
	{
		img = "art-1_1_2_f";
		
		tblQst = "<table width=\"52%\" border=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"15\" height=\"38\" valign=\"bottom\" class=\"texto_1\"><strong>6.</strong></td>"+
				"<td width=\"32\" align=\"center\" valign=\"bottom\" class=\"texto_1\"><strong>A<em>.</em></strong></td>"+
				"<td width=\"128\" valign=\"bottom\" class=\"texto_1\">Bye. Take care.</td>"+
				"</tr>"+
			  "</table>"+
			  "<table width=\"52%\" border=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"15\" height=\"32\" class=\"texto_2\">&nbsp;</td>"+
			"<td width=\"31\" align=\"center\" valign=\"bottom\" class=\"texto_2\"><strong>B.</strong></td>"+
			"<td width=\"110\" align=\"left\" valign=\"bottom\" class=\"texto_2\"><div id=\"divAnswerE2\">"+
				"<input name=\"iptAnswerE2\" type=\"text\" class=\"raya_bg_cien2\" id=\"iptAnswerE2\" />"+
				"<input type=\"hidden\" id=\"vez\" value=0 />"+
			"</div></td>"+
			"<td width=\"16\" align=\"left\" valign=\"bottom\" class=\"texto_2\">.</td>"+
		  "</tr>"+
		"</table>";
		
		btnQst = "<table width=\"54\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">"+
		  "<tr>"+
			"<td width=\"52\"><a href=\"#\" onclick=\"cambiarDivL1Ex2(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image10','','../img/btn_1a_2.png',1)\"><img src=\"../img/btn_1a_1.png\" name=\"Image10\" width=\"53\" height=\"40\" border=\"0\" id=\"Image10\" /></a></td>"+
		  "</tr>"+
		  "<tr style=\"\">"+
			"<td height=\"1\" align=\"left\" valign=\"top\"><img src=\"../img/9.img_divivionHor.png\" width=\"40\" height=\"3\" /></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex2(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image12','','../img/btn_2a_2.png',1)\"><img src=\"../img/btn_2a_1.png\" name=\"Image12\" width=\"53\" height=\"40\" border=\"0\" id=\"Image12\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td height=\"2\"><img src=\"../img/9.img_divivionHor.png\" width=\"40\" height=\"3\" /></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex2(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/btn_3a_2.png',1)\"><img src=\"../img/btn_3a_1.png\" name=\"Image16\" width=\"53\" height=\"40\" border=\"0\" id=\"Image16\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td height=\"2\"><img src=\"../img/9.img_divivionHor.png\" width=\"40\" height=\"3\" /></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex2(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image17','','../img/btn_4a_2.png',1)\"><img src=\"../img/btn_4a_1.png\" name=\"Image17\" width=\"53\" height=\"40\" border=\"0\" id=\"Image17\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td height=\"2\"><img src=\"../img/9.img_divivionHor.png\" width=\"40\" height=\"3\" /></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex2(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image18','','../img/btn_5a_2.png',1)\"><img src=\"../img/btn_5a_1.png\" name=\"Image18\" width=\"53\" height=\"40\" border=\"0\" id=\"Image18\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td height=\"2\"><img src=\"../img/9.img_divivionHor.png\" width=\"40\" height=\"3\" /></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex2(6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image19','','../img/btn_6a_2.png',1)\"><img src=\"../img/btn_6a_2.png\" name=\"Image19\" width=\"53\" height=\"40\" border=\"0\" id=\"Image19\" /></a></td>"+
		  "</tr>"+
		"</table>";
	}
	html = "<table align=\"center\" width=\"772\" border=\"0\" cellspacing=\"0\">"+
	  "<tr>"+
		"<td width=\"770\" height=\"62\" align=\"left\" valign=\"top\"><img src=\"../img/titulos/L1/img_L1_exer_2.png\" width=\"566\" height=\"112\" /></td>"+
		"</tr>"+
		"</table>"+
	  "<table width=\"770\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">"+
	  "<tr>"+
		"<td width=\"370\" height=\"339\" align=\"right\"><img src=\"../jpg/"+img+".png\" width=\"370\" height=\"304\" /></td>"+
		"<td width=\"54\" align=\"left\" valign=\"middle\">"+btnQst+"</td>"+
		"<td width=\"346\" align=\"center\">"+tblQst+
		"<table width=\"33\" height=\"57\" border=\"0\">"+
	  "<tr>"+
		"<td width=\"27\" height=\"53\" align=\"center\" valign=\"bottom\"><div id=\"divCalL1E2\"><input type=\"hidden\" id=\"inptscore\" name=\"inptscore\" value="+iptScore+"/></div></td>"+
		"</tr>"+
	"</table>"+
	"<table align=\"center\" background=\"../img/8.bg_refresh.png\" width=\"156\" border=\"0\">"+
	  "<tr>"+
		"<td width=\"150\" height=\"47\" align=\"center\" valign=\"middle\">"+
		"<div id=\"divBtn\">"+
		"<table width=\"126\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"38\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E2("+idQst+", 1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image22','','../img/8.btn_chulito2.png',1)\"><img src=\"../img/8.btn_chulito.png\" name=\"Image22\" width=\"25\" height=\"25\" border=\"0\" id=\"Image22\" /></a></td>"+
			"<td width=\"36\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E2("+idQst+", 2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image23','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image23\" width=\"25\" height=\"25\" border=\"0\" id=\"Image23\" /></a></td>"+
			"<td width=\"38\" align=\"center\" valign=\"middle\"><img src=\"../img/8.btn_ojo_desab.png\" name=\"Image24\" width=\"29\" height=\"25\" border=\"0\" id=\"Image24\" /></td>"+
		  "</tr>"+
		"</table></div></td>"+
	  "</tr>"+
	"</table>"+
		"</td>"+
	  "</tr>"+
	  "</table>";
	
	$('#contenido').html(html);
}
/* Exercise 2 */


/* Exercise 4 */
function verificarL1E4(idQst, idBtn)
{
	ansL1E4 = $("#selAnswerE4").val();
	vez = $("#vez").val();
	img = "";
	
	varscore = $("#inptscore").attr("value");
	
	doLMSSetValue("cmi.core.score.min", 0);
	doLMSSetValue("cmi.core.score.max", 100);
	
	if(ansL1E4 == "" && idBtn != 3)
		alert("You must select an answer.");
	else{
		if(idBtn == 1)
		{
			if(idQst == 1 && ansL1E4 == 'ansB'){
				img = "good";
				varscore = parseFloat(varscore) + 20;
			}
			else if (idQst == 2 && ansL1E4 == 'ansA'){
				img = "good";
				varscore = parseFloat(varscore) + 20;
			}
			else if (idQst == 3 && ansL1E4 == "ansA"){
				img = "good";
				varscore = parseFloat(varscore) + 20;
			}
			else if (idQst == 4 && ansL1E4 == 'ansA'){
				img = "good";
				varscore = parseFloat(varscore) + 20;
			}
			else if (idQst == 5 && ansL1E4 == 'ansB'){
				img = "good";
				varscore = parseFloat(varscore) + 20;
			}
			else
				img = "good_No";
			
			errorTxt3 = doLMSSetValue("cmi.core.score.raw", varscore);
		
			if(varscore >= "80"){
				errorTxt2 = doLMSSetValue("cmi.core.lesson_status", "passed");
			}
			else{
				errorTxt2 = doLMSSetValue("cmi.core.lesson_status", "failed");
			}
			doLMSCommit();	
				
			actualizardivCalL1E4(img, varscore);
		}
		else{
			if(idBtn == 3)
			{
				switch (idQst){
					case 1:
						value = "<select name=\"selAnswerE4\" class=\"bg_selec\" id=\"selAnswerE4\">"+
								  "<option value=\"ansA\">How are you?</option>"+
								  "<option value=\"ansB\" selected>How's it going?</option>"+
								"</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
					case 2:
						value = "<select name=\"selAnswerE4\" class=\"bg_selec\" id=\"selAnswerE4\">"+
								  "<option value=\"ansA\" selected>How are you?</option>"+
								  "<option value=\"ansB\">How's it going?</option>"+
								"</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
					case 3:
						value = "<select name=\"selAnswerE4\" class=\"bg_selec_peque\" id=\"selAnswerE4\">"+
								  "<option value=\"ansA\" selected>Bye</option>"+
								  "<option value=\"ansB\">Good-bye</option>"+
								"</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
					case 4:
						value = "<select name=\"selAnswerE4\" class=\"bg_selec_peque\" id=\"selAnswerE4\">"+
								  "<option value=\"ansA\" selected>Good-bye </option>"+
								  "<option value=\"ansBs\">See ya</option>"+
								"</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
					case 5:
						value = "<select name=\"selAnswerE4\" class=\"bg_selec_grande\" id=\"selAnswerE4\">"+
								  "<option value=\"ansA\">See ya. </option>"+
								  "<option value=\"ansB\" selected>Good-bye. See you on Monday</option>"+
								"</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
				}
				actualizarBtnL1E4(idQst, idBtn);
			}	
			else if(idBtn == 2){
				vez = parseInt(vez) + 1;
				if(vez >= 3)
					actualizarBtnL1E4(idQst, idBtn);
				switch (idQst){
					case 1:
						value = "<select name=\"selAnswerE4\" class=\"bg_selec\" id=\"selAnswerE4\">"+
								  "<option value=\"\"></option>"+
								  "<option value=\"ansA\">How are you?</option>"+
								  "<option value=\"ansB\">How's it going?</option>"+
								"</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
					case 2:
						value = "<select name=\"selAnswerE4\" class=\"bg_selec\" id=\"selAnswerE4\">"+
								  "<option value=\"\"></option>"+
								  "<option value=\"ansA\">How are you?</option>"+
								  "<option value=\"ansB\">How's it going?</option>"+
								"</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
					case 3:
						value = "<select name=\"selAnswerE4\" class=\"bg_selec_peque\" id=\"selAnswerE4\">"+
								  "<option value=\"\"></option>"+
								  "<option value=\"ansA\">Bye</option>"+
								  "<option value=\"ansB\">Good-bye</option>"+
								"</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
					case 4:
						value = "<select name=\"selAnswerE4\" class=\"bg_selec_peque\" id=\"selAnswerE4\">"+
								  "<option value=\"\"></option>"+
								  "<option value=\"ansA\">Good-bye </option>"+
								  "<option value=\"ansBs\">See ya</option>"+
								"</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
					case 5:
						value = "<select name=\"selAnswerE4\" class=\"bg_selec_grande\" id=\"selAnswerE4\">"+
								  "<option value=\"\"></option>"+
								  "<option value=\"ansA\">See ya. </option>"+
								  "<option value=\"ansB\">Good-bye. See you on Monday</option>"+
								"</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
				}
			}
			$('#divAnswerE4').html(value); 
			actualizardivCalL1E4(img, varscore);
		}
	}
}

function actualizarBtnL1E4(idQst, idBtn)
{
	if(idBtn == 3)
		btn = "<table width=\"150\" border=\"0\">"+
            "<tr>"+
              "<td height=\"31\" align=\"center\" valign=\"middle\"><img src=\"../img/8.btn_chulito_desab.png\" name=\"Image19\" width=\"25\" height=\"25\" border=\"0\" id=\"Image19\" /></td>"+
              "<td align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E4("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image20','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image20\" width=\"25\" height=\"25\" border=\"0\" id=\"Image20\" /></a></td>"+
              "<td align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E4("+idQst+",3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image21','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image21\" width=\"29\" height=\"25\" border=\"0\" id=\"Image21\" /></a></td>"+
            "</tr>"+
          "</table>";
	else
		btn = "<table width=\"150\" border=\"0\">"+
            "<tr>"+
              "<td height=\"31\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E4("+idQst+",1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image19','','../img/8.btn_chulito2.png',1)\"><img src=\"../img/8.btn_chulito.png\" name=\"Image19\" width=\"25\" height=\"25\" border=\"0\" id=\"Image19\" /></a></td>"+
              "<td align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E4("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image20','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image20\" width=\"25\" height=\"25\" border=\"0\" id=\"Image20\" /></a></td>"+
              "<td align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E4("+idQst+",3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image21','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image21\" width=\"29\" height=\"25\" border=\"0\" id=\"Image21\" /></a></td>"+
            "</tr>"+
          "</table>";
			
	$('#divBtn').html(btn);
}

function actualizardivCalL1E4(img, iptScore)
{
	//alert(idBtn);
	if(img != "")
		html = "<img src=\"../img/"+img+".png\" width=\"30\" height=\"30\" />"+
				"<input type=\"hidden\" id=\"inptscore\" name=\"inptscore\" value="+iptScore+" />";
	else
		html = "&nbsp;<input type=\"hidden\" id=\"inptscore\" name=\"inptscore\" value="+iptScore+" />";
	
	$('#divCalL1E4').html(html);
}

function cambiarDivL1Ex4(idQst)
{	
	iptScore = $("#inptscore").attr("value");
	
	if (idQst == 1)
	{	
		tblQst = "<table width=\"239\" height=\"52\" border=\"0\">"+
			"<tr>"+
			  "<td width=\"15\" height=\"48\" class=\"texto_1\"><strong>1.</strong></td>"+
			  "<td width=\"18\" class=\"texto_1\"><strong>A:</strong></td>"+
			  "<td width=\"20\" class=\"texto_1\">Hi.</td>"+
			  "<td width=\"168\" align=\"center\" valign=\"middle\" background=\"../img/bg_selec.png\"><div id=\"divAnswerE4\">"+
				"<select name=\"selAnswerE4\" class=\"bg_selec\" id=\"selAnswerE4\">"+
				  "<option value=\"\"></option>"+
				  "<option value=\"ansA\">How are you?</option>"+
				  "<option value=\"ansB\">How’s it going?</option>"+
				"</select>"+
				"<input type=\"hidden\" id=\"vez\" value=0 />"+
			  "</div></td>"+
			"</tr>"+
		  "</table>"+
		  "<table width=\"229\" border=\"0\">"+
			"<tr>"+
			  "<td width=\"14\">&nbsp;</td>"+
			  "<td width=\"18\" class=\"texto_3\"><strong>B:</strong></td>"+
			  "<td width=\"154\" class=\"texto_3\">Pretty good. Thanks.</td>"+
			"</tr>"+
		  "</table>";
		
		btnQst = "<table width=\"347\" cellspacing=\"0\" cellpadding=\"0\">"+
				  "<tr>"+
					"<td width=\"135\" height=\"53\" align=\"left\" valign=\"top\"><img src=\"../img/img_Conversation.png\" width=\"135\" height=\"37\" border=\"0\" /></td>"+
					"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL1Ex4(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image13','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_2.png\" name=\"Image13\" width=\"40\" height=\"53\" border=\"0\" id=\"Image13\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex4(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image14','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image14\" width=\"40\" height=\"53\" border=\"0\" id=\"Image14\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex4(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_1.png\" name=\"Image15\" width=\"40\" height=\"53\" border=\"0\" id=\"Image15\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex4(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_1.png\" name=\"Image16\" width=\"40\" height=\"53\" border=\"0\" id=\"Image16\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"38\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex4(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image17','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_1.png\" name=\"Image17\" width=\"40\" height=\"53\" border=\"0\" id=\"Image17\" /></a></td>"+
				  "</tr>"+
				"</table>";
	}
	else if (idQst == 2)
	{
		tblQst = "<table width=\"265\" height=\"52\" border=\"0\">"+
			"<tr>"+
			  "<td width=\"15\" height=\"48\" class=\"texto_1\"><strong>2.</strong></td>"+
			  "<td width=\"18\" class=\"texto_1\"><strong>A:</strong></td>"+
			  "<td width=\"44\" class=\"texto_1\">Hello.</td>"+
			  "<td width=\"179\" align=\"center\" valign=\"middle\" background=\"../img/bg_selec.png\"><div id=\"divAnswerE4\">"+
				"<select name=\"selAnswerE4\" class=\"bg_selec\" id=\"selAnswerE4\">"+
				  "<option value=\"\"></option>"+
				  "<option value=\"ansA\">How are you?</option>"+
				  "<option value=\"ansB\">How's it going?</option>"+
				"</select>"+
				"<input type=\"hidden\" id=\"vez\" value=0 />"+
			  "</div></td>"+
			"</tr>"+
		  "</table>"+
		  "<table width=\"306\" border=\"0\">"+
			"<tr>"+
			  "<td width=\"36\">&nbsp;</td>"+
			  "<td width=\"19\" class=\"texto_3\"><strong>B:</strong></td>"+
			  "<td width=\"237\" class=\"texto_3\">Fine, thank you. How about you?</td>"+
			"</tr>"+
		  "</table>";
		
		btnQst = "<table width=\"347\" cellspacing=\"0\" cellpadding=\"0\">"+
				  "<tr>"+
					"<td width=\"135\" height=\"53\" align=\"left\" valign=\"top\"><img src=\"../img/img_Conversation.png\" width=\"135\" height=\"37\" border=\"0\" /></td>"+
					"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL1Ex4(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image13','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image13\" width=\"40\" height=\"53\" border=\"0\" id=\"Image13\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex4(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image14','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_2.png\" name=\"Image14\" width=\"40\" height=\"53\" border=\"0\" id=\"Image14\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex4(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_1.png\" name=\"Image15\" width=\"40\" height=\"53\" border=\"0\" id=\"Image15\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex4(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_1.png\" name=\"Image16\" width=\"40\" height=\"53\" border=\"0\" id=\"Image16\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"38\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex4(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image17','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_1.png\" name=\"Image17\" width=\"40\" height=\"53\" border=\"0\" id=\"Image17\" /></a></td>"+
				  "</tr>"+
				"</table>";
	}
	else if (idQst == 3)
	{
		img = "art-1_1_2_c";
	
		tblQst = "<table width=\"185\" height=\"25\" border=\"0\">"+
			"<tr>"+
			  "<td width=\"23\" height=\"21\" align=\"center\" valign=\"middle\" class=\"texto_1\"><strong>3.</strong></td>"+
			  "<td width=\"25\" align=\"center\" valign=\"middle\" class=\"texto_1\"><strong>A:</strong></td>"+
			  "<td width=\"123\" align=\"left\" class=\"texto_1\">See ya later.</td>"+
			  "</tr>"+
		  "</table>"+
		  "<table width=\"185\" border=\"0\">"+
			"<tr>"+
			  "<td width=\"23\" height=\"47\">&nbsp;</td>"+
			  "<td width=\"25\" align=\"center\" valign=\"middle\" class=\"texto_3\"><strong>B:</strong></td>"+
			  "<td width=\"123\" align=\"center\" valign=\"middle\" background=\"../img/bg_selec_peque.png\"><div id=\"divAnswerE4\">"+
				"<select name=\"selAnswerE4\" class=\"bg_selec_peque\" id=\"selAnswerE4\">"+
				  "<option value=\"\"></option>"+
				  "<option value=\"ansA\">Bye</option>"+
				  "<option value=\"ansB\">Good-bye</option>"+
				"</select>"+
				"<input type=\"hidden\" id=\"vez\" value=0 />"+
			  "</div></td>"+
			"</tr>"+
		  "</table>";
	
		btnQst = "<table width=\"347\" cellspacing=\"0\" cellpadding=\"0\">"+
				  "<tr>"+
					"<td width=\"135\" height=\"53\" align=\"left\" valign=\"top\"><img src=\"../img/img_Conversation.png\" width=\"135\" height=\"37\" border=\"0\" /></td>"+
					"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL1Ex4(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image13','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image13\" width=\"40\" height=\"53\" border=\"0\" id=\"Image13\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex4(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image14','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image14\" width=\"40\" height=\"53\" border=\"0\" id=\"Image14\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex4(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_2.png\" name=\"Image15\" width=\"40\" height=\"53\" border=\"0\" id=\"Image15\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex4(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_1.png\" name=\"Image16\" width=\"40\" height=\"53\" border=\"0\" id=\"Image16\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"38\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex4(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image17','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_1.png\" name=\"Image17\" width=\"40\" height=\"53\" border=\"0\" id=\"Image17\" /></a></td>"+
				  "</tr>"+
				"</table>";
	}
	else if (idQst == 4)
	{
		tblQst = "<table width=\"259\" height=\"25\" border=\"0\">"+
			"<tr>"+
			  "<td width=\"23\" height=\"21\" align=\"center\" valign=\"middle\" class=\"texto_1\"><strong>4.</strong></td>"+
			  "<td width=\"27\" align=\"center\" valign=\"middle\" class=\"texto_1\"><strong>A:</strong></td>"+
			  "<td width=\"163\" align=\"left\" class=\"texto_1\">Good-bye, Mr. Johnson.</td>"+
			  "</tr>"+
		  "</table>"+
		  "<table width=\"259\" border=\"0\">"+
			"<tr>"+
			  "<td width=\"26\" height=\"47\">&nbsp;</td>"+
			  "<td width=\"31\" align=\"center\" valign=\"middle\" class=\"texto_3\"><strong>B:</strong></td>"+
			  "<td width=\"126\" align=\"center\" valign=\"middle\" background=\"../img/bg_selec_peque.png\"><div id=\"divAnswerE4\">"+
				"<select name=\"selAnswerE4\" class=\"bg_selec_peque\" id=\"selAnswerE4\">"+
				  "<option value=\"\"></option>"+
				  "<option value=\"ansA\">Good-bye </option>"+
				  "<option value=\"ansB\">See ya</option>"+
				"</select>"+
				"<input type=\"hidden\" id=\"vez\" value=0 />"+
			  "</div></td>"+
			  "<td width=\"58\" align=\"center\" valign=\"middle\"><span class=\"texto_3\">,Charles</span></td>"+
			"</tr>"+
		  "</table>";
		
		btnQst = "<table width=\"347\" cellspacing=\"0\" cellpadding=\"0\">"+
				  "<tr>"+
					"<td width=\"135\" height=\"53\" align=\"left\" valign=\"top\"><img src=\"../img/img_Conversation.png\" width=\"135\" height=\"37\" border=\"0\" /></td>"+
					"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL1Ex4(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image13','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image13\" width=\"40\" height=\"53\" border=\"0\" id=\"Image13\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex4(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image14','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image14\" width=\"40\" height=\"53\" border=\"0\" id=\"Image14\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex4(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_1.png\" name=\"Image15\" width=\"40\" height=\"53\" border=\"0\" id=\"Image15\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex4(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_2.png\" name=\"Image16\" width=\"40\" height=\"53\" border=\"0\" id=\"Image16\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"38\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex4(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image17','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_1.png\" name=\"Image17\" width=\"40\" height=\"53\" border=\"0\" id=\"Image17\" /></a></td>"+
				  "</tr>"+
				"</table>";
	}
	else if (idQst == 5)
	{	
		tblQst = "<table width=\"349\" height=\"50\" border=\"0\">"+
			"<tr>"+
			  "<td width=\"27\" height=\"46\" align=\"center\" valign=\"middle\" class=\"texto_1\"><strong>5.</strong></td>"+
			  "<td width=\"32\" align=\"center\" valign=\"middle\" class=\"texto_1\"><strong>A:</strong></td>"+
			  "<td width=\"276\" align=\"center\" valign=\"middle\" background=\"../img/bg_selec_grande.png\" class=\"texto_1\"><div id=\"divAnswerE4\">"+
				"<select name=\"selAnswerE4\" class=\"bg_selec_grande\" id=\"v\">"+
				  "<option value=\"\"></option>"+
				  "<option value=\"ansA\">See ya. </option>"+
				  "<option value=\"ansB\">Good-bye. See you on Monday</option>"+
				"</select>"+
				"<input type=\"hidden\" id=\"vez\" value=0 />"+
			  "</div></td>"+
			  "</tr>"+
		  "</table>"+
		  "<table width=\"349\" border=\"0\">"+
			"<tr>"+
			  "<td width=\"29\" height=\"21\">&nbsp;</td>"+
			  "<td width=\"30\" align=\"center\" valign=\"middle\" class=\"texto_3\"><strong>B:</strong></td>"+
			  "<td width=\"276\" align=\"left\" valign=\"middle\" class=\"texto_3\">   &nbsp; &nbsp;Bye-bye. See you.</td>"+
			  "</tr>"+
		  "</table>";
		
		btnQst = "<table width=\"347\" cellspacing=\"0\" cellpadding=\"0\">"+
				  "<tr>"+
					"<td width=\"135\" height=\"53\" align=\"left\" valign=\"top\"><img src=\"../img/img_Conversation.png\" width=\"135\" height=\"37\" border=\"0\" /></td>"+
					"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL1Ex4(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image13','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image13\" width=\"40\" height=\"53\" border=\"0\" id=\"Image13\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex4(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image14','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image14\" width=\"40\" height=\"53\" border=\"0\" id=\"Image14\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex4(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_1.png\" name=\"Image15\" width=\"40\" height=\"53\" border=\"0\" id=\"Image15\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex4(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_1.png\" name=\"Image16\" width=\"40\" height=\"53\" border=\"0\" id=\"Image16\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"38\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex4(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image17','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_2.png\" name=\"Image17\" width=\"40\" height=\"53\" border=\"0\" id=\"Image17\" /></a></td>"+
				  "</tr>"+
				"</table>";
				"</table>";
	}
	html = "<table align=\"center\" width=\"772\" border=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"770\" height=\"391\" align=\"center\" valign=\"top\"><table width=\"770\" height=\"86\" border=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"768\" height=\"86\" align=\"left\">"+
				"<table width=\"766\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"741\" height=\"65\"><img src=\"../img/titulos/L1/img_L1_exer_4.png\" width=\"322\" height=\"117\" /></td>"+
		  "</tr>"+
		"</table>"+
			"<table width=\"769\" border=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"164\" height=\"114\" align=\"center\" valign=\"bottom\">&nbsp;</td>"+
				"<td width=\"443\" align=\"center\" valign=\"middle\">"+btnQst+
				"</td>"+
				"<td width=\"156\" align=\"center\" valign=\"bottom\">&nbsp;</td>"+
				"</tr>"+
			  "</table></td>"+
		  "</tr>"+
		"</table>"+tblQst+
		  "<table width=\"75\" border=\"0\">"+
			"<tr>"+
			  "<td width=\"69\" align=\"center\"><div id=\"divCalL1E4\"><input type=\"hidden\" id=\"inptscore\" name=\"inptscore\" value="+iptScore+"/>&nbsp;</div></td>"+
			  "</tr>"+
		  "</table>"+
		  "<table width=\"200\" border=\"0\">"+
			"<tr>"+
			  "<td width=\"16\" height=\"50\">&nbsp;</td>"+
			  "<td width=\"151\" background=\"../img/8.bg_refresh.png\">"+
			  "<div id=\"divBtn\"><table width=\"150\" border=\"0\">"+
				"<tr>"+
				  "<td height=\"31\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E4("+idQst+",1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image19','','../img/8.btn_chulito2.png',1)\"><img src=\"../img/8.btn_chulito.png\" name=\"Image19\" width=\"25\" height=\"25\" border=\"0\" id=\"Image19\" /></a></td>"+
				  "<td align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E4("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image20','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image20\" width=\"25\" height=\"25\" border=\"0\" id=\"Image20\" /></a></td>"+
				  "<td align=\"center\" valign=\"middle\"><img src=\"../img/8.btn_ojo_desab.png\" name=\"Image21\" width=\"29\" height=\"25\" border=\"0\" id=\"Image21\" /></td>"+
				"</tr>"+
			  "</table></div></td>"+
			  "<td width=\"16\">&nbsp;</td>"+
			"</tr>"+
		  "</table></td>"+
		"</tr>"+
	"</table>";
	
	$('#contenido').html(html);
}
/* Exercise 4 */


/* Exercise 5 */
function cambiarDivL1Ex5(idQst)
{	
	if (idQst == 1)
	{
		swf = "<object id=\"FlashID7\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\">"+
                  "<param name=\"movie\" value=\"../swf/L1/L1_Exe_5/btn_L1_exer_5_a.swf\" />"+
                  "<param name=\"quality\" value=\"high\" />"+
                  "<param name=\"wmode\" value=\"transparent\" />"+
                  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
                  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
                  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
                  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
                  "<!--[if !IE]>-->"+
                  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_Exe_5/btn_L1_exer_5_a.swf\" width=\"45\" height=\"40\">"+
                    "<!--<![endif]-->"+
                    "<param name=\"quality\" value=\"high\" />"+
                    "<param name=\"wmode\" value=\"transparent\" />"+
                    "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
                    "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
                    "<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
                    "<div>"+
                      "<h4>El contenido de esta página requiere una versión más reciente de Adobe Flash Player.</h4>"+
                      "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
                    "</div>"+
                    "<!--[if !IE]>-->"+
                  "</object>"+
                  "<!--<![endif]-->"+
              "</object>";
	}
	else if (idQst == 2)
	{
		swf = "<object id=\"FlashID8\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\">"+
                  "<param name=\"movie\" value=\"../swf/L1/L1_Exe_5/btn_L1_exer_5_b.swf\" />"+
                  "<param name=\"quality\" value=\"high\" />"+
                  "<param name=\"wmode\" value=\"transparent\" />"+
                  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
                  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
                  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
                  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
                  "<!--[if !IE]>-->"+
                  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_Exe_5/btn_L1_exer_5_b.swf\" width=\"45\" height=\"40\">"+
                    "<!--<![endif]-->"+
                    "<param name=\"quality\" value=\"high\" />"+
                    "<param name=\"wmode\" value=\"transparent\" />"+
                    "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
                    "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
                    "<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
                    "<div>"+
                      "<h4>El contenido de esta página requiere una versión más reciente de Adobe Flash Player.</h4>"+
                      "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
                    "</div>"+
                    "<!--[if !IE]>-->"+
                  "</object>"+
                  "<!--<![endif]-->"+
              "</object>";
	}
	else if (idQst == 3)
	{
		swf = "<object id=\"FlashID9\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\">"+
                  "<param name=\"movie\" value=\"../swf/L1/L1_Exe_5/btn_L1_exer_5_c.swf\" />"+
                  "<param name=\"quality\" value=\"high\" />"+
                  "<param name=\"wmode\" value=\"transparent\" />"+
                  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
                  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
                  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
                  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
                  "<!--[if !IE]>-->"+
                  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_Exe_5/btn_L1_exer_5_c.swf\" width=\"45\" height=\"40\">"+
                    "<!--<![endif]-->"+
                    "<param name=\"quality\" value=\"high\" />"+
                    "<param name=\"wmode\" value=\"transparent\" />"+
                    "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
                    "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
                    "<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
                    "<div>"+
                      "<h4>El contenido de esta página requiere una versión más reciente de Adobe Flash Player.</h4>"+
                      "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
                    "</div>"+
                    "<!--[if !IE]>-->"+
                  "</object>"+
                  "<!--<![endif]-->"+
              "</object>";
	}
	else if (idQst == 4)
	{
		swf = "<object id=\"FlashID10\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\">"+
                  "<param name=\"movie\" value=\"../swf/L1/L1_Exe_5/btn_L1_exer_5_d.swf\" />"+
                  "<param name=\"quality\" value=\"high\" />"+
                  "<param name=\"wmode\" value=\"transparent\" />"+
                  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
                  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
                  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
                  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
                  "<!--[if !IE]>-->"+
                  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_Exe_5/btn_L1_exer_5_d.swf\" width=\"45\" height=\"40\">"+
                    "<!--<![endif]-->"+
                    "<param name=\"quality\" value=\"high\" />"+
                    "<param name=\"wmode\" value=\"transparent\" />"+
                    "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
                    "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
                    "<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
                    "<div>"+
                      "<h4>El contenido de esta página requiere una versión más reciente de Adobe Flash Player.</h4>"+
                      "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
                    "</div>"+
                    "<!--[if !IE]>-->"+
                  "</object>"+
                  "<!--<![endif]-->"+
              "</object>";
	}
	else if (idQst == 5)
	{
		swf = "<object id=\"FlashID11\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\">"+
                  "<param name=\"movie\" value=\"../swf/L1/L1_Exe_5/btn_L1_exer_5_e.swf\" />"+
                  "<param name=\"quality\" value=\"high\" />"+
                  "<param name=\"wmode\" value=\"transparent\" />"+
                  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
                  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
                  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
                  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
                  "<!--[if !IE]>-->"+
                  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_Exe_5/btn_L1_exer_5_e.swf\" width=\"45\" height=\"40\">"+
                    "<!--<![endif]-->"+
                    "<param name=\"quality\" value=\"high\" />"+
                    "<param name=\"wmode\" value=\"transparent\" />"+
                    "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
                    "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
                    "<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
                    "<div>"+
                      "<h4>El contenido de esta página requiere una versión más reciente de Adobe Flash Player.</h4>"+
                      "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
                    "</div>"+
                    "<!--[if !IE]>-->"+
                  "</object>"+
                  "<!--<![endif]-->"+
              "</object>";
	}
	else if (idQst == 6)
	{
		swf = "<object id=\"FlashID12\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\">"+
                  "<param name=\"movie\" value=\"../swf/L1/L1_Exe_5/btn_L1_exer_5_f.swf\" />"+
                  "<param name=\"quality\" value=\"high\" />"+
                  "<param name=\"wmode\" value=\"transparent\" />"+
                  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
                  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
                  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
                  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
                  "<!--[if !IE]>-->"+
                  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_Exe_5/btn_L1_exer_5_f.swf\" width=\"45\" height=\"40\">"+
                    "<!--<![endif]-->"+
                    "<param name=\"quality\" value=\"high\" />"+
                    "<param name=\"wmode\" value=\"transparent\" />"+
                    "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
                    "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
                    "<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
                    "<div>"+
                      "<h4>El contenido de esta página requiere una versión más reciente de Adobe Flash Player.</h4>"+
                      "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
                    "</div>"+
                    "<!--[if !IE]>-->"+
                  "</object>"+
                  "<!--<![endif]-->"+
              "</object>";
	}		
	$('#divSwfL1Ex5').html(swf);
	cambiarDivTxtL1Ex5(idQst);
}

function cambiarDivTxtL1Ex5(idQst)
{
	if(idQst == 1)
	{
		tblTxt = "<table width=\"487\" background=\"../img/bg_color2.png\">"+
			"<tr>"+
			  "<td width=\"479\" height=\"147\"><table width=\"468\" border=\"0\">"+
				"<tr class=\"texto_1\">"+
					"<td width=\"88\" align=\"right\" valign=\"middle\">1.</td>"+
					"<td width=\"25\" align=\"center\" valign=\"middle\"> A:</td>"+
					"<td width=\"341\" align=\"left\" valign=\"middle\">  How do you do? My name's John Pitt.</td>"+
				  "</tr>"+
				  "<tr>"+
					"<td>&nbsp;</td>"+
					"<td align=\"center\" valign=\"middle\" class=\"texto_4\">B:</td>"+
					"<td align=\"left\" valign=\"middle\" class=\"texto_4\">How do you do? I'm Helen Smith</td>"+
				  "</tr>"+
				  "</table></td>"+
			"</tr>"+
		  "</table>";
	}
	else if(idQst == 2)
	{
		tblTxt = "<table width=\"487\" background=\"../img/bg_color2.png\">"+
			"<tr>"+
			  "<td width=\"479\" height=\"147\"><table width=\"468\" border=\"0\">"+
				"<tr class=\"texto_1\">"+
					"<td width=\"88\" align=\"right\" valign=\"middle\">2.</td>"+
					"<td width=\"25\" align=\"center\" valign=\"middle\"> A:</td>"+
					"<td width=\"341\" align=\"left\" valign=\"middle\">  How are you, Mr. Johnson?</td>"+
				  "</tr>"+
				  "<tr>"+
					"<td>&nbsp;</td>"+
					"<td align=\"center\" valign=\"middle\" class=\"texto_4\">B:</td>"+
					"<td align=\"left\" valign=\"middle\" class=\"texto_4\">Pretty good. Thank you, Mrs. Taylor.</td>"+
				  "</tr>"+
				  "</table></td>"+
			"</tr>"+
		  "</table>";
	}
	else if(idQst == 3)
	{
		tblTxt = "<table width=\"487\" background=\"../img/bg_color2.png\">"+
			"<tr>"+
			  "<td width=\"479\" height=\"147\"><table width=\"468\" border=\"0\">"+
				"<tr class=\"texto_1\">"+
					"<td width=\"88\" align=\"right\" valign=\"middle\">3.</td>"+
					"<td width=\"25\" align=\"center\" valign=\"middle\"> A:</td>"+
					"<td width=\"341\" align=\"left\" valign=\"middle\">  Hi Bob! How're you doing?</td>"+
				  "</tr>"+
				  "<tr>"+
					"<td>&nbsp;</td>"+
					"<td align=\"center\" valign=\"middle\" class=\"texto_4\">B:</td>"+
					"<td align=\"left\" valign=\"middle\" class=\"texto_4\">Fine, thanks.</td>"+
				  "</tr>"+
				  "</table></td>"+
			"</tr>"+
		  "</table>";
	}
	else if(idQst == 4)
	{
		tblTxt = "<table width=\"487\" background=\"../img/bg_color2.png\">"+
			"<tr>"+
			  "<td width=\"479\" height=\"147\"><table width=\"468\" border=\"0\">"+
				"<tr class=\"texto_1\">"+
					"<td width=\"88\" align=\"right\" valign=\"middle\">4.</td>"+
					"<td width=\"25\" align=\"center\" valign=\"middle\"> A:</td>"+
					"<td width=\"341\" align=\"left\" valign=\"middle\">  Hey! How's it going?</td>"+
				  "</tr>"+
				  "<tr>"+
					"<td>&nbsp;</td>"+
					"<td align=\"center\" valign=\"middle\" class=\"texto_4\">B:</td>"+
					"<td align=\"left\" valign=\"middle\" class=\"texto_4\"> Good, how about you?</td>"+
				  "</tr>"+
				  "</table></td>"+
			"</tr>"+
		  "</table>";
	}
	else if(idQst == 5)
	{
		tblTxt = "<table width=\"487\" background=\"../img/bg_color2.png\">"+
			"<tr>"+
			  "<td width=\"479\" height=\"147\"><table width=\"468\" border=\"0\">"+
				"<tr class=\"texto_1\">"+
					"<td width=\"32\" align=\"right\" valign=\"middle\">5.</td>"+
					"<td width=\"19\" align=\"center\" valign=\"middle\"> A:</td>"+
					"<td width=\"403\" align=\"left\" valign=\"middle\"> Mr. Johnson, I'd like you to meet my best friend, Susan.</td>"+
				  "</tr>"+
				  "<tr>"+
					"<td>&nbsp;</td>"+
					"<td align=\"center\" valign=\"middle\" class=\"texto_4\">B:</td>"+
					"<td align=\"left\" valign=\"middle\" class=\"texto_4\">It's a pleasure to meet you, Mr. Johnson.</td>"+
				  "</tr>"+
				  "<tr>"+
					"<td>&nbsp;</td>"+
					"<td align=\"center\" valign=\"middle\" class=\"texto_1\">C:</td>"+
					"<td align=\"left\" valign=\"middle\" class=\"texto_1\">It's a pleasure to meet you, too, Susan.</td>"+
				  "</tr>"+
			  "</table></td>"+
			"</tr>"+
		  "</table>";
	}
	else if(idQst == 6)
	{
		tblTxt = "<table width=\"373\" background=\"../img/bg_color1.png\" border=\"0\">"+
			"<tr>"+
			  "<td width=\"367\" height=\"128\"><table width=\"353\" border=\"0\">"+
				"<tr class=\"texto_1\">"+
					"<td width=\"56\" align=\"right\" valign=\"middle\">6.</td>"+
					"<td width=\"23\" align=\"center\" valign=\"middle\"> A:</td>"+
					"<td width=\"260\" align=\"left\" valign=\"middle\">  Jane, this is my classmate, Tim.</td>"+
				  "</tr>"+
				  "<tr>"+
					"<td height=\"20\">&nbsp;</td>"+
					"<td align=\"center\" valign=\"middle\" class=\"texto_4\">B:</td>"+
					"<td align=\"left\" valign=\"middle\" class=\"texto_4\">Nice to meet you, Tim.</td>"+
				  "</tr>"+
				  "<tr>"+
					"<td height=\"21\">&nbsp;</td>"+
					"<td align=\"center\" valign=\"middle\" class=\"texto_1\">C:</td>"+
					"<td align=\"left\" valign=\"middle\" class=\"texto_1\">Nice to meet you, too, Jane.</td>"+
				  "</tr>"+
			  "</table></td>"+
			"</tr>"+
		  "</table>";
	}
	$('#divTxtL1Ex5').html(tblTxt);
	cambiarDivBtnL1Ex5(idQst);
}

function cambiarDivBtnL1Ex5(idQst)
{
	if(idQst == 1)
	{
		tblBtn = "<table width=\"398\" border=\"0\">"+
			"<tr>"+
			  "<td width=\"392\" height=\"50\"><table width=\"363\" cellspacing=\"0\" cellpadding=\"0\">"+
				"<tr>"+
				  "<td width=\"135\" height=\"53\" align=\"left\" valign=\"top\"><img src=\"../img/img_Conversation.png\" width=\"135\" height=\"37\" border=\"0\" /></td>"+
				  "<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL1Ex5(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image13','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_2.png\" name=\"Image13\" width=\"40\" height=\"53\" border=\"0\" id=\"Image13\" /></a></td>"+
				  "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
				  "<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex5(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image14','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image14\" width=\"40\" height=\"53\" border=\"0\" id=\"Image14\" /></a></td>"+
				  "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
				  "<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex5(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_1.png\" name=\"Image15\" width=\"40\" height=\"53\" border=\"0\" id=\"Image15\" /></a></td>"+
				  "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
				  "<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex5(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_1.png\" name=\"Image16\" width=\"40\" height=\"53\" border=\"0\" id=\"Image16\" /></a></td>"+
				  "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
				  "<td width=\"27\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex5(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image23','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_1.png\" name=\"Image23\" width=\"40\" height=\"53\" border=\"0\" id=\"Image23\" /></a></td>"+
				  "<td width=\"27\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
				  "<td width=\"54\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex5(6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image24','','../img/btn_6b_2.png',1)\"><img src=\"../img/btn_6b_1.png\" name=\"Image24\" width=\"40\" height=\"53\" border=\"0\" id=\"Image24\" /></a></td>"+
				  "</tr>"+
			  "</table></td>"+
			  "</tr>"+
		  "</table>";
	}
	else if(idQst == 2)
	{
		tblBtn = "<table width=\"398\" border=\"0\">"+
			"<tr>"+
			  "<td width=\"392\" height=\"50\"><table width=\"363\" cellspacing=\"0\" cellpadding=\"0\">"+
				"<tr>"+
				  "<td width=\"135\" height=\"53\" align=\"left\" valign=\"top\"><img src=\"../img/img_Conversation.png\" width=\"135\" height=\"37\" border=\"0\" /></td>"+
				  "<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL1Ex5(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image13','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image13\" width=\"40\" height=\"53\" border=\"0\" id=\"Image13\" /></a></td>"+
				  "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
				  "<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex5(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image14','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_2.png\" name=\"Image14\" width=\"40\" height=\"53\" border=\"0\" id=\"Image14\" /></a></td>"+
				  "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
				  "<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex5(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_1.png\" name=\"Image15\" width=\"40\" height=\"53\" border=\"0\" id=\"Image15\" /></a></td>"+
				  "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
				  "<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex5(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_1.png\" name=\"Image16\" width=\"40\" height=\"53\" border=\"0\" id=\"Image16\" /></a></td>"+
				  "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
				  "<td width=\"27\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex5(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image23','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_1.png\" name=\"Image23\" width=\"40\" height=\"53\" border=\"0\" id=\"Image23\" /></a></td>"+
				  "<td width=\"27\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
				  "<td width=\"54\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex5(6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image24','','../img/btn_6b_2.png',1)\"><img src=\"../img/btn_6b_1.png\" name=\"Image24\" width=\"40\" height=\"53\" border=\"0\" id=\"Image24\" /></a></td>"+
				  "</tr>"+
			  "</table></td>"+
			  "</tr>"+
		  "</table>";
	}
	else if(idQst == 3)
	{
		tblBtn = "<table width=\"398\" border=\"0\">"+
			"<tr>"+
			  "<td width=\"392\" height=\"50\"><table width=\"363\" cellspacing=\"0\" cellpadding=\"0\">"+
				"<tr>"+
				  "<td width=\"135\" height=\"53\" align=\"left\" valign=\"top\"><img src=\"../img/img_Conversation.png\" width=\"135\" height=\"37\" border=\"0\" /></td>"+
				  "<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL1Ex5(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image13','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image13\" width=\"40\" height=\"53\" border=\"0\" id=\"Image13\" /></a></td>"+
				  "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
				  "<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex5(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image14','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image14\" width=\"40\" height=\"53\" border=\"0\" id=\"Image14\" /></a></td>"+
				  "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
				  "<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex5(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_2.png\" name=\"Image15\" width=\"40\" height=\"53\" border=\"0\" id=\"Image15\" /></a></td>"+
				  "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
				  "<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex5(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_1.png\" name=\"Image16\" width=\"40\" height=\"53\" border=\"0\" id=\"Image16\" /></a></td>"+
				  "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
				  "<td width=\"27\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex5(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image23','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_1.png\" name=\"Image23\" width=\"40\" height=\"53\" border=\"0\" id=\"Image23\" /></a></td>"+
				  "<td width=\"27\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
				  "<td width=\"54\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex5(6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image24','','../img/btn_6b_2.png',1)\"><img src=\"../img/btn_6b_1.png\" name=\"Image24\" width=\"40\" height=\"53\" border=\"0\" id=\"Image24\" /></a></td>"+
				  "</tr>"+
			  "</table></td>"+
			  "</tr>"+
		  "</table>";
	}
	else if(idQst == 4)
	{
		tblBtn = "<table width=\"398\" border=\"0\">"+
			"<tr>"+
			  "<td width=\"392\" height=\"50\"><table width=\"363\" cellspacing=\"0\" cellpadding=\"0\">"+
				"<tr>"+
				  "<td width=\"135\" height=\"53\" align=\"left\" valign=\"top\"><img src=\"../img/img_Conversation.png\" width=\"135\" height=\"37\" border=\"0\" /></td>"+
				  "<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL1Ex5(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image13','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image13\" width=\"40\" height=\"53\" border=\"0\" id=\"Image13\" /></a></td>"+
				  "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
				  "<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex5(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image14','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image14\" width=\"40\" height=\"53\" border=\"0\" id=\"Image14\" /></a></td>"+
				  "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
				  "<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex5(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_1.png\" name=\"Image15\" width=\"40\" height=\"53\" border=\"0\" id=\"Image15\" /></a></td>"+
				  "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
				  "<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex5(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_2.png\" name=\"Image16\" width=\"40\" height=\"53\" border=\"0\" id=\"Image16\" /></a></td>"+
				  "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
				  "<td width=\"27\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex5(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image23','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_1.png\" name=\"Image23\" width=\"40\" height=\"53\" border=\"0\" id=\"Image23\" /></a></td>"+
				  "<td width=\"27\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
				  "<td width=\"54\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex5(6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image24','','../img/btn_6b_2.png',1)\"><img src=\"../img/btn_6b_1.png\" name=\"Image24\" width=\"40\" height=\"53\" border=\"0\" id=\"Image24\" /></a></td>"+
				  "</tr>"+
			  "</table></td>"+
			  "</tr>"+
		  "</table>";
	}
	else if(idQst == 5)
	{
		tblBtn = "<table width=\"398\" border=\"0\">"+
			"<tr>"+
			  "<td width=\"392\" height=\"50\"><table width=\"363\" cellspacing=\"0\" cellpadding=\"0\">"+
				"<tr>"+
				  "<td width=\"135\" height=\"53\" align=\"left\" valign=\"top\"><img src=\"../img/img_Conversation.png\" width=\"135\" height=\"37\" border=\"0\" /></td>"+
				  "<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL1Ex5(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image13','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image13\" width=\"40\" height=\"53\" border=\"0\" id=\"Image13\" /></a></td>"+
				  "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
				  "<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex5(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image14','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image14\" width=\"40\" height=\"53\" border=\"0\" id=\"Image14\" /></a></td>"+
				  "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
				  "<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex5(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_1.png\" name=\"Image15\" width=\"40\" height=\"53\" border=\"0\" id=\"Image15\" /></a></td>"+
				  "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
				  "<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex5(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_1.png\" name=\"Image16\" width=\"40\" height=\"53\" border=\"0\" id=\"Image16\" /></a></td>"+
				  "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
				  "<td width=\"27\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex5(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image23','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_2.png\" name=\"Image23\" width=\"40\" height=\"53\" border=\"0\" id=\"Image23\" /></a></td>"+
				  "<td width=\"27\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
				  "<td width=\"54\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex5(6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image24','','../img/btn_6b_2.png',1)\"><img src=\"../img/btn_6b_1.png\" name=\"Image24\" width=\"40\" height=\"53\" border=\"0\" id=\"Image24\" /></a></td>"+
				  "</tr>"+
			  "</table></td>"+
			  "</tr>"+
		  "</table>";
	}
	else if(idQst == 6)
	{
		tblBtn = "<table width=\"398\" border=\"0\">"+
			"<tr>"+
			  "<td width=\"392\" height=\"50\"><table width=\"363\" cellspacing=\"0\" cellpadding=\"0\">"+
				"<tr>"+
				  "<td width=\"135\" height=\"53\" align=\"left\" valign=\"top\"><img src=\"../img/img_Conversation.png\" width=\"135\" height=\"37\" border=\"0\" /></td>"+
				  "<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL1Ex5(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image13','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image13\" width=\"40\" height=\"53\" border=\"0\" id=\"Image13\" /></a></td>"+
				  "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
				  "<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex5(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image14','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image14\" width=\"40\" height=\"53\" border=\"0\" id=\"Image14\" /></a></td>"+
				  "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
				  "<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex5(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_1.png\" name=\"Image15\" width=\"40\" height=\"53\" border=\"0\" id=\"Image15\" /></a></td>"+
				  "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
				  "<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex5(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_1.png\" name=\"Image16\" width=\"40\" height=\"53\" border=\"0\" id=\"Image16\" /></a></td>"+
				  "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
				  "<td width=\"27\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex5(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image23','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_1.png\" name=\"Image23\" width=\"40\" height=\"53\" border=\"0\" id=\"Image23\" /></a></td>"+
				  "<td width=\"27\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
				  "<td width=\"54\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex5(6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image24','','../img/btn_6b_2.png',1)\"><img src=\"../img/btn_6b_2.png\" name=\"Image24\" width=\"40\" height=\"53\" border=\"0\" id=\"Image24\" /></a></td>"+
				  "</tr>"+
			  "</table></td>"+
			  "</tr>"+
		  "</table>";
	}
	$('#divBtnL1Ex5').html(tblBtn);
}
/* Exercise 5 */


/* Exercise 10 */
function mostrarAnsL1Ex10(idQst, idAns)
{
	if(idQst == 1)
	{
		if(idAns == 'S'){
			ipt = "iptAns1S";
			ipt2 = "iptAns1D";
			div = "divAns1S";
			div2 = "divAns1D";
			img = "img_L1_same";
			img2 = "img_L1_diferent";
			idImg = "Image37";
			idImg2 = "Image38";
		}
		else{
			ipt = "iptAns1D";
			ipt2 = "iptAns1S";
			div = "divAns1D";
			div2 = "divAns1S";
			img = "img_L1_diferent";
			img2 = "img_L1_same";
			idImg = "Image38";
			idImg2 = "Image37";
		}
	}
	else if(idQst == 2)
	{
		if(idAns == 'S'){
			ipt = "iptAns2S";
			ipt2 = "iptAns2D";
			div = "divAns2S";
			div2 = "divAns2D";
			img = "img_L1_same";
			img2 = "img_L1_diferent";
			idImg = "Image40";
			idImg2 = "Image36";
		}
		else{
			ipt = "iptAns2D";
			ipt2 = "iptAns2S";
			div = "divAns2D";
			div2 = "divAns2S";
			img = "img_L1_diferent";
			img2 = "img_L1_same";
			idImg = "Image36";
			idImg2 = "Image40";
		}
	}
	else if(idQst == 3)
	{
		if(idAns == 'S'){
			ipt = "iptAns3S";
			ipt2 = "iptAns3D";
			div = "divAns3S";
			div2 = "divAns3D";
			img = "img_L1_same";
			img2 = "img_L1_diferent";
			idImg = "Image41";
			idImg2 = "Image39";
		}
		else{
			ipt = "iptAns3D";
			ipt2 = "iptAns3S";
			div = "divAns3D";
			div2 = "divAns3S";
			img = "img_L1_diferent";
			img2 = "img_L1_same";
			idImg = "Image39";
			idImg2 = "Image41";
		}
	}
	else if(idQst == 4)
	{
		if(idAns == 'S'){
			ipt = "iptAns4S";
			ipt2 = "iptAns4D";
			div = "divAns4S";
			div2 = "divAns4D";
			img = "img_L1_same";
			img2 = "img_L1_diferent";
			idImg = "Image32";
			idImg2 = "Image33";
		}
		else{
			ipt = "iptAns4D";
			ipt2 = "iptAns4S";
			div = "divAns4D";
			div2 = "divAns4S";
			img = "img_L1_diferent";
			img2 = "img_L1_same";
			idImg = "Image33";
			idImg2 = "Image32";
		}
	}
	else if(idQst == 5)
	{
		if(idAns == 'S'){
			ipt = "iptAns5S";
			ipt2 = "iptAns5D";
			div = "divAns5S";
			div2 = "divAns5D";
			img = "img_L1_same";
			img2 = "img_L1_diferent";
			idImg = "Image42";
			idImg2 = "Image34";
		}
		else{
			ipt = "iptAns5D";
			ipt2 = "iptAns5S";
			div = "divAns5D";
			div2 = "divAns5S";
			img = "img_L1_diferent";
			img2 = "img_L1_same";
			idImg = "Image34";
			idImg2 = "Image42";
		}
	}
	else if(idQst == 6)
	{
		if(idAns == 'S'){
			ipt = "iptAns6S";
			ipt2 = "iptAns6D";
			div = "divAns6S";
			div2 = "divAns6D";
			img = "img_L1_same";
			img2 = "img_L1_diferent";
			idImg = "Image43";
			idImg2 = "Image35";
		}
		else{
			ipt = "iptAns6D";
			ipt2 = "iptAns6S";
			div = "divAns6D";
			div2 = "divAns6S";
			img = "img_L1_diferent";
			img2 = "img_L1_same";
			idImg = "Image35";
			idImg2 = "Image43";
		}
	}
	
	html = "<a href=\"#\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image32','','../img/img_L1_same.png',1)\">"+
				"<img src=\"../img/"+img+".png\" name=\"Image32\" width=\"106\" height=\"36\" border=\"0\" id=\"Image32\" />"+
			"</a>"+
			"<input type=\"hidden\" id=\""+ipt+"\" value=1 />";
	$('#'+div).html(html);
	cleanAnsL1E10(idQst, idAns, div2, ipt2, img2, idImg2);
}

function cleanAnsL1E10(idQst, idAns, div, ipt, img, idImg)
{
	if(idAns == 'S')
		idAns = 'D';
	else
		idAns = 'S';
	html = "<a href=\"#\" onclick=\"mostrarAnsL1Ex10("+idQst+",'"+idAns+"')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('"+idImg+"','','../img/"+img+".png',1)\">"+
				"<img src=\"../img/"+img+"2.png\" name=\""+idImg+"\" width=\"106\" height=\"36\" border=\"0\" id=\""+idImg+"\" />"+
			"</a>"+
			"<input type=\"hidden\" id=\""+ipt+"\" value=0 />";
	$('#'+div).html(html);
}

function verificarL1E10(idBtn)
{
	vez = $("#vez").val();
	
	varscore = $("#inptscore").attr("value");
	
	doLMSSetValue("cmi.core.score.min", 0);
	doLMSSetValue("cmi.core.score.max", 100);
	
	ans_1S = $("#iptAns1S").val();
	ans_1D = $("#iptAns1D").val();
	
	ans_2S = $("#iptAns2S").val();
	ans_2D = $("#iptAns2D").val();
	
	ans_3S = $("#iptAns3S").val();
	ans_3D = $("#iptAns3D").val();
	
	ans_4S = $("#iptAns4S").val();
	ans_4D = $("#iptAns4D").val();
	
	ans_5S = $("#iptAns5S").val();
	ans_5D = $("#iptAns5D").val();
	
	ans_6S = $("#iptAns6S").val();
	ans_6D = $("#iptAns6D").val();
	
	vald = parseInt(ans_1S) + parseInt(ans_1D) + parseInt(ans_2S) + parseInt(ans_2D) + parseInt(ans_3S) + parseInt(ans_3D) + parseInt(ans_4S) + parseInt(ans_4D);
	vald = vald + parseInt(ans_5S) + parseInt(ans_5D) + parseInt(ans_6S) + parseInt(ans_6D);
	
	if(vald == 0 && idBtn != 3)
		alert("You must select the answers.");
	else
	{
		if(idBtn == 1){
			img1 = "&nbsp;";
			img2 = "&nbsp;";
			img3 = "&nbsp;";
			img4 = "&nbsp;";
			img5 = "&nbsp;";
			img6 = "&nbsp;";
			
			if(ans_1S == 1 && ans_1D == 0){
				img1 = "<img src=\"../img/good_p.png\" width=\"23\" height=\"23\" />";
				img_ans1S = "<a href=\"#\" onclick=\"mostrarAnsL1Ex10(1,'S')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image37','','../img/img_L1_same.png',1)\">"+
					"<img src=\"../img/img_L1_same.png\" name=\"Image37\" width=\"106\" height=\"36\" border=\"0\" id=\"Image37\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns1S\" value=1 />";
				img_ans1D = "<a href=\"#\" onclick=\"mostrarAnsL1Ex10(1,'D')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image38','','../img/img_L1_diferent.png',1)\">"+
					"<img src=\"../img/img_L1_diferent2.png\" name=\"Image38\" width=\"106\" height=\"36\" border=\"0\" id=\"Image38\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns1D\" value=0 />";
				
				varscore = parseFloat(varscore) + 17;
			}
			else if(ans_1S == 0 && ans_1D == 0){
				img1 = "&nbsp;";
				img_ans1S = "<a href=\"#\" onclick=\"mostrarAnsL1Ex10(1,'S')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image37','','../img/img_L1_same.png',1)\">"+
					"<img src=\"../img/img_L1_same2.png\" name=\"Image37\" width=\"106\" height=\"36\" border=\"0\" id=\"Image37\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns1S\" value=0 />";
				img_ans1D = "<a href=\"#\" onclick=\"mostrarAnsL1Ex10(1,'D')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image38','','../img/img_L1_diferent.png',1)\">"+
					"<img src=\"../img/img_L1_diferent2.png\" name=\"Image38\" width=\"106\" height=\"36\" border=\"0\" id=\"Image38\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns1D\" value=0 />";
			}
			else{
				img1 = "<img src=\"../img/good_No_p.png\" width=\"23\" height=\"23\" />";
				img_ans1S = "<a href=\"#\" onclick=\"mostrarAnsL1Ex10(1,'S')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image37','','../img/img_L1_same.png',1)\">"+
					"<img src=\"../img/img_L1_same2.png\" name=\"Image37\" width=\"106\" height=\"36\" border=\"0\" id=\"Image37\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns1S\" value=0 />";
				img_ans1D = "<a href=\"#\" onclick=\"mostrarAnsL1Ex10(1,'D')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image38','','../img/img_L1_diferent.png',1)\">"+
					"<img src=\"../img/img_L1_diferent.png\" name=\"Image38\" width=\"106\" height=\"36\" border=\"0\" id=\"Image38\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns1D\" value=1 />";
			}
			
			if(ans_2D == 1 && ans_2S == 0){
				img2 = "<img src=\"../img/good_p.png\" width=\"23\" height=\"23\" />";
				img_ans2S = "<a href=\"#\" onclick=\"mostrarAnsL1Ex10(2,'S')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image40','','../img/img_L1_same.png',1)\">"+
					"<img src=\"../img/img_L1_same2.png\" name=\"Image40\" width=\"106\" height=\"36\" border=\"0\" id=\"Image40\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns2S\" value=0 />";
				img_ans2D = "<a href=\"#\" onclick=\"mostrarAnsL1Ex10(2,'D')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image36','','../img/img_L1_diferent.png',1)\">"+
						"<img src=\"../img/img_L1_diferent.png\" name=\"Image36\" width=\"106\" height=\"36\" border=\"0\" id=\"Image36\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns2D\" value=1 />";
				
				varscore = parseFloat(varscore) + parseFloat('16.6');
			}
			else if(ans_2D == 0 && ans_2S == 0){
				img2 = "&nbsp;";
				img_ans2S = "<a href=\"#\" onclick=\"mostrarAnsL1Ex10(2,'S')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image40','','../img/img_L1_same.png',1)\">"+
					"<img src=\"../img/img_L1_same2.png\" name=\"Image40\" width=\"106\" height=\"36\" border=\"0\" id=\"Image40\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns2S\" value=0 />";
				img_ans2D = "<a href=\"#\" onclick=\"mostrarAnsL1Ex10(2,'D')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image36','','../img/img_L1_diferent.png',1)\">"+
						"<img src=\"../img/img_L1_diferent2.png\" name=\"Image36\" width=\"106\" height=\"36\" border=\"0\" id=\"Image36\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns2D\" value=0 />";
			}
			else{
				img2 = "<img src=\"../img/good_No_p.png\" width=\"23\" height=\"23\" />";
				img_ans2S = "<a href=\"#\" onclick=\"mostrarAnsL1Ex10(2,'S')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image40','','../img/img_L1_same.png',1)\">"+
					"<img src=\"../img/img_L1_same.png\" name=\"Image40\" width=\"106\" height=\"36\" border=\"0\" id=\"Image40\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns2S\" value=1 />";
				img_ans2D = "<a href=\"#\" onclick=\"mostrarAnsL1Ex10(2,'D')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image36','','../img/img_L1_diferent.png',1)\">"+
						"<img src=\"../img/img_L1_diferent2.png\" name=\"Image36\" width=\"106\" height=\"36\" border=\"0\" id=\"Image36\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns2D\" value=0 />";
			}
			
			if(ans_3D == 1 && ans_3S == 0){
				img3 = "<img src=\"../img/good_No_p.png\" width=\"23\" height=\"23\" />";
				img_ans3S = "<a href=\"#\" onclick=\"mostrarAnsL1Ex10(3,'S')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image41','','../img/img_L1_same.png',1)\">"+
						"<img src=\"../img/img_L1_same2.png\" name=\"Image41\" width=\"106\" height=\"36\" border=\"0\" id=\"Image41\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns3S\" value=0 />";
				img_ans3D = "<a href=\"#\" onclick=\"mostrarAnsL1Ex10(3,'D')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image39','','../img/img_L1_diferent.png',1)\">"+
						"<img src=\"../img/img_L1_diferent.png\" name=\"Image39\" width=\"106\" height=\"36\" border=\"0\" id=\"Image39\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns3D\" value=1 />";
			}
			else if(ans_3D == 0 && ans_3S == 0){
				img3 = "&nbsp;";
				img_ans3S = "<a href=\"#\" onclick=\"mostrarAnsL1Ex10(3,'S')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image41','','../img/img_L1_same.png',1)\">"+
						"<img src=\"../img/img_L1_same2.png\" name=\"Image41\" width=\"106\" height=\"36\" border=\"0\" id=\"Image41\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns3S\" value=0 />";
				img_ans3D = "<a href=\"#\" onclick=\"mostrarAnsL1Ex10(3,'D')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image39','','../img/img_L1_diferent.png',1)\">"+
						"<img src=\"../img/img_L1_diferent2.png\" name=\"Image39\" width=\"106\" height=\"36\" border=\"0\" id=\"Image39\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns3D\" value=0 />";
			}
			else{
				img3 = "<img src=\"../img/good_p.png\" width=\"23\" height=\"23\" />";
				img_ans3S = "<a href=\"#\" onclick=\"mostrarAnsL1Ex10(3,'S')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image41','','../img/img_L1_same.png',1)\">"+
						"<img src=\"../img/img_L1_same.png\" name=\"Image41\" width=\"106\" height=\"36\" border=\"0\" id=\"Image41\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns3S\" value=1 />";
				img_ans3D = "<a href=\"#\" onclick=\"mostrarAnsL1Ex10(3,'D')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image39','','../img/img_L1_diferent.png',1)\">"+
						"<img src=\"../img/img_L1_diferent2.png\" name=\"Image39\" width=\"106\" height=\"36\" border=\"0\" id=\"Image39\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns3D\" value=0 />";
					
				varscore = parseFloat(varscore) + parseFloat('16.6');
			}
			
			if(ans_4S == 1 && ans_4D == 0){
				img4 = "<img src=\"../img/good_p.png\" width=\"23\" height=\"23\" />";
				img_ans4S = "<a href=\"#\" onclick=\"mostrarAnsL1Ex10(4,'S')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image32','','../img/img_L1_same.png',1)\">"+
						"<img src=\"../img/img_L1_same.png\" name=\"Image32\" width=\"106\" height=\"36\" border=\"0\" id=\"Image32\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns4S\" value=1 />";
				img_ans4D = "<a href=\"#\" onclick=\"mostrarAnsL1Ex10(4,'D')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image33','','../img/img_L1_diferent.png',1)\">"+
						"<img src=\"../img/img_L1_diferent2.png\" name=\"Image33\" width=\"106\" height=\"36\" border=\"0\" id=\"Image33\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns4D\" value=0 />";
					
				varscore = parseFloat(varscore) + parseFloat('16.6');
			}
			else if(ans_4S == 0 && ans_4D == 0){
				img4 = "&nbsp;";
				img_ans4S = "<a href=\"#\" onclick=\"mostrarAnsL1Ex10(4,'S')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image32','','../img/img_L1_same.png',1)\">"+
						"<img src=\"../img/img_L1_same2.png\" name=\"Image32\" width=\"106\" height=\"36\" border=\"0\" id=\"Image32\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns4S\" value=0 />";
				img_ans4D = "<a href=\"#\" onclick=\"mostrarAnsL1Ex10(4,'D')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image33','','../img/img_L1_diferent.png',1)\">"+
						"<img src=\"../img/img_L1_diferent2.png\" name=\"Image33\" width=\"106\" height=\"36\" border=\"0\" id=\"Image33\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns4D\" value=0 />";
			}
			else{
				img4 = "<img src=\"../img/good_No_p.png\" width=\"23\" height=\"23\" />";
				img_ans4S = "<a href=\"#\" onclick=\"mostrarAnsL1Ex10(4,'S')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image32','','../img/img_L1_same.png',1)\">"+
						"<img src=\"../img/img_L1_same2.png\" name=\"Image32\" width=\"106\" height=\"36\" border=\"0\" id=\"Image32\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns4S\" value=0 />";
				img_ans4D = "<a href=\"#\" onclick=\"mostrarAnsL1Ex10(4,'D')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image33','','../img/img_L1_diferent.png',1)\">"+
						"<img src=\"../img/img_L1_diferent.png\" name=\"Image33\" width=\"106\" height=\"36\" border=\"0\" id=\"Image33\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns4D\" value=1 />";
			}
			
			if(ans_5D == 1 && ans_5S == 0){
				img5 = "<img src=\"../img/good_p.png\" width=\"23\" height=\"23\" />";
				img_ans5S = "<a href=\"#\" onclick=\"mostrarAnsL1Ex10(5,'S')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image42','','../img/img_L1_same.png',1)\">"+
						"<img src=\"../img/img_L1_same2.png\" name=\"Image42\" width=\"106\" height=\"36\" border=\"0\" id=\"Image42\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns5S\" value=0 />";
				img_ans5D = "<a href=\"#\" onclick=\"mostrarAnsL1Ex10(5,'D')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image34','','../img/img_L1_diferent.png',1)\">"+
						"<img src=\"../img/img_L1_diferent.png\" name=\"Image34\" width=\"106\" height=\"36\" border=\"0\" id=\"Image34\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns5D\" value=1 />";
				
				varscore = parseFloat(varscore) + parseFloat('16.6');
			}
			else if(ans_5D == 0 && ans_5S == 0){
				img5 = "&nbsp;";
				img_ans5S = "<a href=\"#\" onclick=\"mostrarAnsL1Ex10(5,'S')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image42','','../img/img_L1_same.png',1)\">"+
						"<img src=\"../img/img_L1_same2.png\" name=\"Image42\" width=\"106\" height=\"36\" border=\"0\" id=\"Image42\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns5S\" value=0 />";
				img_ans5D = "<a href=\"#\" onclick=\"mostrarAnsL1Ex10(5,'D')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image34','','../img/img_L1_diferent.png',1)\">"+
						"<img src=\"../img/img_L1_diferent2.png\" name=\"Image34\" width=\"106\" height=\"36\" border=\"0\" id=\"Image34\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns5D\" value=0 />";
			}
			else{
				img5 = "<img src=\"../img/good_No_p.png\" width=\"23\" height=\"23\" />";
				img_ans5S = "<a href=\"#\" onclick=\"mostrarAnsL1Ex10(5,'S')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image42','','../img/img_L1_same.png',1)\">"+
						"<img src=\"../img/img_L1_same.png\" name=\"Image42\" width=\"106\" height=\"36\" border=\"0\" id=\"Image42\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns5S\" value=1 />";
				img_ans5D = "<a href=\"#\" onclick=\"mostrarAnsL1Ex10(5,'D')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image34','','../img/img_L1_diferent.png',1)\">"+
						"<img src=\"../img/img_L1_diferent2.png\" name=\"Image34\" width=\"106\" height=\"36\" border=\"0\" id=\"Image34\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns5D\" value=0 />";
			}
			
			if(ans_6S == 1 && ans_6D == 0){
				img6 = "<img src=\"../img/good_p.png\" width=\"23\" height=\"23\" />";
				img_ans6S = "<a href=\"#\" onclick=\"mostrarAnsL1Ex10(6,'S')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image43','','../img/img_L1_same.png',1)\">"+
						"<img src=\"../img/img_L1_same.png\" name=\"Image43\" width=\"106\" height=\"36\" border=\"0\" id=\"Image43\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns6S\" value=1 />";
				img_ans6D = "<a href=\"#\" onclick=\"mostrarAnsL1Ex10(6,'D')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image35','','../img/img_L1_diferent.png',1)\">"+
						"<img src=\"../img/img_L1_diferent2.png\" name=\"Image35\" width=\"106\" height=\"36\" border=\"0\" id=\"Image35\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns6D\" value=0 />";
					
				varscore = parseFloat(varscore) + parseFloat('16.6');
			}
			else if(ans_6S == 0 && ans_6D == 0){
				img6 = "&nbsp;";
				img_ans6S = "<a href=\"#\" onclick=\"mostrarAnsL1Ex10(6,'S')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image43','','../img/img_L1_same.png',1)\">"+
						"<img src=\"../img/img_L1_same2.png\" name=\"Image43\" width=\"106\" height=\"36\" border=\"0\" id=\"Image43\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns6S\" value= />";
				img_ans6D = "<a href=\"#\" onclick=\"mostrarAnsL1Ex10(6,'D')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image35','','../img/img_L1_diferent.png',1)\">"+
						"<img src=\"../img/img_L1_diferent2.png\" name=\"Image35\" width=\"106\" height=\"36\" border=\"0\" id=\"Image35\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns6D\" value=0 />";
			}
			else{
				img6 = "<img src=\"../img/good_No_p.png\" width=\"23\" height=\"23\" />";
				img_ans6S = "<a href=\"#\" onclick=\"mostrarAnsL1Ex10(6,'S')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image43','','../img/img_L1_same.png',1)\">"+
						"<img src=\"../img/img_L1_same2.png\" name=\"Image43\" width=\"106\" height=\"36\" border=\"0\" id=\"Image43\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns6S\" value=0 />";
				img_ans6D = "<a href=\"#\" onclick=\"mostrarAnsL1Ex10(6,'D')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image35','','../img/img_L1_diferent.png',1)\">"+
						"<img src=\"../img/img_L1_diferent.png\" name=\"Image35\" width=\"106\" height=\"36\" border=\"0\" id=\"Image35\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns6D\" value=1 />";
			}
			
			errorTxt3 = doLMSSetValue("cmi.core.score.raw", varscore);
		
			if(varscore >= "100"){
				errorTxt2 = doLMSSetValue("cmi.core.lesson_status", "passed");
			}
			else{
				errorTxt2 = doLMSSetValue("cmi.core.lesson_status", "failed");
			}
			doLMSCommit();
				
			html = "<table align=\"center\" width=\"696\" border=\"0\">"+
			  "<tr>"+
				"<td width=\"690\" height=\"221\" align=\"center\" valign=\"bottom\"><table align=\"center\" width=\"671\" border=\"0\">"+
				  "<tr>"+
					"<td width=\"15\" height=\"50\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong>1.</strong></td>"+
					"<td width=\"40\" align=\"center\" valign=\"middle\"><object id=\"FlashID7\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"29\" height=\"27\">"+
					  "<param name=\"movie\" value=\"../swf/L1/L1_Exe_10/btn_L1_exer_10_a.swf\" />"+
					  "<param name=\"quality\" value=\"high\" />"+
					  "<param name=\"wmode\" value=\"transparent\" />"+
					  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
					  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
					  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
					  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
					  "<!--[if !IE]>-->"+
					  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_Exe_10/btn_L1_exer_10_a.swf\" width=\"29\" height=\"27\">"+
						"<!--<![endif]-->"+
						"<param name=\"quality\" value=\"high\" />"+
						"<param name=\"wmode\" value=\"transparent\" />"+
						"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
						"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
						"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
						"<div>"+
						  "<h4>El contenido de esta página requiere una versión más reciente de Adobe Flash Player.</h4>"+
						  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
						"</div>"+
						"<!--[if !IE]>-->"+
					  "</object>"+
					  "<!--<![endif]-->"+
					"</object></td>"+
					"<td width=\"106\"><div id=\"divAns1S\">"+img_ans1S+
					"</div></td>"+
					"<td width=\"106\"><div id=\"divAns1D\">"+img_ans1D+
					"</div></td>"+
					"<td background=\"../img/bg_chek.png\" width=\"33\" align=\"center\" valign=\"middle\">"+img1+"</td>"+
					"<td width=\"38\" align=\"right\" valign=\"middle\"><span class=\"texto_1\"><strong>4.</strong></span></td>"+
					"<td width=\"39\" align=\"center\" valign=\"middle\"><object id=\"FlashID10\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"29\" height=\"27\">"+
					  "<param name=\"movie\" value=\"../swf/L1/L1_Exe_10/btn_L1_exer_10_d.swf\" />"+
					  "<param name=\"quality\" value=\"high\" />"+
					  "<param name=\"wmode\" value=\"transparent\" />"+
					  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
					  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
					  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
					  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
					  "<!--[if !IE]>-->"+
					  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_Exe_10/btn_L1_exer_10_d.swf\" width=\"29\" height=\"27\">"+
						"<!--<![endif]-->"+
						"<param name=\"quality\" value=\"high\" />"+
						"<param name=\"wmode\" value=\"transparent\" />"+
						"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
						"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
						"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
						"<div>"+
						  "<h4>El contenido de esta página requiere una versión más reciente de Adobe Flash Player.</h4>"+
						  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
						"</div>"+
						"<!--[if !IE]>-->"+
					  "</object>"+
					  "<!--<![endif]-->"+
					"</object></td>"+
					"<td width=\"110\" align=\"center\" valign=\"middle\"><div id=\"divAns4S\">"+img_ans4S+
					"</div></td>"+
					"<td width=\"109\" align=\"center\" valign=\"middle\"><div id=\"divAns4D\">"+img_ans4D+
					"</div></td>"+
					"<td width=\"33\" align=\"center\" valign=\"middle\" background=\"../img/bg_chek.png\">"+img4+"</td>"+
				  "</tr>"+
				  "<tr>"+
					"<td width=\"15\" height=\"50\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong>2.</strong></td>"+
					"<td width=\"40\" align=\"center\" valign=\"middle\"><object id=\"FlashID8\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"29\" height=\"27\">"+
					  "<param name=\"movie\" value=\"../swf/L1/L1_Exe_10/btn_L1_exer_10_b.swf\" />"+
					  "<param name=\"quality\" value=\"high\" />"+
					  "<param name=\"wmode\" value=\"transparent\" />"+
					  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
					  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
					  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
					  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
					  "<!--[if !IE]>-->"+
					  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_Exe_10/btn_L1_exer_10_b.swf\" width=\"29\" height=\"27\">"+
						"<!--<![endif]-->"+
						"<param name=\"quality\" value=\"high\" />"+
						"<param name=\"wmode\" value=\"transparent\" />"+
						"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
						"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
						"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
						"<div>"+
						  "<h4>El contenido de esta página requiere una versión más reciente de Adobe Flash Player.</h4>"+
						  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
						"</div>"+
						"<!--[if !IE]>-->"+
					  "</object>"+
					  "<!--<![endif]-->"+
					"</object></td>"+
					"<td width=\"106\"><div id=\"divAns2S\">"+img_ans2S+
					"</div></td>"+
					"<td width=\"106\"><div id=\"divAns2D\">"+img_ans2D+
					"</div></td>"+
					"<td background=\"../img/bg_chek.png\" width=\"33\" align=\"center\" valign=\"middle\">"+img2+"</td>"+
					"<td width=\"38\" align=\"right\" valign=\"middle\"><span class=\"texto_1\"><strong>5.</strong></span></td>"+
					"<td width=\"39\" align=\"center\" valign=\"middle\"><object id=\"FlashID11\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"29\" height=\"27\">"+
					  "<param name=\"movie\" value=\"../swf/L1/L1_Exe_10/btn_L1_exer_10_e.swf\" />"+
					  "<param name=\"quality\" value=\"high\" />"+
					  "<param name=\"wmode\" value=\"transparent\" />"+
					  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
					  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
					  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
					  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
					  "<!--[if !IE]>-->"+
					  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_Exe_10/btn_L1_exer_10_e.swf\" width=\"29\" height=\"27\">"+
						"<!--<![endif]-->"+
						"<param name=\"quality\" value=\"high\" />"+
						"<param name=\"wmode\" value=\"transparent\" />"+
						"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
						"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
						"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
						"<div>"+
						  "<h4>El contenido de esta página requiere una versión más reciente de Adobe Flash Player.</h4>"+
						  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
						"</div>"+
						"<!--[if !IE]>-->"+
					  "</object>"+
					  "<!--<![endif]-->"+
					"</object></td>"+
					"<td width=\"110\" align=\"center\" valign=\"middle\"><div id=\"divAns5S\">"+img_ans5S+
					"</div></td>"+
					"<td width=\"109\" align=\"center\" valign=\"middle\"><div id=\"divAns5D\">"+img_ans5D+
					"</div></td>"+
					"<td width=\"33\" align=\"center\" valign=\"middle\" background=\"../img/bg_chek.png\">"+img5+"</td>"+
				  "</tr>"+
				  "<tr>"+
					"<td width=\"15\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong>3.</strong></td>"+
					"<td width=\"40\" height=\"50\" align=\"center\" valign=\"middle\"><object id=\"FlashID9\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"29\" height=\"27\">"+
					  "<param name=\"movie\" value=\"../swf/L1/L1_Exe_10/btn_L1_exer_10_c.swf\" />"+
					  "<param name=\"quality\" value=\"high\" />"+
					  "<param name=\"wmode\" value=\"transparent\" />"+
					  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
					  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
					  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
					  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
					  "<!--[if !IE]>-->"+
					  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_Exe_10/btn_L1_exer_10_c.swf\" width=\"29\" height=\"27\">"+
						"<!--<![endif]-->"+
						"<param name=\"quality\" value=\"high\" />"+
						"<param name=\"wmode\" value=\"transparent\" />"+
						"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
						"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
						"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
						"<div>"+
						  "<h4>El contenido de esta página requiere una versión más reciente de Adobe Flash Player.</h4>"+
						  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
						"</div>"+
						"<!--[if !IE]>-->"+
					  "</object>"+
					  "<!--<![endif]-->"+
					"</object></td>"+
					"<td width=\"106\"><div id=\"divAns3S\">"+img_ans3S+
					"</div></td>"+
					"<td width=\"106\"><div id=\"divAns3D\">"+img_ans3D+
					"</div></td>"+
					"<td background=\"../img/bg_chek.png\" width=\"33\" align=\"center\" valign=\"middle\">"+img3+"</td>"+
					"<td width=\"38\" align=\"right\" valign=\"middle\"><span class=\"texto_1\"><strong>6.</strong></span></td>"+
					"<td width=\"39\" align=\"center\" valign=\"middle\"><object id=\"FlashID12\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"29\" height=\"27\">"+
					  "<param name=\"movie\" value=\"../swf/L1/L1_Exe_10/btn_L1_exer_10_f.swf\" />"+
					  "<param name=\"quality\" value=\"high\" />"+
					  "<param name=\"wmode\" value=\"transparent\" />"+
					  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
					  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
					  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
					  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
					  "<!--[if !IE]>-->"+
					  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_Exe_10/btn_L1_exer_10_f.swf\" width=\"29\" height=\"27\">"+
						"<!--<![endif]-->"+
						"<param name=\"quality\" value=\"high\" />"+
						"<param name=\"wmode\" value=\"transparent\" />"+
						"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
						"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
						"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
						"<div>"+
						  "<h4>El contenido de esta página requiere una versión más reciente de Adobe Flash Player.</h4>"+
						  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
						"</div>"+
						"<!--[if !IE]>-->"+
					  "</object>"+
					  "<!--<![endif]-->"+
					"</object></td>"+
					"<td width=\"110\" align=\"center\" valign=\"middle\"><div id=\"divAns6S\">"+img_ans6S+
					"</div></td>"+
					"<td width=\"109\" align=\"center\" valign=\"middle\"><div id=\"divAns6D\">"+img_ans6D+
					"</div></td>"+
					"<td width=\"33\" align=\"center\" valign=\"middle\" background=\"../img/bg_chek.png\">"+img6+"</td>"+
				  "</tr>"+
				"</table></td>"+
			  "</tr><input type=\"hidden\" id=\"vez\" value="+vez+" />"+
			  "<input type=\"hidden\" id=\"inptscore\" name=\"inptscore\" value="+varscore+"/>"+
			"</table>";	
		}
		else if(idBtn == 3)
		{
			varscore = 0;
			html = "<table align=\"center\" width=\"696\" border=\"0\">"+
			  "<tr>"+
				"<td width=\"690\" height=\"221\" align=\"center\" valign=\"bottom\"><table align=\"center\" width=\"671\" border=\"0\">"+
				  "<tr>"+
					"<td width=\"15\" height=\"50\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong>1.</strong></td>"+
					"<td width=\"40\" align=\"center\" valign=\"middle\"><object id=\"FlashID7\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"29\" height=\"27\">"+
					  "<param name=\"movie\" value=\"../swf/L1/L1_Exe_10/btn_L1_exer_10_a.swf\" />"+
					  "<param name=\"quality\" value=\"high\" />"+
					  "<param name=\"wmode\" value=\"transparent\" />"+
					  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
					  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
					  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
					  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
					  "<!--[if !IE]>-->"+
					  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_Exe_10/btn_L1_exer_10_a.swf\" width=\"29\" height=\"27\">"+
						"<!--<![endif]-->"+
						"<param name=\"quality\" value=\"high\" />"+
						"<param name=\"wmode\" value=\"transparent\" />"+
						"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
						"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
						"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
						"<div>"+
						  "<h4>El contenido de esta página requiere una versión más reciente de Adobe Flash Player.</h4>"+
						  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
						"</div>"+
						"<!--[if !IE]>-->"+
					  "</object>"+
					  "<!--<![endif]-->"+
					"</object></td>"+
					"<td width=\"106\"><div id=\"divAns1S\">"+
						"<a href=\"#\" onclick=\"mostrarAnsL1Ex10(1,'S')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image37','','../img/img_L1_same.png',1)\">"+
							"<img src=\"../img/img_L1_same.png\" name=\"Image37\" width=\"106\" height=\"36\" border=\"0\" id=\"Image37\" />"+
						"</a>"+
						"<input type=\"hidden\" id=\"iptAns1S\" value=1 />"+
					"</div></td>"+
					"<td width=\"106\"><div id=\"divAns1D\">"+
						"<a href=\"#\" onclick=\"mostrarAnsL1Ex10(1,'D')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image38','','../img/img_L1_diferent.png',1)\">"+
							"<img src=\"../img/img_L1_diferent2.png\" name=\"Image38\" width=\"106\" height=\"36\" border=\"0\" id=\"Image38\" />"+
						"</a>"+
						"<input type=\"hidden\" id=\"iptAns1D\" value=0 />"+
					"</div></td>"+
					"<td background=\"../img/bg_chek.png\" width=\"33\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
					"<td width=\"38\" align=\"right\" valign=\"middle\"><span class=\"texto_1\"><strong>4.</strong></span></td>"+
					"<td width=\"39\" align=\"center\" valign=\"middle\"><object id=\"FlashID10\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"29\" height=\"27\">"+
					  "<param name=\"movie\" value=\"../swf/L1/L1_Exe_10/btn_L1_exer_10_d.swf\" />"+
					  "<param name=\"quality\" value=\"high\" />"+
					  "<param name=\"wmode\" value=\"transparent\" />"+
					  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
					  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
					  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
					  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
					  "<!--[if !IE]>-->"+
					  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_Exe_10/btn_L1_exer_10_d.swf\" width=\"29\" height=\"27\">"+
						"<!--<![endif]-->"+
						"<param name=\"quality\" value=\"high\" />"+
						"<param name=\"wmode\" value=\"transparent\" />"+
						"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
						"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
						"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
						"<div>"+
						  "<h4>El contenido de esta página requiere una versión más reciente de Adobe Flash Player.</h4>"+
						  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
						"</div>"+
						"<!--[if !IE]>-->"+
					  "</object>"+
					  "<!--<![endif]-->"+
					"</object></td>"+
					"<td width=\"110\" align=\"center\" valign=\"middle\"><div id=\"divAns4S\">"+
						"<a href=\"#\" onclick=\"mostrarAnsL1Ex10(4,'S')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image32','','../img/img_L1_same.png',1)\">"+
							"<img src=\"../img/img_L1_same.png\" name=\"Image32\" width=\"106\" height=\"36\" border=\"0\" id=\"Image32\" />"+
						"</a>"+
						"<input type=\"hidden\" id=\"iptAns4S\" value=1 />"+
					"</div></td>"+
					"<td width=\"109\" align=\"center\" valign=\"middle\"><div id=\"divAns4D\">"+
						"<a href=\"#\" onclick=\"mostrarAnsL1Ex10(4,'D')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image33','','../img/img_L1_diferent.png',1)\">"+
							"<img src=\"../img/img_L1_diferent2.png\" name=\"Image33\" width=\"106\" height=\"36\" border=\"0\" id=\"Image33\" />"+
						"</a>"+
						"<input type=\"hidden\" id=\"iptAns4D\" value=0 />"+
					"</div></td>"+
					"<td width=\"33\" align=\"center\" valign=\"middle\" background=\"../img/bg_chek.png\">&nbsp;</td>"+
				  "</tr>"+
				  "<tr>"+
					"<td width=\"15\" height=\"50\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong>2.</strong></td>"+
					"<td width=\"40\" align=\"center\" valign=\"middle\"><object id=\"FlashID8\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"29\" height=\"27\">"+
					  "<param name=\"movie\" value=\"../swf/L1/L1_Exe_10/btn_L1_exer_10_b.swf\" />"+
					  "<param name=\"quality\" value=\"high\" />"+
					  "<param name=\"wmode\" value=\"transparent\" />"+
					  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
					  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
					  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
					  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
					  "<!--[if !IE]>-->"+
					  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_Exe_10/btn_L1_exer_10_b.swf\" width=\"29\" height=\"27\">"+
						"<!--<![endif]-->"+
						"<param name=\"quality\" value=\"high\" />"+
						"<param name=\"wmode\" value=\"transparent\" />"+
						"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
						"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
						"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
						"<div>"+
						  "<h4>El contenido de esta página requiere una versión más reciente de Adobe Flash Player.</h4>"+
						  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
						"</div>"+
						"<!--[if !IE]>-->"+
					  "</object>"+
					  "<!--<![endif]-->"+
					"</object></td>"+
					"<td width=\"106\"><div id=\"divAns2S\">"+
						"<a href=\"#\" onclick=\"mostrarAnsL1Ex10(2,'S')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image40','','../img/img_L1_same.png',1)\">"+
							"<img src=\"../img/img_L1_same2.png\" name=\"Image40\" width=\"106\" height=\"36\" border=\"0\" id=\"Image40\" />"+
						"</a>"+
						"<input type=\"hidden\" id=\"iptAns2S\" value=0 />"+
					"</div></td>"+
					"<td width=\"106\"><div id=\"divAns2D\">"+
						"<a href=\"#\" onclick=\"mostrarAnsL1Ex10(2,'D')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image36','','../img/img_L1_diferent.png',1)\">"+
							"<img src=\"../img/img_L1_diferent.png\" name=\"Image36\" width=\"106\" height=\"36\" border=\"0\" id=\"Image36\" />"+
						"</a>"+
						"<input type=\"hidden\" id=\"iptAns2D\" value=1 />"+
					"</div></td>"+
					"<td background=\"../img/bg_chek.png\" width=\"33\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
					"<td width=\"38\" align=\"right\" valign=\"middle\"><span class=\"texto_1\"><strong>5.</strong></span></td>"+
					"<td width=\"39\" align=\"center\" valign=\"middle\"><object id=\"FlashID11\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"29\" height=\"27\">"+
					  "<param name=\"movie\" value=\"../swf/L1/L1_Exe_10/btn_L1_exer_10_e.swf\" />"+
					  "<param name=\"quality\" value=\"high\" />"+
					  "<param name=\"wmode\" value=\"transparent\" />"+
					  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
					  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
					  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
					  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
					  "<!--[if !IE]>-->"+
					  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_Exe_10/btn_L1_exer_10_e.swf\" width=\"29\" height=\"27\">"+
						"<!--<![endif]-->"+
						"<param name=\"quality\" value=\"high\" />"+
						"<param name=\"wmode\" value=\"transparent\" />"+
						"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
						"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
						"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
						"<div>"+
						  "<h4>El contenido de esta página requiere una versión más reciente de Adobe Flash Player.</h4>"+
						  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
						"</div>"+
						"<!--[if !IE]>-->"+
					  "</object>"+
					  "<!--<![endif]-->"+
					"</object></td>"+
					"<td width=\"110\" align=\"center\" valign=\"middle\"><div id=\"divAns5S\">"+
						"<a href=\"#\" onclick=\"mostrarAnsL1Ex10(5,'S')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image42','','../img/img_L1_same.png',1)\">"+
							"<img src=\"../img/img_L1_same2.png\" name=\"Image42\" width=\"106\" height=\"36\" border=\"0\" id=\"Image42\" />"+
						"</a>"+
						"<input type=\"hidden\" id=\"iptAns5S\" value=0 />"+
					"</div></td>"+
					"<td width=\"109\" align=\"center\" valign=\"middle\"><div id=\"divAns5D\">"+
						"<a href=\"#\" onclick=\"mostrarAnsL1Ex10(5,'D')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image34','','../img/img_L1_diferent.png',1)\">"+
							"<img src=\"../img/img_L1_diferent.png\" name=\"Image34\" width=\"106\" height=\"36\" border=\"0\" id=\"Image34\" />"+
						"</a>"+
						"<input type=\"hidden\" id=\"iptAns5D\" value=1 />"+
					"</div></td>"+
					"<td width=\"33\" align=\"center\" valign=\"middle\" background=\"../img/bg_chek.png\">&nbsp;</td>"+
				  "</tr>"+
				  "<tr>"+
					"<td width=\"15\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong>3.</strong></td>"+
					"<td width=\"40\" height=\"50\" align=\"center\" valign=\"middle\"><object id=\"FlashID9\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"29\" height=\"27\">"+
					  "<param name=\"movie\" value=\"../swf/L1/L1_Exe_10/btn_L1_exer_10_c.swf\" />"+
					  "<param name=\"quality\" value=\"high\" />"+
					  "<param name=\"wmode\" value=\"transparent\" />"+
					  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
					  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
					  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
					  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
					  "<!--[if !IE]>-->"+
					  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_Exe_10/btn_L1_exer_10_c.swf\" width=\"29\" height=\"27\">"+
						"<!--<![endif]-->"+
						"<param name=\"quality\" value=\"high\" />"+
						"<param name=\"wmode\" value=\"transparent\" />"+
						"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
						"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
						"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
						"<div>"+
						  "<h4>El contenido de esta página requiere una versión más reciente de Adobe Flash Player.</h4>"+
						  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
						"</div>"+
						"<!--[if !IE]>-->"+
					  "</object>"+
					  "<!--<![endif]-->"+
					"</object></td>"+
					"<td width=\"106\"><div id=\"divAns3S\">"+
						"<a href=\"#\" onclick=\"mostrarAnsL1Ex10(3,'S')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image41','','../img/img_L1_same.png',1)\">"+
							"<img src=\"../img/img_L1_same2.png\" name=\"Image41\" width=\"106\" height=\"36\" border=\"0\" id=\"Image41\" />"+
						"</a>"+
						"<input type=\"hidden\" id=\"iptAns3S\" value=0 />"+
					"</div></td>"+
					"<td width=\"106\"><div id=\"divAns3D\">"+
						"<a href=\"#\" onclick=\"mostrarAnsL1Ex10(3,'D')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image39','','../img/img_L1_diferent.png',1)\">"+
							"<img src=\"../img/img_L1_diferent.png\" name=\"Image39\" width=\"106\" height=\"36\" border=\"0\" id=\"Image39\" />"+
						"</a>"+
						"<input type=\"hidden\" id=\"iptAns3D\" value=1 />"+
					"</div></td>"+
					"<td background=\"../img/bg_chek.png\" width=\"33\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
					"<td width=\"38\" align=\"right\" valign=\"middle\"><span class=\"texto_1\"><strong>6.</strong></span></td>"+
					"<td width=\"39\" align=\"center\" valign=\"middle\"><object id=\"FlashID12\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"29\" height=\"27\">"+
					  "<param name=\"movie\" value=\"../swf/L1/L1_Exe_10/btn_L1_exer_10_f.swf\" />"+
					  "<param name=\"quality\" value=\"high\" />"+
					  "<param name=\"wmode\" value=\"transparent\" />"+
					  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
					  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
					  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
					  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
					  "<!--[if !IE]>-->"+
					  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_Exe_10/btn_L1_exer_10_f.swf\" width=\"29\" height=\"27\">"+
						"<!--<![endif]-->"+
						"<param name=\"quality\" value=\"high\" />"+
						"<param name=\"wmode\" value=\"transparent\" />"+
						"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
						"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
						"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
						"<div>"+
						  "<h4>El contenido de esta página requiere una versión más reciente de Adobe Flash Player.</h4>"+
						  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
						"</div>"+
						"<!--[if !IE]>-->"+
					  "</object>"+
					  "<!--<![endif]-->"+
					"</object></td>"+
					"<td width=\"110\" align=\"center\" valign=\"middle\"><div id=\"divAns6S\">"+
						"<a href=\"#\" onclick=\"mostrarAnsL1Ex10(6,'S')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image43','','../img/img_L1_same.png',1)\">"+
							"<img src=\"../img/img_L1_same.png\" name=\"Image43\" width=\"106\" height=\"36\" border=\"0\" id=\"Image43\" />"+
						"</a>"+
						"<input type=\"hidden\" id=\"iptAns6S\" value=1 />"+
					"</div></td>"+
					"<td width=\"109\" align=\"center\" valign=\"middle\"><div id=\"divAns6D\">"+
						"<a href=\"#\" onclick=\"mostrarAnsL1Ex10(6,'D')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image35','','../img/img_L1_diferent.png',1)\">"+
							"<img src=\"../img/img_L1_diferent2.png\" name=\"Image35\" width=\"106\" height=\"36\" border=\"0\" id=\"Image35\" />"+
						"</a>"+
						"<input type=\"hidden\" id=\"iptAns6D\" value=0 />"+
					"</div></td>"+
					"<td width=\"33\" align=\"center\" valign=\"middle\" background=\"../img/bg_chek.png\">&nbsp;</td>"+
				  "</tr>"+
				"</table></td>"+
			  "</tr><input type=\"hidden\" id=\"vez\" value="+vez+" />"+
			  "<input type=\"hidden\" id=\"inptscore\" name=\"inptscore\" value="+varscore+"/>"+
			"</table>";	
			actualizarBtnL1E10(idBtn);
		}	
		else if(idBtn == 2){
			if(vez >= 2)
				actualizarBtnL1E10(idBtn);
			vez = parseInt(vez) + 1;
			
			varscore = 0;

			html = "<table align=\"center\" width=\"696\" border=\"0\">"+
			  "<tr>"+
				"<td width=\"690\" height=\"221\" align=\"center\" valign=\"bottom\"><table align=\"center\" width=\"671\" border=\"0\">"+
				  "<tr>"+
					"<td width=\"15\" height=\"50\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong>1.</strong></td>"+
					"<td width=\"40\" align=\"center\" valign=\"middle\"><object id=\"FlashID7\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"29\" height=\"27\">"+
					  "<param name=\"movie\" value=\"../swf/L1/L1_Exe_10/btn_L1_exer_10_a.swf\" />"+
					  "<param name=\"quality\" value=\"high\" />"+
					  "<param name=\"wmode\" value=\"transparent\" />"+
					  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
					  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
					  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
					  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
					  "<!--[if !IE]>-->"+
					  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_Exe_10/btn_L1_exer_10_a.swf\" width=\"29\" height=\"27\">"+
						"<!--<![endif]-->"+
						"<param name=\"quality\" value=\"high\" />"+
						"<param name=\"wmode\" value=\"transparent\" />"+
						"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
						"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
						"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
						"<div>"+
						  "<h4>El contenido de esta página requiere una versión más reciente de Adobe Flash Player.</h4>"+
						  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
						"</div>"+
						"<!--[if !IE]>-->"+
					  "</object>"+
					  "<!--<![endif]-->"+
					"</object></td>"+
					"<td width=\"106\"><div id=\"divAns1S\">"+
						"<a href=\"#\" onclick=\"mostrarAnsL1Ex10(1,'S')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image37','','../img/img_L1_same.png',1)\">"+
							"<img src=\"../img/img_L1_same2.png\" name=\"Image37\" width=\"106\" height=\"36\" border=\"0\" id=\"Image37\" />"+
						"</a>"+
						"<input type=\"hidden\" id=\"iptAns1S\" value=0 />"+
					"</div></td>"+
					"<td width=\"106\"><div id=\"divAns1D\">"+
						"<a href=\"#\" onclick=\"mostrarAnsL1Ex10(1,'D')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image38','','../img/img_L1_diferent.png',1)\">"+
							"<img src=\"../img/img_L1_diferent2.png\" name=\"Image38\" width=\"106\" height=\"36\" border=\"0\" id=\"Image38\" />"+
						"</a>"+
						"<input type=\"hidden\" id=\"iptAns1D\" value=0 />"+
					"</div></td>"+
					"<td background=\"../img/bg_chek.png\" width=\"33\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
					"<td width=\"38\" align=\"right\" valign=\"middle\"><span class=\"texto_1\"><strong>4.</strong></span></td>"+
					"<td width=\"39\" align=\"center\" valign=\"middle\"><object id=\"FlashID10\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"29\" height=\"27\">"+
					  "<param name=\"movie\" value=\"../swf/L1/L1_Exe_10/btn_L1_exer_10_d.swf\" />"+
					  "<param name=\"quality\" value=\"high\" />"+
					  "<param name=\"wmode\" value=\"transparent\" />"+
					  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
					  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
					  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
					  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
					  "<!--[if !IE]>-->"+
					  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_Exe_10/btn_L1_exer_10_d.swf\" width=\"29\" height=\"27\">"+
						"<!--<![endif]-->"+
						"<param name=\"quality\" value=\"high\" />"+
						"<param name=\"wmode\" value=\"transparent\" />"+
						"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
						"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
						"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
						"<div>"+
						  "<h4>El contenido de esta página requiere una versión más reciente de Adobe Flash Player.</h4>"+
						  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
						"</div>"+
						"<!--[if !IE]>-->"+
					  "</object>"+
					  "<!--<![endif]-->"+
					"</object></td>"+
					"<td width=\"110\" align=\"center\" valign=\"middle\"><div id=\"divAns4S\">"+
						"<a href=\"#\" onclick=\"mostrarAnsL1Ex10(4,'S')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image32','','../img/img_L1_same.png',1)\">"+
							"<img src=\"../img/img_L1_same2.png\" name=\"Image32\" width=\"106\" height=\"36\" border=\"0\" id=\"Image32\" />"+
						"</a>"+
						"<input type=\"hidden\" id=\"iptAns4S\" value=0 />"+
					"</div></td>"+
					"<td width=\"109\" align=\"center\" valign=\"middle\"><div id=\"divAns4D\">"+
						"<a href=\"#\" onclick=\"mostrarAnsL1Ex10(4,'D')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image33','','../img/img_L1_diferent.png',1)\">"+
							"<img src=\"../img/img_L1_diferent2.png\" name=\"Image33\" width=\"106\" height=\"36\" border=\"0\" id=\"Image33\" />"+
						"</a>"+
						"<input type=\"hidden\" id=\"iptAns4D\" value=0 />"+
					"</div></td>"+
					"<td width=\"33\" align=\"center\" valign=\"middle\" background=\"../img/bg_chek.png\">&nbsp;</td>"+
				  "</tr>"+
				  "<tr>"+
					"<td width=\"15\" height=\"50\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong>2.</strong></td>"+
					"<td width=\"40\" align=\"center\" valign=\"middle\"><object id=\"FlashID8\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"29\" height=\"27\">"+
					  "<param name=\"movie\" value=\"../swf/L1/L1_Exe_10/btn_L1_exer_10_b.swf\" />"+
					  "<param name=\"quality\" value=\"high\" />"+
					  "<param name=\"wmode\" value=\"transparent\" />"+
					  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
					  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
					  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
					  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
					  "<!--[if !IE]>-->"+
					  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_Exe_10/btn_L1_exer_10_b.swf\" width=\"29\" height=\"27\">"+
						"<!--<![endif]-->"+
						"<param name=\"quality\" value=\"high\" />"+
						"<param name=\"wmode\" value=\"transparent\" />"+
						"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
						"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
						"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
						"<div>"+
						  "<h4>El contenido de esta página requiere una versión más reciente de Adobe Flash Player.</h4>"+
						  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
						"</div>"+
						"<!--[if !IE]>-->"+
					  "</object>"+
					  "<!--<![endif]-->"+
					"</object></td>"+
					"<td width=\"106\"><div id=\"divAns2S\">"+
						"<a href=\"#\" onclick=\"mostrarAnsL1Ex10(2,'S')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image40','','../img/img_L1_same.png',1)\">"+
							"<img src=\"../img/img_L1_same2.png\" name=\"Image40\" width=\"106\" height=\"36\" border=\"0\" id=\"Image40\" />"+
						"</a>"+
						"<input type=\"hidden\" id=\"iptAns2S\" value=0 />"+
					"</div></td>"+
					"<td width=\"106\"><div id=\"divAns2D\">"+
						"<a href=\"#\" onclick=\"mostrarAnsL1Ex10(2,'D')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image36','','../img/img_L1_diferent.png',1)\">"+
							"<img src=\"../img/img_L1_diferent2.png\" name=\"Image36\" width=\"106\" height=\"36\" border=\"0\" id=\"Image36\" />"+
						"</a>"+
						"<input type=\"hidden\" id=\"iptAns2D\" value=0 />"+
					"</div></td>"+
					"<td background=\"../img/bg_chek.png\" width=\"33\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
					"<td width=\"38\" align=\"right\" valign=\"middle\"><span class=\"texto_1\"><strong>5.</strong></span></td>"+
					"<td width=\"39\" align=\"center\" valign=\"middle\"><object id=\"FlashID11\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"29\" height=\"27\">"+
					  "<param name=\"movie\" value=\"../swf/L1/L1_Exe_10/btn_L1_exer_10_e.swf\" />"+
					  "<param name=\"quality\" value=\"high\" />"+
					  "<param name=\"wmode\" value=\"transparent\" />"+
					  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
					  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
					  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
					  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
					  "<!--[if !IE]>-->"+
					  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_Exe_10/btn_L1_exer_10_e.swf\" width=\"29\" height=\"27\">"+
						"<!--<![endif]-->"+
						"<param name=\"quality\" value=\"high\" />"+
						"<param name=\"wmode\" value=\"transparent\" />"+
						"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
						"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
						"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
						"<div>"+
						  "<h4>El contenido de esta página requiere una versión más reciente de Adobe Flash Player.</h4>"+
						  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
						"</div>"+
						"<!--[if !IE]>-->"+
					  "</object>"+
					  "<!--<![endif]-->"+
					"</object></td>"+
					"<td width=\"110\" align=\"center\" valign=\"middle\"><div id=\"divAns5S\">"+
						"<a href=\"#\" onclick=\"mostrarAnsL1Ex10(5,'S')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image42','','../img/img_L1_same.png',1)\">"+
							"<img src=\"../img/img_L1_same2.png\" name=\"Image42\" width=\"106\" height=\"36\" border=\"0\" id=\"Image42\" />"+
						"</a>"+
						"<input type=\"hidden\" id=\"iptAns5S\" value=0 />"+
					"</div></td>"+
					"<td width=\"109\" align=\"center\" valign=\"middle\"><div id=\"divAns5D\">"+
						"<a href=\"#\" onclick=\"mostrarAnsL1Ex10(5,'D')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image34','','../img/img_L1_diferent.png',1)\">"+
							"<img src=\"../img/img_L1_diferent2.png\" name=\"Image34\" width=\"106\" height=\"36\" border=\"0\" id=\"Image34\" />"+
						"</a>"+
						"<input type=\"hidden\" id=\"iptAns5D\" value=0 />"+
					"</div></td>"+
					"<td width=\"33\" align=\"center\" valign=\"middle\" background=\"../img/bg_chek.png\">&nbsp;</td>"+
				  "</tr>"+
				  "<tr>"+
					"<td width=\"15\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong>3.</strong></td>"+
					"<td width=\"40\" height=\"50\" align=\"center\" valign=\"middle\"><object id=\"FlashID9\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"29\" height=\"27\">"+
					  "<param name=\"movie\" value=\"../swf/L1/L1_Exe_10/btn_L1_exer_10_c.swf\" />"+
					  "<param name=\"quality\" value=\"high\" />"+
					  "<param name=\"wmode\" value=\"transparent\" />"+
					  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
					  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
					  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
					  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
					  "<!--[if !IE]>-->"+
					  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_Exe_10/btn_L1_exer_10_c.swf\" width=\"29\" height=\"27\">"+
						"<!--<![endif]-->"+
						"<param name=\"quality\" value=\"high\" />"+
						"<param name=\"wmode\" value=\"transparent\" />"+
						"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
						"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
						"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
						"<div>"+
						  "<h4>El contenido de esta página requiere una versión más reciente de Adobe Flash Player.</h4>"+
						  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
						"</div>"+
						"<!--[if !IE]>-->"+
					  "</object>"+
					  "<!--<![endif]-->"+
					"</object></td>"+
					"<td width=\"106\"><div id=\"divAns3S\">"+
						"<a href=\"#\" onclick=\"mostrarAnsL1Ex10(3,'S')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image41','','../img/img_L1_same.png',1)\">"+
							"<img src=\"../img/img_L1_same2.png\" name=\"Image41\" width=\"106\" height=\"36\" border=\"0\" id=\"Image41\" />"+
						"</a>"+
						"<input type=\"hidden\" id=\"iptAns3S\" value=0 />"+
					"</div></td>"+
					"<td width=\"106\"><div id=\"divAns3D\">"+
						"<a href=\"#\" onclick=\"mostrarAnsL1Ex10(3,'D')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image39','','../img/img_L1_diferent.png',1)\">"+
							"<img src=\"../img/img_L1_diferent2.png\" name=\"Image39\" width=\"106\" height=\"36\" border=\"0\" id=\"Image39\" />"+
						"</a>"+
						"<input type=\"hidden\" id=\"iptAns3D\" value=0 />"+
					"</div></td>"+
					"<td background=\"../img/bg_chek.png\" width=\"33\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
					"<td width=\"38\" align=\"right\" valign=\"middle\"><span class=\"texto_1\"><strong>6.</strong></span></td>"+
					"<td width=\"39\" align=\"center\" valign=\"middle\"><object id=\"FlashID12\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"29\" height=\"27\">"+
					  "<param name=\"movie\" value=\"../swf/L1/L1_Exe_10/btn_L1_exer_10_f.swf\" />"+
					  "<param name=\"quality\" value=\"high\" />"+
					  "<param name=\"wmode\" value=\"transparent\" />"+
					  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
					  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
					  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
					  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
					  "<!--[if !IE]>-->"+
					  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_Exe_10/btn_L1_exer_10_f.swf\" width=\"29\" height=\"27\">"+
						"<!--<![endif]-->"+
						"<param name=\"quality\" value=\"high\" />"+
						"<param name=\"wmode\" value=\"transparent\" />"+
						"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
						"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
						"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
						"<div>"+
						  "<h4>El contenido de esta página requiere una versión más reciente de Adobe Flash Player.</h4>"+
						  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
						"</div>"+
						"<!--[if !IE]>-->"+
					  "</object>"+
					  "<!--<![endif]-->"+
					"</object></td>"+
					"<td width=\"110\" align=\"center\" valign=\"middle\"><div id=\"divAns6S\">"+
						"<a href=\"#\" onclick=\"mostrarAnsL1Ex10(6,'S')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image43','','../img/img_L1_same.png',1)\">"+
							"<img src=\"../img/img_L1_same2.png\" name=\"Image43\" width=\"106\" height=\"36\" border=\"0\" id=\"Image43\" />"+
						"</a>"+
						"<input type=\"hidden\" id=\"iptAns6S\" value=0 />"+
					"</div></td>"+
					"<td width=\"109\" align=\"center\" valign=\"middle\"><div id=\"divAns6D\">"+
						"<a href=\"#\" onclick=\"mostrarAnsL1Ex10(6,'D')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image35','','../img/img_L1_diferent.png',1)\">"+
							"<img src=\"../img/img_L1_diferent2.png\" name=\"Image35\" width=\"106\" height=\"36\" border=\"0\" id=\"Image35\" />"+
						"</a>"+
						"<input type=\"hidden\" id=\"iptAns6D\" value=0 />"+
					"</div></td>"+
					"<td width=\"33\" align=\"center\" valign=\"middle\" background=\"../img/bg_chek.png\">&nbsp;</td>"+
				  "</tr>"+
				"</table></td>"+
			  "</tr><input type=\"hidden\" id=\"vez\" value="+vez+" />"+
			  "<input type=\"hidden\" id=\"inptscore\" name=\"inptscore\" value="+varscore+"/>"+
			"</table>";	
		}
		$('#divTblE10').html(html);
	}
}

function actualizarBtnL1E10(idBtn)
{
	if(idBtn == 3)
		btn = "<table width=\"128\" border=\"0\" cellspacing=\"0\">"+
            "<tr>"+
              "<td width=\"40\" height=\"31\" align=\"center\" valign=\"middle\"><img src=\"../img/8.btn_chulito_desab.png\" name=\"Image19\" width=\"25\" height=\"25\" border=\"0\" id=\"Image19\" /></td>"+
              "<td width=\"45\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E10(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image20','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image20\" width=\"25\" height=\"25\" border=\"0\" id=\"Image20\" /></a></td>"+
              "<td width=\"43\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E10(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image21','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image21\" width=\"29\" height=\"25\" border=\"0\" id=\"Image21\" /></a></td>"+
            "</tr>"+
          "</table>";
	else
		btn = "<table width=\"128\" border=\"0\" cellspacing=\"0\">"+
            "<tr>"+
              "<td width=\"40\" height=\"31\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E10(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image19','','../img/8.btn_chulito2.png',1)\"><img src=\"../img/8.btn_chulito.png\" name=\"Image19\" width=\"25\" height=\"25\" border=\"0\" id=\"Image19\" /></a></td>"+
              "<td width=\"45\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E10(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image20','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image20\" width=\"25\" height=\"25\" border=\"0\" id=\"Image20\" /></a></td>"+
              "<td width=\"43\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E10(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image21','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image21\" width=\"29\" height=\"25\" border=\"0\" id=\"Image21\" /></a></td>"+
            "</tr>"+
          "</table>";
			
	$('#divBtn').html(btn);
}

/* Exercise 10 */

/* Quiz */
function verificarL1Q1(idBtn)
{
	ansL1Q1A = $("#ansL1Q1A").val();
	ansL1Q1B = $("#ansL1Q1B").val();
	ansL1Q1C = $("#ansL1Q1C").val();
	ansL1Q1D = $("#ansL1Q1D").val();
	ansL1Q1E = $("#ansL1Q1E").val();
	
	varscore = $("#inptscore").attr("value");
	
	doLMSSetValue("cmi.core.score.min", 0);
	doLMSSetValue("cmi.core.score.max", 100);
	
	vez = $("#vez").val();
	
	img = "";
	
	if(idBtn!= 3 && ansL1Q1A == "" && ansL1Q1B == "" && ansL1Q1C == "" && ansL1Q1D == "" && ansL1Q1E == "")
		alert("You must write the answers.");
	else{
		if(idBtn == 1)
		{
			if((ansL1Q1B == "Peter, this is my best friend, Catherine." || ansL1Q1B == "Catherine, this is my best friend, Peter.") && ansL1Q1A == "Mrs. Taylor, I'd like you to meet my father, Jose Fandino."){
				if(ansL1Q1C == "Hi. How are you doing?" && ansL1Q1D == "It's nice to see you, too" && ansL1Q1E == "Are your children at school?"){ //){
					img = "good";
					varscore = parseFloat(varscore) + 100;
				}
				else 
					img = "good_No";
			}
			else 
				img = "good_No";
				
			errorTxt3 = doLMSSetValue("cmi.core.score.raw", varscore);
		
			if(varscore >= "80"){
				errorTxt2 = doLMSSetValue("cmi.core.lesson_status", "passed");
			}
			else{
				errorTxt2 = doLMSSetValue("cmi.core.lesson_status", "failed");
			}
			doLMSCommit();
			actualizardivCalL1E2(img, varscore);

		}
		else{
			varscore = 0;
			if(idBtn == 3)
			{
				valueA = "Mrs. Taylor, I'd like you to meet my father, Jose Fandino.";
				valueB = "Peter, this is my best friend, Catherine. / Catherine, this is my best friend, Peter.";
				valueC = "Hi. How are you doing?";
				valueD = "It's nice to see you, too";
				valueE = "Are your children at school?";
				actualizarBtnL1Q1(idBtn);
			}	
			else if(idBtn == 2){
				valueA = "";
				valueB = "";
				valueC = "";
				valueD = "";
				valueE = "";
				if(vez >= 2)
					actualizarBtnL1Q1(idBtn);
				vez = parseInt(vez) + 1;
			}
				
			html = "<table align=\"center\" width=\"750\" border=\"0\">"+
					  "<tr>"+
						"<td width=\"405\" height=\"254\" align=\"left\" valign=\"top\"><table align=\"center\" width=\"363\" border=\"0\" cellspacing=\"0\">"+
						  "<tr>"+
							"<td width=\"15\" height=\"72\" align=\"left\" valign=\"bottom\"><strong class=\"texto_3\">1.</strong></td>"+
							"<td width=\"81\" align=\"center\" valign=\"bottom\" class=\"texto_1\">Mrs. Taylor</td>"+
							"<td width=\"8\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
							"<td width=\"60\" align=\"center\" valign=\"bottom\" class=\"texto_1\">to meet</td>"+
							"<td width=\"7\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
							"<td width=\"24\" align=\"center\" valign=\"bottom\" class=\"texto_1\"> like</td>"+
							"<td width=\"6\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
							"<td width=\"47\" align=\"center\" valign=\"bottom\" class=\"texto_1\"> father </td>"+
							"<td width=\"6\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
							"<td width=\"32\" align=\"center\" valign=\"bottom\" class=\"texto_1\">you </td>"+
							"<td width=\"6\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
							"<td width=\"22\" align=\"center\" valign=\"bottom\" class=\"texto_1\">my</td>"+
							"<td width=\"5\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
						  "</tr>"+
						"</table>"+						
						"<table align=\"center\" width=\"363\" border=\"0\" cellspacing=\"0\">"+
						  "<tr>"+
							"<td width=\"16\" height=\"25\" align=\"left\" valign=\"bottom\">&nbsp;</td>"+
							"<td width=\"100\" align=\"center\" valign=\"bottom\" class=\"texto_1\">Jose Fandino </td>"+
							"<td width=\"11\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
							"<td width=\"228\" align=\"left\" valign=\"bottom\" class=\"texto_1\">I'd.</td>"+
							"</tr>"+
						"</table>"+
						"<table align=\"center\" width=\"363\" border=\"0\" cellspacing=\"0\">"+
						  "<tr>"+
							"<td width=\"16\" height=\"25\" align=\"left\" valign=\"bottom\">&nbsp;</td>"+
							"<td width=\"329\" align=\"center\" valign=\"bottom\" class=\"texto_1\">"+
							  "<input name=\"ansL1Q1A\" type=\"text\" class=\"raya_bg_cienPorcien\" id=\"ansL1Q1A\" value=\""+valueA+"\" />"+
							"</td>"+
							"<td width=\"12\" align=\"left\" valign=\"bottom\" class=\"texto_1\"></td>"+
							"</tr>"+
						"</table>"+
						"<table align=\"center\" width=\"363\" border=\"0\" cellspacing=\"0\">"+
						  "<tr>"+
							"<td width=\"15\" height=\"72\" align=\"left\" valign=\"bottom\"><strong class=\"texto_3\">2.</strong></td>"+
							"<td width=\"36\" align=\"center\" valign=\"bottom\" class=\"texto_2\">Peter</td>"+
							"<td width=\"8\" align=\"center\" valign=\"bottom\" class=\"texto_1\">/</td>"+
							"<td width=\"34\" align=\"center\" valign=\"bottom\" class=\"texto_2\">from</td>"+
							"<td width=\"6\" align=\"center\" valign=\"bottom\" class=\"texto_1\">/</td>"+
							"<td width=\"25\" align=\"center\" valign=\"bottom\" class=\"texto_2\">this</td>"+
							"<td width=\"7\" align=\"center\" valign=\"bottom\" class=\"texto_1\">/</td>"+
							"<td width=\"42\" align=\"center\" valign=\"bottom\" class=\"texto_2\"> best</td>"+
							"<td width=\"7\" align=\"center\" valign=\"bottom\" class=\"texto_1\">/</td>"+
							"<td width=\"28\" align=\"center\" valign=\"bottom\" class=\"texto_2\">my</td>"+
							"<td width=\"7\" align=\"center\" valign=\"bottom\" class=\"texto_1\">/</td>"+
							"<td width=\"46\" align=\"center\" valign=\"bottom\" class=\"texto_2\"> friend </td>"+
							"<td width=\"8\" align=\"center\" valign=\"bottom\" class=\"texto_1\">/</td>"+
							"<td width=\"66\" align=\"center\" valign=\"bottom\" class=\"texto_2\">Catherine.</td>"+
						  "</tr>"+
						"</table>"+
						"<table align=\"center\" width=\"363\" border=\"0\" cellspacing=\"0\">"+
						  "<tr>"+
							"<td width=\"16\" height=\"30\" align=\"left\" valign=\"bottom\">&nbsp;</td>"+
							"<td width=\"329\" align=\"center\" valign=\"bottom\" class=\"texto_1\">"+
							  "<input name=\"ansL1Q1B\" type=\"text\" class=\"raya_bg_cienPorcien2\" id=\"ansL1Q1B\" value=\""+valueB+"\" />"+
							"</td>"+
							"<td width=\"12\" align=\"left\" valign=\"bottom\" class=\"texto_1\"></td>"+
							"</tr>"+
						"</table>"+
						"</td>"+
						"<td width=\"1\" align=\"right\" class=\"bg_color1\"></td>"+
						"<td width=\"326\" align=\"center\" valign=\"top\"><table align=\"center\" width=\"229\" border=\"0\" cellspacing=\"0\">"+
						  "<tr>"+
							"<td width=\"15\" height=\"42\" align=\"left\" valign=\"bottom\"><strong class=\"texto_3\">3.</strong></td>"+
							"<td width=\"29\" align=\"center\" valign=\"bottom\" class=\"texto_1\">Hi</td>"+
							"<td width=\"6\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
							"<td width=\"29\" align=\"center\" valign=\"bottom\" class=\"texto_1\">you</td>"+
							"<td width=\"8\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
							"<td width=\"44\" align=\"center\" valign=\"bottom\" class=\"texto_1\"> doing</td>"+
							"<td width=\"7\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
							"<td width=\"39\" align=\"center\" valign=\"bottom\" class=\"texto_1\"> how</td>"+
							"<td width=\"7\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
							"<td width=\"27\" align=\"center\" valign=\"bottom\" class=\"texto_1\">are</td>"+
							"</tr>"+
						"</table>"+						
						"<table align=\"center\" width=\"238\" border=\"0\" cellspacing=\"0\">"+
						  "<tr>"+
							"<td width=\"236\" height=\"33\" align=\"center\" valign=\"bottom\" class=\"texto_1\">"+
							  "<input name=\"ansL1Q1C\" type=\"text\" class=\"raya_bg_cienPorcien\" id=\"ansL1Q1C\" value=\""+valueC+"\" />"+
							"</td>"+
							"</tr>"+
						"</table>"+
						"<table align=\"center\" width=\"229\" border=\"0\" cellspacing=\"0\">"+
						  "<tr>"+
							"<td width=\"15\" height=\"42\" align=\"left\" valign=\"bottom\"><strong class=\"texto_3\">4.</strong></td>"+
							"<td width=\"29\" align=\"center\" valign=\"bottom\" class=\"texto_2\">to</td>"+
							"<td width=\"6\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
							"<td width=\"29\" align=\"center\" valign=\"bottom\" class=\"texto_2\">you</td>"+
							"<td width=\"8\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
							"<td width=\"44\" align=\"center\" valign=\"bottom\" class=\"texto_2\"> nice</td>"+
							"<td width=\"7\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
							"<td width=\"39\" align=\"center\" valign=\"bottom\" class=\"texto_2\"> It's</td>"+
							"<td width=\"7\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
							"<td width=\"27\" align=\"center\" valign=\"bottom\" class=\"texto_2\">see</td>"+
							"</tr>"+
						"</table>"+
						"<table align=\"center\" width=\"238\" border=\"0\" cellspacing=\"0\">"+
						  "<tr>"+
							"<td width=\"272\" height=\"33\" align=\"center\" valign=\"bottom\" class=\"texto_1\">"+
							  "<input name=\"ansL1Q1D\" type=\"text\" class=\"raya_bg_cienPorcien2\" id=\"ansL1Q1D\" value=\""+valueD+"\" />"+
							"</td>"+
							"</tr>"+
						"</table>"+
						"<table align=\"center\" width=\"229\" border=\"0\" cellspacing=\"0\">"+
						  "<tr>"+
							"<td width=\"15\" height=\"42\" align=\"left\" valign=\"bottom\"><strong class=\"texto_3\">5.</strong></td>"+
							"<td width=\"29\" align=\"center\" valign=\"bottom\" class=\"texto_1\">See</td>"+
							"<td width=\"6\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
							"<td width=\"29\" align=\"center\" valign=\"bottom\" class=\"texto_1\">on</td>"+
							"<td width=\"8\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
							"<td width=\"44\" align=\"center\" valign=\"bottom\" class=\"texto_1\"> bye</td>"+
							"<td width=\"7\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
							"<td width=\"39\" align=\"center\" valign=\"bottom\" class=\"texto_1\"> Monday</td>"+
							"<td width=\"7\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
							"<td width=\"27\" align=\"center\" valign=\"bottom\" class=\"texto_1\">you</td>"+
							"</tr>"+
						"</table>"+
						"<table align=\"center\" width=\"238\" border=\"0\" cellspacing=\"0\">"+
						  "<tr>"+
							"<td width=\"238\" height=\"33\" align=\"center\" valign=\"bottom\" class=\"texto_1\">"+
							  "<input name=\"ansL1Q1E\" type=\"text\" class=\"raya_bg_cienPorcien\" id=\"ansL1Q1E\" value=\""+valueE+"\" />"+
							"</td>"+
							"</tr>"+
						"</table>"+
						"</td>"+
					  "</tr>"+
					"</table><input type=\"hidden\" id=\"vez\" value="+vez+" />";
		
			$('#divL1Q1').html(html); 
		}
		actualizardivCalL1Q1(img, varscore);
	}
}

function actualizarBtnL1Q1(idBtn)
{
	if(idBtn == 3)
		btn = "<table width=\"128\" border=\"0\" cellspacing=\"0\">"+
            "<tr>"+
              "<td width=\"40\" height=\"31\" align=\"center\" valign=\"middle\"><img src=\"../img/8.btn_chulito_desab.png\" name=\"Image19\" width=\"25\" height=\"25\" border=\"0\" id=\"Image19\" /></td>"+
              "<td width=\"45\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1Q1(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image20','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image20\" width=\"25\" height=\"25\" border=\"0\" id=\"Image20\" /></a></td>"+
              "<td width=\"43\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1Q1(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image21','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image21\" width=\"29\" height=\"25\" border=\"0\" id=\"Image21\" /></a></td>"+
            "</tr>"+
          "</table>";
	else
		btn = "<table width=\"128\" border=\"0\" cellspacing=\"0\">"+
            "<tr>"+
              "<td width=\"40\" height=\"31\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1Q1(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image19','','../img/8.btn_chulito2.png',1)\"><img src=\"../img/8.btn_chulito.png\" name=\"Image19\" width=\"25\" height=\"25\" border=\"0\" id=\"Image19\" /></a></td>"+
              "<td width=\"45\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1Q1(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image20','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image20\" width=\"25\" height=\"25\" border=\"0\" id=\"Image20\" /></a></td>"+
              "<td width=\"43\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1Q1(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image21','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image21\" width=\"29\" height=\"25\" border=\"0\" id=\"Image21\" /></a></td>"+
            "</tr>"+
          "</table>";
			
	$('#divBtn').html(btn);
}

function actualizardivCalL1Q1(img, iptScore)
{
	if(img != "")
		btn = "<img src=\"../img/"+img+".png\" width=\"30\" height=\"30\" />"+
				"<input type=\"hidden\" id=\"inptscore\" name=\"inptscore\" value="+iptScore+" />";
	else
		btn = "&nbsp;<input type=\"hidden\" id=\"inptscore\" name=\"inptscore\" value="+iptScore+" />";
	
	$('#divCalL1Q1').html(btn);
}
/* Quiz */


/* Quiz Part 2 */
function cambiarDivL1Q2(idQst)
{
	if(idQst == 1)
	{
		imgTit = "img_L1_Quiz2";
		jpg = "art-1_1_quiz-b";
		tblBtn = "<table width=\"64\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"64\" height=\"62\" align=\"left\" valign=\"bottom\"><a href=\"#\" onclick=\"cambiarDivL1Q2(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image11','','../img/btn_1a_2.png',1)\"><img src=\"../img/btn_1a_2.png\" name=\"Image11\" width=\"53\" height=\"40\" border=\"0\" id=\"Image11\" /></a></td>"+
			  "</tr>"+
				"<td class=\"div_numV\"><img src=\"../img/9.img_divivionHor.png\" width=\"40\" height=\"3\" /></td>"+
			  "<tr>"+
				"<td align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Q2(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image12','','../img/btn_2a_2.png',1)\"><img src=\"../img/btn_2a_1.png\" name=\"Image12\" width=\"53\" height=\"40\" border=\"0\" id=\"Image12\" /></a></td>"+
			  "</tr>"+
			"</table>";
	}
	else if(idQst == 2)
	{
		imgTit = "img_L1_Quiz3";
		jpg = "art-1_1_quiz-c";
		tblBtn = "<table width=\"64\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"64\" height=\"62\" align=\"left\" valign=\"bottom\"><a href=\"#\" onclick=\"cambiarDivL1Q2(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image11','','../img/btn_1a_2.png',1)\"><img src=\"../img/btn_1a_1.png\" name=\"Image11\" width=\"53\" height=\"40\" border=\"0\" id=\"Image11\" /></a></td>"+
			  "</tr>"+
				"<td class=\"div_numV\"><img src=\"../img/9.img_divivionHor.png\" width=\"40\" height=\"3\" /></td>"+
			  "<tr>"+
				"<td align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Q2(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image12','','../img/btn_2a_2.png',1)\"><img src=\"../img/btn_2a_2.png\" name=\"Image12\" width=\"53\" height=\"40\" border=\"0\" id=\"Image12\" /></a></td>"+
			  "</tr>"+
			"</table>";
	}
	tbl = "<table width=\"347\" border=\"0\">"+
	  "<tr>"+
		"<td width=\"341\"><img src=\"../img/"+imgTit+".png\" width=\"336\" height=\"37\" /></td>"+
	  "</tr>"+
	"</table>"+
		"<table align=\"center\" width=\"363\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">"+
		  "<tr>"+
			"<td width=\"232\" height=\"127\" align=\"left\" valign=\"bottom\"><img src=\"../jpg/"+jpg+".png\" width=\"292\" height=\"242\" /></td>"+
			"<td width=\"127\" align=\"left\" valign=\"top\" class=\"texto_1\">"+tblBtn+"</td>"+
			"</tr>"+
	  "</table>";
	$('#divTblQ2').html(tbl);
}
/* Quiz Part 2 */
