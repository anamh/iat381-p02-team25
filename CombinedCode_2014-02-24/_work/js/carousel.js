$(document).ready(function() {
$("#carousel-frame").css("overflow", "hidden");

$("ul#slides").cycle({
	fx: 'fade',
	pause: 1,
	prev: '#prev',
	next: '#next'
});


$("#carousel-frame").hover(function() {
	$("#carousel-nav").fadeIn();
	},
		function() {
	$("#carousel-nav").fadeOut();
	});

});