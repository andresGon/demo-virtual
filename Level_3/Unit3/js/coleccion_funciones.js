
/*------ NAVEGACION -------
  Datos de la unidad*/
var Listado_ejercicios=["index.html#",
						"index.html",
						"L1_goals.html",
						"L1_exe_1.html",
						"L1_exe_2.html",
						"L1_exer_3.html",
						"L1_vocabulary1_a.html",
						"L1_exer_4.html",
						"L1_exer_5.html",
						"L1_exer_6.html",
						"L1_grammar_1_a.html",
						"L1_exer_7.html",
						"L1_exer_8.html",
						"L1_exer_9.html",
						"L1_exe_10.html",
						"L1_exer_11.html",
						"L1_pronunciation.html",
						"L1_exer_12.html",
						"L1_exer_13.html",
						"L1_exer_14.html",
						"L1_listening.html",
						"L1_speaking.html",
						"L1_speaking_2.html",
						"L1_Writing_1.html",
						"L2_goals.html",
						"L2_exe_1.html",
						"L2_exer_2.html",
						"L2_exer_3.html",
						"L2_exer_4.html",
						"L2_exer_5.html",
						"L2_exer_6.html",
						"L2_exer_7.html",
						"L2_exer_8.html",
						"L2_exer_9.html",
						"L2_grammar1_a.html",
						"L2_exe_10.html",
						"L2_exer_11.html",
						"L2_grammar2_a.html",
						"L2_exer_12.html",
						"L2_exer_13.html",
						"L2_writing.html",
						"L2_speaking.html",
						"L2_speaking_b.html",
						"L3_goals.html",
						"L3_exer_1.html",
						"L3_exe_2.html",
						"L3_exer_3.html",
						"L3_vocabulary_1.html",
						"L3_exer_4.html",
						"L3_vocabulary_2.html",
						"L3_exer_5.html",
						"L3_exer_6.html",
						"L3_exer_7.html",
						"L3_exer_8.html",
						"L3_exer_9.html",
						"L3_exer_10.html",
						"L3_exer_11.html",
						"L3_exer_12.html",
						"L3_exer_13.html",
						"L3_exer_14.html",
						"L3_exer_15.html",
						"L3_exer_16.html"];

var Barra_ejercicios={

    "L1":["L1_exe_1.html*EXERCISE 1",
		  "L1_exe_2.html*EXERCISE 2",
		  "L1_exer_3.html*EXERCISE 3",
		  "L1_vocabulary1_a.html*VOCABULARY",
		  "L1_exer_4.html*EXERCISE 4",
		  "L1_exer_5.html*EXERCISE 5",
		  "L1_exer_6.html*EXERCISE 6",
		  "L1_grammar_1_a.html*GRAMMAR",
		  "L1_exer_7.html*EXERCISE 7",
		  "L1_exer_8.html*EXERCISE 8",
		  "L1_exer_9.html*EXERCISE 9",
		  "L1_exer_10.html*EXERCISE 10",
		  "L1_exer_11.html*EXERCISE 11",
		  "L1_pronunciation.html*PRONUN",
		  "L1_exer_12.html*EXERCISE 12",
		  "L1_exer_13.html*EXERCISE 13",
		  "L1_exer_14.html*EXERCISE 14",
		  "L1_listening.html*LISTEN",
		  "L1_speaking.html*SPEAKING 1",
		  "L1_speaking_2.html*SPEAKING 2",
		  "L1_Writing_1.html*WRITING"],

 	"L2":["L2_exe_1.html*EXERCISE 1",
		  "L2_exer_2.html*EXERCISE 2",
		  "L2_exer_3.html*EXERCISE 3",
		  "L2_exer_4.html*EXERCISE 4",
		  "L2_exer_5.html*EXERCISE 5",
		  "L2_exer_6.html*EXERCISE 6",
		  "L2_exer_7.html*EXERCISE 7",
		  "L2_exer_8.html*EXERCISE 8",
		  "L2_exer_9.html*EXERCISE 9",
		  "L2_grammar1_a.html*GRAMMAR",
		  "L2_exe_10.html*EXERCISE 10",
		  "L2_exer_11.html*EXERCISE 11",
		  "L2_grammar2_a.html*GRAMMAR 2",
		  "L2_exer_12.html*EXERCISE 12",
		  "L2_exer_13.html*EXERCISE 13",
		  "L2_writing.html*WRITING",
		  "L2_speaking.html*SPEAKING 1",
		  "L2_speaking_b.html*SPEAKING 2"],

 	"L3":["L3_exer_1.html*EXERCISES 1",
		  "L3_exe_2.html*EXERCISES 2",
		  "L3_exer_3.html*EXERCISES 3",
		  "L3_vocabulary_1.html*VOCAB 1",
		  "L3_exer_4.html*EXERCISES 4",
		  "L3_vocabulary_2.html*VOCAB 2",
		  "L3_exer_5.html*EXERCISES 5",
		  "L3_exer_6.html*EXERCISES 6",
		  "L3_exer_7.html*EXERCISES 7",
		  "L3_exer_8.html*EXERCISES 8",
		  "L3_exer_9.html*EXERCISES 9",
		  "L3_exer_10.html*EXERCISES 10",
		  "L3_exer_11.html*EXERCISES 11",
		  "L3_exer_12.html*EXERCISES 12",
		  "L3_exer_13.html*EXERCISES 13",
		  "L3_exer_14.html*EXERCISES 14",
		  "L3_exer_15.html*EXERCISES 15",
		  "L3_exer_16.html*EXERCISES 16"]

}

var Ids={//JSON paradeterminar los ids diferentes de sec_btn_booton
			"L1_objetives.html":"btn_start",
			"L1_goals.html":"boton div",
			"L2_goals.html":"boton div",
			"L3_goals.html":"boton div"
};

var html_nav_interna={

			4:["L1_exe_2.html",
			   "L1_exe_2_b.html",
			   "L1_exe_2_c.html"],
			5:["L1_exer_3.html",
				"L1_exer_3_b.html",
				"L1_exer_3_c.html"],
			6:["L1_vocabulary1_a.html",
			   "L1_vocabulary1_b.html",
			   "L1_vocabulary1_c.html",
			   "L1_vocabulary1_d.html",
			   "L1_vocabulary1_e.html",
			   "L1_vocabulary1_f.html"],
			8:["L1_exer_5.html",
			   "L1_exer_5_b.html",
			   "L1_exer_5_c.html",
			   "L1_exer_5_d.html",
			   "L1_exer_5_e.html",
			   "L1_exer_5_f.html"],
			16:["L1_pronunciation.html",
				"L1_pronunciation-b.html"],
			17:["L1_exer_12.html",
				"L1_exer_12_b.html",
				"L1_exer_12_c.html",
				"L1_exer_12_d.html",
				"L1_exer_12_e.html",
				"L1_exer_12_f.html",
				"L1_exer_12_g.html",
				"L1_exer_12_h.html"],
			18:["L1_exer_13.html",
				"L1_exer_13_b.html",
				"L1_exer_13_c.html",
				"L1_exer_13_d.html",
				"L1_exer_13_e.html",
				"L1_exer_13_f.html",
				"L1_exer_13_g.html",
				"L1_exer_13_h.html"],
			19:["L1_exer_14.html",
				"L1_exer_14_b.html",
				"L1_exer_14_c.html",
				"L1_exer_14_d.html",
				"L1_exer_14_e.html",
				"L1_exer_14_f.html",
				"L1_exer_14_g.html",
				"L1_exer_14_h.html"],
			23:["L1_Writing_1.html",
				"L1_Writing_1b.html"],
			25:["L2_exe_1.html",
				"L2_exe_1_b.html",
				"L2_exe_1_c.html"],
			26:["L2_exer_2.html",
				"L2_exer_2_b.html",
				"L2_exer_2_c.html"],
			27:["L2_exer_3.html",
				"L2_exer_3b.html",
				"L2_exer_3c.html",
				"L2_exer_3d.html",
				"L2_exer_3e.html"],
			38:["L2_exer_12.html",
				"L2_exer_12_b.html",
				"L2_exer_12_c.html",
				"L2_exer_12_d.html",
				"L2_exer_12_e.html",
				"L2_exer_12_f.html",
				"L2_exer_12_g.html",
				"L2_exer_12_h.html"],
			39:["L2_exer_13.html",
				"L2_exer_13_b.html",
				"L2_exer_13_c.html",
				"L2_exer_13_d.html",
				"L2_exer_13_e.html",
				"L2_exer_13_f.html",
				"L2_exer_13_g.html",
				"L2_exer_13_h.html"],
			50:["L3_exer_5.html",
				"L3_exer_5_b.html",
				"L3_exer_5_c.html",
				"L3_exer_5_d.html",
				"L3_exer_5_e.html",
				"L3_exer_5_f.html",
				"L3_exer_5_g.html",
				"L3_exer_5_h.html",
				"L3_exer_5_i.html",
				"L3_exer_5_j.html"],
			56:["L3_exer_11.html",
				"L3_exer_11_b.html",
				"L3_exer_11_c.html"],
			59:["L3_exer_14.html",
				"L3_exer_14_b.html"]

};

