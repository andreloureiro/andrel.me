---

layout: post
title: Centralizar verticalmente com CSS Transform
date: 2014-01-15 18:00
category: css
published: true
tags: css trick alinhamento vertical align css transform
class: blog
excerpt: .

---

Vi no [zerosixthree](http://zerosixthree.se/vertical-align-anything-with-just-3-lines-of-css/) uma técnica bem interessante e simples para centralizar itens verticalmente. Ela usa transform2d, e como a propriedade é suportada por IE9+, pode ser aplicada tranquilamente. Acho que uma minoria de projetos ainda atende o IE8.

<!--readmore-->

```css
.center {
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}
```

Li comentários de um pessoal dizendo que não gosta desta técnica porque "parece um hack", e que ainda preferem utilizar a trinca `display: table / display: table-cell / vertical-align: middle`. Mas desde quando usar `display: table` não é _hack_, já que neste caso não estamos trabalhando com tabelas?! :)

<!--readmore-->

##The Sass way

E se você usa [Sass](http://sass-lang.com/), pode otimizar seu processo de desenvolvimento do CSS criando uma classe para extender no elemento que quiser centralizar.

No Sass, podemos [extender classe(s) dentro de classe(s)](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#extend). Mas se criarmos uma classe `.vertical-center` só para essa finalidade, ela será inútil se compilada para nosso arquivo CSS final pois não será usada em nenhum elemento.

Então, iremos usar o sinal `%` no lugar do `.` e assim diremos ao Sass que, na hora que ele compilar para CSS, não precisa manter esse código porque sozinho ele só irá aumentar o tamanho final do nosso arquivo. 

```scss
%vertical-center {
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}
```

Depois você adiciona ao cara que será centralizado:

```scss
.i-want-to-be-centered {
    @extend %vertical-center
}
```
E pronto! Elemento centralizado verticalmente!
