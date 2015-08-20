var row = 64;
var column = 8;

$(document).ready(function() {
   $('button').on('click', function() {
    $('.app').removeClass('highlight');
  });
  
  for (var i = 0; i < row; i++) {
    //appends 8 divs to wrapper 
    $('#wrapper').after($('<div class="app"></div>'));
  }
  $('.app').hover(function() {
    $(this).addClass('highlight');
  });
});