function extraerNombre () {

	/*Funcion para extraer el nombre.*/
	var localizacion=location.href;
	var secciones=localizacion.split("/");
	var archivo=secciones[secciones.length-1];
	archivo=archivo.split("#");
	archivo=archivo[0];
	//var index_archivo=Listado_ejercicios.indexOf(archivo);
	return archivo;
	
}

function construirNavegacionLateral (indice) {

	/*Funcion para cambiar de localizacion*/
	var objeto="",clase="";
	var izquierda=Listado_ejercicios[indice-1];
	var derecha=Listado_ejercicios[indice+1];
	objeto=Ids[Listado_ejercicios[indice]];
	//$("#depurar").html("depuracion: "+objeto)
	objeto=(objeto==undefined)?"sec_btn_booton p":objeto;

	$("#"+objeto).click(function(){

		location.href=derecha;

		if(objeto=="sec_btn_booton p"){

			clase=$(this).attr("class");
			if(clase=="btn_conv_prev")
				{location.href=izquierda;}

		}

	});
	
}

var inicio=0,finale=10,off,t;//Variables globales, para el menu de los ejercicios

function construirNavegacionMenu(indice) {

	/*Funcion para la navegacion del menu*/
	var delay=750;
	var partes=Listado_ejercicios[indice].split("_");
	var leccion=partes[0];
	if(leccion.indexOf("index.")!=-1)
		leccion="L1";

	var html_exer="<li onclick='cambiarNavegacionArriba("+indice+")' style='cursor: pointer'><img src='../img/flecha_2.png'/></li>";
	var ejercicios=Barra_ejercicios[leccion];
	for (var e=inicio,temp_html="";e<finale;e++)
		{

			temp_html=ejercicios[e].split("*");
			html_exer=html_exer+"<li ><a href="+temp_html[0]+">"+temp_html[1]+"</a></li>"
			
		}
	html_exer=html_exer+"<li onclick='cambiarNavegacionAbajo("+indice+")' style='cursor: pointer'><img src='../img/flecha_1.png'/></li>"
	//$("ul li#exercises ul li:nth-child("+ejercicios.length+") a").css("background","url(../img/flecha_1.png)")
	var html_nav="<ul>"+
			        	"<li><a href='index.html'>HOME</a></li>"+
			            "<li id='unit'><a href='#'>UNIT</a>"+
			            	"<ul>"+
			                	"<li><a href='#'>UNIT 1</a></li>"+
			           			// "<li><a href='../../Unit2/index.html'>UNIT 2</a></li>"+
			              //       "<li><a href='#'>UNIT 3</a></li>"+
			                    /*"<li><a href='../../Unit4/index.html'>UNIT 4</a></li>"+
			                    "<li><a href='../../Unit5/index.html'>UNIT 5</a></li>"+*/
			                "</ul>"+
			            "</li>"+
			            "<li id='lesson'><a href='#'>LESSON</a>"+
			            	"<ul>"+
			                	"<li><a href='L1_goals.html'>LESSON 1</a></li>"+
			           			"<li><a href='L2_goals.html'>LESSON 2</a></li>"+
			                    "<li><a href='L3_goals.html'>LESSON 3</a></li>"+
			                "</ul>"+
			            "</li>"+
			            "<li id='exercises'>"+
			            	"<a href='#'>EXERCISES</a>"+
			            	"<ul>"+html_exer+"</ul><div id=\"barra\"></div>"+
			            "</li>"+
			              /*"<li id='games'><a href='#'>GAMES</a>"+
			            	"<ul>"+
			                	"<li><a href='#'>GAME 1</a></li>"+
			           			"<li><a href='#'>GAME 2</a></li>"+
			                    "<li><a href='#'>GAME 3</a></li>"+
			                "</ul>"+
			            "</li>"+
			              "<li><a href='#''>HELP</a></li>"+*/
			     "</ul>";

	document.getElementsByTagName("nav")[0].innerHTML=html_nav;

	//$("#depurar").html("depuracion: "+(finale - inicio)/ejercicios.length)

	$("div#barra").css("height",(((finale - inicio)/ejercicios.length)*548)+"px");

	$("li#exercises ul").mouseover(function() {

		$("div#barra").css("display","block");
		off=$("div#barra").css("top");
		t=parseInt(off);

	})

	$("li#exercises ul").mouseout(function() {

		$("div#barra").css("display","none");

	})
	//$("nav").html(html_nav);

}
function cambiarNavegacionAbajo (indice) {

	var partes=Listado_ejercicios[indice].split("_");
	var leccion=partes[0];
	var ejercicios=Barra_ejercicios[leccion];
	if(finale<ejercicios.length)
		{
			inicio++,finale++;
			paso=50/548
			hscroll=parseInt($("div#barra").css("height"))
			
			t+= Math.round(hscroll*paso);
			$("div#barra").animate({top:t},250);


			for (var e=inicio,temp_html="",ht=2;e<finale;e++)
				{

					temp_html=ejercicios[e].split("*");
					//alert(temp_html[0])
					$("ul li#exercises ul li:nth-child("+ht+") a").attr("href",temp_html[0])
					$("ul li#exercises ul li:nth-child("+ht+") a").text(temp_html[1])
					ht++;
					
				}

		}

}
function cambiarNavegacionArriba (indice) {

	var partes=Listado_ejercicios[indice].split("_");
	var leccion=partes[0];
	var ejercicios=Barra_ejercicios[leccion];

	if(inicio>0)
		{
			inicio--,finale--;
			paso=50/548
			hscroll=parseInt($("div#barra").css("height"))
			
			t-= Math.round(hscroll*paso);
			$("div#barra").animate({top:t},250);

			//$("#depurar").html("depuracion: "+inicio+" "+finale)

			for (var e=inicio,temp_html="",ht=2;e<finale;e++)
				{

					temp_html=ejercicios[e].split("*");

					$("ul li#exercises ul li:nth-child("+ht+") a").attr("href",temp_html[0])
					$("ul li#exercises ul li:nth-child("+ht+") a").text(temp_html[1])
					ht++;
					
				}
		}

}

function botonTake (div) {

	$(div).mouseover(function() {

		$("div.btn_take").addClass("vuelta")
		$("div.btn_take2").addClass("vuelta")

	})
	$(div).mouseout(function() {

		$("div.btn_take").removeClass("vuelta")
		$("div.btn_take2").removeClass("vuelta")

	})

}
function navegacionInterna(indice,id,id_prev_next){

	var letras=["a","b","c","d","e","f","g","h","i","j"];
	var html_int="",html="";
	var ejercicio=extraerNombre();
	var ejercicios=html_nav_interna[indice].slice(0);
	var posicion=ejercicios.indexOf(ejercicio);
	//$("#depurar").html("depuracion: "+ejercicios+" "+ejercicio+" "+posicion)
	var temp=ejercicios[posicion].replace("#","");
	ejercicios[posicion]=temp+"#";
	var anterior=(posicion==0)?ejercicios.length-1:posicion-1
	var siguiente=(posicion==ejercicios.length-1)?0:posicion+1;

	for(var h=0;h<ejercicios.length;h++)
		{html_int=html_int+"<div id='btn_letra' onclick=\"cambioHref('"+ejercicios[h]+"')\">"+letras[h]+"</div>";}

	html_nav_peque="<p class=\"btn_conv_prev\" onclick=\"cambioHref('"+ejercicios[anterior]+"')\">< PREVIOUS </p>"+
   	   			   "<p class=\"btn_conv_next\" onclick=\"cambioHref('"+ejercicios[siguiente]+"')\">NEXT ></p>";

	$("#"+id).html(html_int);
	$("#"+id_prev_next).html(html_nav_peque);
	$("#"+id+" div:nth-child("+(posicion+1)+")").css("background","url(../img/1.bg_btn_a-z2.png)");

}
function cambioHref (archivo) {

	location.href=archivo;

}

