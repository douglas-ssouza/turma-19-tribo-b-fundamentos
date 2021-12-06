// Escreva um programa que imprima a tabuada do 9 usando um loop for
// let nine = 9;
// for (let cont = 0; cont <= 10; cont += 1) {
//   console.log(nine * cont);
// }

// Escreva uma função que recebe um valor e imprima a sua tabuada
// function tabuada(x) {
//   for (let contador = 0; contador <= 10; contador += 1) {
//     console.log(x * contador);
//   }

//   return null;
// }
// tabuada(10);

// Escreva uma função que recebe um array de números e retorne a quantidade de números impares e números pares (considere 0 par)
// function paresImpares(numbers) {
//   let par = 0;
//   let impar = 0;
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       par += 1;
//     } else {
//       impar += 1;
//     }
//   }

//   let resposta = 'Número de ímpares: ' + impar + ' ' + 'e o Número de pares: ' + par;

//   return resposta;
// }
// console.log(paresImpares([2, 4, 6, 8]));
// console.log(paresImpares([1, 3, 5, 7, 9]));
// console.log(paresImpares([3, 6, 1, 3, 5, 9, 10, 12]));

// Escreva um função que recebe o salario de uma pessoa e o seu aumento em porcentagem e depois retorne o valor do novo salario
// function salario(sal, porcento) {
//   return sal + (sal * (porcento / 100));
// }
// console.log(salario(1000, 10));

// Escreva um função que verifica se um valor é igual ou maior do que zero retornando true ou menor do que zero retornando false
// function igualOuMaiordoQueZero(valor) {
//   return valor >= 0;
// }
// console.log(igualOuMaiordoQueZero(10));

// Escreva uma função que recebe um arrray e retorna true se encontrar um numero negativo e false caso contrario


// Escreva um função que recebe tres parametros (nome, sobrenome e idade) e retorne um objeto com essas tres chaves

// Escreva uma função que recebe um objeto e imprima na tela todas as suas chaves e valores no seguinte formate: '<chave>: <valor>'

// Escreva um função que recebe uma string e retorne o número de vogais encontradas nela

// Escreva um função que recebe um valor N e retorne, dentro de um array, todos o valores de 0 a N;

// Escreva um função que receba uma string e retorne um array com todos os valores numéricos da string
function numerosEmUmaString(string) {
  return string.match(/\d+/g);
}
console.log(numerosEmUmaString('Turma 19 - Tribo B - 2021'));
