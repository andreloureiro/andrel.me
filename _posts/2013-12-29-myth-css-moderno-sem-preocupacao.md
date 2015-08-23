---

layout: post
title: Myth - CSS moderno sem preocupação
featured_image: '/images/posts/myth-css-the-way-it-was-imagined.png'
date: 2013-12-29 00:00
category: css
keywords: desenvolvimento front-end client html5 css3 javascript js andre loureiro andrel anlo anlo_ rwd design responsivo nodejs node myth variavel variaveis calc mobile
published: true
class: blog

---

Há alguns dias descobri o [Myth](http://www.myth.io), que é chamado no seu site de preprocessor mas que também pode ser entendido como um postprocessor.

<!--readmore-->

Hoje temos que ter muito cuidado ao escrever nosso CSS devido à inconsistência de compatibilidade de browsers. O [Can I Use](http://caniuse.com) com certeza é uma ferramenta indispensável dentro do workflow de muitos desenvolvedores front-end. O *Myth* vem para resolver dois problemas de uma vez:

<!--readmore-->

* __Adequar o suporte do seu código aos vários browsers disponíveis:__ o Myth lê todo o seu código CSS e inclui tudo que for necessário para que ele funcione em todos os browsers, desde que a propriedade ou função CSS tenha sido implementada para o browser em questão;
* __Utilizar o CSS do futuro, hoje:__ Com o Myth, podemos usar a sintaxe que está em implementação ou que ainda é apenas especificação. Assim, não perdemos tempo, e podemos aprender desde já.


## Instalação

A instalação é bem simples, já que o Myth está disponível como um package do NodeJS. Se você ainda não tem o NodeJS instalado na sua máquina, [baixe](http://nodejs.org/) direto no site dos caras e instale.

Após isso, instale o Myth pela linha de comando:

{% highlight bash %}
npm install -g myth
{% endhighlight %}


## Usando

Para começar, apenas escreva seu CSS. Você pode usar tranquilamente novas funções de CSS como [variáveis](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables), [cálculos matemáticos](https://developer.mozilla.org/en-US/docs/Web/CSS/calc), [manipulação de cores](https://github.com/segmentio/myth#color-manipulation) e [mais](https://github.com/segmentio/myth/wiki).

Criei um exemplo utilizando funções que o Myth já trata. Vamos chamá-lo de `input.css` :

{% highlight css %}
:root {
    var-color: rgba(240, 240, 240, 1);
    var-typo: 'Helvetica', Arial, sans-serif;
    var-typo-size: 1.2rem;
    var-wallpaper: url(/path-to-image/background.jpg);
}

p {
    font-family: var(typo);
    font-size: var(typo-size);
    color: var(color);
    width: calc(100% - 14rem);
}

div.gradient {
    background-image: linear-gradient(#222, #aaa);
}

div.background {
    background: var(wallpaper);
    filter: blur(3rem) grayscale(.5);
}

::placeholder {
    color: color(var(color) shade(10%));
}
{% endhighlight %}

E para fazer a mágica acontecer, basta utilizar a linha de comando:

{% highlight bash %}
myth input.css output.css
{% endhighlight %}

Na linha, o `input.css` é o meu arquivo original, e o `output.css` (ou qualquer nome que você queira) é o nome do arquivo que o Myth vai gerar para mim. E caso que você queira que o Myth observe qualquer alteração no seu arquivo e compile automaticamente, você pode usar a linha de comando:

{% highlight bash %}
myth --watch input.css output.css
{% endhighlight %}

O resultado do CSS pós-Myth fica assim:

{% highlight css %}
p {
  font-family: 'Helvetica', Arial, sans-serif;
  font-size: 1.2rem;
  color: rgba(240, 240, 240, 1);
  width: -webkit-calc(100% - 14rem);
  width: calc(100% - 14rem);
}

div.gradient {
  background-image: -webkit-gradient(linear, left top, left bottom, from(#222), to(#aaa));
  background-image: -webkit-linear-gradient(#222, #aaa);
  background-image: linear-gradient(#222, #aaa);
}

div.background {
  background: url(/path-to-image/background.jpg);
  -webkit-filter: blur(3rem) grayscale(.5);
  filter: blur(3rem) grayscale(.5);
}

::-webkit-input-placeholder {
  color: rgb(216, 216, 216);
}

::-moz-placeholder {
  color: rgb(216, 216, 216);
}

:-ms-input-placeholder {
  color: rgb(216, 216, 216);
}

::placeholder {
  color: rgb(216, 216, 216);
}
{% endhighlight %}

Como você pode ver, o Myth tratou as variáveis, alterações nas cores, cálculos e prefix-vendor no arquivo inicial e criou um novo arquivo totalmente compatível com os standards atuais. É uma ferramenta muito prática até mesmo para validarmos que não esquecemos nenhum prefixo antes de colocar o CSS em produção.

### Referências:
* [Myth - CSS the way it was imagined](http://www.myth.io/)
* [Myth no Github](https://github.com/segmentio/myth)
* [Can I Use](http://caniuse.com)
* [NodeJS](http://nodejs.org/)
* [MDN - Using CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)
* [MDN - CSS Calc](https://developer.mozilla.org/en-US/docs/Web/CSS/calc)
