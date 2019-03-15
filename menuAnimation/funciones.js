

$(document).ready(function(e) {
	//btmenu
	$('.bt-menu').on('click', function(e){
		e.preventDefault();
		
		if($(this).hasClass('open')){
			cerrarMenu();
		}else{
			abrirMenu();
		}
		$(this).toggleClass('open');
	});	
/////FUNCIONES


//Abre
function abrirMenu(){	
var menu = $('nav');
	btMenu = $('.bt-menu');
	li = menu.find('li');
	li.removeClass('view');
	$('header').addClass('op');
	$('.op').animate({'left': 0}, 1500);
	btMenu.animate({'left':220}, 1400, function(){
		menu.animate({'left': 0}, 1200, 'easeInOutSine', function(){

			var i = 0;
			var menuX = setInterval(function() {
					li.eq(i).addClass('view')
					i++;
					if(i > li.length){
						clearInterval(menuX);	
					}
				}, 100);	
		});	
	});
	
}
//Cierra
function cerrarMenu(){
	$('header').removeClass('op');
var menu = $('nav');
	btMenu = $('.bt-menu');
	li = menu.find('li');		
	li.each(function(index, element) {
		$(this).removeClass('view');
	});
	
	
	$('.op').animate({'left':'-400px'}, 1500, 'easeInOutSine');
	btMenu.animate({'left': '23px'}, 1400, 'easeInOutSine');
	menu.animate({'left':'-250px'}, 1200, 'easeInOutSine');
	
}
});