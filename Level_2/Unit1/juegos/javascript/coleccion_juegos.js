/* 
 * Coleccion de juegos

    Para localizar el codigo de cada juego:
    Juego 1: JUEGO 1 LECCION 1
    Juego 2: JUEGO 2 LECCION 1
    Juego 3: JUEGO 1 LECCION 2
    Juego 4: JUEGO 2 LECCION 2
    Juego 5: JUEGO 1 LECCION 3
 *
 --------------------------- JUEGO 1 LECCION 1 ---------------------------*/
var Juego_1_L1=function(){//Codigo del juego 1 leccion 1- Contentration.
    /*Instrucciones:
     * 
     *You have to choose two cards out of the card group, once you choose two cards
     *if the cards are not the same, they lay back again. You must beware of matching
     *two skulls before matching all the cards otherwise the game will restart. The 
     *skulls must be matched at the very end of each level.  You loose when you get 6 or more hits
     *The game consists of two levels.
     *
     */
    var frame_rate=1000/24;
    var context,fondo,vida_juego,carta_respaldo,gano,perdio,instructivo,calavera,nuevo;
    var activo=false,ganador=false,perdedor=false,reinicio=false;
    var cartas=[],temporal_cartas=[],ubicacion_cartas=[],numeros_cartas=[0,1,2,3,4,5,6,7,8,9],destapadas=[],correctas=[],carta_destapada_x=[],carta_destapada_y=[],carta_correcta_x=[],carta_correcta_y=[],cartas_correcta=[];
    var palabras=["graduation party","birthday party","wedding","wedding reception","baby shower","a surprise party","cocktail party","a get together","dinner party","house warming"];
    var cartas_x=[35,148,261,374],cartas_y=[22,121,220,319,418];//Coordenadas cartas
    var swidth_fondo=800, sheight_fondo=460,width_fondo=swidth_fondo,height_fondo=sheight_fondo,sx=0,sy=0;
    var swidth_carta=113, sheight_carta=99,width_carta=swidth_carta,height_carta=sheight_carta;
    var swidth_anuncio=361,sheight_anuncio=115,width_anuncio=swidth_anuncio,height_anuncio=sheight_anuncio,x_anuncio=200,y_anuncio=200,nivel_actual=1;
    var swidth_instructivo=471,sheight_instructivo=172,width_instructivo=swidth_instructivo,height_instructivo=sheight_instructivo;
    var swidth_calavera=143,sheight_calavera=148,width_calavera=swidth_calavera,height_calavera=sheight_calavera;
    var swidth_nuevo=115,sheight_nuevo=34,width_nuevo=swidth_nuevo,height_nuevo=sheight_nuevo;
    var carta=0,x_click=0,y_click=0,cartas_descubiertas=0,cartas_correctas=0,carta_cubierta_x=0,carta_x=0,carta_y=0,carta_cubierta_y=0,arriba=0,indicador_correcta=0,correcta=0,intentos=0,fade=0.01,x_calavera=0,y_calavera=0,reiniciadas=0;
    var onLoad=function(){
            /*Objeto para dibujar el fondo*/
        context.globalAlpha = 1;
        context.drawImage(fondo,sx,sy,swidth_fondo,sheight_fondo,0,0,width_fondo,height_fondo);
    };  
    var onLoadCarta=function(){
           /*Objeto para dibujar las cartas*/
        context.drawImage(cartas[carta],sx,sy,swidth_carta,sheight_carta,cartas_x[carta_x],cartas_y[carta_y],width_carta,height_carta);
    };
    var onLoadCartaRespaldo=function(){
           /*Objeto para dibujar las cartas*/
        context.drawImage(carta_respaldo,sx,sy,swidth_carta,sheight_carta,cartas_x[carta_cubierta_x],cartas_y[carta_cubierta_y],width_carta,height_carta);
    };
    var onLoadPierde=function(){
        /*Objeto para dibujar el enunciado de pierde*/
        context.drawImage(perdio,sx,sy,swidth_anuncio,sheight_anuncio,x_anuncio,y_anuncio,width_anuncio,height_anuncio);
    };
    var onLoadGana=function(){
        /*Objeto para dibujar el enunciado de gana*/
        context.drawImage(gano,sx,sy,swidth_anuncio,sheight_anuncio,x_anuncio,y_anuncio,width_anuncio,height_anuncio);
    };
    var onLoadInstructivo=function(){
        /*Objeto para dibujar el enunciado con el instructivo inicial*/
        context.globalAlpha = 0.9;
        context.drawImage(instructivo,sx,sy,swidth_instructivo,sheight_instructivo,x_anuncio,y_anuncio,width_instructivo,height_instructivo);
    };
    var onLoadCalavera=function(){
        /*Objeto para dibujar la calavera en reinicio*/
        context.globalAlpha = fade;
        context.drawImage(calavera,sx,sy,swidth_calavera,sheight_calavera,x_calavera,y_calavera,width_calavera,height_calavera);
    };
    var onLoadNuevoIntento=function(){
        /*Objeto para dibujar el boton de reiniciar el juego totalmente*/
        context.globalAlpha = 1;
        context.drawImage(nuevo,sx,sy,swidth_nuevo,sheight_nuevo,390,200,width_nuevo,height_nuevo);
    };
    var Setup=function(){
            /*Objeto para dar inicio al juego*/ 

            var div = document.getElementById("contenido_swf");
            var canvas = document.createElement("canvas");
            context= canvas.getContext('2d');
            canvas.width = 800;
            canvas.height = 460;
            fondo=new Image();
            fondo.onload=onLoadPierde;
            fondo.src="imagenes/L1_game_1/fondo_1.png";
            perdio= new Image();
            perdio.onload=onLoadPierde;
            perdio.src="imagenes/L1_game_1/lose.png";
            gano= new Image();
            gano.onload=onLoadGana;
            gano.src="imagenes/L1_game_1/win.png";
            calavera=new Image();
            calavera.onload=onLoadCalavera;
            calavera.src="imagenes/L1_game_1/calavera.png";
            carta_respaldo=new Image();
            carta_respaldo.onload=onLoadCartaRespaldo;
            carta_respaldo.src="imagenes/L1_game_1/respaldocartas.png";
            instructivo= new Image();
            instructivo.onload=onLoadInstructivo;
            instructivo.src="imagenes/L1_game_1/instrucciones.png";
            nuevo=new Image();
            nuevo.onload=onLoadNuevoIntento;
            nuevo.src="imagenes/L1_game_1/try-again.png";

            for (var i=0;i<11;i++){
                cartas.push(new Image());
                cartas[i].onload=onLoadCarta;
                cartas[i].src="imagenes/L1_game_1/"+(i+1)+".png";
            }
            cartas.push(new Image());
            cartas[11].onload=onLoadCarta;
            cartas[11].src="imagenes/L1_game_1/11.png";
            generarCartasAleatorias();
            /*Evento para los dispositivos moviles*/
            canvas.addEventListener('touchstart', function(e){ 
                        start(event); 
                        e.preventDefault(); 
            });
            var start=function(event){
                            var recuadro=div.getBoundingClientRect();
                            x_click=(event.touches[0].pageX-Math.round(recuadro.left));
                            y_click=(event.touches[0].pageY-Math.round(recuadro.top));
                            if(activo==true)
                                {destaparCartas();}
                            else if(activo==false)
                                {iniciarJuego();}          
            };
            
            /*Evento para los mouses con pcs*/
            canvas.onmousedown=function(e){
                            var recuadro=div.getBoundingClientRect();
                            x_click=(e.clientX-Math.round(recuadro.left));
                            y_click=(e.clientY-Math.round(recuadro.top));
                            if(activo==true)
                                {destaparCartas();}
                            else if(activo==false)
                                {iniciarJuego();}          
            };
            
            animacion();
            div.appendChild(canvas);//DOM canvas.
        
    };
    var iniciarJuego=function(){
        /*Objeto para iniciar el juego*/
        //document.getElementById("depurar").innerHTML=x_click+" "+y_click;
        if(x_click>198 && x_click<660 && y_click>204 && y_click<370)
            {
                activo=true;ganador=false;perdedor=false;
                if(nivel_actual==2){
                    reinicio=false;
                    ubicacion_cartas=[];
                    ubicar(numeros_cartas);
                }
            }
    };
    var destaparCartas=function(){
        /*Objeto para destapar las cartas una vez cliqueadas*/
        var x=0,y=0,n=0;
        while(y<5){
            
            if(390<x_click && (width_nuevo+390)>x_click && 200<y_click && (height_nuevo+200)>y_click)
            {//Reinicio general.
                    nivel_actual=1;ganador=false;perdedor=false;reinicio=false;
                    fondo.src="imagenes/L1_game_1/fondo_"+nivel_actual+".png";
                    carta_correcta_x=[];carta_correcta_y=[];carta_destapada_y=[];carta_destapada_x=[];
                    correctas=[];cartas_correcta=[];cartas_correctas=0,correcta=0,intentos=0;
                    generarCartasAleatorias();
            }
            if(cartas_x[x]<x_click && cartas_x[x+1]>x_click && cartas_y[y]<y_click && cartas_y[y+1]>y_click){

                if(cartas_descubiertas<2){
                    destapadas.push(ubicacion_cartas[n]);
                    
                    carta_destapada_x.push(x);
                    carta_destapada_y.push(y);
                    
                    if(destapadas.length==2 && destapadas[0]==destapadas[1] && (carta_destapada_x[0]!=carta_destapada_x[1] || carta_destapada_y[0]!=carta_destapada_y[1])){
                        cartas_correctas=cartas_correctas+2;
                        correctas.push(destapadas[0]);
                        correctas.push(destapadas[1]);
                        cartas_correcta.push(destapadas[1]);
                        tx=carta_destapada_x[carta_destapada_x.length-1];
                        tx2=carta_destapada_x[carta_destapada_x.length-2];
                        ty=carta_destapada_y[carta_destapada_y.length-1];
                        ty2=carta_destapada_y[carta_destapada_y.length-2];
                        carta_correcta_x.push(tx);
                        carta_correcta_x.push(tx2);
                        carta_correcta_y.push(ty);
                        carta_correcta_y.push(ty2);
                        correcta++;
                        intentos=intentos-1;
                        
                        if(correcta>=6||(destapadas[0]==10 && destapadas[1]==10))
                            {
                             if(correcta>=6)
                                {nivel_actual++;ganador=true;perdedor=false;activo=false;}
                                carta_correcta_x=[];carta_correcta_y=[];carta_destapada_y=[];carta_destapada_x=[];
                                correctas=[];cartas_correcta=[];cartas_correctas=0,correcta=0,intentos=-1;reinicio=true;
                                x_calavera=x_click,y_calavera=y_click;
                            }
                            
                    }
                }else{
                    if((intentos-correcta)==6){
                        carta_correcta_x=[];carta_correcta_y=[];carta_destapada_y=[];carta_destapada_x=[];temporal_cartas=[]
                        correctas=[];cartas_correctas=0,correcta=0,intentos=0;activo=false;numeros_cartas=[0,1,2,3,4,5,6,7,8,9]
                        ganador=false;perdedor=true;ubicacion_cartas=[];
                        generarCartasAleatorias();
                    }
                    destapadas=[];carta_destapada_x=[];carta_destapada_y=[];
                        
                }
                cartas_descubiertas=(cartas_descubiertas+1)%3;
                intentos=(cartas_descubiertas==2)?intentos+1:intentos;

                break;
            }
            
            x=(x+1)%4;
            y=y+Math.floor(x/3);
            n++;
            n=n-Math.floor(x/3);

        }
    };
    var generarCartasAleatorias=function(){
        /*Objeto para generar posiciones de las cartas aleatoriamente en la mesa*/
        var L=(numeros_cartas.length/2)-1,c=0,l=numeros_cartas.length-1;
        while(L>=0){
            
            c=Math.round(Math.random()*L*2);
            temporal_cartas.push(numeros_cartas[c]);
            numeros_cartas.splice(c,1);
            L--;
            l--;
        }
        ubicar(temporal_cartas);
        
    };
    function ubicar(concatenar){
        /*Funcion para repartir las cartas en la mesa*/
        concatenar.push(10);
        concatenar=concatenar.concat(concatenar);
        var L=(concatenar.length)-1,c=0;
        while(L>=0){

            c=Math.round(Math.random()*L);
            ubicacion_cartas.push(concatenar[c]);
            concatenar.splice(c,1);
            
            L--;

        }
        
    };
    var Dinamicajuego=function(){
        /*Dinamica del juego*/
            requestAnimationFrame(animacion);
            
            onLoad();
            mostrarTexto();
            dibujarCartasRespaldo();
            dibujarCartasCorrectas();
            dibujarCartasBocarriba();
            onLoadNuevoIntento();
            if (activo==false && nivel_actual==1 && perdedor==false)
                {onLoadInstructivo();}
            gana();
            pierde();
            fadeCalavera();
            onLoadCalavera();

    };
    var dibujarCartasRespaldo=function(){
        /*Objeto para dibujar el respaldo de la carta*/
       carta_cubierta_x=0,carta_cubierta_y=0;
        while (carta_cubierta_y<4){

            onLoadCartaRespaldo();
            carta_cubierta_y=carta_cubierta_y+Math.floor(carta_cubierta_x/2);
            carta_cubierta_x=(carta_cubierta_x+1)%3;

        }
    };
    var dibujarCartasBocarriba=function(){
        /*Objeto para dibujar las cartas que fueron cliqueadas y puestas boca arriba*/

        arriba=0;
        while (arriba<cartas_descubiertas){

            carta=destapadas[arriba];
            carta_x=carta_destapada_x[arriba];
            carta_y=carta_destapada_y[arriba];
            onLoadCarta();
            arriba++;

        }
    };
    var dibujarCartasCorrectas=function(){
        /*Objeto para dibujar las cartas que coinciden*/
        indicador_correcta=0;
        while (indicador_correcta<cartas_correctas){
            carta=correctas[indicador_correcta];
            carta_x=carta_correcta_x[indicador_correcta];
            carta_y=carta_correcta_y[indicador_correcta];
            onLoadCarta();
            indicador_correcta++;
        }
    };
    var mostrarTexto=function(){
        /*Objeto para mostrar texto*/
                    context.font="20pt Dimbo Regular";
                    context.fillStyle="#FFF";
                    context.strokeStyle="#FFF";
                    context.fillText(correcta,445,318);
                    context.font="20pt Dimbo Regular";
                    context.fillStyle="#FFF";
                    context.strokeStyle="#FFF";
                    context.fillText((intentos-correcta),445,390);
                    var palabra=0,pos_y=190;
                    
                    while(palabra<(cartas_correctas/2)){
                            context.font="24pt Dimbo Regular";
                            context.fillStyle="#FFF";
                            context.strokeStyle="#FFF";
                            context.fillText(palabras[cartas_correcta[palabra]],570,pos_y);
                            pos_y=pos_y+26;
                            palabra++;
                    }
    };
    var fadeCalavera=function(){
        /*Objeto para el fade in de la calavera*/
            if(reinicio==true && fade<=1 && activo==true){
                fade=fade+0.025;
            }else{
                fade=0.01;
                reinicio=false;
            }
    }
    var gana=function(){
        /*Objeto para la indicacion de que gana el jugador*/
         if(ganador==true){
            onLoadGana();
            fondo.src="imagenes/L1_game_1/fondo_"+nivel_actual+".png";
         }
    };
    var pierde=function(){
        /*Objeto para la indicacion de que pierde el jugador*/
        if(perdedor==true){
            onLoadPierde();
        }
    };
    var animacion=function() {
        /*Objeto para la animacion*/
        vida_juego=setTimeout(Dinamicajuego,frame_rate);
    };
    Setup();//Llamado al objeto de inicio del juego.
    
};

