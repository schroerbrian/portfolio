var ready;

ready = function() {
  //TAILOR
  $('.tailor-anchor').on('click', function(event){
    event.preventDefault();
    $('.tailor-modal').fadeIn(300);
    $('.overlay').fadeIn(300);
  });

  $('.remove-tailor').on('click', function(event){
    event.preventDefault();
    $('.tailor-modal').fadeOut(300);
    $('.overlay').fadeOut(300);
  });

  //LOCALE
  $('.locale-anchor').on('click', function(event){
    event.preventDefault();
    $('.locale-modal').fadeIn(300);
    $('.overlay').fadeIn(300);
  });

  $('.remove-locale').on('click', function(event){
    event.preventDefault();
    $('.locale-modal').fadeOut(300);
    $('.overlay').fadeOut(300);
  });

  //GROOVES
  $('.grooves-anchor').on('click', function(event){
    event.preventDefault();
    $('.grooves-modal').fadeIn(300);
    $('.overlay').fadeIn(300);
  });

  $('.remove-grooves').on('click', function(event){
    $('.grooves-modal').fadeOut(300);
    $('.overlay').fadeOut(300);
  });
}; 

$(document).ready(ready);

$(document).on('page:load', ready);

