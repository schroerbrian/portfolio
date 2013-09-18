$(document).ready(function() {
  $('.tailor-image').click(function(event){
    event.preventDefault();
    $('.tailor-modal').fadeIn(500);
    $('.overlay').fadeIn(500);
  })
});
// $(document).ready(function() {

//   $('.hamburger').click(function(event){
//     event.preventDefault();
//     $('.hamburger-menu').css('display','block');
//   })

//   $('.hamburger-menu').click(function(event){
//     $('.hamburger-menu').css('display','none');
//   })

// });
