/**
 * 5º Exercício
Utilizando o operador de rest/spread (...) realize as seguintes operações:
5.1 Rest
A partir do array: const arr = [1, 2, 3, 4, 5, 6], defina uma variável x que recebe a primeira
posição do vetor e outra variável y que recebe todo restante dos dados.
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]
5.2 Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:
// function soma...
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3
5.3 Spread
A partir do objeto e utilizando o operador spread:
const usuario = {
 nome: 'Diego',
 idade: 23,
 endereco: {
 cidade: 'Rio do Sul',
 uf: 'SC',
 pais: 'Brasil',
 }
};
Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel.
5.4 Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.
 */
//5.1
const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

//5.2
function soma(...params) {
  return params.reduce((a, b) => a + b);
};
console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2));

//5.3
const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
  cidade: 'Rio do Sul',
  uf: 'SC',
  pais: 'Brasil',
  }
 };

const usuario2 = {...usuario, nome: 'Gabriel'};

console.log(usuario2)

//5.4
const usuario3 = {
  ...usuario, 
  endereco: {...usuario.endereco, cidade:  'Lontras'}};

console.log(usuario3)