/*----------------------- JUEGO 2 LECCION 1 ---------------------------*/

var Juego_2_L1=function(){//Juego 2 leccion 1 - Laberinto raton.
    /*Instrucciones:
        You must guide the mouse with the cursor to the cheese before it disappears,
        then command the mouse to eat it or skip according to the indications of the level
    */

    var regiones={/*JSON para Limites de las paredes*/
        1:[
            {1:[0,35]},
            {1:[[87,383],[87,383]]},
            {2:[30,781]},
            {2:[[55,60],[55,60]]},
            {3:[62,67]},
            {3:[[55,348],[55,348]]},
            {4:[35,746]},
            {4:[[378,383],[378,383]]},
            {5:[67,182]},
            {5:[[343,348],[343,348]]},
            {6:[182,187]},
            {6:[[99,348],[99,348]]},
            {7:[217,222]},
            {7:[[298,378],[298,378]]},
            {8:[185,289]},
            {8:[[270,275],[270,275]]},
            {9:[249,254]},
            {9:[[270,358],[270,358]]},
            {10:[67,145]},
            {10:[[129,134],[129,134]]},
            {11:[145,150]},
            {11:[[129,299],[129,299]]},
            {12:[109,145]},
            {12:[[299,304],[299,304]]},
            {13:[104,109]},
            {13:[[186,299],[186,299]]},
            {14:[103,188]},
            {14:[[93,98],[93,98]]},
            {15:[284,289]},
            {15:[[275,349],[275,349]]},
            {16:[284,477]},
            {16:[[345,350],[345,350]]},
            {17:[512,517]},
            {17:[[305,376],[305,376]]},
            {18:[317,512]},
            {18:[[303,308],[303,308]]},
            {19:[317,322]},
            {19:[[112,309],[112,309]]},
            {20:[285,290]},
            {20:[[59,238],[59,238]]},
            {21:[224,285]},
            {21:[[233,238],[233,238]]},
            {22:[219,224]},
            {22:[[99,238],[99,238]]},
            {23:[250,255]},
            {23:[[60,194],[60,194]]},
            {24:[321,478]},
            {24:[[112,117],[112,117]]},
            {25:[473,478]},
            {25:[[117,265],[117,265]]},
            {26:[356,475]},
            {26:[[265,270],[265,270]]},
            {27:[351,356]},
            {27:[[146,270],[146,270]]},
            {28:[385,390]},
            {28:[[117,237],[117,237]]},
            {29:[416,473]},
            {29:[[137,142],[137,142]]},
            {30:[390,452]},
            {30:[[168,173],[168,173]]},
            {31:[416,473]},
            {31:[[201,206],[201,206]]},
            {32:[390,452]},
            {32:[[233,238],[233,238]]},
            {33:[513,518]},
            {33:[[60,270],[60,270]]},
            {34:[549,554]},
            {34:[[90,341],[90,341]]},
            {35:[554,737]},
            {35:[[90,95],[90,95]]},
            {36:[587,781]},
            {36:[[125,130],[125,130]]},
            {37:[587,592]},
            {37:[[130,172],[130,172]]},
            {38:[680,685]},
            {38:[[130,172],[130,172]]},
            {39:[680,752]},
            {39:[[169,174]]},
            {40:[554,751]},
            {40:[[205,210],[205,210]]},
            {41:[637,642]},
            {41:[[161,205],[161,205]]},
            {42:[587,781]},
            {42:[[245,250],[245,250]]},
            {43:[629,749]},
            {43:[[274,279],[274,279]]},
            {44:[629,634]},
            {44:[[279,309],[279,309]]},
            {45:[629,781]},
            {45:[[304,309],[304,309]]},
            {46:[554,591]},
            {46:[[304,309],[304,309]]},
            {47:[586,591]},
            {47:[[309,379],[309,379]]},
            {48:[746,751]},
            {48:[[341,384],[341,384]]},
            {49:[632,746]},
            {49:[[341,346],[341,346]]},
            {50:[781,786]},
            {50:[[59,378],[59,378]]},
            [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,30,30,31,31,32,32,33,33,34,34,35,35,36,36,37,37,38,38,39,39,40,40,41,41,42,42,43,43,44,44,45,45,46,46,47,47,48,48,49,49,50,50]
        ],
        2:[
            {1:[50,58]},
            {1:[[23,375],[23,375]]},
            {2:[89,97]},
            {2:[[177,375]]},
            {3:[89,308]},
            {3:[[174,182],[174,182]]},
            {4:[300,308]},
            {4:[[60,182],[60,182]]},
            {5:[58,220]},
            {5:[[144,152]]},
            {6:[212,220]},
            {6:[[90,150],[90,150]]},
            {7:[248,300]},
            {7:[[144,152],[144,152]]},
            {8:[248,256]},
            {8:[[89,151],[89,151]]},
            {9:[248,278]},
            {9:[[90,98],[90,98]]},
            {10:[124,132]},
            {10:[[90,145],[90,145]]},
            {11:[86,302]},
            {11:[[58,66],[58,66]]},
            {12:[86,93]},
            {12:[[58,123],[58,123]]},
            {13:[167,174]},
            {13:[[58,120],[58,120]]},
            {14:[339,347]},
            {14:[[25,225],[25,225]]},
            {15:[346,391]},
            {15:[[90,97],[90,97]]},
            {16:[135,308]},
            {16:[[219,226],[219,226]]},
            {17:[51,764]},
            {17:[[24,31],[24,31]]},
            {18:[424,431]},
            {18:[[31,226],[31,226]]},
            {19:[377,423]},
            {19:[[58,66],[58,66]]},
            {20:[431,722]},
            {20:[[57,64],[57,64]]},
            {21:[383,425]},
            {21:[[127,134],[127,134]]},
            {22:[134,141]},
            {22:[[256,372],[256,372]]},
            {23:[206,213]},
            {23:[[298,368],[298,368]]},
            {24:[302,309]},
            {24:[[341,369],[341,369]]},
            {25:[383,390]},
            {25:[[172,370],[172,370]]},
            {26:[340,383]},
            {26:[[257,262],[257,262]]},
            {27:[309,340]},
            {27:[[309,316],[309,316]]},
            {28:[301,308]},
            {28:[[257,315],[257,315]]},
            {29:[205,212]},
            {29:[[297,337],[297,337]]},
            {30:[250,257]},
            {30:[[257,336],[257,336]]},
            {31:[390,552]},
            {31:[[295,301],[295,301]]},
            {32:[424,432]},
            {32:[[296,343],[296,343]]},
            {33:[465,472]},
            {33:[[325,372],[325,372]]},
            {34:[508,514]},
            {34:[[296,345],[296,345]]},
            {35:[553,560]},
            {35:[[126,344],[126,344]]},
            {36:[96,765]},
            {36:[[367,375],[367,375]]},
            {37:[758,765]},
            {37:[[23,130],[23,130]]},
            {38:[592,765]},
            {38:[[124,130],[124,130]]},
            {39:[467,764]},
            {39:[[92,99],[92,99]]},
            {40:[467,473]},
            {40:[[92,268],[92,268]]},
            {41:[508,514]},
            {41:[[92,268],[92,268]]},
            {42:[424,474]},
            {42:[[263,269],[263,269]]},
            {43:[590,597]},
            {43:[[123,300],[123,300]]},
            {44:[590,628]},
            {44:[[183,190],[183,190]]},
            {45:[590,628]},
            {45:[[259,267],[259,267]]},
            {46:[656,661]},
            {46:[[153,300],[153,300]]},
            {47:[623,662]},
            {47:[[223,227],[223,227]]},
            {48:[686,694]},
            {48:[[124,268],[124,268]]},
            {49:[721,729]},
            {49:[[180,301],[180,301]]},
            {50:[591,765]},
            {50:[[333,340],[333,340]]},
            {51:[759,765]},
            {51:[[180,376],[180,376]]},
            {52:[134,176]},
            {52:[[318,325],[318,325]]},
            {53:[339,345]},
            {53:[[256,316],[256,316]]},
            {54:[591,728]},
            {54:[[293,300],[293,300]]},
            [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,30,30,31,31,32,32,33,33,34,34,35,35,36,36,37,37,38,38,39,39,40,40,41,41,42,42,43,43,44,44,45,45,46,46,47,47,48,48,49,49,50,50,51,51,52,52,53,53,54,54]
        ]
    };

    var frame_rate=1000/24,GRADOS=180/Math.PI;
    var context,fondo,vida_juego,queso,seleccion,anuncio;
    var activo=false,impacto=false,variacion=false,come=false,eat=false,skip=false,responder=false,inicio=false;
    var nivel_actual=1,segundos=60,paso=4,idraton=0,delay=3,sdelay=3,fade=1,fade_a=0.9,x_raton=50,puntaje=0,x_click=0,font=0,y_click=0,y_raton=75,x_tope,y_tope,frame_raton=0,x_cursor=0,y_cursor=0,region_presente=0,x_ob=0,orientacion_x,orientacion_y,angulo=(Math.PI/360),segundo=0,tiempo,x_queso=0,y_queso=0,x_seleccion=400,y_seleccion=230,p,x_opcion,y_opcion,x_anuncio=183,y_anuncio=157;
    var swidth_fondo=800, sheight_fondo=460,width_fondo=swidth_fondo,height_fondo=sheight_fondo,sx=0,sy=0;
    var swidth_raton=29, sheight_raton=54,width_raton=swidth_raton,height_raton=sheight_raton;
    var swidth_queso=22,sheight_queso=21,width_queso=swidth_queso,height_queso=sheight_queso;
    var swidth_seleccion=103,sheight_seleccion=120,width_seleccion=0,height_seleccion=0;
    var swidth_anuncio=435,sheight_anuncio=146,width_anuncio=swidth_anuncio,height_anuncio=sheight_anuncio;
    var posible_x_queso=[40,150,324,372,485,490,583,489,200,252,445,690,605],posible_y_queso=[310,314,84,318,328,280,280,90,77,211,240,320,67],posible_tiempo_queso=[31,31,31,31,31,31,31,31,31,31,31,31,31],raton=[],region=[],region_y=[],region_x=[],ratonjugador=[],x_ratones=[50],y_ratones=[75],orientacion_x=0,orientacion_y=0,angulos=[0],d=[0],alfa=[0];
    var palabras=["soda","dinner","wine","party food","beer","ice cream","cake","coffe","finger food","tea","a drink","snacks","chips"],respuestas=[true,false,true,false,true,false,false,true,false,true,true,false,false];

    tiempo=new Date();
    delay_notificacion=new Date();

    var onLoad=function(){
        /*Objeto para dibujar el fondo*/
         context.globalAlpha=1;
         context.drawImage(fondo,sx,sy,swidth_fondo,sheight_fondo,0,0,width_fondo,height_fondo);
    };
    var onLoadRaton=function(){
        /*Objeto para dibujar el fondo*/
         context.save();
         context.translate(x_raton,y_raton);
         context.rotate(angulo);
         context.globalAlpha=1;
         context.drawImage(raton[frame_raton],sx,sy,swidth_raton,sheight_raton,-(width_raton/2),-(height_raton/2),width_raton,height_raton);
         context.restore();
    };
    var onLoadQueso=function(){
        /*Objeto para dibujar el queso*/
        context.globalAlpha=fade;
        context.drawImage(queso,sx,sy,swidth_queso,sheight_queso,x_queso,y_queso,width_queso,height_queso)
    }
    var onLoadSeleccion=function(){
        /*Objeto para dibujar la seleccion*/
        context.globalAlpha=1;
        context.drawImage(seleccion,sx,sy,swidth_seleccion,sheight_seleccion,x_seleccion,y_seleccion,width_seleccion,height_seleccion)
    };
    var onLoadAnuncio=function(){
        /*Objeto para dibujar el anuncio*/
        context.globalAlpha=fade_a;
        context.drawImage(anuncio,sx,sy,swidth_anuncio,sheight_anuncio,x_anuncio,y_anuncio,width_anuncio,height_anuncio)
    };
    var onLoadTexto=function(){
        /*Objeto para escriir el texto*/
        context.font=(font)+"pt Dimbo Regular";
        context.fillStyle="#FFF";
        context.strokeStyle="#FFF";
        context.fillText(palabras[p],x_opcion,y_opcion);
    };
    var onLoadPuntaje=function(){
        /*Objeto para escribir el texto*/
        context.font="18pt Dimbo Regular";
        context.fillStyle="#FFF";
        context.strokeStyle="#FFF";
        context.fillText(puntaje,232,450);
    };
    var Raton=function(id){
        /*Prototipo del raton*/

        this.id_raton=id;

    };
    var Queso=function(id){
        /*Prototipo del queso*/

        this.id_queso=id;

    };

    Queso.prototype.vidaQueso = function() {
        /*Metodo para el tiempo de duracion del queso*/
                  tiempo.setSeconds(segundo);
                  segundos=tiempo.getSeconds();
                  segundo=segundo-(1/24);
                  fade=fade-(1/768);
                 //document.getElementById("depurar").innerHTML=segundos
    };
    Queso.prototype.caidaQueso = function() {
        /*Metodo para generar la posicion del queso*/
                  if(responder==true){
                      posible_x_queso.splice(p,1);
                      posible_y_queso.splice(p,1);
                      posible_tiempo_queso.splice(p,1);
                      palabras.splice(p,1);
                      respuestas.splice(p,1);
                  }
                  p=Math.round(Math.random()*(posible_x_queso.length-1));
                  x_queso=posible_x_queso[p];
                  y_queso=posible_y_queso[p];
                  segundo=posible_tiempo_queso[p];

    };
    Queso.prototype.dibujarQueso = function() {

                  onLoadQueso();
    };

    Raton.prototype.ubicarCursor = function(id,x_objetivo,y_objetivo) {
         /*Metodo para la ubicacion del cursor*/
                  angulos[id]=(Math.atan(Math.abs(y_objetivo-y_ratones[id])/Math.abs(x_objetivo-x_ratones[id])));
                  alfa[id]=angulos[id];
                  d[id]=Math.abs(x_objetivo-x_ratones[id])/Math.cos(angulos[id]);
                  orientacion_x=((x_objetivo-x_ratones[id])!=0)?x_objetivo-x_ratones[id]:1;
                  orientacion_y=((y_objetivo-y_ratones[id])!=0)?y_objetivo-y_ratones[id]:1;
                  orientacion_x=orientacion_x/Math.abs(orientacion_x);
                  orientacion_y=orientacion_y/Math.abs(orientacion_y);
                  angulos[id]=(Math.PI/2)+(orientacion_y*angulos[id]);
                  angulos[id]=orientacion_x*angulos[id];

    };
    Raton.prototype.movimiento = function(id,x_objetivo,y_objetivo) {
         /*Metodo para determinar el movmineto del raton*/
                  orientacion_x=((x_objetivo-x_ratones[id])!=0)?x_objetivo-x_ratones[id]:1;
                  orientacion_y=((y_objetivo-y_ratones[id])!=0)?y_objetivo-y_ratones[id]:1;
                  orientacion_x=orientacion_x/Math.abs(orientacion_x);
                  orientacion_y=orientacion_y/Math.abs(orientacion_y);
                  d[id]=d[id]-paso;
                  x_ratones[id]=x_ratones[id]+(orientacion_x*(Math.cos(alfa[id])*paso));
                  y_ratones[id]=y_ratones[id]+(orientacion_y*(Math.sin(alfa[id])*paso));

    };
    Raton.prototype.choque = function(id) {
         /*Metodo para determinar el choque con objetos*/
                  cuadrantes_x=[];regiones_posibles=[];
                  region=regiones[nivel_actual];
                  var cx=0,r=0,obj;
                  obj=x_ratones[id];
                  impacto=false;

                  for(var i=0,c=0;i<(region[region.length-1].length);i=i+2,c++){
                         /*Escojer region solo en coordenadas x.*/
                         objeto=region[region.length-1][i];
                         objeto_x=region[i][objeto];
                         tablilla_x=objeto_x.slice(0);
                         cx=biseccionar(tablilla_x,objeto_x,obj);

                         if(cx>=0)
                             {cuadrantes_x.push(cx),regiones_posibles.push(i);}

                  }

                  for(var n=0,i=1;n<cuadrantes_x.length;n++,i=i+2){
                            /*Determinacion de la ubicacion del raton*/
                            r=regiones_posibles[n]+1;
                            c=cuadrantes_x[n];
                            region_y=region[r][region[region.length-1][r]][c];
                            region_x=region[r-1][region[region.length-1][r]];
                            region_presente=region[region.length-1][r];

                            if(ubicacionEnte(x_ratones[id],y_ratones[id],region_x,region_y,c)==true){

                                orientacion_x=(-1*orientacion_x);
                                orientacion_y=(-1*orientacion_y);
                                x_ratones[id]=x_ratones[id]+(orientacion_x*(Math.cos(alfa[id])*paso));
                                y_ratones[id]=y_ratones[id]+(orientacion_y*(Math.sin(alfa[id])*paso));
                                impacto=true;
                                break;

                            }
                  
                  }
                  
    };
    Raton.prototype.dibujarRaton = function(objeto,x,y,rotacion) {
        /*Metodo para dibujar el raton*/
        x_raton=x;
        y_raton=y;
        angulo=rotacion;
        raton=objeto;
        onLoadRaton();
    };

    var raton_jugador= new Raton(0);//Creacion del raton del jugador
    var quesos= new Queso(0);

    var Setup = function() {
        
                  var div = document.getElementById("contenido_swf");
                  var canvas = document.createElement("canvas");
                  context= canvas.getContext('2d');
                  canvas.width = 800;
                  canvas.height = 460;
                  //var recuadro=div.getBoundingClientRect()
                  queso=new Image();
                  queso.onload=onLoadQueso;
                  queso.src="imagenes/L1_game_2/queso.png";
                  fondo=new Image();
                  fondo.onload=onLoad;
                  fondo.src="imagenes/L1_game_2/fondo_"+nivel_actual+".png";
                  for (var n=0;n<13;n++){
                        ratonjugador.push(new Image());
                        ratonjugador[n].onload=onLoad;
                        ratonjugador[n].src="imagenes/L1_game_2/raton_"+(n+1)+".png"
                  }
                  seleccion=new Image();
                  seleccion.onload=onLoadSeleccion;
                  seleccion.src="imagenes/L1_game_2/azul.png";
                  anuncio=new Image();
                  anuncio.onload=onLoadAnuncio;
                  anuncio.src="imagenes/L1_game_2/instructivo.png";
                  //onLoadAnuncio();
                  div.appendChild(canvas);
                  animacion();

                  /*Evento para los dispositivos moviles*/
                  canvas.addEventListener('touchstart', function(e){ 
                        start(event); 
                        e.preventDefault(); 
                  });
                  canvas.addEventListener('touchmove', function(e){ 
                        moverGuia(event); 
                        e.preventDefault(); 
                  });
                  var moverGuia=function(event){
                        recuadro=div.getBoundingClientRect()
                        x_cursor=(event.touches[0].pageX-Math.round(recuadro.left));
                        y_cursor=(event.touches[0].pageY-Math.round(recuadro.top));
                        //document.getElementById("depurar").innerHTML=x_cursor+" "+y_cursor;
                        raton_jugador.ubicarCursor(0,x_cursor,y_cursor);
                  };
                  var start=function(event){
                       recuadro=div.getBoundingClientRect();
                       x_click=(event.touches[0].pageX-Math.round(recuadro.left));
                       y_click=(event.touches[0].pageY-Math.round(recuadro.top));
                       if(x_click>x_anuncio && x_click<(x_anuncio+swidth_anuncio) && y_click>y_anuncio && y_click<(y_anuncio+sheight_anuncio) && inicio==false /*&& nivel_actual<2*/){

                            activo=true;
                            inicio=true;
                            width_anuncio=0,height_anuncio=0;

                        }       
                  };

                  /*Rutinas y eventos para computadores*/
                  canvas.onmousedown=function(e){

                       recuadro=div.getBoundingClientRect();
                       x_click=(e.clientX-Math.round(recuadro.left));
                       y_click=(e.clientY-Math.round(recuadro.top));
                       if(x_click>x_anuncio && x_click<(x_anuncio+swidth_anuncio) && y_click>y_anuncio && y_click<(y_anuncio+sheight_anuncio) && inicio==false /*&& nivel_actual<2*/){

                            activo=true;
                            inicio=true;
                            width_anuncio=0,height_anuncio=0;

                        }
                        
                  };
                  canvas.onmousemove=function(e){
                        recuadro=div.getBoundingClientRect()
                        x_cursor=(e.clientX-Math.round(recuadro.left));
                        y_cursor=(e.clientY-Math.round(recuadro.top));
                        //document.getElementById("depurar").innerHTML=x_cursor+" "+y_cursor;
                        raton_jugador.ubicarCursor(0,x_cursor,y_cursor);
                  };

    };

    var Dinamicajuego = function (){
               /*Logica del juego*/
               requestAnimationFrame(animacion);
               onLoad();
               onLoadPuntaje();
               onLoadAnuncio();
               
               if(inicio==true){

                   if(activo==true){

                            idraton=raton_jugador.id_raton;

                            if(segundo<=0)
                                {fade=1,quesos.caidaQueso()}
                            if(ubicacionEnte(x_ratones[0],y_ratones[0],[x_queso-width_queso,x_queso+width_queso],[y_queso-height_queso,y_queso+height_queso],0)==true){
                                come=true;
                                activo=false;
                            }

                            quesos.vidaQueso();

                            if(d[idraton]>0){
                                  raton_jugador.movimiento(idraton,x_cursor,y_cursor);
                                  raton_jugador.choque(idraton);
                            }

                   }else if(activo==false && come==true){
                        seleccionRespuesta();
                        if (responder==true){

                            tiempoNotificacion();

                            if (delay<=0){

                                if(seleccion.src.indexOf("verde.png")!=-1)
                                    {puntaje++;}
                                else
                                    {puntaje--;}
                                quesos.caidaQueso(),activo=true,come=false,responder=false;
                                sdelay=3,delay=3,x_click=0,y_click=0,fade=1;
                                seleccion.src="imagenes/L1_game_2/azul.png";

                            }

                        }

                   }
                   
                   raton_jugador.dibujarRaton(ratonjugador,x_ratones[0],y_ratones[0],angulos[0]);
                   quesos.dibujarQueso();
                   frame_raton=(frame_raton+1)%13;
                   cambiarNivel();

               }

    };

    function cambiarNivel(){
                /*Funcion para cambiar de nivel*/
                if(palabras.length==0){

                    if (puntaje==13 && nivel_actual==1){
                        activo=false,variacion=false,come=false,eat=false,skip=false,responder=false,inicio=false;
                        nivel_actual++;
                        fondo.src="imagenes/L1_game_2/fondo_"+nivel_actual+".png";
                        anuncio.src="imagenes/L1_game_2/youwin.png";
                        palabras=["soda","party food","snacks","a drink","beer","chips","ice cream","cake","coffe","tea","finger food","wine"];
                        posible_x_queso=[61,110,360,408,446,324,479,524,367,595,316,199];
                        posible_y_queso=[34,196,138,234,72,326,327,264,35,308,278,194];
                        posible_tiempo_queso=[31,31,31,31,31,31,31,31,31,31,31,31];
                        respuestas=[false,true,true,false,false,true,true,true,false,false,true,false];
                        puntaje=0,segundo=0;
                        x_ratones=[68],y_ratones=[375],orientacion_x=0,orientacion_y=0,angulos=[0],d=[0],alfa=[0],x_click=0,y_click=0,x_cursor=0,y_cursor=0
                        //onLoadAnuncio();
                    }else if (puntaje<13 && nivel_actual==1){
                        activo=false,variacion=false,come=false,eat=false,skip=false,responder=false,inicio=false;
                        fondo.src="imagenes/L1_game_2/fondo_"+nivel_actual+".png";
                        anuncio.src="imagenes/L1_game_2/you-lose.png";
                        posible_x_queso=[40,150,324,372,485,490,583,489,200,252,445,690,605],posible_y_queso=[310,314,84,318,328,280,280,90,77,211,240,320,67],posible_tiempo_queso=[31,31,31,31,31,31,31,31,31,31,31,31,31],x_ratones=[50],y_ratones=[75],orientacion_x=0,orientacion_y=0,angulos=[0],d=[0],alfa=[0];
                        palabras=["soda","dinner","wine","party food","beer","ice cream","cake","coffe","finger food","tea","a drink","snacks","chips"],respuestas=[true,false,true,false,true,false,false,true,false,true,true,false,false];
                        puntaje=0,segundo=0;
                    }else if (puntaje==12 && nivel_actual==2){
                        activo=false;
                        anuncio.src="imagenes/L1_game_2/youwin.png";
                        inicio=true;
                        onLoadAnuncio();
                        //puntaje=0;
                        fondo.src="imagenes/L1_game_2/fondo_"+nivel_actual+".png";
                        clearTimeout(vida_juego);
                    }else if (puntaje<12 && nivel_actual==2){
                        activo=false;
                        anuncio.src="imagenes/L1_game_2/you-lose.png";
                        inicio=false;
                        onLoadAnuncio();
                        puntaje=0;
                        fondo.src="imagenes/L1_game_2/fondo_"+nivel_actual+".png";
                        palabras=["soda","party food","snacks","a drink","beer","chips","ice cream","cake","coffe","tea","finger food","wine"];
                        posible_x_queso=[61,110,360,408,446,324,479,524,367,595,316,199];
                        posible_y_queso=[34,196,138,234,72,326,327,264,35,308,278,194];
                        posible_tiempo_queso=[31,31,31,31,31,31,31,31,31,31,31,31];
                        respuestas=[false,true,true,false,false,true,true,true,false,false,true,false];
                        puntaje=0,segundo=0;
                        x_ratones=[68],y_ratones=[375],orientacion_x=0,orientacion_y=0,angulos=[0],d=[0],alfa=[0],x_click=0,y_click=0,x_cursor=0,y_cursor=0
                    }
                    width_anuncio=435,height_anuncio=146;

                }

    };
    function tiempoNotificacion(){
        /*Funcion para el retardo de la notificacion*/
        delay_notificacion.setSeconds(sdelay);
        delay=delay_notificacion.getSeconds();
        sdelay=sdelay-(1/24);
        width_seleccion=(width_seleccion>=0)?width_seleccion-2.5:width_seleccion;
        height_seleccion=(height_seleccion>=0)?height_seleccion-2.5:height_seleccion;
        font=(font>=0)?font-0.25:font;

    };
    function seleccionRespuesta(){
        /*Funcion para la seleccion de la respuesta*/
        x_seleccion=x_queso+15,y_seleccion=y_queso+15;
        x_opcion=(x_seleccion+30),y_opcion=y_seleccion+112;
        
        if (x_click>x_seleccion && x_click<(x_seleccion+30) && y_click>y_seleccion && y_click<y_seleccion+22)
            {eat=true,skip=false,responder=true;}
        else if (x_click>(x_seleccion+73) && x_click<(x_seleccion+98) && y_click>y_seleccion && y_click<y_seleccion+22)
            {eat=false,skip=true,responder=true;}

        if(respuestas[p]==eat && responder==true)
            {seleccion.src="imagenes/L1_game_2/verde.png";}
        else if(respuestas[p]!=eat && responder==true)
            {seleccion.src="imagenes/L1_game_2/rojo.png";}

        eat=false,skip=false;
        width_seleccion=(width_seleccion<103 && responder==false)?width_seleccion+10:width_seleccion;
        height_seleccion=(height_seleccion<120 && responder==false)?height_seleccion+10:height_seleccion;
        font=(font<=14 && responder==false)?font+1:font;

        onLoadSeleccion();
        onLoadTexto();

    };
    function ubicacionEnte(x,y,c_x,c_y,pos){
         /* Funcion que retorna un bool, para determinar si el ente esta en algun lugar*/
        return (c_x[pos]<=x && x<=c_x[pos+1] && c_y[1]>=y && c_y[0]<=y);
    };
    function biseccionar(forma,referencia,objetivo){
         /*Funcion para biseccionar*/
        var l=forma.length;
        var ps=Math.ceil(l/2);

        if(l>1){
             if (forma[ps]>=objetivo)
                 return biseccionar(forma.splice(0,ps),referencia);
             else if (forma[ps]<objetivo)
                 return biseccionar(forma.splice(ps,l/2),referencia);
        }else{
             return referencia.indexOf(forma[0]);
        }

    };

    var animacion=function() {
        /*Objeto para la animacion*/
        vida_juego=setTimeout(Dinamicajuego,frame_rate);
    };
    Setup();//Llamado al objeto de inicio del juego.
    
}

