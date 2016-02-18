function cargarCabeza(idExe)
{
	//selExe = listarExer(idLss);
	selExe = listarExer(idExe);
	res = "<table align=\"center\" width=\"730\" border=\"0\" cellspacing=\"0\">"+
	  "<tr>"+
		"<td width=\"136\" height=\"95\" align=\"left\" valign=\"middle\"><img src=\"../../img/1.Logo.png\" width=\"115\" height=\"66\" usemap=\"#Map\" border=\"0\" /></td>"+
		"<td width=\"590\" align=\"right\" valign=\"middle\" background=\"../../img/3.bg_heder.png\"><table width=\"556\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"110\" height=\"63\" align=\"center\" valign=\"bottom\">"+
			  "<select name=\"select\" class=\"menu\" id=\"selUnit\" onChange=\"cambiarUnit(this.value);\">"+
				"<option value=\"1\" selected>Unit 1</option>"+
				//"<option value=\"2\">Unit 2</option>"+
				//"<option value=\"3\">Unit 3</option>"+
			  "</select>"+
			"</td>"+
			"<td width=\"115\" align=\"center\" valign=\"bottom\">"+
			  "<select name=\"select2\" class=\"menu\" id=\"selLesson\">"+
				"<option value=\"\">--</option>"+
			  "</select>"+
			"</td>"+
			"<td width=\"120\" align=\"center\" valign=\"bottom\">"+
			"<div id=\"divSelExer\">"+
			  "<select name=\"select3\" class=\"menuA\" id=\"selExercise\" onChange=\"mostrarDivPrinc(this.value);\">"+selExe+
			  "</select>"+
			"</div>"+
			"</td>"+
			"<td width=\"108\" align=\"center\" valign=\"middle\"><a href=\"index.html\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image8','','../../img/7.btn_voca_2.png',1)\"><img src=\"../../img/7.btn_voca_2.png\" name=\"Image8\" width=\"85\" height=\"50\" border=\"0\" id=\"Image8\" /></a></td>"+
			"<td width=\"81\" align=\"center\" valign=\"middle\"><a href=\"../../games/index.html\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image7','','../../img/7.btn_game_2.png',1)\"><img src=\"../../img/7.btn_game_1.png\" name=\"Image7\" width=\"76\" height=\"50\" border=\"0\" id=\"Image7\" /></a></td>"+
		  "</tr>"+
		"</table></td>"+
	  "</tr>"+
	"</table>";
	
	$('#header').html(res);
	listarExer(idExe);
}

function cambiarUnit(idUnit)
{
	if (idUnit == 1)
		document.location.href='../../Unit1/index.html';
	else if (idUnit == 2)
		document.location.href='../../Unit2/index.html';
	else if (idUnit == 3)
		document.location.href='../../Unit3/index.html';
}

function listarExer(idExer)
{
	
	/*if(idLss == 0)
		alert("hola");
		//document.location.href='index.html';
	else{*/
	opt = "<select name=\"select3\" class=\"menuA\" id=\"selExercise\" onChange=\"mostrarDivPrinc(this.value);\">"+
			"<option value='0'></option>";
	for (i=1; i<=2; i++)
	{
		if (i == 1)
			text = "Ocupations";
		else if (i == 2)
			text = "Studies";
		
		if (i == idExer)
			opt += '<option value="'+i+'" selected>'+text+'</option>';	
		else
			opt += '<option value="'+i+'">'+text+'</option>';
	}
	opt = opt +"</select>";
	$('#divSelExer').html(opt); 
}

//function mostrarDivPrinc(desde,idL)
function mostrarDivPrinc(idL)
{
	//alert("hola");
	if (idL == 1)
		document.location.href='vocabulary_1.html';
	else if (idL == 2)
		document.location.href='vocabulary_2.html';
}
