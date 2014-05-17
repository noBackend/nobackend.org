---
layout:   post
title:    Getting Started with noBackend
author:   Nick Hehr
twitter:  hipsterbrown
bio:      Nick is a product designer and front-end developer who enjoys creating and capturing awesome experiences in whatever medium possible, be that pixels, code, or photography. <br> You can follow him on the [Twitters](https://twitter.com/hipsterbrown) and see some of his code on [GitHub](https://github.com/HipsterBrown).
gravatar: https://avatars0.githubusercontent.com/u/3051193?s=460
---

I have been extremely interested in the noBackend/Static/Front-End Driven applications ever since I was introduced to them by Gregor (@gr2m) roughly a year ago. It was fascinating to me that, as a front-end dev, I could build dynamic, multi-user apps that syncs data in realtime and doesn't bork when offline without any backend knowledge. No more would I sludge through PHP documentation just to figure out how to send mail from my personal site contact form because Dreamcode was in the works!

While I was an extreme advocate for using [Hoodie](http://hood.ie) and other Backends as a Service, or BaaS, technologies like [Firebase](https://www.firebase.com/) to build awesome web apps, I had yet to find the time to actually give it a shot myself until recently. I got the opportunity to speak about these services to a local front-end meetup, so I decided to make it more of a technical talk rather than a high level overview and build a demo app to go along with the presentation. I built two versions of the same app, one using Firebase and the other using Hoodie, to showcase the commercial v. open-source options in this field.

The app, Troopr, is your basic CRUD application for viewing and sharing biking tips on the web. It has the usual email/password authentication for signing up and logging into the app. As a testament to the power of these technologies and not my coding prowess, I built these two apps in just two days without any prior experience in building web apps.You can take a look at the code and pull down the [repo](https://github.com/HipsterBrown/FDA-demos) from my GitHub to run the demos.

The need for a "custom" backend for most web and mobile apps these days is quite unnecessary. Basic, third-party, and even anonymous login can be provided by one of several BaaS systems, which can also include data storage, realtime chat abilities, and email functionality, all without writing a single line of backend code. It will make local development a whole lot easier as well; no more mess of database installs on your local system, setting up security rules and the lot. A tool like Hoodie will take care of the local stuff, while others like Firebase will store the data on their servers while giving you a beautiful admin interface to handle the data and users. Probably the best feature of all, is the separation of concerns that comes with building a front-end independent of any backend technology/language. Plug and play any type of BaaS until you find the right fit, while only changing a few lines of JavaScript to get it all set up.

Now getting hands-on with these technologies is easier than you think. I got started by learning about APIs, especially the Firebase and Parse APIs, using [Codecademy](http://www.codecademy.com/tracks/apis)'s great API track. It will give you a basic overview of using APIs on the front-end with JavaScript and how the various commercial BaaS APIs operate.

Then you can get into comparing what type of noBackend solution you want to start with, more specifically my favorites, Firebase and Hoodie. Starting with Firebase, it has a bigger team and a more mature product at the moment. As mentioned before, the slick admin interface and plugins for third-party logins and bindings into popular JavaScript frameworks like Ember, Angular, and React. There is also the ability to host your app with Firebase as well to keep all your code in one place.

Comparing that to Hoodie, developing your noBackend app is absolutely free and solely contingent on the cost of hosting it, which is limited to Nodejitsu or some sort of Linux setup. As an open-source project you have the opportunity to contribute to and extend Hoodie to suit your needs and give back to the project. There is also the "hipster" factor of using an up and coming tool before it's the cool thing to do.

You can get started with Firebase by [signing up](https://www.firebase.com/signup/) and going through their thorough Getting Started docs. Using my app demo, you can follow along with some of the basics of creating a new Firebase application.

Get started with [Hoodie](http://hood.ie/#installation) by installing all its dependencies and the hoodie-cli before instantiating a Hoodie project. The demo todo app provided by Hoodie is great for showing off the ease using the Hoodie API, probably a lot more so than the Hoodie documentation at the moment. My demo app, Troopr, will show off the sign-in/sign-up authentication API a bit more.

You can view the slides from my talk on [Speaker Deck](https://speakerdeck.com/hipsterbrown/figuring-out-front-end-driven-apps) and reach out for any comments or questions on [Twitter](https://twitter.com/hipsterbrown). Happy building!
