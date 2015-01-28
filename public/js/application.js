var report = function() {
  console.log('====================');
  for (var i=0; i<items.length; i++) {
    console.log(items[i].text());
  }
  console.log('====================');
}

var items = [];
var started = false;

var advance = function() {
  if (started === true) {
    items[0].removeClass('previous');
    items[1].removeClass('active').addClass('previous');
    items[2].addClass('active');

    var shifted = items.shift();
    items.push(shifted);
  } else {
    items[0].removeClass('active').addClass('previous');
    items[1].addClass('active');
    started = true;
  }

  //report();
}

$(function() {

  $('.item').each(function(i, el) {
    items.push($(el));
  });

  //report();

  /*$('#controls').on('click', 'a', function(e) {
    e.preventDefault();
    advance();
  });*/

  var slideshow = window.setInterval(advance, 5*1000);

});
