---

layout: post
title: Disable debug info in production on Angular 1.3+
featured_image: '/images/posts/html5-getusermedia.png'
date: 2015-09-21 13:17
category: angular
keywords: angular optimization production debug info debugEnabled front-end client html5 css3 javascript js andre loureiro
published: true
class: blog
excerpt: .

---

A very nice feature I discovered recently: you can disable some of the auxiliary stuff that Angular puts into our HTML by disabling the [debug info](https://docs.angularjs.org/guide/production). This can improve the cleanliness of our code and the performance of our web app.

By default, Angular inserts some classes on HTML elements that have bindings. For example, if you have a simple text with an interpolation like this:

{% highlight html %}
<p>Hello {% raw %}{{ myName }}!{% endraw %}</p>
{% endhighlight %}

When Angular compiles, it will become:

{% highlight html %}
<p class="ng-binding">Hello Andre!</p>
{% endhighlight %}

This information is needed by some tools like [Protractor](https://github.com/angular/protractor) and [Batarang](https://github.com/angular/batarang) to work properly, because they can get the references to Angular's bindings in the template. Angular also adds the `scope()` and `isolateScope()` methods to elements depending on the type of scope it has.

But once we have to build our app to production, we can disable this debug info on the config stage of our module:

{% highlight javascript %}
angular
  .module('AngularApp', [])
  .config(['$compileProvider', function($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
  }])
{% endhighlight %}

And if we need that info in production, Angular comes with a handy method to enable the debug info, just fire up a console and execute the global `angular.reloadWithDebugInfo()`. The browser will reload and all this references will be there to enable proper debugging.