/*----------------------- JUEGO 1 LECCION 2 ---------------------------*/

var Juego_1_L2=function(){//Juego 1 leccion 2.
    /*Instrucciones:
      You have to read the conversation and, according to the answer of the 
      second person, you must click the thumb up button if this person accepts or
      thump down if it declines the offer, you have 5 seconds per conversation
      otherwise you wont get point.
    */
    /*JSON para preguntas y respuestas*/
    var preguntas={
        0:"Can I get you a beer?",
        1:"Would you like a hamburger?",
        2:"Would you like some cake?",
        3:"I'm having a get together, would you like to come?",
        4:"Would you like to come to my housewarming?",
        5:"I'm having a farewell party, would you like to come?",
        6:"Would you like to come to a birthday party for my sister?",
        7:"Do you want to come to a surprise party for James?"
      };
    var respuestas={
        0:["Oh, thank you.","Oh, thank you, but I don’t drink."],
        1:["Oh, thank you, I love hamburgers.","Thanks, but I’m saving room for dessert."],
        2:["Wow that looks great. Thanks.","Thanks, but I’m on a diet."],
        3:["I'd love to."],
        4:["That sounds like fun!"],
        5:["That sounds great"],
        6:["Count on me!"],
        7:["Sure!"]
      };
    var frame_rate=1000/24;
    var fondo,recuadro,context,tiempo,anuncio;
    var activo=false,click=false;
    var ingreso=0,puntaje=0,punto=0,x_click=0,y_click=0,segundo=6,bluegreen=0,dist=0,segundos=0,nivel_actual=1,r=0,p=0,x_tiempo=260,y_tiempo=280,x_pregunta=200,y_pregunta=205,font=24,x_respuesta=200,y_respuesta=235;
    var sx=0,sy=0,swidth_fondo=800,sheight_fondo=460,width_fondo=swidth_fondo,height_fondo=sheight_fondo;
    var swidth_anuncio=537,sheight_anuncio=151,width_anuncio=swidth_anuncio,height_anuncio=sheight_anuncio,x_anuncio=132,y_anuncio=154;
    tiempo= new Date();

    var regiones_circulares_x=[81,718];
    var regiones_circulares_y=[240,240];
    
    var onLoad=function(){
        /*Objeto para dibujar el fondo*/
         context.globalAlpha=1;
         context.drawImage(fondo,sx,sy,swidth_fondo,sheight_fondo,0,0,width_fondo,height_fondo);
      };
    var onLoadAnuncio=function(){
         context.globalAlpha=0.9;
         context.drawImage(anuncio,sx,sy,swidth_anuncio,sheight_anuncio,x_anuncio,y_anuncio,width_anuncio,height_anuncio);
    }
    var onLoadTextos=function(){

        /*Objeto para escribir el texto*/
        context.font=(font)+"pt Dimbo Regular";
        context.fillStyle="#FFF";
        context.strokeStyle="#FFF";
        context.fillText(preguntas[p],x_pregunta,y_pregunta);
        context.fillText(respuestas[p][r],x_respuesta,y_respuesta);

      };
    var onLoadTiempos=function(){

        /*Objeto para escribir el texto del tiempo*/
        context.font=(font)+"pt Dimbo Regular";
        context.fillStyle="rgba(255,"+bluegreen+", "+bluegreen+", 1)";
        bluegreen=(bluegreen+12)%250;
        context.strokeStyle="#FFF";
        context.fillText("Time left: "+segundos+" seconds.",x_tiempo,y_tiempo);

      };
    var onLoadPuntaje=function(){

        /*Objeto para escribir el puntaje*/
        context.font="20pt Dimbo Regular";
        context.fillStyle="#FFF";
        context.strokeStyle="#FFF";
        context.fillText("SCORE: "+puntaje,690,400);

    }
     var tiempoPregunta=function(){
        tiempo.setSeconds(segundo);
        segundos=tiempo.getSeconds();
        segundo=(segundo>=0)?segundo-(1/24):6;

        if(segundo<=0){

            p++;

            if((nivel_actual==1 && puntaje==3) || (nivel_actual==2 && puntaje==5)){
                nivel_actual++;
                puntaje=0;
                anuncio.src="imagenes/L2_game_1/youwin.png";
                activo=false;
            }else if(puntaje<3 && (p==3 || p==8)){
                p=(p==3)?p-3:p-5;
                puntaje=0;
                anuncio.src="imagenes/L2_game_1/youlose.png";
                activo=false;
            }
            click=false;

            generarRespuesta();
            ingreso=0;

        }
        //document.getElementById("depurar").innerHTML=segundo
      };
                  
    var Setup = function() {
        
                  var div = document.getElementById("contenido_swf");
                  var canvas = document.createElement("canvas");
                  context= canvas.getContext('2d');
                  canvas.width = 800;
                  canvas.height = 460;
                  //var recuadro=div.getBoundingClientRect()
                  fondo=new Image();
                  fondo.onload=onLoad;
                  fondo.src="imagenes/L2_game_1/fondo_"+nivel_actual+".png";
                  anuncio=new Image();
                  anuncio.onload=onLoadAnuncio;
                  anuncio.src="imagenes/L2_game_1/instruccion.png"

                  /*Evento para los dispositivos moviles*/
                  canvas.addEventListener('touchstart', function(e){ 
                        start(event);
                        e.preventDefault();
                  });
                  var start=function(event){
                       recuadro=div.getBoundingClientRect();
                       x_click=(event.touches[0].pageX-Math.round(recuadro.left));
                       y_click=(event.touches[0].pageY-Math.round(recuadro.top));
                       for (var i=0;i<2;i++){

                            if(regionCircular(regiones_circulares_x[i],regiones_circulares_y[i])==true)
                            {
                                ingreso=i+1;
                                if(ingreso==(r+1))
                                    {puntaje++;}
                                else
                                    {puntaje--;}
                                click=true;
                                break;
                            }

                       }

                  };

                  /*Rutinas y eventos para computadores*/
                  canvas.onmousedown=function(e){
                       recuadro=div.getBoundingClientRect();
                       x_click=(e.clientX-Math.round(recuadro.left));
                       y_click=(e.clientY-Math.round(recuadro.top));

                       if(x_click>x_anuncio && x_click<width_anuncio+x_anuncio && y_click>y_anuncio && y_click<height_anuncio+y_anuncio && nivel_actual<=2){
                            activo=true;
                            fondo.src="imagenes/L2_game_1/fondo_"+nivel_actual+".png";
                       }
                       for (var i=0;i<2;i++){

                            if(regionCircular(regiones_circulares_x[i],regiones_circulares_y[i])==true)
                            {
                                ingreso=i+1;
                                if(ingreso==(r+1)&&click==false)
                                    {puntaje++;}
                                else if(ingreso!=(r+1)&&click==false)
                                    {puntaje--;}
                                click=true;
                                break;
                            }

                       }
                       
                       //document.getElementById("depurar").innerHTML=x_click+" "+y_click
                  };

                  generarRespuesta();

                  div.appendChild(canvas);
                  animacion();

      };

    var Dinamicajuego = function (){

        requestAnimationFrame(animacion);
        onLoad();
        if(activo==true){

            onLoadTextos();
            onLoadTiempos();
            tiempoPregunta();
            onLoadPuntaje();

        }else
            {onLoadAnuncio();}

      };

    function regionCircular(x,y){
        /*Funcion para saber si el cursor esta en a region circular*/
        dist=Math.sqrt(Math.pow(Math.abs(x_click-x),2)+Math.pow(Math.abs(y_click-y),2));
        return (dist<40)

    }
    function generarRespuesta (){
        /*Funcion para generar la respuesta de manera aleatoria*/

        if(p>=3 && p<=8)
            {font=20,r=0}
        else
            {r=Math.round(Math.random());}
        
      };
    var animacion=function() {
        /*Objeto para la animacion*/
        vida_juego=setTimeout(Dinamicajuego,frame_rate);
      };

    Setup();//Llamado al objeto de inicio del juego.
    
};

