function verArbol()
{
	$('#divTree').show();
	$('#closeDiv').show();
	$('#opacoDiv').show();
}

function ocultarArbol()
{
	$('#divTree').hide();
	$('#closeDiv').hide();
	$('#opacoDiv').hide();
}

function verDivExpl()
{
	$('#divExample').show();
	$('#closeDivExpl').show();
	$('#opacoDiv').show();
}

function ocultarExpl()
{
	$('#divExample').hide();
	$('#closeDivExpl').hide();
	$('#opacoDiv').hide();
}

function verGrammar()
{
	$('#divGrammar').show();
	$('#closeDivGrammar').show();
	$('#opacoDiv').show();
}

function ocultarGrammar()
{
	$('#divGrammar').hide();
	$('#closeDivGrammar').hide();
	$('#opacoDiv').hide();
}

/* Exercise 5 */
function verificarL2E5(idQst, idBtn)
{
	ansL2E5 = $("#selAnswerE5").val();
	vez = $("#vez").val();
	img = "";
	
	if(ansL2E5 == "" && idBtn != 3)
		alert("You must select an answer.");
	else{
		if(idBtn == 1)
		{
			if(idQst == 1 && ansL2E5 == 'optC')
				img = "good";
			else if (idQst == 2 && ansL2E5 == 'optB')
				img = "good";
			else if (idQst == 3 && ansL2E5 == "optC")
				img = "good";
			else if (idQst == 4 && ansL2E5 == 'optC')
				img = "good";
			else if (idQst == 5 && ansL2E5 == 'optB')
				img = "good";
			else if (idQst == 6 && ansL2E5 == 'optC')
				img = "good";
			else
				img = "good_No";
			actualizardivCalL2E5(img);
		}
		else{
			if(idBtn == 3)
			{
				switch (idQst){
					case 1:
						value = "<select name=\"selAnswerE5\" class=\"bg_selec\" id=\"selAnswerE5\">"+
								  "<option value=\"\"></option>"+
								  "<option value=\"optA\">hospital</option>"+
								  "<option value=\"optB\">restaurant</option>"+
								  "<option value=\"optC\" selected>school</option>"+
								"</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
					case 2:
						value = "<select name=\"select4\" class=\"bg_selec_peque\" id=\"select4\">"+
								  "<option value=\"\"></option>"+
								  "<option value=\"optA\"> nurse</option>"+
								  "<option value=\"optB\" selected>reporter</option>"+
								  "<option value=\"optC\"> lawyer</option>"+
								"</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
					case 3:
						value = "<select name=\"selAnswerE5\" class=\"bg_selec\" id=\"selAnswerE5\">"+
								  "<option value=\"\"></option>"+
								  "<option value=\"optA\"> actress</option>"+
								  "<option value=\"optB\">flight attendant </option>"+
								  "<option value=\"optC\" selected>singer</option>"+
								"</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
					case 4:
						value = "<select name=\"selAnswerE5\" class=\"bg_selec\" id=\"selAnswerE5\">"+
								  "<option value=\"\"></option>"+
								  "<option value=\"optA\"> guide</option>"+
								  "<option value=\"optB\">web designer </option>"+
								  "<option value=\"optC\" selected>actor</option>"+
								"</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
					case 5:
						value = "<select name=\"selAnswerE5\" class=\"bg_selec\" id=\"selAnswerE5\">"+
								  "<option value=\"\"></option>"+
								  "<option value=\"optA\">school</option>"+
								  "<option value=\"optB\" selected>hospital</option>"+
								  "<option value=\"optC\">TV channel</option>"+
								"</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
					case 6:
						value = "<select name=\"selAnswerE5\" class=\"bg_selec\" id=\"selAnswerE5\">"+
									"<option value=\"\"></option>"+
									"<option value=\"optA\">hospital</option>"+
									"<option value=\"optB\">restaurant</option>"+
									"<option value=\"optC\" selected>office</option>"+
								"</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
				}
				actualizarBtnL2E5(idQst, idBtn);
			}	
			else if(idBtn == 2){
				vez = parseInt(vez) + 1;
				if(vez >= 3)
					actualizarBtnL2E5(idQst, idBtn);
				switch (idQst){
					case 1:
						value = "<select name=\"selAnswerE5\" class=\"bg_selec\" id=\"selAnswerE5\">"+
								  "<option value=\"\"></option>"+
								  "<option value=\"optA\">hospital</option>"+
								  "<option value=\"optB\">restaurant</option>"+
								  "<option value=\"optC\">school</option>"+
								"</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
					case 2:
						value = "<select name=\"selAnswerE5\" class=\"bg_selec_peque\" id=\"selAnswerE5\">"+
								  "<option value=\"\"></option>"+
								  "<option value=\"optA\"> nurse</option>"+
								  "<option value=\"optB\">reporter</option>"+
								  "<option value=\"optC\"> lawyer</option>"+
								"</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
					case 3:
						value = "<select name=\"selAnswerE5\" class=\"bg_selec\" id=\"selAnswerE5\">"+
								  "<option value=\"\"></option>"+
								  "<option value=\"optA\"> actress</option>"+
								  "<option value=\"optB\">flight attendant </option>"+
								  "<option value=\"optC\">singer</option>"+
								"</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
					case 4:
						value = "<select name=\"selAnswerE5\" class=\"bg_selec\" id=\"selAnswerE5\">"+
								  "<option value=\"\"></option>"+
								  "<option value=\"optA\"> guide</option>"+
								  "<option value=\"optB\">web designer </option>"+
								  "<option value=\"optC\">actor</option>"+
								"</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
					case 5:
						value = "<select name=\"selAnswerE5\" class=\"bg_selec\" id=\"selAnswerE5\">"+
								  "<option value=\"\"></option>"+
								  "<option value=\"optA\">school</option>"+
								  "<option value=\"optB\">hospital</option>"+
								  "<option value=\"optC\">TV channel</option>"+
								"</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
					case 6:
						value = "<select name=\"selAnswerE5\" class=\"bg_selec\" id=\"selAnswerE5\">"+
									"<option value=\"\"></option>"+
									"<option value=\"optA\">hospital</option>"+
									"<option value=\"optB\">restaurant</option>"+
									"<option value=\"optC\">office</option>"+
								"</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
				}
			}
			$('#divAnswerSelE5').html(value); 
			actualizardivCalL2E5(img);
		}
	}
}

function actualizarBtnL2E5(idQst, idBtn)
{
	if(idBtn == 3)
		btn = "<table width=\"150\" border=\"0\">"+
			"<tr>"+
			  "<td height=\"31\" align=\"center\" valign=\"middle\"><img src=\"../img/8.btn_chulito_desab.png\" name=\"Image19\" width=\"25\" height=\"25\" border=\"0\" id=\"Image19\" /></td>"+
			  "<td align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL2E5("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image20','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image20\" width=\"25\" height=\"25\" border=\"0\" id=\"Image20\" /></a></td>"+
			  "<td align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL2E5("+idQst+",3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image21','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image21\" width=\"29\" height=\"25\" border=\"0\" id=\"Image21\" /></a></td>"+
			"</tr>"+
		  "</table>";
	else
		btn = "<table width=\"150\" border=\"0\">"+
			"<tr>"+
			  "<td height=\"31\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL2E5("+idQst+",1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image19','','../img/8.btn_chulito2.png',1)\"><img src=\"../img/8.btn_chulito.png\" name=\"Image19\" width=\"25\" height=\"25\" border=\"0\" id=\"Image19\" /></a></td>"+
			  "<td align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL2E5("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image20','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image20\" width=\"25\" height=\"25\" border=\"0\" id=\"Image20\" /></a></td>"+
			  "<td align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL2E5("+idQst+",3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image21','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image21\" width=\"29\" height=\"25\" border=\"0\" id=\"Image21\" /></a></td>"+
			"</tr>"+
		  "</table>";
			
	$('#divBtn').html(btn);
}

function actualizardivCalL2E5(img)
{
	//alert(idBtn);
	if(img != "")
		html = "<img src=\"../img/"+img+".png\" width=\"30\" height=\"30\" />";
	else		
		html = "&nbsp;";
	
	$('#divCalL2E5').html(html);
}

