

console.log(Number.isNaN(NaN));//verifica se o conteudo é NAN.
console.log(Number.isInteger(10));
console.log(Number.isInteger(10.2));
console.log(Number.parseFloat(10.2));
console.log(Number.parseFloat('99,50'));
console.log(Number.parseFloat('100 reais'));
console.log(Number.parseFloat('R$ 100'));
console.log(Number.parseInt('99.50', 10));
console.log(Number.parseInt(5.4344345656, 10));
console.log(Number.parseInt('100 Reais', 10));//verifica se o numero é inteiro .
console.log(Number.parseFloat(23.49));// verifica se o numero é decimal ou seja depois do ponto

let preco = 10.49;
let preco1 = 10.49;

console.log(preco.toFixed());//arredonda o numero 
console.log(preco.toString());//tranf numero em string

valor = preco.toLocaleString('en-US', {style: 'currency', currency: 'USD'});//transformar numero para padrão de moeda 'brasil'.
valor1 = preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});//transformar numero para padrão de moeda 'EUA'.
console.log(valor1);
console.log(valor);
console.log(Math.PI);// = const Matematica = {PI:3.14}
console.log(Math.abs(5 -8));// transforma o valor negativo em positivo ex:5-8 = +3.
console.log(Math.ceil(4.2933));// arredonda o sempre para cima. ex: 4.2933 = 5 
console.log(Math.floor(4.999));//arredonda para baixo ex: 4.999 = 4
console.log(Math.round(5.4));//arredonda .5 vai para cima -.5 vai para baixo.
console.log(Math.max(5,3,8,45,79,6));//selciona o numero maior
console.log(Math.min(5,45,7,1,0,78));//selciona o numero menor.
console.log(Math.random());//selciona numeros aleatorios de 0 a 1.
console.log(Math.random()*10);//selciona numeros aleatorios de 0 a 10.
console.log(Math.floor(Math.random()*100));//selciona numeros aleatorios de 0 a 100, com o floor ele vai arredondar para baixo.

console.log(Math.floor(Math.random()*(100 - 10 + 1)) + 10);//selciona numeros aleatorios entre 10 e 100, com o floor ele vai arredondar para baixo.
console.log();


/* Exercícios */
// Retorne um número aleatório
// entre 1050 e 2000
const aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);
console.log(aleatorio);
// Retorne o maior número da lista abaixo
const  numeros = '4, 5, 20, 8, 9';
const arrayNumeros = numeros.split(', ')
const numerosMaximo = Math.max(...arrayNumeros)
console.log(numerosMaximo);
// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
let listaPrecos = ['R$ 59,99', ' R$ 100,222','R$ 230', 'r$ 200'];

 function limparPreco(preco) {
  preco = +preco.toUpperCase().replace('R$',' ').trim().replace(',','.');
  preco = +preco.toFixed(2);
  return preco;
}
let soma = 0;
listaPrecos.forEach((preco) =>{
  soma += limparPreco(preco);
})
console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'}))//ESTILO DE  MOEDA BRASILEIRA.
limparPreco(listaPrecos[1]);