var row = 5164;
var column = 8;
var cont = $("#container")

$(document).ready(function() {
   $('button').on('click', function() {
    $('.app').removeClass('highlight');
  });
  
  for (var i = 0; i < cont.height(); i++) {
  
    $('#wrapper').append($('<div class="app"></div>'));
  }
  $('.app').hover(function() {
    $(this).addClass('highlight');
  });
});

console.log(cont.height())
console.log($('.app').length)
console.log("kek")
