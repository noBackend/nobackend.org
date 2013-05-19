---
layout:   post
title:    "Welcome to noBackend!"
date:     2013-05-19 13:31:13
author:   Gregor Martynus
---

Every app is made out of two kind of things. The ones that are unique to your app, and the ones that are not. 

From a user's perspective, the unique parts sum app to the user interface and the way it behaves. The functionality behind the visual facade is taken as granted and expected to just work™.

These are different concerns that require very different skills, often times accomplished by different developers. noBackend promotes a simpler decoupling of these concerns, so both sides can focus on what they are passionate about.

## A simple example

The API, the way the frontend code interacts with backend functionality, is usually provided by the backend. Here's a simple example for an API to sign as an existing user.

<pre><code class="language-xhr">POST /session
{ "email":"joe@example.com", "password": "secret" }</code></pre>

It's the responsibility of the frontend developer to send the request as described and react on its response, including edge cases like a connections being lost or an unforeseen server error.

Instead, noBackend suggest to let the frontend developer define the API, by describing backend functionality with frontend code. For example:

<pre><code class="language-javascript">signIn( username, password )
.then( successCallback )
.fail( errorCallback )
</code></pre>

We call it "Dreamcode", as it is often times written before the actual code is functional.

At first sight, it doesn't make much of a difference, all it would do is sending the AJAX request and call the respective callback. But the API is more powerful in several ways.

### 1. Flexibility 

The user wants to sign in, that's all he or she cares about.
She or he does not care about

- if the request goes to the app server or a central authentication server
- if it is an HTTP POST or PUT request
- if it is send via websockets
- if cookies are used for authentication, or session IDs send as query parameter or as a custom header
- if the app resends a request if the first times out

The implementation of the `signIn` method could be adjusted to reflect a change in the implementation, without changing the API that the frontend developer is using. 

### 2. Simplicity

From the frontend developer's perspective, having a `signIn` method is way simpler to implement and reduces the amount of code.

For the backend developer it means more work in the first place. But the frontend API is simpler to define, document and test, compared for example to a RESTful API.

### 3. Frontend Driven

The frontend developer can lead the entire design process of building the app. Describing backend functionality in from of Dreamcode let's the developer focus on the user experience, and avoids distraction by discussions on implementation details and delays waiting for a backend API.

### A more complex example

The benefits become more clear when looking at a more complex example. Let's say you want to send a multipart email with the current page attached as PDF.

```js
sendEmail({
  subject: "Hello, World!",
  text: "This mail has been sent from the frontend",
  html: "<p>This mail has been sent from the frontend</p>",
  to: "gregor@martynus.net",
  attachments: [ 
    convert( document.body ).to("report.pdf"),
  ]
})
```

To make this code work, and to make it insusceptible to SPAM, might be quite challenging. But one could start to make a quick & dirty implementation and then gradually improve the implementation without changing the API. The important point is that the benefit for a frontend developer who can grant such functionality as given and focus on the user experience outweighs the complexity of the implementation, by far.

### What do you think about noBackend?

I'd love nobackend.org to become a place to discuss the idea in general, APIs for common tasks, or solutions that provide APIs to build apps without thinking about the backend today.

I'm looking forward to hear your thoughts on it!