function efectosFade(indice){
	/*Efectos con JQuery para el fade de los menus y over*/
	var id="",delay=450;

	$("ul li").mouseover(function(){
		/*Si el cursor ingresa a cualquier li se obtiene su id*/

		id=$(this).attr("id");
		clase_id="#"+id+" ul";
		$(clase_id).fadeIn(delay);
		delay=450;

		$(this).mouseout(function(){
			/*Si dentro del mouseover en el li, se sale de el se oculta la lista dentro el id*/

			$("ul #"+id+" ul").fadeOut(0);

			$("ul #"+id+" ul").mouseover(function (){
					/*Se anula el delay del fade si el cursor se mueve dentro de la lista*/
					delay=0;
		
			});

		});

	});

}

/*------- FUNCIONES DE LOS EJERCICIOS -------*/
function crearDepurador () {
	/*Funcion para crear el depurador*/
	var header=document.getElementsByTagName("header")[0];
	var div_depurardor=document.createElement("div");
	var id_dep=document.createAttribute("id");
	id_dep.value="depurar";
	div_depurardor.setAttributeNode(id_dep);
	header.appendChild(div_depurardor);

}

function reporducirAudio(lista_audios,clase_id) {
	/*Funcion para crear el boton de audio*/

	var audios=[];
	var onLoadAudio=function () {};

	for(var a=0;a<lista_audios.length;a++){
		audios.push(new Audio());
		audios[a].onload=onLoadAudio;
		audios[a].src="../audio/"+lista_audios[a];
	}

	$(clase_id).mousedown(function () {

		var boton=$(this).attr("boton");
		//alert(audios[boton].src)
		audios[boton].play();

	});

}
function concatAudio(lista_audios,clase_id) {

	var audios=[];
	var onLoadAudio=function () {};


	$(clase_id).mousedown(function () {
		
		for(var a=0;a<lista_audios.length;a++){

			audios.push(new Audio());
			audios[a].onload=onLoadAudio;
			audios[a].src="../Scripts/"+lista_audios[a];
			audios[a].play();
			//alert(audios[a].src)

		}
	})
}
function modificarSeccionHtml(id,n){

	  $("#"+id+" div").click(function () {

	    $("#"+id+" div").css("background","url(../img/1.bg_btn_a-z1.png)");
	    $(this).css("background","url(../img/1.bg_btn_a-z2.png)");
	    p=$(this).text().toUpperCase();
	    escribirCorreo(exer,p,"txt-amarillo_1_pdf",tipo,clase_id_texto)
	    $(clase_id_texto).val("")
	    
	  })

}
function escribirCorreo (documento,parte,clase,tipo,clase_id_texto){
	/*Funcion para esxribir el correo, momentaneamente es reemplazado por un descargar en PDF
	texto de prueba: The quick brown fox jumps over the lazy dog. Foxy parsons quiz and cajole the lovably dim wiki-girl.
	 Watch “Jeopardy!”, Alex Trebek’s fun TV quiz game. How razorback-jumping frogs can level six piqued gymnasts! 
	 All questions asked by five watched experts — amaze the judge*/
	$(".save").mousedown(function () {
		//alert("#")
		var contenido=$(clase_id_texto).attr("value");
			if(contenido==undefined){
				contenido=$(clase_id_texto).val();
			}

		var partes=documento.split("_");
		var leccion=partes[0];
		var ejercicio=partes[2];

		if(contenido!="")
			{document.location="../Scripts/contenido_final.php?contenido="+contenido+"&tipo="+tipo+"&class="+clase+"&nombre_archivo="+documento+"&leccion="+leccion[1]+"&ejercicio="+ejercicio+"&parte="+parte;}
		else
			{alert("Empty fields are invalid!")}
		
	})

}
function grabarAudio (id_rec,tiempo,nombre) {

  var cambio=0;

  $('#'+id_rec).click(function(){

      cambio=1-cambio;

      switch (cambio){

        case 1:
          $.jRecorder.record(tiempo);
          break;
        case 0:
          $.jRecorder.stop();
          $.jRecorder.sendData();
          break;

      }

  });
}
function grabarAudioyDescargar (id_rec,id_send,tiempo,nombre){

  var cambio=0;

  /*var anchor="<a></a>";
  $("#btn_send").wrapInner(anchor);*/

  $('#'+id_rec).click(function(){

          $.jRecorder.record(tiempo);

  });

  $(id_send).click(function(){

      cambio=1-cambio;

      switch (cambio){

        case 1:
          $.jRecorder.stop();
          $.jRecorder.sendData();
  		  $(id_send).attr("href","#");
          $(id_send).attr("target","");
          $(id_send+" p").text("download");
          //$("#btn_send p").text("send");
          break;
        case 0:

	      //$("#depurar").html("depuracion: "+$(id_send).attr("href"))
          //$("#btn_send p").text("stop");
          document.location="../Scripts/pasar_variables.php?&nombre_archivo="+nombre;
	      $(id_send).attr("href","../Scripts/"+nombre);
	      $(id_send).attr("target","_blank");
          break;

      }

  });

}
function ajustarDivArrastrar (clase,num_elementos) {
	/*Funcion para ajustar el tamano de los divs a a los parrafos, se ultiliza cuando los tamaños de los parrafos son muy diferentes*/

        for (var i = num_elementos - 1,w=0,h=0,d,f; i >= 0; i--) {

        	w= $("."+clase+"[lamina="+(i+1)+"]").children().css("width");
        	h= $("."+clase+"[lamina="+(i+1)+"]").children().css("height");
        	m= $("."+clase+"[lamina="+(i+1)+"]").children().css("margin");
        	d=$("."+clase+"[lamina="+(i+1)+"]").children().css("display");
        	f=$("."+clase+"[lamina="+(i+1)+"]").children().css("float");

        	$("."+clase+"[lamina="+(i+1)+"]").css("width",w);
        	$("."+clase+"[lamina="+(i+1)+"]").css("height",h);
        	$("."+clase+"[lamina="+(i+1)+"]").css("margin",m);
        	$("."+clase+"[lamina="+(i+1)+"]").css("display",d);
        	$("."+clase+"[lamina="+(i+1)+"]").css("float",f);
        	$("."+clase+"[lamina="+(i+1)+"]").children().removeAttr("class")

        };

}
function arrastrarElementos (clase,objetivo,numeros_objetivo,L) {
	/*Funcion para arrastrar elementos*/
	
	   $("."+objetivo).css("border-radius","8px")
	   $("."+clase).css("border-radius","8px")
	   //Remmover comentario en caso de no contar con estos atributos en el estilo de la clase.
	   /*$("."+clase).css("cursor","pointer")
	   $("."+clase).css("position","relative")
	   $("."+clase).css("top","0px")
	   $("."+clase).css("left","0px")*/

	   var movida
	   soltar=false;
	   $("."+objetivo).attr("disabled","disabled");
	   x_objetivo_i=[],y_objetivo_i=[],x_objetivo_f=[],y_objetivo_f=[];
	   cantidad=numeros_objetivo,incorrectas=0,intentos=0,clase_objetivo=objetivo;
       lugares=L;
       $("#btn_view").css("display","none")

	   for(var r=0,w=0,h=0,objeto,width,height;r<numeros_objetivo;r++){

   			objeto=$("."+objetivo+"[name="+(r+1)+"]").offset();
    		width=$("."+objetivo+"[name="+(r+1)+"]").width();
    		height=$("."+objetivo+"[name="+(r+1)+"]").height();
   			x_objetivo_i.push(objeto.left);
   			y_objetivo_i.push(objeto.top);
   			x_objetivo_f.push(objeto.left + width);
   			y_objetivo_f.push(objeto.top + height);

	   }

	   $("."+clase).attr('unselectable', 'on')
                   .css('user-select', 'none')


   		elementos=$("."+clase);

       $("."+clase).mousedown(function(e){

		   elemento=$(this);
	       click_x= e.clientX;
	       click_y= e.clientY;
	   	   pos_x=parseInt(elemento.css("left"));
	   	   pos_y=parseInt(elemento.css("top"));
		   x_elemento=parseInt(elemento.offset().left);
		   y_elemento=parseInt(elemento.offset().top);
	   	   elemento.animate({opacity: 0.75},185)
	     		   .css("background-color","#FFFFCC")
	   			   .children().css("color","#6D6E71");

	   	   elemento.css("z-index",4)

	   	   for(var r=0;r<cantidad;r++){

		   		if(x_objetivo_i[r] < e.clientX && y_objetivo_i[r] < e.clientY && x_objetivo_f[r] > e.clientX && y_objetivo_f[r] > e.clientY)
		   			{
		   				if($("."+clase_objetivo+"[name="+(r+1)+"]").attr("ocupado")=="true"){
		   					$("."+clase_objetivo+"[name="+(r+1)+"]").attr("ocupado","false");
		   				}
		   				break;
		   			}

			}
	       document.onmousemove=moverElemento;
	   	   soltar=false;

		})

		document.onmouseup=soltarElemento;

		$("."+clase).bind("touchstart",function (ev) {

		   elemento=$(this);
	       click_x= ev.originalEvent.touches[0].pageX;
	       click_y= ev.originalEvent.touches[0].pageY;
	   	   pos_x=parseInt(elemento.css("left"));
	   	   pos_y=parseInt(elemento.css("top"));
		   x_elemento=parseInt(elemento.offset().left);
		   y_elemento=parseInt(elemento.offset().top);
	   	   elemento.animate({opacity: 0.75},185)
	     		   .css("background-color","#FFFFCC")
	   			   .children().css("color","#6D6E71");

	   	   for(var r=0;r<cantidad;r++){

		   		if(x_objetivo_i[r] < ev.originalEvent.touches[0].pageX && y_objetivo_i[r] < ev.originalEvent.touches[0].pageY && x_objetivo_f[r] > ev.originalEvent.touches[0].pageX && y_objetivo_f[r] > ev.originalEvent.touches[0].pageY)
		   			{
		   				if($("."+clase_objetivo+"[name="+(r+1)+"]").attr("ocupado")=="true"){
		   					$("."+clase_objetivo+"[name="+(r+1)+"]").attr("ocupado","false");
		   				}
		   				break;
		   			}

			}

		   $(document).bind("touchmove", function(e){ 
		   	
		   				//$("#depurar").html("depuracion: "+e.originalEvent.touches[0].pageX)
		   				movida = e
	   					elemento.css({left:(pos_x + e.originalEvent.touches[0].pageX - click_x),top:(pos_y + e.originalEvent.touches[0].pageY - click_y)});
			            e.preventDefault(); 

		   });
		   soltar=false;

		})

		$("#btn_view").mousedown(function() {

			for(var r=0,l=0;r<cantidad;r++){

					l=lugares.indexOf($("."+clase+"[lamina="+(r+1)+"]").text());
		   			x_el=parseInt($("."+clase+"[lamina="+(r+1)+"]").offset().left);
		   			y_el=parseInt($("."+clase+"[lamina="+(r+1)+"]").offset().top);
				    p_x=parseInt($("."+clase+"[lamina="+(r+1)+"]").css("left"));
				    p_y=parseInt($("."+clase+"[lamina="+(r+1)+"]").css("top"));

					$("."+clase+"[lamina="+(r+1)+"]").animate({"left":(x_objetivo_i[l] - (x_el-p_x))+"px","top":(y_objetivo_i[l] - (y_el-p_y))+"px"},"slow")
													 .css("background-color","#30AC30")
													 .children().css("color","#FFF")

			}

		})
		$("#btn_view").bind("touchstart",function (ev) {

			for(var r=0,l=0;r<cantidad;r++){

					l=lugares.indexOf($("."+clase+"[lamina="+(r+1)+"]").text());
		   			x_el=parseInt($("."+clase+"[lamina="+(r+1)+"]").offset().left);
		   			y_el=parseInt($("."+clase+"[lamina="+(r+1)+"]").offset().top);
				    p_x=parseInt($("."+clase+"[lamina="+(r+1)+"]").css("left"));
				    p_y=parseInt($("."+clase+"[lamina="+(r+1)+"]").css("top"));
				    
					$("."+clase+"[lamina="+(r+1)+"]").animate({"left":(x_objetivo_i[l] - (x_el-p_x))+"px","top":(y_objetivo_i[l] - (y_el-p_y))+"px"},"slow")
													 .css("background-color","#30AC30")
													 .children().css("color","#FFF")

			}

		})

	    $(document).bind("touchend", function (ev){ 
				/*Funcion para soltar el elemento*/

					var x_espacio,y_espacio,espacio=-1,ocupado;

					for(var r=0;r<cantidad;r++){

						ocupado=$("."+clase_objetivo+"[name="+(r+1)+"]").attr("ocupado");

				   		if(x_objetivo_i[r] < movida.originalEvent.touches[0].pageX && y_objetivo_i[r] < movida.originalEvent.touches[0].pageY && x_objetivo_f[r] > movida.originalEvent.touches[0].pageX && y_objetivo_f[r] > movida.originalEvent.touches[0].pageY && ocupado=="false")
				   			{
				   				x_espacio=x_objetivo_i[r];
				   				y_espacio=y_objetivo_i[r];
				   				$("."+clase_objetivo+"[name="+(r+1)+"]").attr("ocupado","true");
				   				espacio=r;
				   				soltar=true;
				   				break;
				   			}

					}
		
					
					if(soltar==false)
					{
						elemento.animate({"left":"0px","top":"0px"},"slow")
								.css("background-color","rgb(228,223,196)");
					}
					else{

							palabra=elemento.text();
							lugar=lugares[espacio];
					
							//$("#depurar").html("depuracion: "+x_objetivo_i[espacio]+" "+y_objetivo_i[espacio]+" "+soltar)
							elemento.animate({"left":(x_espacio-(x_elemento-pos_x))+"px","top":(y_espacio-(y_elemento-pos_y))+"px"},"slow")
									.children().css("color","#FFF")
							
							if(incorrectas<=2){

								if(lugar.indexOf(palabra)==-1)
									{
										incorrectas++;
										elemento.css("background-color","#E62E00");
									}
								else
									{elemento.css("background-color","#30AC30");}

							}else{
								incorrectas=0;
								intentos++;
								elementos.animate({"left":"0px","top":"0px"},"slow")
										 .css("background-color","rgb(228,223,196)")
							   			 .children().css("color","#6D6E71")
				   			 
				   				$("."+clase_objetivo).attr("ocupado","false");
							}

					}

					elemento.animate({opacity: 1},195);

	   				elemento.css("z-index",1)

	    });

}