function cambiarDivL2Ex5(idQst)
{	
	if (idQst == 1)
	{	
		prev = 6;
		next = 2;
		tblQst = "<table width=\"342\" border=\"0\">"+
				"<tr>"+
				  "<td width=\"166\" height=\"47\" align=\"right\" valign=\"middle\" class=\"texto_1\">1. A teacher works in a</td>"+
				  "<td width=\"166\" align=\"center\" valign=\"middle\" background=\"../img/bg_selec.png\">"+
					"<div id=\"divAnswerSelE5\">"+
					"<select name=\"selAnswerE5\" class=\"bg_selec\" id=\"selAnswerE5\">"+
					  "<option value=\"\"></option>"+
					  "<option value=\"optA\">hospital</option>"+
					  "<option value=\"optB\">restaurant</option>"+
					  "<option value=\"optC\">school</option>"+
					"</select>"+
					"<input type=\"hidden\" id=\"vez\" value=0 />"+
					"</div>"+
				  "</td>"+
				  "</tr>"+
			  "</table>";
		
		btnQst = "<table width=\"230\" cellspacing=\"0\" cellpadding=\"0\">"+
				  "<tr>"+
					"<td width=\"40\" height=\"53\"><a href=\"#\" onclick=\"cambiarDivL2Ex5(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image13','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_2.png\" name=\"Image13\" width=\"40\" height=\"53\" border=\"0\" id=\"Image13\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex5(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image14','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image14\" width=\"40\" height=\"53\" border=\"0\" id=\"Image14\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex5(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_1.png\" name=\"Image15\" width=\"40\" height=\"53\" border=\"0\" id=\"Image15\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex5(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_1.png\" name=\"Image16\" width=\"40\" height=\"53\" border=\"0\" id=\"Image16\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"19\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex5(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image22','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_1.png\" name=\"Image22\" width=\"40\" height=\"53\" border=\"0\" id=\"Image22\" /></a></td>"+
					"<td width=\"19\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"38\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex5(6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image23','','../img/btn_6b_2.png',1)\"><img src=\"../img/btn_6b_1.png\" name=\"Image23\" width=\"40\" height=\"53\" border=\"0\" id=\"Image23\" /></a></td>"+
				  "</tr>"+
				"</table>";
	}
	else if (idQst == 2)
	{
		prev = 1;
		next = 3;
		tblQst = "<table width=\"330\" border=\"0\">"+
            "<tr>"+
              "<td width=\"33\" height=\"47\" align=\"right\" valign=\"middle\" class=\"texto_1\">2. A</td>"+
              "<td width=\"127\" align=\"center\" valign=\"middle\" background=\"../img/bg_selec_peque.png\">"+
			  "<div id=\"divAnswerSelE5\">"+
                "<select name=\"selAnswerE5\" class=\"bg_selec_peque\" id=\"selAnswerE5\">"+
                  "<option value=\"\"></option>"+
                  "<option value=\"optA\"> nurse</option>"+
                  "<option value=\"optB\">reporter</option>"+
                  "<option value=\"optC\"> lawyer</option>"+
                "</select>"+
				"<input type=\"hidden\" id=\"vez\" value=0 />"+
				"</div>"+
              "</td>"+
              "<td width=\"156\" align=\"center\" valign=\"middle\" class=\"texto_1\">works in a TV station. </td>"+
              "</tr>"+
          "</table>";
		
		btnQst = "<table width=\"230\" cellspacing=\"0\" cellpadding=\"0\">"+
				  "<tr>"+
					"<td width=\"40\" height=\"53\"><a href=\"#\" onclick=\"cambiarDivL2Ex5(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image13','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image13\" width=\"40\" height=\"53\" border=\"0\" id=\"Image13\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex5(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image14','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_2.png\" name=\"Image14\" width=\"40\" height=\"53\" border=\"0\" id=\"Image14\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex5(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_1.png\" name=\"Image15\" width=\"40\" height=\"53\" border=\"0\" id=\"Image15\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex5(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_1.png\" name=\"Image16\" width=\"40\" height=\"53\" border=\"0\" id=\"Image16\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"19\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex5(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image22','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_1.png\" name=\"Image22\" width=\"40\" height=\"53\" border=\"0\" id=\"Image22\" /></a></td>"+
					"<td width=\"19\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"38\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex5(6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image23','','../img/btn_6b_2.png',1)\"><img src=\"../img/btn_6b_1.png\" name=\"Image23\" width=\"40\" height=\"53\" border=\"0\" id=\"Image23\" /></a></td>"+
				  "</tr>"+
				"</table>";
	}
	else if (idQst == 3)
	{
		prev = 2;
		next = 4;
		tblQst = "<table width=\"289\" border=\"0\">"+
            "<tr>"+
              "<td width=\"112\" height=\"47\" align=\"right\" valign=\"middle\" class=\"texto_1\">3.  Shakira is a </td>"+
              "<td width=\"167\" align=\"center\" valign=\"middle\" background=\"../img/bg_selec.png\">"+
			  "<div id=\"divAnswerSelE5\">"+
                "<select name=\"selAnswerE5\" class=\"bg_selec\" id=\"selAnswerE5\">"+
                  "<option value=\"\"></option>"+
                  "<option value=\"optA\"> actress</option>"+
                  "<option value=\"optB\">flight attendant </option>"+
                  "<option value=\"optC\">singer</option>"+
                "</select>"+
				"<input type=\"hidden\" id=\"vez\" value=0 />"+
              "</div></td>"+
              "</tr>"+
          "</table>";
	
		btnQst = "<table width=\"230\" cellspacing=\"0\" cellpadding=\"0\">"+
				  "<tr>"+
					"<td width=\"40\" height=\"53\"><a href=\"#\" onclick=\"cambiarDivL2Ex5(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image13','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image13\" width=\"40\" height=\"53\" border=\"0\" id=\"Image13\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex5(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image14','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image14\" width=\"40\" height=\"53\" border=\"0\" id=\"Image14\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex5(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_2.png\" name=\"Image15\" width=\"40\" height=\"53\" border=\"0\" id=\"Image15\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex5(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_1.png\" name=\"Image16\" width=\"40\" height=\"53\" border=\"0\" id=\"Image16\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"19\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex5(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image22','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_1.png\" name=\"Image22\" width=\"40\" height=\"53\" border=\"0\" id=\"Image22\" /></a></td>"+
					"<td width=\"19\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"38\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex5(6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image23','','../img/btn_6b_2.png',1)\"><img src=\"../img/btn_6b_1.png\" name=\"Image23\" width=\"40\" height=\"53\" border=\"0\" id=\"Image23\" /></a></td>"+
				  "</tr>"+
				"</table>";
	}
	else if (idQst == 4)
	{
		prev = 3;
		next = 5;
		tblQst = "<table width=\"396\" border=\"0\">"+
            "<tr>"+
              "<td width=\"219\" height=\"47\" align=\"right\" valign=\"middle\" class=\"texto_1\">4.  George Clooney is a famous </td>"+
              "<td width=\"167\" align=\"center\" valign=\"middle\" background=\"../img/bg_selec.png\">"+
			  "<div id=\"divAnswerSelE5\">"+
                "<select name=\"selAnswerE5\" class=\"bg_selec\" id=\"selAnswerE5\">"+
                  "<option value=\"\"></option>"+
                  "<option value=\"optA\"> guide</option>"+
                  "<option value=\"optB\">web designer </option>"+
                  "<option value=\"optC\">actor</option>"+
                "</select>"+
				"<input type=\"hidden\" id=\"vez\" value=0 />"+
              "</div></td>"+
              "</tr>"+
          "</table>";
		
		btnQst = "<table width=\"230\" cellspacing=\"0\" cellpadding=\"0\">"+
				  "<tr>"+
					"<td width=\"40\" height=\"53\"><a href=\"#\" onclick=\"cambiarDivL2Ex5(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image13','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image13\" width=\"40\" height=\"53\" border=\"0\" id=\"Image13\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex5(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image14','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image14\" width=\"40\" height=\"53\" border=\"0\" id=\"Image14\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex5(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_1.png\" name=\"Image15\" width=\"40\" height=\"53\" border=\"0\" id=\"Image15\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex5(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_2.png\" name=\"Image16\" width=\"40\" height=\"53\" border=\"0\" id=\"Image16\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"19\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex5(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image22','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_1.png\" name=\"Image22\" width=\"40\" height=\"53\" border=\"0\" id=\"Image22\" /></a></td>"+
					"<td width=\"19\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"38\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex5(6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image23','','../img/btn_6b_2.png',1)\"><img src=\"../img/btn_6b_1.png\" name=\"Image23\" width=\"40\" height=\"53\" border=\"0\" id=\"Image23\" /></a></td>"+
				  "</tr>"+
				"</table>";
	}
	else if (idQst == 5)
	{	
		prev = 4;
		next = 6;
		tblQst = "<table width=\"337\" border=\"0\">"+
            "<tr>"+
              "<td width=\"160\" height=\"47\" align=\"right\" valign=\"middle\" class=\"texto_1\">5.  A nurse works in a </td>"+
              "<td width=\"167\" align=\"center\" valign=\"middle\" background=\"../img/bg_selec.png\">"+
			   "<div id=\"divAnswerSelE5\">"+
                "<select name=\"selAnswerE5\" class=\"bg_selec\" id=\"selAnswerE5\">"+
                  "<option value=\"\"></option>"+
                  "<option value=\"optA\">school</option>"+
                  "<option value=\"optB\">hospital</option>"+
                  "<option value=\"optC\">TV channel</option>"+
                "</select>"+
				"<input type=\"hidden\" id=\"vez\" value=0 />"+
              "</div></td>"+
              "</tr>"+
          "</table>";
		
		btnQst = "<table width=\"230\" cellspacing=\"0\" cellpadding=\"0\">"+
				  "<tr>"+
					"<td width=\"40\" height=\"53\"><a href=\"#\" onclick=\"cambiarDivL2Ex5(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image13','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image13\" width=\"40\" height=\"53\" border=\"0\" id=\"Image13\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex5(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image14','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image14\" width=\"40\" height=\"53\" border=\"0\" id=\"Image14\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex5(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_1.png\" name=\"Image15\" width=\"40\" height=\"53\" border=\"0\" id=\"Image15\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex5(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_1.png\" name=\"Image16\" width=\"40\" height=\"53\" border=\"0\" id=\"Image16\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"19\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex5(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image22','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_2.png\" name=\"Image22\" width=\"40\" height=\"53\" border=\"0\" id=\"Image22\" /></a></td>"+
					"<td width=\"19\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"38\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex5(6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image23','','../img/btn_6b_2.png',1)\"><img src=\"../img/btn_6b_1.png\" name=\"Image23\" width=\"40\" height=\"53\" border=\"0\" id=\"Image23\" /></a></td>"+
				  "</tr>"+
				"</table>";
	}
	else if (idQst == 6)
	{	
		prev = 5;
		next = 1;
		tblQst = "<table width=\"357\" border=\"0\">"+
            "<tr>"+
              "<td width=\"185\" height=\"47\" align=\"right\" valign=\"middle\" class=\"texto_1\">6.  A secretary works in an</td>"+
              "<td width=\"162\" align=\"center\" valign=\"middle\" background=\"../img/bg_selec.png\">"+
			  "<div id=\"divAnswerSelE5\">"+
                "<select name=\"selAnswerE5\" class=\"bg_selec\" id=\"selAnswerE5\">"+
					"<option value=\"\"></option>"+
					"<option>hospital</option>"+
					"<option>restaurant</option>"+
					"<option>office</option>"+
                "</select>"+
				"<input type=\"hidden\" id=\"vez\" value=0 />"+
              "</div></td>"+
              "</tr>"+
          "</table>";
		
		btnQst = "<table width=\"230\" cellspacing=\"0\" cellpadding=\"0\">"+
				  "<tr>"+
					"<td width=\"40\" height=\"53\"><a href=\"#\" onclick=\"cambiarDivL2Ex5(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image13','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image13\" width=\"40\" height=\"53\" border=\"0\" id=\"Image13\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex5(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image14','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image14\" width=\"40\" height=\"53\" border=\"0\" id=\"Image14\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex5(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_1.png\" name=\"Image15\" width=\"40\" height=\"53\" border=\"0\" id=\"Image15\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex5(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_1.png\" name=\"Image16\" width=\"40\" height=\"53\" border=\"0\" id=\"Image16\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"19\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex5(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image22','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_1.png\" name=\"Image22\" width=\"40\" height=\"53\" border=\"0\" id=\"Image22\" /></a></td>"+
					"<td width=\"19\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"38\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex5(6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image23','','../img/btn_6b_2.png',1)\"><img src=\"../img/btn_6b_2.png\" name=\"Image23\" width=\"40\" height=\"53\" border=\"0\" id=\"Image23\" /></a></td>"+
				  "</tr>"+
				"</table>";
	}
	html = "<table align=\"center\" width=\"772\" border=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"770\" height=\"391\" align=\"center\" valign=\"top\">"+				
				"<table width=\"770\" height=\"171\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"768\" height=\"171\" align=\"left\">"+
					"<table width=\"766\" border=\"0\">"+
			  "<tr>"+
				"<td width=\"741\" height=\"65\"><img src=\"../img/titulos/L2/img_L2_exer_5.png\" width=\"324\" height=\"103\" /></td>"+
			  "</tr>"+
			"</table>"+
			"<table width=\"769\" border=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"164\" height=\"60\" align=\"center\" valign=\"bottom\">&nbsp;</td>"+
				"<td width=\"443\" align=\"center\" valign=\"middle\">"+btnQst+"</td>"+
				"<td width=\"156\" align=\"center\" valign=\"bottom\">&nbsp;</td>"+
				"</tr>"+
			  "</table></td>"+
		  "</tr>"+
		"</table>"+
		  "<table width=\"580\" height=\"160\" border=\"0\">"+
			"<tr>"+
			  "<td width=\"50\" height=\"156\" align=\"center\" valign=\"middle\" class=\"texto_1\"><a href=\"#\" onclick=\"cambiarDivL2Ex5("+prev+")\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image24','','../img/11.izq2.png',1)\"><img src=\"../img/11.izq.png\" name=\"Image24\" width=\"50\" height=\"55\" border=\"0\" id=\"Image24\" /></a></td>"+
			  "<td width=\"466\" align=\"center\" valign=\"middle\" background=\"../img/bg_Cuadro6.png\"class=\"texto_1\">"+tblQst+"</td>"+
			  "<td width=\"50\" align=\"center\" valign=\"middle\" class=\"texto_1\"><a href=\"#\" onclick=\"cambiarDivL2Ex5("+next+")\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image25','','../img/11.der2.png',1)\"><img src=\"../img/11.der.png\" name=\"Image25\" width=\"50\" height=\"55\" border=\"0\" id=\"Image25\" /></a></td>"+
			  "</tr>"+
		"</table>"+
		  "<table width=\"75\" border=\"0\">"+
			"<tr>"+
			  "<td width=\"69\" align=\"center\"><div id=\"divCalL2E5\">&nbsp;</div></td>"+
			  "</tr>"+
		"</table> "+
		  "<table width=\"200\" border=\"0\">"+
			"<tr>"+
			  "<td width=\"16\" height=\"50\">&nbsp;</td>"+
			  "<td width=\"151\" background=\"../img/8.bg_refresh.png\">"+
			  "<div id=\"divBtn\"><table width=\"150\" border=\"0\">"+
				"<tr>"+
				  "<td height=\"31\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL2E5("+idQst+",1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image19','','../img/8.btn_chulito2.png',1)\"><img src=\"../img/8.btn_chulito.png\" name=\"Image19\" width=\"25\" height=\"25\" border=\"0\" id=\"Image19\" /></a></td>"+
				  "<td align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL2E5("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image20','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image20\" width=\"25\" height=\"25\" border=\"0\" id=\"Image20\" /></a></td>"+
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
/* Exercise 5 */


/* Exercise 6 */
function verificarL2Ex6(idBtn)
{
	ansL2E6A = $("#ansL2E6A").val();
	ansL2E6B = $("#ansL2E6B").val();
	ansL2E6C = $("#ansL2E6C").val();
	ansL2E6D = $("#ansL2E6D").val();
	ansL2E6E = $("#ansL2E6E").val();
	
	varscore = $("#inptscore").attr("value");
	
	doLMSSetValue("cmi.core.score.min", 0);
	doLMSSetValue("cmi.core.score.max", 100);
	
	vez = $("#vez").val();
	
	img = "";
	
	if(idBtn!= 3 && ansL2E6A == "" && ansL2E6B == "" && ansL2E6C == "" && ansL2E6D == "" && ansL2E6E == "")
		alert("You must write the answers.");
	else{
		if(idBtn == 1)
		{
			if(ansL2E6A == "What do you do in your office" && ansL2E6B == "How does he like his new job" && ansL2E6C == "What does Beth do")
				if(ansL2E6D == "Where does your father work" && ansL2E6E == "Do you work in a big company"){ //)
					img = "good";
					varscore = parseFloat(varscore) + 100;
				}
				else 
					img = "good_No";
			else if(ansL2E6A == "What do you do in your office" && ansL2E6B == "" && ansL2E6C == "" && ansL2E6D == "" && ansL2E6E == ""){
				img = "good";
				varscore = parseFloat(varscore) + 20;
			}
			else if(ansL2E6A == "" && ansL2E6B == "How does he like his new job" && ansL2E6C == "" && ansL2E6D == "" && ansL2E6E == ""){
				img = "good";
				varscore = parseFloat(varscore) + 20;
			}
			else if(ansL2E6A == "" && ansL2E6B == "" && ansL2E6C == "What does Beth do" && ansL2E6D == "" && ansL2E6E == ""){
				img = "good";
				varscore = parseFloat(varscore) + 20;
			}
			else if(ansL2E6A == "" && ansL2E6B == "" && ansL2E6C == "" && ansL2E6D == "Where does your father work" && ansL2E6E == ""){
				img = "good";
				varscore = parseFloat(varscore) + 20;
			}
			else if(ansL2E6A == "" && ansL2E6B == "" && ansL2E6C == "" && ansL2E6D == "" && ansL2E6E == "Do you work in a big company"){
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
			actualizardivCalL1E2(img, varscore);

		}
		else{
			varscore = 0;
			if(idBtn == 3)
			{
				valueA = "What do you do in your office";
				valueB = "How does he like his new job";
				valueC = "What does Beth do";
				valueD = "Where does your father work";
				valueE = "Do you work in a big company";
				actualizarBtnL2Ex6(idBtn);
			}	
			else if(idBtn == 2){
				valueA = "";
				valueB = "";
				valueC = "";
				valueD = "";
				valueE = "";
				if(vez >= 2)
					actualizarBtnL2Ex6(idBtn);
				vez = parseInt(vez) + 1;
			}
				
			html = "<table align=\"center\" width=\"750\" border=\"0\">"+
			  "<tr>"+
				"<td width=\"405\" height=\"254\" align=\"left\" valign=\"top\"><table align=\"center\" width=\"310\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"15\" height=\"72\" align=\"left\" valign=\"bottom\"><strong class=\"texto_3\">1.</strong></td>"+
					"<td width=\"49\" align=\"center\" valign=\"bottom\" class=\"texto_1\">Office </td>"+
					"<td width=\"7\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
					"<td width=\"41\" align=\"center\" valign=\"bottom\" class=\"texto_1\">What</td>"+
					"<td width=\"7\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
					"<td width=\"37\" align=\"center\" valign=\"bottom\" class=\"texto_1\"> your</td>"+
					"<td width=\"7\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
					"<td width=\"27\" align=\"center\" valign=\"bottom\" class=\"texto_1\"> do </td>"+
					"<td width=\"7\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
					"<td width=\"26\" align=\"center\" valign=\"bottom\" class=\"texto_1\">do </td>"+
					"<td width=\"7\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
					"<td width=\"19\" align=\"center\" valign=\"bottom\" class=\"texto_1\">in</td>"+
					"<td width=\"8\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
					"<td width=\"25\" align=\"center\" valign=\"bottom\" class=\"texto_1\">you</td>"+
				  "</tr>"+
				"</table>"+
				  "<table align=\"center\" width=\"322\" border=\"0\" cellspacing=\"0\">"+
					"<tr>"+
					"<td width=\"23\" height=\"25\" align=\"left\" valign=\"bottom\">&nbsp;</td>"+
					"<td width=\"290\" align=\"center\" valign=\"bottom\" class=\"texto_1\">"+
					  "<input name=\"ansL2E6A\" type=\"text\" class=\"raya_bg_cienPorcien\" id=\"ansL2E6A\" value=\""+valueA+"\" />"+
					"</td>"+
					"<td width=\"8\" align=\"left\" valign=\"bottom\" class=\"texto_1\"><strong>?</strong></td>"+
					"</tr>"+
			  "</table>"+
			  "<table align=\"center\" width=\"310\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"15\" height=\"72\" align=\"left\" valign=\"bottom\"><strong class=\"texto_3\">2.</strong></td>"+
					"<td width=\"49\" align=\"center\" valign=\"bottom\" class=\"texto_2\">does </td>"+
					"<td width=\"7\" align=\"center\" valign=\"bottom\" class=\"texto_1\">/</td>"+
					"<td width=\"41\" align=\"center\" valign=\"bottom\" class=\"texto_2\">How</td>"+
					"<td width=\"7\" align=\"center\" valign=\"bottom\" class=\"texto_1\">/</td>"+
					"<td width=\"37\" align=\"center\" valign=\"bottom\" class=\"texto_2\"> new</td>"+
					"<td width=\"7\" align=\"center\" valign=\"bottom\" class=\"texto_1\">/</td>"+
					"<td width=\"27\" align=\"center\" valign=\"bottom\" class=\"texto_2\"> like </td>"+
					"<td width=\"7\" align=\"center\" valign=\"bottom\" class=\"texto_1\">/</td>"+
					"<td width=\"26\" align=\"center\" valign=\"bottom\" class=\"texto_2\">his </td>"+
					"<td width=\"7\" align=\"center\" valign=\"bottom\" class=\"texto_1\">/</td>"+
					"<td width=\"19\" align=\"center\" valign=\"bottom\" class=\"texto_2\">he</td>"+
					"<td width=\"8\" align=\"center\" valign=\"bottom\" class=\"texto_1\">/</td>"+
					"<td width=\"25\" align=\"center\" valign=\"bottom\" class=\"texto_2\">job</td>"+
				  "</tr>"+
				"</table>"+
				"<table align=\"center\" width=\"322\" border=\"0\" cellspacing=\"0\">"+
					"<tr>"+
					"<td width=\"23\" height=\"25\" align=\"left\" valign=\"bottom\">&nbsp;</td>"+
					"<td width=\"290\" align=\"center\" valign=\"bottom\" class=\"texto_1\">"+
					  "<input name=\"ansL2E6B\" type=\"text\" class=\"raya_bg_cienPorcien2\" id=\"ansL2E6B\" value=\""+valueB+"\" />"+
					"</td>"+
					"<td width=\"8\" align=\"left\" valign=\"bottom\" class=\"texto_1\"><strong>?</strong></td>"+
					"</tr>"+
			  "</table></td>"+
				"<td width=\"1\" align=\"right\" class=\"bg_color1\"></td>"+
				"<td width=\"326\" align=\"center\" valign=\"top\"><table align=\"center\" width=\"262\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"15\" height=\"42\" align=\"left\" valign=\"bottom\"><strong class=\"texto_3\">3.</strong></td>"+
					"<td width=\"38\" align=\"center\" valign=\"bottom\" class=\"texto_1\">What</td>"+
					"<td width=\"7\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
					"<td width=\"24\" align=\"center\" valign=\"bottom\" class=\"texto_1\">do</td>"+
					"<td width=\"6\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
					"<td width=\"34\" align=\"center\" valign=\"bottom\" class=\"texto_1\">Beth</td>"+
					"<td width=\"6\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
					"<td width=\"33\" align=\"center\" valign=\"bottom\" class=\"texto_1\">does</td>"+
					"<td width=\"53\" align=\"center\" valign=\"bottom\" class=\"texto_1\">&nbsp;</td>"+
					"</tr>"+
				"</table>"+				
				"<table align=\"center\" width=\"262\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"24\" height=\"33\" align=\"center\" valign=\"bottom\" class=\"texto_1\">&nbsp;</td>"+
					"<td width=\"223\" align=\"center\" valign=\"bottom\" class=\"texto_1\">"+
					  "<input name=\"ansL2E6C\" type=\"text\" class=\"raya_bg_cienPorcien\" id=\"ansL2E6C\" value=\""+valueC+"\" />"+
					"</form></td>"+
					"<td width=\"9\" align=\"center\" valign=\"bottom\" class=\"texto_1\"><strong>?</strong></td>"+
					"</tr>"+
				"</table>"+
				"<table align=\"center\" width=\"266\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"15\" height=\"42\" align=\"left\" valign=\"bottom\"><strong class=\"texto_3\">4.</strong></td>"+
					"<td width=\"29\" align=\"center\" valign=\"bottom\" class=\"texto_2\">father</td>"+
					"<td width=\"6\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
					"<td width=\"29\" align=\"center\" valign=\"bottom\" class=\"texto_2\">work</td>"+
					"<td width=\"8\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
					"<td width=\"44\" align=\"center\" valign=\"bottom\" class=\"texto_2\"> does</td>"+
					"<td width=\"7\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
					"<td width=\"39\" align=\"center\" valign=\"bottom\" class=\"texto_2\"> Where</td>"+
					"<td width=\"7\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
					"<td width=\"27\" align=\"center\" valign=\"bottom\" class=\"texto_2\">your</td>"+
					"</tr>"+
			  "</table>"+
				"<table align=\"center\" width=\"262\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"24\" height=\"33\" align=\"center\" valign=\"bottom\" class=\"texto_1\">&nbsp;</td>"+
					"<td width=\"223\" align=\"center\" valign=\"bottom\" class=\"texto_1\">"+
					  "<input name=\"ansL2E6D\" type=\"text\" class=\"raya_bg_cienPorcien2\" id=\"ansL2E6D\" value=\""+valueD+"\" />"+
					"</td>"+
					"<td width=\"9\" align=\"center\" valign=\"bottom\" class=\"texto_1\"><strong>?</strong></td>"+
					"</tr>"+
				"</table>"+
				"<table align=\"center\" width=\"264\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"15\" height=\"42\" align=\"left\" valign=\"bottom\"><strong class=\"texto_3\">5.</strong></td>"+
					"<td width=\"8\" align=\"center\" valign=\"bottom\" class=\"texto_1\">a</td>"+
					"<td width=\"6\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
					"<td width=\"35\" align=\"center\" valign=\"bottom\" class=\"texto_1\">work</td>"+
					"<td width=\"6\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
					"<td width=\"20\" align=\"center\" valign=\"bottom\" class=\"texto_1\"> Do</td>"+
					"<td width=\"6\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
					"<td width=\"26\" align=\"center\" valign=\"bottom\" class=\"texto_1\"> you</td>"+
					"<td width=\"6\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
					"<td width=\"22\" align=\"center\" valign=\"bottom\" class=\"texto_1\">big</td>"+
					"<td width=\"6\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
					"<td width=\"64\" align=\"center\" valign=\"bottom\" class=\"texto_1\">company</td>"+
					"<td width=\"9\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
					"<td width=\"9\" align=\"center\" valign=\"bottom\" class=\"texto_1\">in</td>"+
					"</tr>"+
				"</table>"+
				"<table align=\"center\" width=\"262\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"24\" height=\"33\" align=\"center\" valign=\"bottom\" class=\"texto_1\">&nbsp;</td>"+
					"<td width=\"223\" align=\"center\" valign=\"bottom\" class=\"texto_1\">"+
					  "<input name=\"ansL2E6E\" type=\"text\" class=\"raya_bg_cienPorcien\" id=\"ansL2E6E\" value=\""+valueE+"\" />"+
					"</td>"+
					"<td width=\"9\" align=\"center\" valign=\"bottom\" class=\"texto_1\"><strong>?</strong></td>"+
					"</tr>"+
				"</table>"+
				"</td>"+
			  "</tr>"+
			"</table><input type=\"hidden\" id=\"vez\" value="+vez+" />";
		
			$('#divL2Ex6').html(html); 
		}
		actualizardivCalL2Ex6(img);
	}
}

function actualizarBtnL2Ex6(idBtn)
{
	if(idBtn == 3)
		btn = "<table width=\"128\" border=\"0\" cellspacing=\"0\">"+
            "<tr>"+
              "<td width=\"40\" height=\"31\" align=\"center\" valign=\"middle\"><img src=\"../img/8.btn_chulito_desab.png\" name=\"Image19\" width=\"25\" height=\"25\" border=\"0\" id=\"Image19\" /></td>"+
              "<td width=\"45\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL2Ex6(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image20','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image20\" width=\"25\" height=\"25\" border=\"0\" id=\"Image20\" /></a></td>"+
              "<td width=\"43\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL2Ex6(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image21','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image21\" width=\"29\" height=\"25\" border=\"0\" id=\"Image21\" /></a></td>"+
            "</tr>"+
          "</table>";
	else
		btn = "<table width=\"128\" border=\"0\" cellspacing=\"0\">"+
            "<tr>"+
              "<td width=\"40\" height=\"31\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL2Ex6(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image19','','../img/8.btn_chulito2.png',1)\"><img src=\"../img/8.btn_chulito.png\" name=\"Image19\" width=\"25\" height=\"25\" border=\"0\" id=\"Image19\" /></a></td>"+
              "<td width=\"45\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL2Ex6(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image20','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image20\" width=\"25\" height=\"25\" border=\"0\" id=\"Image20\" /></a></td>"+
              "<td width=\"43\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL2Ex6(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image21','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image21\" width=\"29\" height=\"25\" border=\"0\" id=\"Image21\" /></a></td>"+
            "</tr>"+
          "</table>";
			
	$('#divBtn').html(btn);
}

function actualizardivCalL2Ex6(img, iptScore)
{
	if(img != "")
		btn = "<img src=\"../img/"+img+".png\" width=\"30\" height=\"30\" />"+
				"<input type=\"hidden\" id=\"inptscore\" name=\"inptscore\" value="+iptScore+" />";
	else
		btn = "&nbsp;<input type=\"hidden\" id=\"inptscore\" name=\"inptscore\" value="+iptScore+" />";
	
	$('#divCalL2Ex6').html(btn);
}
/* Exercise 6 */


/* Exercise 7 */
function verificarL2E7(idQst, idBtn)
{
	ans1L2E7 = $("#sel1AnswerE7").val();
	ans2L2E7 = $("#sel2AnswerE7").val();
	vez = $("#vez").val();
	img = "";
	
	varscore = $("#inptscore").attr("value");
	
	doLMSSetValue("cmi.core.score.min", 0);
	doLMSSetValue("cmi.core.score.max", 100);
	
	if((ans1L2E7 == "" || ans2L2E7 == "") && idBtn != 3)
		alert("You must select the answers.");
	else{
		if(idBtn == 1)
		{
			if(idQst == 1 && ans1L2E7 == 'optB' && ans2L2E7 == 'optB'){
				img = "good";
				varscore = parseFloat(varscore) + 20;
			}
			else if (idQst == 2 && ans1L2E7 == 'optB' && ans2L2E7 == 'optB'){
				img = "good";
				varscore = parseFloat(varscore) + 20;
			}
			else if (idQst == 3 && ans1L2E7 == 'optB' && ans2L2E7 == 'optB'){
				img = "good";
				varscore = parseFloat(varscore) + 20;
			}
			else if (idQst == 4 && ans1L2E7 == 'optA' && ans2L2E7 == 'optA'){
				img = "good";
				varscore = parseFloat(varscore) + 20;
			}
			else if (idQst == 5 && ans1L2E7 == 'optA' && ans2L2E7 == 'optA'){
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
				
			actualizardivCalL2E7(img, varscore);
		}
		else{
			if(idBtn == 3)
			{
				switch (idQst){
					case 1:
						optSel1 = "<option value=\"\"></option>"+
							"<option value=\"optA\">do</option>"+
							"<option value=\"optB\" selected>does</option>";
							
						optSel2 = "<option value=\"\"></option>"+
							"<option value=\"optA\">work</option>"+
							"<option value=\"optB\" selected>works</option>";
						txt1 = "What"; txt2 = "your sister do there?";
						txt3 = "She"; txt4 = "at a TV station.";
					break;
					case 2:
						optSel1 = "<option value=\"\"></option>"+
							"<option value=\"optA\">Do</option>"+
							"<option value=\"optB\" selected>Does</option>";
							
						optSel2 = "<option value=\"\"></option>"+
							"<option value=\"optA\">do</option>"+
							"<option value=\"optB\" selected>does</option>";
						txt1 = "your son like his new office?";
						txt2 = "Yes, he ";
						txt3 = "He really likes it.";
					break;
					case 3:
						optSel1 = "<option value=\"\"></option>"+
							"<option value=\"optA\">do</option>"+
							"<option value=\"optB\" selected>does</option>";
							
						optSel2 = "<option value=\"\"></option>"+
							"<option value=\"optA\">study</option>"+
							"<option value=\"optB\" selected>studies</option>";
						/*txt1 = "Where"; txt2 = "John study?";
						txt3 = "He"; txt4 = "at Tech Communications College.";*/
					break;
					case 4:
						optSel1 = "<option value=\"\"></option>"+
							"<option value=\"optA\" selected>Do</option>"+
							"<option value=\"optB\">Does</option>";
							
						optSel2 = "<option value=\"\"></option>"+
							"<option value=\"optA\" selected>don't</option>"+
							"<option value=\"optB\">doesn't</option>";
						/*txt1 = "you work in a hospital?";
						txt2 = "No, I ";
						txt3 = "I work in a restaurant";*/
					break;
					case 5:
						optSel1 = "<option value=\"\"></option>"+
							"<option value=\"optA\" selected>do</option>"+
							"<option value=\"optB\">does</option>";
							
						optSel2 = "<option value=\"\"></option>"+
							"<option value=\"optA\" selected>like</option>"+
							"<option value=\"optB\">likes</option>";
						txt1 = "How"; txt2 = "you like your new job?";
						txt3 = "I really"; txt4 = "my new job. It’s very interesting.";
					break;
				}
				actualizarBtnL2E7(idQst, idBtn);
			}	
			else if(idBtn == 2){
				vez = parseInt(vez) + 1;
				if(vez >= 3)
					actualizarBtnL2E7(idQst, idBtn);
				switch (idQst){
					case 1:
						optSel1 = "<option value=\"\"></option>"+
							"<option value=\"optA\">do</option>"+
							"<option value=\"optB\">does</option>";
							
						optSel2 = "<option value=\"\"></option>"+
							"<option value=\"optA\">work</option>"+
							"<option value=\"optB\">works</option>";
					break;
					case 2:
						optSel1 = "<option value=\"\" selected></option>"+
							"<option value=\"optA\">Do</option>"+
							"<option value=\"optB\">Does</option>";
							
						optSel2 = "<option value=\"\" selected></option>"+
							"<option value=\"optA\">do</option>"+
							"<option value=\"optB\">does</option>";
						txt1 = "your son like his new office?";
						txt2 = "Yes, he ";
						txt3 = "He really likes it.";
					break;
					case 3:
						optSel1 = "<option value=\"\"></option>"+
							"<option value=\"optA\">do</option>"+
							"<option value=\"optB\">does</option>";
							
						optSel2 = "<option value=\"\"></option>"+
							"<option value=\"optA\">study</option>"+
							"<option value=\"optB\">studies</option>";
						/*txt1 = "Where"; txt2 = "John study?";
						txt3 = "He"; txt4 = "at Tech Communications College.";*/
					break;
					case 4:
						optSel1 = "<option value=\"\"></option>"+
							"<option value=\"optA\">Do</option>"+
							"<option value=\"optB\">Does</option>";
							
						optSel2 = "<option value=\"\"></option>"+
							"<option value=\"optA\">don't</option>"+
							"<option value=\"optB\">doesn't</option>";
						/*txt1 = "you work in a hospital?";
						txt2 = "No, I ";
						txt3 = "I work in a restaurant";*/
					break;
					case 5:
						optSel1 = "<option value=\"\"></option>"+
							"<option value=\"optA\">do</option>"+
							"<option value=\"optB\">does</option>";
							
						optSel2 = "<option value=\"\"></option>"+
							"<option value=\"optA\">like</option>"+
							"<option value=\"optB\">likes</option>";
						/*txt1 = "How"; txt2 = "you like your new job?";
						txt3 = "I really"; txt4 = "my new job. It’s very interesting.";*/
					break;
				}
			}
			if(idQst == 1)
				html = "<table align=\"center\" background=\"../img/bg_Cuadro7.png\" width=\"580\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"582\" height=\"154\" align=\"center\" valign=\"middle\"><table width=\"348\" border=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"23\" height=\"46\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong>A.</strong></td>"+
				"<td width=\"39\" align=\"center\" valign=\"middle\" class=\"texto_1\">What</td>"+
				"<td width=\"128\" align=\"center\" background=\"../img/bg_selec_peque.png\">"+
				  "<select name=\"sel1AnswerE7\" class=\"bg_selec_peque\" id=\"sel1AnswerE7\">"+optSel1+
				  "</select>"+
				"</td>"+
				"<td width=\"150\" align=\"left\" valign=\"middle\" class=\"texto_1\">your sister do there?</td>"+
				"</tr>"+
			"</table>"+
			"<table width=\"348\" border=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"23\" height=\"46\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong class=\"texto_3\">B.</strong></td>"+
				"<td width=\"39\" align=\"center\" valign=\"middle\" class=\"texto_3\">She</td>"+
				"<td width=\"128\" align=\"center\" background=\"../img/bg_selec_peque.png\">"+
				  "<select name=\"sel2AnswerE7\" class=\"bg_selec_peque_Verde\" id=\"sel2AnswerE7\">"+optSel2+
				  "</select>"+
				"</td>"+
				"<td width=\"150\" align=\"left\" valign=\"middle\" class=\"texto_3\">at a TV station.</td>"+
				"</tr>"+
			"</table></td>"+
		  "</tr><input type=\"hidden\" id=\"vez\" value="+vez+" />"+
		"</table>";
			else if(idQst == 3)
				html = "<table align=\"center\" background=\"../img/bg_Cuadro7.png\" width=\"580\" border=\"0\">"+
			  "<tr>"+
				"<td width=\"582\" height=\"154\" align=\"center\" valign=\"middle\"><table width=\"438\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"24\" height=\"46\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong>A.</strong></td>"+
					"<td width=\"55\" align=\"center\" valign=\"middle\" class=\"texto_1\">Where </td>"+
					"<td width=\"128\" align=\"center\" background=\"../img/bg_selec_peque.png\">"+
					  "<select name=\"sel1AnswerE7\" class=\"bg_selec_peque\" id=\"sel1AnswerE7\">"+optSel1+
					  "</select>"+
					"</td>"+
					"<td width=\"223\" align=\"left\" valign=\"middle\" class=\"texto_1\">John study?</td>"+
					"</tr>"+
				"</table>"+
				"<table width=\"439\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"23\" height=\"46\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong class=\"texto_3\">B.</strong></td>"+
					"<td width=\"40\" align=\"center\" valign=\"middle\" class=\"texto_3\">He</td>"+
					"<td width=\"131\" align=\"center\" background=\"../img/bg_selec_peque.png\">"+
					  "<select name=\"sel2AnswerE7\" class=\"bg_selec_peque_Verde\" id=\"sel2AnswerE7\">"+optSel2+
					  "</select>"+
					"</td>"+
					"<td width=\"237\" align=\"left\" valign=\"middle\" class=\"texto_3\">at Tech Communications College.</td>"+
					"</tr>"+
				"</table></td>"+
			  "</tr><input type=\"hidden\" id=\"vez\" value="+vez+" />"+
			"</table>";
			else if(idQst == 4)
				html = "<table align=\"center\" background=\"../img/bg_Cuadro7.png\" width=\"580\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"582\" height=\"154\" align=\"center\" valign=\"middle\"><table width=\"393\" border=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"23\" height=\"46\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong>A.</strong></td>"+
				"<td width=\"128\" align=\"center\" background=\"../img/bg_selec_peque.png\">"+
				  "<select name=\"sel1AnswerE7\" class=\"bg_selec_peque\" id=\"sel1AnswerE7\">"+optSel1+
					"</select>"+
				"</td>"+
				"<td width=\"236\" align=\"left\" valign=\"middle\" class=\"texto_1\">you work in a hospital?</td>"+
				"</tr>"+
			"</table>"+
			"<table width=\"392\" border=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"23\" height=\"46\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong class=\"texto_3\">B.</strong></td>"+
				"<td width=\"53\" align=\"center\" valign=\"middle\" class=\"texto_3\">No, I </td>"+
				"<td width=\"127\" align=\"center\" background=\"../img/bg_selec_peque.png\">"+
				  "<select name=\"sel2AnswerE7\" class=\"bg_selec_peque_Verde\" id=\"sel2AnswerE7\">"+optSel2+
				  "</select>"+
				"</td>"+
				"<td width=\"181\" align=\"left\" valign=\"middle\" class=\"texto_3\">. I work in a restaurant.</td>"+
				"</tr>"+
			"</table></td>"+
		  "</tr><input type=\"hidden\" id=\"vez\" value="+vez+" />"+
		"</table>";
			else if(idQst == 5)
				html = "<table align=\"center\" background=\"../img/bg_Cuadro7.png\" width=\"580\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"582\" height=\"154\" align=\"center\" valign=\"middle\"><table width=\"453\" border=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"25\" height=\"46\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong>A.</strong></td>"+
				"<td width=\"42\" align=\"center\" valign=\"middle\" class=\"texto_1\">How</td>"+
				"<td width=\"125\" align=\"center\" background=\"../img/bg_selec_peque.png\">"+
				  "<select name=\"sel1AnswerE7\" class=\"bg_selec_peque\" id=\"sel1AnswerE7\">"+optSel1+
				  "</select>"+
				"</td>"+
				"<td width=\"250\" align=\"left\" valign=\"middle\" class=\"texto_1\">you like your new job?</td>"+
				"</tr>"+
			"</table>"+
			"<table width=\"454\" border=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"19\" height=\"46\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong class=\"texto_3\">B.</strong></td>"+
				"<td width=\"57\" align=\"center\" valign=\"middle\" class=\"texto_3\">I really </td>"+
				"<td width=\"126\" align=\"center\" background=\"../img/bg_selec_peque.png\">"+
				  "<select name=\"sel2AnswerE7\" class=\"bg_selec_peque_Verde\" id=\"sel2AnswerE7\">"+optSel2+
				  "</select>"+
				"</td>"+
				"<td width=\"244\" align=\"left\" valign=\"middle\" class=\"texto_3\">my new job. It's very  interesting.</td>"+
				"</tr>"+
			"</table></td>"+
		  "</tr><input type=\"hidden\" id=\"vez\" value="+vez+" />"+
		"</table>";
			else
				html = "<table align=\"center\" background=\"../img/bg_Cuadro7.png\" width=\"580\" border=\"0\">"+
				  "<tr>"+
					"<td width=\"582\" height=\"154\" align=\"center\" valign=\"middle\"><table width=\"371\" border=\"0\" cellspacing=\"0\">"+
					  "<tr>"+
						"<td width=\"23\" height=\"46\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong>A.</strong></td>"+
						"<td width=\"128\" align=\"center\" background=\"../img/bg_selec_peque.png\">"+
						  "<select name=\"sel1AnswerE7\" class=\"bg_selec_peque\" id=\"sel1AnswerE7\">"+optSel1+
							"</select>"+
						"</td>"+
						"<td width=\"214\" align=\"left\" valign=\"middle\" class=\"texto_1\">"+txt1+"</td>"+
						"</tr>"+
					"</table>"+
					"<table width=\"370\" border=\"0\" cellspacing=\"0\">"+
					  "<tr>"+
						"<td width=\"23\" height=\"46\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong class=\"texto_3\">B.</strong></td>"+
						"<td width=\"53\" align=\"center\" valign=\"middle\" class=\"texto_3\">"+txt2+"</td>"+
						"<td width=\"130\" align=\"center\" background=\"../img/bg_selec_peque.png\">"+
						  "<select name=\"sel2AnswerE7\" class=\"bg_selec_peque_Verde\" id=\"sel2AnswerE7\">"+optSel2+
						  "</select>"+
						"</td>"+
						"<td width=\"156\" align=\"left\" valign=\"middle\" class=\"texto_3\">. "+txt3+"</td>"+
						"</tr>"+
					"</table>"+
					"</td>"+
					  "</tr><input type=\"hidden\" id=\"vez\" value="+vez+" />"+
					"</table>";
			
			$('#divAnswerSelE7').html(html); 
			actualizardivCalL2E7(img, varscore);
		}
	}
}

function actualizarBtnL2E7(idQst, idBtn)
{
	if(idBtn == 3)
		btn = "<table width=\"113\" border=\"0\" cellspacing=\"0\">"+
                "<tr>"+
                  "<td width=\"33\" height=\"31\" align=\"center\" valign=\"middle\"><img src=\"../img/8.btn_chulito_desab.png\" name=\"Image19\" width=\"25\" height=\"25\" border=\"0\" id=\"Image19\" /></td>"+
                  "<td width=\"39\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL2E7("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image20','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image20\" width=\"25\" height=\"25\" border=\"0\" id=\"Image20\" /></a></td>"+
                  "<td width=\"35\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL2E7("+idQst+",3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image21','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image21\" width=\"29\" height=\"25\" border=\"0\" id=\"Image21\" /></a></td>"+
                  "</tr>"+
              "</table>";
	else
		btn = "<table width=\"113\" border=\"0\" cellspacing=\"0\">"+
                "<tr>"+
                  "<td width=\"33\" height=\"31\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL2E7("+idQst+",1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image19','','../img/8.btn_chulito2.png',1)\"><img src=\"../img/8.btn_chulito.png\" name=\"Image19\" width=\"25\" height=\"25\" border=\"0\" id=\"Image19\" /></a></td>"+
                  "<td width=\"39\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL2E7("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image20','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image20\" width=\"25\" height=\"25\" border=\"0\" id=\"Image20\" /></a></td>"+
                  "<td width=\"35\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL2E7("+idQst+",3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image21','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image21\" width=\"29\" height=\"25\" border=\"0\" id=\"Image21\" /></a></td>"+
                  "</tr>"+
              "</table>";
			
	$('#divBtn').html(btn);
}

function actualizardivCalL2E7(img, iptScore)
{
	//alert(idBtn);
	if(img != "")
		html = "<img src=\"../img/"+img+".png\" width=\"30\" height=\"30\" />"+
				"<input type=\"hidden\" id=\"inptscore\" name=\"inptscore\" value="+iptScore+" />";
	else		
		html = "&nbsp;<input type=\"hidden\" id=\"inptscore\" name=\"inptscore\" value="+iptScore+" />";
	
	$('#divCalL2E7').html(html);
}

function cambiarDivL2Ex7(idQst)
{	
	iptScore = $("#inptscore").attr("value");
	
	if (idQst == 1)
	{	
		tblQst = "<table align=\"center\" background=\"../img/bg_Cuadro7.png\" width=\"580\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"582\" height=\"154\" align=\"center\" valign=\"middle\"><table width=\"348\" border=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"23\" height=\"46\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong>A.</strong></td>"+
				"<td width=\"39\" align=\"center\" valign=\"middle\" class=\"texto_1\">What</td>"+
				"<td width=\"128\" align=\"center\" background=\"../img/bg_selec_peque.png\">"+
				  "<select name=\"sel1AnswerE7\" class=\"bg_selec_peque\" id=\"sel1AnswerE7\">"+
					"<option value=\"\"></option>"+
					"<option value=\"optA\">do</option>"+
					"<option value=\"optB\">does</option>"+
				  "</select>"+
				"</td>"+
				"<td width=\"150\" align=\"left\" valign=\"middle\" class=\"texto_1\">your sister do there?</td>"+
				"</tr>"+
			"</table>"+
			"<table width=\"348\" border=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"23\" height=\"46\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong class=\"texto_3\">B.</strong></td>"+
				"<td width=\"39\" align=\"center\" valign=\"middle\" class=\"texto_3\">She</td>"+
				"<td width=\"128\" align=\"center\" background=\"../img/bg_selec_peque.png\">"+
				  "<select name=\"sel2AnswerE7\" class=\"bg_selec_peque_Verde\" id=\"sel2AnswerE7\">"+
					"<option value=\"\"></option>"+
					"<option value=\"optA\">work</option>"+
					"<option value=\"optB\">works</option>"+
				  "</select>"+
				"</td>"+
				"<td width=\"150\" align=\"left\" valign=\"middle\" class=\"texto_3\">at a TV station.</td>"+
				"</tr>"+
			"</table></td>"+
		  "</tr><input type=\"hidden\" id=\"vez\" value=0 />"+
		"</table>";
		
		btnQst = "<table align=\"center\" width=\"201\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL2Ex7(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image13','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_2.png\" name=\"Image13\" width=\"40\" height=\"53\" border=\"0\" id=\"Image13\" /></a></td>"+
			"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL2Ex7(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image17','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image17\" width=\"40\" height=\"53\" border=\"0\" id=\"Image17\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL2Ex7(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image18','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_1.png\" name=\"Image18\" width=\"40\" height=\"53\" border=\"0\" id=\"Image18\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL2Ex7(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image22','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_1.png\" name=\"Image22\" width=\"40\" height=\"53\" border=\"0\" id=\"Image22\" /></a></td>"+
			"<td width=\"1\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"22\"><a href=\"#\" onclick=\"cambiarDivL2Ex7(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image23','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_1.png\" name=\"Image23\" width=\"40\" height=\"53\" border=\"0\" id=\"Image23\" /></a></td>"+
		  "</tr>"+
		"</table>";
	}
	else if (idQst == 2)
	{
		prev = 1;
		next = 3;
		tblQst = "<table align=\"center\" background=\"../img/bg_Cuadro7.png\" width=\"580\" border=\"0\">"+
			  "<tr>"+
				"<td width=\"582\" height=\"154\" align=\"center\" valign=\"middle\"><table width=\"371\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"23\" height=\"46\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong>A.</strong></td>"+
					"<td width=\"128\" align=\"center\" background=\"../img/bg_selec_peque.png\">"+
					  "<select name=\"sel1AnswerE7\" class=\"bg_selec_peque\" id=\"sel1AnswerE7\">"+
						"<option value=\"\"></option>"+
						"<option value=\"optA\">Do</option>"+
						"<option value=\"optB\">Does</option>"+
						"</select>"+
					"</td>"+
					"<td width=\"214\" align=\"left\" valign=\"middle\" class=\"texto_1\">your son like his new office?</td>"+
					"</tr>"+
				"</table>"+
				"<table width=\"370\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"23\" height=\"46\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong class=\"texto_3\">B.</strong></td>"+
					"<td width=\"53\" align=\"center\" valign=\"middle\" class=\"texto_3\">Yes, he </td>"+
					"<td width=\"130\" align=\"center\" background=\"../img/bg_selec_peque.png\">"+
					  "<select name=\"sel2AnswerE7\" class=\"bg_selec_peque_Verde\" id=\"sel2AnswerE7\">"+
						"<option value=\"\"></option>"+
						"<option value=\"optA\">do</option>"+
						"<option value=\"optB\">does</option>"+
					  "</select>"+
					"</td>"+
					"<td width=\"156\" align=\"left\" valign=\"middle\" class=\"texto_3\">. He really likes it.</td>"+
					"</tr>"+
				"</table>"+
				"</td></tr><input type=\"hidden\" id=\"vez\" value=0 />"+
			"</table>";
		
		btnQst = "<table align=\"center\" width=\"201\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL2Ex7(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image13','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image13\" width=\"40\" height=\"53\" border=\"0\" id=\"Image13\" /></a></td>"+
			"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL2Ex7(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image17','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_2.png\" name=\"Image17\" width=\"40\" height=\"53\" border=\"0\" id=\"Image17\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL2Ex7(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image18','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_1.png\" name=\"Image18\" width=\"40\" height=\"53\" border=\"0\" id=\"Image18\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL2Ex7(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image22','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_1.png\" name=\"Image22\" width=\"40\" height=\"53\" border=\"0\" id=\"Image22\" /></a></td>"+
			"<td width=\"1\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"22\"><a href=\"#\" onclick=\"cambiarDivL2Ex7(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image23','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_1.png\" name=\"Image23\" width=\"40\" height=\"53\" border=\"0\" id=\"Image23\" /></a></td>"+
		  "</tr>"+
		"</table>";
	}
	else if (idQst == 3)
	{
		prev = 2;
		next = 4;
		tblQst = "<table align=\"center\" background=\"../img/bg_Cuadro7.png\" width=\"580\" border=\"0\">"+
			  "<tr>"+
				"<td width=\"582\" height=\"154\" align=\"center\" valign=\"middle\"><table width=\"438\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"24\" height=\"46\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong>A.</strong></td>"+
					"<td width=\"55\" align=\"center\" valign=\"middle\" class=\"texto_1\">Where </td>"+
					"<td width=\"128\" align=\"center\" background=\"../img/bg_selec_peque.png\">"+
					  "<select name=\"sel1AnswerE7\" class=\"bg_selec_peque\" id=\"sel1AnswerE7\">"+
						"<option value=\"\"></option>"+
						"<option value=\"optA\">do</option>"+
						"<option value=\"optB\">does</option>"+
					  "</select>"+
					"</td>"+
					"<td width=\"223\" align=\"left\" valign=\"middle\" class=\"texto_1\">John study?</td>"+
					"</tr>"+
				"</table>"+
				"<table width=\"439\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"23\" height=\"46\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong class=\"texto_3\">B.</strong></td>"+
					"<td width=\"40\" align=\"center\" valign=\"middle\" class=\"texto_3\">He</td>"+
					"<td width=\"131\" align=\"center\" background=\"../img/bg_selec_peque.png\">"+
					  "<select name=\"sel2AnswerE7\" class=\"bg_selec_peque_Verde\" id=\"sel2AnswerE7\">"+
						"<option value=\"\"></option>"+
						"<option value=\"optA\">study</option>"+
						"<option value=\"optB\">studies</option>"+
					  "</select>"+
					"</td>"+
					"<td width=\"237\" align=\"left\" valign=\"middle\" class=\"texto_3\">at Tech Communications College.</td>"+
					"</tr>"+
				"</table></td>"+
			  "</tr><input type=\"hidden\" id=\"vez\" value=0 />"+
			"</table>";
	
		btnQst = "<table align=\"center\" width=\"201\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL2Ex7(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image13','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image13\" width=\"40\" height=\"53\" border=\"0\" id=\"Image13\" /></a></td>"+
			"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL2Ex7(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image17','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image17\" width=\"40\" height=\"53\" border=\"0\" id=\"Image17\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL2Ex7(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image18','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_2.png\" name=\"Image18\" width=\"40\" height=\"53\" border=\"0\" id=\"Image18\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL2Ex7(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image22','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_1.png\" name=\"Image22\" width=\"40\" height=\"53\" border=\"0\" id=\"Image22\" /></a></td>"+
			"<td width=\"1\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"22\"><a href=\"#\" onclick=\"cambiarDivL2Ex7(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image23','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_1.png\" name=\"Image23\" width=\"40\" height=\"53\" border=\"0\" id=\"Image23\" /></a></td>"+
		  "</tr>"+
		"</table>";
	}
	else if (idQst == 4)
	{
		tblQst = "<table align=\"center\" background=\"../img/bg_Cuadro7.png\" width=\"580\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"582\" height=\"154\" align=\"center\" valign=\"middle\"><table width=\"393\" border=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"23\" height=\"46\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong>A.</strong></td>"+
				"<td width=\"128\" align=\"center\" background=\"../img/bg_selec_peque.png\">"+
				  "<select name=\"sel1AnswerE7\" class=\"bg_selec_peque\" id=\"sel1AnswerE7\">"+
					"<option value=\"\"></option>"+
					"<option value=\"optA\">Do</option>"+
					"<option value=\"optB\">Does</option>"+
					"</select>"+
				"</td>"+
				"<td width=\"236\" align=\"left\" valign=\"middle\" class=\"texto_1\">you work in a hospital?</td>"+
				"</tr>"+
			"</table>"+
			"<table width=\"392\" border=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"23\" height=\"46\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong class=\"texto_3\">B.</strong></td>"+
				"<td width=\"53\" align=\"center\" valign=\"middle\" class=\"texto_3\">No, I </td>"+
				"<td width=\"127\" align=\"center\" background=\"../img/bg_selec_peque.png\">"+
				  "<select name=\"sel2AnswerE7\" class=\"bg_selec_peque_Verde\" id=\"sel2AnswerE7\">"+
					"<option value=\"\"></option>"+
					"<option value=\"optA\">don't</option>"+
					"<option value=\"optB\">doesn't</option>"+
				  "</select>"+
				"</td>"+
				"<td width=\"181\" align=\"left\" valign=\"middle\" class=\"texto_3\">. I work in a restaurant.</td>"+
				"</tr>"+
			"</table></td>"+
		  "</tr><input type=\"hidden\" id=\"vez\" value=0 />"+
		"</table>";
		
		btnQst = "<table align=\"center\" width=\"201\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL2Ex7(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image13','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image13\" width=\"40\" height=\"53\" border=\"0\" id=\"Image13\" /></a></td>"+
			"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL2Ex7(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image17','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image17\" width=\"40\" height=\"53\" border=\"0\" id=\"Image17\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL2Ex7(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image18','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_1.png\" name=\"Image18\" width=\"40\" height=\"53\" border=\"0\" id=\"Image18\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL2Ex7(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image22','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_2.png\" name=\"Image22\" width=\"40\" height=\"53\" border=\"0\" id=\"Image22\" /></a></td>"+
			"<td width=\"1\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"22\"><a href=\"#\" onclick=\"cambiarDivL2Ex7(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image23','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_1.png\" name=\"Image23\" width=\"40\" height=\"53\" border=\"0\" id=\"Image23\" /></a></td>"+
		  "</tr>"+
		"</table>";
	}
	else if (idQst == 5)
	{	
		tblQst = "<table align=\"center\" background=\"../img/bg_Cuadro7.png\" width=\"580\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"582\" height=\"154\" align=\"center\" valign=\"middle\"><table width=\"453\" border=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"25\" height=\"46\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong>A.</strong></td>"+
				"<td width=\"42\" align=\"center\" valign=\"middle\" class=\"texto_1\">How</td>"+
				"<td width=\"125\" align=\"center\" background=\"../img/bg_selec_peque.png\">"+
				  "<select name=\"sel1AnswerE7\" class=\"bg_selec_peque\" id=\"sel1AnswerE7\">"+
					"<option value=\"\"></option>"+
					"<option value=\"optA\">do</option>"+
					"<option value=\"optB\">does</option>"+
				  "</select>"+
				"</td>"+
				"<td width=\"250\" align=\"left\" valign=\"middle\" class=\"texto_1\">you like your new job?</td>"+
				"</tr>"+
			"</table>"+
			"<table width=\"454\" border=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"19\" height=\"46\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong class=\"texto_3\">B.</strong></td>"+
				"<td width=\"57\" align=\"center\" valign=\"middle\" class=\"texto_3\">I really </td>"+
				"<td width=\"126\" align=\"center\" background=\"../img/bg_selec_peque.png\">"+
				  "<select name=\"sel2AnswerE7\" class=\"bg_selec_peque_Verde\" id=\"sel2AnswerE7\">"+
					"<option value=\"\"></option>"+
					"<option value=\"optA\">like</option>"+
					"<option value=\"optB\">likes</option>"+
				  "</select>"+
				"</td>"+
				"<td width=\"244\" align=\"left\" valign=\"middle\" class=\"texto_3\">my new job. It's very  interesting.</td>"+
				"</tr>"+
			"</table></td>"+
		  "</tr><input type=\"hidden\" id=\"vez\" value=0 />"+
		"</table>";
		
		btnQst = "<table align=\"center\" width=\"201\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL2Ex7(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image13','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image13\" width=\"40\" height=\"53\" border=\"0\" id=\"Image13\" /></a></td>"+
			"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL2Ex7(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image17','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image17\" width=\"40\" height=\"53\" border=\"0\" id=\"Image17\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL2Ex7(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image18','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_1.png\" name=\"Image18\" width=\"40\" height=\"53\" border=\"0\" id=\"Image18\" /></a></td>"+
			"<td width=\"3\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" alt=\"\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"40\"><a href=\"#\" onclick=\"cambiarDivL2Ex7(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image22','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_1.png\" name=\"Image22\" width=\"40\" height=\"53\" border=\"0\" id=\"Image22\" /></a></td>"+
			"<td width=\"1\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
			"<td width=\"22\"><a href=\"#\" onclick=\"cambiarDivL2Ex7(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image23','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_2.png\" name=\"Image23\" width=\"40\" height=\"53\" border=\"0\" id=\"Image23\" /></a></td>"+
		  "</tr>"+
		"</table>";
	}
	html = "<table align=\"center\" width=\"772\" border=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"770\" height=\"142\" align=\"left\" valign=\"top\"><img src=\"../img/titulos/L2/img_L2_exer_7.png\" width=\"357\" height=\"114\" /></td>"+
			"</tr>"+
			"</table>"+
			"<div id=\"divAnswerSelE7\">"+tblQst+"</div>"+btnQst+
		"<table align=\"center\" width=\"36\" border=\"0\" cellspacing=\"0\">"+
			"<tr>"+
			  "<td width=\"34\" height=\"56\" align=\"center\"><table align=\"center\" width=\"85\" border=\"0\">"+
				"<tr>"+
				  "<td width=\"79\" height=\"41\" align=\"center\" valign=\"bottom\"><div id=\"divCalL2E7\"><input type=\"hidden\" id=\"inptscore\" name=\"inptscore\" value="+iptScore+"/></div></td>"+
				"</tr>"+
			  "</table>"+
			  "<table align=\"center\" width=\"153\" border=\"0\" cellspacing=\"0\">"+
				"<tr>"+
				  "<td width=\"147\" height=\"50\" align=\"center\" valign=\"middle\" background=\"../img/8.bg_refresh.png\">"+
				  "<div id=\"divBtn\">"+
				  "<table width=\"113\" border=\"0\" cellspacing=\"0\">"+
					"<tr>"+
					  "<td width=\"33\" height=\"31\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL2E7("+idQst+",1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image19','','../img/8.btn_chulito2.png',1)\"><img src=\"../img/8.btn_chulito.png\" name=\"Image19\" width=\"25\" height=\"25\" border=\"0\" id=\"Image19\" /></a></td>"+
					  "<td width=\"39\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL2E7("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image20','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image20\" width=\"25\" height=\"25\" border=\"0\" id=\"Image20\" /></a></td>"+
					  "<td width=\"35\" align=\"center\" valign=\"middle\"><img src=\"../img/8.btn_ojo_desab.png\" name=\"Image21\" width=\"29\" height=\"25\" border=\"0\" id=\"Image21\" /></td>"+
					  "</tr>"+
				  "</table></div></td>"+
				"</tr>"+
			  "</table></td>"+
			  "</tr>"+
		  "</table>";
	
	$('#contenido').html(html);
}
/* Exercise 7 */

/* Exercise 8 */
function verificarL2E8(idQst, idBtn)
{
	ansL2E8 = $("#selAnswerE8").val();
	vez = $("#vez").val();
	img = "";
	
	varscore = $("#inptscore").attr("value");
	
	doLMSSetValue("cmi.core.score.min", 0);
	doLMSSetValue("cmi.core.score.max", 100);
	
	if(ansL2E8 == "" && idBtn != 3)
		alert("You must select an answer.");
	else{
		if(idBtn == 1)
		{
			if(idQst == 1 && ansL2E8 == 'optC'){
				img = "good";
				varscore = parseFloat(varscore) + 25;
			}
			else if (idQst == 2 && ansL2E8 == 'optC'){
				img = "good";
				varscore = parseFloat(varscore) + 25;
			}
			else if (idQst == 3 && ansL2E8 == "optB"){
				img = "good";
				varscore = parseFloat(varscore) + 25;
			}
			else if (idQst == 4 && ansL2E8 == 'optB'){
				img = "good";
				varscore = parseFloat(varscore) + 25;
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
			
			actualizardivCalL2E8(img, varscore);
		}
		else{
			if(idBtn == 3)
			{
				switch (idQst){
					case 1:
						value = "<select name=\"selAnswerE8\" class=\"bg_selec\" id=\"selAnswerE8\">"+
									"<option value=\"\"></option>"+
									"<option value=\"optA\">art</option>"+
									"<option value=\"optB\">music</option>"+
									"<option value=\"optC\" selected>English</option>"+
								  "</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
					case 2:
						value = "<select name=\"selAnswerE8\" class=\"bg_selec\" id=\"selAnswerE8\">"+
									"<option value=\"\"></option>"+
									"<option value=\"optA\">English</option>"+
									"<option value=\"optB\">music</option>"+
									"<option value=\"optC\" selected>engineering</option>"+
								  "</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
					case 3:
						value = "<select name=\"selAnswerE8\" class=\"bg_selec\" id=\"selAnswerE8\">"+
									"<option value=\"\"></option>"+
									"<option value=\"optA\">literature</option>"+
									"<option value=\"optB\" selected>math</option>"+
									"<option value=\"optC\">French</option>"+
								  "</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
					case 4:
						value = "<select name=\"selAnswerE8\" class=\"bg_selec\" id=\"selAnswerE8\">"+
									"<option value=\"\"></option>"+
									"<option value=\"optA\">drama</option>"+
									"<option value=\"optB\" selected>literature</option>"+
									"<option value=\"optC\">medicine</option>"+
								  "</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
				}
				actualizarBtnL2E8(idQst, idBtn);
			}	
			else if(idBtn == 2){
				vez = parseInt(vez) + 1;
				if(vez >= 3)
					actualizarBtnL2E8(idQst, idBtn);
				switch (idQst){
					case 1:
						value = "<select name=\"selAnswerE8\" class=\"bg_selec\" id=\"selAnswerE8\">"+
									"<option value=\"\"></option>"+
									"<option value=\"optA\">art</option>"+
									"<option value=\"optB\">music</option>"+
									"<option value=\"optC\">English</option>"+
								  "</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
					case 2:
						value = "<select name=\"selAnswerE8\" class=\"bg_selec\" id=\"selAnswerE8\">"+
									"<option value=\"\"></option>"+
									"<option value=\"optA\">English</option>"+
									"<option value=\"optB\">music</option>"+
									"<option value=\"optC\">engineering</option>"+
								  "</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
					case 3:
						value = "<select name=\"selAnswerE8\" class=\"bg_selec\" id=\"selAnswerE8\">"+
									"<option value=\"\"></option>"+
									"<option value=\"optA\">literature</option>"+
									"<option value=\"optB\">math</option>"+
									"<option value=\"optC\">French</option>"+
								  "</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
					case 4:
						value = "<select name=\"selAnswerE8\" class=\"bg_selec\" id=\"selAnswerE8\">"+
									"<option value=\"\"></option>"+
									"<option value=\"optA\">drama</option>"+
									"<option value=\"optB\">literature</option>"+
									"<option value=\"optC\">medicine</option>"+
								  "</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
				}
			}
			$('#divAnswerSelE8').html(value); 
			actualizardivCalL2E8(img, varscore);
		}
	}
}

function actualizarBtnL2E8(idQst, idBtn)
{
	if(idBtn == 3)
		btn = "<table width=\"149\" border=\"0\">"+
                  "<tr>"+
                    "<td width=\"49\" align=\"center\" valign=\"middle\"><img src=\"../img/8.btn_chulito_desab.png\" name=\"Image21\" width=\"25\" height=\"25\" border=\"0\" id=\"Image21\" /></td>"+
                    "<td width=\"38\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL2E8("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image24','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image24\" width=\"25\" height=\"25\" border=\"0\" id=\"Image24\" /></a></td>"+
                    "<td width=\"48\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL2E8("+idQst+",3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image25','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image25\" width=\"29\" height=\"25\" border=\"0\" id=\"Image25\" /></a></td>"+
                  "</tr>"+
                "</table>";
	else
		btn = "<table width=\"149\" border=\"0\">"+
                  "<tr>"+
                    "<td width=\"49\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL2E8("+idQst+",1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image21','','../img/8.btn_chulito2.png',1)\"><img src=\"../img/8.btn_chulito.png\" name=\"Image21\" width=\"25\" height=\"25\" border=\"0\" id=\"Image21\" /></a></td>"+
                    "<td width=\"38\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL2E8("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image24','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image24\" width=\"25\" height=\"25\" border=\"0\" id=\"Image24\" /></a></td>"+
                    "<td width=\"48\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL2E8("+idQst+",3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image25','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image25\" width=\"29\" height=\"25\" border=\"0\" id=\"Image25\" /></a></td>"+
                  "</tr>"+
                "</table>";
			
	$('#divBtn').html(btn);
}

function actualizardivCalL2E8(img, iptScore)
{
	//alert(idBtn);
	if(img != "")
		html = "<img src=\"../img/"+img+".png\" width=\"30\" height=\"30\" />"+
				"<input type=\"hidden\" id=\"inptscore\" name=\"inptscore\" value="+iptScore+" />";
	else		
		html = "&nbsp;<input type=\"hidden\" id=\"inptscore\" name=\"inptscore\" value="+iptScore+" />";
	
	$('#divCalL2E8').html(html);
}

function cambiarDivL2Ex8(idQst)
{	
	iptScore = $("#inptscore").attr("value");
	
	if (idQst == 1)
	{	
		prev = 4;
		next = 2;
		jpg = "art-1_2_vb2_i";
		
		swf = "<object id=\"FlashID2\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\">"+
              "<param name=\"movie\" value=\"../swf/L2/L2_Exe_8/btn_L2_exer_8_a.swf\" />"+
              "<param name=\"quality\" value=\"high\" />"+
              "<param name=\"wmode\" value=\"transparent\" />"+
              "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
              "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
              "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
              "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
              "<!--[if !IE]>-->"+
              "<object type=\"application/x-shockwave-flash\" data=\"../swf/L2/L2_Exe_8/btn_L2_exer_8_a.swf\" width=\"45\" height=\"40\">"+
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
			
		optQst = "<option value=\"\"></option>"+
                "<option value=\"optA\">art</option>"+
                "<option value=\"optB\">music</option>"+
                "<option value=\"optC\">English</option>";
		
		btnQst = "<table width=\"169\" cellspacing=\"0\" cellpadding=\"0\">"+
				  "<tr>"+
					"<td width=\"40\" height=\"53\"><a href=\"#\" onclick=\"cambiarDivL2Ex8(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image13','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_2.png\" name=\"Image13\" width=\"40\" height=\"53\" border=\"0\" id=\"Image13\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex8(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image14','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image14\" width=\"40\" height=\"53\" border=\"0\" id=\"Image14\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex8(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_1.png\" name=\"Image15\" width=\"40\" height=\"53\" border=\"0\" id=\"Image15\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"38\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex8(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_1.png\" name=\"Image16\" width=\"40\" height=\"53\" border=\"0\" id=\"Image16\" /></a></td>"+
					"</tr>"+
				"</table>";
	}
	else if (idQst == 2)
	{
		prev = 1;
		next = 3;
		jpg = "art-1_2_vb2_e";
		
		swf = "<object id=\"FlashID3\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\">"+
              "<param name=\"movie\" value=\"../swf/L2/L2_Exe_8/btn_L2_exer_8_b.swf\" />"+
              "<param name=\"quality\" value=\"high\" />"+
              "<param name=\"wmode\" value=\"transparent\" />"+
              "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
              "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
              "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
              "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
              "<!--[if !IE]>-->"+
              "<object type=\"application/x-shockwave-flash\" data=\"../swf/L2/L2_Exe_8/btn_L2_exer_8_b.swf\" width=\"45\" height=\"40\">"+
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
			
		optQst = "<option value=\"\"></option>"+
				"<option value=\"optA\">English</option>"+
				"<option value=\"optB\">music</option>"+
				"<option value=\"optC\">engineering</option>";
		
		btnQst = "<table width=\"169\" cellspacing=\"0\" cellpadding=\"0\">"+
				  "<tr>"+
					"<td width=\"40\" height=\"53\"><a href=\"#\" onclick=\"cambiarDivL2Ex8(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image13','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image13\" width=\"40\" height=\"53\" border=\"0\" id=\"Image13\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex8(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image14','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_2.png\" name=\"Image14\" width=\"40\" height=\"53\" border=\"0\" id=\"Image14\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex8(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_1.png\" name=\"Image15\" width=\"40\" height=\"53\" border=\"0\" id=\"Image15\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"38\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex8(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_1.png\" name=\"Image16\" width=\"40\" height=\"53\" border=\"0\" id=\"Image16\" /></a></td>"+
					"</tr>"+
				"</table>";
	}
	else if (idQst == 3)
	{
		prev = 2;
		next = 4;
		jpg = "art-1_2_vb2_g";
		
		swf = "<object id=\"FlashID4\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\">"+
              "<param name=\"movie\" value=\"../swf/L2/L2_Exe_8/btn_L2_exer_8_c.swf\" />"+
              "<param name=\"quality\" value=\"high\" />"+
              "<param name=\"wmode\" value=\"transparent\" />"+
              "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
              "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
              "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
              "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
              "<!--[if !IE]>-->"+
              "<object type=\"application/x-shockwave-flash\" data=\"../swf/L2/L2_Exe_8/btn_L2_exer_8_c.swf\" width=\"45\" height=\"40\">"+
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
		
		optQst = "<option value=\"\"></option>"+
				"<option value=\"optA\">literature</option>"+
				"<option value=\"optB\">math</option>"+
				"<option value=\"optC\">French</option>";
	
		btnQst = "<table width=\"169\" cellspacing=\"0\" cellpadding=\"0\">"+
				  "<tr>"+
					"<td width=\"40\" height=\"53\"><a href=\"#\" onclick=\"cambiarDivL2Ex8(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image13','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image13\" width=\"40\" height=\"53\" border=\"0\" id=\"Image13\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex8(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image14','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image14\" width=\"40\" height=\"53\" border=\"0\" id=\"Image14\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex8(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_2.png\" name=\"Image15\" width=\"40\" height=\"53\" border=\"0\" id=\"Image15\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"38\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex8(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_1.png\" name=\"Image16\" width=\"40\" height=\"53\" border=\"0\" id=\"Image16\" /></a></td>"+
					"</tr>"+
				"</table>";
	}
	else if (idQst == 4)
	{
		prev = 3;
		next = 1;
		jpg = "art-1_2_vb2_d";
		
		swf = "<object id=\"FlashID5\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\">"+
              "<param name=\"movie\" value=\"../swf/L2/L2_Exe_8/btn_L2_exer_8_d.swf\" />"+
              "<param name=\"quality\" value=\"high\" />"+
              "<param name=\"wmode\" value=\"transparent\" />"+
              "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
              "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
              "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
              "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
              "<!--[if !IE]>-->"+
              "<object type=\"application/x-shockwave-flash\" data=\"../swf/L2/L2_Exe_8/btn_L2_exer_8_d.swf\" width=\"45\" height=\"40\">"+
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
		
		optQst = "<option value=\"\"></option>"+
				"<option value=\"optA\">drama</option>"+
				"<option value=\"optB\">literature</option>"+
				"<option value=\"optC\">medicine</option>";
		
		btnQst = "<table width=\"169\" cellspacing=\"0\" cellpadding=\"0\">"+
				  "<tr>"+
					"<td width=\"40\" height=\"53\"><a href=\"#\" onclick=\"cambiarDivL2Ex8(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image13','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image13\" width=\"40\" height=\"53\" border=\"0\" id=\"Image13\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex8(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image14','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image14\" width=\"40\" height=\"53\" border=\"0\" id=\"Image14\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex8(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_1.png\" name=\"Image15\" width=\"40\" height=\"53\" border=\"0\" id=\"Image15\" /></a></td>"+
					"<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
					"<td width=\"38\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex8(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_2.png\" name=\"Image16\" width=\"40\" height=\"53\" border=\"0\" id=\"Image16\" /></a></td>"+
					"</tr>"+
				"</table>";
	}
	html = "<table width=\"685\" border=\"0\">"+
			"<tr>"+
				"<td width=\"298\" height=\"65\" align=\"center\" valign=\"middle\"><img src=\"../img/titulos/L2/img_L2_exer_8.png\" width=\"252\" height=\"108\" /></td>"+
				"<td width=\"377\" align=\"center\" valign=\"bottom\">"+btnQst+"</td>"+
			  "</tr>"+
			"</table>"+
        "<table width=\"769\" border=\"0\" cellspacing=\"0\">"+
          "<tr>"+
            "<td width=\"97\" height=\"114\" rowspan=\"4\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"cambiarDivL2Ex8("+prev+")\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image22','','../img/11.izq2.png',1)\"><img src=\"../img/11.izq.png\" name=\"Image22\" width=\"50\" height=\"55\" border=\"0\" id=\"Image22\" /></a></td>"+
            "<td width=\"175\" height=\"144\" align=\"center\" valign=\"middle\">"+swf+"</td>"+
            "<td width=\"434\" rowspan=\"4\" align=\"center\" valign=\"middle\"><img src=\"../jpg/"+jpg+".png\" width=\"392\" height=\"338\" /></td>"+
            "<td width=\"55\" rowspan=\"4\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"cambiarDivL2Ex8("+next+")\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image23','','../img/11.der2.png',1)\"><img src=\"../img/11.der.png\" name=\"Image23\" width=\"50\" height=\"55\" border=\"0\" id=\"Image23\" /></a></td>"+
            "</tr>"+
          "<tr>"+
            "<td height=\"47\" align=\"center\" valign=\"middle\" background=\"../img/bg_selec_medi_2.png\"><div id=\"divAnswerSelE8\">"+
              "<select name=\"selAnswerE8\" class=\"bg_selec\" id=\"selAnswerE8\">"+optQst+
              "</select>"+
			  "<input type=\"hidden\" id=\"vez\" value=0 />"+
            "</div></td>"+
          "</tr>"+
          "<tr>"+
            "<td height=\"31\" align=\"center\" valign=\"middle\"><div id=\"divCalL2E8\"><input type=\"hidden\" id=\"inptscore\" name=\"inptscore\" value="+iptScore+"/></div></td>"+
          "</tr>"+
          "<tr>"+
            "<td align=\"center\" valign=\"top\"><table width=\"160\" border=\"0\">"+
              "<tr>"+
                "<td width=\"154\" height=\"48\" background=\"../img/8.bg_refresh.png\">"+
				"<div id=\"divBtn\">"+
				"<table width=\"149\" border=\"0\">"+
                  "<tr>"+
                    "<td width=\"49\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL2E8("+idQst+",1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image21','','../img/8.btn_chulito2.png',1)\"><img src=\"../img/8.btn_chulito.png\" name=\"Image21\" width=\"25\" height=\"25\" border=\"0\" id=\"Image21\" /></a></td>"+
                    "<td width=\"38\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL2E8("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image24','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image24\" width=\"25\" height=\"25\" border=\"0\" id=\"Image24\" /></a></td>"+
                    "<td width=\"48\" align=\"center\" valign=\"middle\"><img src=\"../img/8.btn_ojo_desab.png\" name=\"Image25\" width=\"29\" height=\"25\" border=\"0\" id=\"Image25\" /></td>"+
                  "</tr>"+
                "</table>"+
				"</div></td>"+
              "</tr>"+
            "</table></td>"+
          "</tr>"+
          "</table>";
	
	$('#divL2Exer8').html(html);
}
/* Exercise 8 */


/* Exercise 9 */
function verificarL2E9(idQst, idBtn)
{
	ansL2E9 = $("#iptAnswerE9").val();
	ans1L2E9 = $("#ipt2AnswerE9").val();
	vez = $("#vez").val();
	img = "";
	
	varscore = $("#inptscore").attr("value");
	
	doLMSSetValue("cmi.core.score.min", 0);
	doLMSSetValue("cmi.core.score.max", 100);
	
	if(ansL2E9 == "" && idBtn != 3)
		alert("You must write an answer.");
	else{
		if(idBtn == 1)
		{
			if(idQst == 1 && ansL2E9 == 'architecture'){
				img = "good";
				varscore = parseFloat(varscore) + 25;
			}
			else if (idQst == 2 && ansL2E9 == 'literature' && ans1L2E9 == "Yes, she does"){
				img = "good";
				varscore = parseFloat(varscore) + 25;
			}
			else if (idQst == 3 && ansL2E9 == "Yes, she does" && ans1L2E9 == "No, he doesn't"){
				img = "good";
				varscore = parseFloat(varscore) + 25;
			}
			else if (idQst == 4 && ansL2E9 == 'Yes, they do'){
				img = "good";
				varscore = parseFloat(varscore) + 25;
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
			
			actualizardivCalL2E9(img, varscore);
		}
		else{
			if(idBtn == 3)
			{
				switch (idQst){
					case 1:
						value = "<table align=\"center\" width=\"525\" border=\"0\" cellspacing=\"0\">"+
							  "<tr>"+
								"<td width=\"77\" height=\"187\" align=\"center\" valign=\"middle\"><a href=\"#\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image22','','../img/11.izq2.png',1)\"><img src=\"../img/11.izq.png\" name=\"Image22\" width=\"50\" height=\"55\" border=\"0\" id=\"Image22\" /></a></td>"+
								"<td width=\"392\" align=\"center\" valign=\"middle\" background=\"../img/bg_Cuadro9.png\"><table width=\"269\" border=\"0\">"+
								  "<tr class=\"texto_1_mediano\">"+
									"<td width=\"16\" align=\"right\" valign=\"middle\">1.</td>"+
									"<td width=\"234\" align=\"left\">What does Carol study?</td>"+
								  "</tr>"+
								"</table>"+
								  "<table width=\"235\" border=\"0\">"+
									"<tr>"+
									  "<td width=\"101\" class=\"texto_2_mediano\">She studies</td>"+
									  "<td width=\"114\">"+
										"<input name=\"iptAnswerE9\" type=\"text\" class=\"raya_bg_cien2_cien\" id=\"iptAnswerE9\" value=\"architecture\" />"+
									  "</td>"+
									  "<td width=\"10\" class=\"texto_2_mediano\">.</td>"+
									"</tr>"+
								"</table></td>"+
								"<td width=\"50\" align=\"center\" valign=\"middle\"><a href=\"#\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image23','','../img/11.der2.png',1)\"><img src=\"../img/11.der.png\" name=\"Image23\" width=\"50\" height=\"55\" border=\"0\" id=\"Image23\" /></a></td>"+
							  "</tr><input type=\"hidden\" id=\"vez\" value="+vez+" />"
							  "</table>";
					break;
					case 2:
						value = "<table align=\"center\" width=\"555\" border=\"0\" cellspacing=\"0\">"+
						  "<tr>"+
							"<td width=\"77\" height=\"205\" align=\"center\" valign=\"middle\"><a href=\"#\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image22','','../img/11.izq2.png',1)\"><img src=\"../img/11.izq.png\" name=\"Image22\" width=\"50\" height=\"55\" border=\"0\" id=\"Image22\" /></a></td>"+
							"<td width=\"422\" align=\"center\" valign=\"middle\" background=\"../img/bg_Cuadro8.png\"><table width=\"295\" border=\"0\">"+
							  "<tr class=\"texto_1_mediano\">"+
								"<td width=\"18\" align=\"right\" valign=\"middle\">2.</td>"+
								"<td width=\"267\" align=\"left\">What does John's sister study?<br /></td>"+
							  "</tr>"+
							"</table>"+
							  "<table width=\"249\" border=\"0\">"+
								"<tr>"+
								  "<td width=\"96\" class=\"texto_2_mediano\">She studies</td>"+
								  "<td width=\"110\">"+
									"<input name=\"iptAnswerE9\" type=\"text\" class=\"raya_bg_cien2_cien\" id=\"iptAnswerE9\" value=\"literature\" />"+
								  "</td>"+
								  "<td width=\"29\" class=\"texto_2_mediano\">.</td>"+
								"</tr>"+
							"</table>"+
							  "<table width=\"296\" border=\"0\">"+
								"<tr class=\"texto_3_mediano\">"+
								  "<td width=\"19\" align=\"right\">3.</td>"+
								  "<td width=\"267\" align=\"left\"> Does she like it?<br /></td>"+
								"</tr>"+
							"</table>"+
							  "<table width=\"247\" border=\"0\">"+
								"<tr>"+
								  "<td width=\"231\">"+
									"<input name=\"ipt2AnswerE9\" type=\"text\" class=\"raya_bg_cien2verde_cien\" id=\"ipt2AnswerE9\" value=\"Yes, she does\" />"+
								  "</td>"+
								  "<td width=\"10\" class=\"texto_3_mediano\">.</td>"+
								"</tr>"+
							"</table></td>"+
							"<td width=\"50\" align=\"center\" valign=\"middle\"><a href=\"#\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image23','','../img/11.der2.png',1)\"><img src=\"../img/11.der.png\" name=\"Image23\" width=\"50\" height=\"55\" border=\"0\" id=\"Image23\" /></a></td>"+
						  "</tr><input type=\"hidden\" id=\"vez\" value="+vez+" />"+
						  "</table>";
								
					break;
					case 3:
						value = "<table align=\"center\" width=\"555\" border=\"0\" cellspacing=\"0\">"+
						  "<tr>"+
							"<td width=\"77\" height=\"205\" align=\"center\" valign=\"middle\"><a href=\"#\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image22','','../img/11.izq2.png',1)\"><img src=\"../img/11.izq.png\" name=\"Image22\" width=\"50\" height=\"55\" border=\"0\" id=\"Image22\" /></a></td>"+
							"<td width=\"422\" align=\"center\" valign=\"middle\" background=\"../img/bg_Cuadro8.png\"><table width=\"295\" border=\"0\">"+
							  "<tr class=\"texto_1_mediano\">"+
								"<td width=\"18\" align=\"right\" valign=\"middle\">4.</td>"+
								"<td width=\"267\" align=\"left\">Does she like math?<br /></td>"+
							  "</tr>"+
							"</table>"+
							  "<table width=\"249\" border=\"0\">"+
								"<tr>"+
								  "<td class=\"texto_2_mediano\">"+
									"<input name=\"iptAnswerE9\" type=\"text\" class=\"raya_bg_cien2_cien\" id=\"iptAnswerE9\" value=\"Yes, she does\" />"+
								  "</td>"+
								  "<td width=\"29\" class=\"texto_2_mediano\">.</td>"+
								"</tr>"+
							"</table>"+
							  "<table width=\"296\" border=\"0\">"+
								"<tr class=\"texto_3_mediano\">"+
								  "<td width=\"19\" align=\"right\">5.</td>"+
								  "<td width=\"267\" align=\"left\"> Does he like math?<br /></td>"+
								"</tr>"+
							"</table>"+
							  "<table width=\"247\" border=\"0\">"+
								"<tr>"+
								  "<td width=\"231\">"+
									"<input name=\"ipt2AnswerE9\" type=\"text\" class=\"raya_bg_cien2verde_cien\" id=\"ipt2AnswerE9\" value=\"No, he doesn't\" />"+
								  "</td>"+
								  "<td width=\"10\" class=\"texto_3_mediano\">.</td>"+
								"</tr>"+
							"</table></td>"+
							"<td width=\"50\" align=\"center\" valign=\"middle\"><a href=\"#\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image23','','../img/11.der2.png',1)\"><img src=\"../img/11.der.png\" name=\"Image23\" width=\"50\" height=\"55\" border=\"0\" id=\"Image23\" /></a></td>"+
						  "</tr><input type=\"hidden\" id=\"vez\" value="+vez+" />"+
						  "</table>";
					break;
					case 4:
						value = "<table align=\"center\" width=\"525\" border=\"0\" cellspacing=\"0\">"+
						  "<tr>"+
							"<td width=\"77\" height=\"187\" align=\"center\" valign=\"middle\"><a href=\"#\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image22','','../img/11.izq2.png',1)\"><img src=\"../img/11.izq.png\" name=\"Image22\" width=\"50\" height=\"55\" border=\"0\" id=\"Image22\" /></a></td>"+
							"<td width=\"392\" align=\"center\" valign=\"middle\" background=\"../img/bg_Cuadro9.png\"><table width=\"311\" border=\"0\">"+
							  "<tr class=\"texto_1_mediano\">"+
								"<td width=\"18\" align=\"right\" valign=\"middle\">1.</td>"+
								"<td width=\"283\" align=\"left\">Do they like their music class?</td>"+
							  "</tr>"+
							"</table>"+
							  "<table width=\"266\" border=\"0\">"+
								"<tr>"+
								  "<td width=\"248\" class=\"texto_2_mediano\">"+
									"<input name=\"iptAnswerE9\" type=\"text\" class=\"raya_bg_cien2_cien\" id=\"iptAnswerE9\" value=\"Yes, they do\" />"+
								  "</form></td>"+
								  "<td width=\"10\" class=\"texto_2_mediano\">.</td>"+
								"</tr>"+
							"</table></td>"+
							"<td width=\"50\" align=\"center\" valign=\"middle\"><a href=\"#\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image23','','../img/11.der2.png',1)\"><img src=\"../img/11.der.png\" name=\"Image23\" width=\"50\" height=\"55\" border=\"0\" id=\"Image23\" /></a></td>"+
						  "</tr><input type=\"hidden\" id=\"vez\" value="+vez+" />"+
						  "</table>";
								
					break;
				}
				actualizarBtnL2E9(idQst, idBtn);
			}	
			else if(idBtn == 2){
				vez = parseInt(vez) + 1;
				if(vez >= 3)
					actualizarBtnL2E9(idQst, idBtn);
				switch (idQst){
					case 1:
						value = "<table align=\"center\" width=\"525\" border=\"0\" cellspacing=\"0\">"+
							  "<tr>"+
								"<td width=\"77\" height=\"187\" align=\"center\" valign=\"middle\"><a href=\"#\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image22','','../img/11.izq2.png',1)\"><img src=\"../img/11.izq.png\" name=\"Image22\" width=\"50\" height=\"55\" border=\"0\" id=\"Image22\" /></a></td>"+
								"<td width=\"392\" align=\"center\" valign=\"middle\" background=\"../img/bg_Cuadro9.png\"><table width=\"269\" border=\"0\">"+
								  "<tr class=\"texto_1_mediano\">"+
									"<td width=\"16\" align=\"right\" valign=\"middle\">1.</td>"+
									"<td width=\"234\" align=\"left\">What does Carol study?</td>"+
								  "</tr>"+
								"</table>"+
								  "<table width=\"235\" border=\"0\">"+
									"<tr>"+
									  "<td width=\"101\" class=\"texto_2_mediano\">She studies</td>"+
									  "<td width=\"114\">"+
										"<input name=\"iptAnswerE9\" type=\"text\" class=\"raya_bg_cien2_cien\" id=\"iptAnswerE9\" />"+
									  "</td>"+
									  "<td width=\"10\" class=\"texto_2_mediano\">.</td>"+
									"</tr>"+
								"</table></td>"+
								"<td width=\"50\" align=\"center\" valign=\"middle\"><a href=\"#\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image23','','../img/11.der2.png',1)\"><img src=\"../img/11.der.png\" name=\"Image23\" width=\"50\" height=\"55\" border=\"0\" id=\"Image23\" /></a></td>"+
							  "</tr><input type=\"hidden\" id=\"vez\" value="+vez+" />"
							  "</table>";
					break;
					case 2:
						value = "<table align=\"center\" width=\"555\" border=\"0\" cellspacing=\"0\">"+
						  "<tr>"+
							"<td width=\"77\" height=\"205\" align=\"center\" valign=\"middle\"><a href=\"#\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image22','','../img/11.izq2.png',1)\"><img src=\"../img/11.izq.png\" name=\"Image22\" width=\"50\" height=\"55\" border=\"0\" id=\"Image22\" /></a></td>"+
							"<td width=\"422\" align=\"center\" valign=\"middle\" background=\"../img/bg_Cuadro8.png\"><table width=\"295\" border=\"0\">"+
							  "<tr class=\"texto_1_mediano\">"+
								"<td width=\"18\" align=\"right\" valign=\"middle\">2.</td>"+
								"<td width=\"267\" align=\"left\">What does John's sister study?<br /></td>"+
							  "</tr>"+
							"</table>"+
							  "<table width=\"249\" border=\"0\">"+
								"<tr>"+
								  "<td width=\"96\" class=\"texto_2_mediano\">She studies</td>"+
								  "<td width=\"110\">"+
									"<input name=\"iptAnswerE9\" type=\"text\" class=\"raya_bg_cien2_cien\" id=\"iptAnswerE9\" />"+
								  "</td>"+
								  "<td width=\"29\" class=\"texto_2_mediano\">.</td>"+
								"</tr>"+
							"</table>"+
							  "<table width=\"296\" border=\"0\">"+
								"<tr class=\"texto_3_mediano\">"+
								  "<td width=\"19\" align=\"right\">3.</td>"+
								  "<td width=\"267\" align=\"left\"> Does she like it?<br /></td>"+
								"</tr>"+
							"</table>"+
							  "<table width=\"247\" border=\"0\">"+
								"<tr>"+
								  "<td width=\"231\">"+
									"<input name=\"ipt2AnswerE9\" type=\"text\" class=\"raya_bg_cien2verde_cien\" id=\"ipt2AnswerE9\" />"+
								  "</td>"+
								  "<td width=\"10\" class=\"texto_3_mediano\">.</td>"+
								"</tr>"+
							"</table></td>"+
							"<td width=\"50\" align=\"center\" valign=\"middle\"><a href=\"#\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image23','','../img/11.der2.png',1)\"><img src=\"../img/11.der.png\" name=\"Image23\" width=\"50\" height=\"55\" border=\"0\" id=\"Image23\" /></a></td>"+
						  "</tr><input type=\"hidden\" id=\"vez\" value="+vez+" />"+
						  "</table>";
								
					break;
					case 3:
						value = "<table align=\"center\" width=\"555\" border=\"0\" cellspacing=\"0\">"+
						  "<tr>"+
							"<td width=\"77\" height=\"205\" align=\"center\" valign=\"middle\"><a href=\"#\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image22','','../img/11.izq2.png',1)\"><img src=\"../img/11.izq.png\" name=\"Image22\" width=\"50\" height=\"55\" border=\"0\" id=\"Image22\" /></a></td>"+
							"<td width=\"422\" align=\"center\" valign=\"middle\" background=\"../img/bg_Cuadro8.png\"><table width=\"295\" border=\"0\">"+
							  "<tr class=\"texto_1_mediano\">"+
								"<td width=\"18\" align=\"right\" valign=\"middle\">4.</td>"+
								"<td width=\"267\" align=\"left\">Does she like math?<br /></td>"+
							  "</tr>"+
							"</table>"+
							  "<table width=\"249\" border=\"0\">"+
								"<tr>"+
								  "<td class=\"texto_2_mediano\">"+
									"<input name=\"iptAnswerE9\" type=\"text\" class=\"raya_bg_cien2_cien\" id=\"iptAnswerE9\" />"+
								  "</td>"+
								  "<td width=\"29\" class=\"texto_2_mediano\">.</td>"+
								"</tr>"+
							"</table>"+
							  "<table width=\"296\" border=\"0\">"+
								"<tr class=\"texto_3_mediano\">"+
								  "<td width=\"19\" align=\"right\">5.</td>"+
								  "<td width=\"267\" align=\"left\"> Does he like math?<br /></td>"+
								"</tr>"+
							"</table>"+
							  "<table width=\"247\" border=\"0\">"+
								"<tr>"+
								  "<td width=\"231\">"+
									"<input name=\"ipt2AnswerE9\" type=\"text\" class=\"raya_bg_cien2verde_cien\" id=\"ipt2AnswerE9\" />"+
								  "</td>"+
								  "<td width=\"10\" class=\"texto_3_mediano\">.</td>"+
								"</tr>"+
							"</table></td>"+
							"<td width=\"50\" align=\"center\" valign=\"middle\"><a href=\"#\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image23','','../img/11.der2.png',1)\"><img src=\"../img/11.der.png\" name=\"Image23\" width=\"50\" height=\"55\" border=\"0\" id=\"Image23\" /></a></td>"+
						  "</tr><input type=\"hidden\" id=\"vez\" value="+vez+" />"+
						  "</table>";
					break;
					case 4:
						value = "<table align=\"center\" width=\"525\" border=\"0\" cellspacing=\"0\">"+
						  "<tr>"+
							"<td width=\"77\" height=\"187\" align=\"center\" valign=\"middle\"><a href=\"#\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image22','','../img/11.izq2.png',1)\"><img src=\"../img/11.izq.png\" name=\"Image22\" width=\"50\" height=\"55\" border=\"0\" id=\"Image22\" /></a></td>"+
							"<td width=\"392\" align=\"center\" valign=\"middle\" background=\"../img/bg_Cuadro9.png\"><table width=\"311\" border=\"0\">"+
							  "<tr class=\"texto_1_mediano\">"+
								"<td width=\"18\" align=\"right\" valign=\"middle\">1.</td>"+
								"<td width=\"283\" align=\"left\">Do they like their music class?</td>"+
							  "</tr>"+
							"</table>"+
							  "<table width=\"266\" border=\"0\">"+
								"<tr>"+
								  "<td width=\"248\" class=\"texto_2_mediano\">"+
									"<input name=\"iptAnswerE9\" type=\"text\" class=\"raya_bg_cien2_cien\" id=\"iptAnswerE9\" />"+
								  "</form></td>"+
								  "<td width=\"10\" class=\"texto_2_mediano\">.</td>"+
								"</tr>"+
							"</table></td>"+
							"<td width=\"50\" align=\"center\" valign=\"middle\"><a href=\"#\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image23','','../img/11.der2.png',1)\"><img src=\"../img/11.der.png\" name=\"Image23\" width=\"50\" height=\"55\" border=\"0\" id=\"Image23\" /></a></td>"+
						  "</tr><input type=\"hidden\" id=\"vez\" value="+vez+" />"+
						  "</table>";
								
					break;
				}
			}
			$('#divAnswerTblE9').html(value); 
			actualizardivCalL2E9(img, varscore);
		}
	}
}

function actualizarBtnL2E9(idQst, idBtn)
{
	if(idBtn == 3)
		btn = "<table width=\"115\" border=\"0\">"+
				  "<tr>"+
					"<td width=\"32\" align=\"center\" valign=\"middle\"><img src=\"../img/8.btn_chulito_desab.png\" name=\"Image24\" width=\"25\" height=\"25\" border=\"0\" id=\"Image24\" /></td>"+
					"<td width=\"36\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL2E9("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image25','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image25\" width=\"25\" height=\"25\" border=\"0\" id=\"Image25\" /></a></td>"+
					"<td width=\"33\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL2E9("+idQst+",3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image26','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image26\" width=\"29\" height=\"25\" border=\"0\" id=\"Image26\" /></a></td>"+
				  "</tr>"+
				"</table>";
	else
		btn = "<table width=\"115\" border=\"0\">"+
				  "<tr>"+
					"<td width=\"32\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL2E9("+idQst+",1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image24','','../img/8.btn_chulito2.png',1)\"><img src=\"../img/8.btn_chulito.png\" name=\"Image24\" width=\"25\" height=\"25\" border=\"0\" id=\"Image24\" /></a></td>"+
					"<td width=\"36\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL2E9("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image25','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image25\" width=\"25\" height=\"25\" border=\"0\" id=\"Image25\" /></a></td>"+
					"<td width=\"33\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL2E9("+idQst+",3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image26','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image26\" width=\"29\" height=\"25\" border=\"0\" id=\"Image26\" /></a></td>"+
				  "</tr>"+
				"</table>";
			
	$('#divBtn').html(btn);
}

function actualizardivCalL2E9(img, iptScore)
{
	//alert(idBtn);
	if(img != "")
		html = "<img src=\"../img/"+img+".png\" width=\"30\" height=\"30\" />"+
				"<input type=\"hidden\" id=\"inptscore\" name=\"inptscore\" value="+iptScore+" />";
	else		
		html = "&nbsp;<input type=\"hidden\" id=\"inptscore\" name=\"inptscore\" value="+iptScore+" />";
	
	$('#divCalL2E9').html(html);
}

function cambiarDivL2Ex9(idQst)
{	
	iptScore = $("#inptscore").attr("value");
	
	if (idQst == 1)
	{	
		prev = 4;
		next = 2;
		
		swf = "<object id=\"FlashID1\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\">"+
			  "<param name=\"movie\" value=\"../swf/L2/L2_Exe_9/btn_L2_exer_9_a.swf\" />"+
			  "<param name=\"quality\" value=\"high\" />"+
			  "<param name=\"wmode\" value=\"transparent\" />"+
			  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
			  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
			  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
			  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
			  "<!--[if !IE]>-->"+
			  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L2/L2_Exe_9/btn_L2_exer_9_a.swf\" width=\"45\" height=\"40\">"+
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
			
		tblQst = "<table align=\"center\" width=\"525\" border=\"0\" cellspacing=\"0\">"+
          "<tr>"+
            "<td width=\"77\" height=\"187\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"cambiarDivL2Ex9("+prev+")\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image22','','../img/11.izq2.png',1)\"><img src=\"../img/11.izq.png\" name=\"Image22\" width=\"50\" height=\"55\" border=\"0\" id=\"Image22\" /></a></td>"+
            "<td width=\"392\" align=\"center\" valign=\"middle\" background=\"../img/bg_Cuadro9.png\"><table width=\"269\" border=\"0\">"+
              "<tr class=\"texto_1_mediano\">"+
                "<td width=\"16\" align=\"right\" valign=\"middle\">1.</td>"+
                "<td width=\"234\" align=\"left\">What does Carol study?</td>"+
              "</tr>"+
            "</table>"+
              "<table width=\"235\" border=\"0\">"+
                "<tr>"+
                  "<td width=\"101\" class=\"texto_2_mediano\">She studies</td>"+
                  "<td width=\"114\">"+
                    "<input name=\"iptAnswerE9\" type=\"text\" class=\"raya_bg_cien2_cien\" id=\"iptAnswerE9\" />"+
                  "</td>"+
                  "<td width=\"10\" class=\"texto_2_mediano\">.</td>"+
                "</tr>"+
            "</table></td>"+
            "<td width=\"50\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"cambiarDivL2Ex9("+next+")\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image23','','../img/11.der2.png',1)\"><img src=\"../img/11.der.png\" name=\"Image23\" width=\"50\" height=\"55\" border=\"0\" id=\"Image23\" /></a></td>"+
          "</tr><input type=\"hidden\" id=\"vez\" value=0 />"+
          "</table>";
		
		btnQst = "<table align=\"center\" width=\"195\" cellspacing=\"0\" cellpadding=\"0\">"+
              "<tr>"+
                "<td width=\"40\" height=\"53\" align=\"center\" valign=\"top\"><img src=\"../img/img_Conversation.png\" width=\"146\" height=\"37\" /></td>"+
                "<td width=\"26\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex9(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image17','','../img/btn_A_2.png',1)\"><img src=\"../img/btn_A_2.png\" name=\"Image17\" width=\"40\" height=\"53\" border=\"0\" id=\"Image17\" /></a></td>"+
                "<td width=\"17\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
                "<td width=\"18\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex9(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image18','','../img/btn_B_2.png',1)\"><img src=\"../img/btn_B_1.png\" name=\"Image18\" width=\"40\" height=\"53\" border=\"0\" id=\"Image18\" /></a></td>"+
                "<td width=\"20\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
                "<td width=\"21\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex9(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image21','','../img/btn_C_2.png',1)\"><img src=\"../img/btn_C_1.png\" name=\"Image21\" width=\"40\" height=\"53\" border=\"0\" id=\"Image21\" /></a></td>"+
                "<td width=\"9\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
                "<td width=\"42\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex9(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image20','','../img/btn_D_2.png',1)\"><img src=\"../img/btn_D_1.png\" name=\"Image20\" width=\"40\" height=\"53\" border=\"0\" id=\"Image20\" /></a></td>"+
              "</tr>"+
          "</table>";
	}
	else if (idQst == 2)
	{
		prev = 1;
		next = 3;
		
		swf = "<object id=\"FlashID2\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\">"+
			  "<param name=\"movie\" value=\"../swf/L2/L2_Exe_9/btn_L2_exer_9_b.swf\" />"+
			  "<param name=\"quality\" value=\"high\" />"+
			  "<param name=\"wmode\" value=\"transparent\" />"+
			  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
			  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
			  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
			  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
			  "<!--[if !IE]>-->"+
			  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L2/L2_Exe_9/btn_L2_exer_9_b.swf\" width=\"45\" height=\"40\">"+
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
			
		tblQst = "<table align=\"center\" width=\"555\" border=\"0\" cellspacing=\"0\">"+
          "<tr>"+
            "<td width=\"77\" height=\"205\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"cambiarDivL2Ex9("+prev+")\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image22','','../img/11.izq2.png',1)\"><img src=\"../img/11.izq.png\" name=\"Image22\" width=\"50\" height=\"55\" border=\"0\" id=\"Image22\" /></a></td>"+
            "<td width=\"422\" align=\"center\" valign=\"middle\" background=\"../img/bg_Cuadro8.png\"><table width=\"295\" border=\"0\">"+
              "<tr class=\"texto_1_mediano\">"+
                "<td width=\"18\" align=\"right\" valign=\"middle\">2.</td>"+
                "<td width=\"267\" align=\"left\">What does John's sister study?<br /></td>"+
              "</tr>"+
            "</table>"+
              "<table width=\"249\" border=\"0\">"+
                "<tr>"+
                  "<td width=\"96\" class=\"texto_2_mediano\">She studies</td>"+
                  "<td width=\"110\">"+
                    "<input name=\"iptAnswerE9\" type=\"text\" class=\"raya_bg_cien2_cien\" id=\"iptAnswerE9\" />"+
                  "</td>"+
                  "<td width=\"29\" class=\"texto_2_mediano\">.</td>"+
                "</tr>"+
            "</table>"+
              "<table width=\"296\" border=\"0\">"+
                "<tr class=\"texto_3_mediano\">"+
                  "<td width=\"19\" align=\"right\">3.</td>"+
                  "<td width=\"267\" align=\"left\"> Does she like it?<br /></td>"+
                "</tr>"+
            "</table>"+
              "<table width=\"247\" border=\"0\">"+
                "<tr>"+
                  "<td width=\"231\">"+
                    "<input name=\"ipt2AnswerE9\" type=\"text\" class=\"raya_bg_cien2verde_cien\" id=\"ipt2AnswerE9\" />"+
                  "</td>"+
                  "<td width=\"10\" class=\"texto_3_mediano\">.</td>"+
                "</tr>"+
            "</table></td>"+
            "<td width=\"50\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"cambiarDivL2Ex9("+next+")\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image23','','../img/11.der2.png',1)\"><img src=\"../img/11.der.png\" name=\"Image23\" width=\"50\" height=\"55\" border=\"0\" id=\"Image23\" /></a></td>"+
          "</tr><input type=\"hidden\" id=\"vez\" value=0 />"+
          "</table>";
			
		btnQst = "<table align=\"center\" width=\"195\" cellspacing=\"0\" cellpadding=\"0\">"+
              "<tr>"+
                "<td width=\"40\" height=\"53\" align=\"center\" valign=\"top\"><img src=\"../img/img_Conversation.png\" width=\"146\" height=\"37\" /></td>"+
                "<td width=\"26\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex9(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image17','','../img/btn_A_2.png',1)\"><img src=\"../img/btn_A_1.png\" name=\"Image17\" width=\"40\" height=\"53\" border=\"0\" id=\"Image17\" /></a></td>"+
                "<td width=\"17\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
                "<td width=\"18\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex9(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image18','','../img/btn_B_2.png',1)\"><img src=\"../img/btn_B_2.png\" name=\"Image18\" width=\"40\" height=\"53\" border=\"0\" id=\"Image18\" /></a></td>"+
                "<td width=\"20\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
                "<td width=\"21\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex9(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image21','','../img/btn_C_2.png',1)\"><img src=\"../img/btn_C_1.png\" name=\"Image21\" width=\"40\" height=\"53\" border=\"0\" id=\"Image21\" /></a></td>"+
                "<td width=\"9\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
                "<td width=\"42\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex9(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image20','','../img/btn_D_2.png',1)\"><img src=\"../img/btn_D_1.png\" name=\"Image20\" width=\"40\" height=\"53\" border=\"0\" id=\"Image20\" /></a></td>"+
              "</tr>"+
          "</table>";
	}
	else if (idQst == 3)
	{
		prev = 2;
		next = 4;
		
		swf = "<object id=\"FlashID3\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\">"+
			  "<param name=\"movie\" value=\"../swf/L2/L2_Exe_9/btn_L2_exer_9_c.swf\" />"+
			  "<param name=\"quality\" value=\"high\" />"+
			  "<param name=\"wmode\" value=\"transparent\" />"+
			  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
			  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
			  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
			  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
			  "<!--[if !IE]>-->"+
			  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L2/L2_Exe_9/btn_L2_exer_9_c.swf\" width=\"45\" height=\"40\">"+
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
			
		tblQst = "<table align=\"center\" width=\"555\" border=\"0\" cellspacing=\"0\">"+
          "<tr>"+
            "<td width=\"77\" height=\"205\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"cambiarDivL2Ex9("+prev+")\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image22','','../img/11.izq2.png',1)\"><img src=\"../img/11.izq.png\" name=\"Image22\" width=\"50\" height=\"55\" border=\"0\" id=\"Image22\" /></a></td>"+
            "<td width=\"422\" align=\"center\" valign=\"middle\" background=\"../img/bg_Cuadro8.png\"><table width=\"295\" border=\"0\">"+
              "<tr class=\"texto_1_mediano\">"+
                "<td width=\"18\" align=\"right\" valign=\"middle\">4.</td>"+
                "<td width=\"267\" align=\"left\">Does she like math?<br /></td>"+
              "</tr>"+
            "</table>"+
              "<table width=\"249\" border=\"0\">"+
                "<tr>"+
                  "<td class=\"texto_2_mediano\">"+
                    "<input name=\"iptAnswerE9\" type=\"text\" class=\"raya_bg_cien2_cien\" id=\"iptAnswerE9\" />"+
                  "</td>"+
                  "<td width=\"29\" class=\"texto_2_mediano\">.</td>"+
                "</tr>"+
            "</table>"+
              "<table width=\"296\" border=\"0\">"+
                "<tr class=\"texto_3_mediano\">"+
                  "<td width=\"19\" align=\"right\">5.</td>"+
                  "<td width=\"267\" align=\"left\"> Does he like math?<br /></td>"+
                "</tr>"+
            "</table>"+
              "<table width=\"247\" border=\"0\">"+
                "<tr>"+
                  "<td width=\"231\">"+
                    "<input name=\"ipt2AnswerE9\" type=\"text\" class=\"raya_bg_cien2verde_cien\" id=\"ipt2AnswerE9\" />"+
                 "</td>"+
                  "<td width=\"10\" class=\"texto_3_mediano\">.</td>"+
                "</tr>"+
            "</table></td>"+
            "<td width=\"50\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"cambiarDivL2Ex9("+next+")\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image23','','../img/11.der2.png',1)\"><img src=\"../img/11.der.png\" name=\"Image23\" width=\"50\" height=\"55\" border=\"0\" id=\"Image23\" /></a></td>"+
          "</tr><input type=\"hidden\" id=\"vez\" value=0 />"+
          "</table>";
	
		btnQst = "<table align=\"center\" width=\"195\" cellspacing=\"0\" cellpadding=\"0\">"+
              "<tr>"+
                "<td width=\"40\" height=\"53\" align=\"center\" valign=\"top\"><img src=\"../img/img_Conversation.png\" width=\"146\" height=\"37\" /></td>"+
                "<td width=\"26\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex9(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image17','','../img/btn_A_2.png',1)\"><img src=\"../img/btn_A_1.png\" name=\"Image17\" width=\"40\" height=\"53\" border=\"0\" id=\"Image17\" /></a></td>"+
                "<td width=\"17\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
                "<td width=\"18\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex9(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image18','','../img/btn_B_2.png',1)\"><img src=\"../img/btn_B_1.png\" name=\"Image18\" width=\"40\" height=\"53\" border=\"0\" id=\"Image18\" /></a></td>"+
                "<td width=\"20\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
                "<td width=\"21\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex9(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image21','','../img/btn_C_2.png',1)\"><img src=\"../img/btn_C_2.png\" name=\"Image21\" width=\"40\" height=\"53\" border=\"0\" id=\"Image21\" /></a></td>"+
                "<td width=\"9\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
                "<td width=\"42\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex9(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image20','','../img/btn_D_2.png',1)\"><img src=\"../img/btn_D_1.png\" name=\"Image20\" width=\"40\" height=\"53\" border=\"0\" id=\"Image20\" /></a></td>"+
              "</tr>"+
          "</table>";
	}
	else if (idQst == 4)
	{
		prev = 3;
		next = 1;
		
		swf = "<object id=\"FlashID4\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\">"+
			  "<param name=\"movie\" value=\"../swf/L2/L2_Exe_9/btn_L2_exer_9_d.swf\" />"+
			  "<param name=\"quality\" value=\"high\" />"+
			  "<param name=\"wmode\" value=\"transparent\" />"+
			  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
			  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
			  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
			  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
			  "<!--[if !IE]>-->"+
			  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L2/L2_Exe_9/btn_L2_exer_9_d.swf\" width=\"45\" height=\"40\">"+
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
			
		tblQst = "<table align=\"center\" width=\"525\" border=\"0\" cellspacing=\"0\">"+
          "<tr>"+
            "<td width=\"77\" height=\"187\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"cambiarDivL2Ex9("+prev+")\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image22','','../img/11.izq2.png',1)\"><img src=\"../img/11.izq.png\" name=\"Image22\" width=\"50\" height=\"55\" border=\"0\" id=\"Image22\" /></a></td>"+
            "<td width=\"392\" align=\"center\" valign=\"middle\" background=\"../img/bg_Cuadro9.png\"><table width=\"311\" border=\"0\">"+
              "<tr class=\"texto_1_mediano\">"+
                "<td width=\"18\" align=\"right\" valign=\"middle\">6.</td>"+
                "<td width=\"283\" align=\"left\">Do they like their music class?</td>"+
              "</tr>"+
            "</table>"+
              "<table width=\"266\" border=\"0\">"+
                "<tr>"+
                  "<td width=\"248\" class=\"texto_2_mediano\">"+
                    "<input name=\"iptAnswerE9\" type=\"text\" class=\"raya_bg_cien2_cien\" id=\"iptAnswerE9\" />"+
                  "</td>"+
                  "<td width=\"10\" class=\"texto_2_mediano\">.</td>"+
                "</tr>"+
            "</table></td>"+
            "<td width=\"50\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"cambiarDivL2Ex9("+next+")\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image23','','../img/11.der2.png',1)\"><img src=\"../img/11.der.png\" name=\"Image23\" width=\"50\" height=\"55\" border=\"0\" id=\"Image23\" /></a></td>"+
          "</tr><input type=\"hidden\" id=\"vez\" value=0 />"+
          "</table>";
		
		btnQst = "<table align=\"center\" width=\"195\" cellspacing=\"0\" cellpadding=\"0\">"+
              "<tr>"+
                "<td width=\"40\" height=\"53\" align=\"center\" valign=\"top\"><img src=\"../img/img_Conversation.png\" width=\"146\" height=\"37\" /></td>"+
                "<td width=\"26\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex9(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image17','','../img/btn_A_2.png',1)\"><img src=\"../img/btn_A_1.png\" name=\"Image17\" width=\"40\" height=\"53\" border=\"0\" id=\"Image17\" /></a></td>"+
                "<td width=\"17\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
                "<td width=\"18\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex9(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image18','','../img/btn_B_2.png',1)\"><img src=\"../img/btn_B_1.png\" name=\"Image18\" width=\"40\" height=\"53\" border=\"0\" id=\"Image18\" /></a></td>"+
                "<td width=\"20\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
                "<td width=\"21\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex9(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image21','','../img/btn_C_2.png',1)\"><img src=\"../img/btn_C_1.png\" name=\"Image21\" width=\"40\" height=\"53\" border=\"0\" id=\"Image21\" /></a></td>"+
                "<td width=\"9\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
                "<td width=\"42\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL2Ex9(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image20','','../img/btn_D_2.png',1)\"><img src=\"../img/btn_D_2.png\" name=\"Image20\" width=\"40\" height=\"53\" border=\"0\" id=\"Image20\" /></a></td>"+
              "</tr>"+
          "</table>";
	}
	html = "<td width=\"768\" height=\"86\" align=\"center\">"+
        "<table width=\"750\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"353\" height=\"65\" rowspan=\"2\" align=\"left\" valign=\"top\"><img src=\"../img/titulos/L2/img_L2_exer_9.png\" width=\"330\" height=\"114\" /></td>"+
			"<td width=\"233\" rowspan=\"2\" align=\"left\" valign=\"bottom\">"+swf+"</td>"+
			"<td width=\"150\" height=\"83\" align=\"center\" valign=\"bottom\"><div id=\"divCalL2E9\"><input type=\"hidden\" id=\"inptscore\" name=\"inptscore\" value="+iptScore+"/></div></td>"+
		  "</tr>"+
		  "<tr>"+
			"<td height=\"50\" align=\"center\" valign=\"middle\" background=\"../img/8.bg_refresh.png\">"+
			"<div id=\"divBtn\">"+
			"<table width=\"115\" border=\"0\">"+
			  "<tr>"+
				"<td width=\"32\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL2E9("+idQst+",1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image24','','../img/8.btn_chulito2.png',1)\"><img src=\"../img/8.btn_chulito.png\" name=\"Image24\" width=\"25\" height=\"25\" border=\"0\" id=\"Image24\" /></a></td>"+
				"<td width=\"36\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL2E9("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image25','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image25\" width=\"25\" height=\"25\" border=\"0\" id=\"Image25\" /></a></td>"+
				"<td width=\"33\" align=\"center\" valign=\"middle\"><img src=\"../img/8.btn_ojo_desab.png\" name=\"Image26\" width=\"29\" height=\"25\" border=\"0\" id=\"Image26\" /></td>"+
			  "</tr>"+
			"</table></div></td>"+
		  "</tr>"+
        "</table>"+
		"<div id=\"divAnswerTblE9\">"+tblQst+
		  "</div>"+btnQst+
		  "</td>";
	
	$('#contenido').html(html);
}
/* Exercise 9 */


/* Exercise 10 */
function mostrarAnsL2Ex10(idQst, idAns)
{
	imgIpt = "good_p";
	if(idQst == 1)
	{
		if(idAns == 'Y'){
			ipt = "iptAns1Yn";
			ipt2 = "iptAns1Wh";
			div = "divAns1Yn";
			div2 = "divAns1Wh";
		}
		else{
			ipt = "iptAns1Wh";
			ipt2 = "iptAns1Yn";
			div = "divAns1Wh";
			div2 = "divAns1Yn";
		}
	}
	else if(idQst == 2)
	{
		if(idAns == 'Y'){
			ipt = "iptAns2Yn";
			ipt2 = "iptAns2Wh";
			div = "divAns2Yn";
			div2 = "divAns2Wh";
		}
		else{
			ipt = "iptAns2Wh";
			ipt2 = "iptAns2Yn";
			div = "divAns2Wh";
			div2 = "divAns2Yn";
		}
	}
	else if(idQst == 3)
	{
		if(idAns == 'Y'){
			ipt = "iptAns3Yn";
			ipt2 = "iptAns3Wh";
			div = "divAns3Yn";
			div2 = "divAns3Wh";
		}
		else{
			ipt = "iptAns3Wh";
			ipt2 = "iptAns3Yn";
			div = "divAns3Wh";
			div2 = "divAns3Yn";
		}
	}
	else if(idQst == 4)
	{
		if(idAns == 'Y'){
			ipt = "iptAns4Yn";
			ipt2 = "iptAns4Wh";
			div = "divAns4Yn";
			div2 = "divAns4Wh";
		}
		else{
			ipt = "iptAns4Wh";
			ipt2 = "iptAns4Yn";
			div = "divAns4Wh";
			div2 = "divAns4Yn";
		}
	}
	else if(idQst == 5)
	{
		if(idAns == 'Y'){
			ipt = "iptAns5Yn";
			ipt2 = "iptAns5Wh";
			div = "divAns5Yn";
			div2 = "divAns5Wh";
		}
		else{
			ipt = "iptAns5Wh";
			ipt2 = "iptAns5Yn";
			div = "divAns5Wh";
			div2 = "divAns5Yn";
		}
	}
	else if(idQst == 6)
	{
		if(idAns == 'Y'){
			ipt = "iptAns6Yn";
			ipt2 = "iptAns6Wh";
			div = "divAns6Yn";
			div2 = "divAns6Wh";
		}
		else{
			ipt = "iptAns6Wh";
			ipt2 = "iptAns6Yn";
			div = "divAns6Wh";
			div2 = "divAns6Yn";
		}
	}
	
	html = "<img src=\"../img/good_p.png\" width=\"23\" height=\"23\" />"+
			"<input type=\"hidden\" id=\""+ipt+"\" value=1 />";
	$('#'+div).html(html);
	cleanAnsL2E10(div2, ipt2);
}

function cleanAnsL2E10(div, ipt)
{
	html = "&nbsp;"+
			"<input type=\"hidden\" id=\""+ipt+"\" value=0 />";
	$('#'+div).html(html);
}

function verificarL2E10(idBtn)
{
	vez = $("#vez").val();
	img = "";
	
	varscore = $("#inptscore").attr("value");
	
	doLMSSetValue("cmi.core.score.min", 0);
	doLMSSetValue("cmi.core.score.max", 100);
	
	ans_1Y = $("#iptAns1Yn").val();
	ans_1W = $("#iptAns1Wh").val();
	
	ans_2Y = $("#iptAns2Yn").val();
	ans_2W = $("#iptAns2Wh").val();
	
	ans_3Y = $("#iptAns3Yn").val();
	ans_3W = $("#iptAns3Wh").val();
	
	ans_4Y = $("#iptAns4Yn").val();
	ans_4W = $("#iptAns4Wh").val();
	
	ans_5Y = $("#iptAns5Yn").val();
	ans_5W = $("#iptAns5Wh").val();
	
	ans_6Y = $("#iptAns6Yn").val();
	ans_6W = $("#iptAns6Wh").val();
	
	vald = parseInt(ans_1Y) + parseInt(ans_1W) + parseInt(ans_2Y) + parseInt(ans_2W) + parseInt(ans_3Y) + parseInt(ans_3W) + parseInt(ans_4Y) + parseInt(ans_4W);
	vald = vald + parseInt(ans_5Y) + parseInt(ans_5W) + parseInt(ans_6Y) + parseInt(ans_6W);
	
	if(vald == 0 && idBtn != 3)
		alert("You must select the answers.");
	else
	{
		if(idBtn == 1){
			if(ans_1Y == 1 && ans_2W == 1 && ans_3Y == 1 && ans_4W == 1 && ans_5W == 1 && ans_6Y == 1){
				img = "good";
				varscore = parseFloat(varscore) + 100;
			}
			else
				img = "good_No";
		}
		else
		{
			varescore = 0;
			if(idBtn == 3)
			{
				html = "<table align=\"center\" width=\"425\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"15\" height=\"50\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong>1.</strong></td>"+
					"<td width=\"42\" align=\"center\" valign=\"middle\"><object id=\"FlashID\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"29\" height=\"27\">"+
					  "<param name=\"movie\" value=\"../swf/L2/L2_Exe_10/btn_L2_exer_10_a.swf\" />"+
					  "<param name=\"quality\" value=\"high\" />"+
					  "<param name=\"wmode\" value=\"transparent\" />"+
					  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
					  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
					  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
					  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
					  "<!--[if !IE]>-->"+
					  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L2/L2_Exe_10/btn_L2_exer_10_a.swf\" width=\"29\" height=\"27\">"+
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
					"<td width=\"144\" align=\"center\" class=\"texto_2\">Yes/No question </td>"+
					"<td background=\"../img/bg_chek.png\" width=\"33\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL2Ex10(1,'Y')\">"+
						"<div id=\"divAns1Yn\"><img src=\"../img/good_p.png\" width=\"23\" height=\"23\" /><input type=\"hidden\" id=\"iptAns1Yn\" value=1 /></div>"+
					"</td>"+
					"<td width=\"144\" align=\"center\" valign=\"middle\" class=\"texto_1\">Wh-question </td>"+
					"<td width=\"31\" align=\"center\" valign=\"middle\" background=\"../img/bg_chek.png\" onclick=\"mostrarAnsL2Ex10(1,'W')\">"+
						"<div id=\"divAns1Wh\"><input type=\"hidden\" id=\"iptAns1Wh\" value=0 /></div>"+
					"</td>"+
				  "</tr>"+
				"</table>"+
				"<table align=\"center\" width=\"425\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"15\" height=\"50\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong>2.</strong></td>"+
					"<td width=\"42\" align=\"center\" valign=\"middle\"><object id=\"FlashID2\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"29\" height=\"27\">"+
					  "<param name=\"movie\" value=\"../swf/L2/L2_Exe_10/btn_L2_exer_10_b.swf\" />"+
					  "<param name=\"quality\" value=\"high\" />"+
					  "<param name=\"wmode\" value=\"transparent\" />"+
					  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
					  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
					  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
					  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
					  "<!--[if !IE]>-->"+
					  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L2/L2_Exe_10/btn_L2_exer_10_b.swf\" width=\"29\" height=\"27\">"+
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
					"<td width=\"144\" align=\"center\" class=\"texto_2\">Yes/No question </td>"+
					"<td background=\"../img/bg_chek.png\" width=\"33\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL2Ex10(2,'Y')\">"+
						"<div id=\"divAns2Yn\"><input type=\"hidden\" id=\"iptAns2Yn\" value=0 /></div>"+
					"</td>"+
					"<td width=\"144\" align=\"center\" valign=\"middle\" class=\"texto_1\">Wh-question </td>"+
					"<td width=\"31\" align=\"center\" valign=\"middle\" background=\"../img/bg_chek.png\" onclick=\"mostrarAnsL2Ex10(2,'W')\">"+
						"<div id=\"divAns2Wh\"><img src=\"../img/good_p.png\" width=\"23\" height=\"23\" /><input type=\"hidden\" id=\"iptAns2Wh\" value=1 /></div>"+
					"</td>"+
				  "</tr>"+
				"</table>"+
				"<table align=\"center\" width=\"425\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"15\" height=\"50\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong>3.</strong></td>"+
					"<td width=\"42\" align=\"center\" valign=\"middle\"><object id=\"FlashID3\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"29\" height=\"27\">"+
					  "<param name=\"movie\" value=\"../swf/L2/L2_Exe_10/btn_L2_exer_10_c.swf\" />"+
					  "<param name=\"quality\" value=\"high\" />"+
					  "<param name=\"wmode\" value=\"transparent\" />"+
					  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
					  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
					  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
					  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
					  "<!--[if !IE]>-->"+
					  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L2/L2_Exe_10/btn_L2_exer_10_c.swf\" width=\"29\" height=\"27\">"+
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
					"<td width=\"144\" align=\"center\" class=\"texto_2\">Yes/No question </td>"+
					"<td background=\"../img/bg_chek.png\" width=\"33\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL2Ex10(3,'Y')\">"+
						"<div id=\"divAns3Yn\"><img src=\"../img/good_p.png\" width=\"23\" height=\"23\" /><input type=\"hidden\" id=\"iptAns3Yn\" value=1 /></div>"+
					"</td>"+
					"<td width=\"144\" align=\"center\" valign=\"middle\" class=\"texto_1\">Wh-question </td>"+
					"<td width=\"31\" align=\"center\" valign=\"middle\" background=\"../img/bg_chek.png\" onclick=\"mostrarAnsL2Ex10(3,'W')\">"+
						"<div id=\"divAns3Wh\"><input type=\"hidden\" id=\"iptAns3Wh\" value=0 /></div>"+
					"</td>"+
				  "</tr>"+
				"</table>"+
				"<table align=\"center\" width=\"425\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"15\" height=\"50\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong>4.</strong></td>"+
					"<td width=\"42\" align=\"center\" valign=\"middle\"><object id=\"FlashID4\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"29\" height=\"27\">"+
					  "<param name=\"movie\" value=\"../swf/L2/L2_Exe_10/btn_L2_exer_10_d.swf\" />"+
					  "<param name=\"quality\" value=\"high\" />"+
					  "<param name=\"wmode\" value=\"transparent\" />"+
					  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
					  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
					  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
					  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
					  "<!--[if !IE]>-->"+
					  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L2/L2_Exe_10/btn_L2_exer_10_d.swf\" width=\"29\" height=\"27\">"+
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
					"<td width=\"144\" align=\"center\" class=\"texto_2\">Yes/No question </td>"+
					"<td background=\"../img/bg_chek.png\" width=\"33\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL2Ex10(4,'Y')\">"+
						"<div id=\"divAns4Yn\"><input type=\"hidden\" id=\"iptAns4Yn\" value=0 /></div>"+
					"</td>"+
					"<td width=\"144\" align=\"center\" valign=\"middle\" class=\"texto_1\">Wh-question </td>"+
					"<td width=\"31\" align=\"center\" valign=\"middle\" background=\"../img/bg_chek.png\" onclick=\"mostrarAnsL2Ex10(4,'W')\">"+
						"<div id=\"divAns4Wh\"><img src=\"../img/good_p.png\" width=\"23\" height=\"23\" /><input type=\"hidden\" id=\"iptAns4Wh\" value=1 /></div>"+
					"</td>"+
				  "</tr>"+
				"</table>"+
				"<table align=\"center\" width=\"425\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"15\" height=\"50\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong>5.</strong></td>"+
					"<td width=\"42\" align=\"center\" valign=\"middle\"><object id=\"FlashID5\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"29\" height=\"27\">"+
					  "<param name=\"movie\" value=\"../swf/L2/L2_Exe_10/btn_L2_exer_10_e.swf\" />"+
					  "<param name=\"quality\" value=\"high\" />"+
					  "<param name=\"wmode\" value=\"transparent\" />"+
					  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
					  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
					  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
					  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
					  "<!--[if !IE]>-->"+
					  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L2/L2_Exe_10/btn_L2_exer_10_e.swf\" width=\"29\" height=\"27\">"+
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
					"<td width=\"144\" align=\"center\" class=\"texto_2\">Yes/No question </td>"+
					"<td background=\"../img/bg_chek.png\" width=\"33\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL2Ex10(5,'Y')\">"+
						"<div id=\"divAns5Yn\"><input type=\"hidden\" id=\"iptAns5Yn\" value=0 /></div>"+
					"</td>"+
					"<td width=\"144\" align=\"center\" valign=\"middle\" class=\"texto_1\">Wh-question </td>"+
					"<td width=\"31\" align=\"center\" valign=\"middle\" background=\"../img/bg_chek.png\" onclick=\"mostrarAnsL2Ex10(5,'W')\">"+
						"<div id=\"divAns5Wh\"><img src=\"../img/good_p.png\" width=\"23\" height=\"23\" /><input type=\"hidden\" id=\"iptAns5Wh\" value=1 /></div>"+
					"</td>"+
				  "</tr>"+
				"</table>"+
				"<table align=\"center\" width=\"425\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"15\" height=\"50\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong>6.</strong></td>"+
					"<td width=\"42\" align=\"center\" valign=\"middle\"><object id=\"FlashID6\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"29\" height=\"27\">"+
					  "<param name=\"movie\" value=\"../swf/L2/L2_Exe_10/btn_L2_exer_10_f.swf\" />"+
					  "<param name=\"quality\" value=\"high\" />"+
					  "<param name=\"wmode\" value=\"transparent\" />"+
					  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
					  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
					  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
					  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
					  "<!--[if !IE]>-->"+
					  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L2/L2_Exe_10/btn_L2_exer_10_f.swf\" width=\"29\" height=\"27\">"+
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
					"<td width=\"144\" align=\"center\" class=\"texto_2\">Yes/No question </td>"+
					"<td background=\"../img/bg_chek.png\" width=\"33\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL2Ex10(6,'Y')\">"+
						"<div id=\"divAns6Yn\"><img src=\"../img/good_p.png\" width=\"23\" height=\"23\" /><input type=\"hidden\" id=\"iptAns6Yn\" value=1 /></div>"+
					"</td>"+
					"<td width=\"144\" align=\"center\" valign=\"middle\" class=\"texto_1\">Wh-question </td>"+
					"<td width=\"31\" align=\"center\" valign=\"middle\" background=\"../img/bg_chek.png\" onclick=\"mostrarAnsL2Ex10(6,'W')\">"+
						"<div id=\"divAns6Wh\"><input type=\"hidden\" id=\"iptAns6Wh\" value=0 /></div>"+
					"</td>"+
				  "</tr><input type=\"hidden\" id=\"vez\" value="+vez+" />"+
				"</table>";
				actualizarBtnL2E10(idBtn);
			}	
			else if(idBtn == 2){
				if(vez >= 2)
					actualizarBtnL2E10(idBtn);
				vez = parseInt(vez) + 1;

				html = "<table align=\"center\" width=\"425\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"15\" height=\"50\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong>1.</strong></td>"+
					"<td width=\"42\" align=\"center\" valign=\"middle\"><object id=\"FlashID\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"29\" height=\"27\">"+
					  "<param name=\"movie\" value=\"../swf/L2/L2_Exe_10/btn_L2_exer_10_a.swf\" />"+
					  "<param name=\"quality\" value=\"high\" />"+
					  "<param name=\"wmode\" value=\"transparent\" />"+
					  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
					  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
					  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
					  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
					  "<!--[if !IE]>-->"+
					  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L2/L2_Exe_10/btn_L2_exer_10_a.swf\" width=\"29\" height=\"27\">"+
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
					"<td width=\"144\" align=\"center\" class=\"texto_2\">Yes/No question </td>"+
					"<td background=\"../img/bg_chek.png\" width=\"33\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL2Ex10(1,'Y')\">"+
						"<div id=\"divAns1Yn\"><input type=\"hidden\" id=\"iptAns1Yn\" value=0 /></div>"+
					"</td>"+
					"<td width=\"144\" align=\"center\" valign=\"middle\" class=\"texto_1\">Wh-question </td>"+
					"<td width=\"31\" align=\"center\" valign=\"middle\" background=\"../img/bg_chek.png\" onclick=\"mostrarAnsL2Ex10(1,'W')\">"+
						"<div id=\"divAns1Wh\"><input type=\"hidden\" id=\"iptAns1Wh\" value=0 /></div>"+
					"</td>"+
				  "</tr>"+
				"</table>"+
				"<table align=\"center\" width=\"425\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"15\" height=\"50\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong>2.</strong></td>"+
					"<td width=\"42\" align=\"center\" valign=\"middle\"><object id=\"FlashID2\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"29\" height=\"27\">"+
					  "<param name=\"movie\" value=\"../swf/L2/L2_Exe_10/btn_L2_exer_10_b.swf\" />"+
					  "<param name=\"quality\" value=\"high\" />"+
					  "<param name=\"wmode\" value=\"transparent\" />"+
					  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
					  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
					  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
					  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
					  "<!--[if !IE]>-->"+
					  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L2/L2_Exe_10/btn_L2_exer_10_b.swf\" width=\"29\" height=\"27\">"+
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
					"<td width=\"144\" align=\"center\" class=\"texto_2\">Yes/No question </td>"+
					"<td background=\"../img/bg_chek.png\" width=\"33\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL2Ex10(2,'Y')\">"+
						"<div id=\"divAns2Yn\"><input type=\"hidden\" id=\"iptAns2Yn\" value=0 /></div>"+
					"</td>"+
					"<td width=\"144\" align=\"center\" valign=\"middle\" class=\"texto_1\">Wh-question </td>"+
					"<td width=\"31\" align=\"center\" valign=\"middle\" background=\"../img/bg_chek.png\" onclick=\"mostrarAnsL2Ex10(2,'W')\">"+
						"<div id=\"divAns2Wh\"><input type=\"hidden\" id=\"iptAns2Wh\" value=0 /></div>"+
					"</td>"+
				  "</tr>"+
				"</table>"+
				"<table align=\"center\" width=\"425\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"15\" height=\"50\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong>3.</strong></td>"+
					"<td width=\"42\" align=\"center\" valign=\"middle\"><object id=\"FlashID3\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"29\" height=\"27\">"+
					  "<param name=\"movie\" value=\"../swf/L2/L2_Exe_10/btn_L2_exer_10_c.swf\" />"+
					  "<param name=\"quality\" value=\"high\" />"+
					  "<param name=\"wmode\" value=\"transparent\" />"+
					  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
					  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
					  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
					  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
					  "<!--[if !IE]>-->"+
					  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L2/L2_Exe_10/btn_L2_exer_10_c.swf\" width=\"29\" height=\"27\">"+
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
					"<td width=\"144\" align=\"center\" class=\"texto_2\">Yes/No question </td>"+
					"<td background=\"../img/bg_chek.png\" width=\"33\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL2Ex10(3,'Y')\">"+
						"<div id=\"divAns3Yn\"><input type=\"hidden\" id=\"iptAns3Yn\" value=0 /></div>"+
					"</td>"+
					"<td width=\"144\" align=\"center\" valign=\"middle\" class=\"texto_1\">Wh-question </td>"+
					"<td width=\"31\" align=\"center\" valign=\"middle\" background=\"../img/bg_chek.png\" onclick=\"mostrarAnsL2Ex10(3,'W')\">"+
						"<div id=\"divAns3Wh\"><input type=\"hidden\" id=\"iptAns3Wh\" value=0 /></div>"+
					"</td>"+
				  "</tr>"+
				"</table>"+
				"<table align=\"center\" width=\"425\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"15\" height=\"50\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong>4.</strong></td>"+
					"<td width=\"42\" align=\"center\" valign=\"middle\"><object id=\"FlashID4\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"29\" height=\"27\">"+
					  "<param name=\"movie\" value=\"../swf/L2/L2_Exe_10/btn_L2_exer_10_d.swf\" />"+
					  "<param name=\"quality\" value=\"high\" />"+
					  "<param name=\"wmode\" value=\"transparent\" />"+
					  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
					  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
					  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
					  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
					  "<!--[if !IE]>-->"+
					  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L2/L2_Exe_10/btn_L2_exer_10_d.swf\" width=\"29\" height=\"27\">"+
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
					"<td width=\"144\" align=\"center\" class=\"texto_2\">Yes/No question </td>"+
					"<td background=\"../img/bg_chek.png\" width=\"33\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL2Ex10(4,'Y')\">"+
						"<div id=\"divAns4Yn\"><input type=\"hidden\" id=\"iptAns4Yn\" value=0 /></div>"+
					"</td>"+
					"<td width=\"144\" align=\"center\" valign=\"middle\" class=\"texto_1\">Wh-question </td>"+
					"<td width=\"31\" align=\"center\" valign=\"middle\" background=\"../img/bg_chek.png\" onclick=\"mostrarAnsL2Ex10(4,'W')\">"+
						"<div id=\"divAns4Wh\"><input type=\"hidden\" id=\"iptAns4Wh\" value=0 /></div>"+
					"</td>"+
				  "</tr>"+
				"</table>"+
				"<table align=\"center\" width=\"425\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"15\" height=\"50\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong>5.</strong></td>"+
					"<td width=\"42\" align=\"center\" valign=\"middle\"><object id=\"FlashID5\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"29\" height=\"27\">"+
					  "<param name=\"movie\" value=\"../swf/L2/L2_Exe_10/btn_L2_exer_10_e.swf\" />"+
					  "<param name=\"quality\" value=\"high\" />"+
					  "<param name=\"wmode\" value=\"transparent\" />"+
					  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
					  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
					  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
					  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
					  "<!--[if !IE]>-->"+
					  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L2/L2_Exe_10/btn_L2_exer_10_e.swf\" width=\"29\" height=\"27\">"+
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
					"<td width=\"144\" align=\"center\" class=\"texto_2\">Yes/No question </td>"+
					"<td background=\"../img/bg_chek.png\" width=\"33\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL2Ex10(5,'Y')\">"+
						"<div id=\"divAns5Yn\"><input type=\"hidden\" id=\"iptAns5Yn\" value=0 /></div>"+
					"</td>"+
					"<td width=\"144\" align=\"center\" valign=\"middle\" class=\"texto_1\">Wh-question </td>"+
					"<td width=\"31\" align=\"center\" valign=\"middle\" background=\"../img/bg_chek.png\" onclick=\"mostrarAnsL2Ex10(5,'W')\">"+
						"<div id=\"divAns5Wh\"><input type=\"hidden\" id=\"iptAns5Wh\" value=0 /></div>"+
					"</td>"+
				  "</tr>"+
				"</table>"+
				"<table align=\"center\" width=\"425\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"15\" height=\"50\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong>6.</strong></td>"+
					"<td width=\"42\" align=\"center\" valign=\"middle\"><object id=\"FlashID6\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"29\" height=\"27\">"+
					  "<param name=\"movie\" value=\"../swf/L2/L2_Exe_10/btn_L2_exer_10_f.swf\" />"+
					  "<param name=\"quality\" value=\"high\" />"+
					  "<param name=\"wmode\" value=\"transparent\" />"+
					  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
					  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
					  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
					  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
					  "<!--[if !IE]>-->"+
					  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L2/L2_Exe_10/btn_L2_exer_10_f.swf\" width=\"29\" height=\"27\">"+
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
					"<td width=\"144\" align=\"center\" class=\"texto_2\">Yes/No question </td>"+
					"<td background=\"../img/bg_chek.png\" width=\"33\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL2Ex10(6,'Y')\">"+
						"<div id=\"divAns6Yn\"><input type=\"hidden\" id=\"iptAns6Yn\" value=0 /></div>"+
					"</td>"+
					"<td width=\"144\" align=\"center\" valign=\"middle\" class=\"texto_1\">Wh-question </td>"+
					"<td width=\"31\" align=\"center\" valign=\"middle\" background=\"../img/bg_chek.png\" onclick=\"mostrarAnsL2Ex10(6,'W')\">"+
						"<div id=\"divAns6Wh\"><input type=\"hidden\" id=\"iptAns6Wh\" value=0 /></div>"+
					"</td>"+
				  "</tr><input type=\"hidden\" id=\"vez\" value="+vez+" />"+
				"</table>";	
			}
			$('#divTblE10').html(html);
		}
		actualizardivCalL2E10(img, varscore);
	}
}

function actualizarBtnL2E10(idBtn)
{
	if(idBtn == 3)
		btn = "<table width=\"117\" border=\"0\" cellspacing=\"0\">"+
            "<tr>"+
              "<td width=\"35\" height=\"31\" align=\"center\" valign=\"middle\"><img src=\"../img/8.btn_chulito_desab.png\" name=\"Image19\" width=\"25\" height=\"25\" border=\"0\" id=\"Image19\" /></td>"+
              "<td width=\"40\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL2E10(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image20','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image20\" width=\"25\" height=\"25\" border=\"0\" id=\"Image20\" /></a></td>"+
              "<td width=\"36\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL2E10(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image21','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image21\" width=\"29\" height=\"25\" border=\"0\" id=\"Image21\" /></a></td>"+
            "</tr>"+
          "</table>";
	else
		btn = "<table width=\"117\" border=\"0\" cellspacing=\"0\">"+
            "<tr>"+
              "<td width=\"35\" height=\"31\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL2E10(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image19','','../img/8.btn_chulito2.png',1)\"><img src=\"../img/8.btn_chulito.png\" name=\"Image19\" width=\"25\" height=\"25\" border=\"0\" id=\"Image19\" /></a></td>"+
              "<td width=\"40\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL2E10(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image20','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image20\" width=\"25\" height=\"25\" border=\"0\" id=\"Image20\" /></a></td>"+
              "<td width=\"36\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL2E10(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image21','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image21\" width=\"29\" height=\"25\" border=\"0\" id=\"Image21\" /></a></td>"+
            "</tr>"+
          "</table>";
			
	$('#divBtn').html(btn);
}

function actualizardivCalL2E10(img, iptScore)
{
	//alert(idBtn);
	if(img != "")
		html = "<img src=\"../img/"+img+".png\" width=\"30\" height=\"30\" />"+
				"<input type=\"hidden\" id=\"inptscore\" name=\"inptscore\" value="+iptScore+" />";
	else		
		html = "&nbsp;<input type=\"hidden\" id=\"inptscore\" name=\"inptscore\" value="+iptScore+" />";
	
	$('#divCalL2E10').html(html);
}

/* Exercise 10 */


/* Exercise 11 */
function cambiarDivL2Ex11(idQst)
{	
	if (idQst == 1)
	{
		swf = "<object id=\"FlashID1\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\">"+
		  "<param name=\"movie\" value=\"../swf/L2/L2_Exe_11/btn_L2_exer_11_a.swf\" />"+
		  "<param name=\"quality\" value=\"high\" />"+
		  "<param name=\"wmode\" value=\"transparent\" />"+
		  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
		  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
		  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
		  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
		  "<!--[if !IE]>-->"+
		  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L2/L2_Exe_11/btn_L2_exer_11_a.swf\" width=\"45\" height=\"40\">"+
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
		swf = "<object id=\"FlashID2\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\">"+
		  "<param name=\"movie\" value=\"../swf/L2/L2_Exe_11/btn_L2_exer_11_b.swf\" />"+
		  "<param name=\"quality\" value=\"high\" />"+
		  "<param name=\"wmode\" value=\"transparent\" />"+
		  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
		  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
		  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
		  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
		  "<!--[if !IE]>-->"+
		  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L2/L2_Exe_11/btn_L2_exer_11_b.swf\" width=\"45\" height=\"40\">"+
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
		swf = "<object id=\"FlashID3\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\">"+
		  "<param name=\"movie\" value=\"../swf/L2/L2_Exe_11/btn_L2_exer_11_c.swf\" />"+
		  "<param name=\"quality\" value=\"high\" />"+
		  "<param name=\"wmode\" value=\"transparent\" />"+
		  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
		  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
		  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
		  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
		  "<!--[if !IE]>-->"+
		  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L2/L2_Exe_11/btn_L2_exer_11_c.swf\" width=\"45\" height=\"40\">"+
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
		swf = "<object id=\"FlashID4\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\">"+
		  "<param name=\"movie\" value=\"../swf/L2/L2_Exe_11/btn_L2_exer_11_d.swf\" />"+
		  "<param name=\"quality\" value=\"high\" />"+
		  "<param name=\"wmode\" value=\"transparent\" />"+
		  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
		  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
		  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
		  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
		  "<!--[if !IE]>-->"+
		  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L2/L2_Exe_11/btn_L2_exer_11_d.swf\" width=\"45\" height=\"40\">"+
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
		swf = "<object id=\"FlashID5\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\">"+
		  "<param name=\"movie\" value=\"../swf/L2/L2_Exe_11/btn_L2_exer_11_e.swf\" />"+
		  "<param name=\"quality\" value=\"high\" />"+
		  "<param name=\"wmode\" value=\"transparent\" />"+
		  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
		  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
		  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
		  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
		  "<!--[if !IE]>-->"+
		  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L2/L2_Exe_11/btn_L2_exer_11_e.swf\" width=\"45\" height=\"40\">"+
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
		swf = "<object id=\"FlashID6\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\">"+
		  "<param name=\"movie\" value=\"../swf/L2/L2_Exe_11/btn_L2_exer_11_f.swf\" />"+
		  "<param name=\"quality\" value=\"high\" />"+
		  "<param name=\"wmode\" value=\"transparent\" />"+
		  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
		  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
		  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
		  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
		  "<!--[if !IE]>-->"+
		  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L2/L2_Exe_11/btn_L2_exer_11_f.swf\" width=\"45\" height=\"40\">"+
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
	$('#divSwfL2Ex11').html(swf);
	cambiarDivTxtL2Ex11(idQst);
}

function cambiarDivTxtL2Ex11(idQst)
{
	if(idQst == 1)
	{
		tblTxt = "<table align=\"center\" width=\"505\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"52\" height=\"111\"><a href=\"#\" onclick=\"cambiarDivL2Ex11(6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image10','','../img/11.izq2.png',1)\"><img src=\"../img/11.izq.png\" name=\"Image10\" width=\"50\" height=\"55\" border=\"0\" id=\"Image10\" /></a></td>"+
			"<td width=\"392\" align=\"center\" valign=\"middle\" background=\"../img/bg_Cuadro10.png\" class=\"texto_1_Grande\">Do you have a new job?</td>"+
			"<td width=\"47\"><a href=\"#\" onclick=\"cambiarDivL2Ex11(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image9','','../img/11.der2.png',1)\"><img src=\"../img/11.der.png\" name=\"Image9\" width=\"50\" height=\"55\" border=\"0\" id=\"Image9\" /></a></td>"+
		  "</tr>"+
		"</table>";
	}
	else if(idQst == 2)
	{
		tblTxt = "<table align=\"center\" width=\"505\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"52\" height=\"111\"><a href=\"#\" onclick=\"cambiarDivL2Ex11(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image10','','../img/11.izq2.png',1)\"><img src=\"../img/11.izq.png\" name=\"Image10\" width=\"50\" height=\"55\" border=\"0\" id=\"Image10\" /></a></td>"+
			"<td width=\"392\" align=\"center\" valign=\"middle\" background=\"../img/bg_Cuadro10.png\" class=\"texto_1_Grande\">Do you like your new teacher?</td>"+
			"<td width=\"47\"><a href=\"#\" onclick=\"cambiarDivL2Ex11(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image9','','../img/11.der2.png',1)\"><img src=\"../img/11.der.png\" name=\"Image9\" width=\"50\" height=\"55\" border=\"0\" id=\"Image9\" /></a></td>"+
		  "</tr>"+
		"</table>";
	}
	else if(idQst == 3)
	{
		tblTxt = "<table align=\"center\" width=\"505\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"52\" height=\"111\"><a href=\"#\" onclick=\"cambiarDivL2Ex11(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image10','','../img/11.izq2.png',1)\"><img src=\"../img/11.izq.png\" name=\"Image10\" width=\"50\" height=\"55\" border=\"0\" id=\"Image10\" /></a></td>"+
			"<td width=\"392\" align=\"center\" valign=\"middle\" background=\"../img/bg_Cuadro10.png\" class=\"texto_1_Grande\">Do you study?</td>"+
			"<td width=\"47\"><a href=\"#\" onclick=\"cambiarDivL2Ex11(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image9','','../img/11.der2.png',1)\"><img src=\"../img/11.der.png\" name=\"Image9\" width=\"50\" height=\"55\" border=\"0\" id=\"Image9\" /></a></td>"+
		  "</tr>"+
		"</table>";
	}
	else if(idQst == 4)
	{
		tblTxt = "<table align=\"center\" width=\"505\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"52\" height=\"111\"><a href=\"#\" onclick=\"cambiarDivL2Ex11(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image10','','../img/11.izq2.png',1)\"><img src=\"../img/11.izq.png\" name=\"Image10\" width=\"50\" height=\"55\" border=\"0\" id=\"Image10\" /></a></td>"+
			"<td width=\"392\" align=\"center\" valign=\"middle\" background=\"../img/bg_Cuadro10.png\" class=\"texto_1_Grande\">What do you do exactly?</td>"+
			"<td width=\"47\"><a href=\"#\" onclick=\"cambiarDivL2Ex11(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image9','','../img/11.der2.png',1)\"><img src=\"../img/11.der.png\" name=\"Image9\" width=\"50\" height=\"55\" border=\"0\" id=\"Image9\" /></a></td>"+
		  "</tr>"+
		"</table>";
	}
	else if(idQst == 5)
	{
		tblTxt = "<table align=\"center\" width=\"505\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"52\" height=\"111\"><a href=\"#\" onclick=\"cambiarDivL2Ex11(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image10','','../img/11.izq2.png',1)\"><img src=\"../img/11.izq.png\" name=\"Image10\" width=\"50\" height=\"55\" border=\"0\" id=\"Image10\" /></a></td>"+
			"<td width=\"392\" align=\"center\" valign=\"middle\" background=\"../img/bg_Cuadro10.png\" class=\"texto_1_Grande\">Where do you study?</td>"+
			"<td width=\"47\"><a href=\"#\" onclick=\"cambiarDivL2Ex11(6)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image9','','../img/11.der2.png',1)\"><img src=\"../img/11.der.png\" name=\"Image9\" width=\"50\" height=\"55\" border=\"0\" id=\"Image9\" /></a></td>"+
		  "</tr>"+
		"</table>";
	}
	else if(idQst == 6)
	{
		tblTxt = "<table align=\"center\" width=\"505\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"52\" height=\"111\"><a href=\"#\" onclick=\"cambiarDivL2Ex11(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image10','','../img/11.izq2.png',1)\"><img src=\"../img/11.izq.png\" name=\"Image10\" width=\"50\" height=\"55\" border=\"0\" id=\"Image10\" /></a></td>"+
			"<td width=\"392\" align=\"center\" valign=\"middle\" background=\"../img/bg_Cuadro10.png\" class=\"texto_1_Grande\">How do you like your new job?</td>"+
			"<td width=\"47\"><a href=\"#\" onclick=\"cambiarDivL2Ex11(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image9','','../img/11.der2.png',1)\"><img src=\"../img/11.der.png\" name=\"Image9\" width=\"50\" height=\"55\" border=\"0\" id=\"Image9\" /></a></td>"+
		  "</tr>"+
		"</table>";
	}
	$('#divTxtL2Ex11').html(tblTxt);
	cambiarDivPtsL2Ex11(idQst);
}

function cambiarDivPtsL2Ex11(idQst)
{
	if(idQst == 1)
	{
		tblBtn = "<table align=\"center\" width=\"90\" border=\"0\" cellspacing=\"1\">"+
		  "<tr>"+
			"<td width=\"12\" height=\"44\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_verde.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"11\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
		  "</tr>"+
		"</table>";
	}
	else if(idQst == 2)
	{
		tblBtn = "<table align=\"center\" width=\"90\" border=\"0\" cellspacing=\"1\">"+
		  "<tr>"+
			"<td width=\"12\" height=\"44\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_verde.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"11\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
		  "</tr>"+
		"</table>";
	}
	else if(idQst == 3)
	{
		tblBtn = "<table align=\"center\" width=\"90\" border=\"0\" cellspacing=\"1\">"+
		  "<tr>"+
			"<td width=\"12\" height=\"44\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_verde.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"11\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
		  "</tr>"+
		"</table>";
	}
	else if(idQst == 4)
	{
		tblBtn = "<table align=\"center\" width=\"90\" border=\"0\" cellspacing=\"1\">"+
		  "<tr>"+
			"<td width=\"12\" height=\"44\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_verde.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"11\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
		  "</tr>"+
		"</table>";
	}
	else if(idQst == 5)
	{
		tblBtn = "<table align=\"center\" width=\"90\" border=\"0\" cellspacing=\"1\">"+
		  "<tr>"+
			"<td width=\"12\" height=\"44\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_verde.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"11\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
		  "</tr>"+
		"</table>";
	}
	else if(idQst == 6)
	{
		tblBtn = "<table align=\"center\" width=\"90\" border=\"0\" cellspacing=\"1\">"+
		  "<tr>"+
			"<td width=\"12\" height=\"44\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"12\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_avano.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
			"<td width=\"11\" align=\"center\" valign=\"bottom\"><img src=\"../img/12.punto_verde.png\" alt=\"\" width=\"12\" height=\"16\" /></td>"+
		  "</tr>"+
		"</table>";
	}
	$('#divPtsL2Ex11').html(tblBtn);
}
/* Exercise 11 */