/*----------------------- JUEGO 2 LECCION 2 ---------------------------*/
var Juego_2_L2=function(){
    /*Instruciones:
       One piece of the puzzle wil be shown, you must drag it to 
       the correct place, once the piece is located in the correct
       place, another piece will appear and, like the first one, you
       must drag it to the correct place, this will happen until the
       six pieces are corrrectly located. You got only 2 minutes
       to put together the puzzle.
    
       JSON de las coordenadas de los huecos de las fichas.
    */
    var huecos_fichas={

        0:[[43,200],[118,260]],
        1:[[146,303],[124,266]],
        2:[[250,407],[118,264]],
        3:[[36,193],[217,359]],
        4:[[146,303],[224,466]],
        5:[[257,414],[218,440]]

    };
    var frame_rate=1000/24;
    var context,fondo,recuadro,ficha,tiempo,anuncio,sonido_ficha;
    var activo=false,agarra=false,suelta=false,en_mano=false,click=false,finalizar=false;
    var nivel_actual=1,x_click=0,y_click=0,angulo=0,dx=0,dy=0,id_actual=0,cantidad=1,x_ficha=520,y_ficha=250,x_anuncio=200,y_anuncio=200,fade=1,f=0,id_presente=0,segundo=180,minuto=3,minutos=0,segundos=0,x_tiempo=660,y_tiempo=330;
    var swidth_fondo=800, sheight_fondo=460,width_fondo=swidth_fondo,height_fondo=sheight_fondo,sx=0,sy=0;
    var swidth_ficha=157,sheight_ficha=142,width_ficha=swidth_ficha,height_ficha=sheight_ficha;
    var swidth_anuncio=393,sheight_anuncio=130,width_anuncio=swidth_anuncio,height_anuncio=sheight_anuncio;
    var x_fichas=[520],y_fichas=[250],imagenes_fichas=[],fichas=[],correcto=[false,false,false,false,false,false],fade_ficha=[1],enumeracion=[0,1,2,3,4,5],etiquetas=[];
    tiempo= new Date();

    var onLoad=function(){

        /*Objeto para dibujar el fondo*/
         context.drawImage(fondo,sx,sy,swidth_fondo,sheight_fondo,0,0,width_fondo,height_fondo);

    };
    var onLoadFicha=function(){

        /*Objeto para dibujar la ficha*/
        context.save();
        context.translate(x_ficha,y_ficha);
        context.rotate(angulo);
        context.globalAlpha=fade;
        context.drawImage(ficha,sx,sy,swidth_ficha,sheight_ficha,-(width_ficha/2),-(height_ficha/2),width_ficha,height_ficha);
        context.restore();

    };
    var onLoadAnuncio=function(){

        /*Objeto para dibujar los anuncios*/
         context.globalAlpha=0.9;
         context.drawImage(anuncio,sx,sy,swidth_anuncio,sheight_anuncio,x_anuncio,y_anuncio,width_anuncio,height_anuncio);

    };
    var onLoadTiempos=function(){

        /*Objeto para escribir el texto del tiempo*/
        context.font="22pt Dimbo Regular";
        context.fillStyle="#FFF";
        context.strokeStyle="#FFF";
        context.fillText(minutos+":"+segundos,x_tiempo,y_tiempo);

      };

    var Ficha=function(id){

        /*Prototipo de a ficha*/
        this.id_ficha=id;

    };
    Ficha.prototype.seguir = function(id) {
        /*Metodo de la ficha para seguir el cursor*/
        x_fichas[id]=x_click;
        y_fichas[id]=y_click;

    };
    Ficha.prototype.caidaFicha = function(id) {
        /*Metodo de la ficha para arrojarla sore una region determinada*/

        for (var i=0;i<6;i++){
            
            if(x_fichas[id]>huecos_fichas[i][0][0] && x_fichas[id]<huecos_fichas[i][0][1] && y_fichas[id]>huecos_fichas[i][1][0] && y_fichas[id]<huecos_fichas[i][1][1]){

                x_fichas[id]=huecos_fichas[i][0][0]+(width_ficha/2);
                y_fichas[id]=huecos_fichas[i][1][0]+(height_ficha/2);

                if(i==f && correcto[id]==false && cantidad<6){

                        correcto[id]=true;
                        cantidad++; 
                        fichas.push(new Ficha());
                        seleccionFicha();
                        imagenes_fichas.push(new Image());
                        imagenes_fichas[cantidad-1].onload=onLoadFicha;
                        imagenes_fichas[cantidad-1].src="imagenes/L2_game_2/puzz"+nivel_actual+"/p"+(f+1)+".png";
                        x_fichas.push(520);
                        y_fichas.push(250);
                        fade_ficha.push(0);
                        sonido_ficha.play();
                        break;

                }else if(i==f && correcto[id]==false && cantidad==6){

                    if(fade<=0){
                        anuncio.src="imagenes/L2_game_2/youwin.png";
                        activo=false;    
                        reiniciarVariables();
                    }else{
                        fade=fade-0.07;
                        finalizar=true;
                    }
                    sonido_ficha.play();
                    
                }

            }

        }

    };
    Ficha.prototype.dibujarFicha = function(id) {
        /*Metodo de la ficha para dibujarla*/

        ficha=imagenes_fichas[id];
        x_ficha=x_fichas[id];
        y_ficha=y_fichas[id];
        if(finalizar==false)
            {fade=fade_ficha[id];}
        onLoadFicha();

    };

    fichas.push(new Ficha());//Creacion de una ficha
    
    /*Funcion de inicio*/
    var Setup = function() {

              var div = document.getElementById("contenido_swf");
              var canvas = document.createElement("canvas");
              context= canvas.getContext('2d');
              canvas.width = 800;
              canvas.height = 460;
              fondo=new Image();
              fondo.onload=onLoad;
              fondo.src="imagenes/L2_game_2/fondos/fondo_"+nivel_actual+".png";

              seleccionFicha()//Seleccionar una ficha.
              ficha=new Image();
              imagenes_fichas.push(new Image());
              imagenes_fichas[0].onload=onLoadFicha;
              imagenes_fichas[0].src="imagenes/L2_game_2/puzz"+nivel_actual+"/p"+(f+1)+".png";
              anuncio=new Image();
              anuncio.onload=onLoadAnuncio;
              anuncio.src="imagenes/L2_game_2/instrucciones.png";

              sonido_ficha=new Audio();
              sonido_ficha.src="sonidos/L2_game_2/jigsaw_puzzle_piece_large_put_in_puzzle_001.mp3"
              div.appendChild(canvas);
              animacion();
              canvas.onmousedown=function(e){

                    recuadro=div.getBoundingClientRect();
                    x_click=(e.clientX-Math.round(recuadro.left));
                    y_click=(e.clientY-Math.round(recuadro.top));
                    agarra=true,suelta=false,click=true;

                    if(x_click>x_anuncio && x_click<(x_anuncio+width_anuncio) && y_click>height_anuncio && y_click<(y_anuncio+height_anuncio) && activo==false)
                        {activo=true}

                    canvas.onmousemove=function(e){

                               recuadro=div.getBoundingClientRect();
                               x_click=(e.clientX-Math.round(recuadro.left));
                               y_click=(e.clientY-Math.round(recuadro.top));

                    };

              };
              canvas.onmouseup=function(e){

                    canvas.onmousemove=null;
                    agarra=false,suelta=true;

              };

              /*Evento para los dispositivos moviles*/
              canvas.addEventListener('touchstart', function(e){ 
                    start(event); 
                    e.preventDefault(); 
              });
              canvas.addEventListener('touchmove', function(e){ 
                    mover(event); 
                    e.preventDefault(); 
              });
              canvas.addEventListener('touchend', function(e){ 
                    levantar(event); 
                    e.preventDefault(); 
              });
              
              var mover=function(event){

                    recuadro=div.getBoundingClientRect()
                    x_cursor=(event.touches[0].pageX-Math.round(recuadro.left));
                    y_cursor=(event.touches[0].pageY-Math.round(recuadro.top));

              };
              var start=function(event){

                    recuadro=div.getBoundingClientRect();
                    x_click=(event.touches[0].pageX-Math.round(recuadro.left));
                    y_click=(event.touches[0].pageY-Math.round(recuadro.top));
                    agarra=true,suelta=false,click=true;

                    if(x_click>x_anuncio && x_click<(x_anuncio+width_anuncio) && y_click>height_anuncio && y_click<(y_anuncio+height_anuncio) && activo==false)
                        {activo=true}

              };
              var levantar=function(event){

                    agarra=false,suelta=true;
              }

    };

    var Dinamicajuego = function (){

        requestAnimationFrame(animacion);
        onLoad();

        if(activo==true){

            id_actual=cantidad-1;

            while(id_actual>=0){
                
                fichas[id_actual].dibujarFicha(id_actual);

                if(x_click>(x_fichas[id_actual]-(width_ficha/2)) && x_click<(x_fichas[id_actual]+(width_ficha/2)) && y_click>(y_fichas[id_actual]-(height_ficha/2)) && y_click<(y_fichas[id_actual]+(height_ficha/2)) && en_mano==false)
                    {

                        fichas[id_actual].seguir(id_actual),en_mano=true;
                        if(click==true)
                            {id_presente=id_actual}

                    }
                if(suelta==true)
                    {fichas[id_actual].caidaFicha(id_actual);}

                fade_ficha[id_actual]=(fade_ficha[id_actual]<1)?fade_ficha[id_actual]+0.09:fade_ficha[id_actual];
                id_actual--;

            }

            onLoadTiempos();
            duracion();
            en_mano=false,click=false;

        }else 
            {onLoadAnuncio();}

    };

    function seleccionFicha(){

        /*Funcion para seleccionar la ficha siguente*/
        var extraido
        extraido=Math.round(Math.random()*(enumeracion.length-1));
        f=enumeracion[extraido];
        enumeracion.splice(extraido,1);

    };
    function reiniciarVariables(){

        /*Funcion para resetear las variables*/
        nivel_actual++;
        cantidad=1,id_actual=0;
        finalizar=false;
        fondo.src="imagenes/L2_game_2/fondos/fondo_"+nivel_actual+".png";
        x_fichas=[520],y_fichas=[250],imagenes_fichas=[],fichas=[],correcto=[false,false,false,false,false,false];
        fade_ficha=[],enumeracion=[0,1,2,3,4,5],etiquetas=[];
        seleccionFicha()//Seleccionar una ficha.
        fichas.push(new Ficha());
        imagenes_fichas.push(new Image());
        imagenes_fichas[0].onload=onLoadFicha;
        imagenes_fichas[0].src="imagenes/L2_game_2/puzz"+nivel_actual+"/p"+(f+1)+".png";

    };
    function duracion(){

        /*Funcion para la duracion del juego por nivel*/
        tiempo.setSeconds(segundo);
        tiempo.setMinutes(minuto);
        segundos=tiempo.getSeconds();
        minutos=tiempo.getMinutes();
        segundo=(segundo>=0)?segundo-(1/24):120;
        minuto=(minuto>=0)?minuto-(1/1440):3;

        if(segundo<=0){
                anuncio.src="imagenes/L2_game_2/youlose.png";
                activo=false;    
        }

    };

    var animacion=function() {
        /*Objeto para la animacion*/
        vida_juego=setTimeout(Dinamicajuego,frame_rate);
    };

    Setup();//Llamado al objeto de inicio del juego.

}
/*----------------------- JUEGO 1 LECCION 3 ---------------------------*/

