$(document).ready(function(){
	
	
	
    $('a.mcars').click(function(e){
        e.preventDefault();
        $('a.mcars').toggleClass('s');
        $('#lcars,#ccars').toggle();

		/*$(".lcars-prev").html("");
		$(".lcars-next").html("");
		
        slider1.reloadSlider();
        slider2.reloadSlider();*/
		
        return false;
    });

    slider1 = $('#lcars ul.cars-slider').bxSlider({
        pager: false,
        nextSelector: '.lcars-next',
        prevSelector: '.lcars-prev',
        nextText: '<img class="next" src="/bitrix/templates/renault/components/bitrix/news.list/index_slider_avto/images/arr_r_karusel.gif">',
        prevText: '<img class="prev" src="/bitrix/templates/renault/components/bitrix/news.list/index_slider_avto/images/arr_l_karusel.gif">',
        minSlides: 5,
        maxSlides: 5,
        slideWidth: 170,
        slideMargin: 5
    });

    slider2 = $('#ccars ul.cars-slider').bxSlider({
        pager: false,
        nextSelector: '.ccars-next',
        prevSelector: '.ccars-prev',
        nextText: '<img class="next" src="/bitrix/templates/renault/components/bitrix/news.list/index_slider_avto/images/arr_r_karusel.gif">',
        prevText: '<img class="prev" src="/bitrix/templates/renault/components/bitrix/news.list/index_slider_avto/images/arr_l_karusel.gif">',
        minSlides: 5,
        maxSlides: 5,
        slideWidth: 170,
        slideMargin: 5,
		onSliderLoad: function(){
			$("#ccars").hide();
		},
    });
});
