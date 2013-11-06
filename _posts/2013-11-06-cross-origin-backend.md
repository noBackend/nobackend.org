---
layout:   post
title:    Bring your own Backend!
author:   Michiel de Jong
twitter:  michielbdejong
bio:      Michiel is passionate about free/open technology in general, and specifically about [unhosted web apps](https://unhosted.org).<br>
          You can follow him on [twitter](https://twitter.com/michielbdejong)
          or [github](https://github.com/michielbdejong).
gravatar: https://1.gravatar.com/avatar/d7c02b574ce148a6f46d06789f62a8a8
---

# Cross-Origin Backend

By saying your app 'has no backend', what we really mean is that it's using a generic backend, that is not specific to the app
(and thus, not part of the app as such). One advantage of keeping backends generic and putting all app-specific code in the
frontend, is that you can use a backend that is hosted somewhere else.

An example of this are Dropbox-based apps: you get an API key from Dropbox, and develop your app as a static JavaScript app,
which stores all its data on the user's Dropbox account. Thanks to CORS headers (which the Dropbox API supports), your
in-browser app can make a cross-origin AJAX request directly to Dropbox, without the need to go through a proxy server.

Like Dropbox, GoogleDrive have also started supporting CORS headers on their API. You can use a client-side library like
[NimbusBase](http://nimbusbase.com/) to make it easier to access both Dropbox and GoogleDrive, without having to write
any XHR requests yourself.

Last week [Dave Winer blogged](http://scripting.com/2013/11/01/amazonBreaksThroughOnStaticJavascriptApps) about Amazon
joining the cross-origin backend bandwagon, with the following words:

> It doesn't happen very often when there's a true tech breakthrough, but this is one of those moments.
If you care about Internet applications, pay attention to this one, it's important.


We also discussed it on the [unhosted web apps](https://groups.google.com/forum/#!topic/unhosted/OOHTVgE6gYA) mailing list.
Is this exaggerated, or is there a real trend here?

I think cross-origin backends are the future. Before a couple of years ago, the frontend code running in the browse
could only connect to the backend server that corresponds to that application, on the same origin. There was a one-to-one
mapping between frontend apps and backend servers.

If your app would connect with third-party services, then all requests would have to go via a proxy server (see Dave
Winer's post for a further explanation of this).
It makes a lot of sense to separate the app's origin (the frontend domain name,
where you visit the app) from the backend's origin (the server API domain name), and to let frontend apps develop freely
without the need for proxy servers.

Dropbox, GoogleDrive, and Amazon already support this (although the real pioneers, even before Dropbox, [were actually
Flattr](https://groups.google.com/forum/#!searchin/unhosted/flattr/unhosted/RUWhRuCMVvw/4PSHcoRZzBAJ)). At the
[remoteStorage project](http://remotestorage.io/) we are developing a common REST API for generic storage backends. It's
called simply "remote storage", and is now an [Internet Draft at the IETF](http://tools.ietf.org/html/draft-dejong-remotestorage-01).

If you want to know more about cross-origin backends and unhosted web apps, then you can come to
[my talk at QCon](http://qconsf.com/track/nobackend-%E2%80%93-front-end-first-web-development) on Monday (San Francisco),
or any of the [upcoming unhosted web apps meetups](https://unhosted.org/events/) - next one is in Portland, 16 November!
