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

# Don\'t like our backend? Bring your own!

A web application is a bit like a restaurant. I mean, it's not, of course, but if using installed software on your computer is like eating at home, then visiting a website to complete that same task is like visiting a restaurant to have your dinner.

The problem that has arisen as we all use more and more websites for our daily computing needs, is that all our data ends up inside those websites. At first sight this is good for application developers, because they get power to create a relationship with returning users. But the web is now coming to a point where there are a few huge data silos (mainly Google, Facebook, Apple, Microsoft, and Dropbox, depending on how you count), and we as app developers are as much a powerless victim of this situation as the users.

So what if you build one application that is compatible with multiple data silos? What if you would let the user bring their own backend when they log in to your app? This would be a bit like allowing customers to bring their own wine to a restaurant.

<img src="/assets/blog/byow.jpg" />

A restaurant can simply allow you to bring a bottle of wine from home. That way, you can eat at your favorite restaurant, but still have a free choice of which wine you drink. And bottles of wine are pretty easy to carry with you anyway, which is why this system works well. Analogously, it is possible to write web applications that do not have a backend. As an app developer, you have no interest in hosting your user's data, it's not your core business.

# Backend-as-a-Service platforms

There are Backend-as-a-Service platforms like Pulse and Firebase, which take over the task of running the server backend from you. Of course, these providers lock you, the app developer, into their platforms, which is then always becomes an item on the 'Risks' slide of your startup pitch. You could choose a free-software backend service which you can host yourself, but that still requires you to run backend hosting.

# Swappable backends

There are two noBackend solutions that give the user a 'Bring Your Own Backend' deal: [remoteStorage](http://remotestorage.io/) and [NimbusBase](http://nimbusbase.com/). If you develop your app with one of those noBackend solutions, then you give your users the choice to bring their own backend, and connect it from the welcome page of your app. This is then no longer a login experience, since your app does not have a backend of its own; the user is connecting your app with their Dropbox account, or their GoogleDrive account, or any other server where the user chooses to host their data.

The remoteStorage standard is currently a work-in-progress at the Internet Engineering Task Force. It is meant to be a non-proprietary API for user data backends which any data storage provider can implement. GoogleDrive and Dropbox have each developed their own API, but they are allowing other applications to connect with it cross-origin, straight from the browser.

This means that the user's browser does its AJAX request straight to the user's data storage server; there are no AJAX requests going to the server of the app provider. Of course, you may still want to offer data hosting to your users, just like a Bring-Your-Own-Wine restaurant might still have a few wines on the menu for people who didn't bring a bottle from home.

# Play with this

There are easy getting started guide on both the [remoteStorage](http://remotestorage.io/) and the [NimbusBase](http://nimbusbase.com/) website. It may feel funny at first to publish an app that is only static html5 content. But you'll soon appreciate the advantages, both to you as an app developer, and to your users who get more control over where their data is hosted.

To deploy your app, you can simply use GitHub pages of course, but that is a very basic option. Instead, you could try out [5apps](https://5apps.com/), a hot Berlin startup that specializes in hosting html5 applications. If you choose 5apps, then this gives you get a lot of help generating the various manifest files for the Chrome, Firefox OS, Windows 8, and other app stores, and it helps you with a lot of other useful html5 features.
