// function somar(n1, n2) {
//   return n1 + n2;
// }
// console.log(somar.name.toUpperCase());

// const carro = {
//   carro:'Ford',
//   ano: 2018,

//  }
// const carro1 = ['ford','nissan','toyota'];
// carro1.forEach((item) => {
//   console.log(item);
// });

// function Dom(seletor) {//function contrutora 
//   this.element = document.querySelector(seletor)//function construtora
// }

// Dom.prototype.ativo =  function(classe) {//atribuindo a functon ao metodo ativo criado.
//   this.element.classList.add(classe);//adicionando prototype chamada classe
// }

// const section = new Dom('section');// selecionando a section dentro do Dom no html.
// section.ativo('gilmar');//adicionando um nome a classe 'gilmar'
// console.log(section);
// const p = { element:document.querySelector('p')
// }
// section.ativo.call(p,'ativo');


// function ver(item){
//   item.innertext;
// console.log(item)

// };
// addEventListener('click',ver);

// const numeros = [
//   33, 532, 434, 56, 4
// ];

// const $ = document.querySelectorAll.bind('section');
// const carro = {
//   marca: 'Ford',
//   ano:2018,
//   acelerador:function(aceleracao, tempo) {
//     return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
//   }
// }
// console.log(carro);
// const Honda = {
//   marca:'Honda',
// }
// const aceleracaoHonda = carro.acelerador.bind(Honda);
// console.log(aceleracaoHonda(20, 230));
function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
  }
  //imc(80, 1.80); // retorna o imc
  //console.log(imc(80, 1.80)); // retorna o imc e undefined

  //Exercícios
//<section>
{/* <p>Lobo-cinzento (nome científico:Canis lupus) é uma espécie
de mamífero canídeo do gênero Canis. É um sobrevivente da Era
do Gelo, originário do Pleistoceno Superior, cerca de 300 mil
anos atrás. É o maior membro remanescente selvagem da família
canidae.</p>
<p>Os lobos-cinzentos são tipicamente predadores ápice nos
ecossistemas que ocupam. Embora não sejam tão adaptáveis à
presença humana como geralmente ocorre com as demais.</p>
<p>O peso e tamanho dos lobos variam muito em todo o mundo,
tendendo a aumentar proporcionalmente com a latitude.</p>
<p>Os lobos são capazes de percorrer longas distâncias com
uma velocidade média de 10 quilômetros por hora e são
conhecidos por.</p>
</section> */}
// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafo = document.querySelectorAll('p');
const novoArray = Array.prototype.reduce.call(paragrafo, (acumulador, item) => {//Array transforma uma node lita em array.
  return acumulador + item.innerText.length;//captura os itens do innerText e com o length busca os numeros de letras e soma.
},0);
console.log(novoArray);
console.log(paragrafo);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);//criado o elemento tag, depois ao chamar a função é possivel colocar a tag desejada.
  elemento.classList.add(classe);//classe adionado ao elemento será possivel adicionar a classe na ora da chamada da função.
  elemento.innerHTML = conteudo;//conteudo adicionadoa ao elemento, será possivél adiciona lo na chamada da função.
  return elemento
}
console.log(criarElemento('li','ativo','oi gente tudo bem'));


// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará
const h1Titulo = criarElemento.bind(null, 'h1','titulo');// criando uma nova função(é necessário passar o bind com null pra não dar erro.)
const cursojs = h1Titulo('curso de javascript');//colocando o valor dentro de h1
const cursohtml = h1Titulo('curso de html');//colocando o valor dentro de h1
console.log(cursojs, cursohtml);