var moverElemento =function(e) {
	/*Movimiento del elemento.*/

	   elemento.css({left:(pos_x + e.clientX - click_x),top:(pos_y + e.clientY - click_y)});

};
var soltarElemento=function (e) {
	/*Funcion para soltar el elemento*/

		document.onmousemove=null;
		var x_espacio,y_espacio,espacio=-1,ocupado;

		for(var r=0;r<cantidad;r++){

			ocupado=$("."+clase_objetivo+"[name="+(r+1)+"]").attr("ocupado");

	   		if(x_objetivo_i[r] < e.clientX && y_objetivo_i[r] < e.clientY && x_objetivo_f[r] > e.clientX && y_objetivo_f[r] > e.clientY && ocupado=="false")
	   			{
	   				x_espacio=x_objetivo_i[r];
	   				y_espacio=y_objetivo_i[r];
	   				$("."+clase_objetivo+"[name="+(r+1)+"]").attr("ocupado","true");
	   				espacio=r;
	   				soltar=true;
	   				break;
	   			}

		}
		//$("#depurar").html("depuracion: "+x_objetivo_i)
		if(soltar==false)
		{
			elemento.animate({"left":"0px","top":"0px"},"slow")
					.css("background-color","rgb(228,223,196)");
		}
		else{

				palabra=elemento.text();
				lugar=lugares[espacio];
				elemento.animate({"left":(x_espacio-(x_elemento-pos_x))+"px","top":(y_espacio-(y_elemento-pos_y))+"px"},"slow")
						.children().css("color","#FFF")
				
				if(incorrectas<=2){

					if(lugar.indexOf(palabra)==-1)
						{
							incorrectas++;
							elemento.css("background-color","#E62E00");
						}
					else
						{elemento.css("background-color","#30AC30");}

				}else{

					incorrectas=0;
					intentos++;
					elementos.animate({"left":"0px","top":"0px"},"slow")
							 .css("background-color","rgb(228,223,196)")
				   			 .children().css("color","#6D6E71")

				   	$("."+clase_objetivo).attr("ocupado","false");

				}
				if(intentos>=3){
					$("#btn_view").css("display","block");
				}
		}
		elemento.animate({opacity: 1},195);

};

