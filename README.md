# Planets navigation
Projeto de um site que mostra os planetas que vão ser navegados por astronautas e o nome e função que ambos tem na nave.
<h3>Imagens do projeto:</h3>
<img src="https://github.com/sian19/Planets/blob/master/src/assets/home-img.jpg"/>
<img src="https://github.com/sian19/Planets/blob/master/src/assets/destination-img.jpg" />
<img src="https://github.com/sian19/Planets/blob/master/src/assets/crew.png" />
<img src="https://github.com/sian19/Planets-/blob/master/src/assets/technology-img.jpg" />

<p>O projeto consiste em um site que contém 4 páginas com as abas home, destination, crew e technology. Na página home se tem a apresentação do site. Na página destination se tem 
4 sub abas onde em cada uma se tem um determinado planeta com a sua descrição completa. Na página crew se tem 4 sub abas onde em cada uma mostra um astronauta e sua função na nave.Na página technology se tem 3 sub abas onde uma se mostra a nave e sua especificações, na segunda se mostra o local da decolagem da nave e na terceira se tem a capsula da nave.</p>
<br/>
<h3>Oque foi usado no desenvolvimento da aplicação:</h3>
<ul>
  <li>O projeto foi desenvolvido usando hooks para renderizar os componentes em tela.</li>
  <li>Foram usados para desenvolver o projeto contextAPI, Router e styled-components.</li>
  <li>Se criou um componente chamado AuthContext onde se tem estados e funções usadas para setar nos estados valores que são usados nos componentes da aplicação de forma global. Por
exemplo um estado com o nome de bullet que irá armazenar um valor de 0 á 3, onde em algum determinado lugar no código irá importar esse estado e a função que vai armazenar esse valor
nele. Dessa forma se consegue controlar oque irá aparecer para o usuário em tela dependendo do valor de bullet, que no caso do projeto será controlado qual imagem e texto irá aparecer
na tela do usuário se ele clicar em um determinado botão onde é chamada a função que armazenará esse dado de forma global.</li>
  <li>Para fazer com que o usuário navegue através das páginas se usou o react-router-dom e linkou cada rota em um href eo substituindo pelo link e dentro do link se tem um to onde dentro
dele se tem o nome da rota configurada, dessa forma ao usuário clicar no botão com o nome da página ele é redirecionado para a página determinada pela rota que está no link.</li>
  <li>Se utilizou o styled-components para estilizar alguns elementos como por exemplo uma imagem setando no styled-components o tamanho da imagem. Pois é muito importante se usar o 
styled-components em um projeto para evitar que outras partes do código sejam modificadas de forma indevida, assim o programador não corre o risco de estilizar um elemento html de forma 
acidental, pois usando styled-components se consegue estilizar cada html do código de forma individual.</li>
</ul>
<h3>Link do projeto:</h3>
<a href="https://planets-navigation.netlify.app/">clique aqui<a>
