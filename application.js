var row = 8;
var column = 8; 


$(document).ready(function() {
	for (var i = 0; i < row; i++) {
		//appends 8 divs to wrapper 
		$('#wrapper').append($('<div class="app"></div>'));
	}
});