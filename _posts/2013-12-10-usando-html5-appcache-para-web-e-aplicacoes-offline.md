---

layout: post
title: Usando HTML5 AppCache para Web e aplicações offline
featured_image: '/images/posts/html5-appcache.jpg'
date: 2013-12-12 18:12
category: html5
keywords: desenvolvimento front-end client html5 css3 javascript js andre loureiro andrel anlo anlo_ rwd design responsivo HTML5 API offline AppCache mobile cache manifest
class: blog

---

Uma API do HTML5 que vem recebendo bastante atenção é a [AppCache](), que permite forçar com que o browser faça o download e armazene os arquivos que quisermos no cache do navegador.

O resultado é a otimização na economia de requests na próxima vez que o usuário precisar desse arquivo. Mas isso não quer dizer que você deve colocar o site inteiro no cache do browser, e sim o que for apenas necessário.

<!--readmore-->

## Use com parcimônia

Você deve conhecer bem o projeto que está trabalhando e saber do que o site ou aplicação precisa para definir os arquivos que irá precisar incluir no AppCache.

No meu caso, recebi um projeto em que o cliente iria apresentar alguns produtos numa exposição e queria deixar iPads em totens rodando uma aplicação com algumas características do produto em si.

O que logo veio à cabeça foi uma das maiores dificuldades nessas exposições: internet. Não sabiamos se o cliente iria ter uma rede WiFi no local, e também preferi não indicar para que eles alugassem iPads com 3G porque, convenhamos, não dá pra confiar na estabilidade do sinal das operadoras nacionais.

Então decidimos que a aplicação seria preparada para funcionar completamente offline. Assim, o cliente só precisaria utilizar a internet na primeira vez para que o aplicativo fosse baixado, e depois poderia desconectar que tudo continuaria funcionando.

## Conhecendo a API

Eu já sabia da existência da AppCache, mas ainda não havia usado, e então mergulhei no assunto. A API é muito completa e através dos seus eventos, temos acesso a vários estágios do processo de download. Nesse post, não vou abordar todos os eventos, mas no fim do post tem alguns links com bastante material bacana sobre a AppCache.

Depois de estudar as possibilidades da API, comecei a definir a interação que poderia oferecer ao usuário. Defini que iria desenvolver a aplicação em [AngularJS]() e como tinha bastante trabalho pela frente no aplicativo em si, e como quem daria suporte ao cliente no evento seria a sua equipe de TI, preparei interações bem simples.

## Suporte nos browsers atuais

No caso do projeto que mencionei, não precisei checar se o browser tinha suporte a AppCache porque eu sabia que a aplicação seria usada em iPads com iOS 6. Para a web, existe suporte em todas as versões recentes do Chrome, Firefox, Safari e Opera. no IE, a AppCache tem suporte a partir da versão 10.

## Declarando o arquivo manifest no HTML

Precisamos que o browser saiba quais arquivos queremos que seja baixado para o cache. Fazemos isso criando na raiz do projeto um arquivo _manifest_. Coloquei o nome de _offline.appcache_. Ele deve começar com este cabeçalho:

{% highlight text %}
CACHE MANIFEST
{% endhighlight %}

Depois disso, devemos colocar o path de cada arquivo para que o browser faça o download. Um cuidado que deve ser tomado é o de não errar o caminho de nenhum arquivo, porque conforme o navegador vai percorrendo os arquivos, caso um dos caminhos esteja errado, o browser para de carregar os arquivos e o processo quebra.

Temos ainda outros cabeçalhos que podemos usar. São eles __NETWORK__ e __FALLBACK__.

Abaixo do cabeçalho __NETWORK__ nós especificamos arquivos ou paths que precisam de conexão em todo acesso. Ou seja, iremos forçar uma conexão para esses arquivos ou subdiretórios.

O cabeçalho __FALLBACK__ serve para indicar um caminho para caso aconteça algum problema, por exemplo se não for possível uma conexão com o servidor, o usuário será encaminhado para a URL disposta abaixo desse cabeçalho. Segue exemplo de um arquivo _manifest_ completo:

{% highlight text %}
CACHE MANIFEST
# Este é um comentário, útil para especificar a data em que o manifest foi alterado pela última vez
# Por exemplo: v1 - 12/12/2013
app/app.js
app/controllers/acessoriosctrl.js
app/controllers/appctrl.js
app/controllers/carroctrl.js

NETWORK
# Arquivos que serão forçado a realizar uma conexão
app/network.html

FALLBACK
# URL de fallback para caso algum problema aconteça
/ fallback.html
{% endhighlight %}

Para o projeto em questão, criei um _offline.appcache_ bem simples, apenas com os caminhos dos arquivos que iriam para o cache:

{% highlight text %}
CACHE MANIFEST

