// const numeros = [2, 5, 7, 1, 3, 9, 10, 100, 26, 82, 12];

// for (let index = 0; index < numeros.length; index += 1) {
//   console.log(numeros[index]);
// }

const tab = 17;
for (let index = 1; index <= 10; index += 1) {
  console.log(tab * index);
}

// bubblesort
const valores = [4, 6, 1, 2];

for (let index = 1; index < valores.length; index += 1) {
  console.log('Valor do index: ' + valores[index]);
  for (let secondIndex = 0; secondIndex < index ; secondIndex += 1) {
    console.log('Valo do segundo index: ' + valores[secondIndex]);
    if (valores[secondIndex] < valores[index]) {
      let auxiliar = valores[index];
      valores[index] = valores[secondIndex];
      valores[secondIndex] = auxiliar;
    }
  }
}

console.log(valores);