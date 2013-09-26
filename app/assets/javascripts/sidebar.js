'use strict';

var ready;

ready = function() {


  // $(function() {
  //   var links = $('a.header-link').click(function() {
  //       links.removeClass('active');
  //       $(this).addClass('active');
  //       console.log("yo");
  //   });
  // });


var loc = window.location.pathname;

$('.header-links').find('a').each(function() {
  $(this).toggleClass('active', $(this).attr('href') == loc);
});

  // $(function addActiveClass() {
  //   $('a.header-link').click(function() {
  //     var loc = window.location.pathname;
  //     $('.header-links').find('li').each(function() {
  //       $(this).toggleClass('active', $(this).children[0].href == loc);
  //     });
  //   });
  // });

};

$(document).ready(ready);

$(document).on('page:load', ready);