/*Funciones de ingreso de texto*/
function revisarTextosRespuetaInmediata (clase_id,referencias) {

	var valor=new Array(),porcentaje=0,valor_referencia=0,intentos=0,vacio=false;

	$(clase_id).keyup(function (){

		valor_referencia=$(this).attr("pregunta");
		valor[valor_referencia]=$(this).val();

	})

	$("#btn_check").click(function (){

			$(clase_id).each(function(){
				/*Funcion para determinar si existen campos vacios*/
				if($(this).val()=="")
					{vacio=true;}
			})
			if(vacio==true)
			{
					vacio=false;
					alert("Empty fields are invalid!!");
					return false;
			}


	    	if(intentos<3){

				for(var c=0;c<referencias.length;c++){
					if(valor[c]!=undefined)
						{
							porcentaje=distanciaDocumento(valor[c],referencias[c])
						}
					else
						{break;}

					
					if(porcentaje<=0.75)
						{
							$(clase_id+"[pregunta="+c+"]").css("background-color","#E62E00");
							$(clase_id+"[pregunta="+c+"]").css("color","#FFF");
						}
					else if(porcentaje>0.75 && porcentaje<0.96)
						{
							$(clase_id+"[pregunta="+c+"]").css("background-color","#FF6600");
							$(clase_id+"[pregunta="+c+"]").css("color","#FFF");
						}
					else
						{
							$(clase_id+"[pregunta="+c+"]").css("background-color","#30AC30");
							$(clase_id+"[pregunta="+c+"]").css("color","#FFF");
						}

				}

			}else{

				$("#btn_view").mousedown(function() {

					for(var r=0;r<referencias.length;r++){

							$(clase_id+"[pregunta="+r+"]").val(referencias[r]);
							$(clase_id+"[pregunta="+r+"]").css("background-color","#FFFFCC");
							$(clase_id+"[pregunta="+r+"]").css("color","#000");

					}
					//intentos=0;
				})
	
			}
			
			intentos++;
			//$("#depurar").html("depuracion: "+valor)
	})

};

/*Funciones de ingreso de texto*/
function revisarTextosMultiplesReferencias (clase_id,arreglo_referencias,respuestas) {

	var valor=new Array(),porcentaje=0,valor_referencia=0,intentos=0,vacio=false,back_color="",color="";

	$(clase_id).keyup(function (){

		valor_referencia=$(this).attr("pregunta");
		valor[valor_referencia]=$(this).val();

	})

	$("#btn_check").click(function (){

			$(clase_id).each(function(){
				/*Funcion para determinar si existen campos vacios*/

				if($(this).val()=="")
					{vacio=true;}

			});
			if(vacio==true)
			{
					vacio=false;
					alert("Empty fields are invalid!!");
					return false;
			}

	    	if(intentos<3){

				for(var o=0;o<arreglo_referencias.length;o++){

					//alert(referencias[c])
					for (var p = 0; p < arreglo_referencias[o].length; p++){

						//alert(arreglo_referencias[o].length+" "+valor)
						if(valor[o]!=undefined)
							{porcentaje=distanciaDocumento(valor[o],arreglo_referencias[o][p])}	
						else
							{break;}

						if(porcentaje<=0.75)
							{
								back_color="#E62E00";
								color="#FFF";
							}
						else if(porcentaje>0.75 && porcentaje<0.96)
							{
								back_color="#FF6600";
								color="#FFF";
								//break;
							}
						else
							{
								back_color="#30AC30";
								color="#FFF";
								break;
							}

					};

					$(clase_id+"[pregunta="+o+"]").css("background-color",back_color);
					$(clase_id+"[pregunta="+o+"]").css("color",color);

				}

			}else{

				$("#btn_view").mousedown(function() {

					for(var r=0;r<respuestas.length;r++){

							$(clase_id+"[pregunta="+r+"]").val(respuestas[r]);
							$(clase_id+"[pregunta="+r+"]").css("background-color","#FFFFCC");
							$(clase_id+"[pregunta="+r+"]").css("color","#000");

					}
					//intentos=0;
				})
	
			}
			
			intentos++;
	})

};

function revisarTextos (clase_id,referencias) {

	var valor=new Array(),porcentaje=0,valor_referencia=0,intentos=0,vacio=false;

	$(clase_id).keyup(function (){

		valor_referencia=$(this).attr("pregunta");
		valor[valor_referencia]=$(this).val();

	})

	$("#btn_check").click(function (){

			$(clase_id).each(function(){
				/*Funcion para determinar si existen campos vacios*/
				if($(this).val()=="")
					{vacio=true;}
			})
			if(vacio==true)
			{
					vacio=false;
					alert("Empty fields are invalid!!");
					return false;
			}

	    	if(intentos<3){

				for(var c=0;c<referencias.length;c++){

					if(valor[c]!=undefined)
						{
							porcentaje=distanciaDocumento(valor[c],referencias[c])
						}
					else
						{break;}
					//alert(porcentaje)
					//$("#depurar").html("depuracion: "+referencias+" "+valor)

					if(porcentaje<=0.75)
						{
							$(clase_id+"[pregunta="+c+"]").css("background-color","#E62E00");
							$(clase_id+"[pregunta="+c+"]").css("color","#FFF");
						}
					else if(porcentaje>0.75 && porcentaje<0.96)
						{
							$(clase_id+"[pregunta="+c+"]").css("background-color","#FF6600");
							$(clase_id+"[pregunta="+c+"]").css("color","#FFF");
						}
					else
						{
							$(clase_id+"[pregunta="+c+"]").css("background-color","#30AC30");
							$(clase_id+"[pregunta="+c+"]").css("color","#FFF");
						}

				}

			}else{

				$("#btn_view").mousedown(function() {

					for(var r=0;r<referencias.length;r++){

							$(clase_id+"[pregunta="+r+"]").val(referencias[r]);
							$(clase_id+"[pregunta="+r+"]").css("background-color","#FFFFCC");
							$(clase_id+"[pregunta="+r+"]").css("color","#000");

					}
					//intentos=0;
				})
	
			}
			
			intentos++;
			//$("#depurar").html("depuracion: "+valor)
	})

};
function borrarTextos (clase_id) {

	$("#btn_clear").mousedown(function() {
		$(clase_id).val("");
		$(clase_id).css("background-color","rgba(228,223,196,.5)")
		$(clase_id).css("color","#000");
	})

}
function distanciaDocumento (entrada,referencia) {
	/*Funcion para detrminar la similitud de dos cadenas de caracteres*/

	var palabra="",correcto=0;
	entrada=entrada.toLowerCase();
	entrada=entrada.split(" ");

	/*Eliminar espacios*/
	for(n=0;n<entrada.length;n++)
		{palabra=palabra.concat(entrada[n]);}

	//alert(referencia.indexOf("+")==-1)
	var longitud=(palabra.length>referencia.length)?palabra.length:referencia.length;

	for(var p=0,r=0,letras=0;(p<longitud && r<longitud);){

		//alert(palabra[p]+" "+referencia[r])
		if(palabra[p]==referencia[r])
			{correcto++,p++,r++;}
		else
			{
				if(palabra.length>referencia.length)
					{p++;}
				else if(palabra.length<referencia.length)
					{r++;}
				else
					{p++,r++;}
			}

	}

	var porcentaje=(palabra.length>referencia.length)? correcto/longitud : correcto/referencia.length;
	
	return porcentaje;

}


/*Funciones de seleccion de botones
La estructura debe poseer dentro de las clases o ids, nombre, para las filas 
y referencia para las columnas.*/

