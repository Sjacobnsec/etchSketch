
var row = 50;
var column = 8; 


$(document).ready(function() {
	for (var i = 0; i < row; i++) {
		//appends 8 divs to wrapper 
		$('#wrapper').after($('<div class="app"></div>'));
	}
  $('.app').mouseenter(function(){
    $(this).addClass('highlight');
  });
  $('.app').mouseleave(function(){
    $(this).removeClass('highlight');
  });
});
