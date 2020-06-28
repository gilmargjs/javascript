const familia = ['gilmar','jois','gilmax','jefferson','jonas'];
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
  const somaMin = aulas1.reduce((acumulador, item, index ) => {
    console.log(acumulador,item)
    return acumulador + item;
},0 );
console.log(somaMin);


const buscarMaior = aulas1.reduce((anterior, atual) => {//verificar qual o numero maior ou menor.
  return anterior < atual ? atual : anterior ;
});
console.log(buscarMaior);

/*ou */
const buscarMaior1 = aulas1.reduce((anterior, atual) => {//verificar qual o numero maior ou menor.
if(anterior > atual)
return anterior;
else 
return atual;
});
console.log(buscarMaior1);