function clickBotonesSeleccionUnica (clase_id,numero_botones,textos_correctos,enumeracion) {

	var ubicacion=0,nombre="",respuesta="",bg_color="",color=""
	evaluacion= new Array(),respuestas=new Array(),intentos=0;

	$(clase_id).css("cursor","pointer");
	bg_color=$(clase_id).css("background-color");
	color=$(clase_id).css("color");

	$(clase_id).mousedown(function (){

			nombre=$(this).attr("pregunta");

			$(clase_id+"[pregunta="+nombre+"]").css("background-color",bg_color);
			$(clase_id+"[pregunta="+nombre+"]").css("color",color);
			//$("#depurar").html("depuracion: "+$(clase_id+"[pregunta="+nombre+"]").css("background-color"))

			ubicacion=enumeracion.indexOf(nombre);
			respuesta=$(this).attr("opcion");
			respuestas[ubicacion]=respuesta;

			if(respuesta==textos_correctos[ubicacion])
				{evaluacion[ubicacion]="correcto";}
			else
				{evaluacion[ubicacion]="incorrecto";}

			$(this).css("background-color","#333");
			$(this).css("color","#FFF");

	});

	$(clase_id).mouseover(function (){

			$(this).css("background-color","#333");

	});

	$(clase_id).mouseout(function (){

		if($(this).css("color")==color)
			{$(this).css("background-color",bg_color)}

	});

	borrarRespuestasBotones (clase_id,enumeracion,bg_color,color);
	verRespuestasBotones(clase_id,enumeracion,textos_correctos);
	revisarRespuestasBotones(clase_id,evaluacion,enumeracion,respuestas);

}
function borrarRespuestasBotones (clase_id,enumeracion,bg_color,color) {

	$("#btn_clear").mousedown(function (){

		for(var i = respuestas.length - 1; i >= 0; i--){

				//$("#marco_negro[pregunta="+enumeracion[i]+"]").css("border","1px solid #333")
			  	$(clase_id+"[pregunta="+enumeracion[i]+"]").css("background-color",bg_color)
			  	$(clase_id+"[pregunta="+enumeracion[i]+"]").css("color",color)
			  	//$("#marco_negro[pregunta="+enumeracion[i]+"]").css("background-color","#FFF")

		};
	})

}
function verRespuestasBotones (clase_id,enumeracion,textos_correctos) {

	$("#btn_view").mousedown(function (){

		if (intentos>=3) {

			for (var i = respuestas.length - 1; i >= 0; i--) {

				$(clase_id+"[pregunta="+enumeracion[i]+"][opcion="+textos_correctos[i]+"]").css("background-color","#333")
			  	$(clase_id+"[pregunta="+enumeracion[i]+"][opcion="+textos_correctos[i]+"]").css("color","#FFF")

			};
			//intentos=0;

		}

	})

}
function revisarRespuestasBotones (clase_id,respuestas,campos,seleccionados) {

	$("#btn_check").click(function (){

		if(intentos<3){

			for (var i = respuestas.length-1; i >= 0; i--){

				//$("#marco_negro[pregunta="+campos[i]+"]").css("border","0px")

				if(respuestas[i]=="correcto")
					{
						$(clase_id+"[pregunta="+campos[i]+"][opcion="+seleccionados[i]+"]").css("opacity","0")
						$(clase_id+"[pregunta="+campos[i]+"][opcion="+seleccionados[i]+"]").css("background-color","#30AC30")
						$(clase_id+"[pregunta="+campos[i]+"][opcion="+seleccionados[i]+"]").animate({opacity:1},700)
					}
				else
					{
						$(clase_id+"[pregunta="+campos[i]+"][opcion="+seleccionados[i]+"]").css("opacity","0")
						$(clase_id+"[pregunta="+campos[i]+"][opcion="+seleccionados[i]+"]").css("background-color","#E62E00")
						$(clase_id+"[pregunta="+campos[i]+"][opcion="+seleccionados[i]+"]").animate({opacity:1},700)
					}

			};

		}

		intentos++;

	})

}

function seleccionMultiple (clase_id,respuestas,opciones){

	evaluacion= new Array();

	$(clase_id).mousedown(function (){

		respuesta=$(this).children().text();
		pregunta=$(this).attr("pregunta");
		$(clase_id).css("background-color","#FFF");
		$(clase_id).children().css("background-color","#FFF");
		$(clase_id).children().css("color","#939498");
		//$(clase_id).children().css("font-size",".9em");
		$(clase_id).css("background-color","#FFF");
		$(this).css("background-color","rgb(251, 247, 238)");
		evaluacion[pregunta]=respuesta;

	})

	revisarRespuestaSeleccionM (evaluacion,respuestas,opciones,clase_id);
	borrarRespuestasSeleccionM (clase_id)
	verRespuestasSeleccionM (clase_id,opciones,1);

}
function revisarRespuestaSeleccionM (evaluacion,respuestas,opciones,clase_id) {

	$("#btn_check").mousedown(function () {

			if(evaluacion.length>0){

				for (var i = respuestas.length - 1; i >= 0; i--) {

					if(respuestas[i]==evaluacion[i]){
						//alert("Correct!")
						opcion=opciones.indexOf(evaluacion[i]);
						$(clase_id+"[opcion="+(opcion+1)+"]").children().css("background-color","#30AC30")
						$(clase_id+"[opcion="+(opcion+1)+"]").children().css("color","#FFF")
						$(clase_id+"[opcion="+(opcion+1)+"]").children().css("font-size","1.2em")

					}else{

						opcion=opciones.indexOf(evaluacion[i]);
						$(clase_id+"[opcion="+(opcion+1)+"]").children().css("background-color","#E62E00")
						$(clase_id+"[opcion="+(opcion+1)+"]").children().css("color","#FFF")
						//$(clase_id+"[opcion="+(opcion+1)+"]").children().css("font-size","1.2em")
						//alert("Incorrect!")
					}

				}

			}else
				{alert("You must choose one answer!");}

	})

}
function borrarRespuestasSeleccionM (clase_id) {

	$("#btn_clear").mousedown(function(){

		$(clase_id).css("background-color","#FFF");
		$(clase_id).children().css("background-color","#FFF")
		$(clase_id).children().css("color","#939498")
		//$(clase_id).children().css("font-size",".9em")

	})
	
};
function verRespuestasSeleccionM (clase_id,guia_respuestas,num_preguntas) {

	$("#btn_view").mousedown(function () {

		for (var r = num_preguntas-1; r >= 0; r--) {
			
			opcion=guia_respuestas.indexOf(respuestas[r]);
			$(clase_id+"[opcion="+(opcion+1)+"]").css("background-color","rgb(251, 247, 238)");
			
		};

	})

};

function seleccionarTextos (clase_id,respuestas) {

	var pregunta,respuesta;

	$(clase_id).css("cursor","pointer");

	$(clase_id).mouseover(function () {
		$(this).animate({opacity: 0.7},175);
	});
	$(clase_id).mouseout(function () {
		$(this).animate({opacity: 1},175);
	});

	$(clase_id).mousedown(function () {

		pregunta=$(this).attr("pregunta");
		respuesta=$(this).text();
		$(clase_id+"[pregunta="+pregunta+"]").css("color","rgb(147, 148, 152)")
		$(clase_id+"[pregunta="+pregunta+"]").css("font-weight","normal")
		$(this).css("font-weight","bold")

		if(respuestas[pregunta]==respuesta){
			$(this).css("color","#30AC30")
		}else{
			$(this).css("color","#E62E00")
		}

	});

};

function mostrarNubes (clase_id) {

	var x,y,frase,left,top,display;

	$(clase_id).css("cursor","pointer");

	$(clase_id).mousedown(function () {

		x=$(this).offset().left;
		y=$(this).offset().top;
		frase=$(this).attr("frase");
		display=$(".nube[frase="+frase+"]").css("display");
		if(display=="none"){

			$(".nube[frase="+frase+"]").fadeIn(1100);
			left=$(".nube[frase="+frase+"]").offset().left;
			top=$(".nube[frase="+frase+"]").offset().top;
			$(".nube[frase="+frase+"]").css("left",x+"px");
			$(".nube[frase="+frase+"]").css("top",(y-105)+"px");

		}else{
			
			$(".nube[frase="+frase+"]").fadeOut(1100);
			left=$(".nube[frase="+frase+"]").offset().left;
			top=$(".nube[frase="+frase+"]").offset().top;
			$(".nube[frase="+frase+"]").css("left",x+"px");
			$(".nube[frase="+frase+"]").css("top",(y-105)+"px");

		}

	})

};

