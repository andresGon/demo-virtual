/* 
 * Coleccion de juegos
 */
/*-- JUEGO 1 LECCION 1 --*/
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
    var swidth_fondo=820, sheight_fondo=460,width_fondo=swidth_fondo,height_fondo=sheight_fondo,sx=0,sy=0;
    var swidth_carta=133, sheight_carta=116,width_carta=swidth_carta,height_carta=sheight_carta;
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
            fondo.onload=onLoad;
            fondo.src="imagenes/L1_game_1/fondo_1.png";
            perdio= new Image();
            perdio.onload=onLoadPierde;
            perdio.src="imagenes/L1_game_1/lose.png";
            gano= new Image();
            gano.onload=onLoadPierde;
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
            }
            
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
                                correctas=[];cartas_correcta=[];cartas_correctas=0,correcta=0,intentos=0;reinicio=true;
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
    var dinamicaJuego=function(){
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
                    context.font="20pt Calibri";
                    context.fillStyle="#FFF";
                    context.strokeStyle="#FFF";
                    context.fillText(correcta,445,318);
                    context.font="20pt Calibri";
                    context.fillStyle="#FFF";
                    context.strokeStyle="#FFF";
                    context.fillText((intentos-correcta),445,390);
                    var palabra=0,pos_y=190;
                    while(palabra<(cartas_correctas/2)){
                            context.font="18pt Calibri";
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
        vida_juego=setTimeout(dinamicaJuego,frame_rate);
    };
    Setup();//Llamado al objeto de inicio del juego.
    
};

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
                            {"textos_x":[87,149,179,274,334,249,300,416,415,495,395,481,556,623,631]},
                            {"textos_y":[273,332,237,307,228,171,106,164,84,124,315,229,304,227,146]},
                            {"palabras":["great","was","really","had","everyone","really","to","It","I","time.","see","a","great"]},
                            {"correctas":[7,1,2,12,6,10,4,8,3,11,5,0,9]},
                            {"referencia":{1:0,3:1,5:2,7:3,9:4,11:5,13:6,15:7,17:8,19:9,21:10,23:11,25:13,27:14}},
                            {"x_rana":683},
                            {"y_rana":359}
                        ]
    }
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
    var frame=0,dist=0,dif_ang=0,fang=0,angulo_futuro=-0.3,angulo=-0.3,x_ob,y_ob,fr=0,fx=0,fy=0,alfa=0,paso=10,paso_frame=0,frame_giro=0,hoja_sobre=-1,d=0,intentos=0,actual=0,nivel_actual=1,obj=0,objeto_y=0,grupo_objeto_x=0,objeto=0,objeto_presente=0,movimientos=0;
    var rana=[],cuadrantes_x=[],objetos=[],objetos_posibles=[],tablilla_x=[]
    var context,fondo,inicio,splash,vida_juego,instructivo,frase="";
    var activado=false,en_aire=false,impacto=false;
    var swidth_fondo=800, sheight_fondo=460,width_fondo=swidth_fondo,height_fondo=sheight_fondo,sx=0,sy=0;
    var swidth_rana=122,sheight_rana=128,width_rana=swidth_rana,height_rana=sheight_rana;
    var swidth_play=481,sheight_play=238,width_play=swidth_play,height_play=sheight_play;
    var swidth_splash=327,sheight_splash=411,width_splash=swidth_splash/6,height_splash=sheight_splash/6,tiempo_splash=0,tiempo_fuera=0,x_splash=850,y_splash=700,xp=6,tiempo_golpe=0;
    var sonido_splash=new Audio(),sonido_golpe=new Audio(),sonido_rana=new Audio();
    sonido_splash.src="sonidos/L3_game_1/water_splash_004.mp3";
    sonido_golpe.src="sonidos/L3_game_1/3.mp3";
    sonido_rana.src="sonidos/L3_game_1/Frog.mp3"
    var hojas_x_ini=datos_texto[nivel_actual][0]["textos_x"],hojas_y_ini=datos_texto[nivel_actual][1]["textos_y"],palabras=datos_texto[nivel_actual][2]["palabras"],correctas=datos_texto[nivel_actual][3]["correctas"],referencias=datos_texto[nivel_actual][4]["referencia"];
    var x_rana=datos_texto[nivel_actual][5]["x_rana"],y_rana=datos_texto[nivel_actual][6]["y_rana"];
    var respuestas=[],colores=["#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF"];
    x_ob=x_rana,y_ob=y_rana;

    var onLoad=function(){
         context.drawImage(fondo,sx,sy,swidth_fondo,sheight_fondo,0,0,width_fondo,height_fondo);
    };

    var onLoadInicio=function(){
         context.globalAlpha = 0.8; 
         context.drawImage(inicio,sx,sy,swidth_play,sheight_play,(800/2)-(width_play/2),(460/2)-(height_play/2),width_play,height_play);                    
    };

    var onLoadRana=function(){
         context.save();
         context.translate(x_rana,y_rana),
         context.rotate(angulo);
         context.globalAlpha = 1; 
         context.drawImage(rana[frame],sx,sy,swidth_rana,sheight_rana,(-width_rana/2),(-height_rana/2),width_rana,height_rana);
         context.restore();
    };

    var onLoadSplash=function(){
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
                      splash.src="imagenes/L3_game_1/splash.png"
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
                      inicio.src="imagenes/L3_game_1/instrucciones.png"
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
                                    paso_frame=dist/10
                                    alfa=angulo_futuro;
                                    fx=x_ob-x_rana;
                                    fy=y_ob-y_rana;
                                    pasox=(Math.abs(Math.ceil(fx/fy))); 
                                    pasoy=(Math.abs(Math.ceil(fy/fx)));
                                    fx=fx/Math.abs(fx);
                                    fy=fy/Math.abs(fy);
                                    cuadrante=Math.floor(((fy+fy)+Math.abs(fy+fy))/(fy+fy));
                                    angulo_futuro=(Math.PI/2)+(fy*angulo_futuro);
                                    angulo_futuro=fx*angulo_futuro;;
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
                                            {
                                                cuadrantes_x.push(cx),objetos_posibles.push(i);
                                            }
                                    }
                                    tiempo_splash=0,tiempo_golpe=0;
                                    dif_ang=(angulo<angulo_futuro)?angulo_futuro-angulo:angulo-angulo_futuro;
                                    fang=(angulo<angulo_futuro)?1:-1;
                                    movimientos++;
                              }

                          if(x_ob>((width_fondo/2)-(swidth_play/2))&&x_ob<((width_fondo/2)+(swidth_play/2))&&y_ob>((height_fondo/2)-(sheight_play/2))&&y_ob<((height_fondo/2)+(sheight_play/2)) && activado==false)
                              {activado=true;vida_juego=setInterval(dinamicaJuego,frame_rate);}
                      };
                      /*Rutinas y eventos para computadores*/
                     canvas.onmousedown=function(e){/*Funcion para el evento con mouse*/

                          rect=div.getBoundingClientRect()
                          y_bound=Math.round(rect.top);
                          x_bound=Math.round(rect.left);
                          x_ob=(e.clientX-x_bound);
                          y_ob=(e.clientY-y_bound);
                          colores[hoja_sobre]="#FFF"
                          fondo.src="imagenes/L3_game_1/fondo_"+nivel_actual+".png";
                          //document.getElementById("depurar").innerHTML=x_ob+" "+y_ob
                          if(activado==true && en_aire==false){
                                    angulo_futuro=0;
                                    angulo_futuro=(Math.atan(Math.abs(y_ob-y_rana)/Math.abs(x_ob-x_rana)));
                                    d=Math.abs(x_ob-x_rana)/Math.cos(angulo_futuro);
                                    dist=Math.abs(x_ob-x_rana)/Math.cos(angulo_futuro);
                                    paso_frame=dist/10
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
                                            {
                                                    cuadrantes_x.push(cx),objetos_posibles.push(i);
                                            }
                                    }
                                    tiempo_splash=0,tiempo_golpe=0;
                                    dif_ang=(angulo<angulo_futuro)?angulo_futuro-angulo:angulo-angulo_futuro;
                                    fang=(angulo<angulo_futuro)?1:-1;
                                    movimientos++;
                              }

                          if(x_ob>((width_fondo/2)-(swidth_play/2))&&x_ob<((width_fondo/2)+(swidth_play/2))&&y_ob>((height_fondo/2)-(sheight_play/2))&&y_ob<((height_fondo/2)+(sheight_play/2)) && activado==false)
                              {activado=true,vida_juego=setInterval(dinamicaJuego,frame_rate);}
                      }; 
        };

        /*Objeto para ejecutar el juego*/
        var dinamicaJuego = function (){
                       /*Logica del juego*/
                        onLoad();
                        context.font="12pt Georgia";
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
                                         en_aire=true
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
                                                if(ubicacionente(grupo_objeto_x,objeto_y,c)==true){
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
                                          x_rana=850,y_rana=700//Rana fuera del canvas
                                       }else
                                          {x_rana=datos_texto[nivel_actual][5]["x_rana"],y_rana=datos_texto[nivel_actual][6]["y_rana"],angulo_futuro=-0.3;xp=6;}
                                   }
                                en_aire=false;
                                
                       }
                       
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
        
       function ubicacionente(c_x,c_y,pos){
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
           
            respuestas=[],colores=["#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF","#FFF"];
            cuadrantes_x=[],objetos=[],objetos_posibles=[];
            frame=0,dist=0,dif_ang=0,fang=0,angulo_futuro=-0.3,angulo=-0.3,x_ob,y_ob,fr=0,fx=0,fy=0,alfa=0,paso=10,paso_frame=0,frame_giro=0,hoja_sobre=-1,d=0,intentos=0,actual=0,obj=0,objeto_y=0,grupo_objeto_x=0,objeto=0,objeto_presente=0,movimientos=0;
            frase="";
            activado=false;tablilla_x=[]
            hojas_x_ini=datos_texto[nivel_actual][0]["textos_x"],hojas_y_ini=datos_texto[nivel_actual][1]["textos_y"],palabras=datos_texto[nivel_actual][2]["palabras"],correctas=datos_texto[nivel_actual][3]["correctas"],referencias=datos_texto[nivel_actual][4]["referencia"];
            x_rana=datos_texto[nivel_actual][5]["x_rana"],y_rana=datos_texto[nivel_actual][6]["y_rana"];
            
       };

    Setup();//Llamado al objeto de inicio del juego.
}