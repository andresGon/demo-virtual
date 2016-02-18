var obj={//Funcion para el cambio de estado los botones.
            cambio_estado: function(){
                    $("#ver_respuesta").attr("href","#");
                    $("#Image30").attr("src", "../img/8.btn_ojo.png")
                    $("#Image24").attr("src", "../img/8.btn_chulito.png")
                    $("#ver_respuesta").mouseout(function(){
                        $("#Image30").attr("src", "../img/8.btn_ojo.png")
                    })
                    $("#ver_respuesta").mouseover(function(){
                        $("#Image30").attr("src", "../img/8.btn_ojo2.png")
                    })
                    $("#aprobar").attr("href","#");
                }
        } 
$(document).ready(function(){
    //Script implementando jQuery para los eventos y funcionalidad de la Unidad 5 del nivel 1.
    var intent=0, val="", ref="",src=""
    var loc=$(location).attr("href");
    var frac=loc.split("/");
    var lecc_y_ejer=frac[(frac.length)-1];
    var cod="";
    var guess=0,guess2=1
    var p=new Array()
    function reconocer_palabra(palabra){
       palabra.split("");var g=0;
       var palabra_n=new Array();
        for(var i=0;i<palabra.length;i++){
            if (palabra[i]!=" "){
                palabra_n[g]=palabra[i]
                g++;
            }
        }
       return palabra_n
   }
    $("#refrescar").click(function(){//Funcion que es llamada unicamente cuando se presiona
                        //refrescar, con la variable intent, la cual cuenta el numero
                        //de intentos.
        if ($("#select5").attr("value")!=undefined)
          val=$("#select5").attr("value");
        else if($(".bg_selec_peque1").attr("value")!=undefined)
          val=$(".bg_selec_peque1").attr("value");
        else if(($("#textfield").attr("value")!="")&&($("#textfield").attr("value")!=undefined)||(($("#textfield2").attr("value")!="")&&($("#textfield2").attr("value")!=undefined))||(($("#textfield3").attr("value")!="")&&($("#textfield3").attr("value")!=undefined))||(($("#textfield4").attr("value")!="")&&($("#textfield4").attr("value")!=undefined))||(($("#textfield5").attr("value")!="")&&($("#textfield5").attr("value")!=undefined))||(($("#textfield6").attr("value")!="")&&($("#textfield6").attr("value")!=undefined)))
          val=$("#textfield").attr("value")+"#"+$("#textfield2").attr("value")+"#"+$("#textfield3").attr("value")+"#"+$("#textfield4").attr("value")+"#"+$("#textfield5").attr("value")+"#"+$("#textfield6").attr("value");
          $(".tab_1").bind("mouseout",normalizar)
          $(".tab_1").bind("mouseover",resaltar)
          $(".texto_1_point").bind("mouseout",texto_nor)
          $(".texto_1_point").bind("mouseover",texto_res)
          $(".going").bind("mouseover",normalizar)
          $(".going").bind("mouseout",resaltar)
          $(".notsure").bind("mouseover",normalizar)
          $(".notsure").bind("mouseout",resaltar)
          $(".nogo").bind("mouseover",normalizar)
          $(".nogo").bind("mouseout",resaltar)
          $(".l1_ex9").attr("href","#") 
          $(".resp").bind("mouseover",res_resp)
          $(".resp").bind("mouseout",nor_resp)
          $("#correcta").css("background-color","")
     if (val!=""){//Si val existe. 
         $("#imagen").css("display", "none")
         $(".resp[reference=1]").attr("src","../img/chulo1.png")
         $(".resp[reference=2]").attr("src","../img/check1.png")
         $(".resp[reference=3]").attr("src","../img/preg1.png")
        intent++;
           if (intent>=3)//Dado el caso que los intentos sean mayores o iguales a 3
                         //se llama a la funcion que cambia los atributos de los botones
                          obj["cambio_estado"]()//Llamado a a la funcion cambio de estado 
            
        val="";cod="";
          if ((lecc_y_ejer=="L1_Quiz.html")||(lecc_y_ejer=="L1_Quiz.html#")){//Condiciones para volver al estado inicial los elementos de clase tab_1(donde hay imagenes)
                 $(".tab_1[reference='1']").attr("src","../jpg/art-2_1_vb2_a_1.png")
                 $(".tab_1[reference='2']").attr("src","../jpg/art-2_1_vb2_b_1.png")
                 $(".tab_1[reference='3']").attr("src","../jpg/art-2_1_vb2_h_1.png")
          }
          if((lecc_y_ejer=="L2_exer_4.html")||(lecc_y_ejer=="L2_exer_4.html#")){
                  $(".going").attr("src","../img/btn_Going_Yes_1.png")
                  $(".nogo").attr("src","../img/btn_Going_No_1.png")
                  $(".notsure").attr("src","../img/btn_no_sure_1.png")
                  $(".check").attr("src","../img/1.bg_maqueta.jpg")
          }
          if((lecc_y_ejer=="L1_Quiz-P2.html")||(lecc_y_ejer=="L1_Quiz-P2.html#")){
                 $(".check").attr("src","../img/1.bg_maqueta.jpg")
          }
        $("#textfield2").attr("value","");$("#textfield").attr("value","")
        $("#textfield3").attr("value","");$("#textfield4").attr("value","")
        $("#textfield5").attr("value","");$("#textfield6").attr("value","")
        $("#textfield7").attr("value","");$("#textfield8").attr("value","");$("#textfield9").attr("value","");
        $(".notif").html(cod);
       
        if ((lecc_y_ejer=="L1_exer_6-1.html")||(lecc_y_ejer=="L1_exer_6-1.html#")||(lecc_y_ejer=="L1_exer_6-2.html")||(lecc_y_ejer=="L1_exer_6-2.html#")||(lecc_y_ejer=="L1_exer_6-3.html")||(lecc_y_ejer=="L1_exer_6-3.html#")||(lecc_y_ejer=="L1_exer_6-4.html")||(lecc_y_ejer=="L1_exer_6-4.html#")||(lecc_y_ejer=="L1_exer_6-5.html")||(lecc_y_ejer=="L1_exer_6-5.html#")||(lecc_y_ejer=="L1_exer_6-6.html")||(lecc_y_ejer=="L1_exer_6-6.html#")||(lecc_y_ejer=="L1_exer_6-7.html")||(lecc_y_ejer=="L1_exer_6-7.html#"))
            $(".texto_1_point").css("color","#4D217A")
        if ((lecc_y_ejer=="L1_exer_12-1.html")||(lecc_y_ejer=="L1_exer_12-1.html#")||(lecc_y_ejer=="L1_exer_12-2.html")||(lecc_y_ejer=="L1_exer_12-2.html#")||(lecc_y_ejer=="L1_exer_12-3.html")||(lecc_y_ejer=="L1_exer_12-3.html#")||(lecc_y_ejer=="L1_exer_12-4.html")||(lecc_y_ejer=="L1_exer_12-4.html#")||(lecc_y_ejer=="L1_exer_12-5.html")||(lecc_y_ejer=="L1_exer_12-5.html#"))
            $(".texto_1_point").css("color","#4D217A")
        if ((lecc_y_ejer=="L1_Quiz-P1-1.html")||(lecc_y_ejer=="L1_Quiz-P1-1.html#")||(lecc_y_ejer=="L1_Quiz-P1-2.html")||(lecc_y_ejer=="L1_Quiz-P1-2.html#")||(lecc_y_ejer=="L1_Quiz-P1-3.html")||(lecc_y_ejer=="L1_Quiz-P1-3.html#")||(lecc_y_ejer=="L1_Quiz-P1-4.html")||(lecc_y_ejer=="L1_Quiz-P1-4.html#"))
            $(".texto_1_point").css("color","#4D217A")
        if ((lecc_y_ejer=="L2_exer_7-1.html")||(lecc_y_ejer=="L2_exer_7-1.html#")||(lecc_y_ejer=="L2_exer_7-2.html")||(lecc_y_ejer=="L2_exer_7-2.html#")||(lecc_y_ejer=="L2_exer_7-3.html")||(lecc_y_ejer=="L2_exer_7-3.html#")||(lecc_y_ejer=="L2_exer_7-4.html")||(lecc_y_ejer=="L2_exer_7-4.html#")||(lecc_y_ejer=="L2_exer_7-5.html")||(lecc_y_ejer=="L2_exer_7-5.html#"))
            $(".texto_1_point").css("color","#4D217A")
        if ((lecc_y_ejer=="L2_exer_9-1.html")||(lecc_y_ejer=="L2_exer_9-1.html#")||(lecc_y_ejer=="L2_exer_9-2.html")||(lecc_y_ejer=="L2_exer_9-2.html#")||(lecc_y_ejer=="L2_exer_9-3.html")||(lecc_y_ejer=="L2_exer_9-3.html#")||(lecc_y_ejer=="L2_exer_9-4.html")||(lecc_y_ejer=="L2_exer_9-4.html#")||(lecc_y_ejer=="L2_exer_9-5.html")||(lecc_y_ejer=="L2_exer_9-5.html#"))
            $(".texto_1_point").css("color","#4D217A")
        if ((lecc_y_ejer=="L2_Quiz_P1-1.html")||(lecc_y_ejer=="L2_Quiz_P1-1.html#")||(lecc_y_ejer=="L2_Quiz_P1-2.html")||(lecc_y_ejer=="L2_Quiz_P1-2.html#")||(lecc_y_ejer=="L2_Quiz_P1-3.html")||(lecc_y_ejer=="L2_Quiz_P1-3.html#")||(lecc_y_ejer=="L2_Quiz_P1-4.html")||(lecc_y_ejer=="L2_Quiz_P1-4.html#")||(lecc_y_ejer=="L2_Quiz_P1-5.html")||(lecc_y_ejer=="L2_Quiz_P1-5.html#"))
            $(".texto_1_point").css("color","#4D217A")
        if ((lecc_y_ejer=="L3_exer_3a.html")||(lecc_y_ejer=="L3_exer_3a.html#")||(lecc_y_ejer=="L3_exer_3b.html")||(lecc_y_ejer=="L3_exer_3b.html#")||(lecc_y_ejer=="L3_exer_3c.html")||(lecc_y_ejer=="L3_exer_3c.html#")||(lecc_y_ejer=="L3_exer_3d.html")||(lecc_y_ejer=="L3_exer_3d.html#")||(lecc_y_ejer=="L3_exer_3e.html")||(lecc_y_ejer=="L3_exer_3e.html#")||(lecc_y_ejer=="L3_exer_3f.html")||(lecc_y_ejer=="L3_exer_3f.html#")||(lecc_y_ejer=="L3_exer_3g.html")||(lecc_y_ejer=="L3_exer_3g.html#")||(lecc_y_ejer=="L3_exer_3h.html")||(lecc_y_ejer=="L3_exer_3h.html#")||(lecc_y_ejer=="L3_exer_3i.html")||(lecc_y_ejer=="L3_exer_3i.html#"))
            $(".texto_1_point").css("color","#4D217A")
       
        $("#select5").attr("value","");$("#select6").attr("value","");$("#select7").attr("value","");$("#select8").attr("value","")
        $("#select9").attr("value","");$("#select10").attr("value","");$("#select11").attr("value","");$("#select12").attr("value","");$("#select13").attr("value","");$("#select14").attr("value","");
        $("#notif1").attr("src","../img/bg_cuadro25.png")
        $("#notif2").attr("src","../img/bg_cuadro25.png")
        $("#notif3").attr("src","../img/bg_cuadro25.png")
        $("#notif4").attr("src","../img/bg_cuadro25.png")
        var s='';
        for (var n=1;n<31;n++){
            s=n+'';
            $("#textarea"+s).attr("value","")
        }
     }else{
         
       if ((lecc_y_ejer.indexOf("L2_Exer_9")==-1)&&(lecc_y_ejer.indexOf("L3_Exer_5")==-1))
       //Caso especial para los ejercicios 9 de leccion 2 y 5 de leccion 3, ya que el valor de val
       //despues de presionar el boton #ver_respuesta, en estos scripts siempre sera "".
           alert("You must select an answer!")   
       else{
             if (intent>=3)//Dado el caso que los intentos sean mayores o iguales a 3
                           //se llama a la funcion que cambia los atributos de los botones
                          obj["cambio_estado"]()//Llamado a a la funcion cambio de estado
         }
     }
    })
    
    var normalizar=function(){//Funcion para normalizar la imagen 
                              //y se usa en el evento de retirar 
                              //el mouse de la imagen (mouseout)
        var im=$(this).attr("src")
        im=im.split("_")
        var temp="";          
            if (lecc_y_ejer.indexOf("L2_exer_4.html")==-1){
                temp=im[4]
                temp=temp.replace("2","1")
                im[4]=temp;
                $(this).attr("src",im[0]+"_"+im[1]+"_"+im[2]+"_"+im[3]+"_"+im[4])
            }else{
                temp=im[3]
                temp=temp.replace("1","2")
                im[3]=temp;
                $(this).attr("src",im[0]+"_"+im[1]+"_"+im[2]+"_"+im[3])
            }
               
           
           
    }

    var resaltar=function(){//Funcion para resaltar la imagen
                            //y se usa en el evento de colocar el mouse
                            //sobre la imagen (mouseover)
        var im=$(this).attr("src")
        im=im.split("_")
        var temp="";
            if (lecc_y_ejer.indexOf("L2_exer_4.html")==-1){ 
                temp=im[4]//Cambiar la estructura cuando lleguen las fotos del ejercicio
                temp=temp.replace("1","2")
                im[4]=temp;
                $(this).attr("src",im[0]+"_"+im[1]+"_"+im[2]+"_"+im[3]+"_"+im[4])
            }else{
               // alert(lecc_y_ejer.indexOf("L2_exer_4.html")==-1)
                temp=im[3]//Cambiar la estructura cuando lleguen las fotos del ejercicio
                temp=temp.replace("2","1")
                im[3]=temp;
                $(this).attr("src",im[0]+"_"+im[1]+"_"+im[2]+"_"+im[3])
            }
                         
    }
    $(".going").bind("mouseover",normalizar)
    $(".going").bind("mouseout",resaltar)
    
    $(".going").click(function(){
       val="#"+$(this).attr("src")+val
       ref=$(this).attr("reference")
       
       $(".going[reference="+ref+"]").unbind("mouseover",normalizar)//Desenlazar la funcion contenida en normalizar al evento mouseout 
       $(".going[reference="+ref+"]").unbind("mouseout",resaltar)//Desenlazar la funcion contenida en resaltar al evento mouseouver 
       $(".nogo[reference="+ref+"]").unbind("mouseover",normalizar)
       $(".nogo[reference="+ref+"]").unbind("mouseout",resaltar)
       $(".notsure[reference="+ref+"]").unbind("mouseover",normalizar)
       $(".notsure[reference="+ref+"]").unbind("mouseout",resaltar)
       val2=val;
    })
   
    $(".nogo").bind("mouseover",normalizar)
    $(".nogo").bind("mouseout",resaltar)
    
    $(".nogo").click(function(){
       val="#"+$(this).attr("src")+val
       ref=$(this).attr("reference")
       $(".going[reference="+ref+"]").unbind("mouseover",normalizar)
       $(".going[reference="+ref+"]").unbind("mouseout",resaltar)
       $(".nogo[reference="+ref+"]").unbind("mouseover",normalizar)
       $(".nogo[reference="+ref+"]").unbind("mouseout",resaltar)
       $(".notsure[reference="+ref+"]").unbind("mouseover",normalizar)
       $(".notsure[reference="+ref+"]").unbind("mouseout",resaltar)
       
       val2=val;
    })
    
    $(".notsure").bind("mouseover",normalizar)
    $(".notsure").bind("mouseout",resaltar)
    
    $(".notsure").click(function(){
       val="#"+$(this).attr("src")+val
       ref=$(this).attr("reference")
       $(".going[reference="+ref+"]").unbind("mouseover",normalizar) 
       $(".going[reference="+ref+"]").unbind("mouseout",resaltar) 
       $(".nogo[reference="+ref+"]").unbind("mouseover",normalizar) 
       $(".nogo[reference="+ref+"]").unbind("mouseout",resaltar) 
       $(".notsure[reference="+ref+"]").unbind("mouseover",normalizar) 
       $(".notsure[reference="+ref+"]").unbind("mouseout",resaltar) 
       
       val2=val;
    })
    
    $(".tab_1").bind("mouseout",normalizar)//Enlazar la funcion contenida en normalizar al evento mouseout de clase la tab_1
    $(".tab_1").bind("mouseover",resaltar)//Enlazar la funcion contenida en resaltar al evento mouseover de clase la tab_1
    
    $(".tab_1").click(function(){
       val=$(this).attr("src")
       $(".tab_1").unbind("mouseout",normalizar)//Desenlazar la funcion contenida en normalizar al evento mouseout de clase la tab_1
       $(".tab_1").unbind("mouseover",resaltar)//Desenlazar la funcion contenida en resaltar al evento mouseouver de clase la tab_1
       val2=val;
     })
     
     var texto_nor=function(){
         $(this).css("color","#4D217A")
     }

     var texto_res=function(){
         $(this).css("color","#DBA10E")
     }
     
     $(".texto_1_point").bind("mouseout",texto_nor)
     $(".texto_1_point").bind("mouseover",texto_res)
     
     $(".texto_1_point").click(function(){
         val=$(this).text()
       //if ($("#textfield").attr("value")=="")
         $("#textfield").attr("value",val)
         $(".texto_1_point").css("color","#4D217A")
         $(this).css("color","#DBA10E")
         $(".texto_1_point").bind("mouseout",texto_nor)
         $(".texto_1_point").bind("mouseover",texto_res)
         $(this).unbind("mouseout",texto_nor)
         $(this).unbind("mouseover",texto_res)
     })
    $(".texto_1_Grande").click(function(){     
        guess2++    
        if (guess2!=1)     
            val2="incorrecta" 
      //  else
       //     val2="are"
    })
    $("#correcta").click(function(){
            guess2=0; 
           val2=$(this).text()
      })
      var res_resp=function(){
        var im=$(this).attr("src")
        im=im.replace("1","2")
        $(this).attr("src",im)  
      }
      var nor_resp=function(){
        var im=$(this).attr("src")
        im=im.replace("2","1")
        $(this).attr("src",im)
      }
    $(".resp").bind("mouseover",res_resp)
    $(".resp").bind("mouseout",nor_resp)
    
    $(".resp").click(function(){
        val=$(this).attr("reference")
        src=$(this).attr("src")
       // alert(ref)
        $(".resp[reference=1]").attr("src","../img/chulo1.png")
        $(".resp[reference=2]").attr("src","../img/check1.png")
        $(".resp[reference=3]").attr("src","../img/preg1.png")
        $(".resp").bind("mouseover",res_resp)
        $(".resp").bind("mouseout",nor_resp)
       
        $(".resp[reference="+val+"]").attr("src",src)
        $(this).unbind("mouseover",res_resp)
        $(this).unbind("mouseout",nor_resp)
    })
    $("#aprobar").click(function(){//Funcion para el evento del boton para deterimar si la respuesta es correcta o no.
      if ($("#aprobar").attr("href")!=undefined){
          
        if ((($("#select5").attr("value")!=undefined)&&($("#select5").attr("value")!=""))||(($("#select6").attr("value")!=undefined)&&($("#select6").attr("value")!=""))||(($("#select7").attr("value")!=undefined)&&($("#select7").attr("value")!=""))||(($("#select8").attr("value")!=undefined)&&($("#select8").attr("value")!=""))||(($("#select9").attr("value")!=undefined)&&($("#select9").attr("value")!=""))||(($("#select10").attr("value")!=undefined)&&($("#select10").attr("value")!=""))||(($("#select11").attr("value")!=undefined)&&($("#select11").attr("value")!=""))||(($("#select12").attr("value")!=undefined)&&($("#select12").attr("value")!=""))||(($("#select13").attr("value")!=undefined)&&($("#select13").attr("value")!=""))||(($("#select14").attr("value")!=undefined)&&($("#select14").attr("value")!="")))
          val=$("#select5").attr("value")+"#"+$("#select6").attr("value")+"#"+$("#select7").attr("value")+"#"+$("#select8").attr("value")+"#"+$("#select9").attr("value")+"#"+$("#select10").attr("value")+"#"+$("#select11").attr("value")+"#"+$("#select12").attr("value")+"#"+$("#select13").attr("value")+"#"+$("#select14").attr("value");     
        else if(($("#textfield").attr("value")!="")&&($("#textfield").attr("value")!=undefined)||(($("#textfield2").attr("value")!="")&&($("#textfield2").attr("value")!=undefined))||(($("#textfield3").attr("value")!="")&&($("#textfield3").attr("value")!=undefined))||(($("#textfield4").attr("value")!="")&&($("#textfield4").attr("value")!=undefined))||(($("#textfield5").attr("value")!="")&&($("#textfield5").attr("value")!=undefined))||(($("#textfield6").attr("value")!="")&&($("#textfield6").attr("value")!=undefined))||(($("#textfield7").attr("value")!="")&&($("#textfield7").attr("value")!=undefined))||(($("#textfield8").attr("value")!="")&&($("#textfield8").attr("value")!=undefined))||(($("#textfield9").attr("value")!="")&&($("#textfield9").attr("value")!=undefined))){
          val=$("#textfield").attr("value")+"#"+$("#textfield2").attr("value")+"#"+$("#textfield3").attr("value")+"#"+$("#textfield4").attr("value")+"#"+$("#textfield5").attr("value")+"#"+$("#textfield6").attr("value")+"#"+$("#textfield7").attr("value")+"#"+$("#textfield8").attr("value")+"#"+$("#textfield9").attr("value");
          val=val.toLowerCase();     
       }
       var s=''
       var id=new Array();

       for (var n=1;n<=30;n++){
              s=n+'';
              if(($("#textarea"+s).attr("value")!="")&&($("#textarea"+s).attr("value")!=undefined)){
                 val=val+"#"+$("#textarea"+s).attr("value");
                 id[guess]=s;
                 guess++
              }   
       }
       $(".going").bind("mouseover",normalizar)
       $(".going").bind("mouseout",resaltar)
       $(".notsure").bind("mouseover",normalizar)
       $(".notsure").bind("mouseout",resaltar)
       $(".nogo").bind("mouseover",normalizar)
       $(".nogo").bind("mouseout",resaltar)
       $(".tab_1").bind("mouseout",normalizar)
       $(".tab_1").bind("mouseover",resaltar)
       $(".texto_1").bind("mouseout",texto_nor)
       $(".texto_1").bind("mouseover",texto_res)
       
        if (val!=""){//Si el valor de la seleccion de la lista es diferente del caracter
                     //blanco, se busca en que leccion y ejercicio se esta y se verifica la respuesta
           if ((lecc_y_ejer=="L1_exer_1-1.html")||(lecc_y_ejer=="L1_exer_1-1.html#")){//Condiciones para verificar la respuesta, dependiendo del HTML donde se encuentre.
               val=val.split("#");
               guess=0;
                if ((val[0].indexOf("birthday")==-1))
                    guess++;
                
               if (guess==0)
                   cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
               else
                   cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";
           }else if ((lecc_y_ejer=="L1_exer_1-2.html")||(lecc_y_ejer=="L1_exer_1-2.html#")){
               val=val.split("#");
               guess=0;
                if ((val[0].indexOf("farewell")==-1))
                    guess++;
                
               if (guess==0)
                   cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
               else
                   cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";
           }else if ((lecc_y_ejer=="L1_exer_1-3.html")||(lecc_y_ejer=="L1_exer_1-3.html#")){
               val=val.split("#");
               guess=0;
                if ((val[0].indexOf("wedding reception")==-1))
                    guess++;
                
               if (guess==0)
                   cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
               else
                   cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";
           }else if ((lecc_y_ejer=="L1_exer_1-4.html")||(lecc_y_ejer=="L1_exer_1-4.html#")){
               val=val.split("#");
               guess=0;
                if ((val[0].indexOf("baby shower")==-1))
                    guess++;
                
               if (guess==0)
                   cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
               else
                   cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";
           }else if ((lecc_y_ejer=="L1_exer_1-5.html")||(lecc_y_ejer=="L1_exer_1-5.html#")){
               val=val.split("#");
               guess=0;
                if ((val[0].indexOf("surprise")==-1))
                    guess++;
                
               if (guess==0)
                   cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
               else
                   cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";
           }else if ((lecc_y_ejer=="L1_exer_4-1.html")||(lecc_y_ejer=="L1_exer_4-1.html#")){
              val=val.split("#");
               guess=0;
                if ((val[0].indexOf("beer")==-1))
                    guess++;
                
               if (guess==0)
                   cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
               else
                   cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";
          }else if ((lecc_y_ejer=="L1_exer_4-2.html")||(lecc_y_ejer=="L1_exer_4-2.html#")){
              val=val.split("#");
               guess=0;
                if ((val[0].indexOf("ice cream")==-1))
                    guess++;
                
               if (guess==0)
                   cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
               else
                   cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";
          }else if ((lecc_y_ejer=="L1_exer_4-3.html")||(lecc_y_ejer=="L1_exer_4-3.html#")){
              val=val.split("#");
               guess=0;
                if ((val[0].indexOf("drink")==-1))
                    guess++;
                
               if (guess==0)
                   cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
               else
                   cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";
          }else if ((lecc_y_ejer=="L1_exer_4-4.html")||(lecc_y_ejer=="L1_exer_4-4.html#")){
              val=val.split("#");
               guess=0;
                if ((val[0].indexOf("cake")==-1))
                    guess++;
                
               if (guess==0)
                   cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
               else
                   cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";
          }else if ((lecc_y_ejer=="L1_exer_4-5.html")||(lecc_y_ejer=="L1_exer_4-5.html#")){
              val=val.split("#");
               guess=0;
                if ((val[0].indexOf("chips")==-1))
                    guess++;
                
               if (guess==0)
                   cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
               else
                   cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";
          }else if ((lecc_y_ejer=="L1_exer_6-1.html")||(lecc_y_ejer=="L1_exer_6-1.html#")){
              val=val.split("#");
               guess=0;
                if ((val[0].indexOf("d. wine")==-1))
                    guess++;
                
               if (guess==0)
                   cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
               else
                   cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";
          }else if ((lecc_y_ejer=="L1_exer_6-2.html")||(lecc_y_ejer=="L1_exer_6-2.html#")){
              val=val.split("#");
               guess=0;
                if ((val[0].indexOf("a.birthday party")==-1))
                    guess++;
                
               if (guess==0)
                   cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
               else
                   cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";
          }else if ((lecc_y_ejer=="L1_exer_6-3.html")||(lecc_y_ejer=="L1_exer_6-3.html#")){
              val=val.split("#");
               guess=0;
                if ((val[0].indexOf("c. beer")==-1))
                    guess++;
                
               if (guess==0)
                   cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
               else
                   cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";
          }else if ((lecc_y_ejer=="L1_exer_6-4.html")||(lecc_y_ejer=="L1_exer_6-4.html#")){
              val=val.split("#");
               guess=0;
                if ((val[0].indexOf("d. a baby shower")==-1))
                    guess++;
                
               if (guess==0)
                   cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
               else
                   cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";
          }else if ((lecc_y_ejer=="L1_exer_6-5.html")||(lecc_y_ejer=="L1_exer_6-5.html#")){
              val=val.split("#");
               guess=0;
                if ((val[0].indexOf("b. beer and wine")==-1))
                    guess++;
                
               if (guess==0)
                   cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
               else
                   cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";
          }else if ((lecc_y_ejer=="L1_exer_6-6.html")||(lecc_y_ejer=="L1_exer_6-6.html#")){
              val=val.split("#");
               guess=0;
                if ((val[0].indexOf("a. a little get together")==-1))
                    guess++;
                
               if (guess==0)
                   cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
               else
                   cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";
          }else if ((lecc_y_ejer=="L1_exer_6-7.html")||(lecc_y_ejer=="L1_exer_6-7.html#")){
              val=val.split("#");
               guess=0;
                if ((val[0].indexOf("a. he is.")==-1))
                    guess++;
                
               if (guess==0)
                   cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
               else
                   cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";
          }else if ((lecc_y_ejer=="L1_exer_10.html")||(lecc_y_ejer=="L1_exer_10.html#")){
              val=val.split("#");
               guess=0;
            //   alert(val)
                if ((val[0].indexOf("water")==-1))
                    guess++;
                if ((val[1].indexOf("some")==-1))
                    guess++;
                if ((val[2].indexOf("cookies")==-1))
                    guess++;
                if ((val[3].indexOf("a cup of coffee")==-1))
                    guess++;
                if ((val[4].indexOf("glasses")==-1))
                    guess++;
                if ((val[5].indexOf("ice")==-1))
                    guess++;
                if ((val[6].indexOf("sandwiches")==-1))
                    guess++;
                if ((val[7].indexOf("cartons of milk")==-1))
                    guess++;
                if ((val[8].indexOf("tea")==-1))
                    guess++;
                if ((val[9].indexOf("wine")==-1))
                    guess++;
                
               if (guess==0)
                   cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
               else
                   cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";
          }else if ((lecc_y_ejer=="L1_exer_12-1.html")||(lecc_y_ejer=="L1_exer_12-1.html#")){
              val=val.split("#");
               guess=0;
                if ((val[0].indexOf("c. any")==-1))
                    guess++;
                
               if (guess==0)
                   cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
               else
                   cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";
          }else if ((lecc_y_ejer=="L1_exer_12-2.html")||(lecc_y_ejer=="L1_exer_12-2.html#")){
              val=val.split("#");
               guess=0;
                if ((val[0].indexOf("a. some")==-1))
                    guess++;
                
               if (guess==0)
                   cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
               else
                   cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";
          }else if ((lecc_y_ejer=="L1_exer_12-3.html")||(lecc_y_ejer=="L1_exer_12-3.html#")){
              val=val.split("#");
               guess=0;
                if ((val[0].indexOf("c. need some")==-1))
                    guess++;
                
               if (guess==0)
                   cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
               else
                   cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";
          }else if ((lecc_y_ejer=="L1_exer_12-4.html")||(lecc_y_ejer=="L1_exer_12-4.html#")){
              val=val.split("#");
               guess=0;
                if ((val[0].indexOf("b. don't")==-1))
                    guess++;
                
               if (guess==0)
                   cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
               else
                   cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";
          }else if ((lecc_y_ejer=="L1_exer_12-5.html")||(lecc_y_ejer=="L1_exer_12-5.html#")){
              val=val.split("#");
               guess=0;
                if ((val[0].indexOf("d. any")==-1))
                    guess++;
                
               if (guess==0)
                   cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
               else
                   cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";
          }else if ((lecc_y_ejer=="L1_Quiz-P1-1.html")||(lecc_y_ejer=="L1_Quiz-P1-1.html#")){
              val=val.split("#");
               guess=0;
                if ((val[0].indexOf("b. get together")==-1))
                    guess++;
                
               if (guess==0)
                   cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
               else
                   cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";
          }else if ((lecc_y_ejer=="L1_Quiz-P1-2.html")||(lecc_y_ejer=="L1_Quiz-P1-2.html#")){
              val=val.split("#");
               guess=0;
                if ((val[0].indexOf("d. graduation party")==-1))
                    guess++;
                
               if (guess==0)
                   cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
               else
                   cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";
          }else if ((lecc_y_ejer=="L1_Quiz-P1-3.html")||(lecc_y_ejer=="L1_Quiz-P1-3.html#")){
              val=val.split("#");
               guess=0;
                if ((val[0].indexOf("a. wedding reception")==-1))
                    guess++;
                
               if (guess==0)
                   cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
               else
                   cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";
          }else if ((lecc_y_ejer=="L1_Quiz-P1-4.html")||(lecc_y_ejer=="L1_Quiz-P1-4.html#")){
              val=val.split("#");
               guess=0;
                if ((val[0].indexOf("c. farewell party")==-1))
                    guess++;
                
               if (guess==0)
                   cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
               else
                   cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";
          }else if ((lecc_y_ejer=="L1_Quiz-P1-B-1.html")||(lecc_y_ejer=="L1_Quiz-P1-B-1.html#")){
              val=val.split("#");
                
               if (val[0]=="party food")
                   cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
               else
                   cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";
          }else if ((lecc_y_ejer=="L1_Quiz-P1-B-2.html")||(lecc_y_ejer=="L1_Quiz-P1-B-2.html#")){
              val=val.split("#");
                
               if (val[0]=="chips")
                   cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
               else
                   cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";
          }else if ((lecc_y_ejer=="L1_Quiz-P1-B-3.html")||(lecc_y_ejer=="L1_Quiz-P1-B-3.html#")){
              val=val.split("#");
                
               if (val[0]=="electronic music")
                   cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
               else
                   cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";
          }else if ((lecc_y_ejer=="L1_Quiz-P1-B-4.html")||(lecc_y_ejer=="L1_Quiz-P1-B-4.html#")){
              val=val.split("#");
                
               if (val[0]=="coffee")
                   cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
               else
                   cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";
          }else if ((lecc_y_ejer=="L1_Quiz-P1-B-5.html")||(lecc_y_ejer=="L1_Quiz-P1-B-5.html#")){
              val=val.split("#");
                
               if (val[0]=="pop")
                   cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
               else
                   cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";
          }else if ((lecc_y_ejer=="L1_Quiz-P1-B-6.html")||(lecc_y_ejer=="L1_Quiz-P1-B-6.html#")){
              val=val.split("#");
                
               if (val[0]=="wine")
                   cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
               else
                   cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";
          }else if ((lecc_y_ejer=="L1_Quiz-P1-B-7.html")||(lecc_y_ejer=="L1_Quiz-P1-B-7.html#")){
              val=val.split("#");
                
               if (val[0]=="ice cream")
                   cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
               else
                   cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";
          }else if ((lecc_y_ejer=="L1_Quiz-P2.html")||(lecc_y_ejer=="L1_Quiz-P2.html#")){
              val=val.split("#");
               guess=0;
               p[0]=reconocer_palabra(val[0])
               p[1]=reconocer_palabra(val[1])
               p[2]=reconocer_palabra(val[2])
               p[3]=reconocer_palabra(val[3])
               p[4]=reconocer_palabra(val[4])
               p[5]=reconocer_palabra(val[5])
               p[6]=reconocer_palabra(val[6]) 
                if ((val[0].indexOf("any")!=-1)&&(p[0].length==3)){
                        $(".check[reference=1]").attr("src","../img/good.png")
                    }else{
                        guess++;
                        $(".check[reference=1]").attr("src","../img/good_No.png")
                    }
                if ((val[1].indexOf("a")!=-1)&&(p[1].length==1)){
                        $(".check[reference=2]").attr("src","../img/good.png")
                    }else{
                        guess++;
                        $(".check[reference=2]").attr("src","../img/good_No.png")
                    }
                if ((val[2].indexOf("some")!=-1)&&(p[2].length==4)){
                        $(".check[reference=3]").attr("src","../img/good.png")
                    }else{
                        guess++;
                        $(".check[reference=3]").attr("src","../img/good_No.png")
                    }
                if ((val[3].indexOf("any")!=-1)&&(p[3].length==3)){
                        $(".check[reference=4]").attr("src","../img/good.png")
                    }else{
                        guess++;
                        $(".check[reference=4]").attr("src","../img/good_No.png")
                    }
                if ((val[4].indexOf("a")!=-1)&&(p[4].length==1)){
                        $(".check[reference=5]").attr("src","../img/good.png")
                    }else{
                        guess++;
                        $(".check[reference=5]").attr("src","../img/good_No.png")
                    }
                if ((val[5].indexOf("a")!=-1)&&(p[5].length==1)){
                        $(".check[reference=6]").attr("src","../img/good.png")
                    }else{
                        guess++;
                        $(".check[reference=6]").attr("src","../img/good_No.png")
                    }
                if ((val[6].indexOf("any")!=-1)&&(p[6].length==3)){
                        $(".check[reference=7]").attr("src","../img/good.png")   
                    }else{
                        guess++;
                        $(".check[reference=7]").attr("src","../img/good_No.png")
                    }
               if (guess==0)
                   cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
               else
                   cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";
          }else if((lecc_y_ejer=="L2_exer_4.html")||(lecc_y_ejer=="L2_exer_4.html#")){
              val=val.split("#");
              i=val.length-1;
            //  alert(val[val.length-1])
              guess=0;
               if (val[i]=="../img/btn_Going_Yes_2.png"){
                        $(".check[reference=1]").attr("src","../img/good.png")
                   }else{
                        guess++;
                        $(".check[reference=1]").attr("src","../img/good_No.png")
                   }
               if (val[i-1]=="../img/btn_no_sure_2.png"){
                        $(".check[reference=2]").attr("src","../img/good.png")
                   }else{
                        guess++;
                        $(".check[reference=2]").attr("src","../img/good_No.png")
                   }
               if (val[i-2]=="../img/btn_Going_Yes_2.png"){
                        $(".check[reference=3]").attr("src","../img/good.png")
                   }else{
                        guess++;
                        $(".check[reference=3]").attr("src","../img/good_No.png")
                   }
               if (val[i-3]=="../img/btn_Going_Yes_2.png"){
                        $(".check[reference=4]").attr("src","../img/good.png")
                   }else{
                        guess++;
                        $(".check[reference=4]").attr("src","../img/good_No.png")
                   }
               if (val[i-4]=="../img/btn_no_sure_2.png"){
                        $(".check[reference=5]").attr("src","../img/good.png")
                   }else{
                        guess++;
                        $(".check[reference=5]").attr("src","../img/good_No.png")
                   }
               if (val[i-5]=="../img/btn_Going_No_2.png"){
                        $(".check[reference=6]").attr("src","../img/good.png")
                    }else{
                        guess++;
                        $(".check[reference=6]").attr("src","../img/good_No.png")
                    }
                    
               if (guess==0)
                   cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
               else
                   cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";
          }else if((lecc_y_ejer=="L2_exer_7-1.html")||(lecc_y_ejer=="L2_exer_7-1.html#")){
              val=val.split("#")
                if(val[0].indexOf("a. sure")!=-1)
                    cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
                else
                    cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";      
          }else if((lecc_y_ejer=="L2_exer_7-2.html")||(lecc_y_ejer=="L2_exer_7-2.html#")){
              val=val.split("#")
                if(val[0].indexOf("oh")!=-1 && val[0].indexOf("thanks")!=-1 && val[0].indexOf("but")!=-1  && val[0].indexOf("on")!=-1 && val[0].indexOf("a")!=-1 && val[0].indexOf("diet")!=-1)
                    cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
                else
                    cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";      
          }else if((lecc_y_ejer=="L2_exer_7-3.html")||(lecc_y_ejer=="L2_exer_7-3.html#")){
              val=val.split("#")
                if(val[0]==("a. oh, thanks but i'm saving room for dessert."))
                    cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
                else
                    cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";      
          }else if((lecc_y_ejer=="L2_exer_7-4.html")||(lecc_y_ejer=="L2_exer_7-4.html#")){
              val=val.split("#")
                if(val[0].indexOf("a. sure")!=-1)
                    cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
                else
                    cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";      
          }else if((lecc_y_ejer=="L2_exer_7-5.html")||(lecc_y_ejer=="L2_exer_7-5.html#")){
              val=val.split("#")
                if(val[0]=="b.  oh, thanks, i love cake.")
                    cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
                else
                    cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";      
          }else if((lecc_y_ejer=="L2_exer_9-1.html")||(lecc_y_ejer=="L2_exer_9-1.html#")){
              val=val.split("#")
                if(val[0].indexOf("b. would")!=-1)
                    cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
                else
                    cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";      
          }else if((lecc_y_ejer=="L2_exer_9-2.html")||(lecc_y_ejer=="L2_exer_9-2.html#")){
              val=val.split("#")
                if(val[0].indexOf("b. want")!=-1)
                    cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
                else
                    cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";      
          }else if((lecc_y_ejer=="L2_exer_9-3.html")||(lecc_y_ejer=="L2_exer_9-3.html#")){
              val=val.split("#")
                if(val[0]==("c. do"))
                    cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
                else
                    cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";      
          }else if((lecc_y_ejer=="L2_exer_9-4.html")||(lecc_y_ejer=="L2_exer_9-4.html#")){
              val=val.split("#")
                if(val[0].indexOf("a. do")!=-1)
                    cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
                else
                    cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";      
          }else if((lecc_y_ejer=="L2_exer_9-5.html")||(lecc_y_ejer=="L2_exer_9-5.html#")){
              val=val.split("#")
                if(val[0].indexOf("like")!=-1)
                    cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
                else
                    cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";      
          }else if((lecc_y_ejer=="L2_Quiz_P1-1.html")||(lecc_y_ejer=="L2_Quiz_P1-1.html#")){
              val=val.split("#")
                if(val[0].indexOf("i'd") && val[0].indexOf("love")!=-1 && val[0].indexOf("to")!=-1 && val[0].indexOf("but")!=-1 && val[0].indexOf("i")!=-1 && val[0].indexOf("might")!=-1 && val[0].indexOf("be")!=-1 && val[0].indexOf("out")!=-1 && val[0].indexOf("of")!=-1 && val[0].indexOf("town")!=-1)
                    cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
                else
                    cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";      
          }else if((lecc_y_ejer=="L2_Quiz_P1-2.html")||(lecc_y_ejer=="L2_Quiz_P1-2.html#")){
              val=val.split("#")
                if(val[0].indexOf("sure")!=-1)
                    cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
                else
                    cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";      
          }else if((lecc_y_ejer=="L2_Quiz_P1-3.html")||(lecc_y_ejer=="L2_Quiz_P1-3.html#")){
              val=val.split("#")
                if(val[0].indexOf("sure")!=-1)
                    cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
                else
                    cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";      
          }else if((lecc_y_ejer=="L2_Quiz_P1-4.html")||(lecc_y_ejer=="L2_Quiz_P1-4.html#")){
              val=val.split("#")
                if(val[0].indexOf("i'd love to, but let me talk to my boss")!=-1)
                    cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
                else
                    cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";      
          }else if((lecc_y_ejer=="L2_Quiz_P1-5.html")||(lecc_y_ejer=="L2_Quiz_P1-5.html#")){
              val=val.split("#")
                if(val[0].indexOf("sure")!=-1)
                    cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
                else
                    cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";      
          }else if((lecc_y_ejer=="L3_exer_3a.html")||(lecc_y_ejer=="L3_exer_3a.html#")){
              val=val.split("#")
                if(val[0].indexOf("all of the above")!=-1)
                    cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
                else
                    cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";      
          }else if((lecc_y_ejer=="L3_exer_3b.html")||(lecc_y_ejer=="L3_exer_3b.html#")){
              val=val.split("#")
              p[0]=reconocer_palabra(val[0])
                if(val[0].indexOf("no")!=-1 && p[0].length==4)
                    cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
                else
                    cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";      
          }else if((lecc_y_ejer=="L3_exer_3c.html")||(lecc_y_ejer=="L3_exer_3c.html#")){
              val=val.split("#")
                if(val[0].indexOf("people started fighting")!=-1)
                    cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
                else
                    cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";      
          }else if((lecc_y_ejer=="L3_exer_3d.html")||(lecc_y_ejer=="L3_exer_3d.html#")){
              val=val.split("#")
                if(val[0].indexOf("talked")!=-1)
                    cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
                else
                    cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";      
          }else if((lecc_y_ejer=="L3_exer_3e.html")||(lecc_y_ejer=="L3_exer_3e.html#")){
              val=val.split("#")
                if(val[0].indexOf("no, she didn't")!=-1)
                    cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
                else
                    cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";      
          }else if((lecc_y_ejer=="L3_exer_3f.html")||(lecc_y_ejer=="L3_exer_3f.html#")){
              val=val.split("#")
                if(val[0].indexOf("she went home")!=-1)
                    cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
                else
                    cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";      
          }else if((lecc_y_ejer=="L3_exer_3g.html")||(lecc_y_ejer=="L3_exer_3g.html#")){
              val=val.split("#")
                if(val[0].indexOf("he talked and got drunk")!=-1)
                    cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
                else
                    cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";      
          }else if((lecc_y_ejer=="L3_exer_3h.html")||(lecc_y_ejer=="L3_exer_3h.html#")){
              val=val.split("#")
                if(val[0].indexOf("yes, they did")!=-1)
                    cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
                else
                    cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";      
          }else if((lecc_y_ejer=="L3_exer_3i.html")||(lecc_y_ejer=="L3_exer_3i.html#")){
              val=val.split("#")
                if(val[0].indexOf("all of the above")!=-1)
                    cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
                else
                    cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";      
          }else if((lecc_y_ejer=="L3_exer_5-1.html")||(lecc_y_ejer=="L3_exer_5-1.html#")){

                if(val=="2")
                    cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
                else
                    cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";      
          }else if((lecc_y_ejer=="L3_exer_5-2.html")||(lecc_y_ejer=="L3_exer_5-2.html#")){

                if(val=="3")
                    cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
                else
                    cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";      
          }else if((lecc_y_ejer=="L3_exer_5-3.html")||(lecc_y_ejer=="L3_exer_5-3.html#")){

                if(val=="2")
                    cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
                else
                    cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";      
          }else if((lecc_y_ejer=="L3_exer_5-4.html")||(lecc_y_ejer=="L3_exer_5-4.html#")){

                if(val=="2")
                    cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
                else
                    cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";      
          }else if((lecc_y_ejer=="L3_exer_5-5.html")||(lecc_y_ejer=="L3_exer_5-5.html#")){

                if(val=="2")
                    cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
                else
                    cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";      
          }else if((lecc_y_ejer=="L3_exer_5-6.html")||(lecc_y_ejer=="L3_exer_5-6.html#")){

                if(val=="2")
                    cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
                else
                    cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";      
          }else if((lecc_y_ejer=="L3_exer_5-7.html")||(lecc_y_ejer=="L3_exer_5-7.html#")){

                if(val=="2")
                    cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
                else
                    cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";      
          }else if((lecc_y_ejer=="L3_exer_5-8.html")||(lecc_y_ejer=="L3_exer_5-8.html#")){

                if(val=="1")
                    cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
                else
                    cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";      
          }else if((lecc_y_ejer=="L3_exer_5-9.html")||(lecc_y_ejer=="L3_exer_5-9.html#")){

                if(val=="2")
                    cod="<img src='../img/good.png' width='30' height='30' class='notif'/>";
                else
                    cod="<img src='../img/good_No.png' width='30' height='30' class='notif'/>";      
          }

         $(".notif").html(cod);
         cod="";
        // val="";
        }else{
            alert("You must select an answer!")
        }
       }
     })

     $("#ver_respuesta").click(function(){//Funcion que se ejecuta una vez se de click en el a de ver respuesta
     //    alert($("#ver_respuesta").attr("href"))
        if ($("#ver_respuesta").attr("href")=="#"){
         //Codigo para ver la respuesta
           $("#aprobar").attr("onmouseover","")
           $("#aprobar").attr("onmouseout","")
           $("#aprobar").removeAttr("href")
          if ((lecc_y_ejer=="L1_exer_1-1.html")||(lecc_y_ejer=="L1_exer_1-1.html#")){
              $("#select5").attr("value","birthday")
          }else if ((lecc_y_ejer=="L1_exer_1-2.html")||(lecc_y_ejer=="L1_exer_1-2.html#")){
              $("#select5").attr("value","farewell")
          }else if ((lecc_y_ejer=="L1_exer_1-3.html")||(lecc_y_ejer=="L1_exer_1-3.html#")){
              $("#select5").attr("value","wedding reception")
          }else if ((lecc_y_ejer=="L1_exer_1-4.html")||(lecc_y_ejer=="L1_exer_1-4.html#")){
              $("#select5").attr("value","baby shower")
          }else if ((lecc_y_ejer=="L1_exer_1-5.html")||(lecc_y_ejer=="L1_exer_1-5.html#")){
              $("#select5").attr("value","surprise")
          }else if ((lecc_y_ejer=="L1_exer_4-1.html")||(lecc_y_ejer=="L1_exer_4-1.html#")){
              $("#select5").attr("value","beer")
          }else if ((lecc_y_ejer=="L1_exer_4-2.html")||(lecc_y_ejer=="L1_exer_4-2.html#")){
              $("#select5").attr("value","ice cream")
          }else if ((lecc_y_ejer=="L1_exer_4-3.html")||(lecc_y_ejer=="L1_exer_4-3.html#")){
              $("#select5").attr("value","drink")
          }else if ((lecc_y_ejer=="L1_exer_4-4.html")||(lecc_y_ejer=="L1_exer_4-4.html#")){
              $("#select5").attr("value","cake")
          }else if ((lecc_y_ejer=="L1_exer_4-5.html")||(lecc_y_ejer=="L1_exer_4-5.html#")){
              $("#select5").attr("value","chips")
          }else if ((lecc_y_ejer=="L1_exer_6-1.html")||(lecc_y_ejer=="L1_exer_6-1.html#")){
              $("#textfield").attr("value","d. wine")
          }else if ((lecc_y_ejer=="L1_exer_6-2.html")||(lecc_y_ejer=="L1_exer_6-2.html#")){
              $("#textfield").attr("value","a.birthday party")
          }else if ((lecc_y_ejer=="L1_exer_6-3.html")||(lecc_y_ejer=="L1_exer_6-3.html#")){
              $("#textfield").attr("value","c. beer");
          }else if ((lecc_y_ejer=="L1_exer_6-4.html")||(lecc_y_ejer=="L1_exer_6-4.html#")){
              $("#textfield").attr("value","d. a baby shower ");
          }else if ((lecc_y_ejer=="L1_exer_6-5.html")||(lecc_y_ejer=="L1_exer_6-5.html#")){
              $("#textfield").attr("value","b. beer and wine");
          }else if ((lecc_y_ejer=="L1_exer_6-6.html")||(lecc_y_ejer=="L1_exer_6-6.html#")){
              $("#textfield").attr("value","a. a little get together");
          }else if ((lecc_y_ejer=="L1_exer_6-7.html")||(lecc_y_ejer=="L1_exer_6-7.html#")){
              $("#textfield").attr("value","a. He is.");
          }else if ((lecc_y_ejer=="L1_exer_10.html")||(lecc_y_ejer=="L1_exer_10.html#")){
                $("#select5").attr("value","water")
                $("#select6").attr("value","some cheese")
                $("#select7").attr("value","cookies")
                $("#select8").attr("value","a cup of coffee")
                $("#select9").attr("value","glasses")
                $("#select10").attr("value","ice cream")
                $("#select11").attr("value","sandwiches")
                $("#select12").attr("value","cartons of milk")
                $("#select13").attr("value","tea")
                $("#select14").attr("value","wine")
          }else if ((lecc_y_ejer=="L1_exer_12-1.html")||(lecc_y_ejer=="L1_exer_12-1.html#")){
              $("#textfield").attr("value","c. any");
          }else if ((lecc_y_ejer=="L1_exer_12-2.html")||(lecc_y_ejer=="L1_exer_12-2.html#")){
              $("#textfield").attr("value","a. some");
          }else if ((lecc_y_ejer=="L1_exer_12-3.html")||(lecc_y_ejer=="L1_exer_12-3.html#")){
              $("#textfield").attr("value","c. need some ");
          }else if ((lecc_y_ejer=="L1_exer_12-4.html")||(lecc_y_ejer=="L1_exer_12-4.html#")){
              $("#textfield").attr("value","b. don't");
          }else if ((lecc_y_ejer=="L1_exer_12-5.html")||(lecc_y_ejer=="L1_exer_12-5.html#")){
              $("#textfield").attr("value","d. any");
          }else if ((lecc_y_ejer=="L1_Quiz-P1-1.html")||(lecc_y_ejer=="L1_Quiz-P1-1.html#")){
              $("#textfield").attr("value","b. get together");
          }else if ((lecc_y_ejer=="L1_Quiz-P1-2.html")||(lecc_y_ejer=="L1_Quiz-P1-2.html#")){
              $("#textfield").attr("value","d. graduation party");
          }else if ((lecc_y_ejer=="L1_Quiz-P1-3.html")||(lecc_y_ejer=="L1_Quiz-P1-3.html#")){
              $("#textfield").attr("value","a. wedding reception");
          }else if ((lecc_y_ejer=="L1_Quiz-P1-4.html")||(lecc_y_ejer=="L1_Quiz-P1-4.html#")){
              $("#textfield").attr("value","c. farewell party");
          }else if ((lecc_y_ejer=="L1_Quiz-P1-B-1.html")||(lecc_y_ejer=="L1_Quiz-P1-B-1.html#")){
              $("#textfield").attr("value","party food");
          }else if ((lecc_y_ejer=="L1_Quiz-P1-B-2.html")||(lecc_y_ejer=="L1_Quiz-P1-B-2.html#")){
              $("#textfield").attr("value","chips");
          }else if ((lecc_y_ejer=="L1_Quiz-P1-B-3.html")||(lecc_y_ejer=="L1_Quiz-P1-B-3.html#")){
              $("#textfield").attr("value","electronic music");
          }else if ((lecc_y_ejer=="L1_Quiz-P1-B-4.html")||(lecc_y_ejer=="L1_Quiz-P1-B-4.html#")){
              $("#textfield").attr("value","coffee");
          }else if ((lecc_y_ejer=="L1_Quiz-P1-B-5.html")||(lecc_y_ejer=="L1_Quiz-P1-B-5.html#")){
              $("#textfield").attr("value","pop");
          }else if ((lecc_y_ejer=="L1_Quiz-P1-B-6.html")||(lecc_y_ejer=="L1_Quiz-P1-B-6.html#")){
              $("#textfield").attr("value","wine");
          }else if ((lecc_y_ejer=="L1_Quiz-P1-B-7.html")||(lecc_y_ejer=="L1_Quiz-P1-B-7.html#")){
              $("#textfield").attr("value","ice cream");
          }else if((lecc_y_ejer=="L1_Quiz-P2.html")||(lecc_y_ejer=="L1_Quiz-P2.html#")){
              $("#textfield").attr("value","any")
              $("#textfield2").attr("value","a")
              $("#textfield3").attr("value","some")
              $("#textfield4").attr("value","any")
              $("#textfield5").attr("value","a")
              $("#textfield6").attr("value","a")
              $("#textfield7").attr("value","any")
          }else if((lecc_y_ejer=="L2_exer_4.html")||(lecc_y_ejer=="L2_exer_4.html#")){
              val=$(".going[reference=1]").attr("src","../img/btn_Going_Yes_2.png")
              val=$(".notsure[reference=2]").attr("src","../img/btn_no_sure_2.png")
              val=$(".going[reference=3]").attr("src","../img/btn_Going_Yes_2.png")
              val=$(".going[reference=4]").attr("src","../img/btn_Going_Yes_2.png")
              val=$(".notsure[reference=5]").attr("src","../img/btn_no_sure_2.png")
              val=$(".nogo[reference=6]").attr("src","../img/btn_Going_No_2.png")
          }else if ((lecc_y_ejer=="L2_exer_7-1.html")||(lecc_y_ejer=="L2_exer_7-1.html#")){
              $("#textfield").attr("value","a. Sure");         
          }else if ((lecc_y_ejer=="L2_exer_7-2.html")||(lecc_y_ejer=="L2_exer_7-2.html#")){
              $("#textfield").attr("value","b. Oh, thanks but I'm on a diet.");
          }else if ((lecc_y_ejer=="L2_exer_7-3.html")||(lecc_y_ejer=="L2_exer_7-3.html#")){
              $("#textfield").attr("value","a. Oh, thanks but I'm saving room for dessert.");
          }else if ((lecc_y_ejer=="L2_exer_7-4.html")||(lecc_y_ejer=="L2_exer_7-4.html#")){
              $("#textfield").attr("value","a. Sure");
          }else if ((lecc_y_ejer=="L2_exer_7-5.html")||(lecc_y_ejer=="L2_exer_7-5.html#")){
              $("#textfield").attr("value","b.  Oh, thanks, I love cake.");
          }else if ((lecc_y_ejer=="L2_exer_9-1.html")||(lecc_y_ejer=="L2_exer_9-1.html#")){
              $("#textfield").attr("value","b. Would");         
          }else if ((lecc_y_ejer=="L2_exer_9-2.html")||(lecc_y_ejer=="L2_exer_9-2.html#")){
              $("#textfield").attr("value","b. want");
          }else if ((lecc_y_ejer=="L2_exer_9-3.html")||(lecc_y_ejer=="L2_exer_9-3.html#")){
              $("#textfield").attr("value","c. Do");
          }else if ((lecc_y_ejer=="L2_exer_9-4.html")||(lecc_y_ejer=="L2_exer_9-4.html#")){
              $("#textfield").attr("value","a. Do");
          }else if ((lecc_y_ejer=="L2_exer_9-5.html")||(lecc_y_ejer=="L2_exer_9-5.html#")){
              $("#textfield").attr("value","c. like ");
          }else if ((lecc_y_ejer=="L2_Quiz_P1-1.html")||(lecc_y_ejer=="L2_Quiz_P1-1.html#")){
              $("#textfield").attr("value","b. I'd love to but I might be out of town");         
          }else if ((lecc_y_ejer=="L2_Quiz_P1-2.html")||(lecc_y_ejer=="L2_Quiz_P1-1.html#")){
              $("#textfield").attr("value","c. Sure.");
          }else if ((lecc_y_ejer=="L2_Quiz_P1-3.html")||(lecc_y_ejer=="L2_Quiz_P1-3.html#")){
              $("#textfield").attr("value","b. Sure");
          }else if ((lecc_y_ejer=="L2_Quiz_P1-4.html")||(lecc_y_ejer=="L2_Quiz_P1-4.html#")){
              $("#textfield").attr("value","d. I'd love to, but let me talk to my boss.");
          }else if ((lecc_y_ejer=="L2_Quiz_P1-5.html")||(lecc_y_ejer=="L2_Quiz_P1-5.html#")){
              $("#textfield").attr("value","a. Sure ");
          }else if ((lecc_y_ejer=="L3_exer_3a.html")||(lecc_y_ejer=="L3_exer_3a.html#")){
              $("#textfield").attr("value","d. all of the above");         
          }else if ((lecc_y_ejer=="L3_exer_3b.html")||(lecc_y_ejer=="L3_exer_3b.html#")){
              $("#textfield").attr("value","b. No");
          }else if ((lecc_y_ejer=="L3_exer_3c.html")||(lecc_y_ejer=="L3_exer_3c.html#")){
              $("#textfield").attr("value","c. People started fighting");
          }else if ((lecc_y_ejer=="L3_exer_3d.html")||(lecc_y_ejer=="L3_exer_3d.html#")){
              $("#textfield").attr("value","b. talked");
          }else if ((lecc_y_ejer=="L3_exer_3e.html")||(lecc_y_ejer=="L3_exer_3e.html#")){
              $("#textfield").attr("value","b. No, she didn't");
          }else if ((lecc_y_ejer=="L3_exer_3f.html")||(lecc_y_ejer=="L3_exer_3f.html#")){
              $("#textfield").attr("value","d. She went home");         
          }else if ((lecc_y_ejer=="L3_exer_3g.html")||(lecc_y_ejer=="L3_exer_3g.html#")){
              $("#textfield").attr("value","a. He talked and got drunk.");
          }else if ((lecc_y_ejer=="L3_exer_3h.html")||(lecc_y_ejer=="L3_exer_3h.html#")){
              $("#textfield").attr("value","a. Yes, they did");
          }else if ((lecc_y_ejer=="L3_exer_3i.html")||(lecc_y_ejer=="L3_exer_3i.html#")){
              $("#textfield").attr("value","d. all of the above");
          }else if((lecc_y_ejer=="L3_exer_5-1.html")||(lecc_y_ejer=="L3_exer_5-1.html#")){
              val=$("#imagen").css("display", "block")
              $(".resp[reference=2]").attr("src", "../img/check2.png")
              $(".resp[reference=2]").unbind("mouseover",res_resp)
              $(".resp[reference=2]").unbind("mouseout",nor_resp)
          }else if((lecc_y_ejer=="L3_exer_5-2.html")||(lecc_y_ejer=="L3_exer_5-2.html#")){
              val=$("#imagen").css("display", "block")
              $(".resp[reference=3]").attr("src", "../img/preg2.png")
              $(".resp[reference=3]").unbind("mouseover",res_resp)
              $(".resp[reference=3]").unbind("mouseout",nor_resp)
          }else if((lecc_y_ejer=="L3_exer_5-3.html")||(lecc_y_ejer=="L3_exer_5-3.html#")){
              val=$("#imagen").css("display", "block")
              $(".resp[reference=2]").attr("src", "../img/check2.png")
              $(".resp[reference=2]").unbind("mouseover",res_resp)
              $(".resp[reference=2]").unbind("mouseout",nor_resp)
          }else if((lecc_y_ejer=="L3_exer_5-4.html")||(lecc_y_ejer=="L3_exer_5-4.html#")){
              val=$("#imagen").css("display", "block")
              $(".resp[reference=2]").attr("src", "../img/check2.png")
              $(".resp[reference=2]").unbind("mouseover",res_resp)
              $(".resp[reference=2]").unbind("mouseout",nor_resp)
          }else if((lecc_y_ejer=="L3_exer_5-5.html")||(lecc_y_ejer=="L3_exer_5-5.html#")){
              val=$("#imagen").css("display", "block")
              $(".resp[reference=2]").attr("src", "../img/check2.png")
              $(".resp[reference=2]").unbind("mouseover",res_resp)
              $(".resp[reference=2]").unbind("mouseout",nor_resp)
          }else if((lecc_y_ejer=="L3_exer_5-6.html")||(lecc_y_ejer=="L3_exer_5-6.html#")){
              val=$("#imagen").css("display", "block")
              $(".resp[reference=2]").attr("src", "../img/check2.png")
          }else if((lecc_y_ejer=="L3_exer_5-7.html")||(lecc_y_ejer=="L3_exer_5-7.html#")){
              val=$("#imagen").css("display", "block")
              $(".resp[reference=2]").attr("src", "../img/check2.png")
              $(".resp[reference=2]").unbind("mouseover",res_resp)
              $(".resp[reference=2]").unbind("mouseout",nor_resp)
          }else if((lecc_y_ejer=="L3_exer_5-8.html")||(lecc_y_ejer=="L3_exer_5-8.html#")){
              val=$("#imagen").css("display", "block")
              $(".resp[reference=1]").attr("src", "../img/chulo2.png")
              $(".resp[reference=1]").unbind("mouseover",res_resp)
              $(".resp[reference=1]").unbind("mouseout",nor_resp)
          }else if((lecc_y_ejer=="L3_exer_5-9.html")||(lecc_y_ejer=="L3_exer_5-9.html#")){
              val=$("#imagen").css("display", "block")
              $(".resp[reference=2]").attr("src", "../img/check2.png")
              $(".resp[reference=2]").unbind("mouseover",res_resp)
              $(".resp[reference=2]").unbind("mouseout",nor_resp)
          }
           //
          $("#Image24").attr("src", "../img/8.btn_chulito_desab.png")
           cod="";
          $(".notif").html(cod);
          
        }
     })
})

/* Quiz Part 2 */