function mostrarNubes1 (clase_id) {

	var x,y,frase,left,top,display;

	$(clase_id).css("cursor","pointer");

	$(clase_id).mousedown(function () {

		x=$(this).offset().left;
		y=$(this).offset().top;
		frase=$(this).attr("frase");
		display=$(".nube_1[frase="+frase+"]").css("display");
		if(display=="none"){

			$(".nube_1[frase="+frase+"]").fadeIn(0);
			$(".nube_1[frase="+frase+"]").animate({

				  top:'-120px',
			      width:'250px',
			      height:'120px',
			      fontSize:'1.3em'

			},1200)

		}else{
			
			//$(".nube_1[frase="+frase+"]").fadeOut(1100);
			$(".nube_1[frase="+frase+"]").animate({

				  top:'20px',
			      width:'0px',
			      height:'0px',
			      fontSize:'0em'

			},1200)
			$(".nube_1[frase="+frase+"]").fadeOut(0);

		}

	})

};
function mostrarPistas (clase_id,texto) {

	var cambio=0;

	$(clase_id).mousedown(function(){

		cambio=1-cambio;
		switch(cambio){

		case 1:
			$(this).text(texto);
			break;
		case 0:
			$(this).text("hint");
			break;

		}

	})

}
function animarImagenes(clase_id_respuesta,clase_id,respuesta,N){
	
	frame_rate=1000/24,left=[],n=0;

	for (var i = 0; i <N; i++) {

		left.push($(clase_id+"[imagen="+i+"]").offset().left)

	};
	
	$(clase_id).mousedown(function () {
		
		if($(this).attr("imagen")==respuesta){
			$(clase_id_respuesta).css("background-color","#009900");
			$(clase_id_respuesta).stop()
								 .css({"display": "none", "opacity": "1"})
								 .fadeIn("fast");
		}else{
			$(clase_id_respuesta).css("background-color","#CC0000")
			$(clase_id_respuesta).stop()
								 .css({"display": "none", "opacity": "1"})
								 .fadeIn("fast");
		}

		$(clase_id_respuesta).css("color","#FFF");

	});

	var Dinamica=function () {

		requestAnimationFrame(animacion);
		$(clase_id+"[imagen="+n+"]").animate({"left": -left[n]+"px"},"slow");
		left[n]=(left[n]+10)%50;
		n=(n+1)%N;

	}

    var animacion=function() {

        /*Objeto para la animacion*/
        vida_juego=setTimeout(Dinamica,frame_rate);

    };
	animacion();

}

function concentrese(clase_id_giro,clase_id_tarjeta,N,w,h,b_color) {
	
var ngiros=[],intentos=-1,imagen=[],respuesta=[];

	for (var i = N - 1; i >= 0; i--)
		{ngiros.push(0);}

	$(clase_id_giro).css("width",w);
	$(clase_id_giro).css("height",h);
	$(clase_id_giro).css("background-color",b_color)

	//$("#depurar").html("depuracion: "+$(clase_id_giro).css("width")+" "+clase_id_giro)
	$(clase_id_giro).mousedown(function(){

		var p=$(this).attr("imagen");
		var r=$(this).attr("marca");
	    ngiros[p]=1-ngiros[p];
	    //$("#depurar").html("depuracion: "+intentos);

	    switch(ngiros[p]){

		    case 1:
		      $(this).find(clase_id_tarjeta).addClass("girado");
			  respuesta.push(r);
		      imagen.push(p);
		    break;
		    case 0:
		      $(this).find(clase_id_tarjeta).removeClass("girado");
		      im=imagen.indexOf(p);
		      res=respuesta.indexOf(r);
		      respuesta.splice(res,1);
		      imagen.splice(im,1);
		    break;

	    }

	    if(intentos>=1){

			ngiros[imagen[0]]=0;
			ngiros[imagen[1]]=0;
			
			if(respuesta[0]==respuesta[1]){

			  $(clase_id_giro+"[imagen="+imagen[0]+"]").removeClass(clase_id_giro);
			  $(clase_id_giro+"[imagen="+imagen[1]+"]").removeClass(clase_id_giro);

			}else{

			  $(clase_id_giro+"[imagen="+imagen[0]+"]").find(clase_id_tarjeta).removeClass("girado");
			  $(clase_id_giro+"[imagen="+imagen[1]+"]").find(clase_id_tarjeta).removeClass("girado");

			}

			imagen=[];
			respuesta=[];
			imagen.push(p);
			respuesta.push(r);

		}
		
		//$("#depurar").html("depuracion: "+ngiros+" Numero de imagen "+imagen);

	    intentos=(intentos+1)%2;

	});

}
function seleccionColumnas (clase_id,nfilas,correctas,tipo) {
		
	var respuesta=[],intentos=0;
	$(clase_id).css("cursor","pointer");

	$(clase_id).mousedown(function() {

		p = $(this).attr("pregunta");

		if(tipo=="multiple")
			{

				o=respuesta.indexOf($(this).attr("opcion"))
				if(o!=-1)
					{
						respuesta[p-1]= respuesta[p-1]+ "," + o;
					}
				else
					{
						respuesta.splice(o,1)
					}

			}
		else if(tipo=="unica")
			{
				$(clase_id+"[pregunta="+p+"]").css("background","#FFF");
				$(this).css("background","url(../img/5.respuesta_1.png)");
				respuesta[p-1]= $(this).attr("opcion")
			}
		else
			{alert("Tipo de respuesta invalido desde la funcion")}

	});

	$("#btn_check").mousedown(function() {
		
			//$("#depurar").html("depuracion: "+intentos)
			for (var f = 0; f < nfilas; f++) {

					if(respuesta[f]==undefined)
						{
							alert("You must answer all questions!")
							intentos--
							break;
						}
					else if(respuesta[f]==correctas[f])
						{$(clase_id+"[pregunta="+(f+1)+"][opcion="+respuesta[f]+"]").css("background","url(../img/5.respuesta_2.png)");}
					else if(respuesta[f]!=correctas[f])
						{$(clase_id+"[pregunta="+(f+1)+"][opcion="+respuesta[f]+"]").css("background","url(../img/5.respuesta_3.png)");}

			};

			intentos++;

	});

	$("#btn_clear").mousedown(function() {

		respuesta=[];
		$(clase_id).css("background","none");

	})

	$("#btn_view").mousedown(function() {

		if(intentos>=3)
		{
			$(clase_id).css("background","none");
			
			for (var f = 0; f < nfilas; f++) {

				$(clase_id+"[pregunta="+(f+1)+"][opcion="+correctas[f]+"]").css("background","url(../img/5.respuesta_1.png)");

			}
		}
	})

}
function listaSeleccion (div,correctas,oportunidades) {

	//oportunidades es la cantidad de veces que el estudiante puede cambiar la lista select.

	var respuesta="",intentos=0;
	color=$(div).css("background-color")
	$("#btn_view").css("display","none")

	$(div).change(function() {

		if(intentos<oportunidades){

			respuesta=$(this).attr("value");
			pos=$(this).attr("caja")

			if (respuesta==""){

				$(this).css("background-color",color)
				//alert($(this).css("background-color"))
				$(this).css("color","#000")

			}else
			if (correctas[pos]==respuesta){

				$(this).css("background","#33CC33")
				$(this).css("color","#FFF")

			}else{

				$(this).css("background","#D11919")
				$(this).css("color","#FFF")

			}

		}else
			{
				$("#btn_view").css("display","block");
				$(this).css("background-color",color);
				$(this).css("color","#000")
				$(this).attr("disabled","disabled")
				$(div+"[caja="+pos+"] option[value='']").attr("selected","selected")
			}

		intentos++;

	});

	$("#btn_view").click(function() {

		for (var i = correctas.length - 1; i >= 0; i--) {

			$(div+"[caja="+i+"] option[value='"+correctas[i]+"']").attr("selected","selected")
			$(div+"[caja="+i+"]").css("background",color)
			$(div+"[caja="+i+"]").css("color","#000")
			//$("#depurar").html("depuracion: "+intentos+", "+$(div+"[caja="+i+"] option[value='"+correctas[i]+"']").attr("selected"))

		};

	})
}

