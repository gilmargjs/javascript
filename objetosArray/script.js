//forEach

const carros = ['Ford', 'Fiat', 'Honda'];
carros.forEach((item, index, array) => {
  console.log(item, index, array);//
});

// Arrow Function

const li = document.querySelectorAll('li');
li.forEach((item) => item.classList.add('ativa'));//se for em uma unica linha não precisa de chaves.


//map

const novaArray = carros.map((item, index, array) => {
  console.log(item, index, array)
  return array
});
console.log(novaArray);

const newCarros = carros.map((item) => {
  const novoValor = 'carro' + item
});

//Arrow Functiom 
const numeros = [2, 4, 8, 10, 12, 14];
const numerosx3 = numeros.map(item => item * 3);
console.log(numerosx3);

/*const aulas = [
 {
 nome: 'HTML 1',
 min: 15
 },
 {
 nome: 'HTML 2',
 min: 10
 },
 {
 nome: 'CSS 1',
 min: 20
 },
 {
 nome: 'JS 1',
 min: 25
 },
 ]
*/
/*
const tempoAulas = aulas.map(aula => aula.min);
console.log(tempoAulas);

const nomeAulas = aula => aula.nome;//função anonima; é o mesmo que.
const nomeAulas2 = function(aula) {
  return aula.nome;// essa função retorna os nomes dentro do objeto de array aula.
}// também é o mesmo que.

const  nomeAulas3 = (aula) => {
return aula.nome;
}
const arrayNomeAulas = aulas.map(nomeAulas);
const arrayNomeAulas2 = aulas.map(nomeAulas2);
const arrayNomeAulas3 = aulas.map(nomeAulas3);
console.log(arrayNomeAulas);
console.log(arrayNomeAulas2);
console.log(arrayNomeAulas3);
//REDUCE

const aulasnum = [10, 25, 30];

const reduceAulas = aulasnum.reduce((acumulador, item) => {
  console.log(acumulador, item);
  return acumulador + item;
}, 0);
console.log(reduceAulas)

//verificar Numero Maior.


console.log(maiorNumero);

//outra forma .

const maiorNumero1 = numerosM.reduce((anterior, atual) => anterior > atual ? anterior : atual, 0)// expressão em uma unica linha.
console.log(maiorNumero1);*/

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
];

const listaAula = aulas.reduce((anterior, atual, index) => {//
  anterior[index] = atual.nome;
  return anterior;
}, {})
console.log(listaAula);

//Reduce Right

const frutas = ['Banana', 'Pera', '', undefined, null, 'Uva', 'Mamao', 0, 'Abacate'];
const frutasRight = frutas.reduceRight((acc, item) => acc + ' ' + item);//começa da direita pra esquerda
console.log(frutasRight)
// Reduce Left 
const frutasLeft = frutas.reduce((acc, item) => acc + ' ' + item);
console.log(frutasLeft);

//some

const temUva = frutas.some(item => item === 'Uva') //verifica se tem um valor true dentro da lista.
console.log(temUva);

//Every

const num = [10, 20, 6, 25]//verifica se tem um valor false dentro da lista.
const maiorque3 = num.every(item => item >= 6);
console.log(maiorque3);

//FindIndex

const indexUva = frutas.findIndex(item => item === 'Uva');// reorna o index do primeiro objeto verdadeiro que for achado.
console.log(indexUva);

//find

const indexUva1 = frutas.find(item => item === 'Uva');// reorna o item do primeiro objeto verdadeiro que for achado.ex:'uva'
console.log(indexUva1);

//Filter

const arrayFrutas = frutas.filter(item => item);//busca objetos true e coloca em uma nova array.
console.log(arrayFrutas);

const buscarmaior9 = num.filter(item => item > 9); //busca numeros maior que (no exemplo 9). 
console.log(buscarmaior9);

const maiorque15 = aulas.filter(item => item.min > 15);
console.log(maiorque15);