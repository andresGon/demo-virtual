$(document).ready(function() {

	$("body,html").animate({scrollTop:0},100);

	//menu top
	var nav = $('.wrapMenu');

	$(window).scroll(function () {
		if ($(this).scrollTop() > 125) {
			nav.addClass("f-nav");

		} else {
			nav.removeClass("f-nav");

		}

		// animated hand
		if ($(this).scrollTop() > 1) {
			$('.wrapLeftHand img').css('display', 'none');
			$('.wrapRightHand img').css('display', 'none');
			$('.tree img').eq(0).css('display', 'none').removeClass('animated fadeInDown');
			$('.tree img').eq(1).css('display', 'none').removeClass('animated fadeInDown');
			$('.tree img').eq(2).css('display', 'none').removeClass('animated fadeInDown');
			$('.wrapFourth img').eq(1).css('display', 'none');
			$('.wrapFourth img').eq(2).css('display', 'none');
			$('.wrapFourth img').eq(3).css('display', 'none');
			$('.wrapFourthfix > .txt > span').css('display', 'none');
			$('.wrapFourthfix > img').css('display', 'none');

		}
		if ($(this).scrollTop() > 500) {
			$('.wrapLeftHand img').css('display', 'block').addClass('animated fadeInLeft');

		}
		if($(this).scrollTop() > 600){










			$('.imgPop04').css('display', 'block').addClass('animated bounceIn');


			setTimeout(  function()   {    $('.imgPop01').css('display', 'block').addClass('animated bounceIn');  }, 800);

			setTimeout(  function()   {    $('.imgPop02').css('display', 'block').addClass('animated bounceIn');  }, 1600);

			setTimeout(  function()   {    $('.imgPop03').css('display', 'block').addClass('animated bounceIn');  }, 2400);





			setTimeout(  function()   { $('.wrapFourthfix > .txt > span').eq(0).css('display', 'block').addClass('animated infinite pulse');
										$('.wrapFourthfix > .txt > span').eq(1).css('display', 'block').addClass('animated infinite pulse');
										$('.wrapFourthfix > .txt > span').eq(2).css('display', 'block').addClass('animated lightSpeedIn');
										$('.wrapFourthfix > .txt > span').eq(3).css('display', 'block').addClass('animated rotateIn');
										$('.wrapFourthfix > .txt > span').eq(4).css('display', 'block').addClass('animated zoomIn');
										$('.wrapFourthfix > .txt > span').eq(5).css('display', 'block').addClass('animated rollIn');
										$('.wrapFourthfix > .txt > span').eq(6).css('display', 'block').addClass('animated rollIn');

						}, 3200);

		}
		//else {$('.wrapLeftHand img').animate({left: '-256px'}, 100);}

		//animated hand 2
		if ($(this).scrollTop() > 700) {
			$('.wrapRightHand img').css('display', 'block').addClass('animated fadeInRight');

		}

		// fichas


		$('.ficha1, .ficha2, .ficha3, .ficha4, .ficha5, .ficha6, .ficha7').hover(
       function(){ $(this).addClass('animated bounce') },
       function(){ $(this).removeClass('animated bounce') }
		)
		//tree

		if ($(this).scrollTop() > 1500) {
			$('.imgPer').addClass('animated pulse infinite');

			$('.tree img').eq(0).css('display', 'block').addClass('animated fadeInDown');
			setTimeout(  function()   {   $('.tree img').eq(1).css('display', 'block').addClass('animated fadeInDown');   }, 800);
			setTimeout(  function()   {    $('.tree img').eq(2).css('display', 'block').addClass('animated fadeInDown');  }, 1200);

		}
		//line

		if ($(this).scrollTop() > 2300) {
			$('.wrapFourth img').eq(1).css('display', 'block').addClass('animated rotateInUpLeft');
			setTimeout(  function()   { $('.wrapFourth img').eq(2).css('display', 'block').addClass('animated rotateInUpLeft');   }, 800);
			setTimeout(  function()   { $('.wrapFourth img').eq(3).css('display', 'block').addClass('animated rotateInUpLeft');   }, 1200);

			$('.wrapFourth img').eq(4).css('display', 'block').addClass('animated bounce');
			$('.wrapFourth img').eq(5).css('display', 'block').addClass('animated bounce');
			$('.wrapFourth img').eq(6).css('display', 'block').addClass('animated bounce');

		}

		//

	});
	//botones scroll

	var scrolled=0;

	 $(".btnDown").on("click" ,function(){
	 			if(scrolled<7200){

                scrolled=scrolled+800;

				$("body").animate({
				        scrollTop:  scrolled
				   });
			}else{
				//$(this).fadeOut();
				//$('.shadowDown').fadeOut();
			}

	});


    $(".btnUp").on("click" ,function(){
				scrolled=scrolled-800;

				$("body").animate({
				        scrollTop:  scrolled
				   });

			});

    $(".clearValue").on("click" ,function(){
				scrolled=0;
		});


    $("body").bind("mousewheel", function() {
         return false;
     });

});