var cambiarHTML= function(clase_id_html,html) {

	$(clase_id_html).html(html)

}
var anadirHTMLfinal= function(clase_id_html,html) {

	$(clase_id_html).append(html)

}
var reemplazarHTMLfinal= function(clase_id_html_eliminar,clase_id_html,html) {

	
	$(clase_id_html_eliminar).remove()
	$(clase_id_html).append(html)

}
var reemplazarHTMLinicio= function(clase_id_html_eliminar,clase_id_html,html) {

	$(clase_id_html_eliminar).remove()
	$(clase_id_html).prepend(html)
};

var cronometro={

	minutos:0,segundos:0,milisegundos:0,M:60000,S:1000,html:"",clase_id_html:"",funcion:"",clase_id_html_eliminar:"",

	cuentaRegresiva: function (clase_id_click,clase_id_texto,formato,tiempo_inicial) {
							/*Funcion para cronometrar tiempo
							posibles valores del argumento formato:
							MM:ss:mm, MM:ss ,MM ,ss ,ss:mm
							argumneto tiempo_inicial en milisegundos
							accion:
							cambiarHTML,anadirHTMLfinal,reemplazarHTMLfinal
							*/

							var segundos=this.segundos,milisegundos=this.milisegundos,minutos=this.minutos,M=this.M,S=this.S,timer,texto_tiempo="",funcion=this.funcion,clase_id_html=this.clase_id_html,html=this.html,clase_id_html_eliminar=this.clase_id_html_eliminar;

							function lapso () {

								minutos= Math.floor(tiempo_inicial/M);
								segundos= 59*((tiempo_inicial/M) - minutos);
								milisegundos= tiempo_inicial - Math.floor(tiempo_inicial/S)*S;

								minutos=(Math.round(minutos).toString().length>1)? Math.round(minutos) : "0"+Math.round(minutos);
								segundos=(Math.round(segundos).toString().length>1)? Math.round(segundos) : "0"+Math.round(segundos);

								switch(formato){

									case "MM:ss:mm":
										texto_tiempo=minutos+":"+segundos+":"+milisegundos;
									break;
									case "MM:ss":
										texto_tiempo=minutos+":"+segundos;
									break;
									case "MM":
										texto_tiempo=minutos;
									break;
									case "ss":
										texto_tiempo=segundos;
									break;
									case "ss:mm":
										texto_tiempo=segundos+":"+milisegundos
									break;

								}

								tiempo_inicial -=200;

								if(tiempo_inicial<=200)
									{

										switch(funcion){

											case "cambiarHTML":
												cambiarHTML(clase_id_html,html)
											break;
											case "anadirHTMLfinal":
												anadirHTMLfinal(clase_id_html,html)
											break;
											case "reemplazarHTMLfinal":
												reemplazarHTMLfinal(clase_id_html_eliminar,clase_id_html,html)
											break;
											case "reemplazarHTMLinicio":
												reemplazarHTMLinicio(clase_id_html_eliminar,clase_id_html,html)
											break;

										}

										$(clase_id_texto).css("opacity",0.5)
										clearInterval(timer)
									}
								//$("#depurar").html("depuracion: "+tiempo_inicial+" "+(minutos)*M)
								$(clase_id_texto).html(texto_tiempo)

							};

							if(clase_id_click=="")
								{timer=setInterval(lapso,200)}
							else{

								$(clase_id_click).mousedown(function() {

									timer=setInterval(lapso,200)

								});

							}

						}

}
/*------------------------- OTRAS FUNCIONES (Mas especificas por ejercicio pero posiblemete utiles) -----------------------*/
function chequearTextoSinCorreccion (clase_id,texto) {

	var valor

	/*$("#btn_view").click(function() {

		valor=$(clase_id).val();
		if(valor!=""){

			$(clase_id).val(valor+" Answer: "+texto);

		}else
			{alert("You must fill the textarea!")}

	});*/
	$("#btn_view").bind("click",function() {

		valor=$(clase_id).val();
		if(valor!=""){

			$(clase_id).val(valor+" Answer: "+texto);

		}else
			{alert("You must fill the textarea!")}

	})
	$("#btn_clear").click(function() {

		$(clase_id).val("")

	})

}
function ocultarMostrarTexto (clase_id,clase_id_click) {
	var cambio=0;
	//alert(cambio)
	$(clase_id_click).mousedown(function() {
	cambio=1 - cambio;

		switch(cambio){
			case 1:
			$(clase_id).hide()
			break;
			case 0:
			$(clase_id).show()
			break;
		}
	})
}
function vincularTextoCanvas (fondo_src,elementos,width_elementos,height_elementos,width,height,x_elementos,y_elementos,clase_texto){

	//var div=document.getElementById("canvas_id");
	var frame_rate=1000/24;
	var div=$("#canvas_id");
	div.attr("width",width);
	div.attr("height",height);
	var canvas=document.createElement("canvas");
	var context=canvas.getContext('2d');
	var fondo;
	var x=div.offset().left;
	var y=div.offset().top;
	canvas.width=width;
	canvas.height=height;
	var actual=0;

	var onLoadFondo=function () {
		context.drawImage(fondo,0,0,width,height);
	}
	var onLoadElementos=function () {
		context.drawImage(objetos[actual],x_elementos[actual],y_elementos[actual],width_elementos[actual],height_elementos[actual])
	}

	var Setup=function(){

		fondo=new Image();
		fondo.onload=onLoadFondo;
		fondo.src="../jpg/"+fondo_src;
		objetos=[];

		for (var i = 0; i < elementos.length; i++) {
			objetos.push(new Image());
			objetos[i].onload=onLoadFondo;
			objetos[i].src="../jpg/"+elementos[i];
		};

		var d=document.getElementById("canvas_id")
		var seleccionadas=[]
		canvas.onmousedown=function(e){
                recuadro=d.getBoundingClientRect();
                x_click=(e.clientX-Math.round(recuadro.left));
                y_click=(e.clientY-Math.round(recuadro.top));
                var e=0,color="#FFF",bac_color="#30AC30",opa=0;
                for (var i = objetos.length - 1; i >= 0; i--) {
                	
                	if(x_click>x_elementos[i] && x_click<(x_elementos[i]+width_elementos[i]) && y_click>y_elementos[i] && y_click<(y_elementos[i]+height_elementos[i])){

                		if(seleccionadas.indexOf(i)==-1)
                			{seleccionadas.push(i),e=i,opa=0.7,color="#FFF",bac_color="#30AC30";}
                		else
                			{seleccionadas.splice(i,1),e=i,opa=1,color="#000",bac_color="rgb(234,225,197)";}
                		break;
                		
                	}

                };
                $("div"+clase_texto+":nth-child("+(e+1)+")").css("background-color",bac_color);
                $("div"+clase_texto+":nth-child("+(e+1)+")").css("color",color);
                $("#depurar").html("depuracion: "+seleccionadas)
                $("div"+clase_texto+":nth-child("+(e+1)+")").animate({opacity: opa},250);
                

		}
		animacion();
		div.append(canvas);

	}

	var Dinamica=function () {
		requestAnimationFrame(animacion);

		onLoadFondo();
		for (actual = elementos.length - 1; actual >= 0; actual--) 
			{onLoadElementos();}

	}

    var animacion=function() {
        /*Objeto para la animacion*/
        vida_juego=setTimeout(Dinamica,frame_rate);
    };

    Setup();
}
function mostrarYocultarTexto(clase_id_click,clase_id_texto) {

	var frase=""
	$("input").val("")
	$(clase_id_click).css("cursor","pointer")

	$(clase_id_click).mousedown(function (){

			frase=$(this).attr("frase");
			$(clase_id_texto).val("");
			$(clase_id_texto+"[frase="+frase+"]").val(texto[frase-1]);

	})

}

/*Inicio de todo*/
$(document).ready(function(){

	/*Bloque para la navegacion*/
	var a=extraerNombre();
	var i=Listado_ejercicios.indexOf(a);

	if(i!=-1){
		construirNavegacionLateral(i);
		construirNavegacionMenu(i);
	}

	efectosFade(i);

})