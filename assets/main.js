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


// Google Analytics
if( location.host === 'nobackend.org') {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-40865648-1', 'nobackend.org');
  ga('send', 'pageview');
}

// disqus
var disqus_shortname = 'nobackend';