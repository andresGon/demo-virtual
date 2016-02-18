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

/* Exercise 2 */
function verificarL3E2(idQst, idBtn)
{
	ansL3E2 = $("#selAnswerE2").val();
	vez = $("#vez").val();
	img = "";
	
	varscore = $("#inptscore").attr("value");
	
	doLMSSetValue("cmi.core.score.min", 0);
	doLMSSetValue("cmi.core.score.max", 100);
	
	if(ansL3E2 == "" && idBtn != 3)
		alert("You must select an answer.");
	else{
		if(idBtn == 1)
		{
			if(idQst == 1 && ansL3E2 == 'optB'){
				img = "good";
				varscore = parseFloat(varscore) + 20;
			}
			else if (idQst == 2 && ansL3E2 == 'optB'){
				img = "good";
				varscore = parseFloat(varscore) + 20;
			}
			else if (idQst == 3 && ansL3E2 == "optB"){
				img = "good";
				varscore = parseFloat(varscore) + 20;
			}
			else if (idQst == 4 && ansL3E2 == 'optB'){
				img = "good";
				varscore = parseFloat(varscore) + 20;
			}
			else if (idQst == 5 && ansL3E2 == 'optA'){
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
			
			actualizardivCalL3E2(img, varscore);
		}
		else{
			if(idBtn == 3)
			{
				switch (idQst){
					case 1:
						value = "<select name=\"selAnswerE2\" class=\"bg_selec_mediano\" id=\"selAnswerE2\">"+
								  "<option value=\"\"></option>"+
								  "<option value=\"optA\"> Are you into technology?</option>"+
								  "<option value=\"optB\" selected>What's new with you?</option>"+
								"</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
					case 2:
						value = "<select name=\"selAnswerE2\" class=\"bg_selec_mediano\" id=\"selAnswerE2\">"+
								  "<option value=\"\"></option>"+
								  "<option value=\"optA\">How are your parents? </option>"+
								  "<option value=\"optB\" selected>Are you into sports? </option>"+
								"</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
					case 3:
						value = "<select name=\"selAnswerE2\" class=\"bg_selec_muygrande_Verde\" id=\"selAnswerE2\">"+
									"<option value=\"\"></option>"+
									"<option value=\"optA\"> They are from San Juan in Puerto Rico. </option>"+
									"<option value=\"optB\" selected>They're fine, thanks.</option>"+
								  "</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
					case 4:
						value = "<select name=\"selAnswerE2\" class=\"bg_selec_mediano_Verde\" id=\"selAnswerE2\">"+
									"<option value=\"\"></option>"+
									"<option value=\"optA\">I'm all right, thanks. </option>"+
									"<option value=\"optB\" selected>English and French.</option>"+
								  "</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
					case 5:
						value = "<select name=\"selAnswerE2\" class=\"bg_selec_muygrande\" id=\"selAnswerE2\">"+
								  "<option value=\"\"></option>"+
								  "<option value=\"optA\" selected>What part of England are you from?</option>"+
								  "<option value=\"optB\">What school do you go to?</option>"+
								"</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
				}
				actualizarBtnL3E2(idQst, idBtn);
			}	
			else if(idBtn == 2){
				vez = parseInt(vez) + 1;
				if(vez >= 3)
					actualizarBtnL3E2(idQst, idBtn);
				switch (idQst){
					case 1:
						value = "<select name=\"selAnswerE2\" class=\"bg_selec_mediano\" id=\"selAnswerE2\">"+
								  "<option value=\"\"></option>"+
								  "<option value=\"optA\"> Are you into technology?</option>"+
								  "<option value=\"optB\">What's new with you?</option>"+
								"</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
					case 2:
						value = "<select name=\"selAnswerE2\" class=\"bg_selec_mediano\" id=\"selAnswerE2\">"+
								  "<option value=\"\"></option>"+
								  "<option value=\"optA\">How are your parents? </option>"+
								  "<option value=\"optB\">Are you into sports? </option>"+
								"</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
					case 3:
						value = "<select name=\"selAnswerE2\" class=\"bg_selec_muygrande_Verde\" id=\"selAnswerE2\">"+
									"<option value=\"\"></option>"+
									"<option value=\"optA\"> They are from San Juan in Puerto Rico. </option>"+
									"<option value=\"optB\">They’re fine, thanks.</option>"+
								  "</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
					case 4:
						value = "<select name=\"selAnswerE2\" class=\"bg_selec_mediano_Verde\" id=\"selAnswerE2\">"+
									"<option value=\"\"></option>"+
									"<option value=\"optA\">I'm all right, thanks. </option>"+
									"<option value=\"optB\">English and French.</option>"+
								  "</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
					case 5:
						value = "<select name=\"selAnswerE2\" class=\"bg_selec_muygrande\" id=\"selAnswerE2\">"+
								  "<option value=\"\"></option>"+
								  "<option value=\"optA\">What part of England are you from?</option>"+
								  "<option value=\"optB\">What school do you go to?</option>"+
								"</select>"+
								"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
					break;
					
				}
			}
			$('#divAnswerSelE2').html(value); 
			actualizardivCalL3E2(img, varscore);
		}
	}
}

function actualizarBtnL3E2(idQst, idBtn)
{
	if(idBtn == 3)
		btn = "<table width=\"150\" border=\"0\">"+
            "<tr>"+
              "<td height=\"31\" align=\"center\" valign=\"middle\"><img src=\"../img/8.btn_chulito_desab.png\" name=\"Image19\" width=\"25\" height=\"25\" border=\"0\" id=\"Image19\" /></td>"+
              "<td align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL3E2("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image20','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image20\" width=\"25\" height=\"25\" border=\"0\" id=\"Image20\" /></a></td>"+
              "<td align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL3E2("+idQst+",3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image21','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image21\" width=\"29\" height=\"25\" border=\"0\" id=\"Image21\" /></a></td>"+
            "</tr>"+
          "</table>";
	else
		btn = "<table width=\"150\" border=\"0\">"+
            "<tr>"+
              "<td height=\"31\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL3E2("+idQst+",1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image19','','../img/8.btn_chulito2.png',1)\"><img src=\"../img/8.btn_chulito.png\" name=\"Image19\" width=\"25\" height=\"25\" border=\"0\" id=\"Image19\" /></a></td>"+
              "<td align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL3E2("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image20','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image20\" width=\"25\" height=\"25\" border=\"0\" id=\"Image20\" /></a></td>"+
              "<td align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL3E2("+idQst+",3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image21','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image21\" width=\"29\" height=\"25\" border=\"0\" id=\"Image21\" /></a></td>"+
            "</tr>"+
          "</table>";
			
	$('#divBtn').html(btn);
}

function actualizardivCalL3E2(img, iptScore)
{
	//alert(idBtn);
	if(img != "")
		html = "<img src=\"../img/"+img+".png\" width=\"30\" height=\"30\" />"+
				"<input type=\"hidden\" id=\"inptscore\" name=\"inptscore\" value="+iptScore+" />";
	else		
		html = "&nbsp;<input type=\"hidden\" id=\"inptscore\" name=\"inptscore\" value="+iptScore+" />";
	
	$('#divCalL3E2').html(html);
}

function cambiarDivL3Ex2(idQst)
{	
	iptScore = $("#inptscore").attr("value");
	
	if (idQst == 1)
	{	
		prev = 5;
		next = 2;
		tblQst = "<table width=\"271\" border=\"0\">"+
            "<tr>"+
              "<td width=\"17\" height=\"56\" align=\"right\" valign=\"middle\" class=\"texto_1\">A:</td>"+
              "<td width=\"15\" align=\"right\" valign=\"middle\" class=\"texto_1\">Hi</td>"+
              "<td width=\"225\" align=\"center\" valign=\"middle\" background=\"../img/bg_selec_medi_3.png\"><div id=\"divAnswerSelE2\">"+
                "<select name=\"selAnswerE2\" class=\"bg_selec_mediano\" id=\"selAnswerE2\">"+
                  "<option value=\"\"></option>"+
                  "<option value=\"optA\"> Are you into technology?</option>"+
                  "<option value=\"optB\">What's new with you?</option>"+
                "</select>"+
				"<input type=\"hidden\" id=\"vez\" value=0 />"+
              "</div></td>"+
              "</tr>"+
          "</table>"+
            "<table width=\"271\" border=\"0\">"+
              "<tr class=\"texto_3\">"+
                "<td width=\"18\">B:</td>"+
                "<td width=\"243\"> Not much. </td>"+
              "</tr>"+
            "</table>";
		
		btnQst = "<table width=\"215\" cellspacing=\"0\" cellpadding=\"0\">"+
              "<tr>"+
                "<td width=\"40\" height=\"53\"><a href=\"#\" onclick=\"cambiarDivL3Ex2(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image13','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_2.png\" name=\"Image13\" width=\"40\" height=\"53\" border=\"0\" id=\"Image13\" /></a></td>"+
                "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
                "<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL3Ex2(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image14','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image14\" width=\"40\" height=\"53\" border=\"0\" id=\"Image14\" /></a></td>"+
                "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
                "<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL3Ex2(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_1.png\" name=\"Image15\" width=\"40\" height=\"53\" border=\"0\" id=\"Image15\" /></a></td>"+
                "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
                "<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL3Ex2(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_1.png\" name=\"Image16\" width=\"40\" height=\"53\" border=\"0\" id=\"Image16\" /></a></td>"+
                "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
                "<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL3Ex2(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image22','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_1.png\" name=\"Image22\" width=\"40\" height=\"53\" border=\"0\" id=\"Image22\" /></a></td>"+
                "<td width=\"10\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
                "</tr>"+
            "</table>";
	}
	else if (idQst == 2)
	{
		prev = 1;
		next = 3;
		tblQst = "<table width=\"345\" border=\"0\">"+
            "<tr>"+
              "<td width=\"17\" height=\"56\" align=\"right\" valign=\"middle\" class=\"texto_1\">A:</td>"+
              "<td width=\"89\" align=\"left\" valign=\"middle\" class=\"texto_1\">Hello, John. </td>"+
              "<td width=\"225\" align=\"center\" valign=\"middle\" background=\"../img/bg_selec_medi_3.png\"><div id=\"divAnswerSelE2\">"+
                "<select name=\"selAnswerE2\" class=\"bg_selec_mediano\" id=\"selAnswerE2\">"+
                  "<option value=\"\"></option>"+
				  "<option value=\"optA\">How are your parents? </option>"+
                  "<option value=\"optB\">Are you into sports? </option>"+
                "</select>"+
				"<input type=\"hidden\" id=\"vez\" value=0 />"+
              "</div></td>"+
              "</tr>"+
          "</table>"+
            "<table width=\"400\" border=\"0\">"+
              "<tr class=\"texto_3\">"+
                "<td width=\"45\" align=\"right\">B:</td>"+
                "<td width=\"345\">  Yes. I really like soccer, baseball and basketball.</td>"+
              "</tr>"+
            "</table>";
		
		btnQst = "<table width=\"215\" cellspacing=\"0\" cellpadding=\"0\">"+
              "<tr>"+
                "<td width=\"40\" height=\"53\"><a href=\"#\" onclick=\"cambiarDivL3Ex2(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image13','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image13\" width=\"40\" height=\"53\" border=\"0\" id=\"Image13\" /></a></td>"+
                "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
                "<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL3Ex2(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image14','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_2.png\" name=\"Image14\" width=\"40\" height=\"53\" border=\"0\" id=\"Image14\" /></a></td>"+
                "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
                "<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL3Ex2(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_1.png\" name=\"Image15\" width=\"40\" height=\"53\" border=\"0\" id=\"Image15\" /></a></td>"+
                "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
                "<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL3Ex2(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_1.png\" name=\"Image16\" width=\"40\" height=\"53\" border=\"0\" id=\"Image16\" /></a></td>"+
                "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
                "<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL3Ex2(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image22','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_1.png\" name=\"Image22\" width=\"40\" height=\"53\" border=\"0\" id=\"Image22\" /></a></td>"+
                "<td width=\"10\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
                "</tr>"+
            "</table>";
	}
	else if (idQst == 3)
	{
		prev = 2;
		next = 4;
		tblQst = "<table width=\"355\" border=\"0\">"+
            "<tr>"+
              "<td width=\"29\" height=\"21\" align=\"center\" valign=\"middle\" class=\"texto_1\">A:</td>"+
              "<td width=\"316\" align=\"left\" valign=\"bottom\" class=\"texto_1\">How are your parents?</td>"+
              "</tr>"+
          "</table>"+
            "<table width=\"354\" border=\"0\">"+
              "<tr class=\"texto_3\">"+
                "<td width=\"20\" height=\"55\" align=\"right\" valign=\"middle\">B:</td>"+
                "<td width=\"324\" align=\"center\" valign=\"middle\" background=\"../img/bg_selec_muygrande.png\"><div id=\"divAnswerSelE2\">"+
                  "<select name=\"selAnswerE2\" class=\"bg_selec_muygrande_Verde\" id=\"selAnswerE2\">"+
				    "<option value=\"\"></option>"+
                    "<option value=\"optA\"> They are from San Juan in Puerto Rico. </option>"+
                    "<option value=\"optB\">They're fine, thanks.</option>"+
                  "</select>"+
				  "<input type=\"hidden\" id=\"vez\" value=0 />"+
                "</div></td>"+
              "</tr>"+
            "</table>";
	
		btnQst = "<table width=\"215\" cellspacing=\"0\" cellpadding=\"0\">"+
              "<tr>"+
                "<td width=\"40\" height=\"53\"><a href=\"#\" onclick=\"cambiarDivL3Ex2(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image13','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image13\" width=\"40\" height=\"53\" border=\"0\" id=\"Image13\" /></a></td>"+
                "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
                "<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL3Ex2(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image14','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image14\" width=\"40\" height=\"53\" border=\"0\" id=\"Image14\" /></a></td>"+
                "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
                "<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL3Ex2(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_2.png\" name=\"Image15\" width=\"40\" height=\"53\" border=\"0\" id=\"Image15\" /></a></td>"+
                "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
                "<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL3Ex2(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_1.png\" name=\"Image16\" width=\"40\" height=\"53\" border=\"0\" id=\"Image16\" /></a></td>"+
                "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
                "<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL3Ex2(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image22','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_1.png\" name=\"Image22\" width=\"40\" height=\"53\" border=\"0\" id=\"Image22\" /></a></td>"+
                "<td width=\"10\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
                "</tr>"+
            "</table>";
	}
	else if (idQst == 4)
	{
		prev = 3;
		next = 5;
		tblQst = "<table width=\"258\" border=\"0\">"+
            "<tr>"+
              "<td width=\"21\" height=\"21\" align=\"right\" valign=\"bottom\" class=\"texto_1\">A:</td>"+
              "<td width=\"227\" align=\"left\" valign=\"bottom\" class=\"texto_1\">What languages do you speak?</td>"+
              "</tr>"+
          "</table>"+
            "<table width=\"259\" border=\"0\">"+
              "<tr class=\"texto_3\">"+
                "<td width=\"20\" height=\"55\" align=\"right\" valign=\"middle\">B:</td>"+
                "<td width=\"189\" align=\"center\" valign=\"middle\" background=\"../img/bg_selec_medi_4.png\"><div id=\"divAnswerSelE2\">"+
                  "<select name=\"selAnswerE2\" class=\"bg_selec_mediano_Verde\" id=\"selAnswerE2\">"+
                    "<option value=\"\"></option>"+
					"<option value=\"optA\">I'm all right, thanks. </option>"+
                    "<option value=\"optB\">English and French.</option>"+
                  "</select>"+
				  "<input type=\"hidden\" id=\"vez\" value=0 />"+
                "</div></td>"+
                "<td width=\"36\" align=\"center\" valign=\"middle\"></td>"+
              "</tr>"+
            "</table>";
		
		btnQst = "<table width=\"215\" cellspacing=\"0\" cellpadding=\"0\">"+
              "<tr>"+
                "<td width=\"40\" height=\"53\"><a href=\"#\" onclick=\"cambiarDivL3Ex2(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image13','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image13\" width=\"40\" height=\"53\" border=\"0\" id=\"Image13\" /></a></td>"+
                "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
                "<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL3Ex2(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image14','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image14\" width=\"40\" height=\"53\" border=\"0\" id=\"Image14\" /></a></td>"+
                "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
                "<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL3Ex2(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_1.png\" name=\"Image15\" width=\"40\" height=\"53\" border=\"0\" id=\"Image15\" /></a></td>"+
                "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
                "<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL3Ex2(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_2.png\" name=\"Image16\" width=\"40\" height=\"53\" border=\"0\" id=\"Image16\" /></a></td>"+
                "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
                "<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL3Ex2(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image22','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_1.png\" name=\"Image22\" width=\"40\" height=\"53\" border=\"0\" id=\"Image22\" /></a></td>"+
                "<td width=\"10\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
                "</tr>"+
            "</table>";
	}
	else if (idQst == 5)
	{	
		prev = 4;
		next = 1;
		tblQst = "<table width=\"349\" border=\"0\">"+
            "<tr align=\"center\" valign=\"middle\">"+
              "<td width=\"17\" height=\"53\" align=\"left\" class=\"texto_1\">A:</td>"+
              "<td width=\"322\" background=\"../img/bg_selec_muygrande.png\"class=\"texto_1\"><div id=\"divAnswerSelE2\">"+
                "<select name=\"selAnswerE2\" class=\"bg_selec_muygrande\" id=\"selAnswerE2\">"+
                  "<option value=\"\"></option>"+
				  "<option value=\"optA\">What part of England are you from?</option>"+
                  "<option value=\"optB\">What school do you go to?</option>"+
                "</select>"+
				"<input type=\"hidden\" id=\"vez\" value=0 />"+
              "</div></td>"+
              "</tr>"+
          "</table>"+
            "<table width=\"347\" border=\"0\">"+
              "<tr class=\"texto_3\">"+
                "<td width=\"22\" height=\"21\" align=\"left\">B:</td>"+
                "<td width=\"315\">  I'm from London.</td>"+
              "</tr>"+
            "</table>";
		
		btnQst = "<table width=\"215\" cellspacing=\"0\" cellpadding=\"0\">"+
              "<tr>"+
                "<td width=\"40\" height=\"53\"><a href=\"#\" onclick=\"cambiarDivL3Ex2(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image13','','../img/btn_1b_2.png',1)\"><img src=\"../img/btn_1b_1.png\" name=\"Image13\" width=\"40\" height=\"53\" border=\"0\" id=\"Image13\" /></a></td>"+
                "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
                "<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL3Ex2(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image14','','../img/btn_2b_2.png',1)\"><img src=\"../img/btn_2b_1.png\" name=\"Image14\" width=\"40\" height=\"53\" border=\"0\" id=\"Image14\" /></a></td>"+
                "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
                "<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL3Ex2(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image15','','../img/btn_3b_2.png',1)\"><img src=\"../img/btn_3b_1.png\" name=\"Image15\" width=\"40\" height=\"53\" border=\"0\" id=\"Image15\" /></a></td>"+
                "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
                "<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL3Ex2(4)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image16','','../img/btn_4b_2.png',1)\"><img src=\"../img/btn_4b_1.png\" name=\"Image16\" width=\"40\" height=\"53\" border=\"0\" id=\"Image16\" /></a></td>"+
                "<td width=\"3\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
                "<td width=\"40\" align=\"center\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL3Ex2(5)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image22','','../img/btn_5b_2.png',1)\"><img src=\"../img/btn_5b_2.png\" name=\"Image22\" width=\"40\" height=\"53\" border=\"0\" id=\"Image22\" /></a></td>"+
                "<td width=\"10\" align=\"center\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"3\" height=\"40\" /></td>"+
                "</tr>"+
            "</table>";
	}
	html = "<table align=\"center\" width=\"772\" border=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"770\" height=\"391\" align=\"center\" valign=\"top\"><table width=\"770\" height=\"171\" border=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
				"<td width=\"768\" height=\"171\" align=\"left\">"+
				"<table width=\"766\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"741\" height=\"65\"><img src=\"../img/titulos/L3/img_L3_exer_2.png\" width=\"377\" height=\"103\" /></td>"+
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
      "<table width=\"577\" height=\"160\" border=\"0\">"+
        "<tr>"+
          "<td width=\"50\" height=\"156\" align=\"center\" valign=\"middle\" class=\"texto_1\"><a href=\"#\" onclick=\"cambiarDivL3Ex2("+prev+")\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image24','','../img/11.izq2.png',1)\"><img src=\"../img/11.izq.png\" name=\"Image24\" width=\"50\" height=\"55\" border=\"0\" id=\"Image24\" /></a></td>"+
          "<td width=\"466\" align=\"center\" valign=\"middle\" background=\"../img/bg_Cuadro6.png\"class=\"texto_1\">"+tblQst+"</td>"+
          "<td width=\"47\" align=\"center\" valign=\"middle\" class=\"texto_1\"><a href=\"#\" onclick=\"cambiarDivL3Ex2("+next+")\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image25','','../img/11.der2.png',1)\"><img src=\"../img/11.der.png\" name=\"Image25\" width=\"50\" height=\"55\" border=\"0\" id=\"Image25\" /></a></td>"+
          "</tr>"+
    "</table>"+
      "<table width=\"75\" border=\"0\">"+
        "<tr>"+
          "<td width=\"69\" align=\"center\"><div id=\"divCalL3E2\"><input type=\"hidden\" id=\"inptscore\" name=\"inptscore\" value="+iptScore+" />&nbsp;<div></td>"+
          "</tr>"+
    "</table> "+
      "<table width=\"200\" border=\"0\">"+
        "<tr>"+
          "<td width=\"16\" height=\"50\">&nbsp;</td>"+
          "<td width=\"151\" background=\"../img/8.bg_refresh.png\">"+
		  "<div id=\"divBtn\">"+
		  "<table width=\"150\" border=\"0\">"+
            "<tr>"+
              "<td height=\"31\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL3E2("+idQst+",1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image19','','../img/8.btn_chulito2.png',1)\"><img src=\"../img/8.btn_chulito.png\" name=\"Image19\" width=\"25\" height=\"25\" border=\"0\" id=\"Image19\" /></a></td>"+
              "<td align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL3E2("+idQst+",2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image20','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image20\" width=\"25\" height=\"25\" border=\"0\" id=\"Image20\" /></a></td>"+
              "<td align=\"center\" valign=\"middle\"><img src=\"../img/8.btn_ojo_desab.png\" name=\"Image21\" width=\"29\" height=\"25\" border=\"0\" id=\"Image21\" /></td>"+
            "</tr>"+
          "</table>"+
		  "</div></td>"+
          "<td width=\"16\">&nbsp;</td>"+
        "</tr>"+
      "</table></td>"+
    "</tr>"+
    "</table>";
	
	$('#contenido').html(html);
}
/* Exercise 2 */


/* Exercise 7 */
function mostrarAnsL3Ex7(idOpt, idAns)
{
	if(idOpt == 1)
	{
		if(idAns == 'T'){
			ipt = "iptAns1T";
			ipt2 = "iptAns1F";
			div = "divAns1T";
			div2 = "divAns1F";
			imgIpt = "good_p";
		}
		else{
			ipt = "iptAns1F";
			ipt2 = "iptAns1T";
			div = "divAns1F";
			div2 = "divAns1T";
			imgIpt = "good_No_p";
		}
	}
	else if(idOpt == 2)
	{
		if(idAns == 'T'){
			ipt = "iptAns2T";
			ipt2 = "iptAns2F";
			div = "divAns2T";
			div2 = "divAns2F";
			imgIpt = "good_p";
		}
		else{
			ipt = "iptAns2F";
			ipt2 = "iptAns2T";
			div = "divAns2F";
			div2 = "divAns2T";
			imgIpt = "good_No_p";
		}
	}
	else if(idOpt == 3)
	{
		if(idAns == 'T'){
			ipt = "iptAns3T";
			ipt2 = "iptAns3F";
			div = "divAns3T";
			div2 = "divAns3F";
			imgIpt = "good_p";
		}
		else{
			ipt = "iptAns3F";
			ipt2 = "iptAns3T";
			div = "divAns3F";
			div2 = "divAns3T";
			imgIpt = "good_No_p";
		}
	}
	
	html = "<img src=\"../img/"+imgIpt+".png\" width=\"23\" height=\"23\" />"+
			"<input type=\"hidden\" id=\""+ipt+"\" value=1 />";
	$('#'+div).html(html);
	cleanAnsL3E7(div2, ipt2);
}

function cleanAnsL3E7(div, ipt)
{
	html = "&nbsp;"+
			"<input type=\"hidden\" id=\""+ipt+"\" value=0 />";
	$('#'+div).html(html);
}

function verificarL3E7(idQst, idBtn)
{
	vez = $("#vez").val();
	//alert(vez);
	img = "";
	
	varscore = $("#inptscore").attr("value");
	
	doLMSSetValue("cmi.core.score.min", 0);
	doLMSSetValue("cmi.core.score.max", 100);
	
	ans_1T = $("#iptAns1T").val();
	ans_1F = $("#iptAns1F").val();
	
	ans_2T = $("#iptAns2T").val();
	ans_2F = $("#iptAns2F").val();
	
	ans_3T = $("#iptAns3T").val();
	ans_3F = $("#iptAns3F").val();
	
	vald = parseInt(ans_1T) + parseInt(ans_1F) + parseInt(ans_2T) + parseInt(ans_2F) + parseInt(ans_3T) + parseInt(ans_3F);
	
	if(vald == 0 && idBtn != 3)
		alert("You must select the answers.");
	else
	{
		if(idBtn == 1){
			if(idQst == 'A' && ans_1T == 1 && ans_2F == 1 && ans_3T == 1){
				img = "good";
				varscore = parseFloat(varscore) + 50;
			}
			else if(idQst == 'B' && ans_1F == 1 && ans_2T == 1 && ans_3F == 1){
				img = "good";
				varscore = parseFloat(varscore) + 50;
			}
			else
				img = "good_No";
		}
				
		else
		{
			if(idQst == 'A'){
				txt1 = "Sean is from London, England";
				txt2 = "He works as an engineer.";
				txt3 = "He studies engineering.";
			}
			else if(idQst == 'B'){
				txt1 = "Jessica is a tour guide.";
				txt2 = "She lives in New York.";
				txt3 = "She lives with her husband.";
			}
			if(idBtn == 3)
			{
				if(idQst == 'A'){
					ans1T = "<img src=\"../img/good_p.png\" width=\"23\" height=\"23\" /><input type=\"hidden\" id=\"iptAns1T\" value=1 />";
					ans1F = "&nbsp;<input type=\"hidden\" id=\"iptAns1F\" value=0 />";
					
					ans2T = "&nbsp;<input type=\"hidden\" id=\"iptAns2T\" value=0 />";
					ans2F = "<img src=\"../img/good_No_p.png\" width=\"23\" height=\"23\" /><input type=\"hidden\" id=\"iptAns2F\" value=1 />";
					
					ans3T = "<img src=\"../img/good_p.png\" width=\"23\" height=\"23\" /><input type=\"hidden\" id=\"iptAns3T\" value=1 />";
					ans3F = "&nbsp;<input type=\"hidden\" id=\"iptAns3F\" value=0 />";
				}
				else if(idQst == 'B'){
					ans1T = "&nbsp;<input type=\"hidden\" id=\"iptAns1T\" value=0 />";
					ans1F = "<img src=\"../img/good_No_p.png\" width=\"23\" height=\"23\" /><input type=\"hidden\" id=\"iptAns1F\" value=1 />";
					
					ans2T = "<img src=\"../img/good_p.png\" width=\"23\" height=\"23\" /><input type=\"hidden\" id=\"iptAns2T\" value=1 />";
					ans2F = "&nbsp;<input type=\"hidden\" id=\"iptAns2F\" value=0 />";
					
					ans3T = "&nbsp;<input type=\"hidden\" id=\"iptAns3T\" value=0 />";
					ans3F = "<img src=\"../img/good_No_p.png\" width=\"23\" height=\"23\" /><input type=\"hidden\" id=\"iptAns3F\" value=1 />";
				}
				
				html = "<table align=\"center\" width=\"341\" border=\"0\">"+
				  "<tr>"+
					"<td width=\"15\" height=\"51\" align=\"center\" valign=\"middle\" class=\"texto_1\"><strong>1.</strong></td>"+
					"<td width=\"220\" align=\"left\" valign=\"middle\" class=\"texto_1\">"+txt1+"</td>"+
					"<td  background=\"../img/bg_chek.png\"width=\"32\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL3Ex7(1,'T');\">"+
						"<div id=\"divAns1T\">"+ans1T+"</div>"+
					"</td>"+
					"<td width=\"21\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
					"<td  background=\"../img/bg_chek.png\"width=\"31\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL3Ex7(1,'F');\">"+
						"<div id=\"divAns1F\">"+ans1F+"</div>"+
					"</td>"+
				  "</tr>"+
				"</table>"+
				"<table align=\"center\" width=\"341\" border=\"0\">"+
				  "<tr>"+
					"<td width=\"15\" height=\"51\" align=\"center\" valign=\"middle\" class=\"texto_2\"><strong>2.</strong></td>"+
					"<td width=\"220\" align=\"left\" valign=\"middle\" class=\"texto_2\">"+txt2+"</td>"+
					"<td  background=\"../img/bg_chek.png\"width=\"32\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL3Ex7(2,'T');\">"+
						"<div id=\"divAns2T\">"+ans2T+"</div>"+
					"</td>"+
					"<td width=\"21\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
					"<td  background=\"../img/bg_chek.png\"width=\"31\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL3Ex7(2,'F');\">"+
						"<div id=\"divAns2F\">"+ans2F+"</div>"+
					"</td>"+
				  "</tr>"+
				"</table>"+
				"<table align=\"center\" width=\"341\" border=\"0\">"+
				  "<tr>"+
					"<td width=\"15\" height=\"51\" align=\"center\" valign=\"middle\" class=\"texto_1\"><strong>3.</strong></td>"+
					"<td width=\"220\" align=\"left\" valign=\"middle\" class=\"texto_1\">"+txt3+"</td>"+
					"<td  background=\"../img/bg_chek.png\"width=\"32\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL3Ex7(3,'T');\">"+
						"<div id=\"divAns3T\">"+ans3T+"</div>"+
					"</td>"+
					"<td width=\"21\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
					"<td  background=\"../img/bg_chek.png\"width=\"31\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL3Ex7(3,'F');\">"+
						"<div id=\"divAns3F\">"+ans3F+"</div>"+
					"</td>"+
				  "</tr>"+
				"</table>"+
				"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
				actualizarBtnL3E7(idQst, idBtn);
			}	
			else if(idBtn == 2){
				if(vez >= 2)
					actualizarBtnL3E7(idQst, idBtn);
				vez = parseInt(vez) + 1;

				html = "<table align=\"center\" width=\"341\" border=\"0\">"+
				  "<tr>"+
					"<td width=\"15\" height=\"51\" align=\"center\" valign=\"middle\" class=\"texto_1\"><strong>1.</strong></td>"+
					"<td width=\"220\" align=\"left\" valign=\"middle\" class=\"texto_1\">"+txt1+"</td>"+
					"<td  background=\"../img/bg_chek.png\"width=\"32\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL3Ex7(1,'T');\">"+
						"<div id=\"divAns1T\">&nbsp;<input type=\"hidden\" id=\"iptAns1T\" value=0 /></div>"+
					"</td>"+
					"<td width=\"21\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
					"<td  background=\"../img/bg_chek.png\"width=\"31\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL3Ex7(1,'F');\">"+
						"<div id=\"divAns1F\">&nbsp;<input type=\"hidden\" id=\"iptAns1F\" value=0 /></div>"+
					"</td>"+
				  "</tr>"+
				"</table>"+
				"<table align=\"center\" width=\"341\" border=\"0\">"+
				  "<tr>"+
					"<td width=\"15\" height=\"51\" align=\"center\" valign=\"middle\" class=\"texto_2\"><strong>2.</strong></td>"+
					"<td width=\"220\" align=\"left\" valign=\"middle\" class=\"texto_2\">"+txt2+"</td>"+
					"<td  background=\"../img/bg_chek.png\"width=\"32\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL3Ex7(2,'T');\">"+
						"<div id=\"divAns2T\">&nbsp;<input type=\"hidden\" id=\"iptAns2T\" value=0 /></div>"+
					"</td>"+
					"<td width=\"21\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
					"<td  background=\"../img/bg_chek.png\"width=\"31\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL3Ex7(2,'F');\">"+
						"<div id=\"divAns2F\">&nbsp;<input type=\"hidden\" id=\"iptAns2F\" value=0 /></div>"+
					"</td>"+
				  "</tr>"+
				"</table>"+
				"<table align=\"center\" width=\"341\" border=\"0\">"+
				  "<tr>"+
					"<td width=\"15\" height=\"51\" align=\"center\" valign=\"middle\" class=\"texto_1\"><strong>3.</strong></td>"+
					"<td width=\"220\" align=\"left\" valign=\"middle\" class=\"texto_1\">"+txt3+"</td>"+
					"<td  background=\"../img/bg_chek.png\"width=\"32\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL3Ex7(3,'T');\">"+
						"<div id=\"divAns3T\">&nbsp;<input type=\"hidden\" id=\"iptAns3T\" value=0 /></div>"+
					"</td>"+
					"<td width=\"21\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
					"<td  background=\"../img/bg_chek.png\"width=\"31\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL3Ex7(3,'F');\">"+
						"<div id=\"divAns3F\">&nbsp;<input type=\"hidden\" id=\"iptAns3F\" value=0 /></div>"+
					"</td>"+
				  "</tr>"+
				"</table>"+
				"<input type=\"hidden\" id=\"vez\" value="+vez+" />";
			}
			$('#tblL3Ex7').html(html);
		}
		
		errorTxt3 = doLMSSetValue("cmi.core.score.raw", varscore);
		
		if(varscore >= "80"){
			errorTxt2 = doLMSSetValue("cmi.core.lesson_status", "passed");
		}
		else{
			errorTxt2 = doLMSSetValue("cmi.core.lesson_status", "failed");
		}
		doLMSCommit();
		
		actualizardivCalL3E7(img, varscore);
	}
}

function actualizarBtnL3E7(idQst, idBtn)
{
	if(idBtn == 3)
		btn = "<table width=\"123\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"35\" align=\"center\" valign=\"middle\"><img src=\"../img/8.btn_chulito_desab.png\" name=\"Image21\" width=\"25\" height=\"25\" border=\"0\" id=\"Image21\" /></td>"+
			"<td width=\"38\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL3E7('"+idQst+"',2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image23','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image23\" width=\"25\" height=\"25\" border=\"0\" id=\"Image23\" /></a></td>"+
			"<td width=\"36\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL3E7('"+idQst+"',3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image22','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image22\" width=\"29\" height=\"25\" border=\"0\" id=\"Image22\" /></a></td>"+
		  "</tr>"+
		"</table>";
	else
		btn = "<table width=\"123\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"35\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL3E7('"+idQst+"',1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image21','','../img/8.btn_chulito2.png',1)\"><img src=\"../img/8.btn_chulito.png\" name=\"Image21\" width=\"25\" height=\"25\" border=\"0\" id=\"Image21\" /></a></td>"+
			"<td width=\"38\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL3E7('"+idQst+"',2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image23','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image23\" width=\"25\" height=\"25\" border=\"0\" id=\"Image23\" /></a></td>"+
			"<td width=\"36\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL3E7('"+idQst+"',3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image22','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image22\" width=\"29\" height=\"25\" border=\"0\" id=\"Image22\" /></a></td>"+
		  "</tr>"+
		"</table>";
			
	$('#divBtn').html(btn);
}

function actualizardivCalL3E7(img, iptScore)
{
	//alert(idBtn);
	if(img != "")
		html = "<img src=\"../img/"+img+".png\" width=\"30\" height=\"30\" />"+
				"<input type=\"hidden\" id=\"inptscore\" name=\"inptscore\" value="+iptScore+" />";
	else		
		html = "&nbsp;<input type=\"hidden\" id=\"inptscore\" name=\"inptscore\" value="+iptScore+" />";
	
	$('#divCalL3E7').html(html);
}

function cambiarDivL3Ex7(idQst)
{	
	iptScore = $("#inptscore").attr("value");
	
	if (idQst == 'A')
	{	
		jpg = "art-1_3_7_a";
		swf = "<object id=\"FlashID1\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\">"+
			  "<param name=\"movie\" value=\"../swf/L3/L3_Exe_7/btn_L3_exer_7_a.swf\" />"+
			  "<param name=\"quality\" value=\"high\" />"+
			  "<param name=\"wmode\" value=\"transparent\" />"+
			  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
			  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
			  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
			  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
			  "<!--[if !IE]>-->"+
			  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L3/L3_Exe_7/btn_L3_exer_7_a.swf\" width=\"45\" height=\"40\">"+
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
		txt1 = "Sean is from London, England";
		txt2 = "He works as an engineer.";
		txt3 = "He studies engineering.";
		
		btnQst = "<table align=\"center\" width=\"229\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"140\" height=\"62\" align=\"center\" valign=\"top\"><img src=\"../img/img_Conversation.png\" width=\"126\" height=\"31\" /></td>"+
			"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL3Ex7('A')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image17','','../img/btn_A_2.png',1)\"><img src=\"../img/btn_A_2.png\" name=\"Image17\" width=\"40\" height=\"53\" border=\"0\" id=\"Image17\" /></a></td>"+
			"<td width=\"2\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"4\" height=\"40\" /></td>"+
			"<td width=\"39\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL3Ex7('B')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image18','','../img/btn_B_2.png',1)\"><img src=\"../img/btn_B_1.png\" name=\"Image18\" width=\"40\" height=\"53\" border=\"0\" id=\"Image18\" /></a></td>"+
		  "</tr>"+
		"</table>";
	}
	else if (idQst == 'B')
	{
		jpg = "art-1_3_7_b";
		swf = "<object id=\"FlashID2\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"45\" height=\"40\">"+
			  "<param name=\"movie\" value=\"../swf/L3/L3_Exe_7/btn_L3_exer_7_b.swf\" />"+
			  "<param name=\"quality\" value=\"high\" />"+
			  "<param name=\"wmode\" value=\"transparent\" />"+
			  "<param name=\"swfversion\" value=\"6.0.65.0\" />"+
			  "<!-- Esta etiqueta param indica a los usuarios de Flash Player 6.0 r65 o posterior que descarguen la versión más reciente de Flash Player. Elimínela si no desea que los usuarios vean el mensaje. -->"+
			  "<param name=\"expressinstall\" value=\"../Scripts/expressInstall.swf\" />"+
			  "<!-- La siguiente etiqueta object es para navegadores distintos de IE. Ocúltela a IE mediante IECC. -->"+
			  "<!--[if !IE]>-->"+
			  "<object type=\"application/x-shockwave-flash\" data=\"../swf/L3/L3_Exe_7/btn_L3_exer_7_b.swf\" width=\"45\" height=\"40\">"+
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
		txt1 = "Jessica is a tour guide.";
		txt2 = "She lives in New York.";
		txt3 = "She lives with her husband.";
		
		btnQst = "<table align=\"center\" width=\"229\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"140\" height=\"62\" align=\"center\" valign=\"top\"><img src=\"../img/img_Conversation.png\" width=\"126\" height=\"31\" /></td>"+
			"<td width=\"40\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL3Ex7('A')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image17','','../img/btn_A_2.png',1)\"><img src=\"../img/btn_A_1.png\" name=\"Image17\" width=\"40\" height=\"53\" border=\"0\" id=\"Image17\" /></a></td>"+
			"<td width=\"2\" align=\"left\" valign=\"top\"><img src=\"../img/10.img_divivionVer.png\" width=\"4\" height=\"40\" /></td>"+
			"<td width=\"39\" align=\"left\" valign=\"top\"><a href=\"#\" onclick=\"cambiarDivL3Ex7('B')\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image18','','../img/btn_B_2.png',1)\"><img src=\"../img/btn_B_2.png\" name=\"Image18\" width=\"40\" height=\"53\" border=\"0\" id=\"Image18\" /></a></td>"+
		  "</tr>"+
		"</table>";
	}
	html = "<table align=\"center\" width=\"772\" border=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"385\" height=\"62\" align=\"left\" valign=\"top\"><img src=\"../img/titulos/L3/img_L3_exer_7.png\" width=\"557\" height=\"115\" /></td>"+
			"<td width=\"318\" align=\"right\" valign=\"middle\">&nbsp;</td>"+
			"<td width=\"33\" align=\"left\" valign=\"top\">&nbsp;</td>"+
			"</tr>"+
			"</table>"+
			"<table align=\"center\" width=\"762\" border=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"344\" height=\"321\" align=\"left\" valign=\"top\">"+btnQst+
			"<table align=\"center\" width=\"232\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">"+
			  "<tr>"+
				"<td width=\"232\" height=\"127\" align=\"left\" valign=\"bottom\"><img src=\"../jpg/"+jpg+".png\" width=\"292\" height=\"242\" /></td>"+
				"</tr>"+
		  "</table>"+
			"</td>"+
			"<td width=\"414\" align=\"right\" valign=\"top\"><table align=\"center\" width=\"366\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">"+
			  "<tr>"+
			"<td width=\"244\" height=\"71\" align=\"center\" valign=\"middle\">"+swf+"</td>"+
			"<td width=\"61\" align=\"center\" valign=\"middle\"><img src=\"../img/img_true.png\" width=\"61\" height=\"16\" /></td>"+
			"<td width=\"61\" align=\"center\" valign=\"middle\"><img src=\"../img/img_tFalce.png\" width=\"61\" height=\"16\" /></td>"+
		  "</tr>"+
		"</table>"+
		"<div id=\"tblL3Ex7\">"+
		"<table align=\"center\" width=\"341\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"15\" height=\"51\" align=\"center\" valign=\"middle\" class=\"texto_1\"><strong>1.</strong></td>"+
			"<td width=\"220\" align=\"left\" valign=\"middle\" class=\"texto_1\">"+txt1+"</td>"+
			"<td  background=\"../img/bg_chek.png\"width=\"32\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL3Ex7(1,'T');\">"+
				"<div id=\"divAns1T\">&nbsp;<input type=\"hidden\" id=\"iptAns1T\" value=0 /></div>"+
			"</td>"+
			"<td width=\"21\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
			"<td  background=\"../img/bg_chek.png\"width=\"31\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL3Ex7(1,'F');\"></div>"+
				"<div id=\"divAns1F\">&nbsp;<input type=\"hidden\" id=\"iptAns1F\" value=0 /></div>"+
			"</td>"+
		  "</tr>"+
		"</table>"+
		"<table align=\"center\" width=\"341\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"15\" height=\"51\" align=\"center\" valign=\"middle\" class=\"texto_2\"><strong>2.</strong></td>"+
			"<td width=\"220\" align=\"left\" valign=\"middle\" class=\"texto_2\">"+txt2+"</td>"+
			"<td  background=\"../img/bg_chek.png\"width=\"32\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL3Ex7(2,'T');\">"+
				"<div id=\"divAns2T\">&nbsp;<input type=\"hidden\" id=\"iptAns2T\" value=0 /></div>"+
			"</td>"+
			"<td width=\"21\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
			"<td  background=\"../img/bg_chek.png\"width=\"31\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL3Ex7(2,'F');\">"+
				"<div id=\"divAns2F\">&nbsp;<input type=\"hidden\" id=\"iptAns2F\" value=0 /></div>"+
			"</td>"+
		  "</tr>"+
		"</table>"+
		"<table align=\"center\" width=\"341\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"15\" height=\"51\" align=\"center\" valign=\"middle\" class=\"texto_1\"><strong>3.</strong></td>"+
			"<td width=\"220\" align=\"left\" valign=\"middle\" class=\"texto_1\">"+txt3+"</td>"+
			"<td  background=\"../img/bg_chek.png\"width=\"32\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL3Ex7(3,'T');\">"+
				"<div id=\"divAns3T\">&nbsp;<input type=\"hidden\" id=\"iptAns3T\" value=0 /></div>"+
			"</td>"+
			"<td width=\"21\" align=\"center\" valign=\"middle\">&nbsp;</td>"+
			"<td  background=\"../img/bg_chek.png\"width=\"31\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL3Ex7(3,'F');\">"+
				"<div id=\"divAns3F\">&nbsp;<input type=\"hidden\" id=\"iptAns3F\" value=0 /></div>"+
			"</td>"+
		  "</tr>"+
		"</table>"+
		"<input type=\"hidden\" id=\"vez\" value=0 />"+
		"</div>"+
		"<table align=\"center\" width=\"125\" border=\"0\">"+
		  "<tr>"+
			"<td height=\"80\"><table align=\"center\" width=\"190\" border=\"0\">"+
		  "<tr>"+
			"<td width=\"30\" height=\"51\" align=\"center\" valign=\"middle\" class=\"texto_1\">"+
				"<div id=\"divCalL3E7\"><input type=\"hidden\" id=\"inptscore\" name=\"inptscore\" value="+iptScore+" />&nbsp;</div>"+
			"</td>"+
			"<td  background=\"../img/8.bg_refresh.png\"width=\"150\" align=\"center\" valign=\"middle\">"+
			"<div id=\"divBtn\">"+
			"<table width=\"123\" border=\"0\">"+
			  "<tr>"+
				"<td width=\"35\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL3E7('"+idQst+"',1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image21','','../img/8.btn_chulito2.png',1)\"><img src=\"../img/8.btn_chulito.png\" name=\"Image21\" width=\"25\" height=\"25\" border=\"0\" id=\"Image21\" /></a></td>"+
				"<td width=\"38\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL3E7('"+idQst+"',2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image23','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image23\" width=\"25\" height=\"25\" border=\"0\" id=\"Image23\" /></a></td>"+
				"<td width=\"36\" align=\"center\" valign=\"middle\"><img src=\"../img/8.btn_ojo_desab.png\" name=\"Image22\" width=\"29\" height=\"25\" border=\"0\" id=\"Image22\" /></td>"+
			  "</tr>"+
			"</table>"+
			"</div></td>"+
			"</tr>"+
		"</table></td>"+
		  "</tr>"+
		"</table>"+
		"</td>"+
			"</tr>"+
		"</table>";
	
	$('#contenido').html(html);
}
/* Exercise 7 */


/* Exercise 8 */
function cambiarDivL3Ex8(idQst)
{	
	if (idQst == 1)
	{	
		jpg = "img_L3_exe_8a";
		imgTit = "img_L3_exer8_jose";
		next = 2;
		
		tblPts = "<table width=\"20\" border=\"0\">"+
			  "<tr>"+
				"<td width=\"12\"><img src=\"../img/12.punto_verde.png\" width=\"12\" height=\"16\" /></td>"+
				"<td width=\"10\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
			  "</tr>"+
			"</table>";
	}
	else if (idQst == 2)
	{
		jpg = "img_L3_exe_8b";
		imgTit = "img_L3_exer8_charle";
		next = 1;
		
		tblPts = "<table width=\"20\" border=\"0\">"+
			  "<tr>"+
				"<td width=\"12\"><img src=\"../img/12.punto_avano.png\" width=\"12\" height=\"16\" /></td>"+
				"<td width=\"10\"><img src=\"../img/12.punto_verde.png\" width=\"12\" height=\"16\" /></td>"+
			  "</tr>"+
			"</table>";
	}
	html = "<table align=\"center\" width=\"772\" border=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"349\" height=\"62\" align=\"left\" valign=\"top\"><img src=\"../img/titulos/L3/img_L3_exer_8.png\" width=\"349\" height=\"113\" /></td>"+
			"<td width=\"123\" align=\"center\" valign=\"bottom\"><img src=\"../img/"+imgTit+".png\" width=\"143\" height=\"21\" /></td>"+
			"<td width=\"294\" align=\"left\" valign=\"bottom\">"+tblPts+"</td>"+
			"</tr>"+
		  "</table>"+
			"<table align=\"center\" width=\"772\" border=\"0\" cellspacing=\"0\">"+
		  "<tr>"+
			"<td width=\"50\" height=\"321\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"cambiarDivL3Ex8("+next+")\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image13','','../img/11.izq2.png',1)\"><img src=\"../img/11.izq.png\" name=\"Image13\" width=\"50\" height=\"55\" border=\"0\" id=\"Image13\" /></a></td>"+
			"<td width=\"679\" align=\"center\" valign=\"middle\"><img src=\"../img/"+jpg+".png\" width=\"653\" height=\"325\" /></td>"+
			"<td width=\"37\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"cambiarDivL3Ex8("+next+")\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image14','','../img/11.der2.png',1)\"><img src=\"../img/11.der.png\" name=\"Image14\" width=\"50\" height=\"55\" border=\"0\" id=\"Image14\" /></a></td>"+
			"</tr>"+
		"</table>";
	
	$('#contenido').html(html);
}

function mostrarAnsL3Ex8(idQst, idAns)
{	
	if(idQst == 1)
	{
		if(idAns == 'J'){
			ipt = "iptAns1J";
			ipt2 = "iptAns1C";
			div = "divAns1J";
			div2 = "divAns1C";
		}
		else{
			ipt = "iptAns1C";
			ipt2 = "iptAns1J";
			div = "divAns1C";
			div2 = "divAns1J";
		}
	}
	else if(idQst == 2)
	{
		if(idAns == 'J'){
			ipt = "iptAns2J";
			ipt2 = "iptAns2C";
			div = "divAns2J";
			div2 = "divAns2C";
		}
		else{
			ipt = "iptAns2C";
			ipt2 = "iptAns2J";
			div = "divAns2C";
			div2 = "divAns2J";
		}
	}
	else if(idQst == 3)
	{
		if(idAns == 'J'){
			ipt = "iptAns3J";
			ipt2 = "iptAns3C";
			div = "divAns3J";
			div2 = "divAns3C";
		}
		else{
			ipt = "iptAns3C";
			ipt2 = "iptAns3J";
			div = "divAns3C";
			div2 = "divAns3J";
		}
	}
	else if(idQst == 4)
	{
		if(idAns == 'J'){
			ipt = "iptAns4J";
			ipt2 = "iptAns4C";
			div = "divAns4J";
			div2 = "divAns4C";
		}
		else{
			ipt = "iptAns4C";
			ipt2 = "iptAns4J";
			div = "divAns4C";
			div2 = "divAns4J";
		}
	}
	else if(idQst == 5)
	{
		if(idAns == 'J'){
			ipt = "iptAns5J";
			ipt2 = "iptAns5C";
			div = "divAns5J";
			div2 = "divAns5C";
		}
		else{
			ipt = "iptAns5C";
			ipt2 = "iptAns5J";
			div = "divAns5C";
			div2 = "divAns5J";
		}
	}
	else if(idQst == 6)
	{
		if(idAns == 'J'){
			ipt = "iptAns6J";
			ipt2 = "iptAns6C";
			div = "divAns6J";
			div2 = "divAns6C";
		}
		else{
			ipt = "iptAns6C";
			ipt2 = "iptAns6J";
			div = "divAns6C";
			div2 = "divAns6J";
		}
	}
	else if(idQst == 7)
	{
		if(idAns == 'J'){
			ipt = "iptAns7J";
			ipt2 = "iptAns7C";
			div = "divAns7J";
			div2 = "divAns7C";
		}
		else{
			ipt = "iptAns7C";
			ipt2 = "iptAns7J";
			div = "divAns7C";
			div2 = "divAns7J";
		}
	}
	
	html = "<img src=\"../img/good_p.png\" width=\"23\" height=\"23\" />"+			
			"<input type=\"hidden\" id=\""+ipt+"\" value=1 />";
	$('#'+div).html(html);
	cleanAnsL3E8(div2, ipt2);
}

function cleanAnsL3E8(div, ipt)
{
	html = "&nbsp;"+
			"<input type=\"hidden\" id=\""+ipt+"\" value=0 />";
	$('#'+div).html(html);
}

function verificarL3E8(idBtn)
{
	vez = $("#vez").val();
	img = "";
	
	varscore = $("#inptscore").attr("value");
	
	doLMSSetValue("cmi.core.score.min", 0);
	doLMSSetValue("cmi.core.score.max", 100);
	
	ans_1J = $("#iptAns1J").val();
	ans_1C = $("#iptAns1C").val();
	
	ans_2J = $("#iptAns2J").val();
	ans_2C = $("#iptAns2C").val();
	
	ans_3J = $("#iptAns3J").val();
	ans_3C = $("#iptAns3C").val();
	
	ans_4J = $("#iptAns4J").val();
	ans_4C = $("#iptAns4C").val();
	
	ans_5J = $("#iptAns5J").val();
	ans_5C = $("#iptAns5C").val();
	
	ans_6J = $("#iptAns6J").val();
	ans_6C = $("#iptAns6C").val();
	
	ans_7J = $("#iptAns7J").val();
	ans_7C = $("#iptAns7C").val();
	
	vald = parseInt(ans_1J) + parseInt(ans_1C) + parseInt(ans_2J) + parseInt(ans_2C) + parseInt(ans_3J) + parseInt(ans_3C) + parseInt(ans_4J) + parseInt(ans_4C);
	vald = vald + parseInt(ans_5J) + parseInt(ans_5C) + parseInt(ans_6J) + parseInt(ans_6C) + parseInt(ans_7J) + parseInt(ans_7C);
	
	if(vald == 0 && idBtn != 3)
		alert("You must select the answers.");
	else
	{
		if(idBtn == 1){
			if(ans_1J == 1 && ans_2C == 1 && ans_3C == 1 && ans_4C == 1 && ans_5J == 1 && ans_6J == 1 && ans_7C == 1){
				img = "good";
				varscore = parseFloat(varscore) + 100;
			}
			else
				img = "good_No";
		}
		else
		{
			varscore = 0;
			if(idBtn == 3)
			{
				html = "<table align=\"center\" width=\"510\" border=\"0\" cellspacing=\"0\">"+
					  "<tr>"+
						"<td width=\"421\" height=\"28\" align=\"right\" valign=\"middle\" class=\"texto_1\"><img src=\"../img/img_jose.png\" width=\"74\" height=\"19\" /></td>"+
						"<td width=\"85\" align=\"left\" class=\"texto_2\"><img src=\"../img/IMG_CHARLES.png\" width=\"74\" height=\"19\" /></td>"+
						"</tr>"+
					"</table>"+
					"<table align=\"center\" width=\"462\" border=\"0\" cellspacing=\"0\">"+
					  "<tr>"+
						"<td width=\"32\" height=\"39\" align=\"left\" valign=\"middle\" class=\"texto_2\"><strong>1.</strong></td>"+
						"<td width=\"317\" align=\"left\" class=\"texto_2\">He lives in an apartment with an aunt</td>"+
						"<td background=\"../img/bg_chek2.png\" width=\"31\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL3Ex8(1, 'J')\">"+
							"<div id=\"divAns1J\"><img src=\"../img/good_p.png\" width=\"23\" height=\"23\" /><input type=\"hidden\" id=\"iptAns1J\" value=1 /></div>"+
						"</td>"+
						"<td width=\"40\" align=\"center\" valign=\"middle\" class=\"texto_1\">&nbsp;</td>"+
						"<td width=\"32\" align=\"center\" valign=\"middle\" background=\"../img/bg_chek2.png\" onclick=\"mostrarAnsL3Ex8(1, 'C')\">"+
							"<div id=\"divAns1C\">&nbsp;<input type=\"hidden\" id=\"iptAns1C\" value=0 /></div>"+
						"</td>"+
					  "</tr>"+
					"</table>"+
					"<table align=\"center\" width=\"462\" border=\"0\" cellspacing=\"0\">"+
					  "<tr>"+
						"<td width=\"32\" height=\"39\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong>2.</strong></td>"+
						"<td width=\"317\" align=\"left\" class=\"texto_1\">He has a new job</td>"+
						"<td background=\"../img/bg_chek2.png\" width=\"31\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL3Ex8(2, 'J')\">"+
							"<div id=\"divAns2J\">&nbsp;<!--img src=\"../img/good_p.png\" width=\"23\" height=\"23\" /--><input type=\"hidden\" id=\"iptAns2J\" value=0 /></div>"+
						"</td>"+
						"<td width=\"40\" align=\"center\" valign=\"middle\" class=\"texto_1\">&nbsp;</td>"+
						"<td width=\"32\" align=\"center\" valign=\"middle\" background=\"../img/bg_chek2.png\" onclick=\"mostrarAnsL3Ex8(2, 'C')\">"+
							"<div id=\"divAns2C\"><img src=\"../img/good_p.png\" width=\"23\" height=\"23\" /><input type=\"hidden\" id=\"iptAns2C\" value=1 /></div>"+
						"</td>"+
					  "</tr>"+
					"</table>"+
					"<table align=\"center\" width=\"462\" border=\"0\" cellspacing=\"0\">"+
					  "<tr>"+
						"<td width=\"32\" height=\"39\" align=\"left\" valign=\"middle\" class=\"texto_2\"><strong>3.</strong></td>"+
						"<td width=\"317\" align=\"left\" class=\"texto_2\">He lives with his girlfriend.</td>"+
						"<td background=\"../img/bg_chek2.png\" width=\"31\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL3Ex8(3, 'J')\">"+
							"<div id=\"divAns3J\">&nbsp;<input type=\"hidden\" id=\"iptAns3J\" value=0 /></div>"+
						"</td>"+
						"<td width=\"40\" align=\"center\" valign=\"middle\" class=\"texto_1\">&nbsp;</td>"+
						"<td width=\"32\" align=\"center\" valign=\"middle\" background=\"../img/bg_chek2.png\" onclick=\"mostrarAnsL3Ex8(3, 'C')\">"+
							"<div id=\"divAns3C\"><img src=\"../img/good_p.png\" width=\"23\" height=\"23\" /><input type=\"hidden\" id=\"iptAns3C\" value=1 /></div>"+
						"</td>"+
					  "</tr>"+
					"</table>"+
					"<table align=\"center\" width=\"462\" border=\"0\" cellspacing=\"0\">"+
					  "<tr>"+
						"<td width=\"32\" height=\"39\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong>4.</strong></td>"+
						"<td width=\"317\" align=\"left\" class=\"texto_1\">He has to work late.</td>"+
						"<td background=\"../img/bg_chek2.png\" width=\"31\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL3Ex8(4, 'J')\">"+
							"<div id=\"divAns4J\">&nbsp;<!--img src=\"../img/good_p.png\" width=\"23\" height=\"23\" /--><input type=\"hidden\" id=\"iptAns4J\" value=0 /></div>"+
						"</td>"+
						"<td width=\"40\" align=\"center\" valign=\"middle\" class=\"texto_1\">&nbsp;</td>"+
						"<td width=\"32\" align=\"center\" valign=\"middle\" background=\"../img/bg_chek2.png\" onclick=\"mostrarAnsL3Ex8(4, 'C')\">"+
							"<div id=\"divAns4C\"><img src=\"../img/good_p.png\" width=\"23\" height=\"23\" /><input type=\"hidden\" id=\"iptAns4C\" value=1 /></div>"+
						"</td>"+
					  "</tr>"+
					"</table>"+
					"<table align=\"center\" width=\"462\" border=\"0\" cellspacing=\"0\">"+
					  "<tr>"+
						"<td width=\"32\" height=\"39\" align=\"left\" valign=\"middle\" class=\"texto_2\"><strong>5.</strong></td>"+
						"<td width=\"317\" align=\"left\" class=\"texto_2\">His classmate is from Australia.</td>"+
						"<td background=\"../img/bg_chek2.png\" width=\"31\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL3Ex8(5, 'J')\">"+
							"<div id=\"divAns5J\"><img src=\"../img/good_p.png\" width=\"23\" height=\"23\" /><input type=\"hidden\" id=\"iptAns5J\" value=1 /></div>"+
						"</td>"+
						"<td width=\"40\" align=\"center\" valign=\"middle\" class=\"texto_1\">&nbsp;</td>"+
						"<td width=\"32\" align=\"center\" valign=\"middle\" background=\"../img/bg_chek2.png\" onclick=\"mostrarAnsL3Ex8(5, 'C')\">"+
							"<div id=\"divAns5C\">&nbsp;<!--img src=\"../img/good_No_p.png\" width=\"23\" height=\"23\" /--><input type=\"hidden\" id=\"iptAns5C\" value=0 /></div>"+
						"</td>"+
					  "</tr>"+
					"</table>"+
					"<table align=\"center\" width=\"462\" border=\"0\" cellspacing=\"0\">"+
					  "<tr>"+
						"<td width=\"32\" height=\"39\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong>6.</strong></td>"+
						"<td width=\"317\" align=\"left\" class=\"texto_1\">He's studying French.</td>"+
						"<td background=\"../img/bg_chek2.png\" width=\"31\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL3Ex8(6, 'J')\">"+
							"<div id=\"divAns6J\"><img src=\"../img/good_p.png\" width=\"23\" height=\"23\" /><input type=\"hidden\" id=\"iptAns6J\" value=1 /></div>"+
						"</td>"+
						"<td width=\"40\" align=\"center\" valign=\"middle\" class=\"texto_1\">&nbsp;</td>"+
						"<td width=\"32\" align=\"center\" valign=\"middle\" background=\"../img/bg_chek2.png\" onclick=\"mostrarAnsL3Ex8(6, 'C')\">"+
							"<div id=\"divAns6C\">&nbsp;<!--img src=\"../img/good_No_p.png\" width=\"23\" height=\"23\" /--><input type=\"hidden\" id=\"iptAns6C\" value=0 /></div>"+
						"</td>"+
					  "</tr>"+
					"</table>"+
					"<table align=\"center\" width=\"462\" border=\"0\" cellspacing=\"0\">"+
					  "<tr>"+
						"<td width=\"32\" height=\"39\" align=\"left\" valign=\"middle\" class=\"texto_2\"><strong>7.</strong></td>"+
						"<td width=\"317\" align=\"left\" class=\"texto_2\">His boss is nice.</td>"+
						"<td background=\"../img/bg_chek2.png\" width=\"31\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL3Ex8(7, 'J')\">"+
							"<div id=\"divAns7J\">&nbsp;<!--img src=\"../img/good_p.png\" width=\"23\" height=\"23\" /--><input type=\"hidden\" id=\"iptAns7J\" value=0 /></div>"+
						"</td>"+
						"<td width=\"40\" align=\"center\" valign=\"middle\" class=\"texto_1\">&nbsp;</td>"+
						"<td width=\"32\" align=\"center\" valign=\"middle\" background=\"../img/bg_chek2.png\" onclick=\"mostrarAnsL3Ex8(7, 'C')\">"+
							"<div id=\"divAns7C\"><img src=\"../img/good_p.png\" width=\"23\" height=\"23\" /><input type=\"hidden\" id=\"iptAns7C\" value=1 /></div>"+
						"</td>"+
					  "</tr><input type=\"hidden\" id=\"vez\" value="+vez+" />"+
					"</table>";	
				actualizarBtnL3E8(idBtn);
			}	
			else if(idBtn == 2){
				if(vez >= 2)
					actualizarBtnL3E8(idBtn);
				vez = parseInt(vez) + 1;

				html = "<table align=\"center\" width=\"510\" border=\"0\" cellspacing=\"0\">"+
					  "<tr>"+
						"<td width=\"421\" height=\"28\" align=\"right\" valign=\"middle\" class=\"texto_1\"><img src=\"../img/img_jose.png\" width=\"74\" height=\"19\" /></td>"+
						"<td width=\"85\" align=\"left\" class=\"texto_2\"><img src=\"../img/IMG_CHARLES.png\" width=\"74\" height=\"19\" /></td>"+
						"</tr>"+
					"</table>"+
					"<table align=\"center\" width=\"462\" border=\"0\" cellspacing=\"0\">"+
					  "<tr>"+
						"<td width=\"32\" height=\"39\" align=\"left\" valign=\"middle\" class=\"texto_2\"><strong>1.</strong></td>"+
						"<td width=\"317\" align=\"left\" class=\"texto_2\">He lives in an apartment with an aunt</td>"+
						"<td background=\"../img/bg_chek2.png\" width=\"31\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL3Ex8(1, 'J')\">"+
							"<div id=\"divAns1J\">&nbsp;<input type=\"hidden\" id=\"iptAns1J\" value=0 /></div>"+
						"</td>"+
						"<td width=\"40\" align=\"center\" valign=\"middle\" class=\"texto_1\">&nbsp;</td>"+
						"<td width=\"32\" align=\"center\" valign=\"middle\" background=\"../img/bg_chek2.png\" onclick=\"mostrarAnsL3Ex8(1, 'C')\">"+
							"<div id=\"divAns1C\">&nbsp;<!--img src=\"../img/good_No_p.png\" width=\"23\" height=\"23\" /--><input type=\"hidden\" id=\"iptAns1C\" value=0 /></div>"+
						"</td>"+
					  "</tr>"+
					"</table>"+
					"<table align=\"center\" width=\"462\" border=\"0\" cellspacing=\"0\">"+
					  "<tr>"+
						"<td width=\"32\" height=\"39\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong>2.</strong></td>"+
						"<td width=\"317\" align=\"left\" class=\"texto_1\">He has a new job</td>"+
						"<td background=\"../img/bg_chek2.png\" width=\"31\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL3Ex8(2, 'J')\">"+
							"<div id=\"divAns2J\">&nbsp;<!--img src=\"../img/good_p.png\" width=\"23\" height=\"23\" /--><input type=\"hidden\" id=\"iptAns2J\" value=0 /></div>"+
						"</td>"+
						"<td width=\"40\" align=\"center\" valign=\"middle\" class=\"texto_1\">&nbsp;</td>"+
						"<td width=\"32\" align=\"center\" valign=\"middle\" background=\"../img/bg_chek2.png\" onclick=\"mostrarAnsL3Ex8(2, 'C')\">"+
							"<div id=\"divAns2C\">&nbsp;<!--img src=\"../img/good_No_p.png\" width=\"23\" height=\"23\" /--><input type=\"hidden\" id=\"iptAns2C\" value=0 /></div>"+
						"</td>"+
					  "</tr>"+
					"</table>"+
					"<table align=\"center\" width=\"462\" border=\"0\" cellspacing=\"0\">"+
					  "<tr>"+
						"<td width=\"32\" height=\"39\" align=\"left\" valign=\"middle\" class=\"texto_2\"><strong>3.</strong></td>"+
						"<td width=\"317\" align=\"left\" class=\"texto_2\">He lives with his girlfriend.</td>"+
						"<td background=\"../img/bg_chek2.png\" width=\"31\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL3Ex8(3, 'J')\">"+
							"<div id=\"divAns3J\">&nbsp;<!--img src=\"../img/good_p.png\" width=\"23\" height=\"23\" /--><input type=\"hidden\" id=\"iptAns3J\" value=0 /></div>"+
						"</td>"+
						"<td width=\"40\" align=\"center\" valign=\"middle\" class=\"texto_1\">&nbsp;</td>"+
						"<td width=\"32\" align=\"center\" valign=\"middle\" background=\"../img/bg_chek2.png\" onclick=\"mostrarAnsL3Ex8(3, 'C')\">"+
							"<div id=\"divAns3C\">&nbsp;<!--img src=\"../img/good_No_p.png\" width=\"23\" height=\"23\" /--><input type=\"hidden\" id=\"iptAns3C\" value=0 /></div>"+
						"</td>"+
					  "</tr>"+
					"</table>"+
					"<table align=\"center\" width=\"462\" border=\"0\" cellspacing=\"0\">"+
					  "<tr>"+
						"<td width=\"32\" height=\"39\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong>4.</strong></td>"+
						"<td width=\"317\" align=\"left\" class=\"texto_1\">He has to work late.</td>"+
						"<td background=\"../img/bg_chek2.png\" width=\"31\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL3Ex8(4, 'J')\">"+
							"<div id=\"divAns4J\">&nbsp;<!--img src=\"../img/good_p.png\" width=\"23\" height=\"23\" /--><input type=\"hidden\" id=\"iptAns4J\" value=0 /></div>"+
						"</td>"+
						"<td width=\"40\" align=\"center\" valign=\"middle\" class=\"texto_1\">&nbsp;</td>"+
						"<td width=\"32\" align=\"center\" valign=\"middle\" background=\"../img/bg_chek2.png\" onclick=\"mostrarAnsL3Ex8(4, 'C')\">"+
							"<div id=\"divAns4C\">&nbsp;<!--img src=\"../img/good_No_p.png\" width=\"23\" height=\"23\" /--><input type=\"hidden\" id=\"iptAns4C\" value=0 /></div>"+
						"</td>"+
					  "</tr>"+
					"</table>"+
					"<table align=\"center\" width=\"462\" border=\"0\" cellspacing=\"0\">"+
					  "<tr>"+
						"<td width=\"32\" height=\"39\" align=\"left\" valign=\"middle\" class=\"texto_2\"><strong>5.</strong></td>"+
						"<td width=\"317\" align=\"left\" class=\"texto_2\">His classmate is from Australia.</td>"+
						"<td background=\"../img/bg_chek2.png\" width=\"31\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL3Ex8(5, 'J')\">"+
							"<div id=\"divAns5J\">&nbsp;<!--img src=\"../img/good_p.png\" width=\"23\" height=\"23\" /--><input type=\"hidden\" id=\"iptAns5J\" value=0 /></div>"+
						"</td>"+
						"<td width=\"40\" align=\"center\" valign=\"middle\" class=\"texto_1\">&nbsp;</td>"+
						"<td width=\"32\" align=\"center\" valign=\"middle\" background=\"../img/bg_chek2.png\" onclick=\"mostrarAnsL3Ex8(5, 'C')\">"+
							"<div id=\"divAns5C\">&nbsp;<!--img src=\"../img/good_No_p.png\" width=\"23\" height=\"23\" /--><input type=\"hidden\" id=\"iptAns5C\" value=0 /></div>"+
						"</td>"+
					  "</tr>"+
					"</table>"+
					"<table align=\"center\" width=\"462\" border=\"0\" cellspacing=\"0\">"+
					  "<tr>"+
						"<td width=\"32\" height=\"39\" align=\"left\" valign=\"middle\" class=\"texto_1\"><strong>6.</strong></td>"+
						"<td width=\"317\" align=\"left\" class=\"texto_1\">He's studying French.</td>"+
						"<td background=\"../img/bg_chek2.png\" width=\"31\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL3Ex8(6, 'J')\">"+
							"<div id=\"divAns6J\">&nbsp;<!--img src=\"../img/good_p.png\" width=\"23\" height=\"23\" /--><input type=\"hidden\" id=\"iptAns6J\" value=0 /></div>"+
						"</td>"+
						"<td width=\"40\" align=\"center\" valign=\"middle\" class=\"texto_1\">&nbsp;</td>"+
						"<td width=\"32\" align=\"center\" valign=\"middle\" background=\"../img/bg_chek2.png\" onclick=\"mostrarAnsL3Ex8(6, 'C')\">"+
							"<div id=\"divAns6C\">&nbsp;<!--img src=\"../img/good_No_p.png\" width=\"23\" height=\"23\" /--><input type=\"hidden\" id=\"iptAns6C\" value=0 /></div>"+
						"</td>"+
					  "</tr>"+
					"</table>"+
					"<table align=\"center\" width=\"462\" border=\"0\" cellspacing=\"0\">"+
					  "<tr>"+
						"<td width=\"32\" height=\"39\" align=\"left\" valign=\"middle\" class=\"texto_2\"><strong>7.</strong></td>"+
						"<td width=\"317\" align=\"left\" class=\"texto_2\">His boss is nice.</td>"+
						"<td background=\"../img/bg_chek2.png\" width=\"31\" align=\"center\" valign=\"middle\" onclick=\"mostrarAnsL3Ex8(7, 'J')\">"+
							"<div id=\"divAns7J\">&nbsp;<!--img src=\"../img/good_p.png\" width=\"23\" height=\"23\" /--><input type=\"hidden\" id=\"iptAns7J\" value=0 /></div>"+
						"</td>"+
						"<td width=\"40\" align=\"center\" valign=\"middle\" class=\"texto_1\">&nbsp;</td>"+
						"<td width=\"32\" align=\"center\" valign=\"middle\" background=\"../img/bg_chek2.png\" onclick=\"mostrarAnsL3Ex8(7, 'C')\">"+
							"<div id=\"divAns7C\">&nbsp;<!--img src=\"../img/good_No_p.png\" width=\"23\" height=\"23\" /--><input type=\"hidden\" id=\"iptAns7C\" value=0 /></div>"+
						"</td>"+
					  "</tr><input type=\"hidden\" id=\"vez\" value="+vez+" />"+
					"</table>";	
			}
			$('#divTblE8').html(html);
		}
		
		errorTxt3 = doLMSSetValue("cmi.core.score.raw", varscore);
		
		if(varscore >= "80"){
			errorTxt2 = doLMSSetValue("cmi.core.lesson_status", "passed");
		}
		else{
			errorTxt2 = doLMSSetValue("cmi.core.lesson_status", "failed");
		}
		doLMSCommit();
		
		actualizardivCalL3E8(img, varscore);
	}
}

function actualizarBtnL3E8(idBtn)
{
	if(idBtn == 3)
		btn = "<table width=\"117\" border=\"0\" cellspacing=\"0\">"+
            "<tr>"+
              "<td width=\"35\" height=\"31\" align=\"center\" valign=\"middle\"><img src=\"../img/8.btn_chulito_desab.png\" name=\"Image19\" width=\"25\" height=\"25\" border=\"0\" id=\"Image19\" /></td>"+
              "<td width=\"40\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL3E8(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image20','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image20\" width=\"25\" height=\"25\" border=\"0\" id=\"Image20\" /></a></td>"+
              "<td width=\"36\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL3E8(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image21','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image21\" width=\"29\" height=\"25\" border=\"0\" id=\"Image21\" /></a></td>"+
            "</tr>"+
          "</table>";
	else
		btn = "<table width=\"117\" border=\"0\" cellspacing=\"0\">"+
            "<tr>"+
              "<td width=\"35\" height=\"31\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL3E8(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image19','','../img/8.btn_chulito2.png',1)\"><img src=\"../img/8.btn_chulito.png\" name=\"Image19\" width=\"25\" height=\"25\" border=\"0\" id=\"Image19\" /></a></td>"+
              "<td width=\"40\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL3E8(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image20','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image20\" width=\"25\" height=\"25\" border=\"0\" id=\"Image20\" /></a></td>"+
              "<td width=\"36\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL3E8(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image21','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image21\" width=\"29\" height=\"25\" border=\"0\" id=\"Image21\" /></a></td>"+
            "</tr>"+
          "</table>";
			
	$('#divBtn').html(btn);
}

function actualizardivCalL3E8(img, iptScore)
{
	//alert(idBtn);
	if(img != "")
		html = "<img src=\"../img/"+img+".png\" width=\"30\" height=\"30\" />"+
				"<input type=\"hidden\" id=\"inptscore\" name=\"inptscore\" value="+iptScore+" />";
	else		
		html = "&nbsp;<input type=\"hidden\" id=\"inptscore\" name=\"inptscore\" value="+iptScore+" />";
	
	$('#divCalL3E8').html(html);
}

/* Exercise 8 */


/* Quiz 1 */
function verificarL3Q1(idBtn)
{
	ansL3Q1A = $("#ansL3Q1A").val();
	ansL3Q1B = $("#ansL3Q1B").val();
	ansL3Q1C = $("#ansL3Q1C").val();
	ansL3Q1D = $("#ansL3Q1D").val();
	ansL3Q1E = $("#ansL3Q1E").val();
	ansL3Q1F = $("#ansL3Q1F").val();
	
	vez = $("#vez").val();
	
	varscore = $("#inptscore").attr("value");
	
	doLMSSetValue("cmi.core.score.min", 0);
	doLMSSetValue("cmi.core.score.max", 100);
	
	img = "";
	
	if(idBtn!= 3 && ansL3Q1A == "" && ansL3Q1B == "" && ansL3Q1C == "" && ansL3Q1D == "" && ansL3Q1E == "" && ansL3Q1F == "")
		alert("You must write the answers.");
	else{
		if(idBtn == 1)
		{
			if(ansL3Q1A == "What languages do you speak" && ansL3Q1B == "What do you do in your new job" && ansL3Q1C == "Where do your friends work")
				if(ansL3Q1D == "What part of Australia are you from" && ansL3Q1E == "Where do you go to school" && ansL3Q1F == "What is new with your sister"){
					img = "good";
					varscore = parseFloat(varscore) + 100;
				}
				else 
					img = "good_No";
			else 
				img = "good_No";
		}
		else{
			varscore = 0;
			if(idBtn == 3)
			{
				valueA = "What languages do you speak";
				valueB = "What do you do in your new job";
				valueC = "Where do your friends work";
				valueD = "What part of Australia are you from";
				valueE = "Where do you go to school";
				valueF = "What is new with your sister";
				actualizarBtnL3Q1(idBtn);
			}	
			else if(idBtn == 2){
				valueA = "";
				valueB = "";
				valueC = "";
				valueD = "";
				valueE = "";
				valueF = "";
				if(vez >= 2)
					actualizarBtnL3Q1(idBtn);
				vez = parseInt(vez) + 1;
			}
				
			html = "<table align=\"center\" width=\"722\" border=\"0\">"+
			  "<tr>"+
				"<td width=\"364\" height=\"256\" align=\"left\" valign=\"top\"><table align=\"center\" width=\"310\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"15\" height=\"25\" align=\"left\" valign=\"bottom\"><strong class=\"texto_3\">1.</strong></td>"+
					"<td width=\"49\" align=\"center\" valign=\"bottom\" class=\"texto_1\">Languages </td>"+
					"<td width=\"7\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
					"<td width=\"41\" align=\"center\" valign=\"bottom\" class=\"texto_1\">you </td>"+
					"<td width=\"7\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
					"<td width=\"37\" align=\"center\" valign=\"bottom\" class=\"texto_1\">  what</td>"+
					"<td width=\"7\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
					"<td width=\"27\" align=\"center\" valign=\"bottom\" class=\"texto_1\"> do</td>"+
					"<td width=\"7\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
					"<td width=\"26\" align=\"center\" valign=\"bottom\" class=\"texto_1\"> speak. </td>"+
					"<td align=\"center\" valign=\"bottom\" class=\"texto_2\">&nbsp;</td>"+
					"</tr>"+
				"</table>"+
				  "<table align=\"center\" width=\"322\" border=\"0\" cellspacing=\"0\">"+
					"<tr>"+
					"<td width=\"23\" height=\"25\" align=\"left\" valign=\"bottom\">&nbsp;</td>"+
					"<td width=\"290\" align=\"center\" valign=\"bottom\" class=\"texto_1\">"+
					  "<input name=\"ansL3Q1A\" type=\"text\" class=\"raya_bg_cienPorcien\" id=\"ansL3Q1A\" value=\""+valueA+"\" />"+
					"</td>"+
					"<td width=\"8\" align=\"left\" valign=\"bottom\" class=\"texto_1\"><strong>?</strong></td>"+
					"</tr>"+
			  "</table>"+
			  "<table align=\"center\" width=\"310\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"15\" height=\"72\" align=\"left\" valign=\"bottom\"><strong class=\"texto_3\">2.</strong></td>"+
					"<td width=\"23\" align=\"center\" valign=\"bottom\" class=\"texto_2\">do </td>"+
					"<td width=\"8\" align=\"center\" valign=\"bottom\" class=\"texto_1\">/</td>"+
					"<td width=\"15\" align=\"center\" valign=\"bottom\" class=\"texto_2\">in</td>"+
					"<td width=\"9\" align=\"center\" valign=\"bottom\" class=\"texto_1\">/</td>"+
					"<td width=\"55\" align=\"center\" valign=\"bottom\" class=\"texto_2\"> new do</td>"+
					"<td width=\"8\" align=\"center\" valign=\"bottom\" class=\"texto_1\">/</td>"+
					"<td width=\"32\" align=\"center\" valign=\"bottom\" class=\"texto_2\"> your</td>"+
					"<td width=\"9\" align=\"center\" valign=\"bottom\" class=\"texto_1\">/</td>"+
					"<td width=\"40\" align=\"center\" valign=\"bottom\" class=\"texto_2\">what</td>"+
					"<td width=\"6\" align=\"center\" valign=\"bottom\" class=\"texto_1\">/</td>"+
					"<td width=\"26\" align=\"center\" valign=\"bottom\" class=\"texto_2\">you</td>"+
					"<td width=\"7\" align=\"center\" valign=\"bottom\" class=\"texto_1\">/</td>"+
					"<td width=\"29\" align=\"center\" valign=\"bottom\" class=\"texto_2\">job</td>"+
				  "</tr>"+
				"</table>"+
				"<table align=\"center\" width=\"322\" border=\"0\" cellspacing=\"0\">"+
					"<tr>"+
					"<td width=\"23\" height=\"25\" align=\"left\" valign=\"bottom\">&nbsp;</td>"+
					"<td width=\"290\" align=\"center\" valign=\"bottom\" class=\"texto_1\">"+
					  "<input name=\"ansL3Q1B\" type=\"text\" class=\"raya_bg_cienPorcien2\" id=\"ansL3Q1B\" value=\""+valueB+"\" />"+
					"</td>"+
					"<td width=\"8\" align=\"left\" valign=\"bottom\" class=\"texto_1\"><strong>?</strong></td>"+
					"</tr>"+
			  "</table>"+
			  "<table align=\"center\" width=\"309\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"15\" height=\"72\" align=\"left\" valign=\"bottom\"><strong class=\"texto_3\">3.</strong></td>"+
					"<td width=\"39\" align=\"center\" valign=\"bottom\" class=\"texto_1\">Your </td>"+
					"<td width=\"6\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
					"<td width=\"54\" align=\"center\" valign=\"bottom\" class=\"texto_1\">where </td>"+
					"<td width=\"8\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
					"<td width=\"18\" align=\"center\" valign=\"bottom\" class=\"texto_1\">  do</td>"+
					"<td width=\"7\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
					"<td width=\"40\" align=\"center\" valign=\"bottom\" class=\"texto_1\">  work </td>"+
					"<td width=\"6\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
					"<td width=\"48\" align=\"center\" valign=\"bottom\" class=\"texto_1\">friends</td>"+
					"<td width=\"6\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
					"<td width=\"40\" align=\"center\" valign=\"bottom\" class=\"texto_1\">job</td>"+
				  "</tr>"+
				"</table>"+
				"<table align=\"center\" width=\"322\" border=\"0\" cellspacing=\"0\">"+
					"<tr>"+
					"<td width=\"23\" height=\"25\" align=\"left\" valign=\"bottom\">&nbsp;</td>"+
					"<td width=\"290\" align=\"center\" valign=\"bottom\" class=\"texto_1\">"+
					  "<input name=\"ansL3Q1C\" type=\"text\" class=\"raya_bg_cienPorcien\" id=\"ansL3Q1C\" value=\""+valueC+"\" />"+
					"</td>"+
					"<td width=\"8\" align=\"left\" valign=\"bottom\" class=\"texto_1\"><strong>?</strong></td>"+
					"</tr>"+
			  "</table>"+
			  "</td>"+
				"<td width=\"1\" align=\"right\" class=\"bg_color1\"></td>"+
				"<td width=\"324\" align=\"center\" valign=\"top\"><table align=\"center\" width=\"327\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"15\" height=\"25\" align=\"left\" valign=\"bottom\"><strong class=\"texto_3\">4.</strong></td>"+
					"<td width=\"48\" align=\"center\" valign=\"bottom\" class=\"texto_1\">Part </td>"+
					"<td width=\"6\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
					"<td width=\"40\" align=\"center\" valign=\"bottom\" class=\"texto_1\">are </td>"+
					"<td width=\"6\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
					"<td width=\"36\" align=\"center\" valign=\"bottom\" class=\"texto_1\">  what</td>"+
					"<td width=\"6\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
					"<td width=\"62\" align=\"center\" valign=\"bottom\" class=\"texto_1\"> Australia</td>"+
					"<td width=\"6\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
					"<td width=\"34\" align=\"center\" valign=\"bottom\" class=\"texto_1\">from</td>"+
					"<td width=\"6\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
					"<td width=\"12\" align=\"center\" valign=\"bottom\" class=\"texto_1\">of</td>"+
					"<td width=\"8\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
					"<td width=\"16\" align=\"center\" valign=\"bottom\" class=\"texto_2\">you</td>"+
					"</tr>"+
				"</table>"+
				  "<table align=\"center\" width=\"322\" border=\"0\" cellspacing=\"0\">"+
					"<tr>"+
					"<td width=\"23\" height=\"25\" align=\"left\" valign=\"bottom\">&nbsp;</td>"+
					"<td width=\"290\" align=\"center\" valign=\"bottom\" class=\"texto_1\">"+
					  "<input name=\"ansL3Q1D\" type=\"text\" class=\"raya_bg_cienPorcien\" id=\"ansL3Q1D\" value=\""+valueD+"\" />"+
					"</td>"+
					"<td width=\"8\" align=\"left\" valign=\"bottom\" class=\"texto_1\"><strong>?</strong></td>"+
					"</tr>"+
			  "</table>"+
			  "<table align=\"center\" width=\"310\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"15\" height=\"72\" align=\"left\" valign=\"bottom\"><strong class=\"texto_3\">5.</strong></td>"+
					"<td width=\"23\" align=\"center\" valign=\"bottom\" class=\"texto_2\">School </td>"+
					"<td width=\"8\" align=\"center\" valign=\"bottom\" class=\"texto_1\">/</td>"+
					"<td width=\"15\" align=\"center\" valign=\"bottom\" class=\"texto_2\">go </td>"+
					"<td width=\"9\" align=\"center\" valign=\"bottom\" class=\"texto_1\">/</td>"+
					"<td width=\"55\" align=\"center\" valign=\"bottom\" class=\"texto_2\"> you</td>"+
					"<td width=\"8\" align=\"center\" valign=\"bottom\" class=\"texto_1\">/</td>"+
					"<td width=\"32\" align=\"center\" valign=\"bottom\" class=\"texto_2\"> where</td>"+
					"<td width=\"9\" align=\"center\" valign=\"bottom\" class=\"texto_1\">/</td>"+
					"<td width=\"40\" align=\"center\" valign=\"bottom\" class=\"texto_2\">to</td>"+
					"<td width=\"6\" align=\"center\" valign=\"bottom\" class=\"texto_1\">/</td>"+
					"<td width=\"26\" align=\"center\" valign=\"bottom\" class=\"texto_2\">do</td>"+
					"<td width=\"7\" align=\"center\" valign=\"bottom\" class=\"texto_1\">&nbsp;</td>"+
					"<td width=\"29\" align=\"center\" valign=\"bottom\" class=\"texto_2\">&nbsp;</td>"+
				  "</tr>"+
				"</table>"+
				"<table align=\"center\" width=\"322\" border=\"0\" cellspacing=\"0\">"+
					"<tr>"+
					"<td width=\"23\" height=\"25\" align=\"left\" valign=\"bottom\">&nbsp;</td>"+
					"<td width=\"290\" align=\"center\" valign=\"bottom\" class=\"texto_1\">"+
					  "<input name=\"ansL3Q1E\" type=\"text\" class=\"raya_bg_cienPorcien2\" id=\"ansL3Q1E\" value=\""+valueE+"\" />"+
					"</td>"+
					"<td width=\"8\" align=\"left\" valign=\"bottom\" class=\"texto_1\"><strong>?</strong></td>"+
					"</tr>"+
			  "</table><table align=\"center\" width=\"310\" border=\"0\" cellspacing=\"0\">"+
				  "<tr>"+
					"<td width=\"15\" height=\"72\" align=\"left\" valign=\"bottom\"><strong class=\"texto_3\">6.</strong></td>"+
					"<td width=\"39\" align=\"center\" valign=\"bottom\" class=\"texto_1\">Your </td>"+
					"<td width=\"6\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
					"<td width=\"34\" align=\"center\" valign=\"bottom\" class=\"texto_1\">what</td>"+
					"<td width=\"7\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
					"<td width=\"37\" align=\"center\" valign=\"bottom\" class=\"texto_1\"> new</td>"+
					"<td width=\"8\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
					"<td width=\"42\" align=\"center\" valign=\"bottom\" class=\"texto_1\"> sister </td>"+
					"<td width=\"8\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
					"<td width=\"19\" align=\"center\" valign=\"bottom\" class=\"texto_1\">is</td>"+
					"<td width=\"8\" align=\"center\" valign=\"bottom\" class=\"texto_2\">/</td>"+
					"<td width=\"34\" align=\"left\" valign=\"bottom\" class=\"texto_1\">with</td>"+
					"<td width=\"6\" align=\"center\" valign=\"bottom\" class=\"texto_1\">&nbsp;</td>"+
					"<td width=\"19\" align=\"center\" valign=\"bottom\" class=\"texto_2\">&nbsp;</td>"+
				  "</tr>"+
				"</table>"+
				"<table align=\"center\" width=\"322\" border=\"0\" cellspacing=\"0\">"+
					"<tr>"+
					"<td width=\"23\" height=\"25\" align=\"left\" valign=\"bottom\">&nbsp;</td>"+
					"<td width=\"290\" align=\"center\" valign=\"bottom\" class=\"texto_1\">"+
					  "<input name=\"ansL3Q1F\" type=\"text\" class=\"raya_bg_cienPorcien\" id=\"ansL3Q1F\" value=\""+valueF+"\" />"+
					"</td>"+
					"<td width=\"8\" align=\"left\" valign=\"bottom\" class=\"texto_1\"><strong>?</strong></td>"+
					"</tr>"+
			  "</table>"+
				  "&nbsp;</td>"+
			  "</tr>"+
			"</table><input type=\"hidden\" id=\"vez\" value="+vez+" />";

			$('#divL3Q1').html(html); 
		}
		
		errorTxt3 = doLMSSetValue("cmi.core.score.raw", varscore);
		
		if(varscore >= "80"){
			errorTxt2 = doLMSSetValue("cmi.core.lesson_status", "passed");
		}
		else{
			errorTxt2 = doLMSSetValue("cmi.core.lesson_status", "failed");
		}
		doLMSCommit();
		
		actualizardivCalL3Q1(img, varscore);
	}
}

function actualizarBtnL3Q1(idBtn)
{
	if(idBtn == 3)
		btn = "<table width=\"128\" border=\"0\" cellspacing=\"0\">"+
            "<tr>"+
              "<td width=\"40\" height=\"31\" align=\"center\" valign=\"middle\"><img src=\"../img/8.btn_chulito_desab.png\" name=\"Image19\" width=\"25\" height=\"25\" border=\"0\" id=\"Image19\" /></td>"+
              "<td width=\"45\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL3Q1(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image20','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image20\" width=\"25\" height=\"25\" border=\"0\" id=\"Image20\" /></a></td>"+
              "<td width=\"43\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL3Q1(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image21','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image21\" width=\"29\" height=\"25\" border=\"0\" id=\"Image21\" /></a></td>"+
            "</tr>"+
          "</table>";
	else
		btn = "<table width=\"128\" border=\"0\" cellspacing=\"0\">"+
            "<tr>"+
              "<td width=\"40\" height=\"31\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL3Q1(1)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image19','','../img/8.btn_chulito2.png',1)\"><img src=\"../img/8.btn_chulito.png\" name=\"Image19\" width=\"25\" height=\"25\" border=\"0\" id=\"Image19\" /></a></td>"+
              "<td width=\"45\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL3Q1(2)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image20','','../img/8.btn_refresh2.png',1)\"><img src=\"../img/8.btn_refresh.png\" name=\"Image20\" width=\"25\" height=\"25\" border=\"0\" id=\"Image20\" /></a></td>"+
              "<td width=\"43\" align=\"center\" valign=\"middle\"><a href=\"#\" onclick=\"verificarL3Q1(3)\" onmouseout=\"MM_swapImgRestore()\" onmouseover=\"MM_swapImage('Image21','','../img/8.btn_ojo2.png',1)\"><img src=\"../img/8.btn_ojo.png\" name=\"Image21\" width=\"29\" height=\"25\" border=\"0\" id=\"Image21\" /></a></td>"+
            "</tr>"+
          "</table>";
			
	$('#divBtn').html(btn);
}

function actualizardivCalL3Q1(img, iptScore)
{
	if(img != "")
		btn = "<img src=\"../img/"+img+".png\" width=\"30\" height=\"30\" />"+
				"<input type=\"hidden\" id=\"inptscore\" name=\"inptscore\" value="+iptScore+" />";
	else
		btn = "&nbsp;<input type=\"hidden\" id=\"inptscore\" name=\"inptscore\" value="+iptScore+" />";
	
	$('#divCalL3Q1').html(btn);
}
/* Quiz 1 */

