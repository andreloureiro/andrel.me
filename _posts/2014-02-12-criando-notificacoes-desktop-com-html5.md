---

layout: post
title: Criando notificações desktop com HTML5
date: 2014-02-12 19:10
category: html5
tags: html5 api notification
published: true
class: blog

---

É possível criar notificações no desktop com a API Notification do HTML5. A vantagem de usá-la em detrimento do `alert` é que conseguimos criar notificações ricas, com ícones, título e corpo de texto, orientação de escrita, etc.

<!--readmore-->

Você pode ver uma demo [aqui](http://andrel.me/labs/html5-notification) ou ver o código da demo no [Github](http://github.com/andreloureiro/html5-notification).

## Checando o suporte do browser

Começamos checando se o browser oferece suporte à API Notification:

{% highlight javascript %}
if (!("Nofification" in window)) {
    alert("Your browser doesn't support Notifications, but I brought this ooold alert for you :)")
}
{% endhighlight %}

Mas se o browser suportar, temos uma outra verificação a fazer: se o navegador já tem permissão para receber e transmitir as notificações.

Caso o browser já tenha permissão permanente para notificações, a propriedade `permission` terá o valor `"granted"`:

{% highlight javascript %}
else if (Notification.permission === 'granted') {}
{% endhighlight %}


Agora podemos criar uma notificação. Vamos deixá-la em branco por enquanto.

{% highlight javascript %}
else if (Notification.permission === 'granted') {
    var notification = new Notification()
}
{% endhighlight %}

Precisamos tratar o outro caso em que teremos que pedir autorização ao usuário para que possamos enviar uma notificação.

{% highlight javascript %}
else {
    Notification.requestPermission(function (permission) {})
}
{% endhighlight %}

![Notification Request Permission no Firefox](/images/posts/html5-notification-notification-requestpermission.png)

O usuário pode negar a autorização para notificações. Neste caso, a propriedade `permission` receberá o valor `"denied"` e então não faremos mais nada.

Então, pegamos o valor da resposta do usuário e atribuimos à propriedade `permission`, e se for `"granted"` (ou __permitida__), enviamos a notificação:

{% highlight javascript %}
else {
    Notification.requestPermission(function (permission) {

        if(!('permission' in Notification)) {
            Notification.permission = permission;
        }
        if (permission === "granted") {
            var notification = new Notification();
        }
    });
}
{% endhighlight %}

O tratamento do envio de notificações está feito!

## Configurando a notificação

Agora, vamos falar da notificação em si.

Instanciamos uma nova notificação da seguinte forma:

{% highlight javascript %}
var notification = new Notification(titulo, propriedades)
{% endhighlight %}

O primeiro parâmetro é o título da notificação. No segundo você pode configurar algumas propriedades, e você tem acesso a todas elas na [documentação no MDN](). As mais importantes para nós neste momento são:

- `body` : O texto que irá;
- `icon` : O ícone que poderá ser apresentado na notificação.

Então criamos nossa notificação assim:

{% highlight javascript %}
var notification = new Notification('Notification API', {
    icon: 'icon.png',
    body: 'This is a HTML5 Notification :)'
})
{% endhighlight %}

E o resultado no Chrome:

![HTML5 Notification no Chrome](/images/posts/html5-notification-chrome.png)

E Firefox:

![HTML5 Notification no Firefox](/images/posts/html5-notification-firefox.png)

No Chrome, a notificação ainda fica acessível na lista de notificações que ele implementa no sistema:

![Hub de notificações do Chrome](/images/posts/html5-notification-chrome-hub.png)

A API de notificações do HTML5 é suportada pelo __Chrome__, __Firefox__ e __Safari 7+__.

### Referências

- [Notifications - Web API Interfaces - MDN](https://developer.mozilla.org/en/docs/Web/API/notification)
- [W3C](http://www.w3.org/TR/notifications/)
- [CanIUse](http://caniuse.com/notifications)
