---

layout: post
title: A basic Service Worker implementation
featured_image: ''
date: 2016-01-09 17:00
category: javascript
keywords: javascript service worker andre loureiro
published: true
class: blog
excerpt: Service Worker provides a simple way to make webapps work offline

---
If you read the title and it's a new thing for you, let me provide you a simple explanation about it.

[Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers) came to solve the need of a better approach to handle the problem with connectivity in web apps. We know that we can do it with [AppCache](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers), by the way I already worked on an [offline application](http://andreloureiro.net/usando-html5-appcache-para-web-e-aplicacoes-offline/) (pt-BR) for an international car manufacturer, but that was a pain to develop.

With Service Workers we have more control over the process. Also, we can use JavaScript to configure our SW.

Before we start, is important to say that Service Workers work only over `HTTPS` or in `localhost` for dev stuff.

## Go Service Worker!

So, let's start!

A Service Worker has something like a lifecycle. It needs to be registered, installed and activated to work.

{% highlight javascript %}
// Checks for Service Worker support in the browser
if ('serviceWorker' in navigator) {

  // We have support! Now we'll try to register it.
  // The registration method of Service Workers returns a Promise
  navigator.serviceWorker.register('/assets/js/sw.js', {scope: '/styx/'})
    .then(function(registration) {

      // We're registered! console.log('Service Worker registered.');
      console.log('Service Worker registered.');
    })
    .catch(function(err) {

      // Something went wrong
      console.log('Service Worker registration failed.')
    })
  }
{% endhighlight %}

The first parameter of the `register` method is the path to the Service Worker script. The second I provided to the registration is optional, but it defines what part of our content that the Service Worker will take care. I'm giving it the `/styx/` URI of this site, that targets [Styx](https://andreloureiro.net/styx), a **ClojureScript online REPL**. I want to make it work offline.

## Installation

First of all, we'll create an array of paths to the files we want Service Worker to cache and serve offline.

{% highlight javascript %}
var assetsToCache = [
  '/styx/',
  '/styx/index.html',
  '/styx/css/',
  '/styx/css/style.css',
  '/styx/js/',
  '/styx/js/compiled/',
  '/styx/js/compiled/styx_next.js'
];
{% endhighlight %}

Now we'll add an event listener for the `install` event. The `waitUntil` method used in the callback makes the SW wait for things to to happen before it installs. In our case, we'll create a new cache and push the asset's paths into it.

{% highlight javascript %}
// Listen to the installation event
this.addEventListener('install', function(event) {

  // Tell Service Worker to wait before installation
  event.waitUntil(

    // Create a new cache called 'v1'
    caches.open('v1')
      .then(function(cache) {

        // Pushes the array of paths into the cache
        return cache.addAll(assetsToCache);
      })
  );
});
{% endhighlight %}

At this moment, we already have our Service Worker installed and active.

## Serving the cached content

Now we need to react to user requests on this Service Worker scope. We should:

- Know which assets user requested
- Look into our cache and respond with the content 
- If we can't find it, try to reach the network and get the original asset
  
We're going to listen to a new event, `fetch`. This event occurs whenever a content inside the Service Worker scope is fetched. When some asset is requested, we'll try to find it in the cache and serve to the user. We can also tell Service Worker to try another way of respond the asset to the user in case it can't find in cache.

{% highlight javascript %}
// Listen to the fetch event
this.addEventListener('fetch', function(event) {

  // Serve the cached asset
  event.respondWith(

    // Try to find the content in our cache
    // In case it can't find in cache, we instruct SW
    // to try other things in `catch()`. We'll say to
    // Service Worker to try to reach the network and
    // get the resource
    caches.match(event.request)
      .catch(function() {
        fetch(event.request);
      })
  );
});
{% endhighlight %}

This is the configuration of a minimal Service Worker. Thanks to this small script, now **Styx** works offline and since it is responsive, you can add the page to homescreen and you'll have a ClojureScript REPL for free :)

## Debugging

In Chrome Canary you can have info about your Service Worker in Devtools > Resources:

![Service Worker in Chrome Canary Devtools](/assets/images/sw-devtools.png)

Also, you can check the Cache Store to view the webapp's cached assets. Perhaps they are identified by the version name we gave:

![Cache Storage in Chrome Canary Devtools](/assets/images/sw-cache-storage.png)

## Conclusion

Service Worker provides a simple way to make webapps work offline. This post was all about a simple implementation of SW, but it's sufficient to improve UX serving something when there's no network, and allow users with bad connectivity to use our webapps.

Support in Chrome is ok, but [other browsers still have some work to do](https://jakearchibald.github.io/isserviceworkerready/). By the way, Safari has a five year plan to implement SW.

## References

- [MDN - Using Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Is ServiceWorker Ready?](https://jakearchibald.github.io/isserviceworkerready/)
