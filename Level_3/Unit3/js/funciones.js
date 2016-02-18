function cargarCabeza(idLss, idExe)
{
	selLess = listarLss(idLss);
	//selExe = listarExer(idLss);
	selExe = "";
	res = '<table align="center" width="730" border="0" cellspacing="0">'+
  '<tr>'+
    '<td width="136" height="95" align="left" valign="middle"><img src="../img/1.Logo.png" width="115" height="66" usemap="#Map" border="0" /></td>'+
    '<td width="590" align="right" valign="middle" background="../img/3.bg_heder.png"><table width="556" border="0">'+
      '<tr>'+
        '<td width="110" height="63" align="center" valign="bottom">'+
          '<select name="select" class="menu" id="select" onChange="cambiarUnit(this.value);">'+
            '<option value=\'1\' selected>Unit 1</option>'+
            '<option value=\'2\'>Unit 2</option>'+
            '<option value=\'3\'>Unit 3</option>'+
            '<option value=\'4\'>Unit 4</option>'+
            '<option value=\'5\'>Unit 5</option>'+
            '<option value=\'5\'>Unit 6</option>'+
            '<option value=\'7\'>Unit 7</option>'+
            '<option value=\'8\'>Unit 8</option>'+
            '<option value=\'9\'>Unit 9</option>'+
            '<option value=\'10\'>Unit 10</option>'+
            '<option value=\'11\'>Unit 11</option>'+
            '<option value=\'12\'>Unit 12</option>'+
          '</select>'+
        '</td>'+
        '<td width="115" align="center" valign="bottom">'+
          '<select name="select2" class="menu" id="selLesson" onChange=\'listarExer(this.value);\'>'+selLess+
          '</select>'+
        '</td>'+
        '<td width="120" align="center" valign="bottom">'+
		'<div id=\'divSelExer\'>'+
          '<select name="select3" class="menuA" id="selExercise" onChange="mostrarDivPrinc(this.value);">'+selExe+
          '</select>'+
		'</div>'+
        '</td>'+
        '<td width="108" align="center" valign="bottom"><form id="form4" name="form4" method="post" action="">'+
          '<select name="select4" class="menu" id="select4" onChange="listarBanco(this.value);">'+
          '<option></option>'+
          '<option value=\'1\'>Bank 1</option>'+
          '<option value=\'2\'>Bank 2</option>'+
          '<option value=\'3\'>Bank 3</option>'+
          '</select>'+
        '</td>'+
        '<td width="81" align="center" valign="middle"><a href="../juegos/L1_game_1.html" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage(\'Image7\',\'\',\'../img/7.btn_game_2.png\',1)"><img src="../img/7.btn_game_1.png" name="Image7" width="62" height="52" border="0" id="Image7" /></a></td>'+
      '</tr>'+
    '</table></td>'+
  '</tr>'+
'</table>';
	
	$('#header').html(res);
	listarExer(idLss, idExe);
}
function listarBanco(idbank){
    
	if (idbank == 1)
		document.location.href='../language_banks/L1_Bank_1.html';
	else if (idbank == 2)
		document.location.href='../language_banks/L2_Bank_1.html';
	else if (idbank == 3)
		document.location.href='../language_banks/L3_Bank_1.html';
    
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
	opt = "<select name=\"select3\" class=\"menu\" id=\"selExercise\" onChange=\"mostrarDivPrinc(this.value);\">"+
			"<option value='0'></option>";
	if (idLss == 0)
		text = "";
	else if (idLss == 100)
		document.location.href='index.html';
	else if (idLss == 1)
	{
		for (i=2; i<=24; i++)
		{
			text = "Exercise";
			if (i == 2)
				text = "Goals";
                        else if (i == 3)
				text = "Vocabulary 1";
                        else if (i == 4)
				text = text+" 1";
                        else if (i == 5)
				text = text+" 2";
			else if (i == 6)
				text = text+" 3";
                        else if (i == 7)
				text = "Vocabulary 2";
			else if (i == 8)
				text = text+" 4";
			else if (i == 9)
				text = text+" 5";
			else if (i == 10)
				text = text+" 6";
                        else if (i == 11)
				text = "Vocabulary 3";
                        else if (i == 12)
				text = "Vocabulary 4";
			else if (i == 13)
				text = text+" 7";
			else if (i == 14)
				text = text+" 8";
			else if (i == 15)
				text = "Grammar 1";
			else if (i == 16)
				text = text+" 9";
			else if (i == 17)
				text = text+" 10";
                        else if (i == 18)
				text = "Grammar 2";
			else if (i == 19)
				text = text+" 11";
			else if (i == 20)
				text = text+" 12";
                        else if (i == 21)
				text = text+" 13";
                        else if (i == 22)
				text = text+" 14";
                        else if (i == 23)
				text = text+" 15";
			else if (i == 24)
				text = "Quiz";
				
			//opt = opt + "<option value=\""+i+"\">"+text+"</option>";
			
			if (i == idExer)
				opt += '<option value="'+i+'" selected>'+text+'</option>';	
			else
				opt += '<option value="'+i+'">'+text+'</option>';
		}
	}
	else if(idLss == 2)
	{
		for	(i=25; i<=43; i++){		
			text = "Exercise";
			if (i == 25)
				text = "Goals";
			else if (i == 26)
				text = "Listen";
			else if (i == 27)
				text = text+" 1";
			else if (i == 28)
				text = "Vocabulary 1";
			else if (i == 29)
				text = text+" 2";
                        else if (i == 30)
				text = text+" 3";
			else if (i == 31)
				text = "Vocabulary 2";
			else if (i == 32)
				text = text+" 4";
			else if (i == 33)
				text = text+" 5";
			else if (i == 34) 
				text = "Vocabulary 3";
			else if (i == 35)
				text = text+" 6";
			else if (i == 36)
				text = text+" 7";
			else if (i == 37)
				text = "Grammar 1";
			else if (i == 38)
				text = text+" 8";
			else if (i == 39)
				text = text+" 9";
			else if (i == 40)
				text = text+" 10";
			else if (i == 41)
				text = text+" 11";
			else if (i == 42)
				text = text+" 12";
			else if (i == 43)
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
		for (i=44; i<=59; i++)
		{
			text = "Exercise";
			if (i == 44)
				text = "Goals";
			else if (i == 45)
				text = "Listen";
			else if (i == 46)
				text = text+" 1";
			else if (i == 47)
				text = "Vocabulary 1";
			else if (i == 48)
				text = text+" 2";
			else if (i == 49)
				text = text+" 3";
			else if (i == 50)
				text = text+" 4";
			else if (i == 51)
				text = "Vocabulary 2";
			else if (i == 52)
				text = text+" 5";
			else if (i == 53)
				text = "Pronunciation";
			else if (i == 54)
				text = text+" 6";
			else if (i == 55)
				text = text+" 7";
			else if (i == 56)
				text = text+" 8";
			else if (i == 57)
				text = text+" 9";
			else if (i == 58)
				text = text+" 10";
			else if (i == 59)
				text = "Quiz";

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
		document.location.href='L1_Vocabulary_1.html';
	else if (idL == 4)
		document.location.href='L1_exer_1-1.html';
	else if (idL == 5)
		document.location.href='L1_exer_2.html';
	else if (idL == 6)
		document.location.href='L1_exer_3.html';
	else if (idL == 7)
		document.location.href='L1_Vocabulary_2.html';
	else if (idL == 8)
		document.location.href='L1_exer_4-1.html';
	else if (idL == 9)
		document.location.href='L1_exer_5.html';
	else if (idL == 10)
		document.location.href='L1_exer_6.html';
	else if (idL == 11)
		document.location.href='L1_Vocabulary_3.html';
	else if (idL == 12)
		document.location.href='L1_Vocabulary_4.html';
	else if (idL == 13)
		document.location.href='L1_exer_7.html';
	else if (idL == 14)
		document.location.href='L1_exer_8.html';
	else if (idL == 15)
		document.location.href='L1_Grammar_1.html';
	else if (idL == 16)
		document.location.href='L1_exer_9.html';
	else if (idL == 17)
		document.location.href='L1_exer_10.html';
	else if (idL == 18)
		document.location.href='L1_Grammar_2.html';
	else if (idL == 19)
		document.location.href='L1_exer_11.html';
	else if (idL == 20)
		document.location.href='L1_exer_12-1.html';
	else if (idL == 21)
		document.location.href='L1_exer_13.html';
	else if (idL == 22)
		document.location.href='L1_exer_14-1.html';
	else if (idL == 23)
		document.location.href='L1_exer_15.html';
	else if (idL == 24)
		document.location.href='L1_Quiz-P1-1.html';
	else if (idL == 25)
		document.location.href='L2_goals.html';
	else if (idL == 26)
		document.location.href='L2_listen.html';
	else if (idL == 27)
		document.location.href='L2_Exer_1.html';
	else if (idL == 28)
		document.location.href='L2_Vocabulary_1.html';
	else if (idL == 29)
		document.location.href='L2_exer_2.html';
	else if (idL == 30)
		document.location.href='L2_exer_3.html';
	else if (idL == 31)
		document.location.href='L2_Vocabulary_2.html';
	else if (idL == 32)
		document.location.href='L2_exer_4.html';
	else if (idL == 33)
		document.location.href='L2_exer_5.html';
	else if (idL == 34)
		document.location.href='L2_Vocabulary_3.html';
	else if (idL == 35)
		document.location.href='L2_exer_6.html';
	else if (idL == 36)
		document.location.href='L2_exer_7-1.html';
	else if (idL == 37)
		document.location.href='L2_Grammar_1.html';
	else if (idL == 38)
		document.location.href='L2_exer_8.html';
	else if (idL == 39)
		document.location.href='L2_exer_9-1.html';
	else if (idL == 40)
		document.location.href='L2_exer_10.html';
	else if (idL == 41)
		document.location.href='L2_exer_11.html';
	else if (idL == 42)
		document.location.href='L2_exer_12.html';
	else if (idL == 43)
		document.location.href='L2_Quiz_P1-1.html';
	else if (idL == 44)
		document.location.href='L3_goals.html';
	else if (idL == 45)
		document.location.href='L3_listen.html';
	else if (idL == 46)
		document.location.href='L3_Exer_1.html';
	else if (idL == 47)
		document.location.href='L3_Vocabulary_1.html';
	else if (idL == 48)
		document.location.href='L3_exer_2.html';
	else if (idL == 49)
		document.location.href='L3_exer_3a.html';
	else if (idL == 50)
		document.location.href='L3_exer_4.html';
	else if (idL == 51)
		document.location.href='L3_Vocabulary_2.html';
	else if (idL == 52)
		document.location.href='L3_exer_5-1.html';
	else if (idL == 53)
		document.location.href='L3_exer_pronunciationA.html';
	else if (idL == 54)
		document.location.href='L3_exer_6.html';
	else if (idL == 55)
		document.location.href='L3_exer_7-1.html';
	else if (idL == 56)
		document.location.href='L3_exer_8.html';
	else if (idL == 57)
		document.location.href='L3_exer_9.html';
	else if (idL == 58)
		document.location.href='L3_exer_10.html';
	else if (idL == 59)
		document.location.href='';//Quiz
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
	$('#divEjem').hide();
	$('#closeDiv').hide();
	$('#opacoDiv').hide();
}

function verDivEje()
{
	$('#divEjem').show();
	$('#closeDiv').show();
	$('#opacoDiv').show();
}

/*function ocultarDiv()
{
	$('#divSwf').hide();
	$('#closeDiv').hide();
	$('#opacoDiv').hide();
}*/


/* Exercise 3 */
function mostrarAnsL1E3(idQst, idAns)
{
	if(idQst == 1)
	{
		if(idAns == 1){
			div = "divAns1";
			ans = "<a href=\"#\" onclick=\"mostrarAnsL1E3("+idQst+",1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../jpg/art-9_1_vb1_b_2.png',1)\">"+
						"<img src=\"../jpg/art-9_1_vb1_b_2.png\" name=\"Image15\" width=\"206\" height=\"184\" border=\"0\" id=\"Image15\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns1\" value=1 />";
					
			ipt2 = "iptAns2";	div2 = "divAns2";
			ipt3 = "iptAns3";	div3 = "divAns3";
		}
		else if (idAns == 2){
			div = "divAns2";
			ans = "<a href=\"#\" onclick=\"mostrarAnsL1E3("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image18','','../jpg/art-9_1_vb1_c_2.png',1)\">"+
						"<img src=\"../jpg/art-9_1_vb1_c_2.png\" name=\"Image18\" width=\"206\" height=\"184\" border=\"0\" id=\"Image18\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns2\" value=1 />";

			ipt2 = "iptAns1"; div2 = "divAns1";
			ipt3 = "iptAns3"; div3 = "divAns3";
		}
		else if (idAns == 3){
			div = "divAns3";
			ans = "<a href=\"#\" onclick=\"mostrarAnsL1E3("+idQst+",3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image19','','../jpg/art-9_1_vb1_e_2.png',1)\">"+
					"<img src=\"../jpg/art-9_1_vb1_e_2.png\" name=\"Image19\" width=\"206\" height=\"184\" border=\"0\" id=\"Image19\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns3\" value=1 />";
				
			ipt2 = "iptAns1"; div2 = "divAns1";
			ipt3 = "iptAns2"; div3 = "divAns2";
		}
	}	
	if(idQst == 2)
	{
		if(idAns == 1){
			div = "divAns1";
			ans = "<a href=\"#\" onclick=\"mostrarAnsL1E3("+idQst+",1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../jpg/art-9_1_vb1_d_2.png',1)\">"+
						"<img src=\"../jpg/art-9_1_vb1_d_2.png\" name=\"Image15\" width=\"206\" height=\"184\" border=\"0\" id=\"Image15\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns1\" value=1 />";
			ipt2 = "iptAns2";	div2 = "divAns2"; //idImg2 = "Image25";
			ipt3 = "iptAns3";	div3 = "divAns3"; //idImg3 = "Image30";
		}
		else if (idAns == 2){
			//ipt1 = "iptAns2";
			div = "divAns2";
			ans = "<a href=\"#\" onclick=\"mostrarAnsL1E3("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image18','','../jpg/art-9_1_vb1_e_2.png',1)\">"+
						"<img src=\"../jpg/art-9_1_vb1_e_2.png\" name=\"Image18\" width=\"206\" height=\"184\" border=\"0\" id=\"Image18\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns2\" value=1 />";
			ipt2 = "iptAns1"; div2 = "divAns1"; //idImg2 = "Image15";
			ipt3 = "iptAns3"; div3 = "divAns3"; //idImg3 = "Image30";
		}
		else if (idAns == 3){
			//ipt1 = "iptAns13";
			div = "divAns3";
			ans = "<a href=\"#\" onclick=\"mostrarAnsL1E3("+idQst+",3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image19','','../jpg/art-9_1_vb1_a_2.png',1)\">"+
					"<img src=\"../jpg/art-9_1_vb1_a_2.png\" name=\"Image19\" width=\"206\" height=\"184\" border=\"0\" id=\"Image19\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns3\" value=1 />";
			ipt2 = "iptAns1"; div2 = "divAns1"; //idImg2 = "Image15";
			ipt3 = "iptAns2"; div3 = "divAns2"; //idImg3 = "Image25";
		}
	}
	if(idQst == 3)
	{
		if(idAns == 1){
			div = "divAns1";
			ans = "<a href=\"#\" onclick=\"mostrarAnsL1E3("+idQst+",1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../jpg/art-9_1_vb1_c_2.png',1)\">"+
						"<img src=\"../jpg/art-9_1_vb1_c_2.png\" name=\"Image15\" width=\"206\" height=\"184\" border=\"0\" id=\"Image15\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns1\" value=1 />";
			ipt2 = "iptAns2";	div2 = "divAns2"; //idImg2 = "Image25";
			ipt3 = "iptAns3";	div3 = "divAns3"; //idImg3 = "Image30";
		}
		else if (idAns == 2){
			//ipt1 = "iptAns2";
			div = "divAns2";
			ans = "<a href=\"#\" onclick=\"mostrarAnsL1E3("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image18','','../jpg/art-9_1_vb1_d_2.png',1)\">"+
						"<img src=\"../jpg/art-9_1_vb1_d_2.png\" name=\"Image18\" width=\"206\" height=\"184\" border=\"0\" id=\"Image18\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns2\" value=1 />";
			ipt2 = "iptAns1"; div2 = "divAns1"; //idImg2 = "Image15";
			ipt3 = "iptAns3"; div3 = "divAns3"; //idImg3 = "Image30";
		}
		else if (idAns == 3){
			//ipt1 = "iptAns13";
			div = "divAns3";
			ans = "<a href=\"#\" onclick=\"mostrarAnsL1E3("+idQst+",3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image19','','../jpg/art-9_1_vb1_b_2.png',1)\">"+
					"<img src=\"../jpg/art-9_1_vb1_b_2.png\" name=\"Image19\" width=\"206\" height=\"184\" border=\"0\" id=\"Image19\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns3\" value=1 />";
			ipt2 = "iptAns1"; div2 = "divAns1"; //idImg2 = "Image15";
			ipt3 = "iptAns2"; div3 = "divAns2"; //idImg3 = "Image25";
		}
	}
	if(idQst == 4)
	{
		if(idAns == 1){
			div = "divAns1";
			ans = "<a href=\"#\" onclick=\"mostrarAnsL1E3("+idQst+",1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../jpg/art-9_1_vb1_a_2.png',1)\">"+
						"<img src=\"../jpg/art-9_1_vb1_a_2.png\" name=\"Image15\" width=\"206\" height=\"184\" border=\"0\" id=\"Image15\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns1\" value=1 />";
			ipt2 = "iptAns2";	div2 = "divAns2"; //idImg2 = "Image25";
			ipt3 = "iptAns3";	div3 = "divAns3"; //idImg3 = "Image30";
		}
		else if (idAns == 2){
			//ipt1 = "iptAns2";
			div = "divAns2";
			ans = "<a href=\"#\" onclick=\"mostrarAnsL1E3("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image18','','../jpg/art-9_1_vb1_c_2.png',1)\">"+
						"<img src=\"../jpg/art-9_1_vb1_c_2.png\" name=\"Image18\" width=\"206\" height=\"184\" border=\"0\" id=\"Image18\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns2\" value=1 />";
			ipt2 = "iptAns1"; div2 = "divAns1"; //idImg2 = "Image15";
			ipt3 = "iptAns3"; div3 = "divAns3"; //idImg3 = "Image30";
		}
		else if (idAns == 3){
			//ipt1 = "iptAns13";
			div = "divAns3";
			ans = "<a href=\"#\" onclick=\"mostrarAnsL1E3("+idQst+",3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image19','','../jpg/art-9_1_vb1_e_2.png',1)\">"+
					"<img src=\"../jpg/art-9_1_vb1_e_2.png\" name=\"Image19\" width=\"206\" height=\"184\" border=\"0\" id=\"Image19\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns3\" value=1 />";
			ipt2 = "iptAns1"; div2 = "divAns1"; //idImg2 = "Image15";
			ipt3 = "iptAns2"; div3 = "divAns2"; //idImg3 = "Image25";
		}
	}
	if(idQst == 5)
	{
		if(idAns == 1){
			div = "divAns1";
			ans = "<a href=\"#\" onclick=\"mostrarAnsL1E3("+idQst+",1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../jpg/art-9_1_vb1_b_2.png',1)\">"+
						"<img src=\"../jpg/art-9_1_vb1_b_2.png\" name=\"Image15\" width=\"206\" height=\"184\" border=\"0\" id=\"Image15\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns1\" value=1 />";
			ipt2 = "iptAns2";	div2 = "divAns2"; //idImg2 = "Image25";
			ipt3 = "iptAns3";	div3 = "divAns3"; //idImg3 = "Image30";
		}
		else if (idAns == 2){
			//ipt1 = "iptAns2";
			div = "divAns2";
			ans = "<a href=\"#\" onclick=\"mostrarAnsL1E3("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image18','','../jpg/art-9_1_vb1_a_2.png',1)\">"+
						"<img src=\"../jpg/art-9_1_vb1_a_2.png\" name=\"Image18\" width=\"206\" height=\"184\" border=\"0\" id=\"Image18\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns2\" value=1 />";
			ipt2 = "iptAns1"; div2 = "divAns1"; //idImg2 = "Image15";
			ipt3 = "iptAns3"; div3 = "divAns3"; //idImg3 = "Image30";
		}
		else if (idAns == 3){
			//ipt1 = "iptAns13";
			div = "divAns3";
			ans = "<a href=\"#\" onclick=\"mostrarAnsL1E3("+idQst+",3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image19','','../jpg/art-9_1_vb1_c_2.png',1)\">"+
					"<img src=\"../jpg/art-9_1_vb1_c_2.png\" name=\"Image19\" width=\"206\" height=\"184\" border=\"0\" id=\"Image19\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns3\" value=1 />";
			ipt2 = "iptAns1"; div2 = "divAns1"; //idImg2 = "Image15";
			ipt3 = "iptAns2"; div3 = "divAns2"; //idImg3 = "Image25";
		}
	}
	$('#'+div).html(ans);
	vez = $("#vez").val();
	if($("#"+ipt2).val() == 1){
		iptCl = ipt2; divCl = div2; //idImg = idImg2;
	}
	else if($("#"+ipt3).val() == 1){
		iptCl = ipt3;  divCl = div3; //idImg = idImg3;
	}
	else{
		iptCl = ""; divCl = ""; //idImg = "";
	}
	cleanAnsL1E3(idQst, iptCl, divCl);
}

function cleanAnsL1E3(idQst, ipt, div)// idImg)
{
	if(div != "" && ipt != "")
	{
		if(idQst == 1){
			if(div == 'divAns1')
				img = "<a href=\"#\" onclick=\"mostrarAnsL1E3(1,1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../jpg/art-9_1_vb1_b_2.png',1)\">"+
							"<img src=\"../jpg/art-9_1_vb1_b_1.png\" name=\"Image15\" width=\"206\" height=\"184\" border=\"0\" id=\"Image15\" />"+
						"</a>"+
						"<input type=\"hidden\" id=\"iptAns1\" value=0 />";
			else if(div == 'divAns2')
				img = "<a href=\"#\" onclick=\"mostrarAnsL1E3(1,2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image18','','../jpg/art-9_1_vb1_c_2.png',1)\">"+
						"<img src=\"../jpg/art-9_1_vb1_c_1.png\" name=\"Image18\" width=\"206\" height=\"184\" border=\"0\" id=\"Image18\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns2\" value=0 />";
			else if(div == 'divAns3')
				img = "<a href=\"#\" onclick=\"mostrarAnsL1E3(1,3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image19','','../jpg/art-9_1_vb1_e_2.png',1)\">"+
						"<img src=\"../jpg/art-9_1_vb1_e_1.png\" name=\"Image19\" width=\"206\" height=\"184\" border=\"0\" id=\"Image19\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns3\" value=0 />";
		}
		else if(idQst == 2){
			if(div == 'divAns1')
				img = "<a href=\"#\" onclick=\"mostrarAnsL1E3(2,1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../jpg/art-9_1_vb1_d_2.png',1)\">"+
							"<img src=\"../jpg/art-9_1_vb1_d_1.png\" name=\"Image15\" width=\"206\" height=\"184\" border=\"0\" id=\"Image15\" />"+
						"</a>"+
						"<input type=\"hidden\" id=\"iptAns1\" value=0 />";
			else if(div == 'divAns2')
				img = "<a href=\"#\" onclick=\"mostrarAnsL1E3(2,2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image18','','../jpg/art-9_1_vb1_e_2.png',1)\">"+
						"<img src=\"../jpg/art-9_1_vb1_e_1.png\" name=\"Image18\" width=\"206\" height=\"184\" border=\"0\" id=\"Image18\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns2\" value=0 />";
			else if(div == 'divAns3')
				img = "<a href=\"#\" onclick=\"mostrarAnsL1E3(2,3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image19','','../jpg/art-9_1_vb1_a_2.png',1)\">"+
						"<img src=\"../jpg/art-9_1_vb1_a_1.png\" name=\"Image19\" width=\"206\" height=\"184\" border=\"0\" id=\"Image19\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns3\" value=0 />";
		}
		else if(idQst == 3){
			if(div == 'divAns1')
				img = "<a href=\"#\" onclick=\"mostrarAnsL1E3(3,1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../jpg/art-9_1_vb1_c_2.png',1)\">"+
							"<img src=\"../jpg/art-9_1_vb1_c_1.png\" name=\"Image15\" width=\"206\" height=\"184\" border=\"0\" id=\"Image15\" />"+
						"</a>"+
						"<input type=\"hidden\" id=\"iptAns1\" value=0 />";
			else if(div == 'divAns2')
				img = "<a href=\"#\" onclick=\"mostrarAnsL1E3(3,2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image18','','../jpg/art-9_1_vb1_d_2.png',1)\">"+
						"<img src=\"../jpg/art-9_1_vb1_d_1.png\" name=\"Image18\" width=\"206\" height=\"184\" border=\"0\" id=\"Image18\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns2\" value=0 />";
			else if(div == 'divAns3')
				img = "<a href=\"#\" onclick=\"mostrarAnsL1E3(3,3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image19','','../jpg/art-9_1_vb1_b_2.png',1)\">"+
						"<img src=\"../jpg/art-9_1_vb1_b_1.png\" name=\"Image19\" width=\"206\" height=\"184\" border=\"0\" id=\"Image19\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns3\" value=0 />";
		}
		else if(idQst == 4){
			if(div == 'divAns1')
				img = "<a href=\"#\" onclick=\"mostrarAnsL1E3(4,1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../jpg/art-9_1_vb1_a_2.png',1)\">"+
							"<img src=\"../jpg/art-9_1_vb1_a_1.png\" name=\"Image15\" width=\"206\" height=\"184\" border=\"0\" id=\"Image15\" />"+
						"</a>"+
						"<input type=\"hidden\" id=\"iptAns1\" value=0 />";
			else if(div == 'divAns2')
				img = "<a href=\"#\" onclick=\"mostrarAnsL1E3(4,2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image18','','../jpg/art-9_1_vb1_c_2.png',1)\">"+
						"<img src=\"../jpg/art-9_1_vb1_c_1.png\" name=\"Image18\" width=\"206\" height=\"184\" border=\"0\" id=\"Image18\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns2\" value=0 />";
			else if(div == 'divAns3')
				img = "<a href=\"#\" onclick=\"mostrarAnsL1E3(4,3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image19','','../jpg/art-9_1_vb1_e_2.png',1)\">"+
						"<img src=\"../jpg/art-9_1_vb1_e_1.png\" name=\"Image19\" width=\"206\" height=\"184\" border=\"0\" id=\"Image19\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns3\" value=0 />";
		}
		else if(idQst == 5){
			if(div == 'divAns1')
				img = "<a href=\"#\" onclick=\"mostrarAnsL1E3(4,1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../jpg/art-9_1_vb1_b_2.png',1)\">"+
							"<img src=\"../jpg/art-9_1_vb1_b_1.png\" name=\"Image15\" width=\"206\" height=\"184\" border=\"0\" id=\"Image15\" />"+
						"</a>"+
						"<input type=\"hidden\" id=\"iptAns1\" value=0 />";
			else if(div == 'divAns2')
				img = "<a href=\"#\" onclick=\"mostrarAnsL1E3(4,2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image18','','../jpg/art-9_1_vb1_a_2.png',1)\">"+
						"<img src=\"../jpg/art-9_1_vb1_a_1.png\" name=\"Image18\" width=\"206\" height=\"184\" border=\"0\" id=\"Image18\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns2\" value=0 />";
			else if(div == 'divAns3')
				img = "<a href=\"#\" onclick=\"mostrarAnsL1E3(4,3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image19','','../jpg/art-9_1_vb1_c_2.png',1)\">"+
						"<img src=\"../jpg/art-9_1_vb1_c_1.png\" name=\"Image19\" width=\"206\" height=\"184\" border=\"0\" id=\"Image19\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns3\" value=0 />";
		}
		$('#'+div).html(img);
		actualizardivCalL1E3('');
	}	
}

function verificarL1E3(idQst, idBtn)
{	
	res = parseInt($("#iptAns1").val()) + parseInt($("#iptAns2").val()) + parseInt($("#iptAns3").val());
	vez = $("#vez").val();
	
	if(res == 0 && idBtn != 3)
		alert("You must select the answer.");
	else{
		if(idBtn == 1){
			switch (idQst){
				case 1:
					if($("#iptAns3").val() == 1 && $("#iptAns1").val() == 0 && $("#iptAns2").val() == 0)
						actualizardivCalL1E3('good');
					else
						actualizardivCalL1E3('good_No');
				break;
				case 2:
					if($("#iptAns1").val() == 0 && $("#iptAns2").val() == 0 && $("#iptAns3").val() == 1)
						actualizardivCalL1E3('good');
					else
						actualizardivCalL1E3('good_No');
				break;
				case 3:
					if($("#iptAns1").val() == 0 && $("#iptAns2").val() == 1 && $("#iptAns3").val() == 0)
						actualizardivCalL1E3('good');
					else
						actualizardivCalL1E3('good_No');
				break;
				case 4:
					if($("#iptAns1").val() == 0 && $("#iptAns2").val() == 1 && $("#iptAns3").val() == 0)
						actualizardivCalL1E3('good');
					else
						actualizardivCalL1E3('good_No');
				break;
				case 5:
					if($("#iptAns1").val() == 1 && $("#iptAns2").val() == 0 && $("#iptAns3").val() == 0)
						actualizardivCalL1E3('good');
					else
						actualizardivCalL1E3('good_No');
				break;
			}
		}
		else if(idBtn == 2){
			switch (idQst){
				case 1:
					img1 = "art-9_1_vb1_b";
					img2 = "art-9_1_vb1_c";
					img3 = "art-9_1_vb1_e";
					prev = 5;
					next = 2;
				break;
				case 2:
					img1 = "art-9_1_vb1_d";
					img2 = "art-9_1_vb1_e";
					img3 = "art-9_1_vb1_a";
					prev = 1;
					next = 3;
				break;
				case 3:
					img1 = "art-9_1_vb1_c";
					img2 = "art-9_1_vb1_d";
					img3 = "art-9_1_vb1_b";
					prev = 2;
					next = 4;
				break;
				case 4:
					img1 = "art-9_1_vb1_a";
					img2 = "art-9_1_vb1_c";
					img3 = "art-9_1_vb1_e";
					prev = 3;
					next = 5;
				break;
				case 5:
					img1 = "art-9_1_vb1_b";
					img2 = "art-9_1_vb1_a";
					img3 = "art-9_1_vb1_c";
					prev = 4;
					next = 1;
				break;
			}
			if(vez >= 1)
				actualizarBtnL1E3(idQst, idBtn);
			vez = parseInt(vez) + 1;
			tblImg = "<table align=\"center\" width=\"737\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"50\" height=\"183\" align=\"left\" valign=\"middle\"><a href=\"#\" onclick=\"cambiarDivL1Ex3("+prev+")\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image17','','../img/11.izq2.png',1)\"><img src=\"../img/11.izq.png\" name=\"Image17\" width=\"50\" height=\"55\" border=\"0\" id=\"Image17\" /></a></td>"+
				"<td width=\"206\" align=\"center\" valign=\"middle\"><div id=\"divAns1\">"+
					"<a href=\"#\" onclick=\"mostrarAnsL1E3("+idQst+",1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../jpg/"+img1+"_2.png',1)\">"+
						"<img src=\"../jpg/"+img1+"_1.png\" name=\"Image15\" width=\"206\" height=\"184\" border=\"0\" id=\"Image15\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns1\" value=0 />"+
				"</div></td>"+
				"<td width=\"206\" align=\"center\" valign=\"middle\"><div id=\"divAns2\">"+
					"<a href=\"#\" onclick=\"mostrarAnsL1E3("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image39','','../jpg/"+img2+"_2.png',1)\">"+
						"<img src=\"../jpg/"+img2+"_1.png\" name=\"Image39\" width=\"206\" height=\"184\" border=\"0\" id=\"Image39\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns2\" value=0 />"+
				"</div></td>"+
				"<td width=\"206\" align=\"center\" valign=\"middle\"><div id=\"divAns3\">"+
					"<a href=\"#\" onclick=\"mostrarAnsL1E3("+idQst+",3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image19','','../jpg/"+img3+"_2.png',1)\">"+
						"<img src=\"../jpg/"+img3+"_1.png\" name=\"Image19\" width=\"206\" height=\"184\" border=\"0\" id=\"Image19\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns3\" value=0 />"+
				"</div></td>"+
				"<td width=\"47\" align=\"right\" valign=\"middle\"><a href=\"#\" onclick=\"cambiarDivL1Ex3("+next+")\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/11.der2.png',1)\"><img src=\"../img/11.der.png\" name=\"Image16\" width=\"50\" height=\"55\" border=\"0\" id=\"Image16\" /></a></td>"+
			  "</tr><input type=\"hidden\" id=\"vez\" value="+vez+" />"+
			"</table>";
			$('#divTblImg').html(tblImg);
			actualizardivCalL1E3('');
		}
		else if(idBtn == 3)
		{
			switch (idQst){
				case 1:
					img1 = "art-9_1_vb1_b_1";
					img2 = "art-9_1_vb1_c_1";
					img3 = "art-9_1_vb1_e_2";
					img1_o = "art-9_1_vb1_b_2";
					img2_o = "art-9_1_vb1_c_2";
					img3_o = "art-9_1_vb1_e_2";
					val1 = 0;
					val2 = 0;
					val3 = 1;
					prev = 5;
					next = 2;
				break;
				case 2:
					img1 = "art-9_1_vb1_d_1";
					img2 = "art-9_1_vb1_e_1";
					img3 = "art-9_1_vb1_a_2";
					img1_o = "art-9_1_vb1_d_2";
					img2_o = "art-9_1_vb1_e_2";
					img3_o = "art-9_1_vb1_a_2";
					val1 = 0;
					val2 = 0;
					val3 = 1;
					prev = 1;
					next = 3;
				break;
				case 3:
					img1 = "art-9_1_vb1_c_1";
					img2 = "art-9_1_vb1_d_2";
					img3 = "art-9_1_vb1_b_1";
					img1_o = "art-9_1_vb1_c_2";
					img2_o = "art-9_1_vb1_d_2";
					img3_o = "art-9_1_vb1_b_2";
					val1 = 0;
					val2 = 1;
					val3 = 0;
					prev = 2;
					next = 4;
				break;
				case 4:
					img1 = "art-9_1_vb1_a_1";
					img2 = "art-9_1_vb1_c_2";
					img3 = "art-9_1_vb1_e_1";
					img1_o = "art-9_1_vb1_a_2";
					img2_o = "art-9_1_vb1_c_2";
					img3_o = "art-9_1_vb1_e_2";
					val1 = 0;
					val2 = 1;
					val3 = 0;
					prev = 3;
					next = 5;
				break;
				case 5:
					img1 = "art-9_1_vb1_b_2";
					img2 = "art-9_1_vb1_a_1";
					img3 = "art-9_1_vb1_c_1";
					img1_o = "art-9_1_vb1_b_2";
					img2_o = "art-9_1_vb1_a_2";
					img3_o = "art-9_1_vb1_c_2";
					val1 = 1;
					val2 = 0;
					val3 = 0;
					prev = 4;
					next = 1;
				break;
			}
			tblImg = "<table align=\"center\" width=\"737\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"50\" height=\"183\" align=\"left\" valign=\"middle\"><a href=\"#\" onclick=\"cambiarDivL2Ex5("+prev+")\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image17','','../img/11.izq2.png',1)\"><img src=\"../img/11.izq.png\" name=\"Image17\" width=\"50\" height=\"55\" border=\"0\" id=\"Image17\" /></a></td>"+
				"<td width=\"206\" align=\"center\" valign=\"middle\"><div id=\"divAns1\">"+
					"<a href=\"#\" onclick=\"mostrarAnsL1E3("+idQst+",1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../jpg/"+img1_o+".png',1)\">"+
						"<img src=\"../jpg/"+img1+".png\" name=\"Image15\" width=\"206\" height=\"184\" border=\"0\" id=\"Image15\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns1\" value="+val1+" />"+
				"</div></td>"+
				"<td width=\"206\" align=\"center\" valign=\"middle\"><div id=\"divAns2\">"+
					"<a href=\"#\" onclick=\"mostrarAnsL1E3("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image39','','../jpg/"+img2_o+".png',1)\">"+
						"<img src=\"../jpg/"+img2+".png\" name=\"Image39\" width=\"206\" height=\"184\" border=\"0\" id=\"Image39\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns2\" value="+val2+" />"+
				"</div></td>"+
				"<td width=\"206\" align=\"center\" valign=\"middle\"><div id=\"divAns3\">"+
					"<a href=\"#\" onclick=\"mostrarAnsL1E3("+idQst+",3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image19','','../jpg/"+img3_o+".png',1)\">"+
						"<img src=\"../jpg/"+img3+".png\" name=\"Image19\" width=\"206\" height=\"184\" border=\"0\" id=\"Image19\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns3\" value="+val3+" />"+
				"</div></td>"+
				"<td width=\"47\" align=\"right\" valign=\"middle\"><a href=\"#\" onclick=\"cambiarDivL2Ex5("+next+")\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/11.der2.png',1)\"><img src=\"../img/11.der.png\" name=\"Image16\" width=\"50\" height=\"55\" border=\"0\" id=\"Image16\" /></a></td>"+
			  "</tr><input type=\"hidden\" id=\"vez\" value="+vez+" />"+
			"</table>";
			
			$('#divTblImg').html(tblImg);
			actualizarBtnL1E3(idQst, idBtn);
		}
	}
}

function actualizardivCalL1E3(img)
{
	if(img != "")
		html = "<img src=\"../img/"+img+".png\" width=\"30\" height=\"30\" />";
	else
		html = "&nbsp;";
	
	$('#divCalL1Ex3').html(html);
}

function actualizarBtnL1E3(idQst, idBtn)
{		
	if(idBtn == 3)
		btn = "<table align=\"center\" background=\"../img/8.bg_refresh.png\" width=\"141\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"47\" height=\"47\" align=\"right\" valign=\"middle\"><img src=\"../img/8.btn_chulito_desab.png\" name=\"Image24\" width=\"25\" height=\"23\" border=\"0\" id=\"Image24\" /></td>"+
			"<td width=\"46\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E3("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image25','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image25\" width=\"25\" height=\"23\" border=\"0\" id=\"Image25\" /></a></td>"+
			"<td width=\"48\" align=\"left\"><a href=\"#\" onclick=\"verificarL1E3("+idQst+",3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image30','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image30\" width=\"25\" height=\"23\" border=\"0\" id=\"Image30\" /></a></td>"+
		  "</tr>"+
		"</table>";
	else
		btn = "<table align=\"center\" background=\"../img/8.bg_refresh.png\" width=\"141\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"47\" height=\"47\" align=\"right\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E3("+idQst+",1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image24','','../img/8.btn_chulito2.png',1)\"><img src=\"../img/8.btn_chulito.png\" name=\"Image24\" width=\"25\" height=\"23\" border=\"0\" id=\"Image24\" /></a></td>"+
			"<td width=\"46\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E3("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image25','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image25\" width=\"25\" height=\"23\" border=\"0\" id=\"Image25\" /></a></td>"+
			"<td width=\"48\" align=\"left\"><a href=\"#\" onclick=\"verificarL1E3("+idQst+",3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image30','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image30\" width=\"25\" height=\"23\" border=\"0\" id=\"Image30\" /></a></td>"+
		  "</tr>"+
		"</table>";
			
	$('#divBtn').html(btn);
}

function cambiarDivL1Ex3(idQst)
{	
	if (idQst == 1)
	{
		prev = 5;
		next = 2;
		
		jpg1 = "art-9_1_vb1_b";
		jpg2 = "art-9_1_vb1_c";
		jpg3 = "art-9_1_vb1_e";
		
		imgTit = "<img src=\"../img/img_L1_exe3.png\" width=\"322\" height=\"25\" />";
			
		tblBtn = "<table  align=\"center\" cellpadding=\"0\" cellspacing=\"0\"width=\"211\" border=\"0\">"+
			  "<tr>"+
				"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL1Ex3(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image21','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_2.png\" name=\"Image21\" width=\"40\" height=\"53\" border=\"0\" id=\"Image21\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex3(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image26','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image26\" width=\"40\" height=\"53\" border=\"0\" id=\"Image26\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex3(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image27','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_1.png\" name=\"Image27\" width=\"40\" height=\"53\" border=\"0\" id=\"Image27\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex3(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image28','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_1.png\" name=\"Image28\" width=\"40\" height=\"53\" border=\"0\" id=\"Image28\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"39\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex3(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image29','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_1.png\" name=\"Image29\" width=\"40\" height=\"53\" border=\"0\" id=\"Image29\" /></a></td>"+
			   "</tr>"+
			"</table>";
	}
	else if (idQst == 2)
	{
		prev = 1;
		next = 3;
			
		jpg1 = "art-9_1_vb1_d";
		jpg2 = "art-9_1_vb1_e";
		jpg3 = "art-9_1_vb1_a";
		
		imgTit = "<img src=\"../img/img_L1_exe3b.png\" width=\"248\" height=\"25\" />";
			
		tblBtn = "<table  align=\"center\" cellpadding=\"0\" cellspacing=\"0\"width=\"211\" border=\"0\">"+
			  "<tr>"+
				"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL1Ex3(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image21','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image21\" width=\"40\" height=\"53\" border=\"0\" id=\"Image21\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex3(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image26','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_2.png\" name=\"Image26\" width=\"40\" height=\"53\" border=\"0\" id=\"Image26\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex3(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image27','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_1.png\" name=\"Image27\" width=\"40\" height=\"53\" border=\"0\" id=\"Image27\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex3(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image28','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_1.png\" name=\"Image28\" width=\"40\" height=\"53\" border=\"0\" id=\"Image28\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"39\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex3(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image29','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_1.png\" name=\"Image29\" width=\"40\" height=\"53\" border=\"0\" id=\"Image29\" /></a></td>"+
			   "</tr>"+
			"</table>";
	}
	else if (idQst == 3)
	{
		prev = 2;
		next = 4;
		
		jpg1 = "art-9_1_vb1_c";
		jpg2 = "art-9_1_vb1_d";
		jpg3 = "art-9_1_vb1_b";
		
		imgTit = "<img src=\"../img/img_L1_exe3c.png\" width=\"303\" height=\"25\" />";
			
		tblBtn = "<table  align=\"center\" cellpadding=\"0\" cellspacing=\"0\"width=\"211\" border=\"0\">"+
			  "<tr>"+
				"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL1Ex3(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image21','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image21\" width=\"40\" height=\"53\" border=\"0\" id=\"Image21\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex3(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image26','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image26\" width=\"40\" height=\"53\" border=\"0\" id=\"Image26\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex3(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image27','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_2.png\" name=\"Image27\" width=\"40\" height=\"53\" border=\"0\" id=\"Image27\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex3(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image28','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_1.png\" name=\"Image28\" width=\"40\" height=\"53\" border=\"0\" id=\"Image28\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"39\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex3(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image29','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_1.png\" name=\"Image29\" width=\"40\" height=\"53\" border=\"0\" id=\"Image29\" /></a></td>"+
			   "</tr>"+
			"</table>";
	}
	else if (idQst == 4)
	{
		prev = 3;
		next = 5;
		
		jpg1 = "art-9_1_vb1_a";
		jpg2 = "art-9_1_vb1_c";
		jpg3 = "art-9_1_vb1_e";
		
		imgTit = "<img src=\"../img/img_L1_exe3d.png\" width=\"315\" height=\"25\" />";
			
		tblBtn = "<table  align=\"center\" cellpadding=\"0\" cellspacing=\"0\"width=\"211\" border=\"0\">"+
			  "<tr>"+
				"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL1Ex3(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image21','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image21\" width=\"40\" height=\"53\" border=\"0\" id=\"Image21\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex3(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image26','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image26\" width=\"40\" height=\"53\" border=\"0\" id=\"Image26\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex3(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image27','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_1.png\" name=\"Image27\" width=\"40\" height=\"53\" border=\"0\" id=\"Image27\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex3(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image28','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_2.png\" name=\"Image28\" width=\"40\" height=\"53\" border=\"0\" id=\"Image28\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"39\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex3(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image29','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_1.png\" name=\"Image29\" width=\"40\" height=\"53\" border=\"0\" id=\"Image29\" /></a></td>"+
			   "</tr>"+
			"</table>";
	}
	else if (idQst == 5)
	{
		prev = 4;
		next = 1;
		
		jpg1 = "art-9_1_vb1_b";
		jpg2 = "art-9_1_vb1_a";
		jpg3 = "art-9_1_vb1_c";
		
		imgTit = "<img src=\"../img/img_L1_exe3e.png\" width=\"232\" height=\"25\" />";
			
		tblBtn = "<table  align=\"center\" cellpadding=\"0\" cellspacing=\"0\"width=\"211\" border=\"0\">"+
			  "<tr>"+
				"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL1Ex3(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image21','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image21\" width=\"40\" height=\"53\" border=\"0\" id=\"Image21\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex3(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image26','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image26\" width=\"40\" height=\"53\" border=\"0\" id=\"Image26\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex3(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image27','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_1.png\" name=\"Image27\" width=\"40\" height=\"53\" border=\"0\" id=\"Image27\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex3(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image28','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_1.png\" name=\"Image28\" width=\"40\" height=\"53\" border=\"0\" id=\"Image28\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"39\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex3(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image29','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_2.png\" name=\"Image29\" width=\"40\" height=\"53\" border=\"0\" id=\"Image29\" /></a></td>"+
			   "</tr>"+
			"</table>";
	}
	html = "<table width=\"766\" border=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"741\" height=\"107\" align=\"left\" valign=\"bottom\"><img src=\"../img/titulos/L1/L1_exer_3.png\" width=\"524\" height=\"100\" /></td>"+
		  "</tr>"+
		"</table>"+tblBtn+
		"<table width=\"50\" border=\"0\" align=\"center\">"+
		  "<tr>"+
			"<td>"+imgTit+"</td>"+
		  "</tr>"+
		"</table>"+
		"<div id=\"divTblImg\">"+
		"<table align=\"center\" width=\"737\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"50\" height=\"183\" align=\"left\" valign=\"middle\"><a href=\"#\" onclick=\"cambiarDivL1Ex3("+prev+")\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image36','','../img/11.izq2.png',1)\"><img src=\"../img/11.izq.png\" name=\"Image36\" width=\"47\" height=\"51\" border=\"0\" id=\"Image36\" /></a></td>"+
			"<td width=\"206\" align=\"center\" valign=\"middle\"><div id=\"divAns1\">"+
				"<a href=\"#\" onclick=\"mostrarAnsL1E3("+idQst+",1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../jpg/"+jpg1+"_2.png',1)\">"+
					"<img src=\"../jpg/"+jpg1+"_1.png\" name=\"Image15\" width=\"206\" height=\"184\" border=\"0\" id=\"Image15\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns1\" value=0 />"+
			"</div></td>"+
			"<td width=\"206\" align=\"center\" valign=\"middle\"><div id=\"divAns2\">"+
				"<a href=\"#\" onclick=\"mostrarAnsL1E3("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image18','','../jpg/"+jpg2+"_2.png',1)\">"+
					"<img src=\"../jpg/"+jpg2+"_1.png\" name=\"Image18\" width=\"206\" height=\"184\" border=\"0\" id=\"Image18\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns2\" value=0 />"+
			"</div></td>"+
			"<td width=\"206\" align=\"center\" valign=\"middle\"><div id=\"divAns3\">"+
				"<a href=\"#\" onclick=\"mostrarAnsL1E3("+idQst+",3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image19','','../jpg/"+jpg3+"_2.png',1)\">"+
					"<img src=\"../jpg/"+jpg3+"_1.png\" name=\"Image19\" width=\"206\" height=\"184\" border=\"0\" id=\"Image19\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns3\" value=0 />"+
			"</div></td>"+
			"<td width=\"47\" align=\"right\" valign=\"middle\"><a href=\"#\" onclick=\"cambiarDivL1Ex3("+next+")\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image37','','../img/11.der2.png',1)\"><img src=\"../img/11.der.png\" name=\"Image37\" width=\"47\" height=\"51\" border=\"0\" id=\"Image37\" /></a></td>"+
		  "</tr><input type=\"hidden\" id=\"vez\" value=0 />"+
		"</table></div>"+
	   "<table align=\"center\" width=\"50\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td height=\"55\"><div id=\"divCalL1Ex3\">&nbsp;</div></td>"+
			"<td>"+
		"<div id=\"divBtn\"><table align=\"center\" background=\"../img/8.bg_refresh.png\" width=\"141\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"47\" height=\"47\" align=\"right\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E3("+idQst+",1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image24','','../img/8.btn_chulito2.png',1)\"><img src=\"../img/8.btn_chulito.png\" name=\"Image24\" width=\"25\" height=\"23\" border=\"0\" id=\"Image24\" /></a></td>"+
			"<td width=\"46\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E3("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image25','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image25\" width=\"25\" height=\"23\" border=\"0\" id=\"Image25\" /></a></td>"+
			"<td width=\"48\" align=\"left\"><img src=\"../img/8.btn_ojo_desab.png\" name=\"Image30\" width=\"25\" height=\"23\" border=\"0\" id=\"Image30\" /></td>"+
		  "</tr>"+
		"</table></div></td>"+
		  "</tr>"+
		"</table>";
	
	$('#contenido').html(html);
}
/* Exercise 3 */


/* Exercise 6 */
function mostrarAnsL1E6(idQst, idAns)
{
	vez = $("#vez").val();
	
	if (idQst == 1)
	{
		if(idAns == 'a')
			ans = "bank";
		else if(idAns == 'b')
			ans = "restaurant";
		else if(idAns == 'c')
			ans = "cafe";
		//vez = ans;
	}
	else if(idQst == 2)
	{
		if(idAns == 'a')
			ans = "next to the library";
		else if(idAns == 'b')
			ans = "next to the restaurant";
		else if(idAns == 'c')
			ans = "next to the bookstore";
	}
	else if(idQst == 3)
	{
		if(idAns == 'a')
			ans = "on Mountain Street";
		else if(idAns == 'b')
			ans = "on Melrose Street";
		else if(idAns == 'c')
			ans = "on Mellon Street";
	}
	else if(idQst == 4)
	{
		if(idAns == 'a')
			ans = "gas station";
		else if(idAns == 'b')
			ans = "police station";
		else if(idAns == 'c')
			ans = "train station";
	}
	else if(idQst == 5)
	{
		if(idAns == 'a')
			ans = "park";
		else if(idAns == 'b')
			ans = "bakery";
		else if(idAns == 'c')
			ans = "gym";
	}
	else if(idQst == 6)
	{
		if(idAns == 'a')
			ans = "on Park Avenue";
		else if(idAns == 'b')
			ans = "on Mike Avenue";
		else if(idAns == 'c')
			ans = "on Riker�s Avenue";
	}
	else if(idQst == 7)
	{
		if(idAns == 'a')
			ans = "mall";
		else if(idAns == 'b')
			ans = "movie theater";
		else if(idAns == 'c')
			ans = "police station";
	}
	else if(idQst == 8)
	{
		if(idAns == 'a')
			ans = "on 67th Street";
		else if(idAns == 'b')
			ans = "on 37th Street";
		else if(idAns == 'c')
			ans = "on 57th Street";
	}
	else if(idQst == 9)
	{
		if(idAns == 'a')
			ans = "bakery";
		else if(idAns == 'b')
			ans = "supermarket";
		else if(idAns == 'c')
			ans = "library";
	}
	else if(idQst == 10)
	{
		if(idAns == 'a')
			ans = "next to Harry's bakery";
		else if(idAns == 'b')
			ans = "on Hill Street";
		else if(idAns == 'c')
			ans = "both a and b";
	}
			
	inpt = "<input name=\"iptAnswerE6\" type=\"text\" class=\"bg_cien\" id=\"iptAnswerE6\" value=\""+ans+"\" />"+
			"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
	
	$('#divAnswerE6').html(inpt); 
	AnsL1E6Selec(idQst, idAns);
}

function AnsL1E6Selec(idQst, idAns)
{
	img = "";
	class1 = "texto_2";
	class2 = "texto_2";
	class3 = "texto_2";
	
	if(idAns == 'a')
		class1 = "texto_3";
	else if(idAns == 'b')
		class2 = "texto_3";
	else if (idAns == 'c')
		class3 = "texto_3";

	if (idQst == 1)
	{
		tblAns = "<table align=\"left\" background=\"../img/bg_cuadro4.png\" width=\"148\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"142\" height=\"98\" align=\"center\" valign=\"middle\">"+
				"<table width=\"109\" border=\"0\">"+
				  "<tr class=\"texto_2\">"+
					"<td width=\"15\" class=\""+class1+"\"><strong>a.</strong></td>"+
					"<td width=\"84\" class=\""+class1+"\" onclick=\"mostrarAnsL1E6("+idQst+",'a')\" style=\"cursor:pointer\">bank</td>"+
				  "</tr>"+
				  "<tr>"+
					"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
					"</tr>"+
				  "<tr class=\"texto_2\">"+
					"<td class=\""+class2+"\"><strong>b.</strong></td>"+
					"<td style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6("+idQst+",'b')\" class=\""+class2+"\">restaurant</td>"+
				  "</tr>"+
				  "<tr>"+
					"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
					"</tr>"+
				  "<tr class=\"texto_2\">"+
					"<td class=\""+class3+"\"><strong>c.</strong></td>"+
					"<td style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6("+idQst+",'c')\" class=\""+class3+"\">cafe</td>"+
				  "</tr>"+
				"</table>"
				"</td>"+
			  "</tr>"+
			"</table>";
	}
	else if(idQst == 2)
	{		
		tblAns = "<table align=\"left\" background=\"../img/bg_cuadro5.png\" width=\"227\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"227\" height=\"105\" align=\"center\" valign=\"middle\">"+
			"<table width=\"185\" border=\"0\">"+
			  "<tr class=\"texto_2\">"+
				"<td width=\"15\" class=\""+class1+"\"><strong>a.</strong></td>"+
				"<td width=\"160\" class=\""+class1+"\" style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(2,'a')\">next to the library<br /></td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
				"</tr>"+
			  "<tr class=\"texto_2\">"+
				"<td class=\""+class2+"\"><strong>b.</strong></td>"+
				"<td style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(2,'b')\" class=\""+class2+"\">next to the restaurant</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
				"</tr>"+
			  "<tr class=\"texto_2\">"+
				"<td class=\""+class3+"\"><strong>c.</strong></td>"+
				"<td style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(2,'c')\" class=\""+class3+"\">next to the bookstore</td>"+
			  "</tr>"+
			"</table></td>"+
		  "</tr>"+
		"</table>";
	}
	else if(idQst == 3)
	{
		tblAns = "<table align=\"left\" background=\"../img/bg_cuadro5.png\" width=\"227\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"227\" height=\"105\" align=\"center\" valign=\"middle\">"+
			"<table width=\"185\" border=\"0\">"+
			  "<tr class=\"texto_2\">"+
				"<td width=\"15\" class=\""+class1+"\"><strong>a.</strong></td>"+
				"<td width=\"160\" class=\""+class1+"\" style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(3,'a')\">on Mountain Street<br /></td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
				"</tr>"+
			  "<tr class=\"texto_2\">"+
				"<td class=\""+class2+"\"><strong>b.</strong></td>"+
				"<td style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(3,'b')\" class=\""+class2+"\">on Melrose Street</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
				"</tr>"+
			  "<tr class=\"texto_2\">"+
				"<td class=\""+class3+"\"><strong>c.</strong></td>"+
				"<td style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(3,'c')\" class=\""+class3+"\">on Mellon Street</td>"+
			  "</tr>"+
			"</table></td>"+
		  "</tr>"+
		"</table>";
	}
	else if(idQst == 4)
	{
		tblAns = "<table align=\"left\" background=\"../img/bg_cuadro5.png\" width=\"227\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"227\" height=\"105\" align=\"center\" valign=\"middle\">"+
			"<table width=\"185\" border=\"0\">"+
			  "<tr class=\"texto_2\">"+
				"<td width=\"15\" class=\""+class1+"\"><strong>a.</strong></td>"+
				"<td width=\"160\" class=\""+class1+"\" style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(4,'a')\">gas station<br /></td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
				"</tr>"+
			  "<tr class=\"texto_2\">"+
				"<td class=\""+class2+"\"><strong>b.</strong></td>"+
				"<td style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(4,'b')\" class=\""+class2+"\">police station</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
				"</tr>"+
			  "<tr class=\"texto_2\">"+
				"<td class=\""+class3+"\"><strong>c.</strong></td>"+
				"<td style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(4,'c')\" class=\""+class3+"\">train station</td>"+
			  "</tr>"+
			"</table></td>"+
		  "</tr>"+
		"</table>";
	}
	else if(idQst == 5)
	{
		tblAns = "<table align=\"left\" background=\"../img/bg_cuadro4.png\" width=\"148\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"142\" height=\"98\" align=\"center\" valign=\"middle\">"+
			"<div id=\"divTblAnsE6\">"+
			"<table width=\"109\" border=\"0\">"+
			  "<tr class=\"texto_2\">"+
				"<td width=\"15\" class=\""+class1+"\"><strong>a.</strong></td>"+
				"<td width=\"84\" class=\""+class1+"\" style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(5,'a')\">park</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
				"</tr>"+
			  "<tr class=\"texto_2\">"+
				"<td class=\""+class2+"\"><strong>b.</strong></td>"+
				"<td class=\""+class2+"\" style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(5,'b')\">bakery</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
				"</tr>"+
			  "<tr class=\"texto_2\">"+
				"<td class=\""+class3+"\"><strong>c.</strong></td>"+
				"<td class=\""+class3+"\" style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(5,'c')\">gym</td>"+
			  "</tr>"+
			"</table>"+
			"</div>"+
			"</td>"+
		  "</tr>"+
		"</table>";
	}
	else if(idQst == 6)
	{
		tblAns = "<table align=\"left\" background=\"../img/bg_cuadro5.png\" width=\"227\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"227\" height=\"105\" align=\"center\" valign=\"middle\">"+
			"<div id=\"divTblAnsE6\">"+
			"<table width=\"185\" border=\"0\">"+
			  "<tr class=\"texto_2\">"+
				"<td width=\"15\" class=\""+class1+"\"><strong>a.</strong></td>"+
				"<td width=\"160\" class=\""+class1+"\" style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(6,'a')\">on Park Avenue<br /></td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
				"</tr>"+
			  "<tr class=\"texto_2\">"+
				"<td class=\""+class2+"\"><strong>b.</strong></td>"+
				"<td class=\""+class2+"\" style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(6,'b')\">on Mike Avenue</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
				"</tr>"+
			  "<tr class=\"texto_2\">"+
				"<td class=\""+class3+"\"><strong>c.</strong></td>"+
				"<td class=\""+class3+"\" style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(6,'c')\">on Riker's Avenue</td>"+
			  "</tr>"+
			"</table></div></td>"+
		  "</tr>"+
		"</table>";
	}
	else if(idQst == 7)
	{
		tblAns = "<table align=\"left\" background=\"../img/bg_cuadro5.png\" width=\"225\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"225\" height=\"103\" align=\"center\" valign=\"middle\">"+
			"<div id=\"divTblAnsE6\">"+
			"<table width=\"131\" border=\"0\">"+
			  "<tr class=\"texto_2\">"+
				"<td width=\"15\" class=\""+class1+"\"><strong>a.</strong></td>"+
				"<td width=\"106\" class=\""+class1+"\" style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(7,'a')\">mall</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
				"</tr>"+
			  "<tr class=\"texto_2\">"+
				"<td class=\""+class2+"\"><strong>b.</strong></td>"+
				"<td class=\""+class2+"\" style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(7,'b')\">movie theater</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
				"</tr>"+
			  "<tr class=\"texto_2\">"+
				"<td class=\""+class3+"\"><strong>c.</strong></td>"+
				"<td class=\""+class3+"\" style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(7,'c')\">police station</td>"+
			  "</tr>"+
			"</table>"+
			"</div>"+
			"</td>"+
			  "</tr>"+
			"</table>";
	}
	else if(idQst == 8)
	{
		txt1 = "on 67th Street";
		txt2 = "on 37th Street";
		txt3 = "on 57th Street";
		
		tblAns = "<table align=\"left\" background=\"../img/bg_cuadro5.png\" width=\"225\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"225\" height=\"103\" align=\"center\" valign=\"middle\">"+
			"<div id=\"divTblAnsE6\">"+
			"<table width=\"131\" border=\"0\">"+
			  "<tr class=\"texto_2\">"+
				"<td width=\"15\" class=\""+class1+"\"><strong>a.</strong></td>"+
				"<td width=\"106\" class=\""+class1+"\" style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(8,'a')\">on 67th Street</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
				"</tr>"+
			  "<tr class=\"texto_2\">"+
				"<td class=\""+class2+"\"><strong>b.</strong></td>"+
				"<td class=\""+class2+"\" style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(8,'b')\">on 37th Street</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
				"</tr>"+
			  "<tr class=\"texto_2\">"+
				"<td class=\""+class3+"\"><strong>c.</strong></td>"+
				"<td class=\""+class3+"\" style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(8,'c')\">on 57th Street</td>"+
			  "</tr>"+
			"</table>"+
			"</div>"+
			"</td>"+
			  "</tr>"+
			"</table>";
	}
	else if(idQst == 9)
	{
		tblAns = "<table align=\"left\" background=\"../img/bg_cuadro4.png\" width=\"148\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"142\" height=\"98\" align=\"center\" valign=\"middle\">"+
			"<div id=\"divTblAnsE6\">"+
			"<table width=\"109\" border=\"0\">"+
			  "<tr class=\"texto_2\">"+
				"<td width=\"15\" class=\""+class1+"\"><strong>a.</strong></td>"+
				"<td width=\"84\" class=\""+class1+"\" style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(9,'a')\">bakery</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
				"</tr>"+
			  "<tr class=\"texto_2\">"+
				"<td class=\""+class2+"\"><strong>b.</strong></td>"+
				"<td class=\""+class2+"\" style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(9,'b')\">supermarket</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
				"</tr>"+
			  "<tr class=\"texto_2\">"+
				"<td class=\""+class3+"\"><strong>c.</strong></td>"+
				"<td class=\""+class3+"\" style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(9,'c')\">library</td>"+
			  "</tr>"+
			"</table>"+
			"</div>"+
			"</td>"+
		  "</tr>"+
		"</table>";
	}
	else if(idQst == 10)
	{
		txt1 = "next to Harry's bakery";
		txt2 = "on Hill Street";
		txt3 = "both a and b";
		
		tblAns = "<table align=\"left\" background=\"../img/bg_cuadro5.png\" width=\"227\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"227\" height=\"105\" align=\"center\" valign=\"middle\">"+
			"<div id=\"divTblAnsE6\">"+
			"<table width=\"185\" border=\"0\">"+
			  "<tr class=\"texto_2\">"+
				"<td width=\"15\" class=\""+class1+"\"><strong>a.</strong></td>"+
				"<td width=\"160\" class=\""+class1+"\" style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(10,'a')\">next to Harry's bakery<br /></td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
				"</tr>"+
			  "<tr class=\"texto_2\">"+
				"<td class=\""+class2+"\"><strong>b.</strong></td>"+
				"<td class=\""+class2+"\" style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(10,'b')\">on Hill Street</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
				"</tr>"+
			  "<tr class=\"texto_2\">"+
				"<td class=\""+class3+"\"><strong>c.</strong></td>"+
				"<td class=\""+class3+"\" style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(10,'c')\">both a and b</td>"+
			  "</tr>"+
			"</table></div></td>"+
		  "</tr>"+
		"</table>";
	}
	
	$('#divTblAnsE6').html(tblAns); 
	actualizardivCalL1E6(img);
}

function verificarL1E6(idQst, idBtn)
{
	ansL1E6 = $("#iptAnswerE6").val();
	vez = $("#vez").val();
	
	img = "";
	if(ansL1E6 == "" && idBtn != 3)
		alert("You must select an answer.");
	else{
		if(idBtn == 1)
		{
			if(idQst == 1 && ansL1E6 == 'cafe')
				img = "good";
			else if (idQst == 2 && ansL1E6 == 'next to the library')
				img = "good";
			else if (idQst == 3 && ansL1E6 == 'on Melrose Street')
				img = "good";
			else if (idQst == 4 && ansL1E6 == 'police station')
				img = "good";
			else if (idQst == 5 && ansL1E6 == 'gym')
				img = "good";
			else if (idQst == 6 && ansL1E6 == 'on Park Avenue')
				img = "good";
			else if (idQst == 7 && ansL1E6 == 'movie theater')
				img = "good";
			else if (idQst == 8 && ansL1E6 == 'on 67th Street')
				img = "good";
			else if (idQst == 9 && ansL1E6 == 'supermarket')
				img = "good";
			else if (idQst == 10 && ansL1E6 == 'both a and b')
				img = "good";
			else
				img = "good_No";
		}
		else{
			if(idBtn == 3)
			{
				switch (idQst){
				case 1:
					value = "cafe";
				break;
				case 2:
					value = "next to the library";
				break;
				case 3:
					value = "on Melrose Street";
				break;
				case 4:
					value = "police station";
				break;
				case 5:
					value = "gym";
				break;
				case 6:
					value = "on Park Avenue";
				break;
				case 7:
					value = "movie theater";
				break;
				case 8:
					value = "on 67th Street";
				break;
				case 9:
					value = "supermarket";
				break;
				case 10:
					value = "both a and b";
				break;}
				actualizarBtnL1E6(idQst, idBtn);
			}	
			else if(idBtn == 2){
				value = "";
				if(vez >= 2)
					actualizarBtnL1E6(idQst, idBtn);
				vez = parseInt(vez) + 1;
				AnsL1E6Selec(idQst);
			}
			iptAns = "<input name=\"iptAnswerE6\" type=\"text\" class=\"bg_cien\" id=\"iptAnswerE6\" value=\""+value+"\" />"+
					  "<input type=\"hidden\" id=\"vez\" value="+vez+" />";
		
			$('#divAnswerE6').html(iptAns); 
		}
		actualizardivCalL1E6(img);
	}
}

function actualizarBtnL1E6(idQst, idBtn)
{		
	if(idBtn == 3)
		btn = "<table align=\"center\"  background=\"../img/8.bg_refresh.png\"width=\"153\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"50\" height=\"53\" align=\"right\"><img src=\"../img/8.btn_chulito_desab.png\" name=\"Image27\" width=\"25\" height=\"25\" border=\"0\" id=\"Image27\" /></td>"+
			"<td width=\"52\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E6("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image28','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image28\" width=\"25\" height=\"25\" border=\"0\" id=\"Image28\" /></a></td>"+
			"<td width=\"51\" align=\"left\"><a href=\"#\" onclick=\"verificarL1E6("+idQst+",3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image29','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image29\" width=\"29\" height=\"25\" border=\"0\" id=\"Image29\" /></a></td>"+
			"</tr>"+
		"</table>";
	else
		btn = "<table align=\"center\"  background=\"../img/8.bg_refresh.png\"width=\"153\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"50\" height=\"53\" align=\"right\"><a href=\"#\" onclick=\"verificarL1E6("+idQst+",1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image27','','../img/8.btn_chulito2.png',1)\"><img src=\"../img/8.btn_chulito.png\" name=\"Image27\" width=\"25\" height=\"25\" border=\"0\" id=\"Image27\" /></a></td>"+
			"<td width=\"52\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E6("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image28','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image28\" width=\"25\" height=\"25\" border=\"0\" id=\"Image28\" /></a></td>"+
			"<td width=\"51\" align=\"left\"><a href=\"#\" onclick=\"verificarL1E6("+idQst+",3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image29','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image29\" width=\"29\" height=\"25\" border=\"0\" id=\"Image29\" /></a></td>"+
			"</tr>"+
		"</table>";
			
	$('#divBtn').html(btn);
}

function actualizardivCalL1E6(img)
{
	if(img != "")
		html = "<img src=\"../img/"+img+".png\" width=\"30\" height=\"30\" />";
	else
		html = "&nbsp;";
	
	$('#divCalL1E6').html(html);
}

function cambiarDivL1Ex6(idQst)
{	
	if (idQst == 1)
	{
		prev = 10;
		next = 2;
		
		tblTxt = "<table width=\"410\" border=\"0\">"+
          "<tr>"+
            "<td width=\"224\" height=\"30\" class=\"texto_2_mediano\">The woman is looking for a"+
			"</td>"+
            "<td width=\"168\" class=\"texto_2_mediano\">"+
            "<div id=\"divAnswerE6\">"+
              "<input name=\"iptAnswerE6\" type=\"text\" class=\"bg_cien\" id=\"iptAnswerE6\" />"+
			  "<input type=\"hidden\" id=\"vez\" value=0 />"+
            "</div></td>"+
          "</tr>"+
        "</table>";
			
		tblAns = "<table align=\"left\" background=\"../img/bg_cuadro4.png\" width=\"148\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"142\" height=\"98\" align=\"center\" valign=\"middle\">"+
			"<div id=\"divTblAnsE6\">"+
			"<table width=\"109\" border=\"0\">"+
			  "<tr class=\"texto_2\">"+
				"<td width=\"15\" class=\"texto_2\"><strong>a.</strong></td>"+
				"<td width=\"84\" class=\"texto_2\" style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(1,'a')\">bank</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
				"</tr>"+
			  "<tr class=\"texto_2\">"+
				"<td class=\"texto_2\"><strong>b.</strong></td>"+
				"<td style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(1,'b')\"> restaurant</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
				"</tr>"+
			  "<tr class=\"texto_2\">"+
				"<td><strong>c.</strong></td>"+
				"<td style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(1,'c')\">cafe</td>"+
			  "</tr>"+
			"</table>"+
			"</div>"+
			"</td>"+
		  "</tr>"+
		"</table>";
				
		swf = "<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\" id=\"FlashID1\" title=\"Conv A\">"+
		  "<param name=\"movie\" value=\"../swf/L1/L1_Exe_6/L1_Exe_6a.swf\" />"+
		  "<param name=\"quality\" value=\"high\" />"+
		  "<param name=\"wmode\" value=\"transparent\" />"+
		  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
		  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versi�n m�s reciente de Flash Player. Elim�nela si no desea que los usuarios vean el mensaje. -->"+
		  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
		  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Oc�ltela a IE mediante IECC. -->"+
		  "<!--[if !IE]>-->"+
		  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_Exe_6/L1_Exe_6a.swf\" width=\"45\" height=\"40\">"+
			"<!--<![endif]-->"+
			"<param name=\"quality\" value=\"high\" />"+
			"<param name=\"wmode\" value=\"transparent\" />"+
			"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
			"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
			"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
			"<div>"+
			  "<h4>El contenido de esta p�gina requiere una versi�n m�s reciente de Adobe Flash Player.</h4>"+
			  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
			"</div>"+
			"<!--[if !IE]>-->"+
		  "</object>"+
		  "<!--<![endif]-->"+
		"</object>";
		
		tblBtnCon = "<table width=\"120\" border=\"0\" cellpadding=\"1\" cellspacing=\"1\">"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image9','','../img/Btn_comvA_2.png',1)\"><img src=\"../img/Btn_comvA_2.png\" name=\"Image9\" width=\"156\" height=\"39\" border=\"0\" id=\"Image9\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image10','','../img/Btn_comvB_2.png',1)\"><img src=\"../img/Btn_comvB_1.png\" name=\"Image10\" width=\"156\" height=\"39\" border=\"0\" id=\"Image10\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image11','','../img/Btn_comvC_2.png',1)\"><img src=\"../img/Btn_comvC_1.png\" name=\"Image11\" width=\"156\" height=\"39\" border=\"0\" id=\"Image11\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(7)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image12','','../img/Btn_comvD_2.png',1)\"><img src=\"../img/Btn_comvD_1.png\" name=\"Image12\" width=\"156\" height=\"39\" border=\"0\" id=\"Image12\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(9)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../img/Btn_comvE_2.png',1)\"><img src=\"../img/Btn_comvE_1.png\" name=\"Image15\" width=\"156\" height=\"39\" border=\"0\" id=\"Image15\" /></a></td>"+
		  "</tr>"+
		"</table>";
		
		tblBtnNum = "<table aling  width=\"549\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"282\" align=\"right\">"+swf+"</td>"+
			"<td width=\"166\" align=\"right\"><a href=\"#\" onclick=\"cambiarDivL1Ex6(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image30','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_2.png\" name=\"Image30\" width=\"40\" height=\"53\" border=\"0\" id=\"Image30\" /></a></td>"+
			"<td width=\"3\" height=\"1\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"right\"><a href=\"#\" onclick=\"cambiarDivL1Ex6(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image31','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image31\" width=\"40\" height=\"53\" border=\"0\" id=\"Image31\" /></a></td>"+
			"<td width=\"58\">&nbsp;</td>"+
		  "</tr>"+
		"</table>";
		
		tblPts = "<table align=\"center\" width=\"120\" border=\"0\" cellpadding=\"0\" cellspacing=\"1\">"+
		  "<tr>"+
			"<td><img src=\"../img/12.punto_color.png\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
		  "</tr>"+
		"</table>";
	}
	else if (idQst == 2)
	{
		prev = 1;
		next = 3;
		
		tblTxt = "<table width=\"171\" border=\"0\">"+
			  "<tr>"+
				"<td width=\"165\" height=\"30\" class=\"texto_2_mediano\">Where is it?</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td><div id=\"divAnswerE6\">"+
				  "<input name=\"iptAnswerE6\" type=\"text\" class=\"bg_cien\" id=\"iptAnswerE6\" />"+
				  "<input type=\"hidden\" id=\"vez\" value=0 />"+
				"</div></td>"+
			  "</tr>"+
			"</table>";
			
		tblAns = "<table align=\"left\" background=\"../img/bg_cuadro5.png\" width=\"227\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"227\" height=\"105\" align=\"center\" valign=\"middle\">"+
			"<div id=\"divTblAnsE6\">"+
			"<table width=\"185\" border=\"0\">"+
			  "<tr class=\"texto_2\">"+
				"<td width=\"15\" class=\"texto_2\"><strong>a.</strong></td>"+
				"<td width=\"160\" class=\"texto_2\" style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(2,'a')\">next to the library<br /></td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
				"</tr>"+
			  "<tr class=\"texto_2\">"+
				"<td class=\"texto_2\"><strong>b.</strong></td>"+
				"<td style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(2,'b')\">next to the restaurant</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
				"</tr>"+
			  "<tr class=\"texto_2\">"+
				"<td><strong>c.</strong></td>"+
				"<td style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(2,'c')\">next to the bookstore</td>"+
			  "</tr>"+
			"</table></div></td>"+
		  "</tr>"+
		"</table>";
				
		swf = "<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\" id=\"FlashID2\" title=\"Conv A\">"+
		  "<param name=\"movie\" value=\"../swf/L1/L1_Exe_6/L1_Exe_6a.swf\" />"+
		  "<param name=\"quality\" value=\"high\" />"+
		  "<param name=\"wmode\" value=\"transparent\" />"+
		  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
		  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versi�n m�s reciente de Flash Player. Elim�nela si no desea que los usuarios vean el mensaje. -->"+
		  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
		  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Oc�ltela a IE mediante IECC. -->"+
		  "<!--[if !IE]>-->"+
		  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_Exe_6/L1_Exe_6a.swf\" width=\"45\" height=\"40\">"+
			"<!--<![endif]-->"+
			"<param name=\"quality\" value=\"high\" />"+
			"<param name=\"wmode\" value=\"transparent\" />"+
			"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
			"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
			"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
			"<div>"+
			  "<h4>El contenido de esta p�gina requiere una versi�n m�s reciente de Adobe Flash Player.</h4>"+
			  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
			"</div>"+
			"<!--[if !IE]>-->"+
		  "</object>"+
		  "<!--<![endif]-->"+
		"</object>";
		
		tblBtnCon = "<table width=\"120\" border=\"0\" cellpadding=\"1\" cellspacing=\"1\">"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image9','','../img/Btn_comvA_2.png',1)\"><img src=\"../img/Btn_comvA_2.png\" name=\"Image9\" width=\"156\" height=\"39\" border=\"0\" id=\"Image9\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image10','','../img/Btn_comvB_2.png',1)\"><img src=\"../img/Btn_comvB_1.png\" name=\"Image10\" width=\"156\" height=\"39\" border=\"0\" id=\"Image10\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image11','','../img/Btn_comvC_2.png',1)\"><img src=\"../img/Btn_comvC_1.png\" name=\"Image11\" width=\"156\" height=\"39\" border=\"0\" id=\"Image11\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(7)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image12','','../img/Btn_comvD_2.png',1)\"><img src=\"../img/Btn_comvD_1.png\" name=\"Image12\" width=\"156\" height=\"39\" border=\"0\" id=\"Image12\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(9)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../img/Btn_comvE_2.png',1)\"><img src=\"../img/Btn_comvE_1.png\" name=\"Image15\" width=\"156\" height=\"39\" border=\"0\" id=\"Image15\" /></a></td>"+
		  "</tr>"+
		"</table>";
		
		tblBtnNum = "<table aling  width=\"549\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"282\" align=\"right\">"+swf+"</td>"+
			"<td width=\"166\" align=\"right\"><a href=\"#\" onclick=\"cambiarDivL1Ex6(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image30','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image30\" width=\"40\" height=\"53\" border=\"0\" id=\"Image30\" /></a></td>"+
			"<td width=\"3\" height=\"1\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"right\"><a href=\"#\" onclick=\"cambiarDivL1Ex6(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image31','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_2.png\" name=\"Image31\" width=\"40\" height=\"53\" border=\"0\" id=\"Image31\" /></a></td>"+
			"<td width=\"58\">&nbsp;</td>"+
		  "</tr>"+
		"</table>";
		
		tblPts = "<table align=\"center\" width=\"120\" border=\"0\" cellpadding=\"0\" cellspacing=\"1\">"+
		  "<tr>"+
			"<td><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_color.png\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
		  "</tr>"+
		"</table>";
	}
	else if (idQst == 3)
	{
		prev = 2;
		next = 4;
		
		tblTxt = "<table width=\"171\" border=\"0\">"+
			  "<tr>"+
				"<td width=\"165\" height=\"30\" class=\"texto_2_mediano\">Where is the bank?</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td><div id=\"divAnswerE6\">"+
				  "<input name=\"iptAnswerE6\" type=\"text\" class=\"bg_cien\" id=\"iptAnswerE6\" />"+
				  "<input type=\"hidden\" id=\"vez\" value=0 />"+
				"</div></td>"+
			  "</tr>"+
			"</table>";
			
		tblAns = "<table align=\"left\" background=\"../img/bg_cuadro5.png\" width=\"227\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"227\" height=\"105\" align=\"center\" valign=\"middle\">"+
			"<div id=\"divTblAnsE6\">"+
			"<table width=\"185\" border=\"0\">"+
			  "<tr class=\"texto_2\">"+
				"<td width=\"15\" class=\"texto_2\"><strong>a.</strong></td>"+
				"<td width=\"160\" class=\"texto_2\" style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(3,'a')\">on Mountain Street<br /></td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
				"</tr>"+
			  "<tr class=\"texto_2\">"+
				"<td class=\"texto_2\"><strong>b.</strong></td>"+
				"<td style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(3,'b')\">on Melrose Street</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
				"</tr>"+
			  "<tr class=\"texto_2\">"+
				"<td><strong>c.</strong></td>"+
				"<td style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(3,'c')\">on Mellon Street</td>"+
			  "</tr>"+
			"</table></div></td>"+
		  "</tr>"+
		"</table>";
				
		swf = "<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\" id=\"FlashID3\" title=\"Conv A\">"+
		  "<param name=\"movie\" value=\"../swf/L1/L1_Exe_6/L1_Exe_6b.swf\" />"+
		  "<param name=\"quality\" value=\"high\" />"+
		  "<param name=\"wmode\" value=\"transparent\" />"+
		  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
		  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versi�n m�s reciente de Flash Player. Elim�nela si no desea que los usuarios vean el mensaje. -->"+
		  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
		  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Oc�ltela a IE mediante IECC. -->"+
		  "<!--[if !IE]>-->"+
		  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_Exe_6/L1_Exe_6b.swf\" width=\"45\" height=\"40\">"+
			"<!--<![endif]-->"+
			"<param name=\"quality\" value=\"high\" />"+
			"<param name=\"wmode\" value=\"transparent\" />"+
			"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
			"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
			"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
			"<div>"+
			  "<h4>El contenido de esta p�gina requiere una versi�n m�s reciente de Adobe Flash Player.</h4>"+
			  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
			"</div>"+
			"<!--[if !IE]>-->"+
		  "</object>"+
		  "<!--<![endif]-->"+
		"</object>";
		
		tblBtnCon = "<table width=\"120\" border=\"0\" cellpadding=\"1\" cellspacing=\"1\">"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image9','','../img/Btn_comvA_2.png',1)\"><img src=\"../img/Btn_comvA_1.png\" name=\"Image9\" width=\"156\" height=\"39\" border=\"0\" id=\"Image9\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image10','','../img/Btn_comvB_2.png',1)\"><img src=\"../img/Btn_comvB_2.png\" name=\"Image10\" width=\"156\" height=\"39\" border=\"0\" id=\"Image10\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image11','','../img/Btn_comvC_2.png',1)\"><img src=\"../img/Btn_comvC_1.png\" name=\"Image11\" width=\"156\" height=\"39\" border=\"0\" id=\"Image11\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(7)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image12','','../img/Btn_comvD_2.png',1)\"><img src=\"../img/Btn_comvD_1.png\" name=\"Image12\" width=\"156\" height=\"39\" border=\"0\" id=\"Image12\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(9)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../img/Btn_comvE_2.png',1)\"><img src=\"../img/Btn_comvE_1.png\" name=\"Image15\" width=\"156\" height=\"39\" border=\"0\" id=\"Image15\" /></a></td>"+
		  "</tr>"+
		"</table>";
		
		tblBtnNum = "<table aling  width=\"549\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"282\" align=\"right\">"+swf+"</td>"+
			"<td width=\"166\" align=\"right\"><a href=\"#\" onclick=\"cambiarDivL1Ex6(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image30','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_2.png\" name=\"Image30\" width=\"40\" height=\"53\" border=\"0\" id=\"Image30\" /></a></td>"+
			"<td width=\"3\" height=\"1\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"right\"><a href=\"#\" onclick=\"cambiarDivL1Ex6(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image31','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image31\" width=\"40\" height=\"53\" border=\"0\" id=\"Image31\" /></a></td>"+
			"<td width=\"58\">&nbsp;</td>"+
		  "</tr>"+
		"</table>";
		
		tblPts = "<table align=\"center\" width=\"120\" border=\"0\" cellpadding=\"0\" cellspacing=\"1\">"+
		  "<tr>"+
			"<td><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_color.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
		  "</tr>"+
		"</table>";
	}
	else if (idQst == 4)
	{
		prev = 3;
		next = 5;
		
		tblTxt = "<table width=\"355\" border=\"0\">"+
          "<tr>"+
            "<td width=\"177\" height=\"30\" class=\"texto_2_mediano\">The bank is near the"+
			"</td>"+
            "<td width=\"168\" class=\"texto_2_mediano\">"+
            "<div id=\"divAnswerE6\">"+
              "<input name=\"iptAnswerE6\" type=\"text\" class=\"bg_cien\" id=\"iptAnswerE6\" />"+
			  "<input type=\"hidden\" id=\"vez\" value=0 />"+
            "</div></td>"+
          "</tr>"+
        "</table>";
			
		tblAns = "<table align=\"left\" background=\"../img/bg_cuadro5.png\" width=\"227\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"227\" height=\"105\" align=\"center\" valign=\"middle\">"+
			"<div id=\"divTblAnsE6\">"+
			"<table width=\"185\" border=\"0\">"+
			  "<tr class=\"texto_2\">"+
				"<td width=\"15\" class=\"texto_2\"><strong>a.</strong></td>"+
				"<td width=\"160\" class=\"texto_2\" style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(4,'a')\">gas station<br /></td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
				"</tr>"+
			  "<tr class=\"texto_2\">"+
				"<td class=\"texto_2\"><strong>b.</strong></td>"+
				"<td style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(4,'b')\">police station</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
				"</tr>"+
			  "<tr class=\"texto_2\">"+
				"<td><strong>c.</strong></td>"+
				"<td style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(4,'c')\">train station</td>"+
			  "</tr>"+
			"</table></div></td>"+
		  "</tr>"+
		"</table>";
				
		swf = "<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\" id=\"FlashID4\" title=\"Conv A\">"+
		  "<param name=\"movie\" value=\"../swf/L1/L1_Exe_6/L1_Exe_6b.swf\" />"+
		  "<param name=\"quality\" value=\"high\" />"+
		  "<param name=\"wmode\" value=\"transparent\" />"+
		  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
		  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versi�n m�s reciente de Flash Player. Elim�nela si no desea que los usuarios vean el mensaje. -->"+
		  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
		  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Oc�ltela a IE mediante IECC. -->"+
		  "<!--[if !IE]>-->"+
		  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_Exe_6/L1_Exe_6b.swf\" width=\"45\" height=\"40\">"+
			"<!--<![endif]-->"+
			"<param name=\"quality\" value=\"high\" />"+
			"<param name=\"wmode\" value=\"transparent\" />"+
			"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
			"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
			"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
			"<div>"+
			  "<h4>El contenido de esta p�gina requiere una versi�n m�s reciente de Adobe Flash Player.</h4>"+
			  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
			"</div>"+
			"<!--[if !IE]>-->"+
		  "</object>"+
		  "<!--<![endif]-->"+
		"</object>";
		
		tblBtnCon = "<table width=\"120\" border=\"0\" cellpadding=\"1\" cellspacing=\"1\">"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image9','','../img/Btn_comvA_2.png',1)\"><img src=\"../img/Btn_comvA_1.png\" name=\"Image9\" width=\"156\" height=\"39\" border=\"0\" id=\"Image9\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image10','','../img/Btn_comvB_2.png',1)\"><img src=\"../img/Btn_comvB_2.png\" name=\"Image10\" width=\"156\" height=\"39\" border=\"0\" id=\"Image10\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image11','','../img/Btn_comvC_2.png',1)\"><img src=\"../img/Btn_comvC_1.png\" name=\"Image11\" width=\"156\" height=\"39\" border=\"0\" id=\"Image11\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(7)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image12','','../img/Btn_comvD_2.png',1)\"><img src=\"../img/Btn_comvD_1.png\" name=\"Image12\" width=\"156\" height=\"39\" border=\"0\" id=\"Image12\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(9)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../img/Btn_comvE_2.png',1)\"><img src=\"../img/Btn_comvE_1.png\" name=\"Image15\" width=\"156\" height=\"39\" border=\"0\" id=\"Image15\" /></a></td>"+
		  "</tr>"+
		"</table>";
		
		tblBtnNum = "<table aling  width=\"549\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"282\" align=\"right\">"+swf+"</td>"+
			"<td width=\"166\" align=\"right\"><a href=\"#\" onclick=\"cambiarDivL1Ex6(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image30','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image30\" width=\"40\" height=\"53\" border=\"0\" id=\"Image30\" /></a></td>"+
			"<td width=\"3\" height=\"1\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"right\"><a href=\"#\" onclick=\"cambiarDivL1Ex6(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image31','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_2.png\" name=\"Image31\" width=\"40\" height=\"53\" border=\"0\" id=\"Image31\" /></a></td>"+
			"<td width=\"58\">&nbsp;</td>"+
		  "</tr>"+
		"</table>";
		
		tblPts = "<table align=\"center\" width=\"120\" border=\"0\" cellpadding=\"0\" cellspacing=\"1\">"+
		  "<tr>"+
			"<td><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_color.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
		  "</tr>"+
		"</table>";
	}
	else if (idQst == 5)
	{
		prev = 4;
		next = 6;
		
		tblTxt = "<table width=\"410\" border=\"0\">"+
          "<tr>"+
            "<td width=\"224\" height=\"30\" class=\"texto_2_mediano\">The woman is looking for a"+
			"</td>"+
            "<td width=\"168\" class=\"texto_2_mediano\">"+
            "<div id=\"divAnswerE6\">"+
              "<input name=\"iptAnswerE6\" type=\"text\" class=\"bg_cien\" id=\"iptAnswerE6\" />"+
			  "<input type=\"hidden\" id=\"vez\" value=0 />"+
            "</div></td>"+
          "</tr>"+
        "</table>";
			
		tblAns = "<table align=\"left\" background=\"../img/bg_cuadro4.png\" width=\"148\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"142\" height=\"98\" align=\"center\" valign=\"middle\">"+
			"<div id=\"divTblAnsE6\">"+
			"<table width=\"109\" border=\"0\">"+
			  "<tr class=\"texto_2\">"+
				"<td width=\"15\" class=\"texto_2\"><strong>a.</strong></td>"+
				"<td width=\"84\" class=\"texto_2\" style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(5,'a')\">park</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
				"</tr>"+
			  "<tr class=\"texto_2\">"+
				"<td class=\"texto_2\"><strong>b.</strong></td>"+
				"<td style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(5,'b')\">bakery</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
				"</tr>"+
			  "<tr class=\"texto_2\">"+
				"<td><strong>c.</strong></td>"+
				"<td style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(5,'c')\">gym</td>"+
			  "</tr>"+
			"</table>"+
			"</div>"+
			"</td>"+
		  "</tr>"+
		"</table>";
				
		swf = "<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\" id=\"FlashID5\" title=\"Conv A\">"+
		  "<param name=\"movie\" value=\"../swf/L1/L1_Exe_6/L1_Exe_6c.swf\" />"+
		  "<param name=\"quality\" value=\"high\" />"+
		  "<param name=\"wmode\" value=\"transparent\" />"+
		  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
		  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versi�n m�s reciente de Flash Player. Elim�nela si no desea que los usuarios vean el mensaje. -->"+
		  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
		  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Oc�ltela a IE mediante IECC. -->"+
		  "<!--[if !IE]>-->"+
		  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_Exe_6/L1_Exe_6c.swf\" width=\"45\" height=\"40\">"+
			"<!--<![endif]-->"+
			"<param name=\"quality\" value=\"high\" />"+
			"<param name=\"wmode\" value=\"transparent\" />"+
			"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
			"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
			"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
			"<div>"+
			  "<h4>El contenido de esta p�gina requiere una versi�n m�s reciente de Adobe Flash Player.</h4>"+
			  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
			"</div>"+
			"<!--[if !IE]>-->"+
		  "</object>"+
		  "<!--<![endif]-->"+
		"</object>";
		
		tblBtnCon = "<table width=\"120\" border=\"0\" cellpadding=\"1\" cellspacing=\"1\">"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image9','','../img/Btn_comvA_2.png',1)\"><img src=\"../img/Btn_comvA_1.png\" name=\"Image9\" width=\"156\" height=\"39\" border=\"0\" id=\"Image9\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image10','','../img/Btn_comvB_2.png',1)\"><img src=\"../img/Btn_comvB_1.png\" name=\"Image10\" width=\"156\" height=\"39\" border=\"0\" id=\"Image10\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image11','','../img/Btn_comvC_2.png',1)\"><img src=\"../img/Btn_comvC_2.png\" name=\"Image11\" width=\"156\" height=\"39\" border=\"0\" id=\"Image11\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(7)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image12','','../img/Btn_comvD_2.png',1)\"><img src=\"../img/Btn_comvD_1.png\" name=\"Image12\" width=\"156\" height=\"39\" border=\"0\" id=\"Image12\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(9)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../img/Btn_comvE_2.png',1)\"><img src=\"../img/Btn_comvE_1.png\" name=\"Image15\" width=\"156\" height=\"39\" border=\"0\" id=\"Image15\" /></a></td>"+
		  "</tr>"+
		"</table>";
		
		tblBtnNum = "<table aling  width=\"549\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"282\" align=\"right\">"+swf+"</td>"+
			"<td width=\"166\" align=\"right\"><a href=\"#\" onclick=\"cambiarDivL1Ex6(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image30','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_2.png\" name=\"Image30\" width=\"40\" height=\"53\" border=\"0\" id=\"Image30\" /></a></td>"+
			"<td width=\"3\" height=\"1\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"right\"><a href=\"#\" onclick=\"cambiarDivL1Ex6(6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image31','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image31\" width=\"40\" height=\"53\" border=\"0\" id=\"Image31\" /></a></td>"+
			"<td width=\"58\">&nbsp;</td>"+
		  "</tr>"+
		"</table>";
		
		tblPts = "<table align=\"center\" width=\"120\" border=\"0\" cellpadding=\"0\" cellspacing=\"1\">"+
		  "<tr>"+
			"<td><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_color.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
		  "</tr>"+
		"</table>";
	}
	else if (idQst == 6)
	{
		prev = 5;
		next = 7;
		
		tblTxt = "<table width=\"171\" border=\"0\">"+
			  "<tr>"+
				"<td width=\"165\" height=\"30\" class=\"texto_2_mediano\">Where is it?</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td><div id=\"divAnswerE6\">"+
				  "<input name=\"iptAnswerE6\" type=\"text\" class=\"bg_cien\" id=\"iptAnswerE6\" />"+
				  "<input type=\"hidden\" id=\"vez\" value=0 />"+
				"</div></td>"+
			  "</tr>"+
			"</table>";
			
		tblAns = "<table align=\"left\" background=\"../img/bg_cuadro5.png\" width=\"227\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"227\" height=\"105\" align=\"center\" valign=\"middle\">"+
			"<div id=\"divTblAnsE6\">"+
			"<table width=\"185\" border=\"0\">"+
			  "<tr class=\"texto_2\">"+
				"<td width=\"15\" class=\"texto_2\"><strong>a.</strong></td>"+
				"<td width=\"160\" class=\"texto_2\" style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(6,'a')\">on Park Avenue<br /></td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
				"</tr>"+
			  "<tr class=\"texto_2\">"+
				"<td class=\"texto_2\"><strong>b.</strong></td>"+
				"<td style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(6,'b')\">on Mike Avenue</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
				"</tr>"+
			  "<tr class=\"texto_2\">"+
				"<td><strong>c.</strong></td>"+
				"<td style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(6,'c')\">on Riker's Avenue</td>"+
			  "</tr>"+
			"</table></div></td>"+
		  "</tr>"+
		"</table>";
				
		swf = "<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\" id=\"FlashID6\" title=\"Conv A\">"+
		  "<param name=\"movie\" value=\"../swf/L1/L1_Exe_6/L1_Exe_6c.swf\" />"+
		  "<param name=\"quality\" value=\"high\" />"+
		  "<param name=\"wmode\" value=\"transparent\" />"+
		  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
		  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versi�n m�s reciente de Flash Player. Elim�nela si no desea que los usuarios vean el mensaje. -->"+
		  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
		  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Oc�ltela a IE mediante IECC. -->"+
		  "<!--[if !IE]>-->"+
		  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_Exe_6/L1_Exe_6c.swf\" width=\"45\" height=\"40\">"+
			"<!--<![endif]-->"+
			"<param name=\"quality\" value=\"high\" />"+
			"<param name=\"wmode\" value=\"transparent\" />"+
			"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
			"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
			"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
			"<div>"+
			  "<h4>El contenido de esta p�gina requiere una versi�n m�s reciente de Adobe Flash Player.</h4>"+
			  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
			"</div>"+
			"<!--[if !IE]>-->"+
		  "</object>"+
		  "<!--<![endif]-->"+
		"</object>";
		
		tblBtnCon = "<table width=\"120\" border=\"0\" cellpadding=\"1\" cellspacing=\"1\">"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image9','','../img/Btn_comvA_2.png',1)\"><img src=\"../img/Btn_comvA_1.png\" name=\"Image9\" width=\"156\" height=\"39\" border=\"0\" id=\"Image9\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image10','','../img/Btn_comvB_2.png',1)\"><img src=\"../img/Btn_comvB_1.png\" name=\"Image10\" width=\"156\" height=\"39\" border=\"0\" id=\"Image10\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image11','','../img/Btn_comvC_2.png',1)\"><img src=\"../img/Btn_comvC_2.png\" name=\"Image11\" width=\"156\" height=\"39\" border=\"0\" id=\"Image11\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(7)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image12','','../img/Btn_comvD_2.png',1)\"><img src=\"../img/Btn_comvD_1.png\" name=\"Image12\" width=\"156\" height=\"39\" border=\"0\" id=\"Image12\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(9)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../img/Btn_comvE_2.png',1)\"><img src=\"../img/Btn_comvE_1.png\" name=\"Image15\" width=\"156\" height=\"39\" border=\"0\" id=\"Image15\" /></a></td>"+
		  "</tr>"+
		"</table>";
		
		tblBtnNum = "<table aling  width=\"549\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"282\" align=\"right\">"+swf+"</td>"+
			"<td width=\"166\" align=\"right\"><a href=\"#\" onclick=\"cambiarDivL1Ex6(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image30','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_2.png\" name=\"Image30\" width=\"40\" height=\"53\" border=\"0\" id=\"Image30\" /></a></td>"+
			"<td width=\"3\" height=\"1\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"right\"><a href=\"#\" onclick=\"cambiarDivL1Ex6(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image31','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image31\" width=\"40\" height=\"53\" border=\"0\" id=\"Image31\" /></a></td>"+
			"<td width=\"58\">&nbsp;</td>"+
		  "</tr>"+
		"</table>";
		
		tblPts = "<table align=\"center\" width=\"120\" border=\"0\" cellpadding=\"0\" cellspacing=\"1\">"+
		  "<tr>"+
			"<td><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_color.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
		  "</tr>"+
		"</table>";
	}
	else if (idQst == 7)
	{
		prev = 6;
		next = 8;
		
		tblTxt = "<table width=\"381\" border=\"0\">"+
          "<tr>"+
            "<td width=\"203\" height=\"30\" class=\"texto_2_mediano\">The man is going to the"+
			"</td>"+
            "<td width=\"168\" class=\"texto_2_mediano\">"+
            "<div id=\"divAnswerE6\">"+
              "<input name=\"iptAnswerE6\" type=\"text\" class=\"bg_cien\" id=\"iptAnswerE6\" />"+
			  "<input type=\"hidden\" id=\"vez\" value=0 />"+
            "</div></td>"+
          "</tr>"+
        "</table>";
			
		tblAns = "<table align=\"left\" background=\"../img/bg_cuadro5.png\" width=\"225\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"225\" height=\"103\" align=\"center\" valign=\"middle\">"+
			"<div id=\"divTblAnsE6\">"+
			"<table width=\"131\" border=\"0\">"+
			  "<tr class=\"texto_2\">"+
				"<td width=\"15\" class=\"texto_2\"><strong>a.</strong></td>"+
				"<td width=\"106\" class=\"texto_2\" style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(7,'a')\">mall</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
				"</tr>"+
			  "<tr class=\"texto_2\">"+
				"<td class=\"texto_2\"><strong>b.</strong></td>"+
				"<td style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(7,'b')\">movie theater</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
				"</tr>"+
			  "<tr class=\"texto_2\">"+
				"<td><strong>c.</strong></td>"+
				"<td style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(7,'c')\">police station</td>"+
			  "</tr>"+
			"</table>"+
			"</div>"+
			"</td>"+
			  "</tr>"+
			"</table>";
				
		swf = "<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\" id=\"FlashID7\" title=\"Conv A\">"+
		  "<param name=\"movie\" value=\"../swf/L1/L1_Exe_6/L1_Exe_6d.swf\" />"+
		  "<param name=\"quality\" value=\"high\" />"+
		  "<param name=\"wmode\" value=\"transparent\" />"+
		  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
		  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versi�n m�s reciente de Flash Player. Elim�nela si no desea que los usuarios vean el mensaje. -->"+
		  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
		  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Oc�ltela a IE mediante IECC. -->"+
		  "<!--[if !IE]>-->"+
		  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_Exe_6/L1_Exe_6d.swf\" width=\"45\" height=\"40\">"+
			"<!--<![endif]-->"+
			"<param name=\"quality\" value=\"high\" />"+
			"<param name=\"wmode\" value=\"transparent\" />"+
			"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
			"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
			"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
			"<div>"+
			  "<h4>El contenido de esta p�gina requiere una versi�n m�s reciente de Adobe Flash Player.</h4>"+
			  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
			"</div>"+
			"<!--[if !IE]>-->"+
		  "</object>"+
		  "<!--<![endif]-->"+
		"</object>";
		
		tblBtnCon = "<table width=\"120\" border=\"0\" cellpadding=\"1\" cellspacing=\"1\">"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image9','','../img/Btn_comvA_2.png',1)\"><img src=\"../img/Btn_comvA_1.png\" name=\"Image9\" width=\"156\" height=\"39\" border=\"0\" id=\"Image9\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image10','','../img/Btn_comvB_2.png',1)\"><img src=\"../img/Btn_comvB_1.png\" name=\"Image10\" width=\"156\" height=\"39\" border=\"0\" id=\"Image10\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image11','','../img/Btn_comvC_2.png',1)\"><img src=\"../img/Btn_comvC_1.png\" name=\"Image11\" width=\"156\" height=\"39\" border=\"0\" id=\"Image11\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(7)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image12','','../img/Btn_comvD_2.png',1)\"><img src=\"../img/Btn_comvD_2.png\" name=\"Image12\" width=\"156\" height=\"39\" border=\"0\" id=\"Image12\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(9)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../img/Btn_comvE_2.png',1)\"><img src=\"../img/Btn_comvE_1.png\" name=\"Image15\" width=\"156\" height=\"39\" border=\"0\" id=\"Image15\" /></a></td>"+
		  "</tr>"+
		"</table>";
		
		tblBtnNum = "<table aling  width=\"549\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"282\" align=\"right\">"+swf+"</td>"+
			"<td width=\"166\" align=\"right\"><a href=\"#\" onclick=\"cambiarDivL1Ex6(7)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image30','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_2.png\" name=\"Image30\" width=\"40\" height=\"53\" border=\"0\" id=\"Image30\" /></a></td>"+
			"<td width=\"3\" height=\"1\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"right\"><a href=\"#\" onclick=\"cambiarDivL1Ex6(8)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image31','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image31\" width=\"40\" height=\"53\" border=\"0\" id=\"Image31\" /></a></td>"+
			"<td width=\"58\">&nbsp;</td>"+
		  "</tr>"+
		"</table>";
		
		tblPts = "<table align=\"center\" width=\"120\" border=\"0\" cellpadding=\"0\" cellspacing=\"1\">"+
		  "<tr>"+
			"<td><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_color.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
		  "</tr>"+
		"</table>";
	}
	else if (idQst == 8)
	{
		prev = 7;
		next = 9;
		
		tblTxt = "<table width=\"171\" border=\"0\">"+
			  "<tr>"+
				"<td width=\"165\" height=\"30\" class=\"texto_2_mediano\">Where is it?</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td><div id=\"divAnswerE6\">"+
				  "<input name=\"iptAnswerE6\" type=\"text\" class=\"bg_cien\" id=\"iptAnswerE6\" />"+
				  "<input type=\"hidden\" id=\"vez\" value=0 />"+
				"</div></td>"+
			  "</tr>"+
			"</table>";
			
		tblAns = "<table align=\"left\" background=\"../img/bg_cuadro5.png\" width=\"225\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"225\" height=\"103\" align=\"center\" valign=\"middle\">"+
			"<div id=\"divTblAnsE6\">"+
			"<table width=\"131\" border=\"0\">"+
			  "<tr class=\"texto_2\">"+
				"<td width=\"15\" class=\"texto_2\"><strong>a.</strong></td>"+
				"<td width=\"106\" class=\"texto_2\" style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(8,'a')\">on 67th Street</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
				"</tr>"+
			  "<tr class=\"texto_2\">"+
				"<td class=\"texto_2\"><strong>b.</strong></td>"+
				"<td style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(8,'b')\">on 37th Street</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
				"</tr>"+
			  "<tr class=\"texto_2\">"+
				"<td><strong>c.</strong></td>"+
				"<td style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(8,'c')\">on 57th Street</td>"+
			  "</tr>"+
			"</table>"+
			"</div>"+
			"</td>"+
			  "</tr>"+
			"</table>";
				
		swf = "<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\" id=\"FlashID8\" title=\"Conv A\">"+
		  "<param name=\"movie\" value=\"../swf/L1/L1_Exe_6/L1_Exe_6d.swf\" />"+
		  "<param name=\"quality\" value=\"high\" />"+
		  "<param name=\"wmode\" value=\"transparent\" />"+
		  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
		  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versi�n m�s reciente de Flash Player. Elim�nela si no desea que los usuarios vean el mensaje. -->"+
		  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
		  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Oc�ltela a IE mediante IECC. -->"+
		  "<!--[if !IE]>-->"+
		  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_Exe_6/L1_Exe_6d.swf\" width=\"45\" height=\"40\">"+
			"<!--<![endif]-->"+
			"<param name=\"quality\" value=\"high\" />"+
			"<param name=\"wmode\" value=\"transparent\" />"+
			"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
			"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
			"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
			"<div>"+
			  "<h4>El contenido de esta p�gina requiere una versi�n m�s reciente de Adobe Flash Player.</h4>"+
			  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
			"</div>"+
			"<!--[if !IE]>-->"+
		  "</object>"+
		  "<!--<![endif]-->"+
		"</object>";
		
		tblBtnCon = "<table width=\"120\" border=\"0\" cellpadding=\"1\" cellspacing=\"1\">"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image9','','../img/Btn_comvA_2.png',1)\"><img src=\"../img/Btn_comvA_1.png\" name=\"Image9\" width=\"156\" height=\"39\" border=\"0\" id=\"Image9\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image10','','../img/Btn_comvB_2.png',1)\"><img src=\"../img/Btn_comvB_1.png\" name=\"Image10\" width=\"156\" height=\"39\" border=\"0\" id=\"Image10\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image11','','../img/Btn_comvC_2.png',1)\"><img src=\"../img/Btn_comvC_1.png\" name=\"Image11\" width=\"156\" height=\"39\" border=\"0\" id=\"Image11\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(7)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image12','','../img/Btn_comvD_2.png',1)\"><img src=\"../img/Btn_comvD_2.png\" name=\"Image12\" width=\"156\" height=\"39\" border=\"0\" id=\"Image12\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(9)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../img/Btn_comvE_2.png',1)\"><img src=\"../img/Btn_comvE_1.png\" name=\"Image15\" width=\"156\" height=\"39\" border=\"0\" id=\"Image15\" /></a></td>"+
		  "</tr>"+
		"</table>";
		
		tblBtnNum = "<table aling  width=\"549\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"282\" align=\"right\">"+swf+"</td>"+
			"<td width=\"166\" align=\"right\"><a href=\"#\" onclick=\"cambiarDivL1Ex6(7)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image30','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image30\" width=\"40\" height=\"53\" border=\"0\" id=\"Image30\" /></a></td>"+
			"<td width=\"3\" height=\"1\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"right\"><a href=\"#\" onclick=\"cambiarDivL1Ex6(8)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image31','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_2.png\" name=\"Image31\" width=\"40\" height=\"53\" border=\"0\" id=\"Image31\" /></a></td>"+
			"<td width=\"58\">&nbsp;</td>"+
		  "</tr>"+
		"</table>";
		
		tblPts = "<table align=\"center\" width=\"120\" border=\"0\" cellpadding=\"0\" cellspacing=\"1\">"+
		  "<tr>"+
			"<td><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_color.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
		  "</tr>"+
		"</table>";
	}
	else if (idQst == 9)
	{
		prev = 8;
		next = 10;
		
		tblTxt = "<table width=\"410\" border=\"0\">"+
          "<tr>"+
            "<td width=\"224\" height=\"30\" class=\"texto_2_mediano\">The woman is looking for a"+
			"</td>"+
            "<td width=\"168\" class=\"texto_2_mediano\">"+
            "<div id=\"divAnswerE6\">"+
              "<input name=\"iptAnswerE6\" type=\"text\" class=\"bg_cien\" id=\"iptAnswerE6\" />"+
			  "<input type=\"hidden\" id=\"vez\" value=0 />"+
            "</div></td>"+
          "</tr>"+
        "</table>";
			
		tblAns = "<table align=\"left\" background=\"../img/bg_cuadro4.png\" width=\"148\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"142\" height=\"98\" align=\"center\" valign=\"middle\">"+
			"<div id=\"divTblAnsE6\">"+
			"<table width=\"109\" border=\"0\">"+
			  "<tr class=\"texto_2\">"+
				"<td width=\"15\" class=\"texto_2\"><strong>a.</strong></td>"+
				"<td width=\"84\" class=\"texto_2\" style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(9,'a')\">bakery</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
				"</tr>"+
			  "<tr class=\"texto_2\">"+
				"<td class=\"texto_2\"><strong>b.</strong></td>"+
				"<td style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(9,'b')\">supermarket</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
				"</tr>"+
			  "<tr class=\"texto_2\">"+
				"<td><strong>c.</strong></td>"+
				"<td style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(9,'c')\">library</td>"+
			  "</tr>"+
			"</table>"+
			"</div>"+
			"</td>"+
		  "</tr>"+
		"</table>";
				
		swf = "<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\" id=\"FlashID9\" title=\"Conv A\">"+
		  "<param name=\"movie\" value=\"../swf/L1/L1_Exe_6/L1_Exe_6e.swf\" />"+
		  "<param name=\"quality\" value=\"high\" />"+
		  "<param name=\"wmode\" value=\"transparent\" />"+
		  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
		  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versi�n m�s reciente de Flash Player. Elim�nela si no desea que los usuarios vean el mensaje. -->"+
		  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
		  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Oc�ltela a IE mediante IECC. -->"+
		  "<!--[if !IE]>-->"+
		  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_Exe_6/L1_Exe_6e.swf\" width=\"45\" height=\"40\">"+
			"<!--<![endif]-->"+
			"<param name=\"quality\" value=\"high\" />"+
			"<param name=\"wmode\" value=\"transparent\" />"+
			"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
			"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
			"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
			"<div>"+
			  "<h4>El contenido de esta p�gina requiere una versi�n m�s reciente de Adobe Flash Player.</h4>"+
			  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
			"</div>"+
			"<!--[if !IE]>-->"+
		  "</object>"+
		  "<!--<![endif]-->"+
		"</object>";
		
		tblBtnCon = "<table width=\"120\" border=\"0\" cellpadding=\"1\" cellspacing=\"1\">"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image9','','../img/Btn_comvA_2.png',1)\"><img src=\"../img/Btn_comvA_1.png\" name=\"Image9\" width=\"156\" height=\"39\" border=\"0\" id=\"Image9\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image10','','../img/Btn_comvB_2.png',1)\"><img src=\"../img/Btn_comvB_1.png\" name=\"Image10\" width=\"156\" height=\"39\" border=\"0\" id=\"Image10\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image11','','../img/Btn_comvC_2.png',1)\"><img src=\"../img/Btn_comvC_1.png\" name=\"Image11\" width=\"156\" height=\"39\" border=\"0\" id=\"Image11\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(7)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image12','','../img/Btn_comvD_2.png',1)\"><img src=\"../img/Btn_comvD_1.png\" name=\"Image12\" width=\"156\" height=\"39\" border=\"0\" id=\"Image12\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(9)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../img/Btn_comvE_2.png',1)\"><img src=\"../img/Btn_comvE_2.png\" name=\"Image15\" width=\"156\" height=\"39\" border=\"0\" id=\"Image15\" /></a></td>"+
		  "</tr>"+
		"</table>";
		
		tblBtnNum = "<table aling  width=\"549\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"282\" align=\"right\">"+swf+"</td>"+
			"<td width=\"166\" align=\"right\"><a href=\"#\" onclick=\"cambiarDivL1Ex6(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image30','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_2.png\" name=\"Image30\" width=\"40\" height=\"53\" border=\"0\" id=\"Image30\" /></a></td>"+
			"<td width=\"3\" height=\"1\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"right\"><a href=\"#\" onclick=\"cambiarDivL1Ex6(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image31','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image31\" width=\"40\" height=\"53\" border=\"0\" id=\"Image31\" /></a></td>"+
			"<td width=\"58\">&nbsp;</td>"+
		  "</tr>"+
		"</table>";
		
		tblPts = "<table align=\"center\" width=\"120\" border=\"0\" cellpadding=\"0\" cellspacing=\"1\">"+
		  "<tr>"+
			"<td><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_color.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
		  "</tr>"+
		"</table>";
	}
	else if (idQst == 10)
	{
		prev = 9;
		next = 1;
		
		tblTxt = "<table width=\"171\" border=\"0\">"+
			  "<tr>"+
				"<td width=\"165\" height=\"30\" class=\"texto_2_mediano\">Where is it?</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td><div id=\"divAnswerE6\">"+
				  "<input name=\"iptAnswerE6\" type=\"text\" class=\"bg_cien\" id=\"iptAnswerE6\" />"+
				  "<input type=\"hidden\" id=\"vez\" value=0 />"+
				"</div></td>"+
			  "</tr>"+
			"</table>";
			
		tblAns = "<table align=\"left\" background=\"../img/bg_cuadro5.png\" width=\"227\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"227\" height=\"105\" align=\"center\" valign=\"middle\">"+
			"<div id=\"divTblAnsE6\">"+
			"<table width=\"185\" border=\"0\">"+
			  "<tr class=\"texto_2\">"+
				"<td width=\"15\" class=\"texto_2\"><strong>a.</strong></td>"+
				"<td width=\"160\" class=\"texto_2\" style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(10,'a')\">next to Harry's bakery<br /></td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
				"</tr>"+
			  "<tr class=\"texto_2\">"+
				"<td class=\"texto_2\"><strong>b.</strong></td>"+
				"<td style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(10,'b')\">on Hill Street</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
				"</tr>"+
			  "<tr class=\"texto_2\">"+
				"<td><strong>c.</strong></td>"+
				"<td style=\"cursor:pointer\" onclick=\"mostrarAnsL1E6(10,'c')\">both a and b</td>"+
			  "</tr>"+
			"</table></div></td>"+
		  "</tr>"+
		"</table>";
				
		swf = "<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\" id=\"FlashID10\" title=\"Conv A\">"+
		  "<param name=\"movie\" value=\"../swf/L1/L1_Exe_6/L1_Exe_6e.swf\" />"+
		  "<param name=\"quality\" value=\"high\" />"+
		  "<param name=\"wmode\" value=\"transparent\" />"+
		  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
		  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versi�n m�s reciente de Flash Player. Elim�nela si no desea que los usuarios vean el mensaje. -->"+
		  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
		  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Oc�ltela a IE mediante IECC. -->"+
		  "<!--[if !IE]>-->"+
		  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_Exe_6/L1_Exe_6e.swf\" width=\"45\" height=\"40\">"+
			"<!--<![endif]-->"+
			"<param name=\"quality\" value=\"high\" />"+
			"<param name=\"wmode\" value=\"transparent\" />"+
			"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
			"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
			"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
			"<div>"+
			  "<h4>El contenido de esta p�gina requiere una versi�n m�s reciente de Adobe Flash Player.</h4>"+
			  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
			"</div>"+
			"<!--[if !IE]>-->"+
		  "</object>"+
		  "<!--<![endif]-->"+
		"</object>";
		
		tblBtnCon = "<table width=\"120\" border=\"0\" cellpadding=\"1\" cellspacing=\"1\">"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image9','','../img/Btn_comvA_2.png',1)\"><img src=\"../img/Btn_comvA_1.png\" name=\"Image9\" width=\"156\" height=\"39\" border=\"0\" id=\"Image9\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image10','','../img/Btn_comvB_2.png',1)\"><img src=\"../img/Btn_comvB_1.png\" name=\"Image10\" width=\"156\" height=\"39\" border=\"0\" id=\"Image10\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image11','','../img/Btn_comvC_2.png',1)\"><img src=\"../img/Btn_comvC_1.png\" name=\"Image11\" width=\"156\" height=\"39\" border=\"0\" id=\"Image11\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(7)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image12','','../img/Btn_comvD_2.png',1)\"><img src=\"../img/Btn_comvD_1.png\" name=\"Image12\" width=\"156\" height=\"39\" border=\"0\" id=\"Image12\" /></a></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td><a href=\"#\" onclick=\"cambiarDivL1Ex6(9)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../img/Btn_comvE_2.png',1)\"><img src=\"../img/Btn_comvE_2.png\" name=\"Image15\" width=\"156\" height=\"39\" border=\"0\" id=\"Image15\" /></a></td>"+
		  "</tr>"+
		"</table>";
		
		tblBtnNum = "<table aling  width=\"549\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"282\" align=\"right\">"+swf+"</td>"+
			"<td width=\"166\" align=\"right\"><a href=\"#\" onclick=\"cambiarDivL1Ex6(9)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image30','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image30\" width=\"40\" height=\"53\" border=\"0\" id=\"Image30\" /></a></td>"+
			"<td width=\"3\" height=\"1\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"right\"><a href=\"#\" onclick=\"cambiarDivL1Ex6(10)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image31','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_2.png\" name=\"Image31\" width=\"40\" height=\"53\" border=\"0\" id=\"Image31\" /></a></td>"+
			"<td width=\"58\">&nbsp;</td>"+
		  "</tr>"+
		"</table>";
		
		tblPts = "<table align=\"center\" width=\"120\" border=\"0\" cellpadding=\"0\" cellspacing=\"1\">"+
		  "<tr>"+
			"<td><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td><img src=\"../img/12.punto_color.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
		  "</tr>"+
		"</table>";
	}
	html = "<table align=\"center\" width=\"755\" border=\"0\" cellpadding=\"0\" cellspacing=\"1\">"+
	  "<tr>"+
		"<td width=\"170\" height=\"198\" align=\"center\" valign=\"top\">"+tblBtnCon+"</td>"+
		"<td width=\"582\" align=\"center\" valign=\"middle\">"+tblBtnNum+
		"<table width=\"558\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"50\" height=\"141\" align=\"left\" valign=\"middle\"><a href=\"#\" onclick=\"cambiarDivL1Ex6("+prev+")\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image17','','../img/11.izq2.png',1)\"><img src=\"../img/11.izq.png\" name=\"Image17\" width=\"50\" height=\"55\" border=\"0\" id=\"Image17\" /></a></td>"+
			"<td width=\"444\" align=\"center\" valign=\"middle\" background=\"../img/bg_cuadro3.png\">"+tblTxt+"</td>"+
			"<td width=\"50\" align=\"right\" valign=\"middle\"><a href=\"#\" onclick=\"cambiarDivL1Ex6("+next+")\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/11.der2.png',1)\"><img src=\"../img/11.der.png\" name=\"Image16\" width=\"50\" height=\"55\" border=\"0\" id=\"Image16\" /></a></td>"+
		  "</tr>"+
		"</table>"+tblPts+
		"</td>"+
		"</tr>"+
	"</table>"+
	"<table align=\"right\" width=\"604\" border=\"0\">"+
	  "<tr>"+
		"<td width=\"221\" height=\"99\"><table align=\"center\" width=\"120\" border=\"0\">"+
		  "<tr>"+
			"<td align=\"center\"><div id=\"divCalL1E6\">&nbsp;</div></td>"+
			"</tr>"+
		"</table>"+
		"<div id=\"divBtn\">"+
		"<table align=\"center\"  background=\"../img/8.bg_refresh.png\"width=\"153\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"50\" height=\"53\" align=\"right\"><a href=\"#\" onclick=\"verificarL1E6("+idQst+",1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image27','','../img/8.btn_chulito2.png',1)\"><img src=\"../img/8.btn_chulito.png\" name=\"Image27\" width=\"25\" height=\"25\" border=\"0\" id=\"Image27\" /></a></td>"+
			"<td width=\"52\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E6("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image28','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image28\" width=\"25\" height=\"25\" border=\"0\" id=\"Image28\" /></a></td>"+
			"<td width=\"51\" align=\"left\"><img src=\"../img/8.btn_ojo_desab.png\" name=\"Image29\" width=\"29\" height=\"25\" border=\"0\" id=\"Image29\" /></td>"+
			"</tr>"+
		"</table></div></td>"+
		"<td width=\"373\" align=\"left\">"+tblAns+"&nbsp;</td>"+
	  "</tr>"+
	"</table>";
	
	$('#divL1_exer6').html(html);
}
/* Exercise 6 */


/* Exercise 7 */
function mostrarAnsL1Ex7(idQst, idAns)
{
	imgIpt = "good_p";
	if(idQst == 1)
	{
		if(idAns == 'T'){
			ipt = "iptAns1T";
			ipt2 = "iptAns1F";
			div = "divAns1T";
			div2 = "divAns1F";
			img = "good_p";
		}
		else{
			ipt = "iptAns1F";
			ipt2 = "iptAns1T";
			div = "divAns1F";
			div2 = "divAns1T";
			img = "good_No_p";
		}
	}
	else if(idQst == 2)
	{
		if(idAns == 'T'){
			ipt = "iptAns2T";
			ipt2 = "iptAns2F";
			div = "divAns2T";
			div2 = "divAns2F";
			img = "good_p";
		}
		else{
			ipt = "iptAns2F";
			ipt2 = "iptAns2T";
			div = "divAns2F";
			div2 = "divAns2T";
			img = "good_No_p";
		}
	}
	else if(idQst == 3)
	{
		if(idAns == 'T'){
			ipt = "iptAns3T";
			ipt2 = "iptAns3F";
			div = "divAns3T";
			div2 = "divAns3F";
			img = "good_p";
		}
		else{
			ipt = "iptAns3F";
			ipt2 = "iptAns3T";
			div = "divAns3F";
			div2 = "divAns3T";
			img = "good_No_p";
		}
	}
	else if(idQst == 4)
	{
		if(idAns == 'T'){
			ipt = "iptAns4T";
			ipt2 = "iptAns4F";
			div = "divAns4T";
			div2 = "divAns4F";
			img = "good_p";
		}
		else{
			ipt = "iptAns4F";
			ipt2 = "iptAns4T";
			div = "divAns4F";
			div2 = "divAns4T";
			img = "good_No_p";
		}
	}
	else if(idQst == 5)
	{
		if(idAns == 'T'){
			ipt = "iptAns5T";
			ipt2 = "iptAns5F";
			div = "divAns5T";
			div2 = "divAns5F";
			img = "good_p";
		}
		else{
			ipt = "iptAns5F";
			ipt2 = "iptAns5T";
			div = "divAns5F";
			div2 = "divAns5T";
			img = "good_No_p";
		}
	}
	
	html = "<img src=\"../img/"+img+".png\" width=\"23\" height=\"23\" />"+
			"<input type=\"hidden\" id=\""+ipt+"\" value=1 />";
	$('#'+div).html(html);
	cleanAnsL1E7(div2, ipt2);
}

function cleanAnsL1E7(div, ipt)
{
	html = "&nbsp;"+
			"<input type=\"hidden\" id=\""+ipt+"\" value=0 />";
	$('#'+div).html(html);
}

function verificarL1E7(idBtn)
{
	vez = $("#vez").val();
	img = "";
	
	ans_1T = $("#iptAns1T").val();
	ans_1F = $("#iptAns1F").val();
	
	ans_2T = $("#iptAns2T").val();
	ans_2F = $("#iptAns2F").val();
	
	ans_3T = $("#iptAns3T").val();
	ans_3F = $("#iptAns3F").val();
	
	ans_4T = $("#iptAns4T").val();
	ans_4F = $("#iptAns4F").val();
	
	ans_5T = $("#iptAns5T").val();
	ans_5F = $("#iptAns5F").val();
	
	vald = parseInt(ans_1T) + parseInt(ans_1F) + parseInt(ans_2T) + parseInt(ans_2F) + parseInt(ans_3T) + parseInt(ans_3F);
	vald = vald + parseInt(ans_4T) + parseInt(ans_4F) + parseInt(ans_5T) + parseInt(ans_5F);
	
	if(vald == 0 && idBtn != 3)
		alert("You must select the answers.");
	else
	{
		if(idBtn == 1){
			img_1 = "&nbsp;";
			img_2 = "&nbsp;";
			img_3 = "&nbsp;";
			img_4 = "&nbsp;";
			img_5 = "&nbsp;";
			
			if(ans_1T == 1){
				img_1T = "<img src=\"../img/good_p.png\" width=\"23\" height=\"23\" />";
				img_1F = "&nbsp;";
				ipt_1T = 1;
				ipt_1F = 0;
				img_1 = "<img src=\"../img/good_p.png\" width=\"23\" height=\"23\" />";
			}
			else if(ans_1F == 1){
				img_1T = "&nbsp;";
				img_1F = "<img src=\"../img/good_No_p.png\" width=\"23\" height=\"23\" />";
				ipt_1T = 0;
				ipt_1F = 1;
				img_1 = "<img src=\"../img/good_No_p.png\" width=\"23\" height=\"23\" />";
				//alert("Hola");
			}
			else{
				img_1T = "&nbsp;";
				img_1F = "&nbsp;";
				ipt_1T = 0;
				ipt_1F = 0;
				img_1 = "&nbsp;";
			}
			
			if(ans_2F == 1){
				img_2 = "<img src=\"../img/good_p.png\" width=\"23\" height=\"23\" />";
				img_2T = "&nbsp;";
				img_2F = "<img src=\"../img/good_No_p.png\" width=\"23\" height=\"23\" />";
				ipt_2T = 0;
				ipt_2F = 1;
			}
			else if(ans_2T == 1){
				img_2 = "<img src=\"../img/good_No_p.png\" width=\"23\" height=\"23\" />";
				img_2T = "<img src=\"../img/good_p.png\" width=\"23\" height=\"23\" />";
				img_2F = "&nbsp;";
				ipt_2T = 1;
				ipt_2F = 0;
			}
			else{
				img_2T = "&nbsp;";
				img_2F = "&nbsp;";
				ipt_2T = 0;
				ipt_2F = 0;
				img_2 = "&nbsp;";
			}
				
			if(ans_3T == 1){
				img_3T = "<img src=\"../img/good_p.png\" width=\"23\" height=\"23\" />";
				img_3F = "&nbsp;";
				ipt_3T = 1;
				ipt_3F = 0;
				img_3 = "<img src=\"../img/good_p.png\" width=\"23\" height=\"23\" />";
			}
			else if(ans_3F == 1){
				img_3T = "&nbsp;";
				img_3F = "<img src=\"../img/good_No_p.png\" width=\"23\" height=\"23\" />";
				ipt_3T = 0;
				ipt_3F = 1;
				img_3 = "<img src=\"../img/good_No_p.png\" width=\"23\" height=\"23\" />";
			}
			else{
				img_3T = "&nbsp;";
				img_3F = "&nbsp;";
				ipt_3T = 0;
				ipt_3F = 0;
				img_3 = "&nbsp;";
			}
				
			if(ans_4F == 1){
				img_4T = "&nbsp;";
				img_4F = "<img src=\"../img/good_No_p.png\" width=\"23\" height=\"23\" />";
				ipt_4T = 0;
				ipt_4F = 1;
				img_4 = "<img src=\"../img/good_p.png\" width=\"23\" height=\"23\" />";
			}
			else if(ans_4T == 1){
				img_4T = "<img src=\"../img/good_p.png\" width=\"23\" height=\"23\" />";
				img_4F = "&nbsp;";
				ipt_4T = 1;
				ipt_4F = 0;
				img_4 = "<img src=\"../img/good_No_p.png\" width=\"23\" height=\"23\" />";
			}
			else{
				img_4T = "&nbsp;";
				img_4F = "&nbsp;";
				ipt_4T = 0;
				ipt_4F = 0;
				img_4 = "&nbsp;";
			}
				
			if(ans_5T == 1){
				img_5T = "<img src=\"../img/good_p.png\" width=\"23\" height=\"23\" />";
				img_5F = "&nbsp;";
				ipt_5T = 1;
				ipt_5F = 0;
				img_5 = "<img src=\"../img/good_p.png\" width=\"23\" height=\"23\" />";
			}
			else if(ans_5F == 1){
				img_5T = "&nbsp;";
				img_5F = "<img src=\"../img/good_No_p.png\" width=\"23\" height=\"23\" />";
				ipt_5T = 0;
				ipt_5F = 1;
				img_5 = "<img src=\"../img/good_No_p.png\" width=\"23\" height=\"23\" />";
			}
			else{
				img_5T = "&nbsp;";
				img_5F = "&nbsp;";
				ipt_5T = 0;
				ipt_5F = 0;
				img_5 = "&nbsp;";
			}
		}
		else if(idBtn == 3)
		{
			img_1T = "<img src=\"../img/good_p.png\" width=\"23\" height=\"23\" />";
			img_1F = "&nbsp;";
			ipt_1T = 1;
			ipt_1F = 0;
			img_1 = "&nbsp;";
			
			img_2T = "&nbsp;";
			img_2F = "<img src=\"../img/good_No_p.png\" width=\"23\" height=\"23\" />";
			ipt_2T = 0;
			ipt_2F = 1;
			img_2 = "&nbsp;";
			
			img_3T = "<img src=\"../img/good_p.png\" width=\"23\" height=\"23\" />";
			img_3F = "&nbsp;";
			ipt_3T = 1;
			ipt_3F = 0;
			img_3 = "&nbsp;";
			
			img_4T = "&nbsp;";
			img_4F = "<img src=\"../img/good_No_p.png\" width=\"23\" height=\"23\" />";
			ipt_4T = 0;
			ipt_4F = 1;
			img_4 = "&nbsp;";
			
			img_5T = "<img src=\"../img/good_p.png\" width=\"23\" height=\"23\" />";
			img_5F = "&nbsp;";
			ipt_5T = 1;
			ipt_5F = 0;
			img_5 = "&nbsp;";
			
			actualizarBtnL1E7(idBtn);
		}	
		else if(idBtn == 2){
			if(vez >= 2)
				actualizarBtnL1E7(idBtn);
			vez = parseInt(vez) + 1;
			
			img_1T = "&nbsp;";
			img_1F = "&nbsp;";
			ipt_1T = 0;
			ipt_1F = 0;
			img_1 = "&nbsp;";
			
			img_2T = "&nbsp;";
			img_2F = "&nbsp;";
			ipt_2T = 0;
			ipt_2F = 0;
			img_2 = "&nbsp;";
			
			img_3T = "&nbsp;";
			img_3F = "&nbsp;";
			ipt_3T = 0;
			ipt_3F = 0;
			img_3 = "&nbsp;";
			
			img_4T = "&nbsp;";
			img_4F = "&nbsp;";
			ipt_4T = 0;
			ipt_4F = 0;
			img_4 = "&nbsp;";
			
			img_5T = "&nbsp;";
			img_5F = "&nbsp;";
			ipt_5T = 0;
			ipt_5F = 0;
			img_5 = "&nbsp;";

		}
			
		html = "<table cellpadding=\"0\" cellspacing=\"0\" width=\"456\" border=\"0\">"+
			  "<tr>"+
				"<td width=\"28\" class=\"texto_2\">&nbsp;</td>"+
				"<td width=\"293\">&nbsp;</td>"+
				"<td width=\"9\">&nbsp;</td>"+
				"<td width=\"51\" align=\"center\"><img src=\"../img/T.true.png\" width=\"51\" height=\"21\" /></td>"+
				"<td width=\"51\" align=\"center\"><img src=\"../img/T.false.png\" width=\"51\" height=\"21\" /></td>"+
				"<td width=\"24\">&nbsp;</td>"+
				"</tr>"+
			  "<tr>"+
				"<td height=\"48\" align=\"center\" class=\"texto_2\"><strong>1.</strong></td>"+
				"<td class=\"texto_2\">The library is between the school and the bakery.</td>"+
				"<td>&nbsp;</td>"+
				"<td align=\"center\" valign=\"middle\"><table background=\"../img/bg_chek.png\" width=\"35\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"29\" height=\"48\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL1Ex7(1,'T')\">"+
						"<div id=\"divAns1T\">"+img_1T+"<input type=\"hidden\" id=\"iptAns1T\" value="+ipt_1T+" /></div>"+
					"</td>"+
				  "</tr>"+
				"</table></td>"+
				"<td align=\"center\" valign=\"middle\"><table background=\"../img/bg_chek.png\" width=\"35\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"29\" height=\"48\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL1Ex7(1,'F')\">"+
						"<div id=\"divAns1F\">"+img_1F+"<input type=\"hidden\" id=\"iptAns1F\" value="+ipt_1F+" /></div>"+
					"</td>"+
				  "</tr>"+
				"</table></td>"+
				"<td align=\"center\" valign=\"middle\">"+img_1+"</td>"+
				"</tr>"+
			 "<tr>"+
				"<td height=\"48\" align=\"center\" class=\"texto_2\"><strong class=\"texto_1\">2.</strong></td>"+
				"<td class=\"texto_1\">The hotel is on the corner of Second Avenue and Willow Street. </td>"+
				"<td>&nbsp;</td>"+
				"<td align=\"center\" valign=\"middle\"><table background=\"../img/bg_chek.png\" width=\"35\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"29\" height=\"48\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL1Ex7(2,'T')\">"+
						"<div id=\"divAns2T\">"+img_2T+"<input type=\"hidden\" id=\"iptAns2T\" value="+ipt_2T+" /></div>"+
					"</td>"+
				  "</tr>"+
				"</table></td>"+
				"<td align=\"center\" valign=\"middle\"><table background=\"../img/bg_chek.png\" width=\"35\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"29\" height=\"48\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL1Ex7(2,'F')\">"+
						"<div id=\"divAns2F\">"+img_2F+"<input type=\"hidden\" id=\"iptAns2F\" value="+ipt_2F+" /></div>"+
					"</td>"+
				  "</tr>"+
				"</table></td>"+
				"<td align=\"center\" valign=\"middle\">"+img_2+"</td>"+
				"</tr>"+
				"<tr>"+
				"<td height=\"48\" align=\"center\" class=\"texto_2\"><strong class=\"texto_2\">3.</strong></td>"+
				"<td class=\"texto_2\">The train station is on Second Avenue. </td>"+
				"<td>&nbsp;</td>"+
				"<td align=\"center\" valign=\"middle\"><table background=\"../img/bg_chek.png\" width=\"35\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"29\" height=\"48\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL1Ex7(3,'T')\">"+
						"<div id=\"divAns3T\">"+img_3T+"<input type=\"hidden\" id=\"iptAns3T\" value="+ipt_3T+" /></div>"+
					"</td>"+
				  "</tr>"+
				"</table></td>"+
				"<td align=\"center\" valign=\"middle\"><table background=\"../img/bg_chek.png\" width=\"35\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"29\" height=\"48\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL1Ex7(3,'F')\">"+
						"<div id=\"divAns3F\">"+img_3F+"<input type=\"hidden\" id=\"iptAns3F\" value="+ipt_3F+" /></div>"+
					"</td>"+
				  "</tr>"+
				"</table></td>"+
				"<td align=\"center\" valign=\"middle\">"+img_3+"</td>"+
				"</tr>"+
				"<tr>"+
				"<td height=\"48\" align=\"center\" class=\"texto_2\"><strong class=\"texto_1\">4.</strong></td>"+
				"<td class=\"texto_1\">The supermarket is across the street from the hospital. </td>"+
				"<td>&nbsp;</td>"+
				"<td align=\"center\" valign=\"middle\"><table background=\"../img/bg_chek.png\" width=\"35\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"29\" height=\"48\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL1Ex7(4,'T')\">"+
						"<div id=\"divAns4T\">"+img_4T+"<input type=\"hidden\" id=\"iptAns4T\" value="+ipt_4T+" /></div>"+
					"</td>"+
				  "</tr>"+
				"</table></td>"+
				"<td align=\"center\" valign=\"middle\"><table background=\"../img/bg_chek.png\" width=\"35\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"29\" height=\"48\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL1Ex7(4,'F')\">"+
						"<div id=\"divAns4F\">"+img_4F+"<input type=\"hidden\" id=\"iptAns4F\" value="+ipt_4F+" /></div>"+
					"</td>"+
				  "</tr>"+
				"</table></td>"+
				"<td align=\"center\" valign=\"middle\">"+img_4+"</td>"+
				"</tr>"+
				"<tr>"+
				"<td height=\"48\" align=\"center\" class=\"texto_2\"><strong class=\"texto_2\">5.</strong></td>"+
				"<td class=\"texto_2\">The movie theater is behind the library </td>"+
				"<td>&nbsp;</td>"+
				"<td align=\"center\" valign=\"middle\"><table background=\"../img/bg_chek.png\" width=\"35\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"29\" height=\"48\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL1Ex7(5,'T')\">"+
						"<div id=\"divAns5T\">"+img_5T+"<input type=\"hidden\" id=\"iptAns5T\" value="+ipt_5T+" /></div>"+
					"</td>"+
				  "</tr>"+
				"</table></td>"+
				"<td align=\"center\" valign=\"middle\"><table background=\"../img/bg_chek.png\" width=\"35\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"29\" height=\"48\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL1Ex7(5,'F')\">"+
						"<div id=\"divAns5F\">"+img_5F+"<input type=\"hidden\" id=\"iptAns5F\" value="+ipt_5F+" /></div>"+
					"</td>"+
				  "</tr>"+
				"</table></td>"+
				"<td align=\"center\" valign=\"middle\">"+img_5+"</td>"+
				"</tr><input type=\"hidden\" id=\"vez\" value="+vez+" />"+
			  "</table";
			
		$('#divTblE7').html(html);
		actualizardivCalL1E7(img);
	}
}

function actualizarBtnL1E7(idBtn)
{
	if(idBtn == 3)
		btn = "<table background=\"../img/8.bg_refresh.png\" width=\"154\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"61\" height=\"52\" align=\"center\" valign=\"middle\"><img src=\"../img/8.btn_chulito_desab.png\" name=\"Image23\" width=\"25\" height=\"25\" border=\"0\" id=\"Image23\" /></td>"+
			"<td width=\"31\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E7(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image24','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image24\" width=\"25\" height=\"25\" border=\"0\" id=\"Image24\" /></a></td>"+
			"<td width=\"62\" align=\"center\"><a href=\"#\" onclick=\"verificarL1E7(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image25','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image25\" width=\"29\" height=\"25\" border=\"0\" id=\"Image25\" /></a></td>"+
		  "</tr>"+
		"</table>";
	else
		btn = "<table background=\"../img/8.bg_refresh.png\" width=\"154\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"61\" height=\"52\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E7(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image23','','../img/8.btn_chulito2.png',1)\"><img src=\"../img/8.btn_chulito.png\" name=\"Image23\" width=\"25\" height=\"25\" border=\"0\" id=\"Image23\" /></a></td>"+
			"<td width=\"31\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E7(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image24','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image24\" width=\"25\" height=\"25\" border=\"0\" id=\"Image24\" /></a></td>"+
			"<td width=\"62\" align=\"center\"><a href=\"#\" onclick=\"verificarL1E7(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image25','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image25\" width=\"29\" height=\"25\" border=\"0\" id=\"Image25\" /></a></td>"+
		  "</tr>"+
		"</table>";
			
	$('#divBtn').html(btn);
}

function actualizardivCalL1E7(img)
{
	//alert(idBtn);
	if(img != "")
		html = "<img src=\"../img/"+img+".png\" width=\"30\" height=\"30\" />";
	else		
		html = "&nbsp;";
	
	$('#divCalL1E7').html(html);
}
/* Exercise 7 */


/* Exercise 9 */ 
function mostrarAnsL1E9(idQst, idAns)
{
	vez = $("#vez").val();
	
	if (idQst == 1)
	{
		txt1 = "The library is";
		txt2 = "the movie theater.";
		
		if(idAns == 'a')
			ans = "next to";
		else if(idAns == 'b')
			ans = "behind";
		else if(idAns == 'c')
			ans = "on the corner of";
	}
	else if(idQst == 2)
	{
		txt1 = "The school is";
		txt2 = "the supermarket.";
		
		if(idAns == 'a')
			ans = "across the street from";
		else if(idAns == 'b')
			ans = "down the street";
		else if(idAns == 'c')
			ans = "nearby";
	}
	else if(idQst == 4)
	{
		txt1 = "The hospital is";
		txt2 = "the supermarket.";
		
		if(idAns == 'a')
			ans = "far from";
		else if(idAns == 'b')
			ans = "next to";
		else if(idAns == 'c')
			ans = "across the street from";
	}
	else if(idQst == 5)
	{
		if(idAns == 'a')
			ans = "down the street";
		else if(idAns == 'b')
			ans = "behind";
		else if(idAns == 'c')
			ans = "next to";
	}
			
	
	if(idQst == 3){
		if(idAns == 'a'){
			ans1 = "between";
			ans2 = "and"; }
		else if(idAns == 'b'){
			ans1 = "on the corner of";
			ans2 = "and";
		}
		else if(idAns == 'c'){
			ans1 = "between/on the corner of";
			ans2 = "and";
		}
		inpt = "<table align=\"center\"  cellpadding=\"0\" cellspacing=\"2\" width=\"304\" border=\"0\">"+
              "<tr>"+
                "<td width=\"129\" height=\"30\" class=\"texto_2\">The copy shop is </td>"+
                "<td width=\"110\">"+
                  "<input name=\"iptAnswerE9\" type=\"text\" class=\"bg_cien2\" id=\"iptAnswerE9\" value=\""+ans1+"\" />"+
                "</td>"+
                "<td width=\"57\"><span class=\"texto_2\">First</span></td>"+
              "</tr>"+
            "</table>"+
            "<table align=\"center\"  cellpadding=\"0\" cellspacing=\"2\" width=\"304\" border=\"0\">"+
              "<tr>"+
                "<td width=\"59\" height=\"30\" class=\"texto_2\">Avenue </td>"+
                "<td width=\"110\">"+
                  "<input name=\"iptAnswer2E9\" type=\"text\" class=\"bg_cien2\" id=\"iptAnswer2E9\" value=\""+ans2+"\" />"+
                "</td>"+
                "<td width=\"127\" class=\"texto_2\">Brown Street.</td>"+
                "</tr>"+
            "</table>"+
			"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
	}
	else if(idQst == 5)
		inpt = "<table align=\"center\"  cellpadding=\"0\" cellspacing=\"2\" width=\"314\" border=\"0\">"+
				  "<tr>"+
					"<td width=\"130\" height=\"30\" class=\"texto_2\">The train station is<br /></td>"+
					"<td width=\"168\">"+
					  "<input name=\"iptAnswerE9\" type=\"text\" class=\"bg_cien\" id=\"iptAnswerE9\" value=\""+ans+"\" />"+
					"</td>"+
				  "</tr>"+
				"</table>"+
				"<table align=\"center\"  cellpadding=\"0\" cellspacing=\"2\" width=\"312\" border=\"0\">"+
				  "<tr>"+
					"<td width=\"302\" height=\"30\" class=\"texto_2\">the hotel.</td>"+
					"</tr>"+
				"</table><input type=\"hidden\" id=\"vez\" value="+vez+" />";
	else
		inpt = "<table align=\"center\"  cellpadding=\"0\" cellspacing=\"2\" width=\"304\" border=\"0\">"+
              "<tr>"+
                "<td width=\"103\" height=\"30\" class=\"texto_2\">"+txt1+"<br /></td>"+
                "<td width=\"195\">"+
                  "<input name=\"iptAnswerE9\" type=\"text\" class=\"bg_cien\" id=\"iptAnswerE9\" value=\""+ans+"\" />"+
                "</td>"+
              "</tr>"+
            "</table>"+
            "<table align=\"center\"  cellpadding=\"0\" cellspacing=\"2\" width=\"304\" border=\"0\">"+
              "<tr>"+
                "<td height=\"30\" class=\"texto_2\">"+txt2+"</td>"+
                "</tr>"+
            "</table>"+
			"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
	
	$('#divAnswerE9').html(inpt); 
	AnsL1E9Selec(idQst, idAns);
}

function AnsL1E9Selec(idQst, idAns)
{
	img = "";
	class1 = "texto_2";
	class2 = "texto_2";
	class3 = "texto_2";
	
	if(idAns == 'a')
		class1 = "texto_3";
	else if(idAns == 'b')
		class2 = "texto_3";
	else if (idAns == 'c')
		class3 = "texto_3";

	if (idQst == 1)
	{
		tblAns = "<table width=\"146\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
              "<tr class=\""+class1+"\">"+
                "<td width=\"23\" height=\"25\"><strong>a.</strong></td>"+
                "<td width=\"123\" style=\"cursor:pointer;\" onclick=\"mostrarAnsL1E9(1,'a')\">next to</td>"+
              "</tr>"+
              "<tr>"+
                "<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
                "</tr>"+
              "<tr>"+
                "<td height=\"25\"><strong class=\""+class2+"\">b.</strong></td>"+
                "<td class=\""+class2+"\" style=\"cursor:pointer;\" onclick=\"mostrarAnsL1E9(1,'b')\"> behind</td>"+
              "</tr>"+
              "<tr>"+
                "<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
                "</tr>"+
              "<tr class=\""+class3+"\">"+
                "<td height=\"25\"><strong>c.</strong></td>"+
                "<td style=\"cursor:pointer;\" onclick=\"mostrarAnsL1E9(1,'c')\">on the corner of</td>"+
              "</tr>"+
            "</table>";
	}
	else if(idQst == 2)
	{		
		tblAns = "<table width=\"186\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
              "<tr class=\""+class1+"\">"+
                "<td width=\"23\" height=\"25\"><strong>a.</strong></td>"+
                "<td width=\"163\" style=\"cursor:pointer;\" onclick=\"mostrarAnsL1E9(2,'a')\">across the street from</td>"+
              "</tr>"+
              "<tr>"+
                "<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
                "</tr>"+
              "<tr>"+
                "<td height=\"25\"><strong class=\""+class2+"\">b.</strong></td>"+
                "<td class=\""+class2+"\" style=\"cursor:pointer;\" onclick=\"mostrarAnsL1E9(2,'b')\">down the street</td>"+
              "</tr>"+
              "<tr>"+
                "<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
                "</tr>"+
              "<tr class=\""+class3+"\">"+
                "<td height=\"25\"><strong>c.</strong></td>"+
                "<td style=\"cursor:pointer;\" onclick=\"mostrarAnsL1E9(2,'c')\">nearby</td>"+
              "</tr>"+
            "</table>";
	}
	else if(idQst == 3)
	{
		tblAns = "<table width=\"186\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
              "<tr class=\""+class1+"\">"+
                "<td width=\"23\" height=\"25\"><strong>a.</strong></td>"+
                "<td width=\"163\" style=\"cursor:pointer;\" onclick=\"mostrarAnsL1E9(3,'a')\">between &hellip; and</td>"+
              "</tr>"+
              "<tr>"+
                "<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
                "</tr>"+
              "<tr>"+
                "<td height=\"25\"><strong class=\""+class2+"\">b.</strong></td>"+
                "<td class=\""+class2+"\" style=\"cursor:pointer;\" onclick=\"mostrarAnsL1E9(3,'b')\">on the corner of &hellip; and</td>"+
              "</tr>"+
              "<tr>"+
                "<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
                "</tr>"+
              "<tr class=\""+class3+"\">"+
                "<td height=\"25\"><strong>c.</strong></td>"+
                "<td style=\"cursor:pointer;\" onclick=\"mostrarAnsL1E9(3,'c')\">a and b are correct</td>"+
              "</tr>"+
            "</table>";
	}
	else if(idQst == 4)
	{
		tblAns = "<table width=\"186\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
              "<tr class=\""+class1+"\">"+
                "<td width=\"23\" height=\"25\"><strong>a.</strong></td>"+
                "<td width=\"163\" style=\"cursor:pointer;\" onclick=\"mostrarAnsL1E9(4,'a')\">far from</td>"+
              "</tr>"+
              "<tr>"+
                "<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
                "</tr>"+
              "<tr>"+
                "<td height=\"25\"><strong class=\""+class2+"\">b.</strong></td>"+
                "<td class=\""+class2+"\" style=\"cursor:pointer;\" onclick=\"mostrarAnsL1E9(4,'b')\">next to</td>"+
              "</tr>"+
              "<tr>"+
                "<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
                "</tr>"+
              "<tr class=\""+class3+"\">"+
                "<td height=\"25\"><strong>c.</strong></td>"+
                "<td style=\"cursor:pointer;\" onclick=\"mostrarAnsL1E9(4,'c')\">across the street from</td>"+
              "</tr>"+
            "</table>";
	}
	else if(idQst == 5)
	{
		tblAns = "<table width=\"146\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
              "<tr class=\""+class1+"\">"+
                "<td width=\"23\" height=\"25\"><strong>a.</strong></td>"+
                "<td width=\"123\" style=\"cursor:pointer;\" onclick=\"mostrarAnsL1E9(5,'a')\">down the street</td>"+
              "</tr>"+
              "<tr>"+
                "<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
                "</tr>"+
              "<tr>"+
                "<td height=\"25\"><strong class=\""+class2+"\">b.</strong></td>"+
                "<td class=\""+class2+"\" style=\"cursor:pointer;\" onclick=\"mostrarAnsL1E9(5,'b')\">behind</td>"+
              "</tr>"+
              "<tr>"+
                "<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
                "</tr>"+
              "<tr class=\""+class3+"\">"+
                "<td height=\"25\"><strong>c.</strong></td>"+
                "<td style=\"cursor:pointer;\" onclick=\"mostrarAnsL1E9(5,'c')\">next to</td>"+
              "</tr>"+
            "</table>";
	}
	
	$('#divTblAnsE9').html(tblAns); 
	actualizardivCalL1E9(img);
}

function verificarL1E9(idQst, idBtn)
{
	ansL1E9 = $("#iptAnswerE9").val();
	ansL1E9_2 = $("#iptAnswer2E9").val();
	vez = $("#vez").val();
	
	img = "";
	if(ansL1E9 == "" && idBtn != 3)
		alert("You must select an answer.");
	else{
		if(idBtn == 1)
		{
			if(idQst == 1 && ansL1E9 == 'behind')
				img = "good";
			else if (idQst == 2 && ansL1E9 == 'across the street from')
				img = "good";
			else if (idQst == 3 && ansL1E9 == 'between/on the corner of' && ansL1E9_2 == 'and')
				img = "good";
			else if (idQst == 4 && ansL1E9 == 'far from')
				img = "good";
			else if (idQst == 5 && ansL1E9 == 'next to')
				img = "good";
			else
				img = "good_No";
		}
		else{
			if(idBtn == 3)
			{
				switch (idQst){
				case 1:
					txt1 = "The library is";
					txt2 = "the movie theater.";
					value = "behind";
				break;
				case 2:
					txt1 = "The school is";
					txt2 = "the supermarket.";
					value = "across the street from ";
				break;
				case 3:
					value = "between/on the corner of";
					value2 = "and";
				break;
				case 4:
					txt1 = "The hospital is";
					txt2 = "the supermarket.";
					value = "far from";
				break;
				case 5:
					txt1 = "The train station is";
					txt2 = "the hotel.";
					value = "next to";
				break;}
				actualizarBtnL1E9(idQst, idBtn);
			}	
			else if(idBtn == 2){
				value = "";
				value2 = "";
				if(vez >= 2)
					actualizarBtnL1E9(idQst, idBtn);
				vez = parseInt(vez) + 1;
				AnsL1E9Selec(idQst);
			}
			
			if(idQst == 3)
				iptAns = "<table align=\"center\"  cellpadding=\"0\" cellspacing=\"2\" width=\"304\" border=\"0\">"+
					  "<tr>"+
						"<td width=\"129\" height=\"30\" class=\"texto_2\">The copy shop is </td>"+
						"<td width=\"110\">"+
						  "<input name=\"iptAnswerE9\" type=\"text\" class=\"bg_cien2\" id=\"iptAnswerE9\" value=\""+value+"\" />"+
						"</td>"+
						"<td width=\"57\"><span class=\"texto_2\">First</span></td>"+
					  "</tr>"+
					"</table>"+
					"<table align=\"center\"  cellpadding=\"0\" cellspacing=\"2\" width=\"304\" border=\"0\">"+
					  "<tr>"+
						"<td width=\"59\" height=\"30\" class=\"texto_2\">Avenue </td>"+
						"<td width=\"110\">"+
						  "<input name=\"iptAnswer2E9\" type=\"text\" class=\"bg_cien2\" id=\"iptAnswer2E9\" value=\""+value2+"\" />"+
						"</td>"+
						"<td width=\"127\" class=\"texto_2\">Brown Street.</td>"+
						"</tr>"+
					"</table><input type=\"hidden\" id=\"vez\" value="+vez+" />";
			else if(idQst == 5)
				iptAns = "<table align=\"center\"  cellpadding=\"0\" cellspacing=\"2\" width=\"314\" border=\"0\">"+
					  "<tr>"+
						"<td width=\"130\" height=\"30\" class=\"texto_2\">The train station is<br /></td>"+
						"<td width=\"168\">"+
						  "<input name=\"iptAnswerE9\" type=\"text\" class=\"bg_cien\" id=\"iptAnswerE9\" value=\""+value+"\" />"+
						"</td>"+
					  "</tr>"+
					"</table>"+
					"<table align=\"center\"  cellpadding=\"0\" cellspacing=\"2\" width=\"312\" border=\"0\">"+
					  "<tr>"+
						"<td width=\"302\" height=\"30\" class=\"texto_2\">the hotel.</td>"+
						"</tr>"+
					"</table><input type=\"hidden\" id=\"vez\" value="+vez+" />";
			else
				iptAns = "<table align=\"center\"  cellpadding=\"0\" cellspacing=\"2\" width=\"304\" border=\"0\">"+
				  "<tr>"+
					"<td width=\"103\" height=\"30\" class=\"texto_2\">"+txt1+"<br /></td>"+
					"<td width=\"195\">"+
					  "<input name=\"iptAnswerE9\" type=\"text\" class=\"bg_cien\" id=\"iptAnswerE9\" value=\""+value+"\" />"+
					"</td>"+
				  "</tr>"+
				"</table>"+
				"<table align=\"center\"  cellpadding=\"0\" cellspacing=\"2\" width=\"304\" border=\"0\">"+
				  "<tr>"+
					"<td height=\"30\" class=\"texto_2\">"+txt2+"</td>"+
					"</tr>"+
				"</table><input type=\"hidden\" id=\"vez\" value="+vez+" />";
		
			$('#divAnswerE9').html(iptAns); 
		}
		actualizardivCalL1E9(img);
	}
}

function actualizarBtnL1E9(idQst, idBtn)
{		
	if(idBtn == 3)
		btn = "<table align=\"center\" background=\"../img/8.bg_refresh.png\" width=\"157\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
      "<tr>"+
        "<td width=\"54\" height=\"52\" align=\"right\" valign=\"middle\"><img src=\"../img/8.btn_chulito_desab.png\" name=\"Image17\" width=\"25\" height=\"25\" border=\"0\" id=\"Image17\" /></td>"+
        "<td width=\"48\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E9("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image18','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image18\" width=\"25\" height=\"25\" border=\"0\" id=\"Image18\" /></a></td>"+
        "<td width=\"55\" align=\"left\"><a href=\"#\" onclick=\"verificarL1E9("+idQst+",3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image19','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image19\" width=\"29\" height=\"25\" border=\"0\" id=\"Image19\" /></a></td>"+
      "</tr>"+
    "</table>";
	else
		btn = "<table align=\"center\" background=\"../img/8.bg_refresh.png\" width=\"157\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
      "<tr>"+
        "<td width=\"54\" height=\"52\" align=\"right\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E9("+idQst+",1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image17','','../img/8.btn_chulito2.png',1)\"><img src=\"../img/8.btn_chulito.png\" name=\"Image17\" width=\"25\" height=\"25\" border=\"0\" id=\"Image17\" /></a></td>"+
        "<td width=\"48\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E9("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image18','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image18\" width=\"25\" height=\"25\" border=\"0\" id=\"Image18\" /></a></td>"+
        "<td width=\"55\" align=\"left\"><a href=\"#\" onclick=\"verificarL1E9("+idQst+",3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image19','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image19\" width=\"29\" height=\"25\" border=\"0\" id=\"Image19\" /></a></td>"+
      "</tr>"+
    "</table>";
			
	$('#divBtn').html(btn);
}

function actualizardivCalL1E9(img)
{
	if(img != "")
		html = "<img src=\"../img/"+img+".png\" width=\"30\" height=\"30\" />";
	else
		html = "&nbsp;";
	
	$('#divCalL1E9').html(html);
}

function cambiarDivL1Ex9(idQst)
{	
	if (idQst == 1)
	{
		prev = 5;
		next = 2;
		
		btnImg = "art-7_1_9a";
		
		tblTxt = "<table align=\"center\"  cellpadding=\"0\" cellspacing=\"2\" width=\"304\" border=\"0\">"+
				  "<tr>"+
					"<td width=\"103\" height=\"30\" class=\"texto_2\">The library is<br /></td>"+
					"<td width=\"195\">"+
					  "<input name=\"iptAnswerE9\" type=\"text\" class=\"bg_cien\" id=\"iptAnswerE9\" />"+
					"</td>"+
				  "</tr>"+
				"</table>"+
				"<table align=\"center\"  cellpadding=\"0\" cellspacing=\"2\" width=\"304\" border=\"0\">"+
				  "<tr>"+
					"<td height=\"30\" class=\"texto_2\">                  the movie theater.</td>"+
					"</tr>"+
				"</table><input type=\"hidden\" id=\"vez\" value=0 />";
			
		tblAns = "<table width=\"146\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
				  "<tr class=\"texto_2\">"+
					"<td width=\"23\" height=\"25\"><strong>a.</strong></td>"+
					"<td width=\"123\" style=\"cursor:pointer;\" onclick=\"mostrarAnsL1E9(1,'a')\">next to</td>"+
				  "</tr>"+
				  "<tr>"+
					"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
					"</tr>"+
				  "<tr>"+
					"<td height=\"25\"><strong class=\"texto_2\">b.</strong></td>"+
					"<td class=\"texto_2\" style=\"cursor:pointer;\" onclick=\"mostrarAnsL1E9(1,'b')\"> behind</td>"+
				  "</tr>"+
				  "<tr>"+
					"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
					"</tr>"+
				  "<tr class=\"texto_2\">"+
					"<td height=\"25\"><strong>c.</strong></td>"+
					"<td style=\"cursor:pointer;\" onclick=\"mostrarAnsL1E9(1,'c')\">on the corner of</td>"+
				  "</tr>"+
				"</table>";
				
		swf = "<object id=\"FlashID1\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\">"+
		  "<param name=\"movie\" value=\"../swf/L1/L1_exe_9/L1_exe_9_a.swf\" />"+
		  "<param name=\"quality\" value=\"high\" />"+
		  "<param name=\"wmode\" value=\"transparent\" />"+
		  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
		  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versi�n m�s reciente de Flash Player. Elim�nela si no desea que los usuarios vean el mensaje. -->"+
		  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
		  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Oc�ltela a IE mediante IECC. -->"+
		  "<!--[if !IE]>-->"+
		  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_exe_9/L1_exe_9_a.swf\" width=\"45\" height=\"40\">"+
			"<!--<![endif]-->"+
			"<param name=\"quality\" value=\"high\" />"+
			"<param name=\"wmode\" value=\"transparent\" />"+
			"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
			"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
			"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
			"<div>"+
			  "<h4>El contenido de esta p�gina requiere una versi�n m�s reciente de Adobe Flash Player.</h4>"+
			  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
			"</div>"+
			"<!--[if !IE]>-->"+
		  "</object>"+
		  "<!--<![endif]-->"+
		"</object>";
		
		tblPts = "<table width=\"749\" border=\"0\" align=\"center\">"+
		  "<tr>"+
			"<td width=\"614\">&nbsp;</td>"+
			"<td width=\"12\" align=\"center\" valign=\"middle\"><img src=\"../img/12.punto_color.png\" name=\"Image24\" width=\"12\" height=\"16\" border=\"0\" id=\"Image24\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"middle\"><img src=\"../img/12.punto_avano.png\" name=\"Image23\" width=\"12\" height=\"16\" border=\"0\" id=\"Image23\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"middle\"><img src=\"../img/12.punto_avano.png\" name=\"Image22\" width=\"12\" height=\"16\" border=\"0\" id=\"Image22\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"middle\"><img src=\"../img/12.punto_avano.png\" name=\"Image21\" width=\"12\" height=\"16\" border=\"0\" id=\"Image21\" /></td>"+
			"<td width=\"61\" align=\"left\" valign=\"middle\"><img src=\"../img/12.punto_avano.png\" name=\"Image20\" width=\"12\" height=\"16\" border=\"0\" id=\"Image20\" /></td>"+
		  "</tr>"+
		"</table>";
	}
	else if (idQst == 2)
	{
		prev = 1;
		next = 3;
		
		btnImg = "art-7_1_9b";
		
		tblTxt ="<table align=\"center\"  cellpadding=\"0\" cellspacing=\"2\" width=\"304\" border=\"0\">"+
				  "<tr>"+
					"<td width=\"103\" height=\"30\" class=\"texto_2\">The school is<br /></td>"+
					"<td width=\"195\">"+
					  "<input name=\"iptAnswerE9\" type=\"text\" class=\"bg_cien\" id=\"iptAnswerE9\" />"+
					"</td>"+
				  "</tr>"+
				"</table>"+
				"<table align=\"center\"  cellpadding=\"0\" cellspacing=\"2\" width=\"304\" border=\"0\">"+
				  "<tr>"+
					"<td height=\"30\" class=\"texto_2\">the supermarket.</td>"+
					"</tr>"+
				"</table><input type=\"hidden\" id=\"vez\" value=0 />";
				
		tblAns = "<table width=\"186\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
              "<tr class=\"texto_2\">"+
                "<td width=\"23\" height=\"25\"><strong>a.</strong></td>"+
                "<td width=\"163\" style=\"cursor:pointer;\" onclick=\"mostrarAnsL1E9(2,'a')\">across the street from</td>"+
              "</tr>"+
              "<tr>"+
                "<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
                "</tr>"+
              "<tr>"+
                "<td height=\"25\"><strong class=\"texto_2\">b.</strong></td>"+
                "<td class=\"texto_2\" style=\"cursor:pointer;\" onclick=\"mostrarAnsL1E9(2,'b')\">down the street</td>"+
              "</tr>"+
              "<tr>"+
                "<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
                "</tr>"+
              "<tr class=\"texto_2\">"+
                "<td height=\"25\"><strong>c.</strong></td>"+
                "<td style=\"cursor:pointer;\" onclick=\"mostrarAnsL1E9(2,'c')\">nearby</td>"+
              "</tr>"+
            "</table>";
			
		swf = "<object id=\"FlashID2\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\">"+
		  "<param name=\"movie\" value=\"../swf/L1/L1_exe_9/L1_exe_9_b.swf\" />"+
		  "<param name=\"quality\" value=\"high\" />"+
		  "<param name=\"wmode\" value=\"transparent\" />"+
		  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
		  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versi�n m�s reciente de Flash Player. Elim�nela si no desea que los usuarios vean el mensaje. -->"+
		  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
		  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Oc�ltela a IE mediante IECC. -->"+
		  "<!--[if !IE]>-->"+
		  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_exe_9/L1_exe_9_b.swf\" width=\"45\" height=\"40\">"+
			"<!--<![endif]-->"+
			"<param name=\"quality\" value=\"high\" />"+
			"<param name=\"wmode\" value=\"transparent\" />"+
			"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
			"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
			"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
			"<div>"+
			  "<h4>El contenido de esta p�gina requiere una versi�n m�s reciente de Adobe Flash Player.</h4>"+
			  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
			"</div>"+
			"<!--[if !IE]>-->"+
		  "</object>"+
		  "<!--<![endif]-->"+
		"</object>";
		
		tblPts = "<table width=\"749\" border=\"0\" align=\"center\">"+
		  "<tr>"+
			"<td width=\"614\">&nbsp;</td>"+
			"<td width=\"12\" align=\"center\" valign=\"middle\"><img src=\"../img/12.punto_avano.png\" name=\"Image24\" width=\"12\" height=\"16\" border=\"0\" id=\"Image24\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"middle\"><img src=\"../img/12.punto_color.png\" name=\"Image23\" width=\"12\" height=\"16\" border=\"0\" id=\"Image23\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"middle\"><img src=\"../img/12.punto_avano.png\" name=\"Image22\" width=\"12\" height=\"16\" border=\"0\" id=\"Image22\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"middle\"><img src=\"../img/12.punto_avano.png\" name=\"Image21\" width=\"12\" height=\"16\" border=\"0\" id=\"Image21\" /></td>"+
			"<td width=\"61\" align=\"left\" valign=\"middle\"><img src=\"../img/12.punto_avano.png\" name=\"Image20\" width=\"12\" height=\"16\" border=\"0\" id=\"Image20\" /></td>"+
		  "</tr>"+
		"</table>";
	}
	else if (idQst == 3)
	{
		prev = 2;
		next = 4;
		
		btnImg = "art-7_1_9e";
		
		tblTxt = "<table align=\"center\"  cellpadding=\"0\" cellspacing=\"2\" width=\"304\" border=\"0\">"+
              "<tr>"+
                "<td width=\"129\" height=\"30\" class=\"texto_2\">The copy shop is </td>"+
                "<td width=\"110\">"+
                  "<input name=\"iptAnswerE9\" type=\"text\" class=\"bg_cien2\" id=\"iptAnswerE9\" />"+
                "</td>"+
                "<td width=\"57\"><span class=\"texto_2\">First</span></td>"+
              "</tr>"+
            "</table>"+
            "<table align=\"center\"  cellpadding=\"0\" cellspacing=\"2\" width=\"304\" border=\"0\">"+
              "<tr>"+
                "<td width=\"59\" height=\"30\" class=\"texto_2\">Avenue </td>"+
                "<td width=\"110\">"+
                  "<input name=\"iptAnswer2E9\" type=\"text\" class=\"bg_cien2\" id=\"iptAnswer2E9\" />"+
                "</td>"+
                "<td width=\"127\" class=\"texto_2\">Brown Street.</td>"+
                "</tr>"+
            "</table><input type=\"hidden\" id=\"vez\" value=0 />";
			
		tblAns = "<table width=\"186\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
              "<tr class=\"texto_2\">"+
                "<td width=\"23\" height=\"25\"><strong>a.</strong></td>"+
                "<td width=\"163\" style=\"cursor:pointer;\" onclick=\"mostrarAnsL1E9(3,'a')\">between &hellip; and</td>"+
              "</tr>"+
              "<tr>"+
                "<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
                "</tr>"+
              "<tr>"+
                "<td height=\"25\"><strong class=\"texto_2\">b.</strong></td>"+
                "<td class=\"texto_2\" style=\"cursor:pointer;\" onclick=\"mostrarAnsL1E9(3,'b')\">on the corner of &hellip; and</td>"+
              "</tr>"+
              "<tr>"+
                "<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
                "</tr>"+
              "<tr class=\"texto_2\">"+
                "<td height=\"25\"><strong>c.</strong></td>"+
                "<td style=\"cursor:pointer;\" onclick=\"mostrarAnsL1E9(3,'c')\">a and b are correct</td>"+
              "</tr>"+
            "</table>";
				
		swf = "<object id=\"FlashID3\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\">"+
		  "<param name=\"movie\" value=\"../swf/L1/L1_exe_9/L1_exe_9_c.swf\" />"+
		  "<param name=\"quality\" value=\"high\" />"+
		  "<param name=\"wmode\" value=\"transparent\" />"+
		  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
		  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versi�n m�s reciente de Flash Player. Elim�nela si no desea que los usuarios vean el mensaje. -->"+
		  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
		  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Oc�ltela a IE mediante IECC. -->"+
		  "<!--[if !IE]>-->"+
		  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_exe_9/L1_exe_9_c.swf\" width=\"45\" height=\"40\">"+
			"<!--<![endif]-->"+
			"<param name=\"quality\" value=\"high\" />"+
			"<param name=\"wmode\" value=\"transparent\" />"+
			"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
			"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
			"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
			"<div>"+
			  "<h4>El contenido de esta p�gina requiere una versi�n m�s reciente de Adobe Flash Player.</h4>"+
			  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
			"</div>"+
			"<!--[if !IE]>-->"+
		  "</object>"+
		  "<!--<![endif]-->"+
		"</object>";
		
		tblPts = "<table width=\"749\" border=\"0\" align=\"center\">"+
		  "<tr>"+
			"<td width=\"614\">&nbsp;</td>"+
			"<td width=\"12\" align=\"center\" valign=\"middle\"><img src=\"../img/12.punto_avano.png\" name=\"Image24\" width=\"12\" height=\"16\" border=\"0\" id=\"Image24\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"middle\"><img src=\"../img/12.punto_avano.png\" name=\"Image23\" width=\"12\" height=\"16\" border=\"0\" id=\"Image23\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"middle\"><img src=\"../img/12.punto_color.png\" name=\"Image22\" width=\"12\" height=\"16\" border=\"0\" id=\"Image22\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"middle\"><img src=\"../img/12.punto_avano.png\" name=\"Image21\" width=\"12\" height=\"16\" border=\"0\" id=\"Image21\" /></td>"+
			"<td width=\"61\" align=\"left\" valign=\"middle\"><img src=\"../img/12.punto_avano.png\" name=\"Image20\" width=\"12\" height=\"16\" border=\"0\" id=\"Image20\" /></td>"+
		  "</tr>"+
		"</table>";
	}
	else if (idQst == 4)
	{
		prev = 3;
		next = 5;
		
		btnImg = "art-7_1_9d";
		
		tblTxt = "<table align=\"center\"  cellpadding=\"0\" cellspacing=\"2\" width=\"304\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"103\" height=\"30\" class=\"texto_2\">The hospital is<br /></td>"+
			"<td width=\"195\">"+
			  "<input name=\"iptAnswerE9\" type=\"text\" class=\"bg_cien\" id=\"iptAnswerE9\" />"+
			"</td>"+
		  "</tr>"+
		"</table>"+
		"<table align=\"center\"  cellpadding=\"0\" cellspacing=\"2\" width=\"304\" border=\"0\">"+
		  "<tr>"+
			"<td height=\"30\" class=\"texto_2\">the supermarket.</td>"+
			"</tr>"+
		"</table><input type=\"hidden\" id=\"vez\" value=0 />";
		
		tblAns = "<table width=\"186\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
              "<tr class=\"texto_2\">"+
                "<td width=\"23\" height=\"25\"><strong>a.</strong></td>"+
                "<td width=\"163\" style=\"cursor:pointer;\" onclick=\"mostrarAnsL1E9(4,'a')\">far from</td>"+
              "</tr>"+
              "<tr>"+
                "<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
                "</tr>"+
              "<tr>"+
                "<td height=\"25\"><strong class=\"texto_2\">b.</strong></td>"+
                "<td class=\"texto_2\" style=\"cursor:pointer;\" onclick=\"mostrarAnsL1E9(4,'b')\">next to</td>"+
              "</tr>"+
              "<tr>"+
                "<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
                "</tr>"+
              "<tr class=\"texto_2\">"+
                "<td height=\"25\"><strong>c.</strong></td>"+
                "<td style=\"cursor:pointer;\" onclick=\"mostrarAnsL1E9(4,'c')\">across the street from</td>"+
              "</tr>"+
            "</table>";
				
		swf = "<object id=\"FlashID4\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\">"+
		  "<param name=\"movie\" value=\"../swf/L1/L1_exe_9/L1_exe_9_d.swf\" />"+
		  "<param name=\"quality\" value=\"high\" />"+
		  "<param name=\"wmode\" value=\"transparent\" />"+
		  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
		  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versi�n m�s reciente de Flash Player. Elim�nela si no desea que los usuarios vean el mensaje. -->"+
		  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
		  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Oc�ltela a IE mediante IECC. -->"+
		  "<!--[if !IE]>-->"+
		  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_exe_9/L1_exe_9_d.swf\" width=\"45\" height=\"40\">"+
			"<!--<![endif]-->"+
			"<param name=\"quality\" value=\"high\" />"+
			"<param name=\"wmode\" value=\"transparent\" />"+
			"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
			"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
			"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
			"<div>"+
			  "<h4>El contenido de esta p�gina requiere una versi�n m�s reciente de Adobe Flash Player.</h4>"+
			  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
			"</div>"+
			"<!--[if !IE]>-->"+
		  "</object>"+
		  "<!--<![endif]-->"+
		"</object>";
		
		tblPts = "<table width=\"749\" border=\"0\" align=\"center\">"+
		  "<tr>"+
			"<td width=\"614\">&nbsp;</td>"+
			"<td width=\"12\" align=\"center\" valign=\"middle\"><img src=\"../img/12.punto_avano.png\" name=\"Image24\" width=\"12\" height=\"16\" border=\"0\" id=\"Image24\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"middle\"><img src=\"../img/12.punto_avano.png\" name=\"Image23\" width=\"12\" height=\"16\" border=\"0\" id=\"Image23\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"middle\"><img src=\"../img/12.punto_avano.png\" name=\"Image22\" width=\"12\" height=\"16\" border=\"0\" id=\"Image22\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"middle\"><img src=\"../img/12.punto_color.png\" name=\"Image21\" width=\"12\" height=\"16\" border=\"0\" id=\"Image21\" /></td>"+
			"<td width=\"61\" align=\"left\" valign=\"middle\"><img src=\"../img/12.punto_avano.png\" name=\"Image20\" width=\"12\" height=\"16\" border=\"0\" id=\"Image20\" /></td>"+
		  "</tr>"+
		"</table>";
	}
	else if (idQst == 5)
	{
		prev = 4;
		next = 1;
		
		btnImg = "art-7_1_9c";
		
		tblTxt = "<table align=\"center\"  cellpadding=\"0\" cellspacing=\"2\" width=\"314\" border=\"0\">"+
				  "<tr>"+
					"<td width=\"130\" height=\"30\" class=\"texto_2\">The train station is<br /></td>"+
					"<td width=\"168\">"+
					  "<input name=\"iptAnswerE9\" type=\"text\" class=\"bg_cien\" id=\"iptAnswerE9\" />"+
					"</td>"+
				  "</tr>"+
				"</table>"+
				"<table align=\"center\"  cellpadding=\"0\" cellspacing=\"2\" width=\"312\" border=\"0\">"+
				  "<tr>"+
					"<td width=\"302\" height=\"30\" class=\"texto_2\">the hotel.</td>"+
					"</tr>"+
				"</table><input type=\"hidden\" id=\"vez\" value=0 />";
			
		tblAns = "<table width=\"146\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
				  "<tr class=\"texto_2\">"+
					"<td width=\"23\" height=\"25\"><strong>a.</strong></td>"+
					"<td width=\"123\" style=\"cursor:pointer;\" onclick=\"mostrarAnsL1E9(5,'a')\">down the street</td>"+
				  "</tr>"+
				  "<tr>"+
					"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
					"</tr>"+
				  "<tr>"+
					"<td height=\"25\"><strong class=\"texto_2\">b.</strong></td>"+
					"<td class=\"texto_2\" style=\"cursor:pointer;\" onclick=\"mostrarAnsL1E9(5,'b')\">behind</td>"+
				  "</tr>"+
				  "<tr>"+
					"<td height=\"1\" colspan=\"2\" class=\"bg_color1\"></td>"+
					"</tr>"+
				  "<tr class=\"texto_2\">"+
					"<td height=\"25\"><strong>c.</strong></td>"+
					"<td style=\"cursor:pointer;\" onclick=\"mostrarAnsL1E9(5,'c')\">next to</td>"+
				  "</tr>"+
				"</table>";
				
		swf = "<object id=\"FlashID5\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\">"+
		  "<param name=\"movie\" value=\"../swf/L1/L1_exe_9/L1_exe_9_e.swf\" />"+
		  "<param name=\"quality\" value=\"high\" />"+
		  "<param name=\"wmode\" value=\"transparent\" />"+
		  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
		  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versi�n m�s reciente de Flash Player. Elim�nela si no desea que los usuarios vean el mensaje. -->"+
		  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
		  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Oc�ltela a IE mediante IECC. -->"+
		  "<!--[if !IE]>-->"+
		  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_exe_9/L1_exe_9_e.swf\" width=\"45\" height=\"40\">"+
			"<!--<![endif]-->"+
			"<param name=\"quality\" value=\"high\" />"+
			"<param name=\"wmode\" value=\"transparent\" />"+
			"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
			"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
			"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
			"<div>"+
			  "<h4>El contenido de esta p�gina requiere una versi�n m�s reciente de Adobe Flash Player.</h4>"+
			  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
			"</div>"+
			"<!--[if !IE]>-->"+
		  "</object>"+
		  "<!--<![endif]-->"+
		"</object>";
		
		tblPts = "<table width=\"749\" border=\"0\" align=\"center\">"+
		  "<tr>"+
			"<td width=\"614\">&nbsp;</td>"+
			"<td width=\"12\" align=\"center\" valign=\"middle\"><img src=\"../img/12.punto_avano.png\" name=\"Image24\" width=\"12\" height=\"16\" border=\"0\" id=\"Image24\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"middle\"><img src=\"../img/12.punto_avano.png\" name=\"Image23\" width=\"12\" height=\"16\" border=\"0\" id=\"Image23\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"middle\"><img src=\"../img/12.punto_avano.png\" name=\"Image22\" width=\"12\" height=\"16\" border=\"0\" id=\"Image22\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"middle\"><img src=\"../img/12.punto_avano.png\" name=\"Image21\" width=\"12\" height=\"16\" border=\"0\" id=\"Image21\" /></td>"+
			"<td width=\"61\" align=\"left\" valign=\"middle\"><img src=\"../img/12.punto_color.png\" name=\"Image20\" width=\"12\" height=\"16\" border=\"0\" id=\"Image20\" /></td>"+
		  "</tr>"+
		"</table>";
	}
	html = "<table align=\"center\" width=\"750\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
	  "<tr>"+
		"<td width=\"50\" height=\"245\"><a href=\"#\" onclick=\"cambiarDivL1Ex9("+prev+")\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/11.izq2.png',1)\"><img src=\"../img/11.izq.png\" name=\"Image16\" width=\"50\" height=\"55\" border=\"0\" id=\"Image16\" /></a></td>"+
		"<td width=\"650\" align=\"center\" valign=\"middle\"><table width=\"600\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"302\" height=\"128\" align=\"center\" valign=\"middle\"><table align=\"center\" background=\"../img/bg_cuadro7.png\" width=\"348\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"348\" height=\"112\"><div id=\"divAnswerE9\">"+tblTxt+
				"</div>"+
				"</td>"+
			  "</tr>"+
			"</table></td>"+
			"<td width=\"298\" rowspan=\"2\" align=\"center\"><img src=\"../img/"+btnImg+".png\" width=\"298\" height=\"245\" /></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td height=\"109\" align=\"center\" valign=\"middle\"><table align=\"center\" background=\"../img/bg_cuadro5.png\" width=\"224\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"224\" height=\"101\" align=\"center\" valign=\"middle\">"+
				"<div id=\"divTblAnsE9\">"+tblAns+
				"</div></td>"+
			  "</tr>"+
			"</table></td>"+
		  "</tr>"+
		"</table></td>"+
		"<td width=\"50\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"cambiarDivL1Ex9("+next+")\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../img/11.der2.png',1)\"><img src=\"../img/11.der.png\" name=\"Image15\" width=\"50\" height=\"55\" border=\"0\" id=\"Image15\" /></a></td>"+
		"</tr>"+
	"</table>"+tblPts+
	"<table align=\"center\" width=\"655\" border=\"0\" cellspacing=\"0\">"+
	  "<tr>"+
		"<td width=\"267\" height=\"54\" align=\"right\" class=\"texto_2_pequeno\">Now, listen to check your answers.</td>"+
		"<td width=\"61\" align=\"center\">"+swf+"</td>"+
		"<td width=\"321\" align=\"right\"><table align=\"center\" width=\"50\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td height=\"55\"><div id=\"divCalL1E9\">&nbsp;</div></td>"+
			"<td><div id=\"divBtn\"><table align=\"center\" background=\"../img/8.bg_refresh.png\" width=\"157\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"54\" height=\"52\" align=\"right\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E9("+idQst+",1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image17','','../img/8.btn_chulito2.png',1)\"><img src=\"../img/8.btn_chulito.png\" name=\"Image17\" width=\"25\" height=\"25\" border=\"0\" id=\"Image17\" /></a></td>"+
			"<td width=\"48\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E9("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image18','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image18\" width=\"25\" height=\"25\" border=\"0\" id=\"Image18\" /></a></td>"+
			"<td width=\"55\" align=\"left\"><img src=\"../img/8.btn_ojo_desab.png\" name=\"Image19\" width=\"29\" height=\"25\" border=\"0\" id=\"Image19\" /></td>"+
		  "</tr>"+
		"</table></div></td>"+
		  "</tr>"+
		"</table></td>"+
		"</tr>"+
	"</table>";
	
	$('#divL1_exer9').html(html);
}
/* Exercise 9 */ 


/* Exercise 10 */ 
function cambiarEstBtnL1Ex10(idQst, idAns)
{
	img = "";
	
	if(idQst == 1)
	{
		if(idAns == 1)
		{
			div = "divBtnAns1";
			valIpt = $("#iptAns1").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(1,1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image40','','../img/img_L1_exe10_1a_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_1a_2.png\" name=\"Image40\" width=\"67\" height=\"32\" border=\"0\" id=\"Image40\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns1\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(1,1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image40','','../img/img_L1_exe10_1a_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_1a_1.png\" name=\"Image40\" width=\"67\" height=\"32\" border=\"0\" id=\"Image40\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns1\" value=0 />";
		}
		else if(idAns == 2)
		{
			div = "divBtnAns2";
			valIpt = $("#iptAns2").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(1,2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image41','','../img/img_L1_exe10_1b_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_1b_2.png\" name=\"Image41\" width=\"67\" height=\"32\" border=\"0\" id=\"Image41\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns2\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(1,2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image41','','../img/img_L1_exe10_1b_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_1b_1.png\" name=\"Image41\" width=\"67\" height=\"32\" border=\"0\" id=\"Image41\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns2\" value=0 />";
		}
		else if(idAns == 3)
		{
			div = "divBtnAns3";
			valIpt = $("#iptAns3").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(1,3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image42','','../img/img_L1_exe10_1c_2.png',1)\">"+
							"<img src=\"../img/img_L1_exe10_1c_2.png\" name=\"Image42\" width=\"83\" height=\"32\" border=\"0\" id=\"Image42\" />"+
						"</a>"+
						"<input type=\"hidden\" id=\"iptAns3\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(1,3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image42','','../img/img_L1_exe10_1c_2.png',1)\">"+
							"<img src=\"../img/img_L1_exe10_1c_1.png\" name=\"Image42\" width=\"83\" height=\"32\" border=\"0\" id=\"Image42\" />"+
						"</a>"+
						"<input type=\"hidden\" id=\"iptAns3\" value=0 />";
		}
		else if(idAns == 4)
		{
			div = "divBtnAns4";
			valIpt = $("#iptAns4").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(1,4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image43','','../img/img_L1_exe10_1d_2.png',1)\">"+
							"<img src=\"../img/img_L1_exe10_1d_2.png\" name=\"Image43\" width=\"67\" height=\"32\" border=\"0\" id=\"Image43\" />"+
						"</a>"+
						"<input type=\"hidden\" id=\"iptAns4\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(1,4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image43','','../img/img_L1_exe10_1d_2.png',1)\">"+
							"<img src=\"../img/img_L1_exe10_1d_1.png\" name=\"Image43\" width=\"67\" height=\"32\" border=\"0\" id=\"Image43\" />"+
						"</a>"+
						"<input type=\"hidden\" id=\"iptAns4\" value=0 />";
		}
		else if(idAns == 5)
		{
			div = "divBtnAns5";
			valIpt = $("#iptAns5").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(1,5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image44','','../img/img_L1_exe10_1e_2.png',1)\">"+
							"<img src=\"../img/img_L1_exe10_1e_2.png\" name=\"Image44\" width=\"67\" height=\"32\" border=\"0\" id=\"Image44\" />"+
						"</a>"+
						"<input type=\"hidden\" id=\"iptAns5\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(1,5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image44','','../img/img_L1_exe10_1e_2.png',1)\">"+
							"<img src=\"../img/img_L1_exe10_1e_1.png\" name=\"Image44\" width=\"67\" height=\"32\" border=\"0\" id=\"Image44\" />"+
						"</a>"+
						"<input type=\"hidden\" id=\"iptAns5\" value=0 />";
		}
		else if(idAns == 6)
		{
			div = "divBtnAns6";
			valIpt = $("#iptAns6").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(1,6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image45','','../img/img_L1_exe10_1f_2.png',1)\">"+
							"<img src=\"../img/img_L1_exe10_1f_2.png\" name=\"Image45\" width=\"103\" height=\"32\" border=\"0\" id=\"Image45\" />"+
						"</a>"+
						"<input type=\"hidden\" id=\"iptAns6\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(1,6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image45','','../img/img_L1_exe10_1f_2.png',1)\">"+
							"<img src=\"../img/img_L1_exe10_1f_1.png\" name=\"Image45\" width=\"103\" height=\"32\" border=\"0\" id=\"Image45\" />"+
						"</a>"+
						"<input type=\"hidden\" id=\"iptAns6\" value=0 />";
		}
	}
	else if(idQst == 2)
	{
		if(idAns == 1)
		{
			div = "divBtnAns1";
			valIpt = $("#iptAns1").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(2,1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image40','','../img/img_L1_exe10_2a_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_2a_2.png\" name=\"Image40\" width=\"67\" height=\"32\" border=\"0\" id=\"Image40\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns1\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(2,1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image40','','../img/img_L1_exe10_2a_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_2a_1.png\" name=\"Image40\" width=\"67\" height=\"32\" border=\"0\" id=\"Image40\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns1\" value=0 />";
		}
		else if(idAns == 2)
		{
			div = "divBtnAns2";
			valIpt = $("#iptAns2").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(2,2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image41','','../img/img_L1_exe10_2b_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_2b_2.png\" name=\"Image41\" width=\"97\" height=\"32\" border=\"0\" id=\"Image41\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns2\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(2,2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image41','','../img/img_L1_exe10_2b_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_2b_1.png\" name=\"Image41\" width=\"97\" height=\"32\" border=\"0\" id=\"Image41\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns2\" value=0 />";
		}
		else if(idAns == 3)
		{
			div = "divBtnAns3";
			valIpt = $("#iptAns3").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(2,3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image42','','../img/img_L1_exe10_2c_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_2c_2.png\" name=\"Image42\" width=\"83\" height=\"32\" border=\"0\" id=\"Image42\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns3\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(2,3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image42','','../img/img_L1_exe10_2c_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_2c_1.png\" name=\"Image42\" width=\"83\" height=\"32\" border=\"0\" id=\"Image42\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns3\" value=0 />";
		}
		else if(idAns == 4)
		{
			div = "divBtnAns4";
			valIpt = $("#iptAns4").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(2,4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image43','','../img/img_L1_exe10_2d_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_2d_2.png\" name=\"Image43\" width=\"67\" height=\"32\" border=\"0\" id=\"Image43\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns4\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(2,4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image43','','../img/img_L1_exe10_2d_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_2d_1.png\" name=\"Image43\" width=\"67\" height=\"32\" border=\"0\" id=\"Image43\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns4\" value=0 />";
		}
		else if(idAns == 5)
		{
			div = "divBtnAns5";
			valIpt = $("#iptAns5").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(2,5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image44','','../img/img_L1_exe10_2e_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_2e_2.png\" name=\"Image44\" width=\"67\" height=\"32\" border=\"0\" id=\"Image44\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns5\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(2,5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image44','','../img/img_L1_exe10_2e_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_2e_1.png\" name=\"Image44\" width=\"67\" height=\"32\" border=\"0\" id=\"Image44\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns5\" value=0 />";
		}
		else if(idAns == 6)
		{
			div = "divBtnAns6";
			valIpt = $("#iptAns6").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(2,6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image45','','../img/img_L1_exe10_2f_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_2f_2.png\" name=\"Image45\" width=\"102\" height=\"32\" border=\"0\" id=\"Image45\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns6\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(2,6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image45','','../img/img_L1_exe10_2f_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_2f_1.png\" name=\"Image45\" width=\"102\" height=\"32\" border=\"0\" id=\"Image45\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns6\" value=0 />";
		}
	}
	else if(idQst == 3)
	{
		if(idAns == 1)
		{
			div = "divBtnAns1";
			valIpt = $("#iptAns1").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(3,1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image39','','../img/img_L1_exe10_3a_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_3a_2.png\" name=\"Image39\" width=\"67\" height=\"32\" border=\"0\" id=\"Image39\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns1\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(3,1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image39','','../img/img_L1_exe10_3a_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_3a_1.png\" name=\"Image39\" width=\"67\" height=\"32\" border=\"0\" id=\"Image39\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns1\" value=0 />";
		}
		else if(idAns == 2)
		{
			div = "divBtnAns2";
			valIpt = $("#iptAns2").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(3,2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image40','','../img/img_L1_exe10_3b_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_3b_2.png\" name=\"Image40\" width=\"97\" height=\"32\" border=\"0\" id=\"Image40\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns2\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(3,2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image40','','../img/img_L1_exe10_3b_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_3b_1.png\" name=\"Image40\" width=\"97\" height=\"32\" border=\"0\" id=\"Image40\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns2\" value=0 />";
		}
		else if(idAns == 3)
		{
			div = "divBtnAns3";
			valIpt = $("#iptAns3").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(3,3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image41','','../img/img_L1_exe10_3c_2.png',0)\">"+
						"<img src=\"../img/img_L1_exe10_3c_2.png\" name=\"Image41\" width=\"55\" height=\"32\" border=\"0\" id=\"Image41\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns3\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(3,3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image41','','../img/img_L1_exe10_3c_2.png',0)\">"+
						"<img src=\"../img/img_L1_exe10_3c_1.png\" name=\"Image41\" width=\"55\" height=\"32\" border=\"0\" id=\"Image41\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns3\" value=0 />";
		}
		else if(idAns == 4)
		{
			div = "divBtnAns4";
			valIpt = $("#iptAns4").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(3,4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image42','','../img/img_L1_exe10_3d_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_3d_2.png\" name=\"Image42\" width=\"82\" height=\"32\" border=\"0\" id=\"Image42\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns4\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(3,4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image42','','../img/img_L1_exe10_3d_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_3d_1.png\" name=\"Image42\" width=\"82\" height=\"32\" border=\"0\" id=\"Image42\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns4\" value=0 />";
		}
		else if(idAns == 5)
		{
			div = "divBtnAns5";
			valIpt = $("#iptAns5").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(3,5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image43','','../img/img_L1_exe10_3e_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_3e_2.png\" name=\"Image43\" width=\"67\" height=\"32\" border=\"0\" id=\"Image43\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns5\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(3,5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image43','','../img/img_L1_exe10_3e_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_3e_1.png\" name=\"Image43\" width=\"67\" height=\"32\" border=\"0\" id=\"Image43\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns5\" value=0 />";
		}
	}
	else if(idQst == 4)
	{
		if(idAns == 1)
		{
			div = "divBtnAns1";
			valIpt = $("#iptAns1").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(4,1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image40','','../img/img_L1_exe10_4a_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_4a_2.png\" name=\"Image40\" width=\"67\" height=\"32\" border=\"0\" id=\"Image40\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns1\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(4,1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image40','','../img/img_L1_exe10_4a_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_4a_1.png\" name=\"Image40\" width=\"67\" height=\"32\" border=\"0\" id=\"Image40\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns1\" value=0 />";
		}
		else if(idAns == 2)
		{
			div = "divBtnAns2";
			valIpt = $("#iptAns2").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(4,2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image41','','../img/img_L1_exe10_4b_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_4b_2.png\" name=\"Image41\" width=\"97\" height=\"32\" border=\"0\" id=\"Image41\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns2\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(4,2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image41','','../img/img_L1_exe10_4b_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_4b_1.png\" name=\"Image41\" width=\"97\" height=\"32\" border=\"0\" id=\"Image41\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns2\" value=0 />";
		}
		else if(idAns == 3)
		{
			div = "divBtnAns3";
			valIpt = $("#iptAns3").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(4,3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image42','','../img/img_L1_exe10_4c_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_4c_2.png\" name=\"Image42\" width=\"55\" height=\"32\" border=\"0\" id=\"Image42\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns3\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(4,3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image42','','../img/img_L1_exe10_4c_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_4c_1.png\" name=\"Image42\" width=\"55\" height=\"32\" border=\"0\" id=\"Image42\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns3\" value=0 />";
		}
		else if(idAns == 4)
		{
			div = "divBtnAns4";
			valIpt = $("#iptAns4").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(4,4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image43','','../img/img_L1_exe10_4d_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_4d_2.png\" name=\"Image43\" width=\"82\" height=\"32\" border=\"0\" id=\"Image43\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns4\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(4,4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image43','','../img/img_L1_exe10_4d_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_4d_1.png\" name=\"Image43\" width=\"82\" height=\"32\" border=\"0\" id=\"Image43\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns4\" value=0 />";
		}
		else if(idAns == 5)
		{
			div = "divBtnAns5";
			valIpt = $("#iptAns5").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(4,5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image44','','../img/img_L1_exe10_4e_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_4e_2.png\" name=\"Image44\" width=\"67\" height=\"32\" border=\"0\" id=\"Image44\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns5\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(4,5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image44','','../img/img_L1_exe10_4e_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_4e_1.png\" name=\"Image44\" width=\"67\" height=\"32\" border=\"0\" id=\"Image44\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns5\" value=0 />";
		}
		else if(idAns == 6)
		{
			div = "divBtnAns6";
			valIpt = $("#iptAns6").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(4,6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image45','','../img/img_L1_exe10_4f_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_4f_2.png\" name=\"Image45\" width=\"65\" height=\"32\" border=\"0\" id=\"Image45\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns6\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(4,6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image45','','../img/img_L1_exe10_4f_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_4f_1.png\" name=\"Image45\" width=\"65\" height=\"32\" border=\"0\" id=\"Image45\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns6\" value=0 />";
		}
		else if(idAns == 7)
		{
			div = "divBtnAns7";
			valIpt = $("#iptAns7").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(4,7)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image46','','../img/img_L1_exe10_4g_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_4g_2.png\" name=\"Image46\" width=\"88\" height=\"32\" border=\"0\" id=\"Image46\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns7\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(4,7)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image46','','../img/img_L1_exe10_4g_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_4g_1.png\" name=\"Image46\" width=\"88\" height=\"32\" border=\"0\" id=\"Image46\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns7\" value=0 />";
		}
	}
	else if(idQst == 5)
	{
		if(idAns == 1)
		{
			div = "divBtnAns1";
			valIpt = $("#iptAns1").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image41','','../img/img_L1_exe10_5a_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_5a_2.png\" name=\"Image41\" width=\"67\" height=\"32\" border=\"0\" id=\"Image41\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns1\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image41','','../img/img_L1_exe10_5a_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_5a_1.png\" name=\"Image41\" width=\"67\" height=\"32\" border=\"0\" id=\"Image41\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns1\" value=0 />";
		}
		else if(idAns == 2)
		{
			div = "divBtnAns2";
			valIpt = $("#iptAns2").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image42','','../img/img_L1_exe10_5b_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_5b_2.png\" name=\"Image42\" width=\"64\" height=\"32\" border=\"0\" id=\"Image42\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns2\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image42','','../img/img_L1_exe10_5b_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_5b_1.png\" name=\"Image42\" width=\"64\" height=\"32\" border=\"0\" id=\"Image42\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns2\" value=0 />";
		}
		else if(idAns == 3)
		{
			div = "divBtnAns3";
			valIpt = $("#iptAns3").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image43','','../img/img_L1_exe10_5c_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_5c_2.png\" name=\"Image43\" width=\"73\" height=\"32\" border=\"0\" id=\"Image43\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns3\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image43','','../img/img_L1_exe10_5c_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_5c_1.png\" name=\"Image43\" width=\"73\" height=\"32\" border=\"0\" id=\"Image43\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns3\" value=0 />";
		}
		else if(idAns == 4)
		{
			div = "divBtnAns4";
			valIpt = $("#iptAns4").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image44','','../img/img_L1_exe10_5f_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_5f_2.png\" name=\"Image44\" width=\"65\" height=\"32\" border=\"0\" id=\"Image44\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns4\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image44','','../img/img_L1_exe10_5f_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_5f_1.png\" name=\"Image44\" width=\"65\" height=\"32\" border=\"0\" id=\"Image44\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns4\" value=0 />";
		}
		else if(idAns == 5)
		{
			div = "divBtnAns5";
			valIpt = $("#iptAns5").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image50','','../img/img_L1_exe10_5d_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_5d_2.png\" name=\"Image50\" width=\"71\" height=\"29\" border=\"0\" id=\"Image50\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns5\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image50','','../img/img_L1_exe10_5d_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_5d_1.png\" name=\"Image50\" width=\"71\" height=\"29\" border=\"0\" id=\"Image50\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns5\" value=0 />";
		}
		else if(idAns == 6)
		{
			div = "divBtnAns6";
			valIpt = $("#iptAns6").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image45','','../img/img_L1_exe10_5e_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_5e_2.png\" name=\"Image45\" width=\"67\" height=\"32\" border=\"0\" id=\"Image45\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns6\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image45','','../img/img_L1_exe10_5e_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_5e_1.png\" name=\"Image45\" width=\"67\" height=\"32\" border=\"0\" id=\"Image45\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns6\" value=0 />";
		}
		else if(idAns == 7)
		{
			div = "divBtnAns7";
			valIpt = $("#iptAns7").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,7)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image46','','../img/img_L1_exe10_5f_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_5f_2.png\" name=\"Image46\" width=\"65\" height=\"32\" border=\"0\" id=\"Image46\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns7\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,7)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image46','','../img/img_L1_exe10_5f_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_5f_1.png\" name=\"Image46\" width=\"65\" height=\"32\" border=\"0\" id=\"Image46\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns7\" value=0 />";
		}
		else if(idAns == 8)
		{
			div = "divBtnAns8";
			valIpt = $("#iptAns8").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,8)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image47','','../img/img_L1_exe10_5g_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_5g_2.png\" name=\"Image47\" width=\"87\" height=\"32\" border=\"0\" id=\"Image47\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns8\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,8)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image47','','../img/img_L1_exe10_5g_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_5g_1.png\" name=\"Image47\" width=\"87\" height=\"32\" border=\"0\" id=\"Image47\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns8\" value=0 />";
		}
		else if(idAns == 9)
		{
			div = "divBtnAns9";
			valIpt = $("#iptAns9").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,9)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image48','','../img/img_L1_exe10_5h_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_5h_2.png\" name=\"Image48\" width=\"65\" height=\"32\" border=\"0\" id=\"Image48\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns9\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,9)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image48','','../img/img_L1_exe10_5h_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_5h_1.png\" name=\"Image48\" width=\"65\" height=\"32\" border=\"0\" id=\"Image48\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns9\" value=0 />";
		}
		else if(idAns == 10)
		{
			div = "divBtnAns10";
			valIpt = $("#iptAns10").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,10)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image49','','../img/img_L1_exe10_5i_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_5i_2.png\" name=\"Image49\" width=\"86\" height=\"32\" border=\"0\" id=\"Image49\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns10\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,10)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image49','','../img/img_L1_exe10_5i_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_5i_1.png\" name=\"Image49\" width=\"86\" height=\"32\" border=\"0\" id=\"Image49\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns10\" value=0 />";
		}
	}
	else if(idQst == 6)
	{
		if(idAns == 1)
		{
			div = "divBtnAns1";
			valIpt = $("#iptAns1").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image41','','../img/img_L1_exe10_6a_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_6a_2.png\" name=\"Image41\" width=\"66\" height=\"32\" border=\"0\" id=\"Image41\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns1\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image41','','../img/img_L1_exe10_6a_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_6a_1.png\" name=\"Image41\" width=\"66\" height=\"32\" border=\"0\" id=\"Image41\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns1\" value=0 />";
		}
		else if(idAns == 2)
		{
			div = "divBtnAns2";
			valIpt = $("#iptAns2").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image42','','../img/img_L1_exe10_6b_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_6b_2.png\" name=\"Image42\" width=\"62\" height=\"29\" border=\"0\" id=\"Image42\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns2\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image42','','../img/img_L1_exe10_6b_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_6b_1.png\" name=\"Image42\" width=\"62\" height=\"29\" border=\"0\" id=\"Image42\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns2\" value=0 />";
		}
		else if(idAns == 3)
		{
			div = "divBtnAns3";
			valIpt = $("#iptAns3").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image43','','../img/img_L1_exe10_6c_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_6c_2.png\" name=\"Image43\" width=\"73\" height=\"32\" border=\"0\" id=\"Image43\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns3\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image43','','../img/img_L1_exe10_6c_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_6c_1.png\" name=\"Image43\" width=\"73\" height=\"32\" border=\"0\" id=\"Image43\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns3\" value=0 />";
		}
		else if(idAns == 4)
		{
			div = "divBtnAns4";
			valIpt = $("#iptAns4").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image44','','../img/img_L1_exe10_6d_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_6d_2.png\" name=\"Image44\" width=\"64\" height=\"32\" border=\"0\" id=\"Image44\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns4\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image44','','../img/img_L1_exe10_6d_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_6d_1.png\" name=\"Image44\" width=\"64\" height=\"32\" border=\"0\" id=\"Image44\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns4\" value=0 />";
		}
		else if(idAns == 5)
		{
			div = "divBtnAns5";
			valIpt = $("#iptAns5").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image45','','../img/img_L1_exe10_6e_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_6e_2.png\" name=\"Image45\" width=\"66\" height=\"32\" border=\"0\" id=\"Image45\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns5\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image45','','../img/img_L1_exe10_6e_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_6e_1.png\" name=\"Image45\" width=\"66\" height=\"32\" border=\"0\" id=\"Image45\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns5\" value=0 />";
		}
		else if(idAns == 6)
		{
			div = "divBtnAns6";
			valIpt = $("#iptAns6").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image46','','../img/img_L1_exe10_6f_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_6f_2.png\" name=\"Image46\" width=\"64\" height=\"32\" border=\"0\" id=\"Image46\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns6\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image46','','../img/img_L1_exe10_6f_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_6f_1.png\" name=\"Image46\" width=\"64\" height=\"32\" border=\"0\" id=\"Image46\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns6\" value=0 />";
		}
		else if(idAns == 7)
		{
			div = "divBtnAns7";
			valIpt = $("#iptAns7").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,7)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image47','','../img/img_L1_exe10_6g_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_6g_2.png\" name=\"Image47\" width=\"87\" height=\"32\" border=\"0\" id=\"Image47\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns7\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,7)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image47','','../img/img_L1_exe10_6g_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_6g_1.png\" name=\"Image47\" width=\"87\" height=\"32\" border=\"0\" id=\"Image47\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns7\" value=0 />";
		}
		else if(idAns == 8)
		{
			div = "divBtnAns8";
			valIpt = $("#iptAns8").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,8)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image48','','../img/img_L1_exe10_6h_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_6h_2.png\" name=\"Image48\" width=\"64\" height=\"32\" border=\"0\" id=\"Image48\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns8\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,8)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image48','','../img/img_L1_exe10_6h_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_6h_1.png\" name=\"Image48\" width=\"64\" height=\"32\" border=\"0\" id=\"Image48\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns8\" value=0 />";
		}
		else if(idAns == 9)
		{
			div = "divBtnAns9";
			valIpt = $("#iptAns9").val();
			if(valIpt == 0)
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,9)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image49','','../img/img_L1_exe10_6i_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_6i_2.png\" name=\"Image49\" width=\"87\" height=\"32\" border=\"0\" id=\"Image49\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns9\" value=1 />";
			else
				btn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,9)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image49','','../img/img_L1_exe10_6i_2.png',1)\">"+
						"<img src=\"../img/img_L1_exe10_6i_1.png\" name=\"Image49\" width=\"87\" height=\"32\" border=\"0\" id=\"Image49\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAns9\" value=0 />";
		}
	}
	$('#'+div).html(btn);
	actualizardivCalL1E10(img);
}

function verificarL1E10(idQst, idBtn)
{
	ans1L1E10 = $("#iptAns1").val();
	ans2L1E10 = $("#iptAns2").val();
	ans3L1E10 = $("#iptAns3").val();
	ans4L1E10 = $("#iptAns4").val();
	ans5L1E10 = $("#iptAns5").val();
	
	sum = parseInt(ans1L1E10) + parseInt(ans2L1E10) + parseInt(ans3L1E10) + parseInt(ans4L1E10) + parseInt(ans5L1E10);
	
	if(idQst != 3)
	{
		ans6L1E10 = $("#iptAns6").val();
		sum = sum + parseInt(ans6L1E10);
		
		if(idQst >= 4){
			ans7L1E10 = $("#iptAns7").val();
			sum = sum + parseInt(ans7L1E10);
			
			if(idQst >= 5){
				ans8L1E10 = $("#iptAns8").val();
				ans9L1E10 = $("#iptAns9").val();
				sum = sum + parseInt(ans8L1E10) + parseInt(ans9L1E10);
				
				if(idQst == 5){
					ans10L1E10 = $("#iptAns10").val();
					sum = sum + parseInt(ans10L1E10);
				}
			}
		}
	}
	
	vez = $("#vez").val();
	img = "";
	
	if(idBtn != 3 && sum == 0)
		alert("You must select the answers.");
	else{
		if(idBtn == 1)
		{
			if(idQst == 1 && ans1L1E10 == 1 && ans2L1E10 == 0 && ans3L1E10 == 1 && ans4L1E10 == 0 && ans5L1E10 == 0 && ans6L1E10 == 1)
				img = "good";
			else if (idQst == 2 && ans1L1E10 == 0 && ans2L1E10 == 1 && ans3L1E10 == 0 && ans4L1E10 == 0 && ans5L1E10 == 1 && ans6L1E10 == 0)
				img = "good";
			else if (idQst == 3 && ans1L1E10 == 0 && ans2L1E10 == 0 && ans3L1E10 == 0 && ans4L1E10 == 1 && ans5L1E10 == 1)
				img = "good";
			else if (idQst == 4 && ans1L1E10 == 1 && ans2L1E10 == 0 && ans3L1E10 == 0 && ans4L1E10 == 1 && ans5L1E10 == 0 && ans6L1E10 == 1 && ans7L1E10 == 1)
				img = "good";
			else if (idQst == 5 && ans1L1E10 == 0 && ans2L1E10 == 0 && ans3L1E10 == 1 && ans4L1E10 == 0 && ans5L1E10 == 1 && ans6L1E10 == 0 && ans7L1E10 == 0 && ans8L1E10 == 1 && ans9L1E10 == 0 && ans10L1E10 == 0)
				img = "good";
			else if (idQst == 6 && ans1L1E10 == 0 && ans2L1E10 == 0 && ans3L1E10 == 1 && ans4L1E10 == 1 && ans5L1E10 == 0 && ans6L1E10 == 0 && ans7L1E10 == 0 && ans8L1E10 == 0 && ans9L1E10 == 1)
				img = "good";
			else
				img = "good_No";
			actualizardivCalL1E10(img);
		}
		else{
			if(idBtn == 3)
			{
				switch (idQst){
					case 1:
						value = "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" width=\"211\" border=\"0\">"+
						"<tr>"+
						"<td><div id=\"divBtnAns1\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(1,1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image40','','../img/img_L1_exe10_1a_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_1a_2.png\" name=\"Image40\" width=\"67\" height=\"32\" border=\"0\" id=\"Image40\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns1\" value=1 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns2\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(1,2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image41','','../img/img_L1_exe10_1b_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_1b_1.png\" name=\"Image41\" width=\"67\" height=\"32\" border=\"0\" id=\"Image41\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns2\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns3\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(1,3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image42','','../img/img_L1_exe10_1c_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_1c_2.png\" name=\"Image42\" width=\"83\" height=\"32\" border=\"0\" id=\"Image42\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns3\" value=1 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns4\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(1,4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image43','','../img/img_L1_exe10_1d_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_1d_1.png\" name=\"Image43\" width=\"67\" height=\"32\" border=\"0\" id=\"Image43\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns4\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns5\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(1,5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image44','','../img/img_L1_exe10_1e_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_1e_1.png\" name=\"Image44\" width=\"67\" height=\"32\" border=\"0\" id=\"Image44\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns5\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns6\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(1,6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image45','','../img/img_L1_exe10_1f_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_1f_2.png\" name=\"Image45\" width=\"103\" height=\"32\" border=\"0\" id=\"Image45\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns6\" value=1 />"+
						"</div></td>"+
						"<input type=\"hidden\" id=\"vez\" value="+vez+" />"+
						"</tr></table>";
					break;
					case 2:
						value = "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\"width=\"211\" border=\"0\">"+
						"<tr>"+
						"<td><div id=\"divBtnAns1\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(2,1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image40','','../img/img_L1_exe10_2a_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_2a_1.png\" name=\"Image40\" width=\"67\" height=\"32\" border=\"0\" id=\"Image40\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns1\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns2\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(2,2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image41','','../img/img_L1_exe10_2b_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_2b_2.png\" name=\"Image41\" width=\"97\" height=\"32\" border=\"0\" id=\"Image41\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns2\" value=1 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns3\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(2,3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image42','','../img/img_L1_exe10_2c_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_2c_1.png\" name=\"Image42\" width=\"83\" height=\"32\" border=\"0\" id=\"Image42\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns3\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns4\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(2,4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image43','','../img/img_L1_exe10_2d_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_2d_1.png\" name=\"Image43\" width=\"67\" height=\"32\" border=\"0\" id=\"Image43\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns4\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns5\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(2,5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image44','','../img/img_L1_exe10_2e_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_2e_2.png\" name=\"Image44\" width=\"67\" height=\"32\" border=\"0\" id=\"Image44\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns5\" value=1 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns6\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(2,6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image45','','../img/img_L1_exe10_2f_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_2f_1.png\" name=\"Image45\" width=\"102\" height=\"32\" border=\"0\" id=\"Image45\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns6\" value=0 />"+
						"</div></td>"+
						"<input type=\"hidden\" id=\"vez\" value="+vez+" />"
						"</tr></table>";
					break;
					case 3:
						value = "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" width=\"211\" border=\"0\">"+
						"<tr>"+
						"<td><div id=\"divBtnAns1\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(3,1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image39','','../img/img_L1_exe10_3a_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_3a_1.png\" name=\"Image39\" width=\"67\" height=\"32\" border=\"0\" id=\"Image39\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns1\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns2\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(3,2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image40','','../img/img_L1_exe10_3b_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_3b_1.png\" name=\"Image40\" width=\"97\" height=\"32\" border=\"0\" id=\"Image40\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns2\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns3\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(3,3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image41','','../img/img_L1_exe10_3c_2.png',0)\">"+
								"<img src=\"../img/img_L1_exe10_3c_1.png\" name=\"Image41\" width=\"55\" height=\"32\" border=\"0\" id=\"Image41\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns3\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns4\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(3,4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image42','','../img/img_L1_exe10_3d_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_3d_2.png\" name=\"Image42\" width=\"82\" height=\"32\" border=\"0\" id=\"Image42\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns4\" value=1 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns5\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(3,5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image43','','../img/img_L1_exe10_3e_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_3e_2.png\" name=\"Image43\" width=\"67\" height=\"32\" border=\"0\" id=\"Image43\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns5\" value=1 />"+
						"</div></td>"+
						"<input type=\"hidden\" id=\"vez\" value="+vez+" />"+
						"</tr></table>";
					break;
					case 4:
						value = "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" width=\"211\" border=\"0\">"+
						"<tr>"+
						"<td><div id=\"divBtnAns1\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(4,1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image40','','../img/img_L1_exe10_4a_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_4a_2.png\" name=\"Image40\" width=\"67\" height=\"32\" border=\"0\" id=\"Image40\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns1\" value=1 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns2\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(4,2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image41','','../img/img_L1_exe10_4b_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_4b_1.png\" name=\"Image41\" width=\"97\" height=\"32\" border=\"0\" id=\"Image41\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns2\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns3\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(4,3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image42','','../img/img_L1_exe10_4c_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_4c_1.png\" name=\"Image42\" width=\"55\" height=\"32\" border=\"0\" id=\"Image42\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns3\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns4\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(4,4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image43','','../img/img_L1_exe10_4d_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_4d_2.png\" name=\"Image43\" width=\"82\" height=\"32\" border=\"0\" id=\"Image43\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns4\" value=1 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns5\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(4,5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image44','','../img/img_L1_exe10_4e_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_4e_1.png\" name=\"Image44\" width=\"67\" height=\"32\" border=\"0\" id=\"Image44\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns5\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns6\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(4,6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image45','','../img/img_L1_exe10_4f_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_4f_2.png\" name=\"Image45\" width=\"65\" height=\"32\" border=\"0\" id=\"Image45\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns6\" value=1 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns7\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(4,7)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image46','','../img/img_L1_exe10_4g_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_4g_2.png\" name=\"Image46\" width=\"88\" height=\"32\" border=\"0\" id=\"Image46\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns7\" value=1 />"+
						"</div></td>"+
						"<input type=\"hidden\" id=\"vez\" value="+vez+" />"+
						"</tr></table>";
					break;
					case 5:
						value = "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" width=\"211\" border=\"0\">"+
						"<tr>"+
						"<td><div id=\"divBtnAns1\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image41','','../img/img_L1_exe10_5a_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_5a_1.png\" name=\"Image41\" width=\"67\" height=\"32\" border=\"0\" id=\"Image41\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns1\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns2\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image42','','../img/img_L1_exe10_5b_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_5b_1.png\" name=\"Image42\" width=\"64\" height=\"32\" border=\"0\" id=\"Image42\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns2\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns3\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image43','','../img/img_L1_exe10_5c_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_5c_2.png\" name=\"Image43\" width=\"73\" height=\"32\" border=\"0\" id=\"Image43\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns3\" value=1 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns4\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image44','','../img/img_L1_exe10_5f_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_5f_1.png\" name=\"Image44\" width=\"65\" height=\"32\" border=\"0\" id=\"Image44\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns4\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns5\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image50','','../img/img_L1_exe10_5d_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_5d_2.png\" name=\"Image50\" width=\"71\" height=\"29\" border=\"0\" id=\"Image50\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns5\" value=1 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns6\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image45','','../img/img_L1_exe10_5e_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_5e_1.png\" name=\"Image45\" width=\"67\" height=\"32\" border=\"0\" id=\"Image45\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns6\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns7\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,7)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image46','','../img/img_L1_exe10_5f_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_5f_1.png\" name=\"Image46\" width=\"65\" height=\"32\" border=\"0\" id=\"Image46\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns7\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns8\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,8)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image47','','../img/img_L1_exe10_5g_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_5g_2.png\" name=\"Image47\" width=\"87\" height=\"32\" border=\"0\" id=\"Image47\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns8\" value=1 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns9\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,9)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image48','','../img/img_L1_exe10_5h_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_5h_1.png\" name=\"Image48\" width=\"65\" height=\"32\" border=\"0\" id=\"Image48\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns9\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns10\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,10)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image49','','../img/img_L1_exe10_5i_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_5i_1.png\" name=\"Image49\" width=\"86\" height=\"32\" border=\"0\" id=\"Image49\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns10\" value=0 />"+
						"</div></td>"+
						"<input type=\"hidden\" id=\"vez\" value="+vez+" />"+
						"</tr></table>";
					break;
					case 6:
						value = "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" width=\"211\" border=\"0\">"+
						"<tr>"+
						"<td><div id=\"divBtnAns1\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image41','','../img/img_L1_exe10_6a_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_6a_1.png\" name=\"Image41\" width=\"66\" height=\"32\" border=\"0\" id=\"Image41\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns1\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns2\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image42','','../img/img_L1_exe10_6b_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_6b_1.png\" name=\"Image42\" width=\"62\" height=\"29\" border=\"0\" id=\"Image42\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns2\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns3\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image43','','../img/img_L1_exe10_6c_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_6c_2.png\" name=\"Image43\" width=\"73\" height=\"32\" border=\"0\" id=\"Image43\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns3\" value=1 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns4\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image44','','../img/img_L1_exe10_6d_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_6d_2.png\" name=\"Image44\" width=\"64\" height=\"32\" border=\"0\" id=\"Image44\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns4\" value=1 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns5\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image45','','../img/img_L1_exe10_6e_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_6e_1.png\" name=\"Image45\" width=\"66\" height=\"32\" border=\"0\" id=\"Image45\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns5\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns6\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image46','','../img/img_L1_exe10_6f_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_6f_1.png\" name=\"Image46\" width=\"64\" height=\"32\" border=\"0\" id=\"Image46\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns6\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns7\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,7)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image47','','../img/img_L1_exe10_6g_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_6g_1.png\" name=\"Image47\" width=\"87\" height=\"32\" border=\"0\" id=\"Image47\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns7\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns8\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,8)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image48','','../img/img_L1_exe10_6h_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_6h_1.png\" name=\"Image48\" width=\"64\" height=\"32\" border=\"0\" id=\"Image48\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns8\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns9\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,9)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image49','','../img/img_L1_exe10_6i_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_6i_2.png\" name=\"Image49\" width=\"87\" height=\"32\" border=\"0\" id=\"Image49\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns9\" value=1 />"+
						"</div></td>"+
						"<input type=\"hidden\" id=\"vez\" value="+vez+" />"+
						"</tr></table>";
					break;
				}
				actualizarBtnL1E10(idQst, idBtn);
			}	
			else if(idBtn == 2){
				vez = parseInt(vez) + 1;
				if(vez >= 3)
					actualizarBtnL1E10(idQst, idBtn);
				switch (idQst){
					case 1:
						case 1:
						value = "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" width=\"211\" border=\"0\">"+
						"<tr>"+
						"<td><div id=\"divBtnAns1\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(1,1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image40','','../img/img_L1_exe10_1a_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_1a_1.png\" name=\"Image40\" width=\"67\" height=\"32\" border=\"0\" id=\"Image40\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns1\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns2\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(1,2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image41','','../img/img_L1_exe10_1b_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_1b_1.png\" name=\"Image41\" width=\"67\" height=\"32\" border=\"0\" id=\"Image41\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns2\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns3\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(1,3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image42','','../img/img_L1_exe10_1c_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_1c_1.png\" name=\"Image42\" width=\"83\" height=\"32\" border=\"0\" id=\"Image42\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns3\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns4\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(1,4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image43','','../img/img_L1_exe10_1d_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_1d_1.png\" name=\"Image43\" width=\"67\" height=\"32\" border=\"0\" id=\"Image43\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns4\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns5\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(1,5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image44','','../img/img_L1_exe10_1e_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_1e_1.png\" name=\"Image44\" width=\"67\" height=\"32\" border=\"0\" id=\"Image44\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns5\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns6\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(1,6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image45','','../img/img_L1_exe10_1f_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_1f_1.png\" name=\"Image45\" width=\"103\" height=\"32\" border=\"0\" id=\"Image45\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns6\" value=0 />"+
						"</div></td>"+
						"<input type=\"hidden\" id=\"vez\" value="+vez+" />"+
						"</tr></table>";
					break;
					case 2:
						value = "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\"width=\"211\" border=\"0\">"+
						"<tr>"+
						"<td><div id=\"divBtnAns1\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(2,1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image40','','../img/img_L1_exe10_2a_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_2a_1.png\" name=\"Image40\" width=\"67\" height=\"32\" border=\"0\" id=\"Image40\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns1\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns2\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(2,2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image41','','../img/img_L1_exe10_2b_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_2b_1.png\" name=\"Image41\" width=\"97\" height=\"32\" border=\"0\" id=\"Image41\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns2\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns3\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(2,3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image42','','../img/img_L1_exe10_2c_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_2c_1.png\" name=\"Image42\" width=\"83\" height=\"32\" border=\"0\" id=\"Image42\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns3\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns4\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(2,4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image43','','../img/img_L1_exe10_2d_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_2d_1.png\" name=\"Image43\" width=\"67\" height=\"32\" border=\"0\" id=\"Image43\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns4\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns5\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(2,5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image44','','../img/img_L1_exe10_2e_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_2e_1.png\" name=\"Image44\" width=\"67\" height=\"32\" border=\"0\" id=\"Image44\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns5\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns6\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(2,6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image45','','../img/img_L1_exe10_2f_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_2f_1.png\" name=\"Image45\" width=\"102\" height=\"32\" border=\"0\" id=\"Image45\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns6\" value=0 />"+
						"</div></td>"+
						"<input type=\"hidden\" id=\"vez\" value="+vez+" />"
						"</tr></table>";
					break;
					case 3:
						value = "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" width=\"211\" border=\"0\">"+
						"<tr>"+
						"<td><div id=\"divBtnAns1\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(3,1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image39','','../img/img_L1_exe10_3a_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_3a_1.png\" name=\"Image39\" width=\"67\" height=\"32\" border=\"0\" id=\"Image39\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns1\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns2\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(3,2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image40','','../img/img_L1_exe10_3b_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_3b_1.png\" name=\"Image40\" width=\"97\" height=\"32\" border=\"0\" id=\"Image40\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns2\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns3\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(3,3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image41','','../img/img_L1_exe10_3c_2.png',0)\">"+
								"<img src=\"../img/img_L1_exe10_3c_1.png\" name=\"Image41\" width=\"55\" height=\"32\" border=\"0\" id=\"Image41\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns3\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns4\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(3,4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image42','','../img/img_L1_exe10_3d_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_3d_1.png\" name=\"Image42\" width=\"82\" height=\"32\" border=\"0\" id=\"Image42\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns4\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns5\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(3,5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image43','','../img/img_L1_exe10_3e_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_3e_1.png\" name=\"Image43\" width=\"67\" height=\"32\" border=\"0\" id=\"Image43\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns5\" value=0 />"+
						"</div></td>"+
						"<input type=\"hidden\" id=\"vez\" value="+vez+" />"+
						"</tr></table>";
					break;
					case 4:
						value = "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" width=\"211\" border=\"0\">"+
						"<tr>"+
						"<td><div id=\"divBtnAns1\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(4,1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image40','','../img/img_L1_exe10_4a_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_4a_1.png\" name=\"Image40\" width=\"67\" height=\"32\" border=\"0\" id=\"Image40\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns1\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns2\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(4,2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image41','','../img/img_L1_exe10_4b_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_4b_1.png\" name=\"Image41\" width=\"97\" height=\"32\" border=\"0\" id=\"Image41\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns2\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns3\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(4,3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image42','','../img/img_L1_exe10_4c_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_4c_1.png\" name=\"Image42\" width=\"55\" height=\"32\" border=\"0\" id=\"Image42\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns3\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns4\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(4,4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image43','','../img/img_L1_exe10_4d_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_4d_1.png\" name=\"Image43\" width=\"82\" height=\"32\" border=\"0\" id=\"Image43\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns4\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns5\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(4,5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image44','','../img/img_L1_exe10_4e_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_4e_1.png\" name=\"Image44\" width=\"67\" height=\"32\" border=\"0\" id=\"Image44\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns5\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns6\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(4,6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image45','','../img/img_L1_exe10_4f_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_4f_1.png\" name=\"Image45\" width=\"65\" height=\"32\" border=\"0\" id=\"Image45\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns6\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns7\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(4,7)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image46','','../img/img_L1_exe10_4g_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_4g_1.png\" name=\"Image46\" width=\"88\" height=\"32\" border=\"0\" id=\"Image46\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns7\" value=0 />"+
						"</div></td>"+
						"<input type=\"hidden\" id=\"vez\" value="+vez+" />"+
						"</tr></table>";
					break;
					case 5:
						value = "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" width=\"211\" border=\"0\">"+
						"<tr>"+
						"<td><div id=\"divBtnAns1\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image41','','../img/img_L1_exe10_5a_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_5a_1.png\" name=\"Image41\" width=\"67\" height=\"32\" border=\"0\" id=\"Image41\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns1\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns2\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image42','','../img/img_L1_exe10_5b_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_5b_1.png\" name=\"Image42\" width=\"64\" height=\"32\" border=\"0\" id=\"Image42\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns2\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns3\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image43','','../img/img_L1_exe10_5c_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_5c_1.png\" name=\"Image43\" width=\"73\" height=\"32\" border=\"0\" id=\"Image43\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns3\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns4\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image44','','../img/img_L1_exe10_5f_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_5f_1.png\" name=\"Image44\" width=\"65\" height=\"32\" border=\"0\" id=\"Image44\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns4\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns5\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image50','','../img/img_L1_exe10_5d_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_5d_1.png\" name=\"Image50\" width=\"71\" height=\"29\" border=\"0\" id=\"Image50\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns5\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns6\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image45','','../img/img_L1_exe10_5e_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_5e_1.png\" name=\"Image45\" width=\"67\" height=\"32\" border=\"0\" id=\"Image45\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns6\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns7\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,7)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image46','','../img/img_L1_exe10_5f_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_5f_1.png\" name=\"Image46\" width=\"65\" height=\"32\" border=\"0\" id=\"Image46\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns7\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns8\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,8)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image47','','../img/img_L1_exe10_5g_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_5g_1.png\" name=\"Image47\" width=\"87\" height=\"32\" border=\"0\" id=\"Image47\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns8\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns9\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,9)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image48','','../img/img_L1_exe10_5h_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_5h_1.png\" name=\"Image48\" width=\"65\" height=\"32\" border=\"0\" id=\"Image48\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns9\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns10\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,10)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image49','','../img/img_L1_exe10_5i_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_5i_1.png\" name=\"Image49\" width=\"86\" height=\"32\" border=\"0\" id=\"Image49\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns10\" value=0 />"+
						"</div></td>"+
						"<input type=\"hidden\" id=\"vez\" value="+vez+" />"+
						"</tr></table>";
					break;
					case 6:
						value = "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" width=\"211\" border=\"0\">"+
						"<tr>"+
						"<td><div id=\"divBtnAns1\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image41','','../img/img_L1_exe10_6a_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_6a_1.png\" name=\"Image41\" width=\"66\" height=\"32\" border=\"0\" id=\"Image41\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns1\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns2\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image42','','../img/img_L1_exe10_6b_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_6b_1.png\" name=\"Image42\" width=\"62\" height=\"29\" border=\"0\" id=\"Image42\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns2\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns3\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image43','','../img/img_L1_exe10_6c_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_6c_1.png\" name=\"Image43\" width=\"73\" height=\"32\" border=\"0\" id=\"Image43\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns3\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns4\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image44','','../img/img_L1_exe10_6d_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_6d_1.png\" name=\"Image44\" width=\"64\" height=\"32\" border=\"0\" id=\"Image44\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns4\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns5\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image45','','../img/img_L1_exe10_6e_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_6e_1.png\" name=\"Image45\" width=\"66\" height=\"32\" border=\"0\" id=\"Image45\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns5\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns6\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image46','','../img/img_L1_exe10_6f_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_6f_1.png\" name=\"Image46\" width=\"64\" height=\"32\" border=\"0\" id=\"Image46\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns6\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns7\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,7)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image47','','../img/img_L1_exe10_6g_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_6g_1.png\" name=\"Image47\" width=\"87\" height=\"32\" border=\"0\" id=\"Image47\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns7\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns8\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,8)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image48','','../img/img_L1_exe10_6h_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_6h_1.png\" name=\"Image48\" width=\"64\" height=\"32\" border=\"0\" id=\"Image48\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns8\" value=0 />"+
						"</div></td>"+
						"<td><div id=\"divBtnAns9\">"+
							"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,9)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image49','','../img/img_L1_exe10_6i_2.png',1)\">"+
								"<img src=\"../img/img_L1_exe10_6i_1.png\" name=\"Image49\" width=\"87\" height=\"32\" border=\"0\" id=\"Image49\" />"+
							"</a>"+
							"<input type=\"hidden\" id=\"iptAns9\" value=0 />"+
						"</div></td>"+
						"<input type=\"hidden\" id=\"vez\" value="+vez+" />"+
						"</tr></table>";
					break;
				}
			}
			$('#divBtnQst').html(value); 
			actualizardivCalL1E10(img);
		}
	}
}

function actualizarBtnL1E10(idQst, idBtn)
{
	if(idBtn == 3)
		btn = "<table align=\"center\" background=\"../img/8.bg_refresh.png\" width=\"141\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"47\" height=\"47\" align=\"right\" valign=\"middle\"><img src=\"../img/8.btn_chulito_desab.png\" name=\"Image24\" width=\"25\" height=\"23\" border=\"0\" id=\"Image24\" /></td>"+
				"<td width=\"46\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E10("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image25','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image25\" width=\"25\" height=\"23\" border=\"0\" id=\"Image25\" /></a></td>"+
				"<td width=\"48\" align=\"left\"><a href=\"#\" onclick=\"verificarL1E10("+idQst+",3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image30','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image30\" width=\"25\" height=\"23\" border=\"0\" id=\"Image30\" /></a></td>"+
			  "</tr>"+
			"</table>";
	else
		btn = "<table align=\"center\" background=\"../img/8.bg_refresh.png\" width=\"141\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"47\" height=\"47\" align=\"right\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E10("+idQst+",1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image24','','../img/8.btn_chulito2.png',1)\"><img src=\"../img/8.btn_chulito.png\" name=\"Image24\" width=\"25\" height=\"23\" border=\"0\" id=\"Image24\" /></a></td>"+
				"<td width=\"46\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E10("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image25','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image25\" width=\"25\" height=\"23\" border=\"0\" id=\"Image25\" /></a></td>"+
				"<td width=\"48\" align=\"left\"><a href=\"#\" onclick=\"verificarL1E10("+idQst+",3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image30','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image30\" width=\"25\" height=\"23\" border=\"0\" id=\"Image30\" /></a></td>"+
			  "</tr>"+
			"</table>";
			
	$('#divBtn').html(btn);
}

function actualizardivCalL1E10(img)
{
	//alert(idBtn);
	if(img != "")
		html = "<img src=\"../img/"+img+".png\" width=\"30\" height=\"30\" />";
	else
		html = "&nbsp;";
	
	$('#divCalL1E10').html(html);
}

function cambiarDivL1Ex10(idQst)
{	
	if (idQst == 1)
		btnNum = "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" width=\"211\" border=\"0\">"+
			  "<tr>"+
				"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL1Ex10(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image38','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_2.png\" name=\"Image38\" width=\"40\" height=\"53\" border=\"0\" id=\"Image38\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex10(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image26','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image26\" width=\"40\" height=\"53\" border=\"0\" id=\"Image26\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex10(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image27','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_1.png\" name=\"Image27\" width=\"40\" height=\"53\" border=\"0\" id=\"Image27\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex10(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image28','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_1.png\" name=\"Image28\" width=\"40\" height=\"53\" border=\"0\" id=\"Image28\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"10\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex10(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image29','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_1.png\" name=\"Image29\" width=\"40\" height=\"53\" border=\"0\" id=\"Image29\" /></a></td>"+
				"<td width=\"10\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"19\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex10(6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image31','','../img/btn_6b_2.png',1)\"><img src=\"../img/btn_6b_1.png\" name=\"Image31\" width=\"40\" height=\"53\" border=\"0\" id=\"Image31\" /></a></td>"+
			  "</tr>"+
			"</table>";
	else if (idQst == 2)
		btnNum = "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" width=\"211\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL1Ex10(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image38','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image38\" width=\"40\" height=\"53\" border=\"0\" id=\"Image38\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex10(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image26','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_2.png\" name=\"Image26\" width=\"40\" height=\"53\" border=\"0\" id=\"Image26\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex10(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image27','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_1.png\" name=\"Image27\" width=\"40\" height=\"53\" border=\"0\" id=\"Image27\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex10(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image28','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_1.png\" name=\"Image28\" width=\"40\" height=\"53\" border=\"0\" id=\"Image28\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"10\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex10(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image29','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_1.png\" name=\"Image29\" width=\"40\" height=\"53\" border=\"0\" id=\"Image29\" /></a></td>"+
			"<td width=\"10\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"19\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex10(6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image31','','../img/btn_6b_2.png',1)\"><img src=\"../img/btn_6b_1.png\" name=\"Image31\" width=\"40\" height=\"53\" border=\"0\" id=\"Image31\" /></a></td>"+
		  "</tr>"+
		"</table>";
	else if (idQst == 3)
		btnNum = "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" width=\"211\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL1Ex10(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image38','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image38\" width=\"40\" height=\"53\" border=\"0\" id=\"Image38\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex10(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image26','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image26\" width=\"40\" height=\"53\" border=\"0\" id=\"Image26\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex10(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image27','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_2.png\" name=\"Image27\" width=\"40\" height=\"53\" border=\"0\" id=\"Image27\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex10(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image28','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_1.png\" name=\"Image28\" width=\"40\" height=\"53\" border=\"0\" id=\"Image28\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"10\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex10(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image29','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_1.png\" name=\"Image29\" width=\"40\" height=\"53\" border=\"0\" id=\"Image29\" /></a></td>"+
			"<td width=\"10\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"19\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex10(6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image31','','../img/btn_6b_2.png',1)\"><img src=\"../img/btn_6b_1.png\" name=\"Image31\" width=\"40\" height=\"53\" border=\"0\" id=\"Image31\" /></a></td>"+
		  "</tr>"+
		"</table>";
	else if (idQst == 4)
		btnNum = "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" width=\"211\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL1Ex10(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image38','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image38\" width=\"40\" height=\"53\" border=\"0\" id=\"Image38\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex10(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image26','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image26\" width=\"40\" height=\"53\" border=\"0\" id=\"Image26\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex10(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image27','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_1.png\" name=\"Image27\" width=\"40\" height=\"53\" border=\"0\" id=\"Image27\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex10(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image28','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_2.png\" name=\"Image28\" width=\"40\" height=\"53\" border=\"0\" id=\"Image28\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"10\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex10(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image29','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_1.png\" name=\"Image29\" width=\"40\" height=\"53\" border=\"0\" id=\"Image29\" /></a></td>"+
			"<td width=\"10\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"19\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex10(6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image31','','../img/btn_6b_2.png',1)\"><img src=\"../img/btn_6b_1.png\" name=\"Image31\" width=\"40\" height=\"53\" border=\"0\" id=\"Image31\" /></a></td>"+
		  "</tr>"+
		"</table>";
	else if (idQst == 5)
		btnNum = "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" width=\"211\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL1Ex10(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image38','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image38\" width=\"40\" height=\"53\" border=\"0\" id=\"Image38\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex10(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image26','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image26\" width=\"40\" height=\"53\" border=\"0\" id=\"Image26\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex10(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image27','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_1.png\" name=\"Image27\" width=\"40\" height=\"53\" border=\"0\" id=\"Image27\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex10(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image28','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_1.png\" name=\"Image28\" width=\"40\" height=\"53\" border=\"0\" id=\"Image28\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"10\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex10(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image29','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_2.png\" name=\"Image29\" width=\"40\" height=\"53\" border=\"0\" id=\"Image29\" /></a></td>"+
			"<td width=\"10\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"19\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex10(6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image31','','../img/btn_6b_2.png',1)\"><img src=\"../img/btn_6b_1.png\" name=\"Image31\" width=\"40\" height=\"53\" border=\"0\" id=\"Image31\" /></a></td>"+
		  "</tr>"+
		"</table>";
	else if (idQst == 6)
		btnNum = "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" width=\"211\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL1Ex10(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image38','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image38\" width=\"40\" height=\"53\" border=\"0\" id=\"Image38\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex10(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image26','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image26\" width=\"40\" height=\"53\" border=\"0\" id=\"Image26\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex10(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image27','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_1.png\" name=\"Image27\" width=\"40\" height=\"53\" border=\"0\" id=\"Image27\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex10(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image28','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_1.png\" name=\"Image28\" width=\"40\" height=\"53\" border=\"0\" id=\"Image28\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"10\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex10(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image29','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_1.png\" name=\"Image29\" width=\"40\" height=\"53\" border=\"0\" id=\"Image29\" /></a></td>"+
			"<td width=\"10\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"19\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex10(6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image31','','../img/btn_6b_2.png',1)\"><img src=\"../img/btn_6b_2.png\" name=\"Image31\" width=\"40\" height=\"53\" border=\"0\" id=\"Image31\" /></a></td>"+
		  "</tr>"+
		"</table>";
	
	$('#divBtnL1Ex10').html(btnNum);
	cambiarQstL1Ex10(idQst);
}

function cambiarQstL1Ex10(idQst)
{	
	if (idQst == 1)
		btnQst = "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" width=\"211\" border=\"0\">"+
			"<tr>"+
			"<td><div id=\"divBtnAns1\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(1,1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image40','','../img/img_L1_exe10_1a_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_1a_1.png\" name=\"Image40\" width=\"67\" height=\"32\" border=\"0\" id=\"Image40\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns1\" value=0 />"+
			"</div></td>"+
			"<td><div id=\"divBtnAns2\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(1,2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image41','','../img/img_L1_exe10_1b_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_1b_1.png\" name=\"Image41\" width=\"67\" height=\"32\" border=\"0\" id=\"Image41\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns2\" value=0 />"+
			"</div></td>"+
			"<td><div id=\"divBtnAns3\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(1,3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image42','','../img/img_L1_exe10_1c_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_1c_1.png\" name=\"Image42\" width=\"83\" height=\"32\" border=\"0\" id=\"Image42\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns3\" value=0 />"+
			"</div></td>"+
			"<td><div id=\"divBtnAns4\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(1,4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image43','','../img/img_L1_exe10_1d_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_1d_1.png\" name=\"Image43\" width=\"67\" height=\"32\" border=\"0\" id=\"Image43\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns4\" value=0 />"+
			"</div></td>"+
			"<td><div id=\"divBtnAns5\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(1,5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image44','','../img/img_L1_exe10_1e_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_1e_1.png\" name=\"Image44\" width=\"67\" height=\"32\" border=\"0\" id=\"Image44\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns5\" value=0 />"+
			"</div></td>"+
			"<td><div id=\"divBtnAns6\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(1,6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image45','','../img/img_L1_exe10_1f_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_1f_1.png\" name=\"Image45\" width=\"103\" height=\"32\" border=\"0\" id=\"Image45\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns6\" value=0 />"+
			"</div></td>"+
			"<input type=\"hidden\" id=\"vez\" value=0 />"+
			"</tr></table>";
	else if (idQst == 2)
		btnQst = "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\"width=\"211\" border=\"0\">"+
			"<tr>"+
			"<td><div id=\"divBtnAns1\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(2,1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image40','','../img/img_L1_exe10_2a_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_2a_1.png\" name=\"Image40\" width=\"67\" height=\"32\" border=\"0\" id=\"Image40\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns1\" value=0 />"+
			"</div></td>"+
			"<td><div id=\"divBtnAns2\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(2,2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image41','','../img/img_L1_exe10_2b_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_2b_1.png\" name=\"Image41\" width=\"97\" height=\"32\" border=\"0\" id=\"Image41\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns2\" value=0 />"+
			"</div></td>"+
			"<td><div id=\"divBtnAns3\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(2,3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image42','','../img/img_L1_exe10_2c_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_2c_1.png\" name=\"Image42\" width=\"83\" height=\"32\" border=\"0\" id=\"Image42\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns3\" value=0 />"+
			"</div></td>"+
			"<td><div id=\"divBtnAns4\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(2,4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image43','','../img/img_L1_exe10_2d_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_2d_1.png\" name=\"Image43\" width=\"67\" height=\"32\" border=\"0\" id=\"Image43\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns4\" value=0 />"+
			"</div></td>"+
			"<td><div id=\"divBtnAns5\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(2,5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image44','','../img/img_L1_exe10_2e_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_2e_1.png\" name=\"Image44\" width=\"67\" height=\"32\" border=\"0\" id=\"Image44\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns5\" value=0 />"+
			"</div></td>"+
			"<td><div id=\"divBtnAns6\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(2,6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image45','','../img/img_L1_exe10_2f_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_2f_1.png\" name=\"Image45\" width=\"102\" height=\"32\" border=\"0\" id=\"Image45\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns6\" value=0 />"+
			"</div></td>"+
			"<input type=\"hidden\" id=\"vez\" value=0 />"+
			"</tr></table>";
	else if (idQst == 3)
		btnQst = "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" width=\"211\" border=\"0\">"+
			"<tr>"+
			"<td><div id=\"divBtnAns1\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(3,1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image39','','../img/img_L1_exe10_3a_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_3a_1.png\" name=\"Image39\" width=\"67\" height=\"32\" border=\"0\" id=\"Image39\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns1\" value=0 />"+
			"</div></td>"+
			"<td><div id=\"divBtnAns2\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(3,2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image40','','../img/img_L1_exe10_3b_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_3b_1.png\" name=\"Image40\" width=\"97\" height=\"32\" border=\"0\" id=\"Image40\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns2\" value=0 />"+
			"</div></td>"+
			"<td><div id=\"divBtnAns3\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(3,3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image41','','../img/img_L1_exe10_3c_2.png',0)\">"+
					"<img src=\"../img/img_L1_exe10_3c_1.png\" name=\"Image41\" width=\"55\" height=\"32\" border=\"0\" id=\"Image41\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns3\" value=0 />"+
			"</div></td>"+
			"<td><div id=\"divBtnAns4\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(3,4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image42','','../img/img_L1_exe10_3d_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_3d_1.png\" name=\"Image42\" width=\"82\" height=\"32\" border=\"0\" id=\"Image42\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns4\" value=0 />"+
			"</div></td>"+
			"<td><div id=\"divBtnAns5\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(3,5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image43','','../img/img_L1_exe10_3e_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_3e_1.png\" name=\"Image43\" width=\"67\" height=\"32\" border=\"0\" id=\"Image43\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns5\" value=0 />"+
			"</div></td>"+
			"<input type=\"hidden\" id=\"vez\" value=0 />"+
			"</tr></table>";
	else if (idQst == 4)
		btnQst = "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" width=\"211\" border=\"0\">"+
			"<tr>"+
			"<td><div id=\"divBtnAns1\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(4,1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image40','','../img/img_L1_exe10_4a_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_4a_1.png\" name=\"Image40\" width=\"67\" height=\"32\" border=\"0\" id=\"Image40\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns1\" value=0 />"+
			"</div></td>"+
			"<td><div id=\"divBtnAns2\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(4,2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image41','','../img/img_L1_exe10_4b_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_4b_1.png\" name=\"Image41\" width=\"97\" height=\"32\" border=\"0\" id=\"Image41\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns2\" value=0 />"+
			"</div></td>"+
			"<td><div id=\"divBtnAns3\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(4,3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image42','','../img/img_L1_exe10_4c_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_4c_1.png\" name=\"Image42\" width=\"55\" height=\"32\" border=\"0\" id=\"Image42\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns3\" value=0 />"+
			"</div></td>"+
			"<td><div id=\"divBtnAns4\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(4,4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image43','','../img/img_L1_exe10_4d_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_4d_1.png\" name=\"Image43\" width=\"82\" height=\"32\" border=\"0\" id=\"Image43\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns4\" value=0 />"+
			"</div></td>"+
			"<td><div id=\"divBtnAns5\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(4,5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image44','','../img/img_L1_exe10_4e_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_4e_1.png\" name=\"Image44\" width=\"67\" height=\"32\" border=\"0\" id=\"Image44\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns5\" value=0 />"+
			"</div></td>"+
			"<td><div id=\"divBtnAns6\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(4,6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image45','','../img/img_L1_exe10_4f_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_4f_1.png\" name=\"Image45\" width=\"65\" height=\"32\" border=\"0\" id=\"Image45\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns6\" value=0 />"+
			"</div></td>"+
			"<td><div id=\"divBtnAns7\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(4,7)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image46','','../img/img_L1_exe10_4g_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_4g_1.png\" name=\"Image46\" width=\"88\" height=\"32\" border=\"0\" id=\"Image46\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns7\" value=0 />"+
			"</div></td>"+
			"<input type=\"hidden\" id=\"vez\" value=0 />"+
			"</tr></table>";
	else if (idQst == 5)
		btnQst = "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" width=\"211\" border=\"0\">"+
			"<tr>"+
			"<td><div id=\"divBtnAns1\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image41','','../img/img_L1_exe10_5a_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_5a_1.png\" name=\"Image41\" width=\"67\" height=\"32\" border=\"0\" id=\"Image41\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns1\" value=0 />"+
			"</div></td>"+
			"<td><div id=\"divBtnAns2\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image42','','../img/img_L1_exe10_5b_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_5b_1.png\" name=\"Image42\" width=\"64\" height=\"32\" border=\"0\" id=\"Image42\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns2\" value=0 />"+
			"</div></td>"+
			"<td><div id=\"divBtnAns3\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image43','','../img/img_L1_exe10_5c_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_5c_1.png\" name=\"Image43\" width=\"73\" height=\"32\" border=\"0\" id=\"Image43\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns3\" value=0 />"+
			"</div></td>"+
			"<td><div id=\"divBtnAns4\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image44','','../img/img_L1_exe10_5f_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_5f_1.png\" name=\"Image44\" width=\"65\" height=\"32\" border=\"0\" id=\"Image44\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns4\" value=0 />"+
			"</div></td>"+
			"<td><div id=\"divBtnAns5\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image50','','../img/img_L1_exe10_5d_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_5d_1.png\" name=\"Image50\" width=\"71\" height=\"29\" border=\"0\" id=\"Image50\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns5\" value=0 />"+
			"</div></td>"+
			"<td><div id=\"divBtnAns6\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image45','','../img/img_L1_exe10_5e_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_5e_1.png\" name=\"Image45\" width=\"67\" height=\"32\" border=\"0\" id=\"Image45\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns6\" value=0 />"+
			"</div></td>"+
			"<td><div id=\"divBtnAns7\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,7)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image46','','../img/img_L1_exe10_5f_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_5f_1.png\" name=\"Image46\" width=\"65\" height=\"32\" border=\"0\" id=\"Image46\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns7\" value=0 />"+
			"</div></td>"+
			"<td><div id=\"divBtnAns8\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,8)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image47','','../img/img_L1_exe10_5g_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_5g_1.png\" name=\"Image47\" width=\"87\" height=\"32\" border=\"0\" id=\"Image47\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns8\" value=0 />"+
			"</div></td>"+
			"<td><div id=\"divBtnAns9\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,9)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image48','','../img/img_L1_exe10_5h_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_5h_1.png\" name=\"Image48\" width=\"65\" height=\"32\" border=\"0\" id=\"Image48\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns9\" value=0 />"+
			"</div></td>"+
			"<td><div id=\"divBtnAns10\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(5,10)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image49','','../img/img_L1_exe10_5i_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_5i_1.png\" name=\"Image49\" width=\"86\" height=\"32\" border=\"0\" id=\"Image49\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns10\" value=0 />"+
			"</div></td>"+
			"<input type=\"hidden\" id=\"vez\" value=0 />"+
			"</tr></table>";
	else if (idQst == 6)
		btnQst = "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" width=\"211\" border=\"0\">"+
			"<tr>"+
			"<td><div id=\"divBtnAns1\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image41','','../img/img_L1_exe10_6a_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_6a_1.png\" name=\"Image41\" width=\"66\" height=\"32\" border=\"0\" id=\"Image41\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns1\" value=0 />"+
			"</div></td>"+
			"<td><div id=\"divBtnAns2\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image42','','../img/img_L1_exe10_6b_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_6b_1.png\" name=\"Image42\" width=\"62\" height=\"29\" border=\"0\" id=\"Image42\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns2\" value=0 />"+
			"</div></td>"+
			"<td><div id=\"divBtnAns3\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image43','','../img/img_L1_exe10_6c_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_6c_1.png\" name=\"Image43\" width=\"73\" height=\"32\" border=\"0\" id=\"Image43\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns3\" value=0 />"+
			"</div></td>"+
			"<td><div id=\"divBtnAns4\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image44','','../img/img_L1_exe10_6d_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_6d_1.png\" name=\"Image44\" width=\"64\" height=\"32\" border=\"0\" id=\"Image44\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns4\" value=0 />"+
			"</div></td>"+
			"<td><div id=\"divBtnAns5\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image45','','../img/img_L1_exe10_6e_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_6e_1.png\" name=\"Image45\" width=\"66\" height=\"32\" border=\"0\" id=\"Image45\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns5\" value=0 />"+
			"</div></td>"+
			"<td><div id=\"divBtnAns6\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image46','','../img/img_L1_exe10_6f_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_6f_1.png\" name=\"Image46\" width=\"64\" height=\"32\" border=\"0\" id=\"Image46\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns6\" value=0 />"+
			"</div></td>"+
			"<td><div id=\"divBtnAns7\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,7)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image47','','../img/img_L1_exe10_6g_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_6g_1.png\" name=\"Image47\" width=\"87\" height=\"32\" border=\"0\" id=\"Image47\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns7\" value=0 />"+
			"</div></td>"+
			"<td><div id=\"divBtnAns8\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,8)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image48','','../img/img_L1_exe10_6h_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_6h_1.png\" name=\"Image48\" width=\"64\" height=\"32\" border=\"0\" id=\"Image48\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns8\" value=0 />"+
			"</div></td>"+
			"<td><div id=\"divBtnAns9\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex10(6,9)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image49','','../img/img_L1_exe10_6i_2.png',1)\">"+
					"<img src=\"../img/img_L1_exe10_6i_1.png\" name=\"Image49\" width=\"87\" height=\"32\" border=\"0\" id=\"Image49\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAns9\" value=0 />"+
			"</div></td>"+
			"<input type=\"hidden\" id=\"vez\" value=0 />"+
			"</tr></table>";
	
	$('#divBtnQst').html(btnQst);
	cambiarLetL1Ex10(idQst);
}

function cambiarLetL1Ex10(idQst)
{	
	if (idQst == 1)
		divLet = "<table width=\"150\" border=\"0\">"+
          "<tr class=\"texto_1_muy_muy__grande\">"+
            "<td height=\"141\" align=\"center\" valign=\"middle\" class=\"texto_2_muy_muy__grande\">/</td>"+
            "<td align=\"center\" valign=\"middle\" class=\"texto_1_muy_muy__grande\">i</td>"+
            "<td align=\"center\" valign=\"middle\" class=\"texto_2_muy_muy__grande\">/</td>"+
          "</tr>"+
        "</table>";
	else if (idQst == 2)
		divLet = "<table width=\"150\" border=\"0\">"+
          "<tr class=\"texto_1_muy_muy__grande\">"+
            "<td height=\"141\" align=\"center\" valign=\"middle\" class=\"texto_1_muy_muy__grande\">/</td>"+
            "<td align=\"center\" valign=\"middle\" class=\"texto_2_muy_muy__grande\">^</td>"+
            "<td align=\"center\" valign=\"middle\" class=\"texto_1_muy_muy__grande\">/</td>"+
          "</tr>"+
        "</table>";
	else if (idQst == 3)
		divLet = "<table width=\"150\" border=\"0\">"+
          "<tr class=\"texto_1_muy_muy__grande\">"+
            "<td height=\"141\" align=\"center\" valign=\"middle\" class=\"texto_2_muy_muy__grande\">/</td>"+
            "<td align=\"center\" valign=\"middle\" class=\"texto_1_muy_muy__grande\">i</td>"+
            "<td align=\"center\" valign=\"middle\" class=\"texto_2_muy_muy__grande\">/</td>"+
          "</tr>"+
        "</table>";
	else if (idQst == 4)
		divLet = "<table width=\"150\" border=\"0\">"+
          "<tr class=\"texto_1_muy_muy__grande\">"+
            "<td height=\"141\" align=\"center\" valign=\"middle\" class=\"texto_1_muy_muy__grande\">/</td>"+
            "<td align=\"center\" valign=\"middle\" class=\"texto_2_muy_muy__grande\">ai</td>"+
            "<td align=\"center\" valign=\"middle\" class=\"texto_1_muy_muy__grande\">/</td>"+
          "</tr>"+
        "</table>";
	else if (idQst == 5)
		divLet = "<table width=\"150\" border=\"0\">"+
          "<tr class=\"texto_1_muy_muy__grande\">"+
            "<td height=\"141\" align=\"center\" valign=\"middle\" class=\"texto_2_muy_muy__grande\">/</td>"+
            "<td align=\"center\" valign=\"middle\" class=\"texto_1_muy_muy__grande\">e</td>"+
            "<td align=\"center\" valign=\"middle\" class=\"texto_2_muy_muy__grande\">/</td>"+
          "</tr>"+
        "</table>";
	else if (idQst == 6)
		divLet = "<table width=\"150\" border=\"0\">"+
          "<tr class=\"texto_1_muy_muy__grande\">"+
            "<td height=\"141\" align=\"center\" valign=\"middle\" class=\"texto_2_muy_muy__grande\">/</td>"+
            "<td align=\"center\" valign=\"middle\" class=\"texto_1_muy_muy__grande\">o</td>"+
            "<td align=\"center\" valign=\"middle\" class=\"texto_2_muy_muy__grande\">/</td>"+
          "</tr>"+
        "</table>";
	
	$('#divLetL1Ex10').html(divLet);
	cambiarSwfL1Ex10(idQst);
}

function cambiarSwfL1Ex10(idQst)
{	
	if (idQst == 1)
		swf = "<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\" align=\"absmiddle\" id=\"FlashID1\" title=\"Exe 10 - A\">"+
                "<param name=\"movie\" value=\"../swf/L1/L1_Exe_10/L1_Exe_10_a.swf\" />"+
                "<param name=\"quality\" value=\"high\" />"+
                "<param name=\"wmode\" value=\"transparent\" />"+
                "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
                "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versi�n m�s reciente de Flash Player. Elim�nela si no desea que los usuarios vean el mensaje. -->"+
                "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
                "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Oc�ltela a IE mediante IECC. -->"+
                "<!--[if !IE]>-->"+
                "<object data=\"../swf/L1/L1_Exe_10/L1_Exe_10_a.swf\" type=\"application/x-shockwave-flash\" width=\"45\" height=\"40\" align=\"absmiddle\">"+
                  "<!--<![endif]-->"+
                  "<param name=\"quality\" value=\"high\" />"+
                  "<param name=\"wmode\" value=\"transparent\" />"+
                  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
                  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
                  "<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
                  "<div>"+
                    "<h4>El contenido de esta p�gina requiere una versi�n m�s reciente de Adobe Flash Player.</h4>"+
                    "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
                  "</div>"+
                  "<!--[if !IE]>-->"+
                "</object>"+
                "<!--<![endif]-->"+
              "</object>";
	else if (idQst == 2)
		swf = "<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\" align=\"absmiddle\" id=\"FlashID2\" title=\"Exe 10 - A\">"+
                "<param name=\"movie\" value=\"../swf/L1/L1_Exe_10/L1_Exe_10_b.swf\" />"+
                "<param name=\"quality\" value=\"high\" />"+
                "<param name=\"wmode\" value=\"transparent\" />"+
                "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
                "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versi�n m�s reciente de Flash Player. Elim�nela si no desea que los usuarios vean el mensaje. -->"+
                "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
                "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Oc�ltela a IE mediante IECC. -->"+
                "<!--[if !IE]>-->"+
                "<object data=\"../swf/L1/L1_Exe_10/L1_Exe_10_b.swf\" type=\"application/x-shockwave-flash\" width=\"45\" height=\"40\" align=\"absmiddle\">"+
                  "<!--<![endif]-->"+
                  "<param name=\"quality\" value=\"high\" />"+
                  "<param name=\"wmode\" value=\"transparent\" />"+
                  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
                  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
                  "<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
                  "<div>"+
                    "<h4>El contenido de esta p�gina requiere una versi�n m�s reciente de Adobe Flash Player.</h4>"+
                    "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
                  "</div>"+
                  "<!--[if !IE]>-->"+
                "</object>"+
                "<!--<![endif]-->"+
              "</object>";
	else if (idQst == 3)
		swf = "<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\" align=\"absmiddle\" id=\"FlashID3\" title=\"Exe 10 - A\">"+
                "<param name=\"movie\" value=\"../swf/L1/L1_Exe_10/L1_Exe_10_c.swf\" />"+
                "<param name=\"quality\" value=\"high\" />"+
                "<param name=\"wmode\" value=\"transparent\" />"+
                "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
                "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versi�n m�s reciente de Flash Player. Elim�nela si no desea que los usuarios vean el mensaje. -->"+
                "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
                "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Oc�ltela a IE mediante IECC. -->"+
                "<!--[if !IE]>-->"+
                "<object data=\"../swf/L1/L1_Exe_10/L1_Exe_10_c.swf\" type=\"application/x-shockwave-flash\" width=\"45\" height=\"40\" align=\"absmiddle\">"+
                  "<!--<![endif]-->"+
                  "<param name=\"quality\" value=\"high\" />"+
                  "<param name=\"wmode\" value=\"transparent\" />"+
                  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
                  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
                  "<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
                  "<div>"+
                    "<h4>El contenido de esta p�gina requiere una versi�n m�s reciente de Adobe Flash Player.</h4>"+
                    "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
                  "</div>"+
                  "<!--[if !IE]>-->"+
                "</object>"+
                "<!--<![endif]-->"+
              "</object>";
	else if (idQst == 4)
		swf = "<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\" align=\"absmiddle\" id=\"FlashID4\" title=\"Exe 10 - A\">"+
                "<param name=\"movie\" value=\"../swf/L1/L1_Exe_10/L1_Exe_10_d.swf\" />"+
                "<param name=\"quality\" value=\"high\" />"+
                "<param name=\"wmode\" value=\"transparent\" />"+
                "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
                "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versi�n m�s reciente de Flash Player. Elim�nela si no desea que los usuarios vean el mensaje. -->"+
                "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
                "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Oc�ltela a IE mediante IECC. -->"+
                "<!--[if !IE]>-->"+
                "<object data=\"../swf/L1/L1_Exe_10/L1_Exe_10_d.swf\" type=\"application/x-shockwave-flash\" width=\"45\" height=\"40\" align=\"absmiddle\">"+
                  "<!--<![endif]-->"+
                  "<param name=\"quality\" value=\"high\" />"+
                  "<param name=\"wmode\" value=\"transparent\" />"+
                  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
                  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
                  "<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
                  "<div>"+
                    "<h4>El contenido de esta p�gina requiere una versi�n m�s reciente de Adobe Flash Player.</h4>"+
                    "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
                  "</div>"+
                  "<!--[if !IE]>-->"+
                "</object>"+
                "<!--<![endif]-->"+
              "</object>";
	else if (idQst == 5)
		swf = "<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\" align=\"absmiddle\" id=\"FlashID5\" title=\"Exe 10 - A\">"+
                "<param name=\"movie\" value=\"../swf/L1/L1_Exe_10/L1_Exe_10_e.swf\" />"+
                "<param name=\"quality\" value=\"high\" />"+
                "<param name=\"wmode\" value=\"transparent\" />"+
                "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
                "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versi�n m�s reciente de Flash Player. Elim�nela si no desea que los usuarios vean el mensaje. -->"+
                "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
                "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Oc�ltela a IE mediante IECC. -->"+
                "<!--[if !IE]>-->"+
                "<object data=\"../swf/L1/L1_Exe_10/L1_Exe_10_e.swf\" type=\"application/x-shockwave-flash\" width=\"45\" height=\"40\" align=\"absmiddle\">"+
                  "<!--<![endif]-->"+
                  "<param name=\"quality\" value=\"high\" />"+
                  "<param name=\"wmode\" value=\"transparent\" />"+
                  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
                  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
                  "<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
                  "<div>"+
                    "<h4>El contenido de esta p�gina requiere una versi�n m�s reciente de Adobe Flash Player.</h4>"+
                    "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
                  "</div>"+
                  "<!--[if !IE]>-->"+
                "</object>"+
                "<!--<![endif]-->"+
              "</object>";
	else if (idQst == 6)
		swf = "<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\" align=\"absmiddle\" id=\"FlashID6\" title=\"Exe 10 - A\">"+
                "<param name=\"movie\" value=\"../swf/L1/L1_Exe_10/L1_Exe_10_f.swf\" />"+
                "<param name=\"quality\" value=\"high\" />"+
                "<param name=\"wmode\" value=\"transparent\" />"+
                "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
                "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versi�n m�s reciente de Flash Player. Elim�nela si no desea que los usuarios vean el mensaje. -->"+
                "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
                "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Oc�ltela a IE mediante IECC. -->"+
                "<!--[if !IE]>-->"+
                "<object data=\"../swf/L1/L1_Exe_10/L1_Exe_10_f.swf\" type=\"application/x-shockwave-flash\" width=\"45\" height=\"40\" align=\"absmiddle\">"+
                  "<!--<![endif]-->"+
                  "<param name=\"quality\" value=\"high\" />"+
                  "<param name=\"wmode\" value=\"transparent\" />"+
                  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
                  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
                  "<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
                  "<div>"+
                    "<h4>El contenido de esta p�gina requiere una versi�n m�s reciente de Adobe Flash Player.</h4>"+
                    "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
                  "</div>"+
                  "<!--[if !IE]>-->"+
                "</object>"+
                "<!--<![endif]-->"+
              "</object>";
	
	$('#divSwfL1Ex10').html(swf);
	cambiarImgL1Ex10(idQst);
}

function cambiarImgL1Ex10(idQst)
{	
	if (idQst == 1)
		img = "<img src=\"../jpg/art-9_1_9_a.png\" width=\"274\" height=\"236\" />";
	else if (idQst == 2)
		img = "<img src=\"../jpg/art-9_1_9_b.png\" width=\"274\" height=\"236\" />";
	else if (idQst == 3)
		img = "<img src=\"../jpg/art-9_1_9_c.png\" width=\"274\" height=\"236\" />";
	else if (idQst == 4)
		img = "<img src=\"../jpg/art-9_1_9_d.png\" width=\"274\" height=\"236\" />";
	else if (idQst == 5)
		img = "<img src=\"../jpg/art-9_1_9_e.png\" width=\"274\" height=\"236\" />";
	else if (idQst == 6)
		img = "<img src=\"../jpg/art-9_1_9_f.png\" width=\"274\" height=\"236\" />";
	
	$('#divImgL1Ex10').html(img);
	cambiarIzqL1Ex10(idQst);
}

function cambiarIzqL1Ex10(idQst)
{	
	if (idQst == 1)
		izq = "<a href=\"#\" onclick=\"cambiarDivL1Ex10(6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image36','','../img/11.izq2.png',1)\"><img src=\"../img/11.izq.png\" name=\"Image36\" width=\"47\" height=\"51\" border=\"0\" id=\"Image36\" /></a>";
	else if (idQst == 2)
		izq = "<a href=\"#\" onclick=\"cambiarDivL1Ex10(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image36','','../img/11.izq2.png',1)\"><img src=\"../img/11.izq.png\" name=\"Image36\" width=\"47\" height=\"51\" border=\"0\" id=\"Image36\" /></a>";
	else if (idQst == 3)
		izq = "<a href=\"#\" onclick=\"cambiarDivL1Ex10(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image36','','../img/11.izq2.png',1)\"><img src=\"../img/11.izq.png\" name=\"Image36\" width=\"47\" height=\"51\" border=\"0\" id=\"Image36\" /></a>";
	else if (idQst == 4)
		izq = "<a href=\"#\" onclick=\"cambiarDivL1Ex10(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image36','','../img/11.izq2.png',1)\"><img src=\"../img/11.izq.png\" name=\"Image36\" width=\"47\" height=\"51\" border=\"0\" id=\"Image36\" /></a>";
	else if (idQst == 5)
		izq = "<a href=\"#\" onclick=\"cambiarDivL1Ex10(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image36','','../img/11.izq2.png',1)\"><img src=\"../img/11.izq.png\" name=\"Image36\" width=\"47\" height=\"51\" border=\"0\" id=\"Image36\" /></a>";
	else if (idQst == 6)
		izq = "<a href=\"#\" onclick=\"cambiarDivL1Ex10(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image36','','../img/11.izq2.png',1)\"><img src=\"../img/11.izq.png\" name=\"Image36\" width=\"47\" height=\"51\" border=\"0\" id=\"Image36\" /></a>";
	
	$('#divIzqL1Ex10').html(izq);
	cambiarDerL1Ex10(idQst);
}

function cambiarIzqL1Ex10(idQst)
{	
	if (idQst == 1)
		der = "<a href=\"#\" onclick=\"cambiarDivL1Ex10(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image37','','../img/11.der2.png',1)\"><img src=\"../img/11.der.png\" name=\"Image37\" width=\"47\" height=\"51\" border=\"0\" id=\"Image37\" /></a>";
	else if (idQst == 2)
		der = "<a href=\"#\" onclick=\"cambiarDivL1Ex10(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image37','','../img/11.der2.png',1)\"><img src=\"../img/11.der.png\" name=\"Image37\" width=\"47\" height=\"51\" border=\"0\" id=\"Image37\" /></a>";
	else if (idQst == 3)
		der = "<a href=\"#\" onclick=\"cambiarDivL1Ex10(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image37','','../img/11.der2.png',1)\"><img src=\"../img/11.der.png\" name=\"Image37\" width=\"47\" height=\"51\" border=\"0\" id=\"Image37\" /></a>";
	else if (idQst == 4)
		der = "<a href=\"#\" onclick=\"cambiarDivL1Ex10(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image37','','../img/11.der2.png',1)\"><img src=\"../img/11.der.png\" name=\"Image37\" width=\"47\" height=\"51\" border=\"0\" id=\"Image37\" /></a>";
	else if (idQst == 5)
		der = "<a href=\"#\" onclick=\"cambiarDivL1Ex10(6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image37','','../img/11.der2.png',1)\"><img src=\"../img/11.der.png\" name=\"Image37\" width=\"47\" height=\"51\" border=\"0\" id=\"Image37\" /></a>";
	else if (idQst == 6)
		der = "<a href=\"#\" onclick=\"cambiarDivL1Ex10(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image37','','../img/11.der2.png',1)\"><img src=\"../img/11.der.png\" name=\"Image37\" width=\"47\" height=\"51\" border=\"0\" id=\"Image37\" /></a>";
	
	$('#divDerL1Ex10').html(der);
	cambiarBtnVerL1Ex10(idQst);
}

function cambiarBtnVerL1Ex10(idQst)
{
	img = "";
	
	btnVer = "<table align=\"center\" background=\"../img/8.bg_refresh.png\" width=\"141\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
	  "<tr>"+
		"<td width=\"47\" height=\"47\" align=\"right\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E10("+idQst+",1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image24','','../img/8.btn_chulito2.png',1)\"><img src=\"../img/8.btn_chulito.png\" name=\"Image24\" width=\"25\" height=\"23\" border=\"0\" id=\"Image24\" /></a></td>"+
		"<td width=\"46\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E10("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image25','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image25\" width=\"25\" height=\"23\" border=\"0\" id=\"Image25\" /></a></td>"+
		"<td width=\"48\" align=\"left\"><img src=\"../img/8.btn_ojo_desab.png\" name=\"Image30\" width=\"25\" height=\"23\" border=\"0\" id=\"Image30\" /></td>"+
	  "</tr>"+
	"</table>";
	
	$('#divBtn').html(btnVer);
	actualizardivCalL1E10(img);
}
/* Exercise 10 */ 


/* Exercise 11 */
function verificarL1E11(idQst, idBtn)
{
	ansL1Ex11 = $("#selAnsL1Ex11").val();
	vez = $("#vez").val();
	
	img = "";
	
	if(idBtn!= 3 && ansL1Ex11 == "")
		alert("You must select the answer.");
	else{
		if(idBtn == 1)
		{
			if(idQst == 'A' && ansL1Ex11 == 'opcB')
				img = "good";
			else if(idQst == 'B' && ansL1Ex11 == 'opcB')
				img = "good";
			else if(idQst == 'C' && ansL1Ex11 == 'opcC')
				img = "good";
			else if(idQst == 'D' && ansL1Ex11 == 'opcA')
				img = "good";
			else if(idQst == 'E' && ansL1Ex11 == 'opcC')
				img = "good";
			else 
				img = "good_No";
		}
		else{
			//sel = "";
			if(idBtn == 3)
			{
				switch (idQst){
					case 'A':
						sel = "<select name=\"selAnsL1Ex11\" class=\"menuD\" id=\"selAnsL1Ex11\">"+
							"<option value=\"\"></option>"+
							"<option value=\"opcA\">by bus</option>"+
							"<option value=\"opcB\" selected>by car</option>"+
							"<option value=\"opcC\">by plane</option>"+
						  "</select>"+
						  "<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
					case 'B':
						sel = "<select name=\"selAnsL1Ex11\" class=\"menuD\" id=\"selAnsL1Ex11\">"+
							"<option value=\"\"></option>"+
							"<option value=\"opcA\">the car</option>"+
							"<option value=\"opcB\" selected>the plane</option>"+
							"<option value=\"opcC\">the bus</option>"+
						  "</select>"+
						  "<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
					case 'C':
						sel = "<select name=\"selAnsL1Ex11\" class=\"menuD\" id=\"selAnsL1Ex11\">"+
							"<option value=\"\"></option>"+
							"<option value=\"opcA\">by train</option>"+
							"<option value=\"opcB\">by bus</option>"+
							"<option value=\"opcC\" selected>by plane</option>"+
						  "</select>"+
						  "<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
					case 'D':
						sel = "<select name=\"selAnsL1Ex11\" class=\"menuD\" id=\"selAnsL1Ex11\">"+
							"<option value=\"\"></option>"+
							"<option value=\"opcA\" selected>by train</option>"+
							"<option value=\"opcB\">by car</option>"+
							"<option value=\"opcC\">by bus</option>"+
						  "</select>"+
						  "<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
					case 'E':
						sel = "<select name=\"selAnsL1Ex11\" class=\"menuD\" id=\"selAnsL1Ex11\">"+
							"<option value=\"\"></option>"+
							"<option value=\"opcA\">by plane</option>"+
							"<option value=\"opcB\">by car</option>"+
							"<option value=\"opcC\" selected>by boat</option>"+
						  "</select>"+
						  "<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
				}
				actualizarBtnL1E11(idQst, idBtn);
			}
			else if(idBtn == 2){
				if(vez >= 2)
					actualizarBtnL1E11(idQst, idBtn);
				vez = parseInt(vez) + 1;
				switch (idQst){
					case 'A':
						opcSelA = "by bus";
						opcSelB = "by car";
						opcSelC = "by plane";
					break;
					case 'B':
						opcSelA = "the car";
						opcSelB = "the plane";
						opcSelC = "the bus";
					break;
					case 'C':
						opcSelA = "by train";
						opcSelB = "by bus";
						opcSelC = "by plane";
					break;
					case 'D':
						opcSelA = "by train";
						opcSelB = "by car";
						opcSelC = "by bus";
					break;
					case 'E':
						opcSelA = "by plane";
						opcSelB = "by car";
						opcSelC = "by boat";
					break;
				}
				sel = "<select name=\"selAnsL1Ex11\" class=\"menuD\" id=\"selAnsL1Ex11\">"+
						"<option value=\"\"></option>"+
						"<option value=\"opcA\">"+opcSelA+"</option>"+
						"<option value=\"opcB\">"+opcSelB+"</option>"+
						"<option value=\"opcC\">"+opcSelC+"</option>"+
					  "</select>"+
					  "<input type=\"hidden\" id=\"vez\" value="+vez+" />";
			}
		
			$('#divSelAnsL1Ex11').html(sel); 
		}
		actualizardivCalL1E11(img);
	}
}

function actualizarBtnL1E11(idQst, idBtn)
{
	if(idBtn == 3)
		btn = "<table align=\"center\" background=\"../img/8.bg_refresh.png\" width=\"141\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"47\" height=\"47\" align=\"right\" valign=\"middle\"><img src=\"../img/8.btn_chulito_desab.png\" name=\"Image24\" width=\"25\" height=\"23\" border=\"0\" id=\"Image24\" /></td>"+
				"<td width=\"46\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E11('"+idQst+"',2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image25','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image25\" width=\"25\" height=\"23\" border=\"0\" id=\"Image25\" /></a></td>"+
				"<td width=\"48\" align=\"left\"><a href=\"#\" onclick=\"verificarL1E11('"+idQst+"',3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image30','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image30\" width=\"25\" height=\"23\" border=\"0\" id=\"Image30\" /></a></td>"+
			  "</tr>"+
			"</table>";
	else
		btn = "<table align=\"center\" background=\"../img/8.bg_refresh.png\" width=\"141\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"47\" height=\"47\" align=\"right\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E11('"+idQst+"',1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image24','','../img/8.btn_chulito2.png',1)\"><img src=\"../img/8.btn_chulito.png\" name=\"Image24\" width=\"25\" height=\"23\" border=\"0\" id=\"Image24\" /></a></td>"+
				"<td width=\"46\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E11('"+idQst+"',2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image25','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image25\" width=\"25\" height=\"23\" border=\"0\" id=\"Image25\" /></a></td>"+
				"<td width=\"48\" align=\"left\"><a href=\"#\" onclick=\"verificarL1E11('"+idQst+"',3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image30','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image30\" width=\"25\" height=\"23\" border=\"0\" id=\"Image30\" /></a></td>"+
			  "</tr>"+
			"</table>";
			
	$('#divBtn').html(btn);
}

function actualizardivCalL1E11(img)
{
	if(img != "")
		btn = "<img src=\"../img/"+img+".png\" width=\"30\" height=\"30\" />";
	else
		btn = "&nbsp;";
	
	$('#divCalL1E11').html(btn);
}

function cambiarDivL1Ex11(idQst)
{
	if(idQst == 'A')
	{
		next = 'B';
		prev = 'E';
		
		swf = "<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\" id=\"FlashID1\" title=\"Exe 11\">"+
			  "<param name=\"movie\" value=\"../swf/L1/L1_Exe_11/L1_Exe_11_a.swf\" />"+
			  "<param name=\"quality\" value=\"high\" />"+
			  "<param name=\"wmode\" value=\"transparent\" />"+
			  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
			  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versi�n m�s reciente de Flash Player. Elim�nela si no desea que los usuarios vean el mensaje. -->"+
			  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
			  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Oc�ltela a IE mediante IECC. -->"+
			  "<!--[if !IE]>-->"+
			  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_Exe_11/L1_Exe_11_a.swf\" width=\"45\" height=\"40\">"+
				"<!--<![endif]-->"+
				"<param name=\"quality\" value=\"high\" />"+
				"<param name=\"wmode\" value=\"transparent\" />"+
				"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
				"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
				"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
				"<div>"+
				  "<h4>El contenido de esta p�gina requiere una versi�n m�s reciente de Adobe Flash Player.</h4>"+
				  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
				"</div>"+
				"<!--[if !IE]>-->"+
			  "</object>"+
			  "<!--<![endif]-->"+
			"</object>";
			
		tblBtn = "<table  align=\"center\" cellpadding=\"0\" cellspacing=\"0\"width=\"211\" border=\"0\">"+
			  "<tr>"+
				"<td height=\"76\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex11('A')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image26','','../img/btn_A_2.png',1)\"><img src=\"../img/btn_A_2.png\" name=\"Image26\" width=\"40\" height=\"53\" border=\"0\" id=\"Image26\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex11('B')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image27','','../img/btn_B_2.png',1)\"><img src=\"../img/btn_B_1.png\" name=\"Image27\" width=\"40\" height=\"53\" border=\"0\" id=\"Image27\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex11('C')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image28','','../img/btn_C_2.png',1)\"><img src=\"../img/btn_C_1.png\" name=\"Image28\" width=\"40\" height=\"53\" border=\"0\" id=\"Image28\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"10\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex11('D')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image29','','../img/btn_D_2.png',1)\"><img src=\"../img/btn_D_1.png\" name=\"Image29\" width=\"40\" height=\"53\" border=\"0\" id=\"Image29\" /></a></td>"+
				"<td width=\"10\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"19\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex11('E')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image31','','../img/btn_E_2.png',1)\"><img src=\"../img/btn_E_1.png\" name=\"Image31\" width=\"40\" height=\"53\" border=\"0\" id=\"Image31\" /></a></td>"+
			  "</tr>"+
			"</table>";
			
		tblQst = "<table width=\"398\" border=\"0\">"+
			  "<tr>"+
				"<td width=\"272\" height=\"41\" class=\"texto_3_mediano\">They are traveling to Santa Marta</td>"+
				"<td width=\"116\" align=\"center\" background=\"../img/cuadro_17.png\" class=\"texto_3_mediano\"><div id=\"divSelAnsL1Ex11\">"+
				  "<select name=\"selAnsL1Ex11\" class=\"menuD\" id=\"selAnsL1Ex11\">"+
					"<option value=\"\"></option>"+
					"<option value=\"opcA\">by bus</option>"+
					"<option value=\"opcB\">by car</option>"+
					"<option value=\"opcC\">by plane</option>"+
				  "</select>"+
				  "<input type=\"hidden\" id=\"vez\" value=0 />"+
				"</div></td>"+
			  "</tr>"+
			"</table>";
	}
	if(idQst == 'B')
	{
		next = 'C';
		prev = 'A';
		
		swf = "<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\" id=\"FlashID2\" title=\"Exe 11\">"+
			  "<param name=\"movie\" value=\"../swf/L1/L1_Exe_11/L1_Exe_11_b.swf\" />"+
			  "<param name=\"quality\" value=\"high\" />"+
			  "<param name=\"wmode\" value=\"transparent\" />"+
			  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
			  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versi�n m�s reciente de Flash Player. Elim�nela si no desea que los usuarios vean el mensaje. -->"+
			  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
			  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Oc�ltela a IE mediante IECC. -->"+
			  "<!--[if !IE]>-->"+
			  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_Exe_11/L1_Exe_11_b.swf\" width=\"45\" height=\"40\">"+
				"<!--<![endif]-->"+
				"<param name=\"quality\" value=\"high\" />"+
				"<param name=\"wmode\" value=\"transparent\" />"+
				"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
				"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
				"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
				"<div>"+
				  "<h4>El contenido de esta p�gina requiere una versi�n m�s reciente de Adobe Flash Player.</h4>"+
				  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
				"</div>"+
				"<!--[if !IE]>-->"+
			  "</object>"+
			  "<!--<![endif]-->"+
			"</object>";
			
		tblBtn = "<table  align=\"center\" cellpadding=\"0\" cellspacing=\"0\"width=\"211\" border=\"0\">"+
			  "<tr>"+
				"<td height=\"76\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex11('A')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image26','','../img/btn_A_2.png',1)\"><img src=\"../img/btn_A_1.png\" name=\"Image26\" width=\"40\" height=\"53\" border=\"0\" id=\"Image26\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex11('B')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image27','','../img/btn_B_2.png',1)\"><img src=\"../img/btn_B_2.png\" name=\"Image27\" width=\"40\" height=\"53\" border=\"0\" id=\"Image27\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex11('C')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image28','','../img/btn_C_2.png',1)\"><img src=\"../img/btn_C_1.png\" name=\"Image28\" width=\"40\" height=\"53\" border=\"0\" id=\"Image28\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"10\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex11('D')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image29','','../img/btn_D_2.png',1)\"><img src=\"../img/btn_D_1.png\" name=\"Image29\" width=\"40\" height=\"53\" border=\"0\" id=\"Image29\" /></a></td>"+
				"<td width=\"10\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"19\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex11('E')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image31','','../img/btn_E_2.png',1)\"><img src=\"../img/btn_E_1.png\" name=\"Image31\" width=\"40\" height=\"53\" border=\"0\" id=\"Image31\" /></a></td>"+
			  "</tr>"+
			"</table>";
			
		tblQst = "<table width=\"217\" border=\"0\">"+
			  "<tr>"+
				"<td width=\"90\" height=\"40\" class=\"texto_3_mediano\">She prefers</td>"+
				"<td width=\"117\" align=\"center\" valign=\"middle\" background=\"../img/cuadro_17.png\" class=\"texto_3_mediano\"><div id=\"divSelAnsL1Ex11\">"+
				  "<select name=\"selAnsL1Ex11\" class=\"menuD\" id=\"selAnsL1Ex11\">"+
					"<option value=\"\"></option>"+
					"<option value=\"opcA\">the car</option>"+
					"<option value=\"opcB\">the plane</option>"+
					"<option value=\"opcC\">the bus</option>"+
				  "</select>"+
				"<input type=\"hidden\" id=\"vez\" value=0 />"+
				"</div></td>"+
			  "</tr>"+
			"</table>";
	}
	if(idQst == 'C')
	{
		next = 'D';
		prev = 'B';
		
		swf = "<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\" id=\"FlashID3\" title=\"Exe 11\">"+
			  "<param name=\"movie\" value=\"../swf/L1/L1_Exe_11/L1_Exe_11_c.swf\" />"+
			  "<param name=\"quality\" value=\"high\" />"+
			  "<param name=\"wmode\" value=\"transparent\" />"+
			  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
			  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versi�n m�s reciente de Flash Player. Elim�nela si no desea que los usuarios vean el mensaje. -->"+
			  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
			  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Oc�ltela a IE mediante IECC. -->"+
			  "<!--[if !IE]>-->"+
			  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_Exe_11/L1_Exe_11_c.swf\" width=\"45\" height=\"40\">"+
				"<!--<![endif]-->"+
				"<param name=\"quality\" value=\"high\" />"+
				"<param name=\"wmode\" value=\"transparent\" />"+
				"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
				"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
				"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
				"<div>"+
				  "<h4>El contenido de esta p�gina requiere una versi�n m�s reciente de Adobe Flash Player.</h4>"+
				  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
				"</div>"+
				"<!--[if !IE]>-->"+
			  "</object>"+
			  "<!--<![endif]-->"+
			"</object>";
			
		tblBtn = "<table  align=\"center\" cellpadding=\"0\" cellspacing=\"0\"width=\"211\" border=\"0\">"+
			  "<tr>"+
				"<td height=\"76\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex11('A')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image26','','../img/btn_A_2.png',1)\"><img src=\"../img/btn_A_1.png\" name=\"Image26\" width=\"40\" height=\"53\" border=\"0\" id=\"Image26\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex11('B')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image27','','../img/btn_B_2.png',1)\"><img src=\"../img/btn_B_1.png\" name=\"Image27\" width=\"40\" height=\"53\" border=\"0\" id=\"Image27\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex11('C')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image28','','../img/btn_C_2.png',1)\"><img src=\"../img/btn_C_2.png\" name=\"Image28\" width=\"40\" height=\"53\" border=\"0\" id=\"Image28\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"10\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex11('D')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image29','','../img/btn_D_2.png',1)\"><img src=\"../img/btn_D_1.png\" name=\"Image29\" width=\"40\" height=\"53\" border=\"0\" id=\"Image29\" /></a></td>"+
				"<td width=\"10\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"19\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex11('E')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image31','','../img/btn_E_2.png',1)\"><img src=\"../img/btn_E_1.png\" name=\"Image31\" width=\"40\" height=\"53\" border=\"0\" id=\"Image31\" /></a></td>"+
			  "</tr>"+
			"</table>";
			
		tblQst = "<table width=\"294\" border=\"0\">"+
          "<tr>"+
            "<td width=\"168\" height=\"39\" class=\"texto_3_mediano\">The man is traveling</td>"+
            "<td width=\"116\" align=\"center\" valign=\"middle\" background=\"../img/cuadro_17.png\" class=\"texto_3_mediano\"><div id=\"divSelAnsL1Ex11\">"+
              "<select name=\"selAnsL1Ex11\" class=\"menuD\" id=\"selAnsL1Ex11\">"+
                "<option value=\"\"></option>"+
                "<option value=\"opcA\">by train</option>"+
                "<option value=\"opcB\">by bus</option>"+
                "<option value=\"opcC\">by plane </option>"+
              "</select>"+
            "<input type=\"hidden\" id=\"vez\" value=0 />"+
			"</div></td>"+
          "</tr>"+
        "</table>";
	}
	if(idQst == 'D')
	{
		next = 'E';
		prev = 'C';
		
		swf = "<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\" id=\"FlashID4\" title=\"Exe 11\">"+
			  "<param name=\"movie\" value=\"../swf/L1/L1_Exe_11/L1_Exe_11_d.swf\" />"+
			  "<param name=\"quality\" value=\"high\" />"+
			  "<param name=\"wmode\" value=\"transparent\" />"+
			  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
			  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versi�n m�s reciente de Flash Player. Elim�nela si no desea que los usuarios vean el mensaje. -->"+
			  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
			  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Oc�ltela a IE mediante IECC. -->"+
			  "<!--[if !IE]>-->"+
			  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_Exe_11/L1_Exe_11_d.swf\" width=\"45\" height=\"40\">"+
				"<!--<![endif]-->"+
				"<param name=\"quality\" value=\"high\" />"+
				"<param name=\"wmode\" value=\"transparent\" />"+
				"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
				"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
				"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
				"<div>"+
				  "<h4>El contenido de esta p�gina requiere una versi�n m�s reciente de Adobe Flash Player.</h4>"+
				  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
				"</div>"+
				"<!--[if !IE]>-->"+
			  "</object>"+
			  "<!--<![endif]-->"+
			"</object>";
			
		tblBtn = "<table  align=\"center\" cellpadding=\"0\" cellspacing=\"0\"width=\"211\" border=\"0\">"+
			  "<tr>"+
				"<td height=\"76\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex11('A')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image26','','../img/btn_A_2.png',1)\"><img src=\"../img/btn_A_1.png\" name=\"Image26\" width=\"40\" height=\"53\" border=\"0\" id=\"Image26\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex11('B')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image27','','../img/btn_B_2.png',1)\"><img src=\"../img/btn_B_1.png\" name=\"Image27\" width=\"40\" height=\"53\" border=\"0\" id=\"Image27\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex11('C')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image28','','../img/btn_C_2.png',1)\"><img src=\"../img/btn_C_1.png\" name=\"Image28\" width=\"40\" height=\"53\" border=\"0\" id=\"Image28\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"10\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex11('D')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image29','','../img/btn_D_2.png',1)\"><img src=\"../img/btn_D_2.png\" name=\"Image29\" width=\"40\" height=\"53\" border=\"0\" id=\"Image29\" /></a></td>"+
				"<td width=\"10\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"19\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex11('E')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image31','','../img/btn_E_2.png',1)\"><img src=\"../img/btn_E_1.png\" name=\"Image31\" width=\"40\" height=\"53\" border=\"0\" id=\"Image31\" /></a></td>"+
			  "</tr>"+
			"</table>";
			
		tblQst = "<table width=\"314\" border=\"0\">"+
			  "<tr>"+
				"<td colspan=\"3\" class=\"texto_3_mediano\">How is the man traveling to Zipaquira?</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td width=\"93\" height=\"40\" align=\"left\" valign=\"middle\">&nbsp;</td>"+
				"<td background=\"../img/cuadro_17.png\" width=\"116\" align=\"center\" valign=\"middle\"><div id=\"divSelAnsL1Ex11\">"+
				  "<select name=\"selAnsL1Ex11\" class=\"menuD\" id=\"selAnsL1Ex11\">"+
					"<option value=\"\"></option>"+
					"<option value=\"opcA\">by train</option>"+
					"<option value=\"opcB\">by car</option>"+
					"<option value=\"opcC\">by bus</option>"+
				  "</select>"+
				  "<input type=\"hidden\" id=\"vez\" value=0 />"+
				"</div></td>"+
				"<td width=\"93\" align=\"left\" valign=\"middle\">&nbsp;</td>"+
			  "</tr>"+
			"</table>";
	}
	if(idQst == 'E')
	{
		next = 'A';
		prev = 'D';
		
		swf = "<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\" id=\"FlashID5\" title=\"Exe 11\">"+
			  "<param name=\"movie\" value=\"../swf/L1/L1_Exe_11/L1_Exe_11_e.swf\" />"+
			  "<param name=\"quality\" value=\"high\" />"+
			  "<param name=\"wmode\" value=\"transparent\" />"+
			  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
			  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versi�n m�s reciente de Flash Player. Elim�nela si no desea que los usuarios vean el mensaje. -->"+
			  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
			  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Oc�ltela a IE mediante IECC. -->"+
			  "<!--[if !IE]>-->"+
			  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L1/L1_Exe_11/L1_Exe_11_e.swf\" width=\"45\" height=\"40\">"+
				"<!--<![endif]-->"+
				"<param name=\"quality\" value=\"high\" />"+
				"<param name=\"wmode\" value=\"transparent\" />"+
				"<param name=\"swfversion\" value=\"6.0.65.0\" />"+
				"<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
				"<!-- El navegador muestra el siguiente contenido alternativo para usuarios con Flash Player 6.0 o versiones anteriores. -->"+
				"<div>"+
				  "<h4>El contenido de esta p�gina requiere una versi�n m�s reciente de Adobe Flash Player.</h4>"+
				  "<p><a href=\"http://www.adobe.com/go/getflashplayer\"><img src=\"http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif\" alt=\"Obtener Adobe Flash Player\" width=\"112\" height=\"33\" /></a></p>"+
				"</div>"+
				"<!--[if !IE]>-->"+
			  "</object>"+
			  "<!--<![endif]-->"+
			"</object>";
			
		tblBtn = "<table  align=\"center\" cellpadding=\"0\" cellspacing=\"0\"width=\"211\" border=\"0\">"+
			  "<tr>"+
				"<td height=\"76\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex11('A')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image26','','../img/btn_A_2.png',1)\"><img src=\"../img/btn_A_1.png\" name=\"Image26\" width=\"40\" height=\"53\" border=\"0\" id=\"Image26\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex11('B')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image27','','../img/btn_B_2.png',1)\"><img src=\"../img/btn_B_1.png\" name=\"Image27\" width=\"40\" height=\"53\" border=\"0\" id=\"Image27\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex11('C')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image28','','../img/btn_C_2.png',1)\"><img src=\"../img/btn_C_1.png\" name=\"Image28\" width=\"40\" height=\"53\" border=\"0\" id=\"Image28\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"10\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex11('D')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image29','','../img/btn_D_2.png',1)\"><img src=\"../img/btn_D_1.png\" name=\"Image29\" width=\"40\" height=\"53\" border=\"0\" id=\"Image29\" /></a></td>"+
				"<td width=\"10\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"19\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex11('E')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image31','','../img/btn_E_2.png',1)\"><img src=\"../img/btn_E_2.png\" name=\"Image31\" width=\"40\" height=\"53\" border=\"0\" id=\"Image31\" /></a></td>"+
			  "</tr>"+
			"</table>";
			
		tblQst = "<table width=\"286\" border=\"0\">"+
			  "<tr>"+
				"<td colspan=\"3\" class=\"texto_3_mediano\">How is the woman going to Brazil?</td>"+
			  "</tr>"+
			  "<tr>"+
				"<td width=\"78\" height=\"40\" align=\"left\" valign=\"middle\">&nbsp;</td>"+
				"<td background=\"../img/cuadro_17.png\" width=\"116\" align=\"center\" valign=\"middle\"><div id=\"divSelAnsL1Ex11\">"+
				  "<select name=\"selAnsL1Ex11\" class=\"menuD\" id=\"selAnsL1Ex11\">"+
					"<option value=\"\"></option>"+
					"<option value=\"opcA\">by plane</option>"+
					"<option value=\"opcB\">by car</option>"+
					"<option value=\"opcC\">by boat</option>"+
				  "</select>"+
				  "<input type=\"hidden\" id=\"vez\" value=0 />"+
				"</div></td>"+
				"<td width=\"78\" align=\"left\" valign=\"middle\">&nbsp;</td>"+
			  "</tr>"+
			"</table>";
	}
	
	html = "<table width=\"766\" border=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td height=\"128\" align=\"left\" valign=\"middle\"><img src=\"../img/titulos/L1/L1_exer_11.png\" width=\"585\" height=\"98\" /></td>"+
			"</tr>"+
		"</table>"+
		"<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" width=\"346\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"134\" height=\"76\" align=\"center\" valign=\"top\">"+swf+"</td>"+
			"<td width=\"212\" align=\"center\" valign=\"top\">"+tblBtn+"</td>"+
		  "</tr>"+
		"</table>"+
		"<table align=\"center\" width=\"737\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"99\" height=\"147\" align=\"left\" valign=\"middle\"><a href=\"#\" onclick=\"cambiarDivL1Ex11('"+prev+"')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image36','','../img/11.izq2.png',1)\"><img src=\"../img/11.izq.png\" name=\"Image36\" width=\"47\" height=\"51\" border=\"0\" id=\"Image36\" /></a></td>"+
			"<td width=\"538\" align=\"center\" valign=\"middle\" background=\"../img/cuadro_1.png\">"+tblQst+"</td>"+
			"<td width=\"100\" align=\"right\" valign=\"middle\"><a href=\"#\" onclick=\"cambiarDivL1Ex11('"+next+"')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image37','','../img/11.der2.png',1)\"><img src=\"../img/11.der.png\" name=\"Image37\" width=\"47\" height=\"51\" border=\"0\" id=\"Image37\" /></a></td>"+
		  "</tr>"+
		"</table>"+
	   "<table align=\"center\" width=\"29\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr align=\"center\" valign=\"bottom\">"+
			"<td width=\"29\" height=\"48\"><div id=\"divCalL1E11\">&nbsp;</div></td>"+
		  "</tr>"+
		"</table> "+
		"<div id=\"divBtn\"><table align=\"center\" background=\"../img/8.bg_refresh.png\" width=\"141\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"47\" height=\"47\" align=\"right\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E11('"+idQst+"',1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image24','','../img/8.btn_chulito2.png',1)\"><img src=\"../img/8.btn_chulito.png\" name=\"Image24\" width=\"25\" height=\"23\" border=\"0\" id=\"Image24\" /></a></td>"+
			"<td width=\"46\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E11('"+idQst+"',2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image25','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image25\" width=\"25\" height=\"23\" border=\"0\" id=\"Image25\" /></a></td>"+
			"<td width=\"48\" align=\"left\"><img src=\"../img/8.btn_ojo_desab.png\" name=\"Image30\" width=\"25\" height=\"23\" border=\"0\" id=\"Image30\" /></td>"+
		  "</tr>"+
		"</table></div>";
		
	$('#contenido').html(html);
}
/* Exercise 11 */


/* Exercise 12 */
function cambiarEstBtnL1Ex12(idBtn)
{
	if(idBtn == 'A')
	{
		valIpt = $("#iptAnsA").val();
		divBtn = "divBtnA";
		if(valIpt == 1)
			tdBtn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('A')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image33','','../img/21.btn_a2.png',1)\">"+
						"<img src=\"../img/21.btn_a1.png\" name=\"Image33\" width=\"35\" height=\"35\" border=\"0\" id=\"Image33\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAnsA\" value=0 />";
		else if(valIpt == 0){
			tdBtn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('A')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image33','','../img/21.btn_a2.png',1)\">"+
						"<img src=\"../img/21.btn_a2.png\" name=\"Image33\" width=\"35\" height=\"35\" border=\"0\" id=\"Image33\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAnsA\" value=1 />";
			
			valIpt1 = $("#iptAnsB").val();
			valIpt2 = $("#iptAnsC").val();
			if(valIpt1 == 1)
				desactivarBtnL1Ex12('divBtnB');
			else if(valIpt2 == 1)
				desactivarBtnL1Ex12('divBtnC');
		}
	}
	else if(idBtn == 'B')
	{
		valIpt = $("#iptAnsB").val();
		divBtn = "divBtnB";
		if(valIpt == 1)
			tdBtn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('B')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image34','','../img/22.btn_b2.png',1)\">"+
						"<img src=\"../img/22.btn_b1.png\" name=\"Image34\" width=\"35\" height=\"35\" border=\"0\" id=\"Image34\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAnsB\" value=0 />";
		else if(valIpt == 0){
			tdBtn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('B')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image34','','../img/22.btn_b2.png',1)\">"+
						"<img src=\"../img/22.btn_b2.png\" name=\"Image34\" width=\"35\" height=\"35\" border=\"0\" id=\"Image34\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAnsB\" value=1 />";
					
			valIpt1 = $("#iptAnsA").val();
			valIpt2 = $("#iptAnsC").val();
			if(valIpt1 == 1)
				desactivarBtnL1Ex12('divBtnA');
			else if(valIpt2 == 1)
				desactivarBtnL1Ex12('divBtnC');
		}
	}
	else if(idBtn == 'C')
	{
		valIpt = $("#iptAnsC").val();
		divBtn = "divBtnC";
		if(valIpt == 1)
			tdBtn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('C')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image35','','../img/23.btn_c2.png',1)\">"+
						"<img src=\"../img/23.btn_c1.png\" name=\"Image35\" width=\"35\" height=\"35\" border=\"0\" id=\"Image35\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAnsC\" value=0 />";
		else if(valIpt == 0){
			tdBtn = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('C')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image35','','../img/23.btn_c2.png',1)\">"+
						"<img src=\"../img/23.btn_c2.png\" name=\"Image35\" width=\"35\" height=\"35\" border=\"0\" id=\"Image35\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAnsC\" value=1 />";
			
			valIpt1 = $("#iptAnsA").val();
			valIpt2 = $("#iptAnsB").val();
			if(valIpt1 == 1)
				desactivarBtnL1Ex12('divBtnA');
			else if(valIpt2 == 1)
				desactivarBtnL1Ex12('divBtnB');
		}
	}
	
	$('#'+divBtn).html(tdBtn);
	actualizardivCalL1E12('');
}

function desactivarBtnL1Ex12(idDivBtn)
{
	if(idDivBtn == 'divBtnA')
		tdBtn1 = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('A')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image33','','../img/21.btn_a2.png',1)\">"+
					"<img src=\"../img/21.btn_a1.png\" name=\"Image33\" width=\"35\" height=\"35\" border=\"0\" id=\"Image33\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAnsA\" value=0 />";
	else if(idDivBtn == 'divBtnB')
		tdBtn1 = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('B')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image34','','../img/22.btn_b2.png',1)\">"+
					"<img src=\"../img/22.btn_b1.png\" name=\"Image34\" width=\"35\" height=\"35\" border=\"0\" id=\"Image34\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAnsB\" value=0 />";
	else if(idDivBtn == 'divBtnC')
		tdBtn1 = "<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('C')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image35','','../img/23.btn_c2.png',1)\">"+
					"<img src=\"../img/23.btn_c1.png\" name=\"Image35\" width=\"35\" height=\"35\" border=\"0\" id=\"Image35\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAnsC\" value=0 />";
	
	$('#'+idDivBtn).html(tdBtn1);
}

function verificarL1E12(idQst, idBtn)
{
	ansL1E12A = $("#iptAnsA").val();
	ansL1E12B = $("#iptAnsB").val();
	ansL1E12C = $("#iptAnsC").val();
	
	txtCorL1E12 = $("#iptCorL2Ex12").val();
	
	vez = $("#vez").val();
	
	img = "";
	
	if(idBtn!= 3 && (txtCorL1E12 == "" || (ansL1E12A == 0 && ansL1E12B == 0 && ansL1E12C == 0)))
		alert("You must select the answer and write the correction.");
	else{
		if(idBtn == 1)
		{
			if(idQst == 'ex'){
				if(txtCorL1E12 == 'Which' && ansL1E12A == 1 && ansL1E12B == 0 && ansL1E12C == 0)
					img = "good";
				else 
					img = "good_No";
			}
			else if(idQst == 1){
				if(txtCorL1E12 == 'get' && ansL1E12A == 0 && ansL1E12B == 1 && ansL1E12C == 0)
					img = "good";
				else 
					img = "good_No";
			}
			else if(idQst == 2){
				if((txtCorL1E12 == 'travel'|| txtCorL1E12 == 'go') && ansL1E12A == 0 && ansL1E12B == 1 && ansL1E12C == 0)
					img = "good";
				else 
					img = "good_No";
			}
			else if(idQst == 3){
				if((txtCorL1E12 == 'travel to' || txtCorL1E12 == 'go to' || txtCorL1E12 == 'get to') && ansL1E12A == 0 && ansL1E12B == 0 && ansL1E12C == 1)
					img = "good";
				else 
					img = "good_No";
			}
			else if(idQst == 4){
				if(txtCorL1E12 == 'should' && ansL1E12A == 1 && ansL1E12B == 0 && ansL1E12C == 0)
					img = "good";
				else 
					img = "good_No";
			}
			else if(idQst == 5){
				if(txtCorL1E12 == 'which' && ansL1E12A == 1 && ansL1E12B == 0 && ansL1E12C == 0)
					img = "good";
				else 
					img = "good_No";
			}
			else if(idQst == 6){
				if(txtCorL1E12 == 'can' && ansL1E12A == 0 && ansL1E12B == 1 && ansL1E12C == 0)
					img = "good";
				else 
					img = "good_No";
			}
		}
		else{
			if(idBtn == 3)
			{
				switch (idQst){
					case 1:
						tblEx12 = "<table width=\"230\" border=\"0\">"+
							"<tr>"+
							  "<td width=\"45\" height=\"44\" class=\"raya_bg_cienPorcien2_prueva\">How</td>"+
							  "<td width=\"47\" class=\"texto_2_grande\"> can I</td>"+
							  "<td width=\"57\" class=\"raya_bg_cienPorcien2_prueva\"> to get</td>"+
							  "<td width=\"20\" class=\"raya_bg_cienPorcien2_prueva\">to</td>"+
							  "<td width=\"39\" class=\"texto_2_grande\"> Cali?</td>"+
							"</tr>"+
						  "</table>"+
						  "<table width=\"230\" border=\"0\">"+
							"<tr>"+
							  "<td width=\"41\" height=\"37\" align=\"center\"><div id=\"divBtnA\">"+
								"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('A')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image33','','../img/21.btn_a2.png',1)\">"+
									"<img src=\"../img/21.btn_a1.png\" name=\"Image33\" width=\"35\" height=\"35\" border=\"0\" id=\"Image33\" />"+
								"</a>"+
								"<input type=\"hidden\" id=\"iptAnsA\" value=0 />"+
							  "</div></td>"+
							  "<td width=\"62\">&nbsp;</td>"+
							  "<td width=\"35\"><div id=\"divBtnB\">"+
								"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('B')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image34','','../img/22.btn_b2.png',1)\">"+
									"<img src=\"../img/22.btn_b2.png\" name=\"Image34\" width=\"35\" height=\"35\" border=\"0\" id=\"Image34\" />"+
								"</a>"+
								"<input type=\"hidden\" id=\"iptAnsB\" value=1 />"+
							  "</div></td>"+
							  "<td width=\"35\"><div id=\"divBtnC\">"+
								"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('C')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image35','','../img/23.btn_c2.png',1)\">"+
									"<img src=\"../img/23.btn_c1.png\" name=\"Image35\" width=\"35\" height=\"35\" border=\"0\" id=\"Image35\" />"+
								"</a>"+
								"<input type=\"hidden\" id=\"iptAnsC\" value=0 />"+
							  "</div></td>"+
							  "<td width=\"35\">&nbsp;</td>"+
							"</tr>"+
						"</table>";
						
						txtCorr = "get";
					break;
					case 2:
						tblEx12 = "<table width=\"234\" border=\"0\">"+
							"<tr>"+
							  "<td width=\"41\" height=\"44\" class=\"texto_2_grande\">You</td>"+
							  "<td width=\"58\" class=\"raya_bg_cienPorcien2_prueva\">should</td>"+
							  "<td width=\"55\" class=\"raya_bg_cienPorcien2_prueva\"> to get</td>"+
							  "<td width=\"21\" class=\"raya_bg_cienPorcien2_prueva\">by</td>"+
							  "<td width=\"37\" class=\"texto_2_grande\"> bus.</td>"+
							"</tr>"+
						  "</table>"+
						  "<table width=\"230\" border=\"0\">"+
							"<tr>"+
							  "<td width=\"37\" height=\"37\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
							  "<td width=\"66\" align=\"center\" valign=\"middle\"><div id=\"divBtnA\">"+
								"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('A')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image33','','../img/21.btn_a2.png',1)\">"+
									"<img src=\"../img/21.btn_a1.png\" name=\"Image33\" width=\"35\" height=\"35\" border=\"0\" id=\"Image33\" />"+
								"</a>"+
								"<input type=\"hidden\" id=\"iptAnsA\" value=0 />"+
							  "</div></td>"+
							  "<td width=\"44\" align=\"center\" valign=\"middle\"><div id=\"divBtnB\">"+
								"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('B')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image34','','../img/22.btn_b2.png',1)\">"+
									"<img src=\"../img/22.btn_b2.png\" name=\"Image34\" width=\"35\" height=\"35\" border=\"0\" id=\"Image34\" />"+
								"</a>"+
								"<input type=\"hidden\" id=\"iptAnsB\" value=1 />"+
							  "</div></td>"+
							  "<td width=\"35\" align=\"center\" valign=\"middle\"><div id=\"divBtnC\">"+
								"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('C')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image35','','../img/23.btn_c2.png',1)\">"+
									"<img src=\"../img/23.btn_c1.png\" name=\"Image35\" width=\"35\" height=\"35\" border=\"0\" id=\"Image35\" />"+
								"</a>"+
								"<input type=\"hidden\" id=\"iptAnsC\" value=0 />"+
							  "</div></td>"+
							  "<td width=\"26\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
							"</tr>"+
						"</table>";
						
						txtCorr = "travel / go";
					break;
					case 3:
						tblEx12 = "<table width=\"258\" border=\"0\">"+
							"<tr>"+
							  "<td width=\"40\" height=\"44\" class=\"raya_bg_cienPorcien2_prueva\">How</td>"+
							  "<td width=\"32\" class=\"raya_bg_cienPorcien2_prueva\">can</td>"+
							  "<td width=\"10\" class=\"texto_2_grande\">I</td>"+
							  "<td width=\"51\" class=\"raya_bg_cienPorcien2_prueva\">go by</td>"+
							  "<td width=\"103\" class=\"texto_2_grande\">Los Llanos?</td>"+
							"</tr>"+
						  "</table>"+
						  "<table width=\"255\" border=\"0\">"+
							"<tr>"+
							  "<td width=\"37\" height=\"37\" align=\"center\" valign=\"middle\"><div id=\"divBtnA\">"+
								"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('A')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image33','','../img/21.btn_a2.png',1)\">"+
									"<img src=\"../img/21.btn_a1.png\" name=\"Image33\" width=\"35\" height=\"35\" border=\"0\" id=\"Image33\" />"+
								"</a>"+
								"<input type=\"hidden\" id=\"iptAnsA\" value=0 />"+
							  "</div></td>"+
							  "<td width=\"35\" align=\"center\" valign=\"middle\"><div id=\"divBtnB\">"+
								"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('B')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image34','','../img/22.btn_b2.png',1)\">"+
									"<img src=\"../img/22.btn_b1.png\" name=\"Image34\" width=\"35\" height=\"35\" border=\"0\" id=\"Image34\" />"+
								"</a>"+
								"<input type=\"hidden\" id=\"iptAnsB\" value=0 />"+
							  "</div></td>"+
							  "<td width=\"10\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
							  "<td width=\"48\" align=\"center\" valign=\"middle\"><div id=\"divBtnC\">"+
								"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('C')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image35','','../img/23.btn_c2.png',1)\">"+
									"<img src=\"../img/23.btn_c2.png\" name=\"Image35\" width=\"35\" height=\"35\" border=\"0\" id=\"Image35\" />"+
								"</a>"+
								"<input type=\"hidden\" id=\"iptAnsC\" value=1 />"+
							  "</div></td>"+
							  "<td width=\"103\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
							"</tr>"+
						"</table>";
						
						txtCorr = "travel to / go to / get to";
					break;
					case 4:
						tblEx12 = "<table width=\"557\" border=\"0\">"+
							"<tr>"+
							  "<td width=\"34\" height=\"44\" class=\"texto_2_grande\">You</td>"+
							  "<td width=\"31\" class=\"raya_bg_cienPorcien2_prueva\">can</td>"+
							  "<td width=\"148\" class=\"texto_2_grande\">go to Los Llanos</td>"+
							  "<td width=\"24\" class=\"raya_bg_cienPorcien2_prueva\"> by</td>"+
							  "<td width=\"83\" class=\"texto_2_grande\">car if you</td>"+
							  "<td width=\"70\" class=\"raya_bg_cienPorcien2_prueva\">want to</td>"+
							  "<td width=\"137\" class=\"texto_2_grande\">enjoy the view.</td>"+
							"</tr>"+
						  "</table>"+
						  "<table width=\"564\" border=\"0\">"+
							"<tr>"+
							  "<td width=\"35\" height=\"37\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
							  "<td width=\"35\" align=\"center\" valign=\"middle\"><div id=\"divBtnA\">"+
								"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('A')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image33','','../img/21.btn_a2.png',1)\">"+
									"<img src=\"../img/21.btn_a2.png\" name=\"Image33\" width=\"35\" height=\"35\" border=\"0\" id=\"Image33\" />"+
								"</a>"+
								"<input type=\"hidden\" id=\"iptAnsA\" value=1 />"+
							  "</div></td>"+
							  "<td width=\"141\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
							  "<td width=\"35\" align=\"center\" valign=\"middle\"><div id=\"divBtnB\">"+
								"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('B')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image34','','../img/22.btn_b2.png',1)\">"+
									"<img src=\"../img/22.btn_b1.png\" name=\"Image34\" width=\"35\" height=\"35\" border=\"0\" id=\"Image34\" />"+
								"</a>"+
								"<input type=\"hidden\" id=\"iptAnsB\" value=0 />"+
							  "</div></td>"+
							  "<td width=\"90\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
							  "<td width=\"202\" align=\"left\" valign=\"middle\"><div id=\"divBtnC\">"+
								"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('C')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image35','','../img/23.btn_c2.png',1)\">"+
									"<img src=\"../img/23.btn_c1.png\" name=\"Image35\" width=\"35\" height=\"35\" border=\"0\" id=\"Image35\" />"+
								"</a>"+
								"<input type=\"hidden\" id=\"iptAnsC\" value=0 />"+
							  "</div></td>"+
							"</tr>"+
						"</table>";
						
						txtCorr = "should";
					break;
					case 5:
						tblEx12 = "<table width=\"362\" border=\"0\">"+
							"<tr>"+
							  "<td width=\"47\" height=\"44\" class=\"raya_bg_cienPorcien2_prueva\">What</td>"+
							  "<td width=\"139\" class=\"texto_2_grande\">is the best way</td>"+
							  "<td width=\"18\" class=\"raya_bg_cienPorcien2_prueva\">to</td>"+
							  "<td width=\"56\" class=\"raya_bg_cienPorcien2_prueva\">get to</td>"+
							  "<td width=\"80\" class=\"texto_2_grande\">Medellin?</td>"+
							"</tr>"+
						  "</table>"+
						  "<table width=\"359\" border=\"0\">"+
							"<tr>"+
							  "<td width=\"41\" height=\"37\" align=\"center\" valign=\"middle\"><div id=\"divBtnA\">"+
								"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('A')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image33','','../img/21.btn_a2.png',1)\">"+
									"<img src=\"../img/21.btn_a2.png\" name=\"Image33\" width=\"35\" height=\"35\" border=\"0\" id=\"Image33\" />"+
								"</a>"+
								"<input type=\"hidden\" id=\"iptAnsA\" value=1 />"+
							  "</div></td>"+
							  "<td width=\"129\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
							  "<td width=\"38\" align=\"center\" valign=\"middle\"><div id=\"divBtnB\">"+
								"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('B')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image34','','../img/22.btn_b2.png',1)\">"+
									"<img src=\"../img/22.btn_b1.png\" name=\"Image34\" width=\"35\" height=\"35\" border=\"0\" id=\"Image34\" />"+
								"</a>"+
								"<input type=\"hidden\" id=\"iptAnsB\" value=0 />"+
							  "</div></td>"+
							  "<td width=\"38\" align=\"center\" valign=\"middle\"><div id=\"divBtnC\">"+
								"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('C')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image35','','../img/23.btn_c2.png',1)\">"+
									"<img src=\"../img/23.btn_c1.png\" name=\"Image35\" width=\"35\" height=\"35\" border=\"0\" id=\"Image35\" />"+
								"</a>"+
								"<input type=\"hidden\" id=\"iptAnsC\" value=0 />"+
							  "</div></td>"+
							  "<td width=\"91\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
							"</tr>"+
						"</table>";
						
						txtCorr = "which";
					break;
					case 6:
						tblEx12 = "<table width=\"290\" border=\"0\">"+
							"<tr>"+
							  "<td width=\"46\" height=\"44\" class=\"raya_bg_cienPorcien2_prueva\">How</td>"+
							  "<td width=\"61\" class=\"raya_bg_cienPorcien2_prueva\">do can</td>"+
							  "<td width=\"10\" class=\"texto_2_grande\">I</td>"+
							  "<td width=\"54\" class=\"raya_bg_cienPorcien2_prueva\">get to</td>"+
							  "<td width=\"97\" class=\"texto_2_grande\">Santander?</td>"+
							"</tr>"+
						  "</table>"+
						  "<table width=\"290\" border=\"0\">"+
							"<tr>"+
							  "<td width=\"46\" height=\"37\" align=\"center\" valign=\"middle\"><div id=\"divBtnA\">"+
								"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('A')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image33','','../img/21.btn_a2.png',1)\">"+
									"<img src=\"../img/21.btn_a1.png\" name=\"Image33\" width=\"35\" height=\"35\" border=\"0\" id=\"Image33\" />"+
								"</a>"+
								"<input type=\"hidden\" id=\"iptAnsA\" value=0 />"+
							  "</div></td>"+
							  "<td width=\"59\" align=\"center\" valign=\"middle\"><div id=\"divBtnB\">"+
								"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('B')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image34','','../img/22.btn_b2.png',1)\">"+
									"<img src=\"../img/22.btn_b2.png\" name=\"Image34\" width=\"35\" height=\"35\" border=\"0\" id=\"Image34\" />"+
								"</a>"+
								"<input type=\"hidden\" id=\"iptAnsB\" value=1 />"+
							  "</div></td>"+
							  "<td width=\"10\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
							  "<td width=\"51\" align=\"center\" valign=\"middle\"><div id=\"divBtnC\">"+
								"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('C')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image35','','../img/23.btn_c2.png',1)\">"+
									"<img src=\"../img/23.btn_c1.png\" name=\"Image35\" width=\"35\" height=\"35\" border=\"0\" id=\"Image35\" />"+
								"</a>"+
								"<input type=\"hidden\" id=\"iptAnsC\" value=0 />"+
							  "</div></td>"+
							  "<td width=\"102\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
							"</tr>"+
						"</table>";
						
						txtCorr = "can";
					break;
				}
				tblEx12 = tblEx12 + "<table width=\"297\" border=\"0\">"+
							"<tr>"+
							  "<td width=\"84\" height=\"44\" rowspan=\"2\" align=\"center\" valign=\"bottom\" class=\"texto_1\">Correction: </td>"+
							  "<td width=\"203\" align=\"center\" valign=\"bottom\">&nbsp;</td>"+
							"</tr>"+
							"<tr>"+
							  "<td height=\"29\"align=\"center\" valign=\"middle\"  background=\"../img/cuadro_18.png\"><table width=\"197\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">"+
								"<tr>"+
								  "<td width=\"197\">"+
									"<input name=\"iptCorL2Ex12\" type=\"text\" class=\"raya_bg_cienPorcien2\" id=\"iptCorL2Ex12\" value=\""+txtCorr+"\" />"+
								  "</td>"+
								"</tr>"+
							  "</table></td>"+
							"</tr>"+
						"</table><input type=\"hidden\" id=\"vez\" value="+vez+" />"; 
				
				actualizarBtnL1E12(idQst, idBtn);
			}	
			else if(idBtn == 2){
				if(vez >= 2)
					actualizarBtnL1E12(idQst, idBtn);
				vez = parseInt(vez) + 1;
				
				switch (idQst){
					case 1:
						tblEx12 = "<table width=\"230\" border=\"0\">"+
							"<tr>"+
							  "<td width=\"45\" height=\"44\" class=\"raya_bg_cienPorcien2_prueva\">How</td>"+
							  "<td width=\"47\" class=\"texto_2_grande\"> can I</td>"+
							  "<td width=\"57\" class=\"raya_bg_cienPorcien2_prueva\"> to get</td>"+
							  "<td width=\"20\" class=\"raya_bg_cienPorcien2_prueva\">to</td>"+
							  "<td width=\"39\" class=\"texto_2_grande\"> Cali?</td>"+
							"</tr>"+
						  "</table>"+
						  "<table width=\"230\" border=\"0\">"+
							"<tr>"+
							  "<td width=\"41\" height=\"37\" align=\"center\"><div id=\"divBtnA\">"+
								"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('A')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image33','','../img/21.btn_a2.png',1)\">"+
									"<img src=\"../img/21.btn_a1.png\" name=\"Image33\" width=\"35\" height=\"35\" border=\"0\" id=\"Image33\" />"+
								"</a>"+
								"<input type=\"hidden\" id=\"iptAnsA\" value=0 />"+
							  "</div></td>"+
							  "<td width=\"62\">&nbsp;</td>"+
							  "<td width=\"35\"><div id=\"divBtnB\">"+
								"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('B')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image34','','../img/22.btn_b2.png',1)\">"+
									"<img src=\"../img/22.btn_b1.png\" name=\"Image34\" width=\"35\" height=\"35\" border=\"0\" id=\"Image34\" />"+
								"</a>"+
								"<input type=\"hidden\" id=\"iptAnsB\" value=0 />"+
							  "</div></td>"+
							  "<td width=\"35\"><div id=\"divBtnC\">"+
								"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('C')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image35','','../img/23.btn_c2.png',1)\">"+
									"<img src=\"../img/23.btn_c1.png\" name=\"Image35\" width=\"35\" height=\"35\" border=\"0\" id=\"Image35\" />"+
								"</a>"+
								"<input type=\"hidden\" id=\"iptAnsC\" value=0 />"+
							  "</div></td>"+
							  "<td width=\"35\">&nbsp;</td>"+
							"</tr>"+
						"</table>";
					break;
					case 2:
						tblEx12 = "<table width=\"234\" border=\"0\">"+
							"<tr>"+
							  "<td width=\"41\" height=\"44\" class=\"texto_2_grande\">You</td>"+
							  "<td width=\"58\" class=\"raya_bg_cienPorcien2_prueva\">should</td>"+
							  "<td width=\"55\" class=\"raya_bg_cienPorcien2_prueva\"> to get</td>"+
							  "<td width=\"21\" class=\"raya_bg_cienPorcien2_prueva\">by</td>"+
							  "<td width=\"37\" class=\"texto_2_grande\"> bus.</td>"+
							"</tr>"+
						  "</table>"+
						  "<table width=\"230\" border=\"0\">"+
							"<tr>"+
							  "<td width=\"37\" height=\"37\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
							  "<td width=\"66\" align=\"center\" valign=\"middle\"><div id=\"divBtnA\">"+
								"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('A')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image33','','../img/21.btn_a2.png',1)\">"+
									"<img src=\"../img/21.btn_a1.png\" name=\"Image33\" width=\"35\" height=\"35\" border=\"0\" id=\"Image33\" />"+
								"</a>"+
								"<input type=\"hidden\" id=\"iptAnsA\" value=0 />"+
							  "</div></td>"+
							  "<td width=\"44\" align=\"center\" valign=\"middle\"><div id=\"divBtnB\">"+
								"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('B')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image34','','../img/22.btn_b2.png',1)\">"+
									"<img src=\"../img/22.btn_b1.png\" name=\"Image34\" width=\"35\" height=\"35\" border=\"0\" id=\"Image34\" />"+
								"</a>"+
								"<input type=\"hidden\" id=\"iptAnsB\" value=0 />"+
							  "</div></td>"+
							  "<td width=\"35\" align=\"center\" valign=\"middle\"><div id=\"divBtnC\">"+
								"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('C')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image35','','../img/23.btn_c2.png',1)\">"+
									"<img src=\"../img/23.btn_c1.png\" name=\"Image35\" width=\"35\" height=\"35\" border=\"0\" id=\"Image35\" />"+
								"</a>"+
								"<input type=\"hidden\" id=\"iptAnsC\" value=0 />"+
							  "</div></td>"+
							  "<td width=\"26\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
							"</tr>"+
						"</table>";
					break;
					case 3:
						tblEx12 = "<table width=\"258\" border=\"0\">"+
							"<tr>"+
							  "<td width=\"40\" height=\"44\" class=\"raya_bg_cienPorcien2_prueva\">How</td>"+
							  "<td width=\"32\" class=\"raya_bg_cienPorcien2_prueva\">can</td>"+
							  "<td width=\"10\" class=\"texto_2_grande\">I</td>"+
							  "<td width=\"51\" class=\"raya_bg_cienPorcien2_prueva\">go by</td>"+
							  "<td width=\"103\" class=\"texto_2_grande\">Los Llanos?</td>"+
							"</tr>"+
						  "</table>"+
						  "<table width=\"255\" border=\"0\">"+
							"<tr>"+
							  "<td width=\"37\" height=\"37\" align=\"center\" valign=\"middle\"><div id=\"divBtnA\">"+
								"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('A')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image33','','../img/21.btn_a2.png',1)\">"+
									"<img src=\"../img/21.btn_a1.png\" name=\"Image33\" width=\"35\" height=\"35\" border=\"0\" id=\"Image33\" />"+
								"</a>"+
								"<input type=\"hidden\" id=\"iptAnsA\" value=0 />"+
							  "</div></td>"+
							  "<td width=\"35\" align=\"center\" valign=\"middle\"><div id=\"divBtnB\">"+
								"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('B')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image34','','../img/22.btn_b2.png',1)\">"+
									"<img src=\"../img/22.btn_b1.png\" name=\"Image34\" width=\"35\" height=\"35\" border=\"0\" id=\"Image34\" />"+
								"</a>"+
								"<input type=\"hidden\" id=\"iptAnsB\" value=0 />"+
							  "</div></td>"+
							  "<td width=\"10\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
							  "<td width=\"48\" align=\"center\" valign=\"middle\"><div id=\"divBtnC\">"+
								"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('C')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image35','','../img/23.btn_c2.png',1)\">"+
									"<img src=\"../img/23.btn_c1.png\" name=\"Image35\" width=\"35\" height=\"35\" border=\"0\" id=\"Image35\" />"+
								"</a>"+
								"<input type=\"hidden\" id=\"iptAnsC\" value=0 />"+
							  "</div></td>"+
							  "<td width=\"103\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
							"</tr>"+
						"</table>";
					break;
					case 4:
						tblEx12 = "<table width=\"557\" border=\"0\">"+
							"<tr>"+
							  "<td width=\"34\" height=\"44\" class=\"texto_2_grande\">You</td>"+
							  "<td width=\"31\" class=\"raya_bg_cienPorcien2_prueva\">can</td>"+
							  "<td width=\"148\" class=\"texto_2_grande\">go to Los Llanos</td>"+
							  "<td width=\"24\" class=\"raya_bg_cienPorcien2_prueva\"> by</td>"+
							  "<td width=\"83\" class=\"texto_2_grande\">car if you</td>"+
							  "<td width=\"70\" class=\"raya_bg_cienPorcien2_prueva\">want to</td>"+
							  "<td width=\"137\" class=\"texto_2_grande\">enjoy the view.</td>"+
							"</tr>"+
						  "</table>"+
						  "<table width=\"564\" border=\"0\">"+
							"<tr>"+
							  "<td width=\"35\" height=\"37\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
							  "<td width=\"35\" align=\"center\" valign=\"middle\"><div id=\"divBtnA\">"+
								"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('A')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image33','','../img/21.btn_a2.png',1)\">"+
									"<img src=\"../img/21.btn_a1.png\" name=\"Image33\" width=\"35\" height=\"35\" border=\"0\" id=\"Image33\" />"+
								"</a>"+
								"<input type=\"hidden\" id=\"iptAnsA\" value=0 />"+
							  "</div></td>"+
							  "<td width=\"141\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
							  "<td width=\"35\" align=\"center\" valign=\"middle\"><div id=\"divBtnB\">"+
								"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('B')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image34','','../img/22.btn_b2.png',1)\">"+
									"<img src=\"../img/22.btn_b1.png\" name=\"Image34\" width=\"35\" height=\"35\" border=\"0\" id=\"Image34\" />"+
								"</a>"+
								"<input type=\"hidden\" id=\"iptAnsB\" value=0 />"+
							  "</div></td>"+
							  "<td width=\"90\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
							  "<td width=\"202\" align=\"left\" valign=\"middle\"><div id=\"divBtnC\">"+
								"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('C')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image35','','../img/23.btn_c2.png',1)\">"+
									"<img src=\"../img/23.btn_c1.png\" name=\"Image35\" width=\"35\" height=\"35\" border=\"0\" id=\"Image35\" />"+
								"</a>"+
								"<input type=\"hidden\" id=\"iptAnsC\" value=0 />"+
							  "</div></td>"+
							"</tr>"+
						"</table>";
					break;
					case 5:
						tblEx12 = "<table width=\"362\" border=\"0\">"+
							"<tr>"+
							  "<td width=\"47\" height=\"44\" class=\"raya_bg_cienPorcien2_prueva\">What</td>"+
							  "<td width=\"139\" class=\"texto_2_grande\">is the best way</td>"+
							  "<td width=\"18\" class=\"raya_bg_cienPorcien2_prueva\">to</td>"+
							  "<td width=\"56\" class=\"raya_bg_cienPorcien2_prueva\">get to</td>"+
							  "<td width=\"80\" class=\"texto_2_grande\">Medellin?</td>"+
							"</tr>"+
						  "</table>"+
						  "<table width=\"359\" border=\"0\">"+
							"<tr>"+
							  "<td width=\"41\" height=\"37\" align=\"center\" valign=\"middle\"><div id=\"divBtnA\">"+
								"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('A')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image33','','../img/21.btn_a2.png',1)\">"+
									"<img src=\"../img/21.btn_a1.png\" name=\"Image33\" width=\"35\" height=\"35\" border=\"0\" id=\"Image33\" />"+
								"</a>"+
								"<input type=\"hidden\" id=\"iptAnsA\" value=0 />"+
							  "</div></td>"+
							  "<td width=\"129\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
							  "<td width=\"38\" align=\"center\" valign=\"middle\"><div id=\"divBtnB\">"+
								"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('B')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image34','','../img/22.btn_b2.png',1)\">"+
									"<img src=\"../img/22.btn_b1.png\" name=\"Image34\" width=\"35\" height=\"35\" border=\"0\" id=\"Image34\" />"+
								"</a>"+
								"<input type=\"hidden\" id=\"iptAnsB\" value=0 />"+
							  "</div></td>"+
							  "<td width=\"38\" align=\"center\" valign=\"middle\"><div id=\"divBtnC\">"+
								"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('C')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image35','','../img/23.btn_c2.png',1)\">"+
									"<img src=\"../img/23.btn_c1.png\" name=\"Image35\" width=\"35\" height=\"35\" border=\"0\" id=\"Image35\" />"+
								"</a>"+
								"<input type=\"hidden\" id=\"iptAnsC\" value=0 />"+
							  "</div></td>"+
							  "<td width=\"91\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
							"</tr>"+
						"</table>";
					break;
					case 6:
						tblEx12 = "<table width=\"290\" border=\"0\">"+
							"<tr>"+
							  "<td width=\"46\" height=\"44\" class=\"raya_bg_cienPorcien2_prueva\">How</td>"+
							  "<td width=\"61\" class=\"raya_bg_cienPorcien2_prueva\">do can</td>"+
							  "<td width=\"10\" class=\"texto_2_grande\">I</td>"+
							  "<td width=\"54\" class=\"raya_bg_cienPorcien2_prueva\">get to</td>"+
							  "<td width=\"97\" class=\"texto_2_grande\">Santander?</td>"+
							"</tr>"+
						  "</table>"+
						  "<table width=\"290\" border=\"0\">"+
							"<tr>"+
							  "<td width=\"46\" height=\"37\" align=\"center\" valign=\"middle\"><div id=\"divBtnA\">"+
								"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('A')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image33','','../img/21.btn_a2.png',1)\">"+
									"<img src=\"../img/21.btn_a1.png\" name=\"Image33\" width=\"35\" height=\"35\" border=\"0\" id=\"Image33\" />"+
								"</a>"+
								"<input type=\"hidden\" id=\"iptAnsA\" value=0 />"+
							  "</div></td>"+
							  "<td width=\"59\" align=\"center\" valign=\"middle\"><div id=\"divBtnB\">"+
								"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('B')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image34','','../img/22.btn_b2.png',1)\">"+
									"<img src=\"../img/22.btn_b1.png\" name=\"Image34\" width=\"35\" height=\"35\" border=\"0\" id=\"Image34\" />"+
								"</a>"+
								"<input type=\"hidden\" id=\"iptAnsB\" value=0 />"+
							  "</div></td>"+
							  "<td width=\"10\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
							  "<td width=\"51\" align=\"center\" valign=\"middle\"><div id=\"divBtnC\">"+
								"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('C')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image35','','../img/23.btn_c2.png',1)\">"+
									"<img src=\"../img/23.btn_c1.png\" name=\"Image35\" width=\"35\" height=\"35\" border=\"0\" id=\"Image35\" />"+
								"</a>"+
								"<input type=\"hidden\" id=\"iptAnsC\" value=0 />"+
							  "</div></td>"+
							  "<td width=\"102\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
							"</tr>"+
						"</table>";
					break;
				}
				tblEx12 = tblEx12 + "<table width=\"297\" border=\"0\">"+
							"<tr>"+
							  "<td width=\"84\" height=\"44\" rowspan=\"2\" align=\"center\" valign=\"bottom\" class=\"texto_1\">Correction: </td>"+
							  "<td width=\"203\" align=\"center\" valign=\"bottom\">&nbsp;</td>"+
							"</tr>"+
							"<tr>"+
							  "<td height=\"29\"align=\"center\" valign=\"middle\"  background=\"../img/cuadro_18.png\"><table width=\"197\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">"+
								"<tr>"+
								  "<td width=\"197\">"+
									"<input name=\"iptCorL2Ex12\" type=\"text\" class=\"raya_bg_cienPorcien2\" id=\"iptCorL2Ex12\" />"+
								  "</td>"+
								"</tr>"+
							  "</table></td>"+
							"</tr>"+
						"</table><input type=\"hidden\" id=\"vez\" value="+vez+" />";
			}	
			$('#divTblEx12').html(tblEx12); 
		}
		actualizardivCalL1E12(img);
	}
}

function actualizardivCalL1E12(img)
{
	if(img != "")
		btn = "<img src=\"../img/"+img+".png\" width=\"30\" height=\"30\" />";
	else
		btn = "&nbsp;";
	
	$('#divCalL1E12').html(btn);
}

function actualizarBtnL1E12(idQst, idBtn)
{
	if(idBtn == 3)
		btn = "<table align=\"center\" background=\"../img/8.bg_refresh.png\" width=\"141\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"47\" height=\"47\" align=\"right\" valign=\"middle\"><img src=\"../img/8.btn_chulito_desab.png\" name=\"Image24\" width=\"25\" height=\"23\" border=\"0\" id=\"Image24\" /></td>"+
				"<td width=\"46\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E12("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image25','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image25\" width=\"25\" height=\"23\" border=\"0\" id=\"Image25\" /></a></td>"+
				"<td width=\"48\" align=\"left\"><a href=\"#\" onclick=\"verificarL1E12("+idQst+",3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image30','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image30\" width=\"25\" height=\"23\" border=\"0\" id=\"Image30\" /></a></td>"+
			  "</tr>"+
			"</table>";
	else
		btn = "<table align=\"center\" background=\"../img/8.bg_refresh.png\" width=\"141\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"47\" height=\"47\" align=\"right\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E12("+idQst+",1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image24','','../img/8.btn_chulito2.png',1)\"><img src=\"../img/8.btn_chulito.png\" name=\"Image24\" width=\"25\" height=\"23\" border=\"0\" id=\"Image24\" /></a></td>"+
				"<td width=\"46\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E12("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image25','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image25\" width=\"25\" height=\"23\" border=\"0\" id=\"Image25\" /></a></td>"+
				"<td width=\"48\" align=\"left\"><a href=\"#\" onclick=\"verificarL1E12("+idQst+",3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image30','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image30\" width=\"25\" height=\"23\" border=\"0\" id=\"Image30\" /></a></td>"+
			  "</tr>"+
			"</table>";
			
	$('#divBtn').html(btn);
}

function cambiarDivL1Ex12(idQst)
{
	if (idQst == 1){
		prev = 6;
		next = 2;
		
		btnQst = "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\"width=\"211\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL1Ex12(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image38','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_2.png\" name=\"Image38\" width=\"40\" height=\"53\" border=\"0\" id=\"Image38\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex12(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image26','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image26\" width=\"40\" height=\"53\" border=\"0\" id=\"Image26\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex12(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image27','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_1.png\" name=\"Image27\" width=\"40\" height=\"53\" border=\"0\" id=\"Image27\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex12(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image28','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_1.png\" name=\"Image28\" width=\"40\" height=\"53\" border=\"0\" id=\"Image28\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"10\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex12(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image29','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_1.png\" name=\"Image29\" width=\"40\" height=\"53\" border=\"0\" id=\"Image29\" /></a></td>"+
			"<td width=\"10\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"19\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex12(6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image31','','../img/btn_6b_2.png',1)\"><img src=\"../img/btn_6b_1.png\" name=\"Image31\" width=\"40\" height=\"53\" border=\"0\" id=\"Image31\" /></a></td>"+
		  "</tr>"+
		"</table>";
		
		tblQst = "<table width=\"230\" border=\"0\">"+
				"<tr>"+
				  "<td width=\"45\" height=\"44\" class=\"raya_bg_cienPorcien2_prueva\">How</td>"+
				  "<td width=\"47\" class=\"texto_2_grande\"> can I</td>"+
				  "<td width=\"57\" class=\"raya_bg_cienPorcien2_prueva\"> to get</td>"+
				  "<td width=\"20\" class=\"raya_bg_cienPorcien2_prueva\">to</td>"+
				  "<td width=\"39\" class=\"texto_2_grande\"> Cali?</td>"+
				"</tr>"+
			"</table>"+
			  "<table width=\"230\" border=\"0\">"+
				"<tr>"+
				  "<td width=\"41\" height=\"37\" align=\"center\"><div id=\"divBtnA\">"+
					"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('A')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image33','','../img/21.btn_a2.png',1)\">"+
						"<img src=\"../img/21.btn_a1.png\" name=\"Image33\" width=\"35\" height=\"35\" border=\"0\" id=\"Image33\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAnsA\" value=0 />"+
				  "</div></td>"+
				  "<td width=\"62\">&nbsp;</td>"+
				  "<td width=\"35\"><div id=\"divBtnB\">"+
					"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('B')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image34','','../img/22.btn_b2.png',1)\">"+
						"<img src=\"../img/22.btn_b1.png\" name=\"Image34\" width=\"35\" height=\"35\" border=\"0\" id=\"Image34\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAnsB\" value=0 />"+
				  "</div></td>"+
				  "<td width=\"35\"><div id=\"divBtnC\">"+
					"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('C')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image35','','../img/23.btn_c2.png',1)\">"+
						"<img src=\"../img/23.btn_c1.png\" name=\"Image35\" width=\"35\" height=\"35\" border=\"0\" id=\"Image35\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAnsC\" value=0 />"+
				  "</div></td>"+
				  "<td width=\"35\">&nbsp;</td>"+
				"</tr>"+
			"</table>";
	
	}
	else if (idQst == 2){
		prev = 1;
		next = 3;
		
		btnQst = "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\"width=\"211\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL1Ex12(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image38','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image38\" width=\"40\" height=\"53\" border=\"0\" id=\"Image38\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex12(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image26','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_2.png\" name=\"Image26\" width=\"40\" height=\"53\" border=\"0\" id=\"Image26\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex12(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image27','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_1.png\" name=\"Image27\" width=\"40\" height=\"53\" border=\"0\" id=\"Image27\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex12(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image28','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_1.png\" name=\"Image28\" width=\"40\" height=\"53\" border=\"0\" id=\"Image28\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"10\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex12(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image29','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_1.png\" name=\"Image29\" width=\"40\" height=\"53\" border=\"0\" id=\"Image29\" /></a></td>"+
			"<td width=\"10\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"19\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex12(6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image31','','../img/btn_6b_2.png',1)\"><img src=\"../img/btn_6b_1.png\" name=\"Image31\" width=\"40\" height=\"53\" border=\"0\" id=\"Image31\" /></a></td>"+
		  "</tr>"+
		"</table>";
		
		tblQst = "<table width=\"234\" border=\"0\">"+
				"<tr>"+
				  "<td width=\"41\" height=\"44\" class=\"texto_2_grande\">You</td>"+
				  "<td width=\"58\" class=\"raya_bg_cienPorcien2_prueva\">should</td>"+
				  "<td width=\"55\" class=\"raya_bg_cienPorcien2_prueva\"> to get</td>"+
				  "<td width=\"21\" class=\"raya_bg_cienPorcien2_prueva\">by</td>"+
				  "<td width=\"37\" class=\"texto_2_grande\"> bus.</td>"+
				"</tr>"+
			  "</table>"+
			  "<table width=\"230\" border=\"0\">"+
				"<tr>"+
				  "<td width=\"37\" height=\"37\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
				  "<td width=\"66\" align=\"center\" valign=\"middle\"><div id=\"divBtnA\">"+
					"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('A')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image33','','../img/21.btn_a2.png',1)\">"+
						"<img src=\"../img/21.btn_a1.png\" name=\"Image33\" width=\"35\" height=\"35\" border=\"0\" id=\"Image33\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAnsA\" value=0 />"+
				  "</div></td>"+
				  "<td width=\"44\" align=\"center\" valign=\"middle\"><div id=\"divBtnB\">"+
					"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('B')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image34','','../img/22.btn_b2.png',1)\">"+
						"<img src=\"../img/22.btn_b1.png\" name=\"Image34\" width=\"35\" height=\"35\" border=\"0\" id=\"Image34\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAnsB\" value=0 />"+
				  "</div></td>"+
				  "<td width=\"35\" align=\"center\" valign=\"middle\"><div id=\"divBtnC\">"+
					"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('C')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image35','','../img/23.btn_c2.png',1)\">"+
						"<img src=\"../img/23.btn_c1.png\" name=\"Image35\" width=\"35\" height=\"35\" border=\"0\" id=\"Image35\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAnsC\" value=0 />"+
				  "</div></td>"+
				  "<td width=\"26\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
				"</tr>"+
			"</table>";
	}
	else if (idQst == 3){
		prev = 2;
		next = 4;
		
		btnQst = "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\"width=\"211\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL1Ex12(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image38','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image38\" width=\"40\" height=\"53\" border=\"0\" id=\"Image38\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex12(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image26','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image26\" width=\"40\" height=\"53\" border=\"0\" id=\"Image26\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex12(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image27','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_2.png\" name=\"Image27\" width=\"40\" height=\"53\" border=\"0\" id=\"Image27\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex12(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image28','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_1.png\" name=\"Image28\" width=\"40\" height=\"53\" border=\"0\" id=\"Image28\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"10\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex12(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image29','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_1.png\" name=\"Image29\" width=\"40\" height=\"53\" border=\"0\" id=\"Image29\" /></a></td>"+
			"<td width=\"10\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"19\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex12(6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image31','','../img/btn_6b_2.png',1)\"><img src=\"../img/btn_6b_1.png\" name=\"Image31\" width=\"40\" height=\"53\" border=\"0\" id=\"Image31\" /></a></td>"+
		  "</tr>"+
		"</table>";
		
		tblQst = "<table width=\"258\" border=\"0\">"+
			"<tr>"+
			  "<td width=\"40\" height=\"44\" class=\"raya_bg_cienPorcien2_prueva\">How</td>"+
			  "<td width=\"32\" class=\"raya_bg_cienPorcien2_prueva\">can</td>"+
			  "<td width=\"10\" class=\"texto_2_grande\">I</td>"+
			  "<td width=\"51\" class=\"raya_bg_cienPorcien2_prueva\">go by</td>"+
			  "<td width=\"103\" class=\"texto_2_grande\">Los Llanos?</td>"+
			"</tr>"+
		  "</table>"+
		  "<table width=\"255\" border=\"0\">"+
			"<tr>"+
			  "<td width=\"37\" height=\"37\" align=\"center\" valign=\"middle\"><div id=\"divBtnA\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('A')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image33','','../img/21.btn_a2.png',1)\">"+
					"<img src=\"../img/21.btn_a1.png\" name=\"Image33\" width=\"35\" height=\"35\" border=\"0\" id=\"Image33\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAnsA\" value=0 />"+
			  "</div></td>"+
			  "<td width=\"35\" align=\"center\" valign=\"middle\"><div id=\"divBtnB\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('B')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image34','','../img/22.btn_b2.png',1)\">"+
					"<img src=\"../img/22.btn_b1.png\" name=\"Image34\" width=\"35\" height=\"35\" border=\"0\" id=\"Image34\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAnsB\" value=0 />"+
			  "</div></td>"+
			  "<td width=\"10\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
			  "<td width=\"48\" align=\"center\" valign=\"middle\"><div id=\"divBtnC\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('C')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image35','','../img/23.btn_c2.png',1)\">"+
					"<img src=\"../img/23.btn_c1.png\" name=\"Image35\" width=\"35\" height=\"35\" border=\"0\" id=\"Image35\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAnsC\" value=0 />"+
			  "</div></td>"+
			  "<td width=\"103\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
			"</tr>"+
		"</table>";
	}
	else if (idQst == 4){
		prev = 3;
		next = 5;
		
		btnQst = "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\"width=\"211\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL1Ex12(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image38','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image38\" width=\"40\" height=\"53\" border=\"0\" id=\"Image38\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex12(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image26','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image26\" width=\"40\" height=\"53\" border=\"0\" id=\"Image26\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex12(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image27','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_1.png\" name=\"Image27\" width=\"40\" height=\"53\" border=\"0\" id=\"Image27\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex12(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image28','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_2.png\" name=\"Image28\" width=\"40\" height=\"53\" border=\"0\" id=\"Image28\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"10\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex12(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image29','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_1.png\" name=\"Image29\" width=\"40\" height=\"53\" border=\"0\" id=\"Image29\" /></a></td>"+
			"<td width=\"10\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"19\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex12(6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image31','','../img/btn_6b_2.png',1)\"><img src=\"../img/btn_6b_1.png\" name=\"Image31\" width=\"40\" height=\"53\" border=\"0\" id=\"Image31\" /></a></td>"+
		  "</tr>"+
		"</table>";
		
		tblQst = "<table width=\"557\" border=\"0\">"+
				"<tr>"+
				  "<td width=\"34\" height=\"44\" class=\"texto_2_grande\">You</td>"+
				  "<td width=\"31\" class=\"raya_bg_cienPorcien2_prueva\">can</td>"+
				  "<td width=\"148\" class=\"texto_2_grande\">go to Los Llanos</td>"+
				  "<td width=\"24\" class=\"raya_bg_cienPorcien2_prueva\"> by</td>"+
				  "<td width=\"83\" class=\"texto_2_grande\">car if you</td>"+
				  "<td width=\"70\" class=\"raya_bg_cienPorcien2_prueva\">want to</td>"+
				  "<td width=\"137\" class=\"texto_2_grande\">enjoy the view.</td>"+
				"</tr>"+
			  "</table>"+
			  "<table width=\"564\" border=\"0\">"+
				"<tr>"+
				  "<td width=\"35\" height=\"37\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
				  "<td width=\"35\" align=\"center\" valign=\"middle\"><div id=\"divBtnA\">"+
					"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('A')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image33','','../img/21.btn_a2.png',1)\">"+
						"<img src=\"../img/21.btn_a1.png\" name=\"Image33\" width=\"35\" height=\"35\" border=\"0\" id=\"Image33\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAnsA\" value=0 />"+
				  "</div></td>"+
				  "<td width=\"141\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
				  "<td width=\"35\" align=\"center\" valign=\"middle\"><div id=\"divBtnB\">"+
					"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('B')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image34','','../img/22.btn_b2.png',1)\">"+
						"<img src=\"../img/22.btn_b1.png\" name=\"Image34\" width=\"35\" height=\"35\" border=\"0\" id=\"Image34\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAnsB\" value=0 />"+
				  "</div></td>"+
				  "<td width=\"90\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
				  "<td width=\"202\" align=\"left\" valign=\"middle\"><div id=\"divBtnC\">"+
					"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('C')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image35','','../img/23.btn_c2.png',1)\">"+
						"<img src=\"../img/23.btn_c1.png\" name=\"Image35\" width=\"35\" height=\"35\" border=\"0\" id=\"Image35\" />"+
					"</a>"+
					"<input type=\"hidden\" id=\"iptAnsC\" value=0 />"+
				  "</div></td>"+
				"</tr>"+
			"</table>";
	}
	else if (idQst == 5){
		prev = 4;
		next = 6;
		
		btnQst = "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\"width=\"211\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL1Ex12(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image38','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image38\" width=\"40\" height=\"53\" border=\"0\" id=\"Image38\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex12(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image26','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image26\" width=\"40\" height=\"53\" border=\"0\" id=\"Image26\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex12(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image27','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_1.png\" name=\"Image27\" width=\"40\" height=\"53\" border=\"0\" id=\"Image27\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex12(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image28','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_1.png\" name=\"Image28\" width=\"40\" height=\"53\" border=\"0\" id=\"Image28\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"10\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex12(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image29','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_2.png\" name=\"Image29\" width=\"40\" height=\"53\" border=\"0\" id=\"Image29\" /></a></td>"+
			"<td width=\"10\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"19\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex12(6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image31','','../img/btn_6b_2.png',1)\"><img src=\"../img/btn_6b_1.png\" name=\"Image31\" width=\"40\" height=\"53\" border=\"0\" id=\"Image31\" /></a></td>"+
		  "</tr>"+
		"</table>";
		
		tblQst = "<table width=\"362\" border=\"0\">"+
			"<tr>"+
			  "<td width=\"47\" height=\"44\" class=\"raya_bg_cienPorcien2_prueva\">What</td>"+
			  "<td width=\"139\" class=\"texto_2_grande\">is the best way</td>"+
			  "<td width=\"18\" class=\"raya_bg_cienPorcien2_prueva\">to</td>"+
			  "<td width=\"56\" class=\"raya_bg_cienPorcien2_prueva\">get to</td>"+
			  "<td width=\"80\" class=\"texto_2_grande\">Medellin?</td>"+
			"</tr>"+
		  "</table>"+
		  "<table width=\"359\" border=\"0\">"+
			"<tr>"+
			  "<td width=\"41\" height=\"37\" align=\"center\" valign=\"middle\"><div id=\"divBtnA\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('A')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image33','','../img/21.btn_a2.png',1)\">"+
					"<img src=\"../img/21.btn_a1.png\" name=\"Image33\" width=\"35\" height=\"35\" border=\"0\" id=\"Image33\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAnsA\" value=0 />"+
			  "</div></td>"+
			  "<td width=\"129\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
			  "<td width=\"38\" align=\"center\" valign=\"middle\"><div id=\"divBtnB\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('B')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image34','','../img/22.btn_b2.png',1)\">"+
					"<img src=\"../img/22.btn_b1.png\" name=\"Image34\" width=\"35\" height=\"35\" border=\"0\" id=\"Image34\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAnsB\" value=0 />"+
			  "</div></td>"+
			  "<td width=\"38\" align=\"center\" valign=\"middle\"><div id=\"divBtnC\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('C')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image35','','../img/23.btn_c2.png',1)\">"+
					"<img src=\"../img/23.btn_c1.png\" name=\"Image35\" width=\"35\" height=\"35\" border=\"0\" id=\"Image35\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAnsC\" value=0 />"+
			  "</div></td>"+
			  "<td width=\"91\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
			"</tr>"+
		"</table>";
	}
	else if (idQst == 6){
		prev = 5;
		next = 1;
		
		btnQst = "<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\"width=\"211\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL1Ex12(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image38','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image38\" width=\"40\" height=\"53\" border=\"0\" id=\"Image38\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex12(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image26','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image26\" width=\"40\" height=\"53\" border=\"0\" id=\"Image26\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex12(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image27','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_1.png\" name=\"Image27\" width=\"40\" height=\"53\" border=\"0\" id=\"Image27\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex12(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image28','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_1.png\" name=\"Image28\" width=\"40\" height=\"53\" border=\"0\" id=\"Image28\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"10\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex12(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image29','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_1.png\" name=\"Image29\" width=\"40\" height=\"53\" border=\"0\" id=\"Image29\" /></a></td>"+
			"<td width=\"10\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"19\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex12(6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image31','','../img/btn_6b_2.png',1)\"><img src=\"../img/btn_6b_2.png\" name=\"Image31\" width=\"40\" height=\"53\" border=\"0\" id=\"Image31\" /></a></td>"+
		  "</tr>"+
		"</table>";
		
		tblQst = "<table width=\"290\" border=\"0\">"+
			"<tr>"+
			  "<td width=\"46\" height=\"44\" class=\"raya_bg_cienPorcien2_prueva\">How</td>"+
			  "<td width=\"61\" class=\"raya_bg_cienPorcien2_prueva\">do can</td>"+
			  "<td width=\"10\" class=\"texto_2_grande\">I</td>"+
			  "<td width=\"54\" class=\"raya_bg_cienPorcien2_prueva\">get to</td>"+
			  "<td width=\"97\" class=\"texto_2_grande\">Santander?</td>"+
			"</tr>"+
		  "</table>"+
		  "<table width=\"290\" border=\"0\">"+
			"<tr>"+
			  "<td width=\"46\" height=\"37\" align=\"center\" valign=\"middle\"><div id=\"divBtnA\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('A')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image33','','../img/21.btn_a2.png',1)\">"+
					"<img src=\"../img/21.btn_a1.png\" name=\"Image33\" width=\"35\" height=\"35\" border=\"0\" id=\"Image33\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAnsA\" value=0 />"+
			  "</div></td>"+
			  "<td width=\"59\" align=\"center\" valign=\"middle\"><div id=\"divBtnB\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('B')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image34','','../img/22.btn_b2.png',1)\">"+
					"<img src=\"../img/22.btn_b1.png\" name=\"Image34\" width=\"35\" height=\"35\" border=\"0\" id=\"Image34\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAnsB\" value=0 />"+
			  "</div></td>"+
			  "<td width=\"10\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
			  "<td width=\"51\" align=\"center\" valign=\"middle\"><div id=\"divBtnC\">"+
				"<a href=\"#\" onclick=\"cambiarEstBtnL1Ex12('C')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image35','','../img/23.btn_c2.png',1)\">"+
					"<img src=\"../img/23.btn_c1.png\" name=\"Image35\" width=\"35\" height=\"35\" border=\"0\" id=\"Image35\" />"+
				"</a>"+
				"<input type=\"hidden\" id=\"iptAnsC\" value=0 />"+
			  "</div></td>"+
			  "<td width=\"102\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
			"</tr>"+
		"</table>";
	}
	
	html = "<table width=\"766\" border=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"645\" height=\"107\" align=\"left\" valign=\"middle\"><img src=\"../img/titulos/L1/L1_exer_12.png\" width=\"288\" height=\"98\" /></td>"+
			"<td width=\"117\" align=\"center\" valign=\"middle\"><a href=\"#\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image32','','../img/btn_ejemplo_2.png',1)\"><img src=\"../img/btn_ejemplo_1.png\" name=\"Image32\" width=\"105\" height=\"100\" border=\"0\" id=\"Image32\" /></a></td>"+
			"</tr>"+
		"</table>"+btnQst+
		"<table align=\"center\" width=\"737\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"56\" height=\"208\" align=\"left\" valign=\"middle\"><a href=\"#\" onclick=\"cambiarDivL1Ex12("+prev+")\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image36','','../img/11.izq2.png',1)\"><img src=\"../img/11.izq.png\" name=\"Image36\" width=\"47\" height=\"51\" border=\"0\" id=\"Image36\" /></a></td>"+
			"<td width=\"610\" align=\"center\" valign=\"middle\" background=\"../img/cuadro_2.png\">"+
			"<div id=\"divTblEx12\">"+tblQst+
			  "<table width=\"297\" border=\"0\">"+
				"<tr>"+
				  "<td width=\"84\" height=\"44\" rowspan=\"2\" align=\"center\" valign=\"bottom\" class=\"texto_1\">Correction: </td>"+
				  "<td width=\"203\" align=\"center\" valign=\"bottom\">&nbsp;</td>"+
				"</tr>"+
				"<tr>"+
				  "<td height=\"29\"align=\"center\" valign=\"middle\"  background=\"../img/cuadro_18.png\"><table width=\"197\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">"+
					"<tr>"+
					  "<td width=\"197\">"+
						"<input name=\"iptCorL2Ex12\" type=\"text\" class=\"raya_bg_cienPorcien2\" id=\"iptCorL2Ex12\" />"+
					  "</td>"+
					"</tr>"+
				  "</table></td>"+
				"</tr>"+
			"</table><input type=\"hidden\" id=\"vez\" value=0 /></div></td>"+
			"<td width=\"71\" align=\"right\" valign=\"middle\"><a href=\"#\" onclick=\"cambiarDivL1Ex12("+next+")\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image37','','../img/11.der2.png',1)\"><img src=\"../img/11.der.png\" name=\"Image37\" width=\"47\" height=\"51\" border=\"0\" id=\"Image37\" /></a></td>"+
		  "</tr>"+
		"</table>"+
	   "<table align=\"center\" width=\"29\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr align=\"center\" valign=\"bottom\">"+
			"<td width=\"29\" height=\"30\"><div id=\"divCalL1E12\">&nbsp;</div></td>"+
		  "</tr>"+
		"</table> "+
		"<div id=\"divBtn\">"+
		"<table align=\"center\" background=\"../img/8.bg_refresh.png\" width=\"141\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"47\" height=\"47\" align=\"right\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E12("+idQst+",1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image24','','../img/8.btn_chulito2.png',1)\"><img src=\"../img/8.btn_chulito.png\" name=\"Image24\" width=\"25\" height=\"23\" border=\"0\" id=\"Image24\" /></a></td>"+
			"<td width=\"46\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E12("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image25','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image25\" width=\"25\" height=\"23\" border=\"0\" id=\"Image25\" /></a></td>"+
			"<td width=\"48\" align=\"left\"><img src=\"../img/8.btn_ojo_desab.png\" name=\"Image30\" width=\"25\" height=\"23\" border=\"0\" id=\"Image30\" /></td>"+
		  "</tr>"+
		"</table>"+
		"</div>";
	
	$('#contenido').html(html);
}
/* Exercise 12 */


/* Exercise 14 */
function verificarL1E14(idQst, idBtn)
{
	ansL1E14A = $("#ansL1E14A").val();
	ansL1E14B = $("#ansL1E14B").val();
	ansL1E14C = $("#ansL1E14C").val();
	ansL1E14D = $("#ansL1E14D").val();
	
	vez = $("#vez").val();
	
	img = "";
	
	if(idBtn!= 3 && idQst == 'B' && (ansL1E14A == "" || ansL1E14B == "" || ansL1E14C == "" || ansL1E14D == "" || $("#ansL1E14E").val() == ""))
		alert("You must write the answers.");
	else if(idBtn!= 3 && idQst != 'B' && (ansL1E14A == "" || ansL1E14B == "" || ansL1E14C == "" || ansL1E14D == ""))
		alert("You must write the answers.");
	else{
		if(idBtn == 1)
		{
			if(idQst == 'A' && ansL1E14A == "Which" && (ansL1E14B == "go there" || ansL1E14B == "get there") && ansL1E14C == "can" && ansL1E14D == "should")
				img = "good";
			else if(idQst == 'B' && ansL1E14A == "How" && ansL1E14B == "should" && ansL1E14C == "can" && (ansL1E14D == "can" || ansL1E14D == "should") && $("#ansL1E14E").val() == "should")
				img = "good";
			else if(idQst == 'C' && ansL1E14A == "How" && (ansL1E14B == "go" || ansL1E14B == "get") && ansL1E14C == "should" && ansL1E14D == "can")
				img = "good";
			else 
				img = "good_No";
		}
		else{
			if(idBtn == 3)
			{
				switch(idQst){
					case 'A':
						tblEx = "<table align=\"center\" width=\"768\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
						  "<tr>"+
							"<td width=\"768\" height=\"283\" align=\"left\" valign=\"middle\"><table width=\"653\" border=\"0\" align=\"center\">"+
							  "<tr class=\"texto_2_mediano\">"+
								"<td width=\"17\" height=\"24\">A:</td>"+
								"<td width=\"735\">I love this park! </td>"+
							  "</tr>"+
							"</table>"+
							  "<table width=\"653\" border=\"0\" align=\"center\">"+
								"<tr class=\"texto_3_mediano\">"+
								  "<td width=\"17\" height=\"24\">B:</td>"+
								  "<td width=\"735\">Yeah, it's awesome. So, our vacations start this weekend. Any plans?</td>"+
								"</tr>"+
							"</table>"+
							  "<table width=\"653\" border=\"0\" align=\"center\">"+
								"<tr class=\"texto_2_mediano\">"+
								  "<td width=\"17\" height=\"24\">A:</td>"+
								  "<td width=\"626\">Actually, I'm planning to go out of town to Santander. They say it's wonderful!</td>"+
								"</tr>"+
							"</table>"+
							  "<table width=\"653\" border=\"0\" align=\"center\">"+
								"<tr class=\"texto_3_mediano\">"+
								  "<td width=\"17\" height=\"24\">B:</td>"+
								  "<td width=\"735\">It definitely is! Are you going by plane or by bus?</td>"+
								"</tr>"+
							"</table>"+
							  "<table width=\"653\" border=\"0\" align=\"center\">"+
								"<tr>"+
								  "<td width=\"17\" height=\"24\" class=\"texto_2_mediano\">A:</td>"+
								  "<td width=\"109\" class=\"texto_2_mediano\">I don't know.</td>"+
								  "<td width=\"15\" class=\"texto_1_mediano\">1.</td>"+
								  "<td width=\"120\">"+
									"<input name=\"ansL1E14A\" type=\"text\" class=\"raya_bg_cienPorcien3\" id=\"ansL1E14A\" value=\"Which\" />"+
								  "</td>"+
								  "<td width=\"145\" class=\"texto_2_mediano\"> is the best way to</td>"+
								  "<td width=\"15\" class=\"texto_1_mediano\">2.</td>"+
								  "<td width=\"120\">"+
									"<input name=\"ansL1E14B\" type=\"text\" class=\"raya_bg_cienPorcien3\" id=\"ansL1E14B\" value=\"go there/get there\" />"+
								  "</td>"+
								  "<td width=\"78\" class=\"texto_2_mediano\">?</td>"+
								"</tr>"+
							"</table>"+
							  "<table width=\"653\" border=\"0\" align=\"center\">"+
								"<tr>"+
								  "<td width=\"17\" height=\"24\" valign=\"top\" class=\"texto_3_mediano\">B:</td>"+
								  "<td width=\"34\" valign=\"top\" class=\"texto_3_mediano\">You</td>"+
								  "<td width=\"16\" valign=\"top\" class=\"texto_1_mediano\">3.</td>"+
								  "<td width=\"120\" valign=\"top\">"+
									"<input name=\"ansL1E14C\" type=\"text\" class=\"raya_bg_cienPorcien3\" id=\"ansL1E14C\" value=\"can\" />"+
								  "</td>"+
								  "<td width=\"444\" valign=\"top\" class=\"texto_3_mediano\">go by car or by bus if you want to take a look at the</td>"+
								"</tr>"+
							  "</table>"+
							  "<table width=\"653\" border=\"0\" align=\"center\">"+
								"<tr>"+
								  "<td width=\"19\" height=\"24\">&nbsp;</td>"+
								  "<td width=\"316\" class=\"texto_3_mediano\"> view, but if you want to arrive  fast, you</td>"+
								  "<td width=\"15\" class=\"texto_1_mediano\">4.</td>"+
								  "<td width=\"120\">"+
									"<input name=\"ansL1E14D\" type=\"text\" class=\"raya_bg_cienPorcien3\" id=\"ansL1E14D\" value=\"should\" />"+
								  "</td>"+
								  "<td width=\"161\" class=\"texto_3_mediano\">take a plane.</td>"+
								"</tr>"+
							"</table>"+
							  "<table width=\"653\" border=\"0\" align=\"center\">"+
								"<tr class=\"texto_2_mediano\">"+
								  "<td width=\"17\" height=\"24\">A:</td>"+
								  "<td width=\"735\">Thanks for the advice. </td>"+
								"</tr>"+
							"</table>"+
							  "<table width=\"653\" border=\"0\" align=\"center\">"+
								"<tr class=\"texto_3_mediano\">"+
								  "<td width=\"17\" height=\"24\">B:</td>"+
								  "<td width=\"735\">No problem.</td>"+
								"</tr>"+
							"</table></td>"+
						  "</tr><input type=\"hidden\" id=\"vez\" value="+vez+" />"+
						"</table>";
					break;
					case 'B':
						tblEx = "<table align=\"center\" width=\"768\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
						  "<tr>"+
							"<td width=\"768\" height=\"283\" align=\"left\" valign=\"middle\"><table width=\"663\" border=\"0\" align=\"center\">"+
							  "<tr class=\"texto_2_mediano\">"+
								"<td width=\"17\" height=\"24\">A:</td>"+
								"<td width=\"661\">Good morning. How can I help you?</td>"+
							  "</tr>"+
							"</table>"+
							  "<table width=\"663\" border=\"0\" align=\"center\">"+
								"<tr class=\"texto_3_mediano\">"+
								  "<td width=\"17\" height=\"24\">B:</td>"+
								  "<td width=\"393\">Good morning. I would like to go to San Agustin. </td>"+
								  "<td width=\"15\" class=\"texto_1_mediano\">1.</td>"+
								  "<td width=\"120\">"+
									"<input name=\"ansL1E14A\" type=\"text\" class=\"raya_bg_cienPorcien3\" id=\"ansL1E14A\" value=\"How\" />"+
								  "</td>"+
								  "<td width=\"96\"> can I there?</td>"+
								"</tr>"+
							"</table>"+
							  "<table width=\"663\" border=\"0\" align=\"center\">"+
								"<tr class=\"texto_2_mediano\">"+
								  "<td width=\"17\" height=\"24\">A:</td>"+
								  "<td width=\"134\">Well, I think you </td>"+
								  "<td width=\"16\" class=\"texto_1_mediano\">2.</td>"+
								  "<td width=\"120\">"+
									"<input name=\"ansL1E14B\" type=\"text\" class=\"raya_bg_cienPorcien3\" id=\"ansL1E14B\" value=\"should\" />"+
								  "</td>"+
								  "<td>take a plane because by car it's 9  hours far. </td>"+
								"</tr>"+
							"</table>"+
							  "<table width=\"663\" border=\"0\" align=\"center\">"+
								"<tr class=\"texto_3_mediano\">"+
								  "<td width=\"17\" height=\"24\">B:</td>"+
								  "<td width=\"735\">Oh! I'd rather go by car to take a look at the view.</td>"+
								"</tr>"+
							"</table>"+
							  "<table width=\"663\" border=\"0\" align=\"center\">"+
								"<tr>"+
								  "<td width=\"19\" height=\"24\" class=\"texto_2_mediano\">A:</td>"+
								  "<td width=\"155\" class=\"texto_2_mediano\">In that case, you</td>"+
								  "<td width=\"16\" class=\"texto_1_mediano\">3.</td>"+
								  "<td width=\"120\">"+
									"<input name=\"ansL1E14C\" type=\"text\" class=\"raya_bg_cienPorcien3\" id=\"ansL1E14C\" value=\"can\" />"+
								  "</td>"+
								  "<td width=\"384\" class=\"texto_2_mediano\"> take a bus to Neiva at the bus terminal.</td>"+
								"</tr>"+
							"</table>"+
							  "<table width=\"663\" border=\"0\" align=\"center\">"+
								"<tr>"+
								  "<td width=\"19\" height=\"24\" valign=\"top\" class=\"texto_3_mediano\">&nbsp;</td>"+
								  "<td width=\"133\" valign=\"top\" class=\"texto_2_mediano\">In Neiva, you</td>"+
								  "<td width=\"35\" valign=\"top\" class=\"texto_1_mediano\">4.</td>"+
								  "<td width=\"120\" valign=\"top\">"+
									"<input name=\"ansL1E14D\" type=\"text\" class=\"raya_bg_cienPorcien3\" id=\"ansL1E14D\" value=\"can / should\" />"+
								  "</td>"+
								  "<td width=\"387\" valign=\"top\" class=\"texto_2_mediano\">take another bus to Pitalito and finally in</td>"+
								"</tr>"+
							  "</table>"+
							  "<table width=\"663\" border=\"0\" align=\"center\">"+
								"<tr>"+
								  "<td width=\"21\" height=\"24\">&nbsp;</td>"+
								  "<td width=\"105\" class=\"texto_2_mediano\">Pitalito you</td>"+
								  "<td width=\"16\" class=\"texto_1_mediano\">5.</td>"+
								  "<td width=\"120\">"+
									"<input name=\"ansL1E14E\" type=\"text\" class=\"raya_bg_cienPorcien3\" id=\"ansL1E14E\" value=\"should\" />"+
								  "</td>"+
								  "<td width=\"432\" class=\"texto_2_mediano\">take the bus to San Agustin.</td>"+
								"</tr>"+
							"</table>"+
							  "<table width=\"663\" border=\"0\" align=\"center\">"+
								"<tr class=\"texto_3_mediano\">"+
								  "<td width=\"17\" height=\"24\">B:</td>"+
								  "<td width=\"735\">Sounds exciting!!!</td>"+
								"</tr>"+
							"</table>"+
							"</td>"+
						  "</tr><input type=\"hidden\" id=\"vez\" value="+vez+" />"+
						"</table>";
					break;
					case 'C':
						tblEx = "<table align=\"center\" width=\"768\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
						  "<tr>"+
							"<td width=\"768\" height=\"283\" align=\"left\" valign=\"middle\"><table width=\"643\" border=\"0\" align=\"center\">"+
							  "<tr class=\"texto_2_mediano\">"+
								"<td width=\"17\" height=\"24\">A:</td>"+
								"<td width=\"689\">I'm really excited about our trip to Buenaventura.</td>"+
							  "</tr>"+
							"</table>"+
							  "<table width=\"643\" border=\"0\" align=\"center\">"+
								"<tr class=\"texto_3_mediano\">"+
								  "<td width=\"17\" height=\"24\">B:</td>"+
								  "<td>Yeah, me too. It's such a cool place!</td>"+
								"</tr>"+
							"</table>"+
							  "<table width=\"643\" border=\"0\" align=\"center\">"+
								"<tr class=\"texto_2_mediano\">"+
								  "<td width=\"17\" height=\"24\">A:</td>"+
								  "<td width=\"222\">I think we can visit Malpelo.</td>"+
								  "<td width=\"15\" class=\"texto_1_mediano\">1.</td>"+
								  "<td width=\"120\">"+
									"<input name=\"ansL1E14A\" type=\"text\" class=\"raya_bg_cienPorcien3\" id=\"ansL1E14A\" value=\"How\" />"+
								  "</td>"+
								  "<td width=\"50\">do we </td>"+
								  "<td width=\"15\" class=\"texto_1_mediano\">2.</td>"+
								  "<td width=\"120\">"+
									"<input name=\"ansL1E14B\" type=\"text\" class=\"raya_bg_cienPorcien3\" id=\"ansL1E14B\" value=\"go / get\" />"+
								  "</td>"+
								  "<td width=\"50\">there?</td>"+
								"</tr>"+
							"</table>"+
							  "<table width=\"643\" border=\"0\" align=\"center\">"+
								"<tr class=\"texto_3_mediano\">"+
								  "<td width=\"17\" height=\"24\">B:</td>"+
								  "<td width=\"26\">We</td>"+
								  "<td width=\"15\" class=\"texto_1_mediano\">3.</td>"+
								  "<td width=\"10\">"+
									"<input name=\"ansL1E14C\" type=\"text\" class=\"raya_bg_cienPorcien3\" id=\"ansL1E14C\" value=\"should\" />"+
								  "</td>"+
								  "<td width=\"626\">take a boat.</td>"+
								"</tr>"+
							"</table>"+
							  "<table width=\"643\" border=\"0\" align=\"center\">"+
								"<tr>"+
								  "<td width=\"19\" height=\"24\" class=\"texto_2_mediano\">A:</td>"+
								  "<td class=\"texto_2_mediano\">A boat? Is it safe?</td>"+
								"</tr>"+
							"</table>"+
							  "<table width=\"643\" border=\"0\" align=\"center\">"+
								"<tr>"+
								  "<td width=\"19\" height=\"24\" valign=\"top\" class=\"texto_3_mediano\">B:</td>"+
								  "<td valign=\"top\" class=\"texto_3_mediano\">Yeah, don't worry. It's a very long trip&hellip;like 40 hours or so. </td>"+
								"</tr>"+
							  "</table>"+
							  "<table width=\"643\" border=\"0\" align=\"center\">"+
								"<tr>"+
								  "<td width=\"17\" height=\"24\" class=\"texto_2_mediano\">A:</td>"+
								  "<td width=\"144\" class=\"texto_2_mediano\">Uh-oh! Maybe we </td>"+
								  "<td width=\"18\" class=\"texto_1_mediano\">4.</td>"+
								  "<td width=\"120\">"+
									"<input name=\"ansL1E14D\" type=\"text\" class=\"raya_bg_cienPorcien3\" id=\"ansL1E14D\" value=\"can\" />"+
								  "</td>"+
								  "<td width=\"322\" class=\"texto_2_mediano\">take a plane!</td>"+
								"</tr>"+
							"</table>"+
							  "<table width=\"643\" border=\"0\" align=\"center\">"+
								"<tr class=\"texto_3_mediano\">"+
								  "<td width=\"17\" height=\"24\">B:</td>"+
								  "<td width=\"735\">Honey&hellip;we're going to an island&hellip;in the middle of the ocean!!!!</td>"+
								"</tr>"+
							"</table>"+
							  "<table width=\"643\" border=\"0\" align=\"center\">"+
								"<tr>"+
								  "<td width=\"17\" class=\"texto_2_mediano\">A:</td>"+
								  "<td width=\"689\" class=\"texto_2_mediano\">Oh!</td>"+
								"</tr>"+
							"</table></td>"+
						  "</tr><input type=\"hidden\" id=\"vez\" value="+vez+" />"+
						"</table>";
					break;
				}
				actualizarBtnL1E14(idQst, idBtn);
			}	
			else if(idBtn == 2){
				if(vez >= 2)
					actualizarBtnL1E14(idQst, idBtn);
				vez = parseInt(vez) + 1;
				switch(idQst){
					case 'A':
						tblEx = "<table align=\"center\" width=\"768\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
						  "<tr>"+
							"<td width=\"768\" height=\"283\" align=\"left\" valign=\"middle\"><table width=\"653\" border=\"0\" align=\"center\">"+
							  "<tr class=\"texto_2_mediano\">"+
								"<td width=\"17\" height=\"24\">A:</td>"+
								"<td width=\"735\">I love this park! </td>"+
							  "</tr>"+
							"</table>"+
							  "<table width=\"653\" border=\"0\" align=\"center\">"+
								"<tr class=\"texto_3_mediano\">"+
								  "<td width=\"17\" height=\"24\">B:</td>"+
								  "<td width=\"735\">Yeah, it's awesome. So, our vacations start this weekend. Any plans?</td>"+
								"</tr>"+
							"</table>"+
							  "<table width=\"653\" border=\"0\" align=\"center\">"+
								"<tr class=\"texto_2_mediano\">"+
								  "<td width=\"17\" height=\"24\">A:</td>"+
								  "<td width=\"626\">Actually, I'm planning to go out of town to Santander. They say it's wonderful!</td>"+
								"</tr>"+
							"</table>"+
							  "<table width=\"653\" border=\"0\" align=\"center\">"+
								"<tr class=\"texto_3_mediano\">"+
								  "<td width=\"17\" height=\"24\">B:</td>"+
								  "<td width=\"735\">It definitely is! Are you going by plane or by bus?</td>"+
								"</tr>"+
							"</table>"+
							  "<table width=\"653\" border=\"0\" align=\"center\">"+
								"<tr>"+
								  "<td width=\"17\" height=\"24\" class=\"texto_2_mediano\">A:</td>"+
								  "<td width=\"109\" class=\"texto_2_mediano\">I don't know.</td>"+
								  "<td width=\"15\" class=\"texto_1_mediano\">1.</td>"+
								  "<td width=\"120\">"+
									"<input name=\"ansL1E14A\" type=\"text\" class=\"raya_bg_cienPorcien3\" id=\"ansL1E14A\" />"+
								  "</td>"+
								  "<td width=\"145\" class=\"texto_2_mediano\"> is the best way to</td>"+
								  "<td width=\"15\" class=\"texto_1_mediano\">2.</td>"+
								  "<td width=\"120\">"+
									"<input name=\"ansL1E14B\" type=\"text\" class=\"raya_bg_cienPorcien3\" id=\"ansL1E14B\" />"+
								  "</td>"+
								  "<td width=\"78\" class=\"texto_2_mediano\">?</td>"+
								"</tr>"+
							"</table>"+
							  "<table width=\"653\" border=\"0\" align=\"center\">"+
								"<tr>"+
								  "<td width=\"17\" height=\"24\" valign=\"top\" class=\"texto_3_mediano\">B:</td>"+
								  "<td width=\"34\" valign=\"top\" class=\"texto_3_mediano\">You</td>"+
								  "<td width=\"16\" valign=\"top\" class=\"texto_1_mediano\">3.</td>"+
								  "<td width=\"120\" valign=\"top\">"+
									"<input name=\"ansL1E14C\" type=\"text\" class=\"raya_bg_cienPorcien3\" id=\"ansL1E14C\" />"+
								  "</td>"+
								  "<td width=\"444\" valign=\"top\" class=\"texto_3_mediano\">go by car or by bus if you want to take a look at the</td>"+
								"</tr>"+
							  "</table>"+
							  "<table width=\"653\" border=\"0\" align=\"center\">"+
								"<tr>"+
								  "<td width=\"19\" height=\"24\">&nbsp;</td>"+
								  "<td width=\"316\" class=\"texto_3_mediano\"> view, but if you want to arrive  fast, you</td>"+
								  "<td width=\"15\" class=\"texto_1_mediano\">4.</td>"+
								  "<td width=\"120\">"+
									"<input name=\"ansL1E14D\" type=\"text\" class=\"raya_bg_cienPorcien3\" id=\"ansL1E14D\" />"+
								  "</td>"+
								  "<td width=\"161\" class=\"texto_3_mediano\">take a plane.</td>"+
								"</tr>"+
							"</table>"+
							  "<table width=\"653\" border=\"0\" align=\"center\">"+
								"<tr class=\"texto_2_mediano\">"+
								  "<td width=\"17\" height=\"24\">A:</td>"+
								  "<td width=\"735\">Thanks for the advice. </td>"+
								"</tr>"+
							"</table>"+
							  "<table width=\"653\" border=\"0\" align=\"center\">"+
								"<tr class=\"texto_3_mediano\">"+
								  "<td width=\"17\" height=\"24\">B:</td>"+
								  "<td width=\"735\">No problem.</td>"+
								"</tr>"+
							"</table></td>"+
						  "</tr><input type=\"hidden\" id=\"vez\" value="+vez+" />"+
						"</table>";
					break;
					case 'B':
						tblEx = "<table align=\"center\" width=\"768\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
						  "<tr>"+
							"<td width=\"768\" height=\"283\" align=\"left\" valign=\"middle\"><table width=\"663\" border=\"0\" align=\"center\">"+
							  "<tr class=\"texto_2_mediano\">"+
								"<td width=\"17\" height=\"24\">A:</td>"+
								"<td width=\"661\">Good morning. How can I help you?</td>"+
							  "</tr>"+
							"</table>"+
							  "<table width=\"663\" border=\"0\" align=\"center\">"+
								"<tr class=\"texto_3_mediano\">"+
								  "<td width=\"17\" height=\"24\">B:</td>"+
								  "<td width=\"393\">Good morning. I would like to go to San Agustin. </td>"+
								  "<td width=\"15\" class=\"texto_1_mediano\">1.</td>"+
								  "<td width=\"120\">"+
									"<input name=\"ansL1E14A\" type=\"text\" class=\"raya_bg_cienPorcien3\" id=\"ansL1E14A\" />"+
								  "</td>"+
								  "<td width=\"96\"> can I there?</td>"+
								"</tr>"+
							"</table>"+
							  "<table width=\"663\" border=\"0\" align=\"center\">"+
								"<tr class=\"texto_2_mediano\">"+
								  "<td width=\"17\" height=\"24\">A:</td>"+
								  "<td width=\"134\">Well, I think you </td>"+
								  "<td width=\"16\" class=\"texto_1_mediano\">2.</td>"+
								  "<td width=\"120\">"+
									"<input name=\"ansL1E14B\" type=\"text\" class=\"raya_bg_cienPorcien3\" id=\"ansL1E14B\" />"+
								  "</td>"+
								  "<td>take a plane because by car it's 9  hours far. </td>"+
								"</tr>"+
							"</table>"+
							  "<table width=\"663\" border=\"0\" align=\"center\">"+
								"<tr class=\"texto_3_mediano\">"+
								  "<td width=\"17\" height=\"24\">B:</td>"+
								  "<td width=\"735\">Oh! I'd rather go by car to take a look at the view.</td>"+
								"</tr>"+
							"</table>"+
							  "<table width=\"663\" border=\"0\" align=\"center\">"+
								"<tr>"+
								  "<td width=\"19\" height=\"24\" class=\"texto_2_mediano\">A:</td>"+
								  "<td width=\"155\" class=\"texto_2_mediano\">In that case, you</td>"+
								  "<td width=\"16\" class=\"texto_1_mediano\">3.</td>"+
								  "<td width=\"120\">"+
									"<input name=\"ansL1E14C\" type=\"text\" class=\"raya_bg_cienPorcien3\" id=\"ansL1E14C\" />"+
								  "</td>"+
								  "<td width=\"384\" class=\"texto_2_mediano\"> take a bus to Neiva at the bus terminal.</td>"+
								"</tr>"+
							"</table>"+
							  "<table width=\"663\" border=\"0\" align=\"center\">"+
								"<tr>"+
								  "<td width=\"19\" height=\"24\" valign=\"top\" class=\"texto_3_mediano\">&nbsp;</td>"+
								  "<td width=\"133\" valign=\"top\" class=\"texto_2_mediano\">In Neiva, you</td>"+
								  "<td width=\"35\" valign=\"top\" class=\"texto_1_mediano\">4.</td>"+
								  "<td width=\"120\" valign=\"top\">"+
									"<input name=\"ansL1E14D\" type=\"text\" class=\"raya_bg_cienPorcien3\" id=\"ansL1E14D\" />"+
								  "</td>"+
								  "<td width=\"387\" valign=\"top\" class=\"texto_2_mediano\">take another bus to Pitalito and finally in</td>"+
								"</tr>"+
							  "</table>"+
							  "<table width=\"663\" border=\"0\" align=\"center\">"+
								"<tr>"+
								  "<td width=\"21\" height=\"24\">&nbsp;</td>"+
								  "<td width=\"105\" class=\"texto_2_mediano\">Pitalito you</td>"+
								  "<td width=\"16\" class=\"texto_1_mediano\">5.</td>"+
								  "<td width=\"120\">"+
									"<input name=\"ansL1E14E\" type=\"text\" class=\"raya_bg_cienPorcien3\" id=\"ansL1E14E\" />"+
								  "</td>"+
								  "<td width=\"432\" class=\"texto_2_mediano\">take the bus to San Agustin.</td>"+
								"</tr>"+
							"</table>"+
							  "<table width=\"663\" border=\"0\" align=\"center\">"+
								"<tr class=\"texto_3_mediano\">"+
								  "<td width=\"17\" height=\"24\">B:</td>"+
								  "<td width=\"735\">Sounds exciting!!!</td>"+
								"</tr>"+
							"</table>"+
							"</td>"+
						  "</tr><input type=\"hidden\" id=\"vez\" value="+vez+" />"+
						"</table>";
					break;
					case 'C':
					tblEx = "<table align=\"center\" width=\"768\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
					  "<tr>"+
						"<td width=\"768\" height=\"283\" align=\"left\" valign=\"middle\"><table width=\"643\" border=\"0\" align=\"center\">"+
						  "<tr class=\"texto_2_mediano\">"+
							"<td width=\"17\" height=\"24\">A:</td>"+
							"<td width=\"689\">I'm really excited about our trip to Buenaventura.</td>"+
						  "</tr>"+
						"</table>"+
						  "<table width=\"643\" border=\"0\" align=\"center\">"+
							"<tr class=\"texto_3_mediano\">"+
							  "<td width=\"17\" height=\"24\">B:</td>"+
							  "<td>Yeah, me too. It's such a cool place!</td>"+
							"</tr>"+
						"</table>"+
						  "<table width=\"643\" border=\"0\" align=\"center\">"+
							"<tr class=\"texto_2_mediano\">"+
							  "<td width=\"17\" height=\"24\">A:</td>"+
							  "<td width=\"222\">I think we can visit Malpelo.</td>"+
							  "<td width=\"15\" class=\"texto_1_mediano\">1.</td>"+
							  "<td width=\"120\">"+
								"<input name=\"ansL1E14A\" type=\"text\" class=\"raya_bg_cienPorcien3\" id=\"ansL1E14A\" />"+
							  "</td>"+
							  "<td width=\"50\">do we </td>"+
							  "<td width=\"15\" class=\"texto_1_mediano\">2.</td>"+
							  "<td width=\"120\">"+
								"<input name=\"ansL1E14B\" type=\"text\" class=\"raya_bg_cienPorcien3\" id=\"ansL1E14B\" />"+
							  "</td>"+
							  "<td width=\"50\">there?</td>"+
							"</tr>"+
						"</table>"+
						  "<table width=\"643\" border=\"0\" align=\"center\">"+
							"<tr class=\"texto_3_mediano\">"+
							  "<td width=\"17\" height=\"24\">B:</td>"+
							  "<td width=\"26\">We</td>"+
							  "<td width=\"15\" class=\"texto_1_mediano\">3.</td>"+
							  "<td width=\"10\">"+
								"<input name=\"ansL1E14C\" type=\"text\" class=\"raya_bg_cienPorcien3\" id=\"ansL1E14C\" />"+
							  "</td>"+
							  "<td width=\"626\">take a boat.</td>"+
							"</tr>"+
						"</table>"+
						  "<table width=\"643\" border=\"0\" align=\"center\">"+
							"<tr>"+
							  "<td width=\"19\" height=\"24\" class=\"texto_2_mediano\">A:</td>"+
							  "<td class=\"texto_2_mediano\">A boat? Is it safe?</td>"+
							"</tr>"+
						"</table>"+
						  "<table width=\"643\" border=\"0\" align=\"center\">"+
							"<tr>"+
							  "<td width=\"19\" height=\"24\" valign=\"top\" class=\"texto_3_mediano\">B:</td>"+
							  "<td valign=\"top\" class=\"texto_3_mediano\">Yeah, don't worry. It's a very long trip&hellip;like 40 hours or so. </td>"+
							"</tr>"+
						  "</table>"+
						  "<table width=\"643\" border=\"0\" align=\"center\">"+
							"<tr>"+
							  "<td width=\"17\" height=\"24\" class=\"texto_2_mediano\">A:</td>"+
							  "<td width=\"144\" class=\"texto_2_mediano\">Uh-oh! Maybe we </td>"+
							  "<td width=\"18\" class=\"texto_1_mediano\">4.</td>"+
							  "<td width=\"120\">"+
								"<input name=\"ansL1E14D\" type=\"text\" class=\"raya_bg_cienPorcien3\" id=\"ansL1E14D\" />"+
							  "</td>"+
							  "<td width=\"322\" class=\"texto_2_mediano\">take a plane!</td>"+
							"</tr>"+
						"</table>"+
						  "<table width=\"643\" border=\"0\" align=\"center\">"+
							"<tr class=\"texto_3_mediano\">"+
							  "<td width=\"17\" height=\"24\">B:</td>"+
							  "<td width=\"735\">Honey&hellip;we're going to an island&hellip;in the middle of the ocean!!!!</td>"+
							"</tr>"+
						"</table>"+
						  "<table width=\"643\" border=\"0\" align=\"center\">"+
							"<tr>"+
							  "<td width=\"17\" class=\"texto_2_mediano\">A:</td>"+
							  "<td width=\"689\" class=\"texto_2_mediano\">Oh!</td>"+
							"</tr>"+
						"</table></td>"+
					  "</tr><input type=\"hidden\" id=\"vez\" value="+vez+" />"+
					"</table>";
					break;
				}
			}
		
			$('#divTblEx14').html(tblEx); 
		}
		actualizardivCalL1E14(img);
	}
}

function actualizarBtnL1E14(idQst, idBtn)
{
	if(idBtn == 3)
		btn = "<table align=\"center\" background=\"../img/8.bg_refresh.png\" width=\"141\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"47\" height=\"47\" align=\"right\" valign=\"middle\"><img src=\"../img/8.btn_chulito_desab.png\" name=\"Image24\" width=\"25\" height=\"23\" border=\"0\" id=\"Image24\" /></td>"+
				"<td width=\"46\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E14('"+idQst+"',2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image25','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image25\" width=\"25\" height=\"23\" border=\"0\" id=\"Image25\" /></a></td>"+
				"<td width=\"48\" align=\"left\"><a href=\"#\" onclick=\"verificarL1E14('"+idQst+"',3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image30','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image30\" width=\"25\" height=\"23\" border=\"0\" id=\"Image30\" /></a></td>"+
			  "</tr>"+
			"</table>";
	else
		btn = "<table align=\"center\" background=\"../img/8.bg_refresh.png\" width=\"141\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"47\" height=\"47\" align=\"right\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E14('"+idQst+"',1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image24','','../img/8.btn_chulito2.png',1)\"><img src=\"../img/8.btn_chulito.png\" name=\"Image24\" width=\"25\" height=\"23\" border=\"0\" id=\"Image24\" /></a></td>"+
				"<td width=\"46\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E14('"+idQst+"',2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image25','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image25\" width=\"25\" height=\"23\" border=\"0\" id=\"Image25\" /></a></td>"+
				"<td width=\"48\" align=\"left\"><a href=\"#\" onclick=\"verificarL1E14('"+idQst+"',3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image30','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image30\" width=\"25\" height=\"23\" border=\"0\" id=\"Image30\" /></a></td>"+
			  "</tr>"+
			"</table>";
			
	$('#divBtn').html(btn);
}

function actualizardivCalL1E14(img)
{
	if(img != "")
		btn = "<img src=\"../img/"+img+".png\" width=\"30\" height=\"30\" />";
	else
		btn = "&nbsp;";
	
	$('#divCalL1E14').html(btn);
}

function cambiarDivL1Ex14(idQst)
{	
	if (idQst == 'A')
	{	
		prev = 'C';
		next = 'B';
		
		tblTxt = "<table align=\"center\" width=\"768\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"768\" height=\"283\" align=\"left\" valign=\"middle\"><table width=\"653\" border=\"0\" align=\"center\">"+
				  "<tr class=\"texto_2_mediano\">"+
					"<td width=\"17\" height=\"24\">A:</td>"+
					"<td width=\"735\">I love this park! </td>"+
				  "</tr>"+
				"</table>"+
				  "<table width=\"653\" border=\"0\" align=\"center\">"+
					"<tr class=\"texto_3_mediano\">"+
					  "<td width=\"17\" height=\"24\">B:</td>"+
					  "<td width=\"735\">Yeah, it's awesome. So, our vacations start this weekend. Any plans?</td>"+
					"</tr>"+
				"</table>"+
				  "<table width=\"653\" border=\"0\" align=\"center\">"+
					"<tr class=\"texto_2_mediano\">"+
					  "<td width=\"17\" height=\"24\">A:</td>"+
					  "<td width=\"626\">Actually, I'm planning to go out of town to Santander. They say it's wonderful!</td>"+
					"</tr>"+
				"</table>"+
				  "<table width=\"653\" border=\"0\" align=\"center\">"+
					"<tr class=\"texto_3_mediano\">"+
					  "<td width=\"17\" height=\"24\">B:</td>"+
					  "<td width=\"735\">It definitely is! Are you going by plane or by bus?</td>"+
					"</tr>"+
				"</table>"+
				  "<table width=\"653\" border=\"0\" align=\"center\">"+
					"<tr>"+
					  "<td width=\"17\" height=\"24\" class=\"texto_2_mediano\">A:</td>"+
					  "<td width=\"109\" class=\"texto_2_mediano\">I don't know.</td>"+
					  "<td width=\"15\" class=\"texto_1_mediano\">1.</td>"+
					  "<td width=\"120\">"+
						"<input name=\"ansL1E14A\" type=\"text\" class=\"raya_bg_cienPorcien3\" id=\"ansL1E14A\" />"+
					  "</td>"+
					  "<td width=\"145\" class=\"texto_2_mediano\"> is the best way to</td>"+
					  "<td width=\"15\" class=\"texto_1_mediano\">2.</td>"+
					  "<td width=\"120\">"+
						"<input name=\"ansL1E14B\" type=\"text\" class=\"raya_bg_cienPorcien3\" id=\"ansL1E14B\" />"+
					  "</td>"+
					  "<td width=\"78\" class=\"texto_2_mediano\">?</td>"+
					"</tr>"+
				"</table>"+
				  "<table width=\"653\" border=\"0\" align=\"center\">"+
					"<tr>"+
					  "<td width=\"17\" height=\"24\" valign=\"top\" class=\"texto_3_mediano\">B:</td>"+
					  "<td width=\"34\" valign=\"top\" class=\"texto_3_mediano\">You</td>"+
					  "<td width=\"16\" valign=\"top\" class=\"texto_1_mediano\">3.</td>"+
					  "<td width=\"120\" valign=\"top\">"+
						"<input name=\"ansL1E14C\" type=\"text\" class=\"raya_bg_cienPorcien3\" id=\"ansL1E14C\" />"+
					  "</td>"+
					  "<td width=\"444\" valign=\"top\" class=\"texto_3_mediano\">go by car or by bus if you want to take a look at the</td>"+
					"</tr>"+
				  "</table>"+
				  "<table width=\"653\" border=\"0\" align=\"center\">"+
					"<tr>"+
					  "<td width=\"19\" height=\"24\">&nbsp;</td>"+
					  "<td width=\"316\" class=\"texto_3_mediano\"> view, but if you want to arrive  fast, you</td>"+
					  "<td width=\"15\" class=\"texto_1_mediano\">4.</td>"+
					  "<td width=\"120\">"+
						"<input name=\"ansL1E14D\" type=\"text\" class=\"raya_bg_cienPorcien3\" id=\"ansL1E14D\" />"+
					  "</td>"+
					  "<td width=\"161\" class=\"texto_3_mediano\">take a plane.</td>"+
					"</tr>"+
				"</table>"+
				  "<table width=\"653\" border=\"0\" align=\"center\">"+
					"<tr class=\"texto_2_mediano\">"+
					  "<td width=\"17\" height=\"24\">A:</td>"+
					  "<td width=\"735\">Thanks for the advice. </td>"+
					"</tr>"+
				"</table>"+
				  "<table width=\"653\" border=\"0\" align=\"center\">"+
					"<tr class=\"texto_3_mediano\">"+
					  "<td width=\"17\" height=\"24\">B:</td>"+
					  "<td width=\"735\">No problem.</td>"+
					"</tr>"+
				"</table></td>"+
			  "</tr><input type=\"hidden\" id=\"vez\" value=0 />"+
			"</table>";
		
		tblBtn = "<table  align=\"center\" cellpadding=\"0\" cellspacing=\"0\"width=\"125\" border=\"0\">"+
			  "<tr>"+
				"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL1Ex14('A')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image18','','../img/btn_A_2.png',1)\"><img src=\"../img/btn_A_2.png\" name=\"Image18\" width=\"40\" height=\"53\" border=\"0\" id=\"Image18\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex14('B')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image19','','../img/btn_B_2.png',1)\"><img src=\"../img/btn_B_1.png\" name=\"Image19\" width=\"40\" height=\"53\" border=\"0\" id=\"Image19\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"39\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex14('C')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image20','','../img/btn_C_2.png',1)\"><img src=\"../img/btn_C_1.png\" name=\"Image20\" width=\"40\" height=\"53\" border=\"0\" id=\"Image20\" /></a></td>"+
			  "</tr>"+
			"</table>";
	}
	else if (idQst == 'B')
	{
		prev = 'A';
		next = 'C';
		
		tblTxt = "<table align=\"center\" width=\"768\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"768\" height=\"283\" align=\"left\" valign=\"middle\"><table width=\"663\" border=\"0\" align=\"center\">"+
					  "<tr class=\"texto_2_mediano\">"+
						"<td width=\"17\" height=\"24\">A:</td>"+
						"<td width=\"661\">Good morning. How can I help you?</td>"+
					  "</tr>"+
					"</table>"+
					  "<table width=\"663\" border=\"0\" align=\"center\">"+
						"<tr class=\"texto_3_mediano\">"+
						  "<td width=\"17\" height=\"24\">B:</td>"+
						  "<td width=\"393\">Good morning. I would like to go to San Agustin. </td>"+
						  "<td width=\"15\" class=\"texto_1_mediano\">1.</td>"+
						  "<td width=\"120\">"+
							"<input name=\"ansL1E14A\" type=\"text\" class=\"raya_bg_cienPorcien3\" id=\"ansL1E14A\" />"+
						  "</td>"+
						  "<td width=\"96\"> can I there?</td>"+
						"</tr>"+
					"</table>"+
					  "<table width=\"663\" border=\"0\" align=\"center\">"+
						"<tr class=\"texto_2_mediano\">"+
						  "<td width=\"17\" height=\"24\">A:</td>"+
						  "<td width=\"134\">Well, I think you </td>"+
						  "<td width=\"16\" class=\"texto_1_mediano\">2.</td>"+
						  "<td width=\"120\">"+
							"<input name=\"ansL1E14B\" type=\"text\" class=\"raya_bg_cienPorcien3\" id=\"ansL1E14B\" />"+
						  "</td>"+
						  "<td>take a plane because by car it's 9  hours far. </td>"+
						"</tr>"+
					"</table>"+
					  "<table width=\"663\" border=\"0\" align=\"center\">"+
						"<tr class=\"texto_3_mediano\">"+
						  "<td width=\"17\" height=\"24\">B:</td>"+
						  "<td width=\"735\">Oh! I'd rather go by car to take a look at the view.</td>"+
						"</tr>"+
					"</table>"+
					  "<table width=\"663\" border=\"0\" align=\"center\">"+
						"<tr>"+
						  "<td width=\"19\" height=\"24\" class=\"texto_2_mediano\">A:</td>"+
						  "<td width=\"155\" class=\"texto_2_mediano\">In that case, you</td>"+
						  "<td width=\"16\" class=\"texto_1_mediano\">3.</td>"+
						  "<td width=\"120\">"+
							"<input name=\"ansL1E14C\" type=\"text\" class=\"raya_bg_cienPorcien3\" id=\"ansL1E14C\" />"+
						  "</td>"+
						  "<td width=\"384\" class=\"texto_2_mediano\"> take a bus to Neiva at the bus terminal.</td>"+
						"</tr>"+
					"</table>"+
					  "<table width=\"663\" border=\"0\" align=\"center\">"+
						"<tr>"+
						  "<td width=\"19\" height=\"24\" valign=\"top\" class=\"texto_3_mediano\">&nbsp;</td>"+
						  "<td width=\"133\" valign=\"top\" class=\"texto_2_mediano\">In Neiva, you</td>"+
						  "<td width=\"35\" valign=\"top\" class=\"texto_1_mediano\">4.</td>"+
						  "<td width=\"120\" valign=\"top\">"+
							"<input name=\"ansL1E14D\" type=\"text\" class=\"raya_bg_cienPorcien3\" id=\"ansL1E14D\" />"+
						  "</td>"+
						  "<td width=\"387\" valign=\"top\" class=\"texto_2_mediano\">take another bus to Pitalito and finally in</td>"+
						"</tr>"+
					  "</table>"+
					  "<table width=\"663\" border=\"0\" align=\"center\">"+
						"<tr>"+
						  "<td width=\"21\" height=\"24\">&nbsp;</td>"+
						  "<td width=\"105\" class=\"texto_2_mediano\">Pitalito you</td>"+
						  "<td width=\"16\" class=\"texto_1_mediano\">5.</td>"+
						  "<td width=\"120\">"+
							"<input name=\"ansL1E14E\" type=\"text\" class=\"raya_bg_cienPorcien3\" id=\"ansL1E14E\" />"+
						  "</td>"+
						  "<td width=\"432\" class=\"texto_2_mediano\">take the bus to San Agustin.</td>"+
						"</tr>"+
					"</table>"+
					  "<table width=\"663\" border=\"0\" align=\"center\">"+
						"<tr class=\"texto_3_mediano\">"+
						  "<td width=\"17\" height=\"24\">B:</td>"+
						  "<td width=\"735\">Sounds exciting!!!</td>"+
						"</tr>"+
					"</table>"+
					"</td>"+
				  "</tr><input type=\"hidden\" id=\"vez\" value=0 />"+
				"</table>";
		
		tblBtn = "<table  align=\"center\" cellpadding=\"0\" cellspacing=\"0\"width=\"125\" border=\"0\">"+
			  "<tr>"+
				"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL1Ex14('A')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image18','','../img/btn_A_2.png',1)\"><img src=\"../img/btn_A_1.png\" name=\"Image18\" width=\"40\" height=\"53\" border=\"0\" id=\"Image18\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex14('B')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image19','','../img/btn_B_2.png',1)\"><img src=\"../img/btn_B_2.png\" name=\"Image19\" width=\"40\" height=\"53\" border=\"0\" id=\"Image19\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"39\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex14('C')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image20','','../img/btn_C_2.png',1)\"><img src=\"../img/btn_C_1.png\" name=\"Image20\" width=\"40\" height=\"53\" border=\"0\" id=\"Image20\" /></a></td>"+
			  "</tr>"+
			"</table>";
	}
	else if (idQst == 'C')
	{
		prev = 'B';
		next = 'A';
	
		tblTxt = "<table align=\"center\" width=\"768\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"768\" height=\"283\" align=\"left\" valign=\"middle\"><table width=\"643\" border=\"0\" align=\"center\">"+
					  "<tr class=\"texto_2_mediano\">"+
						"<td width=\"17\" height=\"24\">A:</td>"+
						"<td width=\"689\">I'm really excited about our trip to Buenaventura.</td>"+
					  "</tr>"+
					"</table>"+
					  "<table width=\"643\" border=\"0\" align=\"center\">"+
						"<tr class=\"texto_3_mediano\">"+
						  "<td width=\"17\" height=\"24\">B:</td>"+
						  "<td>Yeah, me too. It's such a cool place!</td>"+
						"</tr>"+
					"</table>"+
					  "<table width=\"643\" border=\"0\" align=\"center\">"+
						"<tr class=\"texto_2_mediano\">"+
						  "<td width=\"17\" height=\"24\">A:</td>"+
						  "<td width=\"222\">I think we can visit Malpelo.</td>"+
						  "<td width=\"15\" class=\"texto_1_mediano\">1.</td>"+
						  "<td width=\"120\">"+
							"<input name=\"ansL1E14A\" type=\"text\" class=\"raya_bg_cienPorcien3\" id=\"ansL1E14A\" />"+
						  "</td>"+
						  "<td width=\"50\">do we </td>"+
						  "<td width=\"15\" class=\"texto_1_mediano\">2.</td>"+
						  "<td width=\"120\">"+
							"<input name=\"ansL1E14B\" type=\"text\" class=\"raya_bg_cienPorcien3\" id=\"ansL1E14B\" />"+
						  "</td>"+
						  "<td width=\"50\">there?</td>"+
						"</tr>"+
					"</table>"+
					  "<table width=\"643\" border=\"0\" align=\"center\">"+
						"<tr class=\"texto_3_mediano\">"+
						  "<td width=\"17\" height=\"24\">B:</td>"+
						  "<td width=\"26\">We</td>"+
						  "<td width=\"15\" class=\"texto_1_mediano\">3.</td>"+
						  "<td width=\"10\">"+
							"<input name=\"ansL1E14C\" type=\"text\" class=\"raya_bg_cienPorcien3\" id=\"ansL1E14C\" />"+
						  "</td>"+
						  "<td width=\"626\">take a boat.</td>"+
						"</tr>"+
					"</table>"+
					  "<table width=\"643\" border=\"0\" align=\"center\">"+
						"<tr>"+
						  "<td width=\"19\" height=\"24\" class=\"texto_2_mediano\">A:</td>"+
						  "<td class=\"texto_2_mediano\">A boat? Is it safe?</td>"+
						"</tr>"+
					"</table>"+
					  "<table width=\"643\" border=\"0\" align=\"center\">"+
						"<tr>"+
						  "<td width=\"19\" height=\"24\" valign=\"top\" class=\"texto_3_mediano\">B:</td>"+
						  "<td valign=\"top\" class=\"texto_3_mediano\">Yeah, don't worry. It's a very long trip&hellip;like 40 hours or so. </td>"+
						"</tr>"+
					  "</table>"+
					  "<table width=\"643\" border=\"0\" align=\"center\">"+
						"<tr>"+
						  "<td width=\"17\" height=\"24\" class=\"texto_2_mediano\">A:</td>"+
						  "<td width=\"144\" class=\"texto_2_mediano\">Uh-oh! Maybe we </td>"+
						  "<td width=\"18\" class=\"texto_1_mediano\">4.</td>"+
						  "<td width=\"120\">"+
							"<input name=\"ansL1E14D\" type=\"text\" class=\"raya_bg_cienPorcien3\" id=\"ansL1E14D\" />"+
						  "</td>"+
						  "<td width=\"322\" class=\"texto_2_mediano\">take a plane!</td>"+
						"</tr>"+
					"</table>"+
					  "<table width=\"643\" border=\"0\" align=\"center\">"+
						"<tr class=\"texto_3_mediano\">"+
						  "<td width=\"17\" height=\"24\">B:</td>"+
						  "<td width=\"735\">Honey&hellip;we're going to an island&hellip;in the middle of the ocean!!!!</td>"+
						"</tr>"+
					"</table>"+
					  "<table width=\"643\" border=\"0\" align=\"center\">"+
						"<tr>"+
						  "<td width=\"17\" class=\"texto_2_mediano\">A:</td>"+
						  "<td width=\"689\" class=\"texto_2_mediano\">Oh!</td>"+
						"</tr>"+
					"</table></td>"+
				  "</tr><input type=\"hidden\" id=\"vez\" value=0 />"+
				"</table>";
	
		tblBtn = "<table  align=\"center\" cellpadding=\"0\" cellspacing=\"0\"width=\"125\" border=\"0\">"+
			  "<tr>"+
				"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL1Ex14('A')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image18','','../img/btn_A_2.png',1)\"><img src=\"../img/btn_A_1.png\" name=\"Image18\" width=\"40\" height=\"53\" border=\"0\" id=\"Image18\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex14('B')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image19','','../img/btn_B_2.png',1)\"><img src=\"../img/btn_B_1.png\" name=\"Image19\" width=\"40\" height=\"53\" border=\"0\" id=\"Image19\" /></a></td>"+
				"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
				"<td width=\"39\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL1Ex14('C')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image20','','../img/btn_C_2.png',1)\"><img src=\"../img/btn_C_2.png\" name=\"Image20\" width=\"40\" height=\"53\" border=\"0\" id=\"Image20\" /></a></td>"+
			  "</tr>"+
			"</table>";
	}
	html = "<table width=\"766\" border=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"322\" height=\"107\" align=\"left\" valign=\"middle\"><img src=\"../img/titulos/L1/L1_exer_14.png\" width=\"323\" height=\"116\" /></td>"+
			"<td width=\"323\" align=\"left\" valign=\"bottom\">"+tblBtn+
			"</td>"+
			"<td width=\"117\" align=\"center\" valign=\"middle\"><a href=\"#\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image32','','../img/btn_ejemplo_2.png',1)\"><img src=\"../img/btn_ejemplo_1.png\" name=\"Image32\" width=\"105\" height=\"100\" border=\"0\" id=\"Image32\" /></a></td>"+
			"</tr>"+
		"</table>"+
			"<div id=\"divTblEx14\">"+tblTxt+
			"</div>"+
			"<table align=\"center\" width=\"50\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td height=\"55\"><div id=\"divCalL1E14\"></div></td>"+
				"<td>"+
			"<div id=\"divBtn\"><table align=\"center\" background=\"../img/8.bg_refresh.png\" width=\"141\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"47\" height=\"47\" align=\"right\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E14('"+idQst+"',1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image24','','../img/8.btn_chulito2.png',1)\"><img src=\"../img/8.btn_chulito.png\" name=\"Image24\" width=\"25\" height=\"23\" border=\"0\" id=\"Image24\" /></a></td>"+
				"<td width=\"46\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL1E14('"+idQst+"',2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image25','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image25\" width=\"25\" height=\"23\" border=\"0\" id=\"Image25\" /></a></td>"+
				"<td width=\"48\" align=\"left\"><img src=\"../img/8.btn_ojo_desab.png\" name=\"Image30\" width=\"25\" height=\"23\" border=\"0\" id=\"Image30\" /></td>"+
			  "</tr>"+
			"</table></div></td>"+
			  "</tr>"+
			"</table>";
	
	$('#contenido').html(html);
}
/* Exercise 14 */


/* Quiz */
function cambiarDivL1Q1(idQst)
{
	if(idQst == 1)
	{
		jpg = "img_L1p";
		tblBtn = "<table width=\"52\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">"+
				  "<tr>"+
					"<td width=\"52\"><a href=\"#\" onclick=\"cambiarDivL1Q1(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image10','','../img/btn_1a_2.png',1)\"><img src=\"../img/btn_1a_2.png\" name=\"Image10\" width=\"53\" height=\"40\" border=\"0\" id=\"Image10\" /></a></td>"+
				  "</tr>"+
				  "<tr style=\"\">"+
					"<td height=\"1\" align=\"left\" valign=\"top\"><img src=\"../img/9.img_divivionHor.png\" width=\"36\" height=\"3\" /></td>"+
				  "</tr>"+
				  "<tr>"+
					"<td><a href=\"#\" onclick=\"cambiarDivL1Q1(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image12','','../img/btn_2a_2.png',1)\"><img src=\"../img/btn_2a_1.png\" name=\"Image12\" width=\"53\" height=\"40\" border=\"0\" id=\"Image12\" /></a></td>"+
				  "</tr>"+
				  "<tr>"+
					"<td height=\"2\"><img src=\"../img/9.img_divivionHor.png\" width=\"36\" height=\"3\" /></td>"+
				  "</tr>"+
				  "<tr>"+
					"<td><a href=\"#\" onclick=\"cambiarDivL1Q1(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/btn_3a_2.png',1)\"><img src=\"../img/btn_3a_1.png\" name=\"Image16\" width=\"53\" height=\"40\" border=\"0\" id=\"Image16\" /></a></td>"+
				  "</tr>"+
				  "<tr>"+
					"<td height=\"2\"><img src=\"../img/9.img_divivionHor.png\" width=\"37\" height=\"3\" /></td>"+
				  "</tr>"+
				  "<tr>"+
					"<td><a href=\"#\" onclick=\"cambiarDivL1Q1(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image17','','../img/btn_4a_2.png',1)\"><img src=\"../img/btn_4a_1.png\" name=\"Image17\" width=\"53\" height=\"40\" border=\"0\" id=\"Image17\" /></a></td>"+
				  "</tr>"+
				  "<tr>"+
					"<td height=\"2\"><img src=\"../img/9.img_divivionHor.png\" width=\"37\" height=\"3\" /></td>"+
				  "</tr>"+
				  "<tr>"+
					"<td height=\"40\"><a href=\"#\" onclick=\"cambiarDivL1Q1(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image18','','../img/btn_5a_2.png',1)\"><img src=\"../img/btn_5a_1.png\" name=\"Image18\" width=\"53\" height=\"40\" border=\"0\" id=\"Image18\" /></a></td>"+
				  "</tr>"+
				  "</table>";
	}
	else if(idQst == 2)
	{
		jpg = "img_L1p";
		tblBtn = "<table width=\"52\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">"+
				  "<tr>"+
					"<td width=\"52\"><a href=\"#\" onclick=\"cambiarDivL1Q1(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image10','','../img/btn_1a_2.png',1)\"><img src=\"../img/btn_1a_1.png\" name=\"Image10\" width=\"53\" height=\"40\" border=\"0\" id=\"Image10\" /></a></td>"+
				  "</tr>"+
				  "<tr style=\"\">"+
					"<td height=\"1\" align=\"left\" valign=\"top\"><img src=\"../img/9.img_divivionHor.png\" width=\"36\" height=\"3\" /></td>"+
				  "</tr>"+
				  "<tr>"+
					"<td><a href=\"#\" onclick=\"cambiarDivL1Q1(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image12','','../img/btn_2a_2.png',1)\"><img src=\"../img/btn_2a_2.png\" name=\"Image12\" width=\"53\" height=\"40\" border=\"0\" id=\"Image12\" /></a></td>"+
				  "</tr>"+
				  "<tr>"+
					"<td height=\"2\"><img src=\"../img/9.img_divivionHor.png\" width=\"36\" height=\"3\" /></td>"+
				  "</tr>"+
				  "<tr>"+
					"<td><a href=\"#\" onclick=\"cambiarDivL1Q1(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/btn_3a_2.png',1)\"><img src=\"../img/btn_3a_1.png\" name=\"Image16\" width=\"53\" height=\"40\" border=\"0\" id=\"Image16\" /></a></td>"+
				  "</tr>"+
				  "<tr>"+
					"<td height=\"2\"><img src=\"../img/9.img_divivionHor.png\" width=\"37\" height=\"3\" /></td>"+
				  "</tr>"+
				  "<tr>"+
					"<td><a href=\"#\" onclick=\"cambiarDivL1Q1(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image17','','../img/btn_4a_2.png',1)\"><img src=\"../img/btn_4a_1.png\" name=\"Image17\" width=\"53\" height=\"40\" border=\"0\" id=\"Image17\" /></a></td>"+
				  "</tr>"+
				  "<tr>"+
					"<td height=\"2\"><img src=\"../img/9.img_divivionHor.png\" width=\"37\" height=\"3\" /></td>"+
				  "</tr>"+
				  "<tr>"+
					"<td height=\"40\"><a href=\"#\" onclick=\"cambiarDivL1Q1(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image18','','../img/btn_5a_2.png',1)\"><img src=\"../img/btn_5a_1.png\" name=\"Image18\" width=\"53\" height=\"40\" border=\"0\" id=\"Image18\" /></a></td>"+
				  "</tr>"+
				  "</table>";
	}
	else if(idQst == 3)
	{
		jpg = "img_L1p";
		tblBtn = "<table width=\"52\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">"+
				  "<tr>"+
					"<td width=\"52\"><a href=\"#\" onclick=\"cambiarDivL1Q1(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image10','','../img/btn_1a_2.png',1)\"><img src=\"../img/btn_1a_1.png\" name=\"Image10\" width=\"53\" height=\"40\" border=\"0\" id=\"Image10\" /></a></td>"+
				  "</tr>"+
				  "<tr style=\"\">"+
					"<td height=\"1\" align=\"left\" valign=\"top\"><img src=\"../img/9.img_divivionHor.png\" width=\"36\" height=\"3\" /></td>"+
				  "</tr>"+
				  "<tr>"+
					"<td><a href=\"#\" onclick=\"cambiarDivL1Q1(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image12','','../img/btn_2a_2.png',1)\"><img src=\"../img/btn_2a_1.png\" name=\"Image12\" width=\"53\" height=\"40\" border=\"0\" id=\"Image12\" /></a></td>"+
				  "</tr>"+
				  "<tr>"+
					"<td height=\"2\"><img src=\"../img/9.img_divivionHor.png\" width=\"36\" height=\"3\" /></td>"+
				  "</tr>"+
				  "<tr>"+
					"<td><a href=\"#\" onclick=\"cambiarDivL1Q1(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/btn_3a_2.png',1)\"><img src=\"../img/btn_3a_2.png\" name=\"Image16\" width=\"53\" height=\"40\" border=\"0\" id=\"Image16\" /></a></td>"+
				  "</tr>"+
				  "<tr>"+
					"<td height=\"2\"><img src=\"../img/9.img_divivionHor.png\" width=\"37\" height=\"3\" /></td>"+
				  "</tr>"+
				  "<tr>"+
					"<td><a href=\"#\" onclick=\"cambiarDivL1Q1(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image17','','../img/btn_4a_2.png',1)\"><img src=\"../img/btn_4a_1.png\" name=\"Image17\" width=\"53\" height=\"40\" border=\"0\" id=\"Image17\" /></a></td>"+
				  "</tr>"+
				  "<tr>"+
					"<td height=\"2\"><img src=\"../img/9.img_divivionHor.png\" width=\"37\" height=\"3\" /></td>"+
				  "</tr>"+
				  "<tr>"+
					"<td height=\"40\"><a href=\"#\" onclick=\"cambiarDivL1Q1(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image18','','../img/btn_5a_2.png',1)\"><img src=\"../img/btn_5a_1.png\" name=\"Image18\" width=\"53\" height=\"40\" border=\"0\" id=\"Image18\" /></a></td>"+
				  "</tr>"+
				  "</table>";
	}
	else if(idQst == 4)
	{
		jpg = "img_L1p";
		tblBtn = "<table width=\"52\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">"+
				  "<tr>"+
					"<td width=\"52\"><a href=\"#\" onclick=\"cambiarDivL1Q1(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image10','','../img/btn_1a_2.png',1)\"><img src=\"../img/btn_1a_1.png\" name=\"Image10\" width=\"53\" height=\"40\" border=\"0\" id=\"Image10\" /></a></td>"+
				  "</tr>"+
				  "<tr style=\"\">"+
					"<td height=\"1\" align=\"left\" valign=\"top\"><img src=\"../img/9.img_divivionHor.png\" width=\"36\" height=\"3\" /></td>"+
				  "</tr>"+
				  "<tr>"+
					"<td><a href=\"#\" onclick=\"cambiarDivL1Q1(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image12','','../img/btn_2a_2.png',1)\"><img src=\"../img/btn_2a_1.png\" name=\"Image12\" width=\"53\" height=\"40\" border=\"0\" id=\"Image12\" /></a></td>"+
				  "</tr>"+
				  "<tr>"+
					"<td height=\"2\"><img src=\"../img/9.img_divivionHor.png\" width=\"36\" height=\"3\" /></td>"+
				  "</tr>"+
				  "<tr>"+
					"<td><a href=\"#\" onclick=\"cambiarDivL1Q1(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/btn_3a_2.png',1)\"><img src=\"../img/btn_3a_1.png\" name=\"Image16\" width=\"53\" height=\"40\" border=\"0\" id=\"Image16\" /></a></td>"+
				  "</tr>"+
				  "<tr>"+
					"<td height=\"2\"><img src=\"../img/9.img_divivionHor.png\" width=\"37\" height=\"3\" /></td>"+
				  "</tr>"+
				  "<tr>"+
					"<td><a href=\"#\" onclick=\"cambiarDivL1Q1(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image17','','../img/btn_4a_2.png',1)\"><img src=\"../img/btn_4a_2.png\" name=\"Image17\" width=\"53\" height=\"40\" border=\"0\" id=\"Image17\" /></a></td>"+
				  "</tr>"+
				  "<tr>"+
					"<td height=\"2\"><img src=\"../img/9.img_divivionHor.png\" width=\"37\" height=\"3\" /></td>"+
				  "</tr>"+
				  "<tr>"+
					"<td height=\"40\"><a href=\"#\" onclick=\"cambiarDivL1Q1(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image18','','../img/btn_5a_2.png',1)\"><img src=\"../img/btn_5a_1.png\" name=\"Image18\" width=\"53\" height=\"40\" border=\"0\" id=\"Image18\" /></a></td>"+
				  "</tr>"+
				  "</table>";
	}
	else if(idQst == 5)
	{
		jpg = "img_L1p";
		tblBtn = "<table width=\"52\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">"+
				  "<tr>"+
					"<td width=\"52\"><a href=\"#\" onclick=\"cambiarDivL1Q1(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image10','','../img/btn_1a_2.png',1)\"><img src=\"../img/btn_1a_1.png\" name=\"Image10\" width=\"53\" height=\"40\" border=\"0\" id=\"Image10\" /></a></td>"+
				  "</tr>"+
				  "<tr style=\"\">"+
					"<td height=\"1\" align=\"left\" valign=\"top\"><img src=\"../img/9.img_divivionHor.png\" width=\"36\" height=\"3\" /></td>"+
				  "</tr>"+
				  "<tr>"+
					"<td><a href=\"#\" onclick=\"cambiarDivL1Q1(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image12','','../img/btn_2a_2.png',1)\"><img src=\"../img/btn_2a_1.png\" name=\"Image12\" width=\"53\" height=\"40\" border=\"0\" id=\"Image12\" /></a></td>"+
				  "</tr>"+
				  "<tr>"+
					"<td height=\"2\"><img src=\"../img/9.img_divivionHor.png\" width=\"36\" height=\"3\" /></td>"+
				  "</tr>"+
				  "<tr>"+
					"<td><a href=\"#\" onclick=\"cambiarDivL1Q1(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/btn_3a_2.png',1)\"><img src=\"../img/btn_3a_1.png\" name=\"Image16\" width=\"53\" height=\"40\" border=\"0\" id=\"Image16\" /></a></td>"+
				  "</tr>"+
				  "<tr>"+
					"<td height=\"2\"><img src=\"../img/9.img_divivionHor.png\" width=\"37\" height=\"3\" /></td>"+
				  "</tr>"+
				  "<tr>"+
					"<td><a href=\"#\" onclick=\"cambiarDivL1Q1(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image17','','../img/btn_4a_2.png',1)\"><img src=\"../img/btn_4a_1.png\" name=\"Image17\" width=\"53\" height=\"40\" border=\"0\" id=\"Image17\" /></a></td>"+
				  "</tr>"+
				  "<tr>"+
					"<td height=\"2\"><img src=\"../img/9.img_divivionHor.png\" width=\"37\" height=\"3\" /></td>"+
				  "</tr>"+
				  "<tr>"+
					"<td height=\"40\"><a href=\"#\" onclick=\"cambiarDivL1Q1(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image18','','../img/btn_5a_2.png',1)\"><img src=\"../img/btn_5a_2.png\" name=\"Image18\" width=\"53\" height=\"40\" border=\"0\" id=\"Image18\" /></a></td>"+
				  "</tr>"+
				  "</table>";
	}
	tbl = "<table align=\"center\" width=\"767\" border=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"765\" height=\"391\" align=\"center\" valign=\"top\"><table width=\"766\" border=\"0\">"+
			  "<tr>"+
				"<td height=\"146\"><img src=\"../img/titulos/L1/L1_Quiz_a.png\" width=\"359\" height=\"134\" /></td>"+
				"</tr>"+
			"</table>"+
			"<table width=\"770\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">"+
			  "<tr>"+
				"<td width=\"298\" height=\"313\" align=\"right\"><img src=\"../img/"+jpg+".png\" width=\"298\" height=\"245\" /></td>"+
				"<td width=\"54\" align=\"left\" valign=\"middle\">"+tblBtn+"</td>"+
				"<td width=\"414\" align=\"center\"><table width=\"303\" border=\"0\">"+
				  "<tr>"+
					"<td width=\"297\" height=\"167\" align=\"center\" valign=\"middle\" background=\"../img/bg_cuadro4.png\"><table width=\"250\" border=\"0\">"+
					  "<tr>"+
						"<td width=\"18\" class=\"texto_1_mediano\">A:</td>"+
						"<td width=\"222\">"+
						  "<input name=\"iptAnsQA\" type=\"text\" class=\"raya_bg_cienPorcien\" id=\"iptAnsQA\" />"+
						"</td>"+
					  "</tr>"+
					  "<tr>"+
						"<td class=\"texto_3_mediano\">B:</td>"+
						"<td>"+
						  "<input name=\"iptAnsQB\" type=\"text\" class=\"raya_bg_cienPorcien2\" id=\"iptAnsQB\" />"+
						"</td>"+
					  "</tr>"+
					"</table></td>"+
				  "</tr>"+
				"</table>"+
				  "<table width=\"48\" border=\"0\">"+
					"<tr>"+
					  "<td width=\"42\" align=\"center\" valign=\"middle\"><a href=\"#\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image19','','../img/16.sobre_2.png',1)\"><img src=\"../img/16.sobre_1.png\" name=\"Image19\" width=\"45\" height=\"40\" border=\"0\" id=\"btnSend\" /></a></td>"+
					"</tr>"+
				  "</table></td>"+
			  "</tr>"+
			  "</table>"+
			"</td>"+
				"</tr>"+
          "</table>";
	$('#contenido').html(tbl);
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
		/*"</td>"+
		"<td align=\"right\" valign=\"top\"><table align=\"center\" width=\"236\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"124\" height=\"25\" align=\"left\" class=\"texto_1_Pequeno\">* Antonio Garc�a</td>"+
			"<td width=\"112\" align=\"left\" class=\"texto_2_pequeno\">* New York</td>"+
			"</tr>"+
		  "<tr>"+
			"<td height=\"25\" align=\"left\" class=\"texto_2_pequeno\">* Madrid</td>"+
			"<td align=\"left\" class=\"texto_1_Pequeno\">* Sandra Bingham</td>"+
			"</tr>"+
		  "<tr>"+
			"<td height=\"25\" align=\"left\" class=\"texto_1_Pequeno\">* Barbara Giuliani</td>"+
			"<td align=\"left\" class=\"texto_2_pequeno\">*  London</td>"+
			"</tr>"+
		"</table>"+
		"<table align=\"center\" width=\"309\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
	  "<tr>"+
		"<td width=\"309\" height=\"146\" align=\"center\" background=\"../img/bg_Cuadro5.png\">"+
		  "<textarea name=\"textarea\" cols=\"32\" rows=\"5\" class=\"texco_caja\" id=\"textarea\"></textarea>"+
		"</td>"+
	  "</tr>"+
	  "<tr>"+
		"<td height=\"18\" align=\"center\" valign=\"top\" class=\"texto_1_Pequeno\">Record the conversations. Submit to your teacher.</td>"+
	  "</tr>"+
	"</table>";*/
	$('#divTblQ2').html(tbl);
}
