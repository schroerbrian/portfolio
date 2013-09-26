'use strict';

var ready;

ready = function() {
  
  //INITIALIZE MODALS. 
  function initializeModal(clickedHandler, shownModal, overlay) {
    $(clickedHandler).on('click', function(event){
      event.preventDefault();
      $(shownModal).css('display', 'block');
      $(overlay).fadeIn(300);
    });
  }

  //REMOVE THEM.
  function unInitializeModal(clickedHandler, shownModal, overlay) {
    $(clickedHandler).on('click', function(event){
      event.preventDefault();
      $(shownModal).css('display', 'none');
      $(overlay).fadeOut(300);
    });
  }

  //SCROLL THROUGH PREVIOUS MODAL 
  function showPrevModal(clickHandler, currentModal, prevModal) {
    $(clickHandler).on('click', function(){
      $(currentModal).css('display', 'none');
      $(prevModal).css('display', 'block');
    });
  }

  function showNextModal(clickHandler, currentModal, nextModal) {
    $(clickHandler).on('click', function(){
      $(currentModal).css('display', 'none');
      $(nextModal).css('display', 'block');
    });
  }

  showPrevModal('.prev-tailor', '.work-examples-wrapper-t', '.work-examples-wrapper-g');
  showPrevModal('.prev-grooves', '.work-examples-wrapper-g', '.work-examples-wrapper-l');
  showPrevModal('.prev-locale', '.work-examples-wrapper-l', '.work-examples-wrapper-t');

  showNextModal('.next-tailor', '.work-examples-wrapper-t', '.work-examples-wrapper-l');
  showNextModal('.next-locale', '.work-examples-wrapper-l', '.work-examples-wrapper-g');
  showNextModal('.next-grooves', '.work-examples-wrapper-g', '.work-examples-wrapper-t');


  initializeModal('.tailor-anchor', '.work-examples-wrapper-t', '.overlay'); 
  unInitializeModal('.remove-tailor', '.work-examples-wrapper-t', '.overlay'); 

  initializeModal('.locale-anchor', '.work-examples-wrapper-l', '.overlay'); 
  unInitializeModal('.remove-locale', '.work-examples-wrapper-l', '.overlay'); 

  initializeModal('.grooves-anchor', '.work-examples-wrapper-g', '.overlay'); 
  unInitializeModal('.remove-grooves', '.work-examples-wrapper-g', '.overlay'); 

  //CYCLE THROUGH MODALS
  // $( "li.third-item" ).prev().css( "background-color", "red" );

  // prevModal('.prev', '.work-examples-wrapper-t');
  //show previous modal

  // $('.header-links').find('a').each(function() {
  //   $(this).toggleClass('active', $(this).attr('href') == loc);
  // });

}; 

$(document).ready(ready);

$(document).on('page:load', ready);

