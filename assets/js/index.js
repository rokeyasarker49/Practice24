$(document).ready(function(){

    // jQuery methods go here...
  $('.book-btn').click(function(){
    $('.select-seat-modal-container').addClass("show");
  })

  $('.close-modal').click(function(){
    $('.select-seat-modal-container').removeClass("show");
  })

  $('.close-choose-available').click(function(){
    $('.choose-available-seat').addClass("hide-choose-available-seat")
  })

  $('.single-seat').click(function(){
    $(this).addClass('selected')
    
  })

  $('.selected-ticket').click(function(){
    $('.select-seat-modal-container').removeClass("show");
    $('.select-seat-modal-container2').addClass("show");
  })

  $('input[name="select-boarding"]').change(function(){
    if($(this).is(':checked')){
        $('.selected-ticket-boarding').removeClass('selected-ticket-disable');
        $('.selected-ticket-boarding').prop('disabled', false);
    }
  })

  $('.selecting-board-btn').click(function(){
    $('.select-seat-modal-login').addClass("show")
    $('.select-seat-modal-container2').removeClass("show");
  })

  $('.login-btn').click(function(){
    console.log("clicked")
    $('.trip-info-modal').addClass("show");
  })

  $('.trip-info-close').click(function(){
    $('.select-seat-modal-container3').addClass("show");
  })

  $('.selected-ticket-dobule-decker').click(function(){
    $('.booking-time-up-modal-container').addClass('show')
  })

  $('.view-ticket-btn').click(function(){

    $('.your-ticket-modal').addClass('show')
  })

  $('.proceed-to-payment-success').click(function(){
    $('.payment-failed-modal').addClass('show')
  })
}); 