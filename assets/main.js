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

  $('.addNewPost').on('click', function(event) {
    event.preventDefault();
    var name = prompt("What would you like to call your blog post?")
    if (name) {
      name = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
      url = event.target.href + "?filename=" + name + ".md"
      location.href = url
    }
  });
});


// Analytics
if( location.host === 'nobackend.org') {
  var _gauges = _gauges || [];
  (function() {
    var t   = document.createElement('script');
    t.type  = 'text/javascript';
    t.async = true;
    t.id    = 'gauges-tracker';
    t.setAttribute('data-site-id', '519a2c84f5a1f516e9000011');
    t.src = '//secure.gaug.es/track.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(t, s);
  })();
}

// disqus
var disqus_shortname = 'nobackend';