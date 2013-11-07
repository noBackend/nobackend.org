---
layout:   post
title:    noBackend goes QCon San Francisco!
author:   Gregor Martynus
twitter:  gr2m
bio:      Gregor enjoys dreaming code at [nobackend.org](http://nobackend.org)
          and making it real at [Hoodie](http://hood.ie).<br>
          You can follow him on [twitter](https://twitter.com/gr2m)
          or [github](https://github.com/gr2m).
gravatar: http://www.gravatar.com/avatar/24fc194843a71f10949be18d5a692682
---

Only half a year after [the first public presentation of noBackend](https://vimeo.com/67553019) at the [Front Trends Conference](http://2013.front-trends.com/), the organizers behind the [QCon San Francisco](http://qconsf.com/) decided to dedicate [an entire track](http://qconsf.com/track/nobackend-%E2%80%93-front-end-first-web-development) on this new philosophy. And I'm super honored to be invited as the track host.

We've put together a great list of talks & speakers. After weeks of preparation, I can't wait to see them on stage!


## 1. The end of 'Enterprise Editions': make apps, not services by Caolan McMahon

The noBackend movement is perhaps best known for quick prototyping, scalability, and convenient cloud deployment. However, we are learning how to scale down as well as up. A number of technologies, in the browser, the backend, and in virtualisation, are enabling new methods of distribution. By using standardised server components we can reach beyond the "Software-as-a-Service" model.

Many organisations will have security policies which exclude them from the client-base of service-orientated companies. While the "Firewall Install" may be an option for larger players, how do we handle the security concious SME? For many applications, we can look to the noBackend movement for inspiration. With a focus on keeping the value in the app, not the infrastructure, we can deliver excellent products to a wider audience, both as a service and self-hosted.

This talk will explore the tools and techniques for delivering applications for self-hosting, how the noBackend movement is making easy deployment a reality, and why this is an important development for the web.

<div style="float:left; margin: 7px 10px 0 0;"><img alt="Caolan McMahon" src="https://gravatar.com/avatar/a12f0df529117f01505bfd072f65bacc?s=80" /></div>

_Caolan is an open-source developer and Director at Ground Computing (UK), perhaps best known for the Node.js Async module and his work on CouchDB development tools. He's a specialist in offline-enabled and decentralised web applications. With a background in bringing the web to some remote and difficult environments, from rural Africa to the far north of Canada, he is now looking to bring full-stack development to a wider audience with the Hoodie project._

## 2. Rethinking WebApps: noBackend by John Hammink

This talk will discuss the background and rationale for a noBackend approach, and demonstrate some existing projects and code samples implemented with noBackend frameworks.

This is an eye-opener for noBackend skeptics. It showcases the extreme flexibility and freedom a noBackend architecture gives to front-end developers and UX designers to build solutions faster, cheaper, better, and with fewer constraints.

<div style="float:left; margin: 7px 10px 0 0;"><img alt="John Hammink" src="https://gravatar.com/avatar/ef087f84cfd32eecb2841086f40527b0?s=80" /></div>

_John is the lead (and the first) Quality Engineer for Mozilla's Firefox OS/Boot to Gecko open source operating system for mobile devices. He has enjoyed working as a software quality engineer on start-up projects around the world which have eventually gained large-scale adoption as products. For example, John played a leading role in QA and Hardware Certification for Skype in Tallinn, Estonia as the product emerged in 2004 and later moved toward mainstream popularity in 2006. He was also one of the first Quality Engineers on F-Secure data security suite in Helsinki, Finland in the early 2000s. When not doing engineering work, he travels, speaks, writes, develops fractal-based art and animation, and plays music. You can follow him on Twitter (@rijksband) and read his blog at johnhammink.blogspot.com._

## 3. API-Driven Development for both ends by Jakub Nesetril

At first APIs and noBackend could sound like a contradiction. We'll show however a practical example how, with minimum upfront investment, you can rapidly prototype, develop and test your application using APIs.

Providing a simple, structured description of your API in the form of an API Blueprint enables the front-end developer to code against a comfortable SDK and use an API mock while developing offline.

API Blueprint is a simple, pure Markdown language for describing Web API, that is designed for humans, but understandable by machines. A whole ecosystems of tools emerged around it, including auto-generated docs, API mocks, automated testing and SDK generation.

<div style="float:left; margin: 7px 10px 0 0;"><img alt="John Hammink" src="https://gravatar.com/avatar/f0bfae53a6ac89053a861c4a6c8fd0ff?s=80" /></div>

_Jakub is co-founder & CEO of Apiary, helping you make API design and documentation enjoyable. Prior to Apiary Jakub has led 10years of experience leading API products and engineering teams in companies like GoodData and APN._

## 4. noBackend as a political movement by Parker Higgins

Recent news from around the world has been discouraging: we are under permanent automated government surveillance, and most of the large IT companies are complicit in this betrayal of their customers and users. It is in everyone's fundamental interest to take control of their data, to encrypt, to host themselves, to distribute and keep away from huge corporations as much as possible.

However, convenience, usability and the critical user mass are undeniably on their side. noBackend apps can potentially work against this increasing centralization of web infrastructure, make distribution of data and services simpler and more desirable, and help turn back the net into what it was supposed to be: small things, loosely coupled.

<div style="float:left; margin: 7px 10px 0 0;"><img alt="Parker Higgins" src="https://gravatar.com/avatar/5063ede693957603db146c2b562c1d2a?s=80" /></div>

_Parker is an activist at the Electronic Frontier Foundation, specializing in issues at the intersection of freedom of speech and copyright, trademark, and patent law. He previously lived and worked in Berlin, Germany. Parker studied at the Gallatin School of Individualized Study at New York University, where he developed a concentration of "Creativity, Freedom of Speech, and Intellectual Property." While at NYU, he served on the board of the global Students for Free Culture organization and as the president of its NYU chapter._

## 5. One Backend Per User: 100% data privacy / 0 scaling issues by Michiel B. de Jong

Build apps, leave the back-end hosting to your users. Serve static HTML or mobile apps and let users connect to their own back-end, for example using Dropbox.js, the GoogleDrive JS API, NimbusBase, or the new open standard for per-user data hosting: remoteStorage.io.

This solves three hard problems at once:

1. Privacy: The users own their data and never send it to 3rd parties.
2. Scalability: as an app developer, when you don't own the back-end, it makes no difference if you have 100 or 1 million users.
3. User Data: since the user has only one personal back-end, common user data collections like the user's address book, calendar, tasks list, and bookmarks collection only exist once, and such data is already pre-filled when using a new app for the first time.

<div style="float:left; margin: 7px 10px 0 0;"><img alt="Michiel B. de Jong" src="https://gravatar.com/avatar/d7c02b574ce148a6f46d06789f62a8a8?s=80" /></div>

_Michiel worked as a backend engineer in Spain until he decided to quit his day job, learn JavaScript, and help to re-decentralize the web. He's now involved in several non-profit projects, including Unhosted web apps, remoteStorage, Sockethub, Terms of Service; Didn't Read, TOSBack, federated social web, Opentabs, and FreedomBox. As a digital nomad, he loves to travel through Europe or Asia, and is also a co-unorganizer of Hacker Beach._

## Let's chat!

First of all, you can still [get tickets for the conference](http://qconsf.com/registration), the noBackend track will take place on this Monday, November 11th. Use "SPEAKMART100" to save 100$, plus another 100$ will be donated to the San Francisco Food Bank.

I'll stay in San Francisco until November 19th and would to have a drink or two!