app/app.js
app/controllers/acessoriosctrl.js
app/controllers/appctrl.js
app/controllers/carroctrl.js
app/controllers/coresctrl.js
app/controllers/fichactrl.js
app/controllers/galeriactrl.js
app/controllers/versoesctrl.js
app/min/app.min.js
favicon.ico
imagens/app/icon-ipad-retina.png
imagens/app/icon-ipad.png
imagens/carro/inicial/carro.png
{% endhighlight %}

No nosso caso, teremos que baixar o aplicativo completo, mas para um site comum, o indicado é que seja feito cache dos arquivos estáticos (arquivos CSS, Javascript e imagens).

## Eventos necessários para o aplicativo

Defini que o usuário pelo menos deveria saber o que estava acontecendo ao abrir o aplicativo. Ele tinha que saber se o aplicativo estava baixando conteúdo, e também deveria ser avisado caso o cache tivesse sido renovado (no caso de alguma alteração ou fix). Então só trabalhei com três eventos da AppCache: _downloading_, _cached_ e _updateready_

Antes de tudo, temos que pegar o evento _window.onload_ para executarmos as ações da AppCache antes de qualquer coisa.

{% highlight javascript %}
window.addEventListener('load', function (e) {

    // Aqui vamos tratar os eventos da AppCache

}, false)
{% endhighlight %}

### Downloading

Esse evento ocorre quando o browser está carregando o conteúdo que foi especificado no arquivo _manifest_. Enquanto o download está sendo feito, vamos avisar o usuário do que está acontecendo.

{% highlight javascript %}
window.addEventListener('load', function (e) {
    
    // Aqui vamos tratar os eventos da AppCache

    // Enquanto o browser está fazendo download do conteúdo
    window.applicationCache.addEventListener('downloading', function (e) {
        document.body.innerHTML = 'Baixando conteúdo ...';
    }, false);

}, false)
{% endhighlight %}

### Cached

Nesse momento, o browser já passou pelo evento _downloading_ e o conteúdo do arquivo _manifest_ já está no cache. Iremos usar este evento para deixar o usuário ciente de que o conteúdo foi baixado e que ele pode desconectar qualquer rede.

{% highlight javascript %}
window.addEventListener('load', function (e) {
    
    // Aqui vamos tratar os eventos da AppCache

    // Enquanto o browser está fazendo download do conteúdo
    window.applicationCache.addEventListener('downloading', function (e) {
        document.body.innerHTML = 'Baixando conteúdo ...';
    }, false);

    // O browser já baixou o conteúdo e está pronto para ser utilizado offline
    window.applicationCache.addEventListener('cached', function (e) {
        alert('O aplicativo foi baixado e está pronto para uso offline');
        window.location.reload(); // Para atualizar a página e o browser fazer uso do cache
    }, false);

}, false)
{% endhighlight %}

## Updateready

Aqui utilizamos o evento _updateready_ para o browser baixar novo conteúdo assim que estiver disponível. O browser checa o _status_ da AppCache e, caso o arquivo _manifest_ estiver com data de gravação diferente da anterior, ele irá substituir o cache inteiro com o novo conteúdo baixado. Caso queira forçar para que o browser faça um novo download, basta salvar o arquivo novamente.

{% highlight javascript %}
window.addEventListener('load', function (e) {
    
    // Aqui vamos tratar os eventos da AppCache

    // Enquanto o browser está fazendo download do conteúdo
    window.applicationCache.addEventListener('downloading', function (e) {
        document.body.innerHTML = 'Baixando conteúdo ...';
    }, false);

    // O browser já baixou o conteúdo e está pronto para ser utilizado offline
    window.applicationCache.addEventListener('cached', function (e) {
        alert('O aplicativo foi baixado e está pronto para uso offline');
        window.location.reload(); // Para atualizar a página e o browser fazer uso do cache
    }, false);

    // Verifica se existe uma atualização no arquivo manifest e faz o download
    window.applicationCache.addEventListener('updateready', function (e) {
        if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
            window.applicationCache.swapCache(); // Descarta o cache antigo e repõe com o novo
            alert('Uma atualização do aplicativo foi baixada e está pronta para uso offline');
            window.location.reload(); // Para atualizar a página e o browser fazer uso do novo cache
    }, false)

}, false)
{% endhighlight %}

Esta é a versão completa do script.

## Referências

- [MDN - Using the application cache](https://developer.mozilla.org/en/docs/HTML/Using_the_application_cache)
- [HTML5Rocks - A Beginner's Guide to Using the Application Cache](http://www.html5rocks.com/en/tutorials/appcache/beginner/)
- [A List Apart - Application Cache is a Douchebag](http://alistapart.com/article/application-cache-is-a-douchebag)

