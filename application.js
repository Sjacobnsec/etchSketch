function askMe() {
  var y = prompt('what is the average speed?');
  console.log(y)
}

function makeHigh() {
  $('<div></div>').addClass('.highlight');
  console.log('voldymort');
}

function myFunction() {
  //askMe();
  makeHigh();   
};


$(document).ready(function() {
  for (i = 0; i < 30; i++) {
    $('#container').append($('<div class="app"></div>'))
    $('.app').css({
      //height: 960 / x,
      //width: 960 / x
    });
  }

});
