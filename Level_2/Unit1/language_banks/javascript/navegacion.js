function cargarCabeza(idLss, idExe)
{
	selLess = listarLss(idLss);
                  //selExe=listarBanco(id)
	selban = listarBanco(idLss);
//	selExe = "";
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
          '<select name="select3" class="menuA" id="selExercise" onChange="mostrarDivPrinc(this.value);">'+
          '</select>'+
		'</div>'+
        '</td>'+
        '<td width="108" align="center" valign="bottom"><form id="form4" name="form4" method="post" action="">'+
          '<select name="select4" class="menu" id="select4" onChange="cambiarBanco(this.value);">'+selban+
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
function cambiarBanco(idbank){
                 document.location.href='../language_banks/L'+idbank+'_Bank_1.html';
}
function listarBanco(bank){
	if(bank == 1)
		html = "<option></option>"+
		"<option value=\"1\" selected>Bank 1</option>"+
		"<option value=\"2\">Bank 2</option>"+
		"<option value=\"3\">Bank 3</option>";
	else if(bank == 2)
		html = "<option></option>"+
		"<option value=\"1\">Bank 1</option>"+
		"<option value=\"2\" selected>Bank 2</option>"+
		"<option value=\"3\">Bank 3</option>";
	else if(bank == 3)
		html = "<option></option>"+
		"<option value=\"1\">Bank 1</option>"+
		"<option value=\"2\">Bank 2</option>"+
		"<option value=\"3\" selected>Bank 3</option>";
                  return html
    
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
	
	opt = "<select name=\"select3\" class=\"menu\" id=\"selExercise\" onChange=\"mostrarDivPrinc(this.value);\">"+
			"<option value='0'></option>";
	/*if (idLss == 0)
		text = "";
	else if (idLss == 100)
		document.location.href='index.html';
	else if (idLss == 1)
	{
		for (i=2; i<3; i++)
		{
			text = "Bank";
			if (i == 2)
				text = text+" 1";
                            
			if (i == idExer)
				opt += '<option value="'+i+'" selected>'+text+'</option>';	
			else
				opt += '<option value="'+i+'">'+text+'</option>';
		}
	}
	else if(idLss == 2)
	{
		for (i=3; i<4; i++)
                                    {
                                                      text = "Bank";
			if (i == 4)
				text = text+" 1";
			
			if (i == idExer)
				opt += '<option value="'+i+'" selected>'+text+'</option>';	
			else
				opt += '<option value="'+i+'">'+text+'</option>';
		}	
	}
	else if(idLss == 3)
	{
		for (i=4; i<5; i++)
		{
                                                      text = "Bank";
			if (i == 5)
				text = text+" 1";
			//opt += '<option value="'+i+'">'+text+'</option>';	
			
			if (i == idExer)
				opt += '<option value="'+i+'" selected>'+text+'</option>';	
			else
				opt += '<option value="'+i+'">'+text+'</option>';
		}
	}*/
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
		document.location.href='L1_Bank_1.html';
	else if (idL == 3)
		document.location.href='L2_Bank_1.html';
	else if (idL == 4)
		document.location.href='L3_Bank_1.html';
}

