$(document).ready(function() {
  
  //TAILOR
  $('.tailor-image').click(function(event){
    event.preventDefault();
    $('.tailor-modal').fadeIn(500);
    $('.overlay').fadeIn(500);
  })

  $('.remove-tailor').click(function(event){
    event.preventDefault();
    $('.tailor-modal').fadeOut(400);
    $('.overlay').fadeOut(400);
  })

  //LOCALE
  $('.locale-image').click(function(event){
    event.preventDefault();
    $('.locale-modal').fadeIn(500);
    $('.overlay').fadeIn(500);
  })

  $('.remove-locale').click(function(event){
    event.preventDefault();
    $('.locale-modal').fadeOut(400);
    $('.overlay').fadeOut(400);
  }) 

});

