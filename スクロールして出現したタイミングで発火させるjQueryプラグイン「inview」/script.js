jQuery( function($) {
  $('.get-inview').on( 'inview', function( event, isInView ) {
    if (isInView) {
      $(this).css('color','red');
    } else {
      $(this).css('color','inherit');
    }
  });
});
