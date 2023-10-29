<h1> Jason web token </h1>

<li> um acronomo JSON WEB TOKEN
<li>utilizando o json p/ se comunicar dos dado token
<li>e um recurso de autorizção e não autenticação
<li>apos a autenticação o token e enviado pelo sistema
<li>e com base no token verificamos oque o usuario pode ou nao fazer
<li> token e criptografado precisamo decodificar na parte do backend

<h2>Fluxo jwt</h2>

<li>o primeiro passo a autenticaçao,apos a combinação entre email/nome do
usuario e senha for dada como correta temos o segundo passo
<li>o token e enviado na resposta da requisição de login
<li>precisamo salvar o token,geralmente fica na localStorage
<li>o token precisa ser enviado em toda as requisição para que o
usuario consiga ter acesso aos recurso protegidor
<li>uma vez que a api nao possui vinculo com front, ojwt e re

<h2> Porque utilizar jwt </h2>
<li>O jwt tem uma vantagem de transmitir os dado do usuario por meio de token
<li> fazendo com que seja melhor do que Session para algumas coisa e situaçoes
<li>Utilização: Single sign on, comunicação entre microsserviços
<li>esta avordagem tbm segue padroes do RestFull, onde nao podemos
manter uma ligação entre a api e outra aplicaçoes
