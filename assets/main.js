$('document').ready( function() {
  $('.dreamcode .next').on('click', 'a', function(event) {
    var $current = $('.dreamcode .active');
    event.preventDefault();
    
    var $next = $current.next('pre')
    if (! $next.length) {
      $next = $current.siblings().eq(0)
    }
    $current.removeClass('active')
    $next.addClass('active')
  })
});