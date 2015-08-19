$(document).ready(function() {
	//make divs appear as a grid
	//hover effect, mouseenter() and mouseleave(), change color
	//should have a trailing effect, clear should be slow...

	//button should reset page and pop dialogue asking for new grid amount

	$('div').on('click', function () {
    	$('div').addClass("highlight");
	});

	$('div').mouseleave(function () {
    $(this).animate({height: "120px"}, 400);
    $(this).toggleClass('highlight');
	});
	
	$('div').mouseenter(function () {
    $(this).animate({height: "20px"}, 400);
    $(this).toggleClass('highlight');
	});

});