var Juego_1_L3=function(){//Juego 1 leccion 3 - Rana.
    /*Intrucciones:
     * You got to construct the correct sentence according to the indications
     *in the upper right corner, by clicking over the desired leaf
     *you will begin to construct the sentence. If you choose an incorrect
     *word it will turn red otherwise it remains white and it's added to the sentence. 
     *after 5 tries the game will reset.
     *
     * How was the party?
     */
    
    /*JSON Datos*/
    var datos_texto={/*JSON en el cual se almacenan los datos de los textos y la respuesta*/
                        1:[
                            {"textos_x":[86,178,285,426,460,614,726]},
                            {"textos_y":[238,118,253,96,229,122,235]},
                            {"palabras":["was","I","It","danced","it","a lot","great."]},
                            {"correctas":[2,0,6,1,3,5]},
                            {"referencia":{1:0,3:1,5:2,7:3,9:4,11:5,13:6}},
                            {"x_rana":520},
                            {"y_rana":396}
                        ],
                        2:[
                            {"textos_x":[186,220,352,318,369,489,466,575,693]},
                            {"textos_y":[249,128,373,267,152,128,344,243,332]},
                            {"palabras":["was","of","a lot","I","people","It","great.","new","met"]},
                            {"correctas":[5,0,6,3,8,2,1,7,4]},
                            {"referencia":{1:0,3:1,5:2,7:3,9:4,11:5,13:6,15:7,17:8}},
                            {"x_rana":113},
                            {"y_rana":365}
                        ],
                        3:[
                            {"textos_x":[122,384,313,342,490,543,689,647]},
                            {"textos_y":[243,288,182,90,148,270,272,175]},
                            {"palabras":["food","was","I","much.","The","so","great.","ate"]},
                            {"correctas":[2,7,5,3,4,0,1,6]},
                            {"referencia":{1:0,3:1,5:2,7:3,9:4,11:5,13:6,15:7}},
                            {"x_rana":180},
                            {"y_rana":103}
                        ],
                        4:[
                            {"textos_x":[87,149,179,274,334,249,310,416,415,495,395]},
                            {"textos_y":[273,332,237,307,228,171,110,164,98,124,320]},
                            {"palabras":["great","was","really","had","everyone!","to","It","I","time.","see","a"]},
                            {"correctas":[6,1,2,0,5,9,4,7,3,10,2,0,8]},
                            {"referencia":{1:0,3:1,5:2,7:3,9:4,11:5,13:6,15:7,17:8,19:9,21:10,23:11,25:13,27:14}},
                            {"x_rana":683},
                            {"y_rana":359}
                        ]
    };
    //Etiquetas:  1 - hojas, 2 - costa y roca  
    var objetos_plano={/*JSON en el cual se almacenan las coordenadas de los objetos de acuerdo a las etiquetas*/
                    1:[
                        {1:[71,72,83,105,134,158,166]},
                        {1:[[241,242],[221,260],[215,274],[203,285],[201,268],[215,243],[233,234]]},
                        {1:[154,170,195,228,237]},
                        {1:[[110,128],[95,143],[85,149],[95,147],[128,130]]},
                        {1:[263,273,279,287,321,338,344]},
                        {1:[[222,255],[218,273],[213,298],[214,304],[223,301],[243,286],[265,267]]},
                        {1:[408,423,443,464,492]},
                        {1:[[92,111],[80,120],[73,121],[75,129],[98,125]]},
                        {1:[430,436,442,451,466,496,510]},
                        {1:[[245,263],[229,274],[221,285],[213,285],[205,264],[207,245],[228,240]]},
                        {1:[601,616,632,654,674,684]},
                        {1:[[116,151],[105,158],[100,152],[102,147],[110,148],[133,136]]},
                        {1:[713,728,754,778,783,787]},
                        {1:[[234,273],[213,287],[202,296],[206,281],[208,248],[213,235]]},
                        {2:[440,451,460,469,478,494,511,522,530,538,551,562,575,591,606,618,627]},
                        {2:[[411,423],[381,423],[358,423],[345,423],[344,423],[347,423],[346,423],[41,423],[332,423],[327,423],[327,423],[329,423],[337,423],[354,423],[378,423],[399,423],[418,423]]},
                        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2]
                     ],
                     2:[
                        {1:[173,190,216,232,242]},
                        {1:[[247,267],[228,280],[228,281],[239,277],[258,269]]},
                        {1:[211,223,236,262]},
                        {1:[[122,139],[110,149],[108,155],[130,148]]},
                        {1:[339,350,368,395,412]},
                        {1:[[364,390],[348,402],[342,403],[351,403],[378,393]]},
                        {1:[303,321,337,351,383]},
                        {1:[[262,287],[249,293],[246,292],[245,297],[261,300]]},
                        {1:[355,371,390,416,421]},
                        {1:[[147,175],[129,182],[128,179],[147,174],[158,173]]},
                        {1:[473,486,504,522,549,566]},
                        {1:[[132,161],[109,171],[100,178],[100,165],[113,174],[145,163]]},
                        {1:[455,473,487,512,520,525,530]},
                        {1:[[332,369],[312,390],[306,394],[304,388],[307,375],[312,350],[317,329]]},
                        {1:[565,575,591,609,626]},
                        {1:[[236,267],[224,275],[219,277],[224,274],[238,264]]},
                        {1:[668,688,711,729,753]},
                        {1:[[327,354],[317,358],[312,358],[316,369],[338,360]]},
                        {2:[1,32,51,78,106,134,155,185,214,242,272,298,330,365,399,426,465,495,518,533,552,559,559,566,581,608,646,670,700,731,755,784,794,800]},
                        {2:[[0,185],[0,165],[0,153],[0,140],[0,133],[0,121],[0,113],[0,103],[0,94],[0,85],[0,49],[0,70],[0,65],[0,59],[0,55],[0,55],[0,55],[0,55],[0,59],[0,62],[0,73],[0,85],[0,109],[0,128],[0,144],[0,158],[0,171],[0,181],[0,200],[0,223],[0,246],[0,294],[0,328],[0,344]]},
                        {2:[1,17,54,87,107,131,150,165,188,215,224,231]},
                        {2:[[321,424],[310,424],[293,424],[285,424],[284,424],[291,424],[303,424],[345,424],[357,424],[368,424],[371,424],[378,424]]},
                        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2]
                     ],
                    3:[
                        {1:[105,124,142,162,187,196]},
                        {1:[[236,259],[213,284],[205,287],[203,278],[215,258],[226,248]]},
                        {1:[357,382,404,429,443]},
                        {1:[[286,311],[267,310],[264,313],[271,323],[295,316]]},
                        {1:[279,301,323,346,367]},
                        {1:[[167,191],[151,297],[148,229],[155,230],[179,210]]},
                        {1:[334,345,362,385,392]},
                        {1:[[87,120],[75,127],[67,122],[77,113],[87,105]]},
                        {1:[480,493,507,531,539]},
                        {1:[[142,162],[127,174],[125,179],[137,182],[157,173]]},
                        {1:[504,514,533,549,575,591]},
                        {1:[[266,294],[249,300],[243,297],[240,288],[248,289],[262,290]]},
                        {1:[673,690,715,742,756]},
                        {1:[[269,295],[257,299],[251,298],[258,312],[280,305]]},
                        {1:[643,654,671,677,683]},
                        {1:[[163,184],[152,201],[153,202],[156,191],[161,171]]},
                        {2:[1,18,43,76,117,151,194,219,243,257,256,288,323,390,436,481,543,598,653,707,747,776,799]},
                        {2:[[0,424],[0,346],[0,269],[0,232],[0,198],[0,179],[0,164],[0,154],[0,134],[0,118],[0,82],[0,59],[0,51],[0,54],[0,55],[0,62],[0,76],[0,90],[0,108],[0,128],[0,142],[0,156],[0,167]]},
                        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2]
                     ],
                    4:[
                         {1:[66,71,84,114,142]},
                         {1:[[262,297],[249,305],[249,307],[249,307],[284,285]]},
                         {1:[128,134,157,187,205]},
                         {1:[[338,339],[323,365],[308,368],[317,369],[351,352]]},
                         {1:[167,174,192,216,234]},
                         {1:[[226,259],[220,263],[212,266],[217,261],[241,242]]},
                         {1:[250,265,287,313,334]},
                         {1:[[298,326],[290,329],[284,327],[286,340],[325,326]]},
                         {1:[319,337,377,406]},
                         {1:[[232,233],[209,250],[204,258],[242,243]]},
                         {1:[231,234,241,265,296,300]},
                         {1:[[172,173],[160,190],[154,198],[146,196],[166,193],[182,183]]},
                         {1:[289,292,303,334,343]},
                         {1:[[105,106],[97,123],[87,128],[93,136],[118,119]]},
                         {1:[392,410,427,461]},
                         {1:[[166,167],[143,195],[140,192],[179,180]]},
                         {1:[402,409,420,437,453]},
                         {1:[[92,93],[75,108],[69,112],[72,118],[98,99]]},
                         {1:[476,488,513,532,562,573]},
                         {1:[[125,126],[97,157],[85,163],[87,163],[107,157],[137,138]]},
                         {1:[371,388,425,441,445]},
                         {1:[[308,348],[293,362],[280,371],[285,357],[331,332]]},
                         {1:[466,470,477,500,528,536]},
                         {1:[[237,238],[220,252],[212,259],[205,261],[219,254],[238,239]]},
                         {1:[539,548,557,581,604,626]},
                         {1:[[308,309],[294,328],[287,328],[280,327],[285,338],[322,323]]},
                         {2:[0,0,18,32,52,79,123,163,200,228,254,261,263,279,308,366,418,405,517,565,607,655,709,770,800]},
                         {2:[[0,0],[0,359],[0,359],[0,315],[0,264],[0,234],[0,195],[0,177],[0,164],[0,150],[0,128],[0,82],[0,67],[0,57],[0,54],[0,54],[0,61],[0,72],[0,84],[0,96],[0,111],[0,130],[0,153],[0,153]]},
                         {2:[607,655,709,770,800]},
                         {2:[[365,427],[344,427],[284,427],[293,427]]},
                         [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2]
                     ]
    };
    
    var frame_rate=1000/24;
    var RADIANES = Math.PI/180;
    var frame=0,dist=0,dif_ang=0,fang=0,angulo_futuro=-0.3,angulo=-0.3,x_ob,y_ob,fr=0,fx=0,fy=0,alfa=0,paso=10,paso_frame=0,frame_giro=0,hoja_sobre=-1,d=0,intentos=0,actual=0,nivel_actual=1,obj=0,objeto_y=0,grupo_objeto_x=0,objeto=0,objeto_presente=0,movimientos=0,segundo=40,minuto=1,segundos=0,minutos=0,x_tiempo=150,y_tiempo=40;
    var rana=[],cuadrantes_x=[],objetos=[],objetos_posibles=[],tablilla_x=[];
    var context,fondo,inicio,splash,vida_juego,tiempo,frase="";
    var activado=false,en_aire=false,impacto=false;
    var swidth_fondo=800, sheight_fondo=460,width_fondo=swidth_fondo,height_fondo=sheight_fondo,sx=0,sy=0;
    var swidth_rana=122,sheight_rana=128,width_rana=swidth_rana,height_rana=sheight_rana;
    var swidth_play=481,sheight_play=238,width_play=swidth_play,height_play=sheight_play;
    var swidth_splash=327,sheight_splash=411,width_splash=swidth_splash/6,height_splash=sheight_splash/6,tiempo_splash=0,tiempo_fuera=0,x_splash=850,y_splash=700,xp=6,tiempo_golpe=0;
    var sonido_splash=new Audio(),sonido_golpe=new Audio(),sonido_rana=new Audio();
    sonido_splash.src="sonidos/L3_game_1/water_splash_004.mp3";
    sonido_golpe.src="sonidos/L3_game_1/3.mp3";
    sonido_rana.src="sonidos/L3_game_1/Frog.mp3";
    var hojas_x_ini=datos_texto[nivel_actual][0]["textos_x"],hojas_y_ini=datos_texto[nivel_actual][1]["textos_y"],palabras=datos_texto[nivel_actual][2]["palabras"],correctas=datos_texto[nivel_actual][3]["correctas"],referencias=datos_texto[nivel_actual][4]["referencia"];
    var x_rana=datos_texto[nivel_actual][5]["x_rana"],y_rana=datos_texto[nivel_actual][6]["y_rana"];
    var respuestas=[],colores=["#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF"];
    x_ob=x_rana,y_ob=y_rana;
    tiempo=new Date();
    var onLoad=function(){
        /*Objeto para dibujar el fondo*/
         context.drawImage(fondo,sx,sy,swidth_fondo,sheight_fondo,0,0,width_fondo,height_fondo);
    };

    var onLoadInicio=function(){
        /*Objeto para dibujar el instructivo*/
         context.drawImage(inicio,sx,sy,swidth_play,sheight_play,(800/2)-(width_play/2),(460/2)-(height_play/2),width_play,height_play);                    
    };

    var onLoadRana=function(){
        /*Objeto para dibujar la rana*/
         context.save();
         context.translate(x_rana,y_rana),
         context.rotate(angulo);
         context.drawImage(rana[frame],sx,sy,swidth_rana,sheight_rana,(-width_rana/2),(-height_rana/2),width_rana,height_rana);
         context.restore();
    };
    var onLoadTiempos=function(){

        /*Objeto para escribir el texto del tiempo*/
        context.font="22pt Dimbo Regular";
        context.fillStyle="#FFF";
        context.strokeStyle="#FFF";
        context.fillText("Time "+minutos+":"+segundos,x_tiempo,y_tiempo);

    };

    var onLoadSplash=function(){
        /*Objeto para dibujar el salpicon de agua*/
        context.drawImage(splash,sx,sy,swidth_splash,sheight_splash,x_splash,y_splash,width_splash,height_splash);
        
    };

    /*Funcion de inicio*/
    var Setup = function() {

                      var div = document.getElementById("contenido_swf");
                      var canvas = document.createElement("canvas");
                      context= canvas.getContext('2d');
                      canvas.width = 800;
                      canvas.height = 460;
                      splash=new Image();
                      splash.onload=onLoadSplash;
                      splash.src="imagenes/L3_game_1/splash.png";
                      fondo=new Image();
                      fondo.onload=onLoad;
                      fondo.src="imagenes/L3_game_1/fondo_"+nivel_actual+".png";
                      for (var n=0;n<17;n++){
                            rana.push(new Image());
                            rana[n].onload=onLoad;
                            rana[n].src=(n<10)?"imagenes/L3_game_1/rana_"+(n+1)+".png":"imagenes/L3_game_1/rotar_"+(n-9)+".png";;
                       }
                      inicio=new Image();
                      inicio.onload=onLoadInicio;
                      inicio.src="imagenes/L3_game_1/instrucciones.png";
                      pos=Math.floor(Math.random()*11);
                      div.appendChild(canvas);
                      /*Rutinas y eventos para dispositivos moviles (Android e IOs)*/
                      canvas.addEventListener('touchstart', function(e){ 
                                        start(event); 
                                        e.preventDefault(); 
                       });

                      var start=function(event){
                          rect=div.getBoundingClientRect();
                          y_bound=Math.round(rect.top);
                          x_bound=Math.round(rect.left);
                          x_ob=(event.touches[0].pageX-x_bound);
                          y_ob=(event.touches[0].pageY-y_bound);
                          colores[hoja_sobre]="#FFF";
                          fondo.src="imagenes/L3_game_1/fondo_"+nivel_actual+".png";
                          //document.getElementById("depurar").innerHTML="x= "+x_ob+" y= "+y_ob
                          if(activado==true && en_aire==false)
                              {
                                    angulo_futuro=0;
                                    angulo_futuro=(Math.atan(Math.abs(y_ob-y_rana)/Math.abs(x_ob-x_rana)));
                                    d=Math.abs(x_ob-x_rana)/Math.cos(angulo_futuro);
                                    dist=Math.abs(x_ob-x_rana)/Math.cos(angulo_futuro);
                                    paso_frame=dist/10;
                                    alfa=angulo_futuro;
                                    fx=x_ob-x_rana;
                                    fy=y_ob-y_rana;
                                    pasox=(Math.abs(Math.ceil(fx/fy))); 
                                    pasoy=(Math.abs(Math.ceil(fy/fx)));
                                    fx=fx/Math.abs(fx);
                                    fy=fy/Math.abs(fy);
                                    cuadrante=Math.floor(((fy+fy)+Math.abs(fy+fy))/(fy+fy));
                                    angulo_futuro=(Math.PI/2)+(fy*angulo_futuro);
                                    angulo_futuro=fx*angulo_futuro;
                                    obj=x_ob;
                                    cuadrantes_x=[];objetos_posibles=[];
                                    objetos=objetos_plano[nivel_actual];
                                    var cx=0;
                                    for(var i=0,c=0;i<(objetos[objetos.length-1].length);i=i+2,c++){//Escojer objetos solo en coordenadas x.
                                        objeto=objetos[objetos.length-1][i];
                                        objeto_x=objetos[i][objeto];
                                        tablilla_x=objeto_x.slice(0);
                                        cx=biseccionar(tablilla_x,objeto_x);
                                        if(cx>=0)
                                            {cuadrantes_x.push(cx),objetos_posibles.push(i);}
                                    }
                                    tiempo_splash=0,tiempo_golpe=0;
                                    dif_ang=(angulo<angulo_futuro)?angulo_futuro-angulo:angulo-angulo_futuro;
                                    fang=(angulo<angulo_futuro)?1:-1;
                                    movimientos++;
                              }

                          if(x_ob>((width_fondo/2)-(swidth_play/2))&&x_ob<((width_fondo/2)+(swidth_play/2))&&y_ob>((height_fondo/2)-(sheight_play/2))&&y_ob<((height_fondo/2)+(sheight_play/2)) && activado==false)
                              {activado=true;vida_juego=setInterval(Dinamicajuego,frame_rate);}
                      };
                      /*Rutinas y eventos para computadores*/
                     canvas.onmousedown=function(e){/*Funcion para el evento con mouse*/

                          rect=div.getBoundingClientRect();
                          y_bound=Math.round(rect.top);
                          x_bound=Math.round(rect.left);
                          x_ob=(e.clientX-x_bound);
                          y_ob=(e.clientY-y_bound);
                          colores[hoja_sobre]="#FFF";
                          fondo.src="imagenes/L3_game_1/fondo_"+nivel_actual+".png";
                          //document.getElementById("depurar").innerHTML=x_ob+" "+y_ob
                          if(activado==true && en_aire==false){
                                    angulo_futuro=0;
                                    angulo_futuro=(Math.atan(Math.abs(y_ob-y_rana)/Math.abs(x_ob-x_rana)));
                                    d=Math.abs(x_ob-x_rana)/Math.cos(angulo_futuro);
                                    dist=Math.abs(x_ob-x_rana)/Math.cos(angulo_futuro);
                                    paso_frame=dist/10;
                                    alfa=angulo_futuro;
                                    fx=x_ob-x_rana;
                                    fy=y_ob-y_rana;
                                    pasox=(Math.abs(Math.ceil(fx/fy))); 
                                    pasoy=(Math.abs(Math.ceil(fy/fx)));
                                    fx=fx/Math.abs(fx);
                                    fy=fy/Math.abs(fy);
                                    cuadrante=Math.floor(((fy+fy)+Math.abs(fy+fy))/(fy+fy));
                                    angulo_futuro=(Math.PI/2)+(fy*angulo_futuro);
                                    angulo_futuro=fx*angulo_futuro;
                                    obj=x_ob;
                                    cuadrantes_x=[];objetos_posibles=[];
                                    objetos=objetos_plano[nivel_actual];
                                    var cx=0;
                                    for(var i=0,c=0;i<(objetos[objetos.length-1].length);i=i+2,c++){//Escojer objetos solo en coordenadas x.
                                        objeto=objetos[objetos.length-1][i];
                                        objeto_x=objetos[i][objeto];
                                        tablilla_x=objeto_x.slice(0);
                                        cx=biseccionar(tablilla_x,objeto_x);
                                        if(cx>=0)
                                            {cuadrantes_x.push(cx),objetos_posibles.push(i);}
                                    }
                                    tiempo_splash=0,tiempo_golpe=0;
                                    dif_ang=(angulo<angulo_futuro)?angulo_futuro-angulo:angulo-angulo_futuro;
                                    fang=(angulo<angulo_futuro)?1:-1;
                                    movimientos++;
                              }

                          if(x_ob>((width_fondo/2)-(swidth_play/2))&&x_ob<((width_fondo/2)+(swidth_play/2))&&y_ob>((height_fondo/2)-(sheight_play/2))&&y_ob<((height_fondo/2)+(sheight_play/2)) && activado==false)
                              {activado=true,vida_juego=setInterval(Dinamicajuego,frame_rate);}
                      }; 
        };

        /*Objeto para ejecutar el juego*/
        var Dinamicajuego = function (){
                       /*Logica del juego*/
                       
                        onLoad();
                        onLoadTiempos();
                        context.font="15pt Dimbo Regular";
                        context.strokeStyle="#FFF";
                        for (var n=0;palabras.length>n;n++){
                            context.fillStyle=colores[n];
                            context.fillText(palabras[n],hojas_x_ini[n],hojas_y_ini[n]);
                        }

                        context.fillStyle="#FFF";
                        context.fillText(frase,45,450);
                        if (dif_ang>0){
                            frame_giro=(frame_giro+1)%7;
                            frame=frame_giro+10;
                            dif_ang=dif_ang-(RADIANES*12);
                            angulo=angulo+(fang*(RADIANES*12));
                        }

                        onLoadRana();
                        if(d>0){

                                if (dif_ang<=0){
                                         fx=x_ob-x_rana;
                                         fy=y_ob-y_rana;
                                         fx=fx/Math.abs(fx);
                                         d=d-paso;
                                         fy=fy/Math.abs(fy);
                                         x_rana=x_rana+(fx*(Math.cos(alfa)*paso));
                                         y_rana=y_rana+(fy*(Math.sin(alfa)*paso));
                                         frame=Math.floor(fr/paso_frame);
                                         fr+=10;
                                         en_aire=true;
                                }

                        }else if(d<=0 && movimientos>0){
                           
                                    frame=0;
                                    fr=0;
                                    impacto=false;

                                    for(var c=0,n=0,i=1;n<cuadrantes_x.length;n++,i=i+2){
                                                /*Determinacion de la ubicacion de la rana*/
                                                objeto=objetos_posibles[n]+1;
                                                c=cuadrantes_x[n];

                                                objeto_y=objetos[objeto][objetos[objetos.length-1][objeto]][c];
                                                grupo_objeto_x=objetos[objeto-1][objetos[objetos.length-1][objeto]];
                                                objeto_presente=referencias[objeto];
                                                if(ubicacionEnte(grupo_objeto_x,objeto_y,c)==true){
                                                    impacto=true;
                                                    break;
                                                }
                                    }                                            
                                    
                                    if (objeto_presente==correctas[actual] && en_aire==true && impacto==true){
                                                /*Correcto*/
                                                actual++;
                                                colores[objeto_presente]="#FFF";
                                                frase=frase+palabras[objeto_presente]+" ";
                                    }else if (objeto_presente!=correctas[actual] && en_aire==true && impacto==true){
                                                /*Inccorrecto*/
                                               existente=respuestas.indexOf(objeto_presente);
                                               respuestas.splice(existente,1);
                                               colores[objeto_presente]="red";
                                               intentos++;
                                    }
                                    
                                   if(impacto==true){
                                        tiempo_golpe++;
                                        
                                        if(tiempo_golpe==1)
                                           {sonido_golpe.src="sonidos/L3_game_1/"+objetos[objetos.length-1][objeto]+".mp3",sonido_golpe.play(),sonido_rana.play();}
                                   }else{
                                       x_splash=(x_ob)-(width_splash/2),y_splash=y_ob-(height_splash/2);
                                       if (tiempo_splash<27){
                                          onLoadSplash()
                                          tiempo_splash++;
                                          
                                          if(tiempo_splash==1)
                                              sonido_splash.play();

                                          if (xp>=3)
                                              {width_splash=swidth_splash/xp;height_splash=sheight_splash/xp;}
                                          xp=xp-0.5;
                                          x_rana=850,y_rana=700;//Rana fuera del canvas
                                       }else
                                          {x_rana=datos_texto[nivel_actual][5]["x_rana"],y_rana=datos_texto[nivel_actual][6]["y_rana"],angulo_futuro=-0.3;xp=6;angulo=-0.3}
                                   }
                                en_aire=false;
                                
                       }

                       duracion();
                       if(intentos==5){
                            clearInterval(vida_juego);
                            swidth_play=290;width_play=swidth_play;
                            sheight_play=176;height_play=sheight_play;
                            resetearVariables();
                            inicio.src="imagenes/L3_game_1/lose.png";
                            onLoadInicio();
                       }else if(intentos<5 && (actual==correctas.length)){
                            clearInterval(vida_juego);
                            swidth_play=297;width_play=swidth_play;
                            sheight_play=176;height_play=sheight_play;
                            nivel_actual++;
                            resetearVariables();   
                            inicio.src="imagenes/L3_game_1/win.png";
                            onLoadInicio();
                       }   
                       
        };

       function duracion(){

            /*Funcion para la duracion del juego por nivel*/
            tiempo.setSeconds(segundo);
            tiempo.setMinutes(minuto);
            segundos=tiempo.getSeconds();
            minutos=tiempo.getMinutes();
            segundo=(segundo>=0)?segundo-(1/24):120;
            minuto=(minuto>=0)?minuto-(1/1440):1;

            if(segundo<=0){
                    clearInterval(vida_juego);
                    swidth_play=290;width_play=swidth_play;
                    sheight_play=176;height_play=sheight_play;
                    resetearVariables();
                    inicio.src="imagenes/L3_game_1/lose.png";
                    onLoadInicio();  
            }

       }; 
       function ubicacionEnte(c_x,c_y,pos){
           /* Funcion que retorna un bool, para determinar si el ente esta en algun lugar*/
           return (c_x[pos]<=x_ob&&x_ob<=c_x[pos+1]&&c_y[1]>=y_ob&&c_y[0]<=y_ob);
       };
       function biseccionar(forma,referencia){
            /*Funcion para biseccionar*/
            var l=forma.length;
            var ps=Math.ceil(l/2);
            //document.getElementById("depurar").innerHTML=forma+" "+referencia+" "+obj
            if(l>1){
                 if (forma[ps]>=obj)
                     return biseccionar(forma.splice(0,ps),referencia);
                 else if (forma[ps]<obj)
                     return biseccionar(forma.splice(ps,l/2),referencia);
            }else{
                 return referencia.indexOf(forma[0]);
            }
       };
       
       var resetearVariables=function(){

           /*Objeto para resetear las variables del juego*/
            respuestas=[],colores=["#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF"];
            cuadrantes_x=[],objetos=[],objetos_posibles=[];
            frame=0,dist=0,dif_ang=0,fang=0,segundo=40,minuto=1,angulo_futuro=-0.3,angulo=-0.3,x_ob,y_ob,fr=0,fx=0,fy=0,alfa=0,paso=10,paso_frame=0,frame_giro=0,hoja_sobre=-1,d=0,intentos=0,actual=0,obj=0,objeto_y=0,grupo_objeto_x=0,objeto=0,objeto_presente=0,movimientos=0;
            frase="";
            activado=false;tablilla_x=[];
            hojas_x_ini=datos_texto[nivel_actual][0]["textos_x"],hojas_y_ini=datos_texto[nivel_actual][1]["textos_y"],palabras=datos_texto[nivel_actual][2]["palabras"],correctas=datos_texto[nivel_actual][3]["correctas"],referencias=datos_texto[nivel_actual][4]["referencia"];
            x_rana=datos_texto[nivel_actual][5]["x_rana"],y_rana=datos_texto[nivel_actual][6]["y_rana"];
            
       };

    Setup();//Llamado al objeto de inicio del juego.
};
