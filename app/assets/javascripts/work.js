'use strict';

var ready;

ready = function() {
  //TAILOR
  $('.tailor-anchor').on('click', function(event){
    event.preventDefault();
    $('.work-examples-wrapper').show();
    $('.tailor-modal').fadeIn(300);
    $('.overlay').fadeIn(300);
  });

  $('.remove-tailor').on('click', function(event){
    event.preventDefault();
    $('.work-examples-wrapper').hide();
    $('.tailor-modal').fadeOut(300);
    $('.overlay').fadeOut(300);
  });

  //LOCALE
  $('.locale-anchor').on('click', function(event){
    event.preventDefault();
    $('.work-examples-wrapper').show();
    $('.locale-modal').fadeIn(300);
    $('.overlay').fadeIn(300);
  });

  $('.remove-locale').on('click', function(event){
    event.preventDefault();
    $('.work-examples-wrapper').hide();
    $('.locale-modal').fadeOut(300);
    $('.overlay').fadeOut(300);
  });

  //GROOVES
  $('.grooves-anchor').on('click', function(event){
    event.preventDefault();
    $('.work-examples-wrapper').show();
    $('.grooves-modal').fadeIn(300);
    $('.overlay').fadeIn(300);
  });

  $('.remove-grooves').on('click', function(event){
    $('.work-examples-wrapper').hide();
    $('.grooves-modal').fadeOut(300);
    $('.overlay').fadeOut(300);
  });
}; 

$(document).ready(ready);

$(document).on('page:load', ready);

