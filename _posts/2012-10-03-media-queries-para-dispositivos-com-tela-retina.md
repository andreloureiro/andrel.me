---

layout: post
title: Media Queries para dispositivos retina
date: 2012-10-03 17:48
category: RWD
published: false

---

<p>Atualmente, quem é que acessa sites só quando está no computador? Pouquíssima gente, principalmente depois da popularização dos smartphones. Com essa facilidade às mãos durante a maior parte do dia, é impossível que alguém não dê uma olhada no Facebook, ou entre em portais de conteúdo para ver as últimas notícias, e por aí vai.</p>

<p>O conceito de <a href='http://www.alistapart.com/articles/responsive-web-design/'>Responsive Web Design</a> trouxe ao desenvolvimento web uma grande ferramenta para que os sites sejam melhor entregues a qualquer dispositivo que o acesse, seja um smartphone, tablet, ou até mesmo smart TVs. Um exemplo simples de Media Queries para os dispositivos mais comuns seria assim:</p>

{% highlight css linenos %}
@media screen and (max-width: 768px) {

/* Conteúdo do código para telas com até 768px de largura */

}

@media screen and (max-width: 480px) {

/* Conteúdo do código para telas com até 480px de largura */

}

@media screen and (max-width: 320px) {

/* Conteúdo do código para telas com até 320px de largura */

}
{% endhighlight %}

<p>Como disse, esse é um exemplo bem simplório. Existem diversas possibilidades para configuração das Media Queries.</p>

<p>Tudo seguia tranquilo, até a Apple lançar o iPhone 4 e sua tela Retina, com maior definição através de uma densidade maior de pixels aplicada à mesma largura e altura da tela do iPhone 3GS.</p>

<p><img alt='iPhone 3GS x iPhone 4' src='/img/posts/iphone-3gs-x-4.jpg' /></p>

<p>Os dois aparelhos possuem a tela com o mesmo tamanho físico de 3.5 polegadas, porém o iPhone 3GS tem o display com densidade de 165ppi (pixels per inch / pixels por polegada), resultando numa resolução de tela de 320px por 480px. Enquanto isso, o iPhone 4 possui tela com densidade de 330ppi, o que leva o aparelho à resolução de 640px por 960px. Ou seja, os dois aparelhos tem o mesmo tamanho de display, porém a resolução do iPhone 4 tem duas vezes a resolução do iPhone 3GS.</p>

<p>Além do iPhone 4, já temos novos dispositivos com Retina display, como o iPhone 5 (com tela de 4&#8217;, chegando a 640px por 1136px), o Galaxy Nexus (com tela de 4.65&#8217; e resolução de 720px por 1280px), New iPad (1536px por 2048px), Macbooks Pro, entre outros.</p>

<p>Nas Media Queries, já temos uma maneira de servir um site ajustado aos dispositivos com tela Retina. Além da largura da tela, temos também que definir o <code>device-pixel-ratio</code> do dispositivo que vai utilizar aquela Media Query. E, infelizmente, como ainda é uma prática não consolidada, temos que aplicar os diversos prefixos para que cada browser consiga entender e renderizar o que queremos.</p>

<p>Com base neste <a href='https://gist.github.com/3828790'>Gist</a> do <a href='http://css-tricks.com/'>Chris Coyier</a>, temos um exemplo de como declarar três Media Queries para dispositivos Retina, dividindo entre telas pequenas, médias e grandes:</p>

{% highlight css linenos %}
@media only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 320px),
    only screen and ( min-moz-device-pixel-ratio: 2) and (min-width: 320px),
    only screen and ( -o-min-device-pixel-ratio: 2/1) and (min-width: 320px), only screen and ( min-device-pixel-ratio: 2) and (min-width: 320px), only screen and ( min-resolution: 192dpi) and (min-width: 320px), only screen and ( min-resolution: 2dppx) and (min-width: 320px) {

/* Seu CSS para telas Retina pequenas */

}

@media only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 700px),
    only screen and ( min-moz-device-pixel-ratio: 2) and (min-width: 700px), only screen and ( -o-min-device-pixel-ratio: 2/1) and (min-width: 700px), only screen and ( min-device-pixel-ratio: 2) and (min-width: 700px), only screen and ( min-resolution: 192dpi) and (min-width: 700px), only screen and ( min-resolution: 2dppx) and (min-width: 700px) {

/* Seu CSS para telas Retina médias */

}

@media only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1300px),
    only screen and ( min-moz-device-pixel-ratio: 2) and (min-width: 1300px), only screen and ( -o-min-device-pixel-ratio: 2/1) and (min-width: 1300px), only screen and ( min-device-pixel-ratio: 2) and (min-width: 1300px), only screen and ( min-resolution: 192dpi) and (min-width: 1300px), only screen and ( min-resolution: 2dppx) and (min-width: 1300px) {

/* Seu CSS para telas Retina grandes */

}
{% endhighlight %}

<p>Para mais informações sobre Media Queries, dê uma olhada na <a href='http://www.w3.org/TR/css3-mediaqueries/'>documentação da W3C</a>.</p>