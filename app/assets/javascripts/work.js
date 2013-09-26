'use strict';

var ready;

ready = function() {
  
  //INITIALIZE MODALS. REMOVE THEM
  // function initializeModal(clickedClass, )
  //TAILOR
  $('.tailor-anchor').on('click', function(event){
    event.preventDefault();
    $('.work-examples-wrapper-t').css('display', 'block');
    // $('.tailor-modal').fadeIn(300);
    $('.overlay').fadeIn(300);
  });

  $('.remove-tailor').on('click', function(event){
    event.preventDefault();
    $('.work-examples-wrapper-t').css('display', 'none');
    // $('.tailor-modal').fadeOut(300);
    $('.overlay').fadeOut(300);
  });

  //LOCALE
  $('.locale-anchor').on('click', function(event){
    event.preventDefault();
    $('.work-examples-wrapper-l').css('display', 'block');
    // $('.locale-modal').fadeIn(300);
    $('.overlay').fadeIn(300);
  });

  $('.remove-locale').on('click', function(event){
    event.preventDefault();
    $('.work-examples-wrapper-l').css('display', 'none');
    // $('.locale-modal').fadeOut(300);
    $('.overlay').fadeOut(300);
  });

  //GROOVES
  $('.grooves-anchor').on('click', function(event){
    event.preventDefault();
    $('.work-examples-wrapper-g').css('display', 'block');
    // $('.grooves-modal').fadeIn(300);
    $('.overlay').fadeIn(300);
  });

  $('.remove-grooves').on('click', function(event){
    $('.work-examples-wrapper-g').css('display', 'none');
    // $('.grooves-modal').fadeOut(300);
    $('.overlay').fadeOut(300);
  });

  //CYCLE THROUGH MODALS




}; 

$(document).ready(ready);

$(document).on('page:load', ready);

