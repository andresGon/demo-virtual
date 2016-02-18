function notificacionGanador (div_anexar) {

	var frame_rate=1000/24;
	var div=document.getElementById(div_anexar);
	var canvas=document.createElement("canvas");
	canvas.setAttribute("id","pirotecnicos");
	var context=canvas.getContext("2d");
	var click=false;
	canvas.width=1025;
	canvas.height=550;
    var centerX=canvas.width/2,centerY=canvas.height,radius=0,dx=0,dy=0,pasox=0,numero_chispas=0,pasoy=0,numproyectiles=1,g=2,Vy=0,x_click=centerX,y_click=centerY,centroxc=centerX,lchispaX=0,tchispa=2,lchispaY=0,centroyc=centerY,velocidad=70,rozamiento=0,d=0,angulos=0,alfa=0;
    var color="#E6E68A";
    var lchispasx=[],lchispasy=[],centrosxc=[],centrosyc=[],px=[],py=[],anguloschispa=[],velocidadchispa=[],tamanochispa=[],t=[],proyectil=[];
    var d=[],centrox=[],centroy=[],velocidad=[],angulos=[],rozamiento=[],alfa=[],colasx=[],colasy=[];

	var id_universal=0
    listacolores=["A","B","C","D","E","F","1","2","3","4","5","6","7","8","9","0"];
	var dibujarCuerpoProyectil=function () {

		context.beginPath();
		context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
		context.fillStyle = color;
		context.fill();
		context.stroke();

	};
	var dibujarLineasCola=function() {

		context.moveTo(centerX - radius,centerY - radius);
		context.lineTo(centerX - dx,centerY - dy);
		context.moveTo(centerX + radius,centerY + radius);
		context.lineTo(centerX - dx,centerY - dy);
  		context.strokeStyle = color;
		context.stroke();

	};
	var dibujarLineasExplosion= function() {

		context.beginPath();
		context.arc(centroxc,centroyc, tchispa, 0, 2 * Math.PI, false);
		context.fillStyle = color;
		context.fill();

	};

	var Proyectil=function(id) {

		this.id_proyectil=id;

	};
	Proyectil.prototype.ubicarCursor = function(id) {
			/*color="#";
			for (var i = 5; i >= 0; i--) {
				c=Math.round(Math.random()*(listacolores.length-1));
				color= color + listacolores[c];
			};
        		$("#depurar").html("depuracion: "+color);*/

			velocidad.push(30),radius=1.2//,centerX=canvas.width/2,centerY=canvas.height;
			centrox.push(canvas.width/2),centroy.push(canvas.height),angulos.push(0),rozamiento.push(0),alfa.push(0);
            angulos[id]=(Math.atan(Math.abs(y_click - centroy[id])/Math.abs(x_click - centrox[id])));
            alfa[id]=angulos[id];
            d[id]=Math.abs(x_click - centrox[id])/Math.cos(angulos[id]);
            pasox=(x_click - centrox)/Math.abs(x_click - centrox[id]);
            pasoy=(y_click - centroy[id])/Math.abs(y_click - centroy[id]);
            orientacion_x=((x_click-centrox[id])!=0)? x_click-centrox[id]:1;
            orientacion_y=((y_click-centroy[id])!=0)? y_click-centroy[id]:1;
            orientacion_x=orientacion_x/Math.abs(orientacion_x);
            orientacion_y=orientacion_y/Math.abs(orientacion_y);
            rozamiento[id]=((velocidad[id]*velocidad[id])/d[id])/2.2;
            angulos[id]=(Math.PI/2)+(orientacion_y*angulos[id]);
            angulos[id]=orientacion_x*angulos[id];
            //$("#depurar").html("depuracion: r= "+rozamiento);

	};
	Proyectil.prototype.movimiento = function(id) {

	        d[id]=d[id] - velocidad[id];
			velocidad[id]=velocidad[id] - rozamiento[id];
	        centrox[id]=centrox[id]+(orientacion_x*(Math.cos(alfa[id])*velocidad[id]));
	        centroy[id]=centroy[id]+(orientacion_y*(Math.sin(alfa[id])*velocidad[id]));
	        colasx[id]=(x_click - centrox[id])/5;
	        colasy[id]=(y_click - centroy[id])/5;

	};
	
	Proyectil.prototype.detonacion = function(id) {

			numero_chispas= (Math.round(Math.random()*5) + 75),tx=0,ty=0,Vy=0;

			velocidad.splice(id,1),radius=1.2,centrox.splice(id,1),centroy.splice(id,1),angulos.splice(id,1),rozamiento.splice(id,1),alfa.splice(id,1);

			for (var i = 0; i < numero_chispas; i++) {

				tx=(Math.round(Math.random()*-560) + 280);
				ty=(Math.round(Math.random()*-560) + 280);
				tx=(tx==0)?(tx+(Math.round(Math.random()*-2) + 1)):tx;
				ty=(ty==0)?(ty+(Math.round(Math.random()*-2) + 1)):ty;
				t.push(0)
            	anguloschispa.push(Math.atan(Math.abs(ty)/Math.abs(tx)));
				lchispasx.push(tx);
				lchispasx.push(ty);
				centrosxc.push(x_click);
				centrosyc.push(y_click);
				px.push(tx/Math.abs(tx));
				py.push(ty/Math.abs(ty));
				velocidadchispa.push((Math.random()*5));
				tamanochispa.push(Math.round(Math.random()*2));
	            /*anguloschispa[i]=(Math.PI/2)+(py[i]*anguloschispa[i]);
	            anguloschispa[i]=px[i]*anguloschispa[i];*/

			};
			
	};
	Proyectil.prototype.explosion = function(id) {

			for (var i = 0; i < tamanochispa.length; i++) {

            	t[i]=t[i]+0.1;

				if(tamanochispa[i]<=0.02){

					centrosxc.splice(i,1);
					centrosyc.splice(i,1);
					tamanochispa.splice(i,1);
					px.splice(i,1);
					py.splice(i,1);
					anguloschispa.splice(i,1);
					velocidadchispa.splice(i,1);
					t.splice(i,1);

				}

				centrosxc[i]= centrosxc[i] + (px[i]*(Math.cos(anguloschispa[i]))*velocidadchispa[i]);
				centrosyc[i]= centrosyc[i] + (py[i]*(Math.sin(anguloschispa[i]))*velocidadchispa[i]);
				Vy=(Math.sin(anguloschispa[i]))-(g*t[i]);
				centrosyc[i]=centrosyc[i]-Vy;
				centroxc= centrosxc[i];
				centroyc= centrosyc[i];
				tchispa=tamanochispa[i];

				dibujarLineasExplosion();

				tamanochispa[i]=(tamanochispa[i]>0.02)?tamanochispa[i]-0.02:0.0001;
				//radius=(radius>0.008)?radius-0.008:0.001;

			};
	};
	Proyectil.prototype.dibujarProyectil = function(id) {

		dibujarCuerpoProyectil();
		dibujarLineasCola();
	};


	var Setup=function() {

		canvas.onmousedown=function (e) {

                recuadro=canvas.getBoundingClientRect();
                x_click=(e.clientX-Math.round(recuadro.left));
                y_click=(e.clientY-Math.round(recuadro.top));
                click=true;
                proyectil.push(new Proyectil(id_universal));
                id_universal=1;
                //id_universal++;
				/*centerX=x_click;
				centerY=y_click;*/

		}
		generarObjetivo();
		animacion();
	};
	var Dinamica=function() {

		requestAnimationFrame(animacion);
        context.clearRect(0,0,canvas.width,canvas.height);

     	for (var n = 0; n <id_universal; n++) {

     		centerX=centrox[n];
     		centerY=centroy[n];
     		dx=colasx[n];
     		dy=colasy[n];
//	    	$("#depurar").html("depuracion: r= "+centrox+" , "+id_universal);


	        if(d[n]>0)
	        	{proyectil[n].movimiento(n);}
	        else{

	        	 proyectil[n].detonacion(n);	
	        	 generarObjetivo();
	        	 proyectil[n].ubicarCursor(n);

	        }
	    	 if(click==true){

	    	 		//centerX=canvas.width/2,centerY=canvas.height;
	    	 		//centrox[n]=canvas.width/2,centroy[n]=canvas.height;
	    	 		proyectil[n].detonacion(n);
	    	 		proyectil[n].ubicarCursor(n);
	    	 		click=false;
	    	 }
	    	proyectil[n].explosion(n);
	    	proyectil[n].dibujarProyectil(n);
     	};
		//context.clearRect(centerX-(radius/2),centerY-(radius/2), radius, radius)

		//canvas.style.backgroundColor="#000";

	};
	function generarObjetivo(){
		x_click=Math.round(Math.random()*canvas.width);
		y_click=Math.round(Math.random()*canvas.height);
	}
	var animacion=function() {
        /*Objeto para la animacion*/
        vida_juego=setTimeout(Dinamica,frame_rate);

	};
	Setup();
	//canvas.style.backgroundColor="#000";
	div.appendChild(canvas);
}