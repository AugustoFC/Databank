$(document).ready(function(){

	$('.arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.arriba').slideDown(300);
		} else {
			$('.arriba').slideUp(300);
		}
	});

    $('.inicio').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

    $(".inicios").click(function() {
        $("html").animate(
          {
            scrollTop: $(".titulo1").offset().top
          },
          800 
        );
      });

    $(".trabajos").click(function() {
        $("html").animate(
          {
            scrollTop: $(".info").offset().top
          },
          800 
        );
      });
    
      $(".conocimientos").click(function() {
        $("html").animate(
          {
            scrollTop: $(".skills").offset().top
          },
          800 
        );
      });

      $(".contactos").click(function() {
        $("html").animate(
          {
            scrollTop: $(".contacto").offset().top
          },
          800 
        );
      });
});