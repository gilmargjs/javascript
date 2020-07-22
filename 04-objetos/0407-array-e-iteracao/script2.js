/*const familia = ['gilmar','jois','gilmax','jefferson','jonas'];
familia.forEach((item, index, array) => {
  console.log(item, index, array);
})
console.log(familia);

const numeros = [2, 3, 8, 10];
soma = 0
const numerosx3 = numeros.map(n => n * 3);
console.log(numerosx3);

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
  ]
/*
  const tempoAulas = aulas.map(item => item.min)

  const nomeAulas = item => item.nome;

  console.log(nomeAulas);
  console.log(tempoAulas);
*/


aulas1 = [10, 15, 30, 40]
  const somaMin = aulas1.reduce((acumulador, item, index ) => {//reduce está fazendo o loop e ao mesmo tempo somando os valores, é necessário fazer a chamada no final geralmente usa-se o '0'.
    console.log(acumulador,item)//passando o acumulador eo numero do index.
    return acumulador + item;//executando a soma.
},0 );
console.log(somaMin);


const buscarMaior = aulas1.reduce((anterior, atual) => {//verificar qual o numero maior ou menor.
  return anterior < atual ? atual : anterior ;
});
console.log(buscarMaior);

// ou
const buscarMaior1 = aulas1.reduce((anterior, atual) => {//verificar qual o numero maior ou menor.
if(anterior > atual)
return anterior;
else 
return atual;
});

console.log(buscarMaior1);

const meusNomes = [
  'Gilmar','Jois','Gilmax','Jonas','Jeeferson'
]
const nomeIgual = meusNomes.map((item) => {
  if (item === 'Jonas') {// faz o loop e quando encontra o nome jonas imprime a mensagem, enquanto não imprime escolha outro filho.
    console.log('Meu Filho Mais Novo');
  }
  else {
   console.log('escolha outro Filho');
  }
console.log(item);

});

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
  ]
  const puxaNomes = aulas.reduce((acumulador, item, index)=> {
    //console.log(aula.nome);
    console.log(acumulador, item); 
    acumulador[index] = item.nome;//coloca o index no acumulador obs: é necessariio passar o retorno.
    console.log(acumulador);
    return acumulador;// retorno da função.
  },{});// as chaves ou numero inicial é necessário para pegar o primeiro numero (index 0)
  
/*  const frutas = ['Banana', 'Pêra', 'Uva'];
  //some procura o primeiro true retorna e para.
  const temUva = frutas.some((fruta) => {
  return fruta === 'Uva';
  });console.log(temUva);
*/
  function maiorQue100(numero) {
    return numero > 100;
    }
    const numeros = [0, 43, 22, 88, 101, 2];
    const temMaior = numeros.some(maiorQue100);
    console.log(temMaior);//retorna true.

/*const frutas = ['Banana', 'Pêra', 'Uva', ''];
// False pois pelo menos uma fruta
// está vazia '', o que é um valor falsy
const arraysCheias = frutas.every((fruta) => {
return fruta; // false
});
console.log(arraysCheias)*/
const maiorQue3 = numeros.every(n => n >= 3);
console.log(maiorQue3);// se tem um pelo menos menor da false

const frutas = ['Banana', 'Pêra', 'Uva', 'Maçã'];
const buscaUva = frutas.findIndex((fruta) => {
return fruta === 'Uva';
}); //findindex retorna o numero do index.
console.log(buscaUva)

const numeros1 = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros1.find(x => x > 45);
console.log(buscaMaior45)//find retorna o valor pedido.